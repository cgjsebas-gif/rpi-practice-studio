const fs = require("fs"),
  vm = require("vm"),
  assert = require("assert");
let saved;
const entries = [
  {
    id: "lecture",
    title: "Lecture",
    source: "google",
    key: "lecture",
    completed: true,
  },
  {
    id: "hw",
    title: "[ASSIGNMENT] HW",
    source: "google",
    key: "hw",
    completed: true,
  },
  {
    id: "own",
    title: "Read textbook",
    source: "manual",
    key: "own",
    completed: true,
  },
];
const c = {
  window: { addEventListener() {} },
  matchMedia: () => ({ matches: true }),
  StudioStorage: {
    getItem: () =>
      JSON.stringify({ version: 1, planets: entries, assignments: entries }),
    setItem: (k, v) => (saved = JSON.parse(v)),
  },
  document: { getElementById: () => null },
  Date,
  console,
};
vm.createContext(c);
vm.runInContext(fs.readFileSync("orbit-core.js", "utf8"), c);
c.OrbitCore = c.window.OrbitCore;
vm.runInContext(fs.readFileSync("orbitarium.js", "utf8"), c);
assert.deepEqual(
  saved.assignments.map((a) => a.id),
  ["hw", "own"],
);
assert.deepEqual(
  saved.planets.map((a) => a.id),
  ["hw", "own"],
);
assert(saved.excludedCalendar.some((a) => a.id === "lecture"));
console.log(
  "PASS migration removes untagged imported assignments and planets, archives them, and preserves manual work",
);
