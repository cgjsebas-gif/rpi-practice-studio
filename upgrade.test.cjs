const fs = require("fs"),
  vm = require("vm"),
  assert = require("node:assert/strict");
function storage(seed = {}, denied = false) {
  const mem = { ...seed },
    c = {
      console,
      Date,
      window: { dispatchEvent() {} },
      CustomEvent: class {},
    };
  Object.defineProperty(c, "localStorage", {
    get() {
      if (denied) throw Error("denied");
      return {
        getItem: (k) => mem[k] ?? null,
        setItem: (k, v) => (mem[k] = v),
      };
    },
  });
  vm.createContext(c);
  if (fs.existsSync(__dirname + "/storage.js"))
    vm.runInContext(fs.readFileSync(__dirname + "/storage.js", "utf8"), c);
  return { s: c.window.StudioStorage, mem };
}
let x = storage({ "rpi-studio-v2": '{"attempts":[]}' });
assert.ok(x.s, "Storage utility exists");
assert.equal(x.s.getItem("rpi-studio-v2"), '{"attempts":[]}');
x.s.setItem("rpi-studio-theme", "dark");
assert.equal(
  JSON.parse(x.mem["rpi-studio-v3"]).domains["rpi-studio-theme"],
  "dark",
);
assert.equal(x.mem["rpi-studio-v2"], '{"attempts":[]}');
x = storage({ "rpi-studio-v3": "broken" });
assert(x.s.status());
assert.throws(() => x.s.setItem("rpi-studio-theme", "dark"));
assert.equal(x.mem["rpi-studio-v3"], "broken");
assert.equal(x.s.recovery()["rpi-studio-v3"], "broken");
x = storage({ "rpi-studio-v3": JSON.stringify({ version: 99, domains: {} }) });
assert.throws(() => x.s.setItem("rpi-studio-theme", "dark"));
x = storage({}, true);
x.s.setItem("rpi-studio-theme", "light");
assert.equal(x.s.getItem("rpi-studio-theme"), "light");
assert(x.s.status());
x = storage();
x.s.setItem("rpi-studio-theme", "dark");
const before = x.s.snapshot();
assert.throws(() => x.s.replace({ version: 3, domains: { evil: "x" } }));
assert.deepEqual(x.s.snapshot(), before);
x.s.replace({ version: 3, domains: { "rpi-studio-theme": "light" } });
assert.equal(x.s.getItem("rpi-studio-theme"), "light");
assert(x.mem["rpi-studio-recovery"]);
console.log(
  "PASS storage migration, corruption, denial, future schema, atomic restore",
);
const rc = { window: {}, URLSearchParams };
vm.createContext(rc);
if (fs.existsSync(__dirname + "/router.js"))
  vm.runInContext(fs.readFileSync(__dirname + "/router.js", "utf8"), rc);
const R = rc.window.StudioRouter;
assert.ok(R, "Router exists");
const route = {
  page: "hub",
  id: "limits",
  course: "calculus-1",
  mode: "learn",
};
assert.equal(R.encode(route), "#/course/calculus-1/learn?topic=limits");
assert.equal(R.decode(R.encode(route)).id, "limits");
assert.equal(
  R.decode("#/course/physics-1/practice?question=q1").question,
  "q1",
);
assert.equal(R.decode("#/nonsense").page, "notfound");
assert.equal(R.decode("#content"), null);
console.log(
  "PASS route roundtrip, question deep links, invalid route, skip link",
);
const ec = {};
vm.createContext(ec);
vm.runInContext(
  fs.readFileSync(__dirname + "/engine.js", "utf8") + ";this.E=StudyEngine",
  ec,
);
const E = ec.E;
assert.equal(typeof E.submitExam, "function", "Exam submission engine exists");
const questions = [
  { id: "a", kind: "number", value: 2, units: "", objective: "Differentiate" },
  { id: "b", kind: "rubric", objective: "Explain" },
];
const session = {
  ids: ["a", "b"],
  responses: {},
  started: 100,
  deadline: 1000,
  completed: false,
};
assert.equal(
  E.submitExam(session, 0, { answer: "2", work: "steps" }, 200),
  true,
);
assert.equal(session.responses[0].status, "submitted");
assert.equal(E.submitExam(session, 0, { answer: "9" }, 300), false);
assert.equal(session.responses[0].answer, "2");
assert.equal(E.submitExam(session, 1, { answer: "explanation" }, 400), true);
const attempts = E.finishExam(session, questions, 1000);
assert.equal(attempts[0].status, "correct");
assert.equal(attempts[1].status, "self");
assert.equal(E.finishExam(session, questions, 1001).length, 0);
assert.equal(E.submitExam(session, 1, { answer: "x" }, 1001), false);
assert.equal(
  E.submitExam(
    { ids: ["a"], responses: {}, deadline: 10 },
    0,
    { answer: "2" },
    11,
  ),
  false,
);
const restored = E.sanitize(
  {
    ...E.defaults(),
    session: {
      ...session,
      completed: false,
      index: 0,
      responses: {
        0: { status: "submitted", answer: "2", work: "work", units: "" },
      },
    },
  },
  ["a", "b"],
  [],
);
assert.equal(restored.session.responses[0].answer, "2");
assert.equal(restored.session.responses[0].status, "submitted");
assert.equal(
  E.mastery(
    [
      { id: "a", correct: false, status: "incorrect" },
      { id: "a", correct: true, status: "correct" },
    ],
    ["a", "b"],
  ).correct,
  1,
);
assert.equal(
  E.needsReview(
    [
      { id: "a", correct: false, status: "incorrect" },
      { id: "a", correct: true, status: "correct" },
    ],
    ["a"],
  ).length,
  0,
);
console.log(
  "PASS exam locking, delayed scoring, rubric pending, expiry, restore, latest performance",
);
const bc = {
  window: {},
  console,
  Date,
  JSON,
  StudioStorage: x.s,
  StudyEngine: E,
  bank: questions,
  archivedBank: [],
  hubs: [],
  archivedHubs: [],
};
vm.createContext(bc);
vm.runInContext(fs.readFileSync(__dirname + "/orbit-core.js", "utf8"), bc);
bc.OrbitCore = bc.window.OrbitCore;
if (fs.existsSync(__dirname + "/backup.js"))
  vm.runInContext(fs.readFileSync(__dirname + "/backup.js", "utf8"), bc);
