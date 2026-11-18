/* Local molecular drawing, depiction and grading. OpenChemLib is BSD-3-Clause. */
window.MoleculeStudio = (() => {
  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const MAX = 18000;
  function decode(raw) {
    try {
      if (typeof raw !== "string" || raw.length > MAX) return [];
      const data = JSON.parse(raw);
      if (
        data.version !== 1 ||
        !Array.isArray(data.structures) ||
        data.structures.length > 4
      )
        return [];
      return data.structures.map((s) => ({
        smiles: typeof s?.smiles === "string" ? s.smiles.slice(0, 1500) : "",
        molfile: typeof s?.molfile === "string" ? s.molfile.slice(0, 7000) : "",
      }));
    } catch {
      return [];
    }
  }
  function encode(structures) {
    const raw = JSON.stringify({ version: 1, structures });
    if (raw.length > MAX)
      throw Error(
        "This drawing is too large. Keep each answer to the requested molecule.",
      );
    return raw;
  }
  function parse(smiles) {
    if (!smiles?.trim() || smiles.length > 1500)
      throw Error("Draw a molecule first.");
    if (typeof OCL === "undefined")
      throw Error(
        "The molecule tools did not load. Reload this page to retry.",
      );
    let mol;
    try {
      mol = OCL.Molecule.fromSmiles(smiles);
    } catch {
      throw Error(
        "Could not read this structure. Check SMILES syntax, ring numbers and atom valences.",
      );
    }
    if (!mol.getAllAtoms() || mol.getAllAtoms() > 100)
      throw Error("Use a molecule with 1–100 atoms.");
    try {
      mol.validate();
    } catch {
      throw Error(
        "An atom has too many bonds or inconsistent stereochemistry. Check bond orders, charges and wedges.",
      );
    }
    return mol;
  }
  function grade(p, raw) {
    try {
      const structures = decode(raw);
      if (
        structures.length !== p.products.length ||
        structures.some((s) => !s.smiles.trim())
      )
        return {
          status: "invalid",
          message: "Draw and save every requested product before checking.",
        };
      const matches = structures.map((s, i) => {
        const a = parse(s.smiles),
          b = parse(p.products[i].smiles);
        if (!p.products[i].stereo) {
          a.stripStereoInformation();
          b.stripStereoInformation();
        }
        return a.getIDCode() === b.getIDCode();
      });
      return {
        status: matches.every(Boolean) ? "correct" : "incorrect",
        message:
          matches
            .map(
              (ok, i) =>
                `${p.products[i].label}: ${ok ? "structure matches" : "recheck bonds, substituent positions" + (p.products[i].stereo ? " and stereochemistry" : "")}`,
            )
            .join(". ") +
          ". Structure checking does not grade your written explanation. The worked solution stays hidden.",
      };
    } catch {
      return {
        status: "invalid",
        message:
          "A structure could not be checked. Reopen the drawing and check atom valence, bond orders and SMILES syntax. If the editor is unavailable, reload the page.",
      };
    }
  }
  function svg(smiles, label = "Molecular structure") {
    try {
      return `<div class="molecule-view" role="img" aria-label="${esc(label)}">${parse(smiles).toSVG(500, 220, undefined, {})}</div>`;
    } catch {
      return `<p class="small">Structure preview unavailable. ${esc(label)}</p>`;
    }
  }
  function section(p, d, locked = false) {
    if (p.subject !== "Organic Chemistry I") return "";
    const molecular = p.kind === "molecule",
      structures = decode(molecular ? d.answer : d.moleculeScratch);
    const slots = molecular
      ? p.products
      : [{ label: "Molecule scratch drawing" }];
    return `<section class="molecule-workbench" aria-label="Molecule workbench"><h2>${molecular ? "Draw your products" : "Molecule scratch workspace"}</h2><p class="small">${molecular ? "Save a drawing in every slot, then check your answer below." : "Optional drawing for your reasoning; the written answer below is still required."} Draw bonds and atoms, or enter SMILES. ${molecular ? "Only slots marked “stereochemistry checked” require wedges or E/Z." : ""}</p>${p.reactant ? `<figure>${svg(p.reactant, p.reactantLabel || "Starting material")}<figcaption>${esc(p.reactantLabel || "Starting material")}</figcaption></figure>` : ""}<div class="molecule-slots">${slots.map((slot, i) => `<article><h3>${esc(slot.label)}</h3><p class="small">${slot.stereo ? "Stereochemistry checked" : "Connectivity only · stereochemistry not graded"}</p>${structures[i]?.smiles ? svg(structures[i].smiles, `${slot.label}: your saved drawing`) : '<div class="molecule-empty">No drawing saved yet</div>'}<button type="button" ${locked ? "disabled" : ""} id="molecule-slot-${i}" onclick="openMolecule(${i})">${structures[i]?.smiles ? "Edit" : "Draw"} ${esc(slot.label)}</button></article>`).join("")}</div><p class="small muted">Drawings save locally when you choose “Save drawing”. 2D structure editor powered by OpenChemLib.</p></section>`;
  }
  function solutions(p) {
    return p.kind === "molecule"
      ? p.products
          .map(
            (x) =>
              `<h4>${esc(x.label)}</h4>${svg(x.smiles, x.label + " worked answer")}`,
          )
          .join("")
      : "";
  }
  function open(p, d, slot, onSave) {
    if (document.querySelector("#molecule-dialog")) return;
    const field = p.kind === "molecule" ? "answer" : "moleculeScratch",
      rows = decode(d[field]);
    const title =
      p.kind === "molecule"
        ? p.products[slot].label
        : "Molecule scratch drawing";
    const previous = document.activeElement,
      dialog = document.createElement("dialog");
    dialog.id = "molecule-dialog";
    dialog.className = "molecule-dialog";
    dialog.setAttribute("aria-labelledby", "molecule-title");
    dialog.innerHTML = `<div class="molecule-dialog-head"><h2 id="molecule-title">${esc(title)}</h2><button type="button" id="molecule-cancel">Cancel</button></div><p id="molecule-instructions">Use the bond tools to draw a carbon skeleton; choose an element to replace an atom. Use wedge bonds for specified stereochemistry. Undo and erase are in the toolbar. You can also enter SMILES below using the keyboard.</p><div id="molecule-editor" aria-label="Molecular drawing canvas" aria-describedby="molecule-instructions"></div><label for="molecule-smiles">SMILES structure (keyboard alternative)</label><div class="molecule-smiles-row"><input id="molecule-smiles" autocomplete="off" spellcheck="false" placeholder="For example: CCO" value="${esc(rows[slot]?.smiles || "")}"><button type="button" id="molecule-load">Load SMILES</button></div><p class="small">Loading replaces the canvas in this dialog. Save commits the drawing; Cancel keeps the previous saved version.</p><p id="molecule-status" role="status" aria-live="polite"></p><div class="actions"><button type="button" id="molecule-save" class="primary">Save drawing</button><button type="button" id="molecule-clear">Clear canvas</button></div>`;
    document.body.append(dialog);
    dialog.showModal();
    const status = dialog.querySelector("#molecule-status"),
      input = dialog.querySelector("#molecule-smiles");
    let editor = null,
      dirtyText = false;
    const close = () => {
      editor?.destroy();
      dialog.remove();
      if (previous?.isConnected) previous.focus();
      else document.getElementById(`molecule-slot-${slot}`)?.focus();
    };
    dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      close();
    });
    dialog.querySelector("#molecule-cancel").onclick = close;
    try {
      if (typeof OCL === "undefined")
        throw Error(
          "Molecule editor unavailable. Reload the page and try again.",
        );
      editor = new OCL.CanvasEditor(dialog.querySelector("#molecule-editor"), {
        initialMode: "molecule",
      });
      if (rows[slot]?.smiles) {
        let restored = parse(rows[slot].smiles);
        try {
          const positioned = OCL.Molecule.fromMolfile(rows[slot].molfile || "");
          positioned.validate();
          if (positioned.getIDCode() === restored.getIDCode())
            restored = positioned;
        } catch {
          /* Rebuild safe coordinates from SMILES when a backup molfile is damaged. */
        }
        editor.setMolecule(restored);
      }
      editor.setOnChangeListener(({ type }) => {
        if (type === "molecule") {
          try {
            input.value = editor.getMolecule().toIsomericSmiles();
            dirtyText = false;
            status.textContent = "Unsaved drawing changes.";
          } catch {
            status.textContent = "Check atom valence and bonds.";
          }
        }
      });
    } catch (e) {
      status.textContent = e.message;
    }
    input.oninput = () => {
      dirtyText = true;
      status.textContent = "SMILES changes will be loaded when saved.";
    };
    const load = () => {
      const mol = parse(input.value);
      editor?.setMolecule(mol);
      dirtyText = false;
      status.textContent = "Structure loaded. Choose Save drawing to keep it.";
      return mol;
    };
    dialog.querySelector("#molecule-load").onclick = () => {
      try {
        load();
      } catch (e) {
        status.textContent = e.message;
      }
    };
    dialog.querySelector("#molecule-clear").onclick = () => {
      editor?.clearAll();
      input.value = "";
      dirtyText = true;
      status.textContent =
        "Canvas cleared. Cancel to keep the previous saved drawing.";
    };
    dialog.querySelector("#molecule-save").onclick = () => {
      try {
        const mol =
          dirtyText || !editor ? parse(input.value) : editor.getMolecule();
        const smiles = mol.toIsomericSmiles();
        parse(smiles);
        while (rows.length <= slot) rows.push({ smiles: "" });
        rows[slot] = { smiles, molfile: mol.toMolfile() };
        const value = encode(rows);
        onSave(field, value);
        close();
      } catch (e) {
        status.textContent =
          e.message || "This structure could not be saved. Check the drawing.";
      }
    };
    input.focus();
  }
  function savedAnswer(raw) {
    return decode(raw)
      .map((s, i) =>
        s.smiles
          ? `<div>Structure ${i + 1}${svg(s.smiles, "Saved structure " + (i + 1))}</div>`
          : "",
      )
      .join("");
  }
  return { encode, decode, grade, section, solutions, open, svg, savedAnswer };
})();
