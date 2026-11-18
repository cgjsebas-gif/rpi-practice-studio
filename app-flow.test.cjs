const fs = require("node:fs"),
  vm = require("node:vm"),
  assert = require("node:assert/strict");
const store = {},
  root = { innerHTML: "" },
  listeners = {};
const c = {
  console,
  URLSearchParams,
  Date,
  Math,
  Set,
  Map,
  JSON,
  Intl,
  CustomEvent: class {},
  Event: class {},
  confirm: () => true,
  setInterval: () => 0,
  setTimeout: () => 0,
  cancelAnimationFrame() {},
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  location: { hash: "" },
  history: {
    pushState(_, __, hash) {
      c.location.hash = hash;
    },
    replaceState(_, __, hash) {
      c.location.hash = hash;
    },
  },
  localStorage: {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => (store[k] = v),
  },
  document: {
    documentElement: { dataset: {} },
    getElementById: (id) => (id === "app" ? root : null),
    querySelector: () => null,
  },
  addEventListener: (name, fn) => {
    (listeners[name] ??= []).push(fn);
  },
  dispatchEvent() {},
  scrollTo() {},
};
c.window = c;
vm.createContext(c);
for (const file of [
  "storage.js",
  "questions.js",
  "content.js",
  "scope.js",
  "openchemlib.js",
  "molecules.js",
  "engine.js",
  "diagrams.js",
  "orbit-core.js",
  "orbit-calendar.js",
  "review-missions.js",
  "orbitarium.js",
  "router.js",
  "backup.js",
  "app.js",
])
  vm.runInContext(fs.readFileSync(__dirname + "/" + file, "utf8"), c, {
    filename: file,
  });
assert(!root.innerHTML.includes("needs a moment"), "Boot succeeds");
c.start(["q0"], "Practice exam", 30);
c.setDraft("answer", "4");
c.checkAnswer({ preventDefault() {} });
const oldStarted = c.state.session.started;
c.start(["q1"], "Guided practice");
assert.equal(
  c.state.session.started,
  oldStarted,
  "Replacement waits for confirmation",
);
c.confirmSessionStart();
assert(
  c.state.attempts.some(
    (a) => a.id === "q0" && a.sessionStarted === oldStarted,
  ),
  "Replacing an exam preserves locked submission",
);
c.finish();
const completed = JSON.stringify(c.state.session);
c.location.hash = "#/course/calculus-1/practice?question=q1";
listeners.popstate.forEach((fn) => fn());
assert.equal(
  JSON.stringify(c.state.session),
  completed,
  "Back retains completed session",
);
c.location.hash = "#/summary";
listeners.popstate.forEach((fn) => fn());
assert.equal(
  JSON.stringify(c.state.session),
  completed,
  "Forward restores same summary",
);
c.location.hash = "#/course/calculus-1/practice?question=q26";
listeners.popstate.forEach((fn) => fn());
assert.equal(
  c.state.route.page,
  "notfound",
  "Archived question links are unavailable",
);
console.log(
  "PASS browser-controller boot, exam replacement, history preservation, archived deep links",
);
assert.equal(
  typeof c.assessSession,
  "function",
  "Completed rubric self-assessment exists",
);
c.start(["q0"], "Practice exam", 30);
c.setDraft("answer", "4");
c.checkAnswer({ preventDefault() {} });
c.finish();
c.state.session.responses[0].status = "self";
c.state.attempts[c.state.attempts.length - 1].status = "self";
c.assessSession(0, true);
assert.equal(c.state.session.responses[0].status, "correct");
assert.equal(c.state.session.responses[0].selfAssessed, true);
console.log("PASS completed rubric assessment updates diagnostics");
// Valid exam locks earn activity on the local submission date, before final scoring.
const RealDate = Date;
let clock = new RealDate(2027, 0, 1, 23, 59).getTime();
c.Date = class extends RealDate {
  constructor(...a) {
    super(...(a.length ? a : [clock]));
  }
  static now() {
    return clock;
  }
};
c.start(["q1", "q2", "q3", "q6", "q7"], "Practice exam", 30);
for (let i = 0; i < 5; i++) {
  c.state.session.index = i;
  c.choose(c.state.session.ids[i]);
  c.setDraft("answer", "123");
  c.checkAnswer({ preventDefault() {} });
}
assert.equal(
  c.StudyConsistency.snapshot().activityHistory["2027-01-01"]?.problemsSolved,
  5,
  "Locking valid exam entries credits their actual local day",
);
assert.equal(
  c.state.session.responses[0].status,
  "submitted",
  "No early correctness feedback",
);
clock = new RealDate(2027, 0, 2, 0, 1).getTime();
c.finish();
assert.equal(
  c.StudyConsistency.snapshot().activityHistory["2027-01-02"],
  undefined,
  "Finishing after midnight does not move or duplicate XP",
);
c.start(["q1", "q2", "q3", "q6", "q7"], "Practice exam", 30);
for (let i = 0; i < 5; i++) {
  c.state.session.index = i;
  c.choose(c.state.session.ids[i]);
  c.setDraft("answer", "garbage");
  c.checkAnswer({ preventDefault() {} });
}
c.finish();
assert.equal(
  c.StudyConsistency.snapshot().activityHistory["2027-01-02"],
  undefined,
  "Invalid numeric entries do not qualify",
);
const pill = { outerHTML: "" };
c.document.querySelector = (selector) =>
  selector === ".streak-pill" ? pill : null;
