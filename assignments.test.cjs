const fs = require("fs"),
  vm = require("vm"),
  assert = require("assert");
let nodes = {},
  stored = null;
const context = {
  window: { addEventListener() {} },
  matchMedia: () => ({ matches: true }),
  StudioStorage: { getItem: () => stored, setItem: (k, v) => (stored = v) },
  document: { getElementById: (id) => nodes[id] },
  cancelAnimationFrame() {},
  Date,
  console,
};
vm.createContext(context);
vm.runInContext(fs.readFileSync("orbit-core.js", "utf8"), context);
context.OrbitCore = context.window.OrbitCore;
vm.runInContext(fs.readFileSync("orbitarium.js", "utf8"), context);
nodes["orbit-dialog"] = {
  showModal() {},
  set innerHTML(v) {
    for (const id of [
      "google-connect",
      "uplink-status",
      "google-client",
      "google-calendar",
      "google-from",
      "google-to",
      "calendar-candidates",
      "assignment-search",
    ])
      nodes[id] = { value: "" };
    nodes["google-client"].value = "test.apps.googleusercontent.com";
    nodes["google-calendar"].value = "test";
    nodes["google-from"].value = "2026-11-01";
    nodes["google-to"].value = "2026-12-01";
  },
};
context.OrbitCalendar = {
  connect: async () => {},
  events: async () => [
    {
      id: "a",
      summary: "[ASSIGNMENT] Ch 7 Easy Questions",
      start: { dateTime: "2026-11-12T04:59:00Z" },
    },
    {
      id: "b",
      summary: "[DEADLINE] <img onerror=alert(1)>",
      start: { date: "2026-11-13" },
    },
  ],
};
(async () => {
  context.window.Orbitarium.syncForm();
  await nodes["google-connect"].onclick();
  assert(
    nodes["calendar-candidates"].innerHTML.includes("Ch 7 Easy Questions"),
  );
  assert(
    nodes["calendar-candidates"].innerHTML.includes("Nov 11, 2026, 11:59 PM"),
  );
  assert(nodes["calendar-candidates"].innerHTML.includes("&lt;img"));
  nodes["assignment-search"].value = "Ch 7";
  context.window.Orbitarium.calendarResults();
  assert(!nodes["calendar-candidates"].innerHTML.includes("&lt;img"));
  const o = context.window.Orbitarium;
  o.toggleAssignment(0);
  assert.equal(JSON.parse(stored).planets.length, 1);
  const planet = JSON.parse(stored).planets[0];
  o.toggleAssignment(0);
  assert.equal(JSON.parse(stored).planets.length, 0);
  await nodes["google-connect"].onclick();
  assert.equal(JSON.parse(stored).planets.length, 0);
  o.toggleAssignment(0);
  assert.equal(JSON.parse(stored).planets[0].theme, planet.theme);
  const types = new Set(
    Array.from(
      { length: 50 },
      (_, i) =>
        context.OrbitCore.normalize({
          id: String(i),
          title: "Physics homework",
          completed: true,
        }).theme,
    ),
  );
  assert(types.size > 8);
  console.log(
    "PASS dates, safe rendering, search, completion reversal, repeat sync, design restoration and planet variety",
  );
})();
