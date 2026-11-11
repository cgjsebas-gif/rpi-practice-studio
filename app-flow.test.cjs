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