assert(
  listeners["study:rewards"]?.length,
  "Reward updates have a live widget listener",
);
listeners["study:rewards"].forEach((fn) => fn());
assert(
  pill.outerHTML.includes("Goal pending") || pill.outerHTML.includes("At risk"),
);
console.log(
  "PASS exam reward validity, local submission day and live reward widgets",
);
// Midnight and tab visibility refresh do not replace the study form or draft.
assert(listeners.visibilitychange?.length);
const draftBefore = JSON.stringify(c.state.drafts);
clock = new RealDate(2027, 0, 3, 0, 1).getTime();
listeners.visibilitychange.forEach((fn) => fn());
assert.equal(JSON.stringify(c.state.drafts), draftBefore);
assert(pill.outerHTML.includes("Start today"));
// Exercise the real reference controller through a small DOM boundary.
const drawerNodes = { button: {}, textarea: {} },
  drawerListeners = {};
let removed = false,
  shown = false,
  refocused = false;
const drawer = {
  innerHTML: "",
  setAttribute() {},
  querySelector: (s) => drawerNodes[s],
  addEventListener: (n, f) => (drawerListeners[n] = f),
  showModal() {
    shown = true;
  },
  close() {
    drawerListeners.close();
  },
  remove() {
    removed = true;
  },
};
c.document.createElement = () => drawer;
c.document.body = { append() {} };
c.document.activeElement = {
  focus() {
    refocused = true;
  },
};
c.start(["v4-1"], "Practice exam", 30);
c.setDraft("answer", "A");
c.checkAnswer({ preventDefault() {} });
c.setConfidence("Guessed");
assert.equal(c.state.session.responses[0].status, "submitted");
assert.equal(c.state.session.responses[0].confidence, "Guessed");
c.openQuickReference();
assert(shown);
assert(drawer.innerHTML.includes("Private scratchpad"));
assert(!drawer.innerHTML.includes("Correct choice:"));
drawerNodes.textarea.oninput({
  target: { value: "Check domain first; keep this reasoning." },
});
assert.equal(
  c.state.drafts["v4-1"].scratchpad,
  "Check domain first; keep this reasoning.",
);
assert.equal(c.state.session.responses[0].answer, "A");
drawer.close();
assert(removed && refocused);
c.finish();
assert(
  c.missedIds().includes("v4-1"),
  "A guessed correct exam answer stays review-worthy",
);
console.log(
  "PASS locked-exam confidence, reference controller, scratchpad and focus restoration",
);

c.finish();
c.start(["v5-chem-1"], "Practice exam", 30);
c.setDraft("answer", c.MoleculeStudio.encode([{ smiles: "C=C(Cl)CCC(C)C" }]));
c.checkAnswer({ preventDefault() {} });
assert.notEqual(
  c.state.session.responses[0]?.status,
  "submitted",
  "Partial structures cannot lock",
);
c.setDraft(
  "answer",
  c.MoleculeStudio.encode([
    { smiles: "C=C(Cl)CCC(C)C" },
    { smiles: "CC(Cl)(Cl)CCC(C)C" },
  ]),
);
c.checkAnswer({ preventDefault() {} });
assert.equal(c.state.session.responses[0].status, "submitted");
const locked = c.state.session.responses[0].answer;
c.setDraft("answer", "overwrite");
assert.equal(c.state.session.responses[0].answer, locked);
c.finish();
assert.equal(c.state.session.responses[0].status, "correct");
console.log(
  "PASS controller molecular partial validation, immutable exam submission and final grading",
);
