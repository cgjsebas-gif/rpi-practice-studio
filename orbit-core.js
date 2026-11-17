/* Pure data model: stable IDs, explicit completion, deterministic worlds. */
(function (root) {
  "use strict";
  const themes = {
    cyber: {
      name: "Cyber-grid",
      colors: ["#153448", "#29d6ce", "#c3fff2"],
      biome: "fractal cities and neon canyons",
      weather: "binary auroras",
      creature: "tiny abacus foxes",
    },
    ice: {
      name: "Ice",
      colors: ["#25456c", "#77cced", "#eefaff"],
      biome: "crystal glaciers and frozen observatories",
      weather: "diamond snow",
      creature: "magnetic snow-owls",
    },
    forest: {
      name: "Forest",
      colors: ["#193d36", "#54a86b", "#d3eda3"],
      biome: "ink-leaf forests and storybook wetlands",
      weather: "luminous pollen rain",
      creature: "bookmark dragons",
    },
    volcanic: {
      name: "Volcanic",
      colors: ["#51294a", "#f56a50", "#ffda81"],
      biome: "obsidian libraries and ember mountains",
      weather: "copper meteor showers",
      creature: "clockwork salamanders",
    },
    crystal: {
      name: "Crystal",
      colors: ["#432e69", "#ae83f2", "#f3c9ff"],
      biome: "chiral crystal gardens and violet seas",
      weather: "prismatic mist",
      creature: "six-winged molecular moths",
    },
  };
  Object.assign(themes, {
    ocean: {
      name: "Ocean",
      colors: ["#12345c", "#258bb4", "#a4f0e5"],
      biome: "tidal stairways and coral archives",
      weather: "warm silver rain",
      creature: "lantern manta rays",
    },
    desert: {
      name: "Desert",
      colors: ["#6b3850", "#d89958", "#ffe6ad"],
      biome: "glass dunes and buried libraries",
      weather: "golden sand spirals",
      creature: "six-legged dune foxes",
    },
    cloud: {
      name: "Cloud",
      colors: ["#514c8b", "#a5a4dd", "#fff0ee"],
      biome: "floating orchards and cloud bridges",
      weather: "lavender lightning",
      creature: "balloon jellyfish",
    },
    fungal: {
      name: "Mushroom",
      colors: ["#40324e", "#d577ac", "#ffe1a5"],
      biome: "giant mushroom groves and spore caverns",
      weather: "glowing spore showers",
      creature: "velvet beetle herds",
    },
    storm: {
      name: "Storm",
      colors: ["#293655", "#75899d", "#e0f99c"],
      biome: "thunder mesas and magnetic towers",
      weather: "green electrical storms",
      creature: "copper-winged ravens",
    },
    rose: {
      name: "Rose quartz",
      colors: ["#652f59", "#dc91ae", "#ffe4ed"],
      biome: "rose quartz valleys and mirror lakes",
      weather: "petal-shaped snow",
      creature: "crystal antler deer",
    },
    ringed: {
      name: "Ringed amber",
      colors: ["#5a3e30", "#d2a260", "#fff4be"],
      biome: "amber oceans beneath a ring of ancient moons",
      weather: "honey-colored auroras",
      creature: "orbit-skipping fireflies",
    },
  });
  function hash(s) {
    let n = 2166136261;
    for (const c of s) n = Math.imul(n ^ c.charCodeAt(0), 16777619);
    return n >>> 0;
  }
  function themeFor(s) {
    return /calc|math|algebra/i.test(s)
      ? "cyber"
      : /chem|molecul|orgo/i.test(s)
        ? "crystal"
        : /physics|science|lab/i.test(s)
          ? "ice"
          : /history/i.test(s)
            ? "volcanic"
            : "forest";
  }
  function eligible(e) {
    return /^\[(ASSIGNMENT|DEADLINE)\]/i.test(
      String(e.summary || e.title || ""),
    );
  }
  function completed(e) {
    return (
      e.status !== "cancelled" &&
      (e.completed === true ||
        e.status === "completed" ||
        e.extendedProperties?.private?.orbitariumCompleted === "true" ||
        /^\s*(\[DONE\]|✅)/i.test(e.summary || ""))
    );
  }
  // Date-only deadlines mean the end of that calendar day in the course timezone.
  // Date-only completion cannot prove lateness within the same day.
  function timing(p) {
    const due =
      p.dueAt || p.dueDate || p.due || p.start?.dateTime || p.start?.date;
    const submitted = p.submittedAt || p.completedAt;
    if (
      !due ||
      !submitted ||
      !Number.isFinite(Date.parse(due)) ||
      !Number.isFinite(Date.parse(submitted))
    )
      return { status: "unknown", hours: null };
    const dateOnly = (v) => /^\d{4}-\d{2}-\d{2}$/.test(v);
    const day = (v) =>
      dateOnly(v)
        ? v
        : new Intl.DateTimeFormat("en-CA", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(v));
    if (dateOnly(due) || dateOnly(submitted)) {
      const d = day(due),
        c = day(submitted);
      return {
        status: c > d ? "late" : c < d || dateOnly(due) ? "on-time" : "unknown",
        hours: null,
      };
    }
    const delta = Date.parse(submitted) - Date.parse(due);
    return {
      status: delta > 0 ? "late" : "on-time",
      hours: Math.max(0, delta / 3600000),
    };
  }
  function normalize(e, source = "manual", calendar = "primary") {
    if (
      !e ||
      typeof e !== "object" ||
      !completed(e) ||
      (source === "google" && !eligible(e))
    )
      return null;
    const title = String(e.title || e.summary || "")
      .trim()
      .slice(0, 180);
    if (!title) return null;
    const id = String(e.id || "").slice(0, 500);
    if (!id) return null;
    const topic = String(e.topic || e.course || "Independent study").slice(
      0,
      120,
    );
    const key = String(e.key || JSON.stringify([source, calendar, id]));
    const submitted = e.submittedAt || e.completedAt;
    const date =
      submitted && Number.isFinite(Date.parse(submitted)) ? submitted : null;
    const rawDue =
      e.dueAt || e.dueDate || e.due || e.start?.dateTime || e.start?.date;
    const dueAt = rawDue && Number.isFinite(Date.parse(rawDue)) ? rawDue : null;
    return {
      key,
      id,
      title,
      topic,
      source,
      calendar,
      completed: true,
      completedAt: date,
      dueAt,
      isLateSubmission: timing({ dueAt, completedAt: date }).status === "late",
      theme: Object.hasOwn(themes, e.theme)
        ? e.theme
        : Object.keys(themes)[hash(key) % Object.keys(themes).length],
      notes: String(e.notes || "").slice(0, 2000),
    };
  }
  function world(p) {
    const n = hash(p.key),
      t = themes[p.theme];
    return {
      name:
        ["Astra", "Luma", "Kepler", "Nori", "Vela", "Solara"][n % 6] +
        "-" +
        ((n % 997) + 1),
      seed: n,
      bio: `Forged by your work on “${p.title}”, this ${["quiet", "restless", "ancient", "newborn", "wandering", "luminous", "mysterious"][n % 7]} world shelters ${t.biome}. Its skies carry ${t.weather}; ${t.creature} preserve each hard-won discovery. ${["A day lasts eighteen Earth hours", "Two small moons keep watch over the horizon", "Its longest season is a year of twilight", "Every thousand nights the oceans glow", "Its mountains hum at sunrise", "A hidden valley records every passing comet", "Its north pole is a garden of frozen stars"][Math.floor(n / 7) % 7]}. Explorers call this the ${p.topic} archive.`,
    };
  }
  function merge(current, incoming) {
    const map = new Map(current.map((p) => [p.key, p]));
    for (const p of incoming) {
      if (p) map.set(p.key, { ...map.get(p.key), ...p });
    }
    return [...map.values()];
  }
  function sprite(p) {
    const t = themes[p.theme],
      seed = hash(p.key);
    let r = "";
    for (let y = 0; y < 20; y++)
      for (let x = 0; x < 20; x++) {
        if ((x - 9.5) ** 2 + (y - 9.5) ** 2 > 86) continue;
        const v = hash(seed + ":" + x + ":" + y);
        let color = t.colors[v % 11 < 3 ? 2 : x + y > 22 ? 0 : 1];
        if (seed % 4 === 0 && (y + Math.floor(x / 4)) % 5 === 0)
          color = t.colors[0];
        if (seed % 4 === 1 && (x - 7) ** 2 + (y - 7) ** 2 < 10)
          color = t.colors[2];
        if (p.theme === "cyber" && (x % 4 === 0 || y % 4 === 0))
          color = t.colors[0];
        r += `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`;
      }
    if (p.theme === "ringed" || seed % 5 === 0)
      r +=
        '<path d="M0 13 L4 11 M1 15 L18 7 L19 8 L2 16 Z" fill="' +
        t.colors[2] +
        '"/>';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" shape-rendering="crispEdges">${r}</svg>`;
  }
  root.OrbitCore = {
    themes,
    themeFor,
    hash,
    eligible,
    completed,
    normalize,
    timing,
    world,
    merge,
    sprite,
  };
})(typeof window === "undefined" ? globalThis : window);

