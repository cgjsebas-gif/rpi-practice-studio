/* Opaque legacy IDs preserve backup records, without retired educational content. */
const archivedBank = Array.from({ length: 6 }, (_, i) => ({
  id: "q" + (26 + i),
  title: "Archived problem",
  subject: "Archived",
}));
const archivedHubs = [];

/* Authored learning objectives; not a claim of instructor exam coverage. */
const scopeObjectives = Object.fromEntries(
  hubs.map((h) => [
    h.id,
    {
      title: h.title,
      objectives: bank
        .filter((p) => p.hub === h.id)
        .map((p) => ({ id: p.id, label: p.objective })),
    },
  ]),
);
