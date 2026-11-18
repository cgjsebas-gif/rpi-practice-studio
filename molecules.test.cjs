const fs = require("node:fs"),
  vm = require("node:vm"),
  assert = require("node:assert/strict");
const c = { console };
c.window = c;
vm.createContext(c);
for (const f of ["openchemlib.js", "molecules.js", "engine.js"])
  vm.runInContext(fs.readFileSync(__dirname + "/" + f, "utf8"), c);
const M = c.MoleculeStudio,
  E = vm.runInContext("StudyEngine", c);
const q = {
  kind: "molecule",
  products: [
    { label: "A", smiles: "C=C(Cl)CCC" },
    { label: "B", smiles: "CC(Cl)(Cl)CCC" },
  ],
};
const encode = (...s) => M.encode(s.map((smiles) => ({ smiles })));
assert.equal(
  E.grade(q, encode("CCCC(Cl)=C", "CCCC(Cl)(Cl)C")).status,
  "correct",
);
assert.equal(
  E.grade(q, encode("C=C(Cl)CCC", "CC(Cl)C(Cl)CC")).status,
  "incorrect",
);
assert.equal(E.grade(q, encode("C=C(Cl)CCC", "")).status, "invalid");
assert.equal(E.grade(q, "not a molecule").status, "invalid");
assert.equal(E.grade(q, encode("C(C)(C)(C)(C)C", "CC")).status, "invalid");
const stereo = {
  kind: "molecule",
  products: [{ label: "alkene", smiles: "C/C=C/C", stereo: true }],
};
assert.equal(E.grade(stereo, encode("C/C=C/C")).status, "correct");
assert.equal(E.grade(stereo, encode("C/C=C\\C")).status, "incorrect");
assert.equal(E.grade(stereo, encode("CC=CC")).status, "incorrect");
const raw = E.defaults();
raw.drafts.x = { answer: encode("C/C=C/C"), moleculeScratch: encode("CCO") };
const clean = E.sanitize(raw, ["x"], []);
assert.equal(clean.drafts.x.moleculeScratch, raw.drafts.x.moleculeScratch);
const s = { ids: ["x"], responses: [], started: 1, deadline: 10000 };
assert(E.submitExam(s, 0, { answer: encode("C/C=C/C") }, 2));
assert(!E.submitExam(s, 0, { answer: encode("CC") }, 3));
assert.equal(E.finishExam(s, [{ id: "x", ...stereo }], 4)[0].correct, true);
console.log(
  "PASS molecular equivalence, regiochemistry, stereochemistry, validation, persistence and exam locks",
);
vm.runInContext(
  fs.readFileSync(__dirname + "/questions.js", "utf8") +
    fs.readFileSync(__dirname + "/content.js", "utf8") +
    ";this.bank=bank;this.hubs=hubs",
  c,
);
const added = c.bank.filter((p) => p.id.startsWith("v5-"));
assert.equal(added.length, 16);
assert.equal(added.filter((p) => p.kind === "molecule").length, 12);
for (const p of added) {
  assert(c.hubs.find((h) => h.id === p.hub).problems.includes(p.id));
  if (p.kind !== "molecule") continue;
  const raw = M.encode(p.products.map((x) => ({ smiles: x.smiles })));
  assert.equal(E.grade(p, raw).status, "correct", p.id);
  assert.equal(
    E.grade(p, encode("CC")).status,
    p.products.length === 1 ? "incorrect" : "invalid",
    p.id,
  );
  for (const s of p.products) assert(M.svg(s.smiles).includes("<svg"), p.id);
}
assert.equal(c.bank.length, 276);
console.log(
  "PASS 16 original challenges, all target structures valid and topic-linked",
);