/* Pure local-calendar consistency reducer. Stored events are the source of truth. */
(function (root) {
  const localDay = (date = new Date()) =>
    [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");
  function shiftDay(day, amount) {
    const [y, m, d] = day.split("-").map(Number);
    return localDay(new Date(y, m - 1, d + amount, 12));
  }
  function validDay(day) {
    return (
      typeof day === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(day) &&
      day >= "2000-01-01" &&
      day <= "2199-12-31" &&
      shiftDay(day, 0) === day
    );
  }
  function validate(value) {
    if (
      !value ||
      value.version !== 1 ||
      !Array.isArray(value.events) ||
      value.events.length > 100000
    )
      throw Error("Unsupported study rewards backup.");
    const seen = new Set();
    const events = [];
    for (const e of value.events) {
      if (
        !e ||
        typeof e.id !== "string" ||
        !e.id ||
        e.id.length > 1000 ||
        !validDay(e.day) ||
        !["problem", "mission"].includes(e.type) ||
        (e.type === "problem" && typeof e.questionId !== "string")
      )
        throw Error("Invalid study activity.");
      if (!seen.has(e.id)) {
        seen.add(e.id);
        events.push({
          id: e.id,
          day: e.day,
          type: e.type,
          ...(e.type === "problem" ? { questionId: e.questionId } : {}),
        });
      }
    }
    return { version: 1, events };
  }
  function derive(input, today = localDay()) {
    if (!validDay(today)) throw Error("Invalid local study date.");
    const events = validate({ version: 1, events: input }).events.filter(
        (e) => e.day <= today,
      ),
      history = {};
    const questionSets = new Map();
    for (const e of events) {
      const row = (history[e.day] ??= {
        problemsSolved: 0,
        missionsCompleted: 0,
        xpEarned: 0,
      });
      if (e.type === "mission") {
        row.missionsCompleted++;
        row.xpEarned += 30;
      } else {
        if (!questionSets.has(e.day)) questionSets.set(e.day, new Set());
        const ids = questionSets.get(e.day);
        if (!ids.has(e.questionId)) {
          ids.add(e.questionId);
          row.problemsSolved++;
          row.xpEarned += 10;
        }
      }
    }
    const days = Object.keys(history).sort();
    let streak = 0,
      longest = 0,
      shields = 0,
      genuineRun = 0,
      lastCompletedDate = null,
      previousProtected = false;
    const protectedDates = [],
      badges = [];
    const milestones = { 3: 25, 7: 75, 14: 150, 30: 400 };
    if (days.length)
      for (let day = days[0]; day <= today; day = shiftDay(day, 1)) {
        const row = history[day],
          qualifies =
            row && (row.problemsSolved >= 5 || row.missionsCompleted >= 1);
        if (qualifies) {
          streak++;
          genuineRun++;
          previousProtected = false;
          lastCompletedDate = day;
          longest = Math.max(longest, streak);
          if (genuineRun % 7 === 0) shields = Math.min(2, shields + 1);
          if (milestones[streak] && !badges.includes(streak)) {
            badges.push(streak);
            row.xpEarned += milestones[streak];
          }
        } else if (day < today) {
          genuineRun = 0;
          if (streak && shields && !previousProtected) {
            shields--;
            protectedDates.push(day);
            previousProtected = true;
          } else {
            streak = 0;
            previousProtected = false;
          }
        }
      }
    return {
      currentStreak: streak,
      longestStreak: longest,
      lastCompletedDate,
      activityHistory: history,
      streakShields: shields,
      protectedDates,
      badges,
      xpEarned: Object.values(history).reduce((sum, r) => sum + r.xpEarned, 0),
      activeToday:
        !!history[today] &&
        (history[today].problemsSolved >= 5 ||
          history[today].missionsCompleted >= 1),
    };
  }
  const storageKey = "rpi-study-rewards-v1";
  let cachedRaw,
    cachedDay,
    cachedResult,
    storageError = "";
  function read() {
    const raw = root.StudioStorage?.getItem(storageKey);
    return raw ? validate(JSON.parse(raw)) : { version: 1, events: [] };
  }
  function record(type, id, questionId) {
    try {
      const state = read(),
        key = type + ":" + id;
      if (state.events.some((e) => e.id === key)) return false;
      state.events.push({
        id: key,
        type,
        day: localDay(),
        ...(type === "problem" ? { questionId } : {}),
      });
      const next = validate(state);
      if (!root.StudioStorage?.setItem(storageKey, JSON.stringify(next)))
        throw Error("Rewards could not be saved. Export a recovery backup.");
      cachedRaw = undefined;
      storageError = "";
      root.dispatchEvent?.(new Event("study:rewards"));
      return true;
    } catch (error) {
      storageError =
        "Rewards need recovery. Your existing data has been preserved.";
      return false;
    }
  }
  function snapshot() {
    try {
      const raw = root.StudioStorage?.getItem(storageKey),
        day = localDay();
      if (raw !== cachedRaw || day !== cachedDay || !cachedResult) {
        cachedResult = derive(read().events, day);
        cachedRaw = raw;
        cachedDay = day;
      }
      return cachedResult;
    } catch (error) {
      storageError =
        "Rewards need recovery. Export your backup before restoring.";
      return derive([]);
    }
  }
  function pill() {
    const s = snapshot(),
      n = s.activityHistory[localDay()]?.problemsSolved || 0;
    return `<button class="streak-pill" onclick="go('orbitarium')" title="${s.activeToday ? "Daily goal complete" : "Complete one mission or five distinct questions today"}"><span aria-hidden="true">◉</span> ${s.currentStreak} day${s.currentStreak === 1 ? "" : "s"} <span>${s.activeToday ? "Active today" : `${Math.min(n, 5)}/5 · ${s.currentStreak ? "At risk" : "Start today"}`}</span><progress aria-label="Daily problem goal" max="5" value="${s.activeToday ? 5 : Math.min(n, 5)}"></progress></button>`;
  }
  let heatDays = 30;
  function card() {
    const s = snapshot(),
      today = localDay();
    const milestones = [
      [3, "Ignition"],
      [7, "Orbit stabilized"],
      [14, "Deep space"],
      [30, "Supernova"],
    ];
    const cells = Array.from({ length: heatDays }, (_, i) => {
      const day = shiftDay(today, i - heatDays + 1),
        r = s.activityHistory[day],
        done = r && (r.problemsSolved >= 5 || r.missionsCompleted),
        protectedDay = s.protectedDates.includes(day);
      const label = `${day}: ${r?.problemsSolved || 0} questions, ${r?.missionsCompleted || 0} missions${protectedDay ? ", shield used" : ""}`;
      return `<span tabindex="0" role="img" aria-label="${label}" title="${label}" class="heat-cell ${done ? "qualified" : r ? "partial" : protectedDay ? "protected" : ""}"></span>`;
    }).join("");
    return `<section class="consistency-card"><div><span class="orbit-kicker">DAILY STREAK & MILESTONES</span><h2>${s.currentStreak} day streak · ${s.xpEarned} XP</h2><p>${s.activeToday ? "Active today — goal complete." : `Complete one mission or five distinct questions today${s.currentStreak ? " to keep your streak" : ""}.`}</p><p>Best ${s.longestStreak} days · Shields ${s.streakShields}/2 · Last active ${s.lastCompletedDate || "not yet"}</p><p class="small">10 XP per distinct question/day · 30 XP per completed mission. Seven consecutive active days earn a shield for one missed day. Date edits never backdate rewards.</p>${storageError ? `<p role="status">${storageError}</p>` : ""}</div><div><div class="milestones">${milestones.map(([n, t]) => `<span class="milestone ${s.badges.includes(n) ? "earned" : ""}">${n} days · ${t}${s.badges.includes(n) ? " ✓" : ""}</span>`).join("")}</div><div class="actions"><button onclick="StudyConsistency.setHeatDays(30)" aria-pressed="${heatDays === 30}">30 days</button><button onclick="StudyConsistency.setHeatDays(84)" aria-pressed="${heatDays === 84}">12 weeks</button></div><div class="heatmap" aria-label="Local-date study activity">${cells}</div><p class="small">Filled: goal met · Dim: partial · Outlined: shield · Blank: no activity. Focus a cell for its details.</p></div></section>`;
  }
  function setHeatDays(n) {
    heatDays = n === 84 ? 84 : 30;
    root.render?.();
  }
  root.StudyConsistency = {
    localDay,
    shiftDay,
    validDay,
    validate,
    derive,
    record,
    snapshot,
    pill,
    card,
    setHeatDays,
  };
})(typeof window === "undefined" ? globalThis : window);
