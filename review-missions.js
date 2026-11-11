window.ReviewMissions = (() => {
  function generate(
    attempts,
    questions,
    day = new Date().toLocaleDateString("en-CA"),
  ) {
    const missed = new Set(
      StudyEngine.reviewDue(
        attempts,
        questions.map((p) => p.id),
      ),
    );
    const groups = new Map();
    for (const question of questions) {
      if (!missed.has(question.id)) continue;
      const objective = question.objective || question.hub;
      const key = question.hub + ":" + encodeURIComponent(objective);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(question);
    }
    return [...groups].map(([hub, rows]) => ({
      id: `review:${day}:${hub}`,
      source: "review",
      calendar: "daily-review",
      title: `Review quest · ${rows[0].objective || rows[0].hub}`,
      topic: rows[0].subject,
      due: day,
      completed: false,
      questionIds: rows.map((p) => p.id).slice(0, 5),
      notes:
        "Revisit missed concepts. Complete the targeted session with all responses correct, or mark completion yourself.",
    }));
  }
  return { generate };
})();