assert.ok(bc.window.StudioBackup, "Unified backup validator exists");
assert.throws(() =>
  bc.window.StudioBackup.validate({ version: 55, domains: {} }),
);
assert.throws(() =>
  bc.window.StudioBackup.validate({
    version: 3,
    domains: {
      "rpi-orbitarium-v1": '{"version":1,"planets":[],"assignments":"bad"}',
    },
  }),
);
const backup = bc.window.StudioBackup.validate({
  version: 2,
  state: E.defaults(),
});
assert(backup.domains["rpi-studio-v2"]);
console.log("PASS backup validation and legacy progress import");
const mc = { window: {}, Date, StudyEngine: E };
vm.createContext(mc);
if (fs.existsSync(__dirname + "/review-missions.js"))
  vm.runInContext(
    fs.readFileSync(__dirname + "/review-missions.js", "utf8"),
    mc,
  );
assert.ok(mc.window.ReviewMissions, "Review missions exist");
const M = mc.window.ReviewMissions,
  q = [{ id: "a", hub: "limits", subject: "Calculus I", objective: "Limit" }],
  bad = [{ id: "a", correct: false, status: "incorrect" }];
const m = M.generate(bad, q, "2026-11-10");
assert.equal(m.length, 1);
assert.equal(m[0].completed, false);
assert.equal(m[0].source, "review");
assert.equal(m[0].id, M.generate(bad, q, "2026-11-10")[0].id);
assert.notEqual(m[0].id, M.generate(bad, q, "2026-11-11")[0].id);
assert.equal(
  M.generate(
    [...bad, { id: "a", correct: true, status: "correct" }],
    q,
    "2026-11-10",
  ).length,
  0,
);
console.log(
  "PASS daily quest identity, pending status and latest-miss selection",
);
for (const domains of [17, "bad", true, []]) {
  const raw = JSON.stringify({ version: 3, domains });
  const bad = storage({ "rpi-studio-v3": raw });
  assert.equal(bad.s.isBlocked(), true, "Malformed domains must block writes");
  assert.throws(() => bad.s.setItem("rpi-studio-theme", "dark"));
  assert.equal(bad.mem["rpi-studio-v3"], raw);
}
for (const theme of ["constructor", "__proto__", "toString"]) {
  const planet = bc.OrbitCore.normalize({
    id: "unsafe-theme",
    title: "Homework",
    completed: true,
    theme,
  });
  assert.doesNotThrow(
    () => bc.OrbitCore.sprite(planet),
    "Imported theme must render safely",
  );
}
console.log(
  "PASS malformed envelope preservation and inherited theme normalization",
);
assert.equal(typeof E.reviewDue, "function", "Spaced review due dates exist");
const recent = [
  { id: "a", correct: true, status: "correct", at: "2026-11-10T12:00:00Z" },
];
assert.equal(
  E.reviewDue(recent, ["a"], Date.parse("2026-11-11T12:00:00Z")).length,
  0,
);
assert.deepEqual(
  Array.from(E.reviewDue(recent, ["a"], Date.parse("2026-11-13T12:00:00Z"))),
  ["a"],
);
assert.equal(
  M.generate(
    bad,
    [
      ...q,
      {
        id: "b",
        hub: "limits",
        subject: "Calculus I",
        objective: "Continuity",
      },
    ],
    "2026-11-10",
  ).length,
  1,
);
const separate = M.generate(
  [...bad, { id: "b", correct: false, status: "incorrect" }],
  [
    ...q,
    { id: "b", hub: "limits", subject: "Calculus I", objective: "Continuity" },
  ],
  "2026-11-10",
);
assert.equal(
  separate.length,
  2,
  "Separate objectives produce separate missions",
);
console.log("PASS spaced review due dates and objective-level quests");
assert.throws(
  () => E.sanitize({ ...E.defaults(), version: 99 }, ["a"], []),
  "Unknown progress schemas rejected",
);
assert.equal(
  E.sanitize(
    {
      ...E.defaults(),
      attempts: [{ id: "a", answer: "2", correct: true, at: "2026-11-10" }],
    },
    ["a"],
    [],
  ).attempts[0].status,
  "correct",
  "Legacy assessed attempts gain explicit status",
);
