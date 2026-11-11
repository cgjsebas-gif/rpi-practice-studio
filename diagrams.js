function diagram(q) {
  if (!q.diagram) return "";
  let type = q.diagram,
    content = "",
    line = (x1, y1, x2, y2) =>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--diagram-ink)" stroke-width="2"/>`,
    txt = (x, y, t) =>
      `<text x="${x}" y="${y}" fill="var(--diagram-ink)" text-anchor="middle" font-size="15">${t}</text>`,
    arrow = (x1, y1, x2, y2) =>
      `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--diagram-ink)" stroke-width="2" marker-end="url(#arr)"/>`;
  if (["force", "friction"].includes(type)) {
    content = `<rect x="180" y="65" width="65" height="65" rx="5" fill="var(--diagram-fill)" stroke="var(--diagram-ink)"/>${line(60, 132, 370, 132)}${txt(212, 102, type === "force" ? "4 kg" : "5 kg")}${arrow(245, 95, 340, 95)}${txt(305, 80, type === "force" ? "12 N" : "20 N")}${arrow(210, 65, 210, 24)}${txt(228, 30, "N")}${arrow(210, 130, 210, 165)}${txt(235, 165, "mg")}`;
    if (type === "friction")
      content += arrow(180, 95, 90, 95) + txt(128, 80, "5 N");
  } else if (type === "motion")
    content =
      line(45, 135, 380, 135) +
      `<rect x="75" y="89" width="55" height="35" rx="5" fill="var(--diagram-fill)"/>` +
      arrow(145, 105, 310, 105) +
      txt(230, 80, "a = 2 m/s²") +
      txt(210, 163, "+x →");
  else if (type === "vertical")
    content =
      arrow(210, 135, 210, 40) +
      txt(285, 65, "v₀ = 19.6 m/s") +
      arrow(105, 55, 105, 140) +
      txt(75, 95, "g") +
      `<circle cx="210" cy="140" r="10" fill="var(--diagram-accent)"/>`;
  else if (type === "hill")
    content =
      `<path d="M60 45 Q150 45 210 130 T380 145" fill="none" stroke="var(--diagram-ink)" stroke-width="3"/>` +
      line(60, 50, 60, 145) +
      txt(105, 110, "h = 5 m") +
      `<circle cx="70" cy="32" r="10" fill="var(--diagram-accent)"/>`;
  else if (type === "collision")
    content =
      `<rect x="70" y="80" width="70" height="45" fill="var(--diagram-fill)"/><rect x="270" y="80" width="60" height="45" fill="var(--diagram-fill)"/>` +
      txt(105, 108, "2 kg") +
      txt(300, 108, "1 kg") +
      arrow(150, 102, 235, 102) +
      txt(190, 78, "3 m/s") +
      txt(300, 150, "at rest");
  else if (type.startsWith("alkene")) {
    let z = type === "alkeneZ";
    content =
      line(165, 85, 265, 85) +
      line(165, 95, 265, 95) +
      line(165, 90, 125, 50) +
      line(165, 90, 125, 135) +
      line(265, 90, 305, 50) +
      line(265, 90, 305, 135) +
      txt(110, 40, "CH₃") +
      txt(110, 155, "H") +
      txt(320, 40, z ? "CH₃" : "H") +
      txt(320, 155, z ? "H" : "CH₃");
  } else if (type.startsWith("rs")) {
    content =
      line(215, 90, 215, 35) +
      line(215, 90, 290, 125) +
      line(215, 90, 140, 125) +
      txt(215, 25, "1") +
      txt(312, 140, "2") +
      txt(118, 140, "3") +
      txt(215, 95, "C*") +
      txt(
        215,
        172,
        type === "rs"
          ? "4 points away (behind plane)"
          : "4 points toward you (out of plane)",
      );
  } else {
    let labels = {
      ester: "CH₃–C(=O)–O–CH₂–CH₃",
      ketone: "CH₃–C(=O)–CH₃",
      branch: "CH₃–CH(CH₃)–CH₂–OH",
      ethanol: "CH₃–CH₂–OH",
      chiral: "CH₃–CH(OH)–CH₂–CH₃",
      achiral: "CH₃–CH(OH)–CH₃",
    };
    content =
      txt(215, 90, labels[type] || "") +
      txt(215, 125, "Condensed structural formula");
  }
  return `<div class="diagram"><svg viewBox="0 0 430 185" role="img" aria-label="${esc(q.prompt)}"><defs><marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="var(--diagram-ink)"/></marker></defs>${content}</svg></div>`;
}
const oldDiagram = diagram;
function visual(p) {
  if (!p.diagram) return "";
  if (!["tank", "balance", "velocity", "reaction"].includes(p.diagram))
    return oldDiagram(p);
  const line = (x1, y1, x2, y2) =>
      `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="currentColor" stroke-width="2"/>`,
    text = (x, y, t) =>
      `<text x="${x}" y="${y}" text-anchor="middle" fill="currentColor" font-size="13">${t}</text>`;
  let s = "";
  if (p.diagram === "balance" || p.diagram === "tank")
    s = `<rect x="160" y="35" width="130" height="110" fill="none" stroke="currentColor" stroke-dasharray="6 4"/><rect x="175" y="80" width="100" height="50" fill="currentColor" opacity=".13"/>${line(40, 60, 160, 60)}${text(150, 64, "→")}${line(290, 120, 390, 120)}${text(385, 124, "→")}${text(90, 40, p.diagram === "balance" ? "ṁin = 5 kg/s" : "V̇in = 3 m³/min")}${text(340, 148, p.diagram === "balance" ? "ṁout = 3 kg/s" : "no outlet")}${text(225, 65, "System boundary")}${text(225, 170, p.diagram === "tank" ? "r = 2 m; uniform cross section" : "Inventory m(t)")}`;
  if (p.diagram === "velocity")
    s = `${line(55, 145, 390, 145)}${line(55, 145, 55, 20)}<path d="M55 115 L355 25 L355 145 L55 145Z" fill="currentColor" opacity=".1"/>${line(55, 115, 355, 25)}${text(30, 118, "2")}${text(30, 28, "8")}${text(55, 165, "0")}${text(355, 165, "3 s")}${text(165, 20, "Velocity (m/s)")}${text(225, 125, "Area = displacement")}`;
  if (p.diagram === "reaction")
    s = `${line(35, 155, 400, 155)}${line(35, 155, 35, 15)}<path d="M45 110 C80 110 85 40 110 40 S150 90 180 90 S235 10 265 10 S320 140 385 140" fill="none" stroke="currentColor" stroke-width="3"/>${text(70, 128, "R: 0")}${text(110, 30, "TS1: 40")}${text(180, 110, "I: 10")}${text(300, 27, "TS2: 60")}${text(365, 130, "P: −20")}${text(215, 178, "Reaction progress (schematic)")}${text(80, 16, "kJ/mol")}`;
  return `<figure class="diagram"><svg viewBox="0 0 430 190" role="img" aria-label="${esc(p.prompt)}">${s}</svg><figcaption>${p.diagram === "reaction" ? "Schematic energy levels. Read each activation barrier from its preceding minimum." : p.diagram === "velocity" ? "Linear velocity change; time in seconds." : "Dashed boundary identifies the modeled system. Not to scale."}</figcaption></figure>`;
}
