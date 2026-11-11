"use strict";
try {
  bootStudio();
} catch (error) {
  studioFailure(error);
}
function studioFailure(error) {
  console.error("Study view failed", error);
  const root = document.getElementById("app");
  root.innerHTML =
    '<main class="boot-shell"><h1>Your study space needs a moment.</h1><p>Your saved progress has not been reset. Reload, return to the dashboard, or download a recovery copy.</p><button onclick="location.reload()">Try again</button> <button onclick="location.hash=String.fromCharCode(35)+String.fromCharCode(47);location.reload()">Dashboard</button> <button id="recover-download">Download recovery copy</button></main>';
  document.getElementById("recover-download").onclick = () => {
    const blob = new Blob(
      [
        JSON.stringify({
          current: window.StudioStorage?.snapshot(),
          original: window.StudioStorage?.recovery(),
        }),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "studio-recovery.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
}
function bootStudio() {
  const $ = (id) => document.getElementById(id),
    esc = (s) =>
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
  const E = StudyEngine,
    problemIds = bank.map((p) => p.id),
    allProblemIds = [...bank, ...archivedBank].map((p) => p.id),
    hubIds = [...hubs, ...archivedHubs].map((h) => h.id),
    courses = [...new Set(hubs.map((h) => h.course))];
  let recoveryBlocked = false;
  let state = E.defaults(),
    storageMessage = "",
    rawRecovery = "",
    help = "",
    feedback = null,
    workChecks = {},
    workMessage = "",
    revealedExamples = new Set(),
    lastAttempt = null,
    searchQuery = "",
    builderSelected = new Set(),
    builderMode = "mixed";
  try {
    const raw =
      StudioStorage.getItem("rpi-studio-v2") ||
      StudioStorage.getItem("rpi-studio-v1");
    if (raw) {
      rawRecovery = raw;
      state = E.sanitize(JSON.parse(raw), allProblemIds, hubIds);
    }
  } catch (e) {
    recoveryBlocked = true;
    storageMessage =
      "Saved data could not be read. The original is unchanged. Edits will not save until you import a valid backup or reset in Progress; export the recovery copy first.";
  }
  function persist() {
    if (recoveryBlocked) return;
    try {
      StudioStorage.setItem("rpi-studio-v2", JSON.stringify(state));
      StudioStorage.setItem("rpi-studio-theme", state.theme);
    } catch (e) {
      storageMessage =
        "Browser storage is unavailable or full. Export progress before leaving.";
    }
    let el = $("storage-status");
    if (el)
      el.textContent =
        storageMessage || StudioStorage.status() || "Local save · not synced";
  }
  function theme(value) {
    state.theme = value;
    document.documentElement.dataset.theme =
      value === "system"
        ? matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : value;
    persist();
    window.dispatchEvent(new Event("studio:theme"));
  }
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (state.theme === "system") theme("system");
  });
  theme(state.theme);
  const hub = (id) => hubs.find((h) => h.id === id),
    problem = (id) => [...bank, ...archivedBank].find((p) => p.id === id),
    current = () => problem(state.current) || bank[0];
  function go(page, id, mode) {
    state.route = { page, id, mode };
    syncRoute();
    help = "";
    feedback = null;
    lastAttempt = null;
    if (page === "hub" && hub(id)) {
      state.visited = [id, ...state.visited.filter((x) => x !== id)].slice(
        0,
        12,
      );
    }
    persist();
    render();
    window.scrollTo(0, 0);
    $("main-heading")?.focus();
  }
  function normalizeScope() {
    for (const [id, d] of Object.entries(state.drafts)) {
      if (!d.units && problem(id)?.units) d.units = problem(id).units;
    }
    if (!bank.some((p) => p.id === state.current)) state.current = bank[0].id;
    if (state.route.page === "hub" && !hub(state.route.id))
      state.route = { page: "home" };
    if (state.session?.ids.some((id) => !problemIds.includes(id))) {
      state.session = null;
      if (["practice", "summary"].includes(state.route.page))
        state.route = { page: "home" };
    }
    if (
      state.filters.course !== "All" &&
      !courses.includes(state.filters.course)
    )
      state.filters.course = "All";
    if (state.filters.hub !== "All" && !hub(state.filters.hub))
      state.filters.hub = "All";
  }
  function draft() {
    return (
      state.drafts[state.current] || {
        answer: "",
        work: "",
        units: current().units,
      }
    );
  }
  function setDraft(k, v) {
    if (
      isExam() &&
      state.session.responses[state.session.index]?.status === "submitted"
    )
      return;
    state.drafts[state.current] = { ...draft(), [k]: v };
    persist();
  }
  function choose(id) {
    state.current = id;
    syncRoute();
    help = "";
    feedback = null;
    lastAttempt = null;
    workChecks = {};
    workMessage = "";
    persist();
    render();
    window.scrollTo(0, 0);
  }
  function start(ids, mode = "Guided practice", minutes = 0) {
    if (mode === "Practice exam" && !minutes) minutes = 30;
    if (!ids.length) return;
    if (
      state.session &&
      !state.session.completed &&
      !confirm(
        "Replace the active session? All submitted attempts and drafts stay in your history.",
      )
    )
      return;
    if (isExam()) {
      state.attempts.push(...E.finishExam(state.session, bank));
      updateMissions(true);
    }
    state.session = {
      ids: ids.slice(0, 100),
      index: 0,
      responses: {},
      started: Date.now(),
      deadline: minutes ? Date.now() + minutes * 60000 : null,
      completed: false,
      mode,
    };
    state.route = { page: "practice" };
    choose(ids[0]);
  }
  function openProblem(id) {
    if (
      state.session &&
      !state.session.completed &&
      state.session.ids.includes(id)
    ) {
      state.session.index = state.session.ids.indexOf(id);
      state.route = { page: "practice" };
      choose(id);
      return;
    }
    start([id], "Single problem");
  }
  function resume() {
    if (state.session && !state.session.completed) {
      state.current = state.session.ids[state.session.index];
      go("practice");
    } else openProblem(state.current);
  }
  function advance() {
    let s = state.session;
    if (!s) return;
    if (!s.responses[s.index])
      s.responses[s.index] = { status: "skipped", hints: [] };
    if (s.index + 1 < s.ids.length) {
      s.index++;
      choose(s.ids[s.index]);
    } else finish();
  }
  function previous() {
    let s = state.session;
    if (s && s.index > 0) {
      s.index--;
      choose(s.ids[s.index]);
    }
  }
  function finish() {
    if (!state.session || state.session.completed) return;
    if (isExam()) {
      state.attempts.push(...E.finishExam(state.session, bank));
    } else {
      state.session.completed = true;
      state.session.finished = Date.now();
    }
    updateMissions(true);
    go("summary");
  }
  function ask(level) {
    if (isExam()) return;
    help = help === level ? "" : level;
    if (help) {
      state.hints.push({
        id: state.current,
        level,
        at: new Date().toISOString(),
      });
      let s = state.session;
      if (s) {
        s.responses[s.index] ??= { status: "skipped", hints: [] };
        s.responses[s.index].hints = [
          ...new Set([...(s.responses[s.index].hints || []), level]),
        ];
      }
    }
    persist();
    render();
  }
  function toggle(key, id) {
    state[key] = state[key].includes(id)
      ? state[key].filter((x) => x !== id)
      : [...state[key], id];
    persist();
    render();
  }
  function checkAnswer(e) {
    e.preventDefault();
    if (state.session?.completed) return;
    if (isExam()) {
      if (state.session.deadline <= Date.now()) {
        finish();
        return;
      }
      if (E.submitExam(state.session, state.session.index, draft())) {
        feedback = {
          status: "submitted",
          message:
            "Response locked. Results will be available when the exam ends.",
        };
        persist();
        render();
      }
      return;
    }
    let p = current(),
      d = draft();
    feedback = E.grade(p, d.answer, d.units ?? p.units);
    if (feedback.status === "invalid") {
      render();
      return;
    }
    let a = {
      id: p.id,
      answer: d.answer,
      work: d.work,
      units: d.units,
      correct: feedback.status === "correct",
      status: feedback.status,
      at: new Date().toISOString(),
      sessionStarted: state.session?.started,
    };
    state.attempts.push(a);
    lastAttempt = state.attempts.length - 1;
    if (state.session) {
      let s = state.session;
      s.responses[s.index] = {
        ...s.responses[s.index],
        status: feedback.status,
        hints: s.responses[s.index]?.hints || [],
      };
    }
    updateMissions();
    persist();
    render();
  }
  function assess(correct) {
    if (isExam()) return;
    if (lastAttempt === null) return;
    let a = state.attempts[lastAttempt];
    a.correct = correct;
    a.status = correct ? "correct" : "incorrect";
    a.selfAssessed = true;
    feedback = {
      status: a.status,
      message: correct
        ? "Recorded as correct by your self-assessment."
        : "Recorded for further practice by your self-assessment.",
    };
    if (state.session) {
      let r = state.session.responses[state.session.index];
      r.status = a.status;
      r.selfAssessed = true;
    }
    updateMissions();
    persist();
    render();
  }
  function misses() {
    return hubs
      .map((h) => {
        let a = state.attempts.filter(
          (a) => problem(a.id)?.hub === h.id && a.status !== "self",
        );
        return {
          h,
          wrong: a.filter((a) => !a.correct).length,
          correct: a.filter((a) => a.correct).length,
        };
      })
      .filter((x) => x.wrong)
      .sort((a, b) => b.wrong - a.wrong);
  }
  function missedIds() {
    return E.reviewDue(state.attempts, problemIds);
  }
  function retryMissed() {
    let s = state.session,
      ids = s.ids.filter((id, i) => s.responses[i]?.status !== "correct");
    if (ids.length) start(ids, "Retry missed / unfinished");
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function sourceLabel(h) {
    return h.source === "original"
      ? "Original practice"
      : "Online supplemental material";
  }
  function sourceInfo(h) {
    let s = sources[h.source];
    return `<details class="source"><summary>Source & scope</summary><p>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)} ↗</a>` : esc(s.title)}</p><p>${esc(s.note)}</p><p>Explanations and practice are newly authored; no question is represented as an instructor-assigned problem.</p></details>`;
  }
  function heading(k, title, desc) {
    return `<header class="page-head"><span class="eyebrow">${esc(k)}</span><h1 id="main-heading" tabindex="-1">${esc(title)}</h1><p>${esc(desc)}</p></header>`;
  }
  function card(h) {
    let st = E.stats(state.attempts, h.problems);
    return `<article class="topic-card"><div class="eyebrow">${esc(h.course)} · ${esc(h.unit)}</div><h3><button class="text-link" onclick="go('hub','${h.id}')">${esc(h.title)} ↗</button></h3><p>${esc(h.overview)}</p><div class="card-foot"><span>${h.problems.length} questions · 2 examples</span><span>${st.unique} attempted</span></div>${masteryBar(h)}<span class="badge subtle">${sourceLabel(h)}</span></article>`;
  }
  function render() {
    try {
      renderView();
    } catch (error) {
      studioFailure(error);
    }
  }
  function renderView() {
    const r = state.route,
      active = r.page;
    let navs = [
      ["home", "⌂", "Dashboard"],
      ["learn", "▤", "Learn"],
      ["library", "◫", "Practice library"],
      ["builder", "⏱", "Study sessions"],
      ["mistakes", "↺", "Mistake review"],
      ["bookmarks", "☆", "Bookmarks"],
      ["reference", "ƒ", "Quick reference"],
      ["progress", "▥", "Progress & notes"],
      ["coverage", "◎", "Coverage & sources"],
      ["assignments", "▦", "Assignments"],
      ["orbitarium", "✦", "Orbitarium"],
    ];
    $("app").innerHTML =
      `<a class="skip" href="#content">Skip to content</a><div class="shell"><aside class="sidebar"><a class="brand" href="#" onclick="go('home');return false"><span class="logo">∴</span><span>Practice Studio<small>RPI · LEARN WITH INTENTION</small></span></a><nav aria-label="Main navigation">${navs.map(([p, i, t]) => `<button class="nav-item ${active === p || (p === "learn" && active === "hub") ? "active" : ""}" ${active === p ? 'aria-current="page"' : ""} onclick="go('${p}')"><span aria-hidden="true">${i}</span>${t}${p === "mistakes" && missedIds().length ? `<b>${missedIds().length}</b>` : ""}</button>`).join("")}</nav><div class="side-note"><strong>Guidance first, always.</strong><p>Your answer comes before the model solution. Choose how much help to reveal.</p></div><label class="theme-label" for="theme">Appearance</label><select id="theme" onchange="theme(this.value)">${["system", "light", "dark"].map((t) => `<option value="${t}" ${state.theme === t ? "selected" : ""}>${t[0].toUpperCase() + t.slice(1)}</option>`).join("")}</select><button onclick="openBackup()">Backup & restore</button><small id="storage-status">${esc(storageMessage || StudioStorage.status() || "Local save · not synced")}</small></aside><main id="content"><div class="topbar"><span>PRACTICE STUDIO · ORBITARIUM EDITION</span><form class="search" onsubmit="event.preventDefault();searchQuery=this.elements.search.value;go('search')"><label class="sr-only" for="global-search">Search topics, equations and problems</label><input id="global-search" name="search" type="search" placeholder="Search topics, equations, problems…" value="${esc(searchQuery)}"><button aria-label="Search">↗</button></form></div>${storageMessage ? `<div class="alert">${esc(storageMessage)}</div>` : ""}${r.page === "notfound" ? empty("This study link is unavailable.", "Choose a course or return to the dashboard.", "Dashboard", "go('home')") : r.page === "assignments" ? Orbitarium.assignmentsView() : r.page === "orbitarium" ? Orbitarium.view() : r.page === "home" ? home() : r.page === "learn" ? learn() : r.page === "hub" ? hubPage(r.id) : r.page === "library" ? library() : r.page === "practice" ? practice() : r.page === "builder" ? builder() : r.page === "summary" ? summary() : r.page === "mistakes" ? mistakePage() : r.page === "bookmarks" ? bookmarks() : r.page === "reference" ? reference() : ["progress", "settings"].includes(r.page) ? progress() : r.page === "coverage" ? coverage() : searchPage()}<footer><span>Independent learning aid · ${bank.length} original practice problems · ${hubs.length} hubs</span><span>Progress stored in this browser. Export a backup in Progress.</span></footer></main></div>`;
    tick();
    if (r.page === "orbitarium") Orbitarium.mount();
    if (r.page === "assignments") Orbitarium.assignmentMount();
  }
  function home() {
    let total = E.stats(state.attempts, problemIds),
      recent = state.visited.map(hub).filter(Boolean);
    return `${heading("A connected learning workspace", "Understand it. Work it through.", "Learn the idea, make an attempt, then ask for just the help you need.")}<section class="hero"><div><span class="eyebrow">YOUR NEXT STEP</span><h2>${state.session && !state.session.completed ? "Pick up where you left off." : "Start with one good question."}</h2><p>${state.session && !state.session.completed ? `${esc(state.session.mode)} · question ${state.session.index + 1} of ${state.session.ids.length}. Your place is saved.` : "Explore a learning hub or build a focused practice session from your courses."}</p><div class="actions"><button class="primary" onclick="resume()">Continue studying →</button><button onclick="go('learn')">Explore learning hubs</button></div></div><div class="hero-art" aria-hidden="true"><span>LEARN</span><i>↓</i><span>REASON</span><i>↓</i><span>REFLECT</span></div></section><div class="stat-grid"><div><b>${total.unique}</b><span>Distinct problems attempted</span></div><div><b>${total.correct}</b><span>Correct attempts · includes self-assessment</span></div><div><b>${missedIds().length}</b><span>Problems with missed attempts</span></div><div><b>${state.visited.length}</b><span>Recently viewed hubs · not mastery</span></div></div><div class="section-title"><h2>Your courses</h2><button class="text-link" onclick="go('coverage')">See coverage & gaps →</button></div><div class="course-grid">${courses.map((c, i) => `<button class="course-card" onclick="state.filters.course='${c}';go('learn')"><span class="course-icon">${["ƒ′", "↗", "⌬", "✺", "⚗"][i]}</span><h3>${c}</h3><p>${hubs.filter((h) => h.course === c).length} hubs · ${bank.filter((p) => p.subject === c).length} questions</p><span>Open course →</span></button>`).join("")}</div>${recent.length ? `<h2>Recently viewed</h2><div class="topic-grid">${recent.slice(0, 3).map(card).join("")}</div>` : ""}<div class="notice"><strong>Original practice, with visible coverage.</strong><p>Calculus I, Physics I and Organic Chemistry I. Authored practice covers standard introductory topics, with public OpenStax references. This is not a prediction of your next exam.</p></div>`;
  }
  function courseFilter(fn) {
    return `<label>Course<select onchange="state.filters.course=this.value;${fn}"><option>All</option>${courses.map((c) => `<option ${state.filters.course === c ? "selected" : ""}>${c}</option>`).join("")}</select></label>`;
  }
  function learn() {
    return `${heading("COURSE → UNIT → TOPIC", "Find the concept you need.", "Each hub connects explanations, examples, practice and review.")}<div class="filters">${courseFilter("persist();render()")}</div>${courses
      .filter(
        (c) => state.filters.course === "All" || state.filters.course === c,
      )
      .map(
        (c) =>
          `<section><h2>${c}</h2><div class="topic-grid">${hubs
            .filter((h) => h.course === c)
            .map(card)
            .join("")}</div></section>`,
      )
      .join("")}`;
  }
  function hubPage(id) {
    let h = hub(id);
    if (!h)
      return `<p>Topic not found.</p><button onclick="go('learn')">Return to directory</button>`;
    return `<div class="breadcrumbs"><button onclick="go('learn')">Courses</button><span>/ ${esc(h.course)} / ${esc(h.unit)}</span></div>${heading(sourceLabel(h), h.title, h.overview)}<div class="actions no-print"><button class="primary" onclick="start(hub('${id}').problems,'Topic practice')">Practice this topic →</button>${state.session && !state.session.completed ? '<button onclick="resume()">Return to active question</button>' : ""}<button onclick="toggle('topicBookmarks','${id}')" aria-pressed="${state.topicBookmarks.includes(id)}">${state.topicBookmarks.includes(id) ? "★ Bookmarked" : "☆ Bookmark explanation"}</button><button onclick="window.print()">Print review sheet</button></div><div class="hub-layout"><article><section class="panel"><h2>The quick rundown</h2><p>${esc(h.overview)}</p><h3>What you’ll learn</h3><ul>${h.objectives.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><details open><summary>Understand the reasoning</summary><p>${esc(h.detail)}</p></details><h3>Mathematical / conceptual reference</h3><div class="equation" tabindex="0">${esc(h.equation)}</div><p>${esc(h.variables)}</p><h4>Assumptions & limits</h4><p>${esc(h.assumptions)}</p><h4>Engineering / study connection</h4><p>${esc(h.application)}</p>${sourceInfo(h)}</section>${interactive(h)}<section class="panel"><h2>Worked examples</h2><p class="muted">Study the setup first. Each final walkthrough opens only when you ask.</p>${h.examples.map((id, i) => example(problem(id), i)).join("")}</section><section class="panel"><h2>Review & readiness</h2><h3>Common mistakes</h3><ul>${h.mistakes.map((s) => `<li>${esc(s)}</li>`).join("")}</ul><h3>Conceptual self-check</h3><p>Explain: ${esc(h.objectives[0].toLowerCase())}. What assumption would make your method stop applying?</p><h3>Readiness checklist</h3><p class="small muted">Your own check-in, not an automatic mastery rating.</p>${h.objectives.map((s, i) => `<label class="check"><input type="checkbox" ${(state.checks[id] || [])[i] ? "checked" : ""} onchange="state.checks['${id}']??=[];state.checks['${id}'][${i}]=this.checked;persist()">I can ${esc(s.toLowerCase())} without looking.</label>`).join("")}<div class="actions"><button class="primary" onclick="start(hub('${id}').problems,'Topic practice')">Test my understanding</button></div></section></article><aside><section class="panel"><h3>Build on what you know</h3>${h.prereqs.length ? h.prereqs.map((x) => `<button class="list-link" onclick="go('hub','${x}')">${esc(hub(x)?.title || x)} →</button>`).join("") : "<p>No earlier hub required. Basic algebra or careful reading is enough to start.</p>"}<h3>Connect what comes next</h3>${h.next.length ? h.next.map((x) => `<button class="list-link" onclick="go('hub','${x}')">${esc(hub(x).title)} →</button>`).join("") : "<p>Try mixed review to connect this topic with others.</p>"}</section><section class="panel"><h3>Vocabulary</h3>${h.terms
      .map((t) => {
        let [a, ...b] = t.split(":");
        return `<p><strong>${esc(a)}</strong><br>${esc(b.join(":"))}</p>`;
      })
      .join(
        "",
      )}</section><section class="panel"><label for="topic-note"><h3>Your notes</h3></label><textarea id="topic-note" rows="7" placeholder="A question, a connection, or a mistake to remember…" oninput="state.notes['${id}']=this.value;persist()">${esc(state.notes[id] || "")}</textarea><p class="small muted">Private to this browser. Included in your exported backup.</p></section></aside></div>`;
  }
  function example(p, i) {
    return `<article class="example"><span class="eyebrow">EXAMPLE ${i + 1} · ${esc(p.difficulty)}</span><h3>${esc(p.title)}</h3><p>${esc(p.prompt)}</p>${safeVisual(p)}<dl><dt>Given & required</dt><dd>The stated values and conditions above define the problem; solve only for the requested result.</dd><dt>Assumptions</dt><dd>${esc(hub(p.hub).assumptions)}</dd><dt>Principle & symbolic setup</dt><dd>${esc(p.setup)}</dd></dl><button onclick="revealedExamples.has('${p.id}')?revealedExamples.delete('${p.id}'):revealedExamples.add('${p.id}');render()">${revealedExamples.has(p.id) ? "Hide walkthrough" : "Reveal worked solution"}</button>${revealedExamples.has(p.id) ? `<div class="solution"><h4>Calculation / reasoning and result</h4><p class="preline">${esc(p.solution)}</p><h4>Check & interpret</h4><p>${p.kind === "number" ? `Requested units: ${esc(p.units || "dimensionless")}. Compare signs, dimensional consistency and physical bounds with the setup. ${esc(checkNote(p))}` : "Check the definition and its conditions against each part of the prompt; a correct label should be supported by reasoning."}</p><h4>Common mistake to avoid</h4><p>${esc(hub(p.hub).mistakes[0])}</p></div>` : ""}<button class="text-link" onclick="openProblem('${p.id}')">Try this problem yourself →</button></article>`;
  }
  function checkNote(p) {
    if (p.hub === "energy")
      return "Kinetic and Hookean spring energies must be nonnegative; work and potential differences can have either sign.";
    if (p.hub === "stereo")
      return "A percentage composition or enantiomeric excess must lie from 0 to 100%.";
    if (p.hub === "engineering")
      return "Mole fractions lie from 0 to 1; balances must conserve atoms and total mass.";
    return "A rate has output units divided by input units. Re-evaluate the original relation to check the result.";
  }
  function interactive(h) {
    if (!["energy", "circular", "engineering"].includes(h.id)) return "";
    let type = h.id;
    return `<section class="panel no-print"><span class="eyebrow">EXPLORE A RELATIONSHIP</span><h2>${type === "energy" ? "How deformation stores energy" : type === "circular" ? "Speed changes the inward requirement" : "A control volume over time"}</h2><p>${type === "energy" ? "Model: U = ½kx², Hookean spring, k = 200 N/m, |x| ≤ 0.30 m. No friction or plastic deformation." : type === "circular" ? "Model: ar = v²/r, uniform circular motion with r = 2 m, speed 0–10 m/s. No change in radius." : "Model: m(t) = m0 + (ṁin − ṁout)t. Initial mass 10 kg, inlet 5 kg/s, outlet 3 kg/s, no other mass transfer; t = 0–20 s. Educational inventory model."}</p><label for="model-input">${type === "energy" ? "Deformation x (m)" : type === "circular" ? "Speed v (m/s)" : "Time t (s)"}</label><input id="model-input" type="range" min="0" max="${type === "energy" ? ".3" : type === "circular" ? "10" : "20"}" step="${type === "energy" ? ".01" : ".5"}" value="0" oninput="updateModel('${type}',this.value)"><output id="model-result" for="model-input">${type === "engineering" ? "t = 0 s → inventory = 10 kg" : "Input = 0 → result = 0"}</output><div class="model-bar" aria-hidden="true"><span id="model-bar" style="width:${type === "engineering" ? "20" : "0"}%"></span></div><p class="small muted">Bar length shows the result relative to the largest result in the stated input range. This is a model exploration, not a graded problem.</p></section>`;
  }
  function updateModel(type, v) {
    v = Number(v);
    let y =
      type === "energy"
        ? 100 * v * v
        : type === "circular"
          ? (v * v) / 2
          : 10 + 2 * v;
    $("model-result").textContent =
      type === "energy"
        ? `x = ${v.toFixed(2)} m → U = ${y.toFixed(2)} J`
        : type === "circular"
          ? `v = ${v.toFixed(1)} m/s → ar = ${y.toFixed(2)} m/s²`
          : `t = ${v.toFixed(1)} s → m = ${y.toFixed(1)} kg`;
    $("model-bar").style.width = (100 * y) / (type === "energy" ? 9 : 50) + "%";
  }
  function filtered() {
    let f = state.filters,
      q = f.query.toLowerCase();
    return bank.filter(
      (p) =>
        quickMatch(p) &&
        (f.course === "All" || p.subject === f.course) &&
        (f.hub === "All" || p.hub === f.hub) &&
        (f.difficulty === "All" || p.difficulty === f.difficulty) &&
        (f.type === "All" || p.type === f.type) &&
        (!q ||
          [p.title, p.prompt, p.topic, p.subject, p.subtopic]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }
  function problemRow(p) {
    return `<article class="problem-row"><div><div class="eyebrow">${esc(p.subject)} / ${esc(hub(p.hub).title)}</div><h3>${esc(p.title)}</h3><p>${esc(p.prompt)}</p><div class="tags"><span>${esc(p.difficulty)}</span><span>${esc(p.type)}</span><span>~${p.minutes} min</span>${state.crucial.includes(p.id) ? "<span>⚑ Crucial</span>" : ""}</div></div><button onclick="openProblem('${p.id}')">Practice →</button></article>`;
  }
  function library() {
    let ps = filtered();
    return `${heading("ONE SHARED QUESTION BANK", "Practice with purpose.", "Filter by course, topic, difficulty and question type. All questions are original practice.")}${quickFilters()}<form class="filters" onsubmit="event.preventDefault();state.filters.query=this.elements.query.value;persist();render()">${courseFilter("state.filters.hub='All';persist();render()")}<label>Topic<select onchange="state.filters.hub=this.value;persist();render()"><option value="All">All</option>${hubs
      .filter(
        (h) =>
          state.filters.course === "All" || h.course === state.filters.course,
      )
      .map(
        (h) =>
          `<option value="${h.id}" ${state.filters.hub === h.id ? "selected" : ""}>${esc(h.title)}</option>`,
      )
      .join(
        "",
      )}</select></label><label>Difficulty<select onchange="state.filters.difficulty=this.value;persist();render()">${["All", "Foundation", "Core", "Integration"].map((s) => `<option ${state.filters.difficulty === s ? "selected" : ""}>${s}</option>`).join("")}</select></label><label>Type<select onchange="state.filters.type=this.value;persist();render()">${["All", ...new Set(bank.map((p) => p.type))].map((s) => `<option ${state.filters.type === s ? "selected" : ""}>${s}</option>`).join("")}</select></label><label>Contains<input name="query" value="${esc(state.filters.query)}" type="search"></label><button>Apply search</button><button type="button" onclick="state.filters=E.defaults().filters;persist();render()">Clear filters</button></form><div class="section-title"><p>${ps.length} matching problems</p><button ${!ps.length ? "disabled" : ""} class="primary" onclick="start(filtered().map(p=>p.id),'Filtered practice')">Practice this set</button></div>${ps.length ? ps.map(problemRow).join("") : empty("No matching problems.", "Clear a filter or try a broader search.", "Clear filters", "state.filters=E.defaults().filters;persist();render()")}`;
  }
  function empty(title, text, label, action) {
    return `<div class="empty panel"><h2>${title}</h2><p>${text}</p>${label ? `<button onclick="${action}">${label}</button>` : ""}</div>`;
  }
  function practice() {
    if (state.session?.completed) {
      const p = current();
      return `${heading("SAVED QUESTION", p.title, "Your completed session remains saved. Start a new practice attempt when you are ready.")}<section class="panel"><p>${esc(p.prompt)}</p>${safeVisual(p)}<button class="primary" onclick="openProblem('${p.id}')">Start new practice</button><button onclick="go('summary')">Return to session results</button></section>`;
    }

    let p = current(),
      s = state.session,
      d =
        isExam() && s.responses[s.index]?.status === "submitted"
          ? s.responses[s.index]
          : draft(),
      h = hub(p.hub),
      attempted = state.attempts.some((a) => a.id === p.id),
      units = p.units;
    return `<div class="breadcrumbs"><button onclick="go('library')">Practice library</button><span>/ ${esc(p.subject)} / ${esc(h.title)}</span></div><div class="session-strip"><span>${esc(s?.mode || "Guided practice")} · ${s ? `${s.index + 1} / ${s.ids.length}` : "1 / 1"}</span><span id="timer" role="timer" aria-label="Time remaining"></span><button onclick="finish()">Finish & review</button><button onclick="go('library')">Save & leave <kbd>Esc</kbd></button></div><p class="shortcut-note">Outside text fields: <kbd>Enter</kbd> check / continue · <kbd>H</kbd> hint · <kbd>R</kbd> flag · <kbd>Esc</kbd> leave · 1–4 select choices when available</p><div class="practice-layout"><article class="panel question"><div class="question-top"><span class="badge">${esc(p.difficulty)} · ${esc(p.type)} · ~${p.minutes} min</span><button aria-pressed="${state.saved.includes(p.id)}" onclick="toggle('saved','${p.id}')">${state.saved.includes(p.id) ? "★ Saved" : "☆ Save"}</button></div><h1 id="main-heading" tabindex="-1">${esc(p.title)}</h1><p class="prompt">${esc(p.prompt)}</p>${safeVisual(p)}<details><summary>Learning objective, prerequisites & source</summary><p><strong>Objective:</strong> ${esc(p.objective)}</p><p><strong>Prerequisites:</strong> ${esc(h.prereqs.map((x) => hub(x)?.title).join(", ") || "Basic algebra or careful reading")}</p><p><strong>Subtopic:</strong> ${esc(p.subtopic)}</p><p class="small">${esc(p.source)}</p></details><form onsubmit="checkAnswer(event)"><fieldset class="answer-fields" ${isExam() && s.responses[s.index]?.status === "submitted" ? "disabled" : ""}><label for="work">${p.subject === "Physics I" ? "Organized working" : "Your reasoning / scratch work"}</label><textarea id="work" class="working" rows="4" placeholder="Given → assumptions → principle → symbolic setup → calculation → check" oninput="setDraft('work',this.value)">${esc(d.work)}</textarea>${p.subject === "Physics I" ? `<details class="workcheck"><summary>Physics organization check</summary>${["Define the system and given quantities with units", "Draw relevant forces / axes or a system boundary", "State the principle and symbolic equation", "Check dimensions, sign and physical reasonableness"].map((t, i) => `<label class="check"><input type="checkbox" ${workChecks[i] ? "checked" : ""} onchange="workChecks[${i}]=this.checked">${t}</label>`).join("")}<button type="button" onclick="checkWork()">Check organization</button><p id="work-message" role="status">${esc(workMessage)}</p><p class="small muted">A checklist checks your organization, not the correctness of your derivation.</p></details>` : ""}${
      Array.isArray(p.options)
        ? `<div class="choice-options" role="group" aria-label="Answer choices">${p.options
            .slice(0, 4)
            .map(
              (o, i) =>
                `<button type="button" data-answer-option onclick="chooseOption(${i})" aria-pressed="${d.answer === String(o.value ?? o)}"><kbd>${i + 1}</kbd> ${esc(o.label ?? o)}</button>`,
            )
            .join("")}</div>`
        : ""
    }<div class="answer-grid"><div><label for="answer">${p.kind === "rubric" ? "Your explanation / recall" : "Your answer"}</label>${p.kind === "rubric" ? `<textarea id="answer" rows="4" required oninput="setDraft('answer',this.value)" placeholder="Retrieve or reason first. You will assess against a rubric.">${esc(d.answer)}</textarea>` : `<input id="answer" type="text" required value="${esc(d.answer)}" oninput="setDraft('answer',this.value)" placeholder="${p.kind === "number" ? "Number, 1/3, or 2.5e-3" : "Your response"}">`}</div>${
      p.kind === "number" && units
        ? `<div><label for="answer-units">Units</label><input id="answer-units" list="unit-list" value="${esc(d.units ?? units)}" oninput="setDraft('units',this.value)"><datalist id="unit-list">${Object.keys(
            E.units,
          )
            .filter((u) => u && E.units[u].d === E.units[units]?.d)
            .map((u) => `<option value="${u}">`)
            .join("")}</datalist></div>`
        : ""
    }</div>${p.kind === "number" ? `<p class="small muted">Tolerance: ${100 * (p.relTol ?? 0.005)}% relative or ${p.absTol ?? 1e-8} ${esc(units || "dimensionless")}, whichever is larger. Compatible units are converted; symbolic expressions are not auto-graded.</p>` : ""}</fieldset><div class="actions"><button class="primary" type="submit" ${isExam() && s.responses[s.index]?.status === "submitted" ? "disabled" : ""}>${isExam() ? "Lock response" : p.kind === "rubric" ? "Submit for self-check" : "Check my answer"} <kbd>Enter</kbd> →</button><button type="button" onclick="previous()" ${!s || s.index === 0 ? "disabled" : ""}>Previous</button><button type="button" onclick="advance()">${s && s.index === s.ids.length - 1 ? "Finish session" : "Next question"}</button></div></form>${feedback ? `<div class="feedback ${feedback.status}" role="status"><strong>${{ correct: "✓ Correct", incorrect: "↺ Review this", invalid: "Check your entry", self: "Self-assessment", submitted: "Response saved" }[feedback.status]}</strong><p>${esc(feedback.message)}</p>${!isExam() && feedback.status !== "invalid" && lastAttempt !== null ? `<details ${p.kind === "rubric" ? "open" : ""}><summary>Self-assessment rubric</summary><ul>${p.rubric.map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p class="small">Use this for open-ended work or a genuinely equivalent response. Self-assessed results are labeled in progress.</p><div class="actions"><button onclick="assess(true)">Meets the criteria</button><button onclick="assess(false)">Needs more practice</button></div></details>` : ""}</div>` : ""}<div class="question-bottom"><button onclick="toggle('crucial','${p.id}')" aria-pressed="${state.crucial.includes(p.id)}">${state.crucial.includes(p.id) ? "⚑ Crucial for review" : "⚑ Mark crucial"} <kbd>R</kbd></button><button class="text-link" ${isExam() ? "disabled" : ""} onclick="go('hub','${p.hub}')">Open learning hub →</button></div></article><aside><section class="panel help"><h2>${isExam() ? "Exam in progress" : "Help, on your terms."}</h2><p>${isExam() ? "Help and correctness feedback are locked until you finish." : "Each level stays separate. Nothing opens automatically."}</p>${[
      ["clarify", "Clarification", "What is being asked?"],
      ["hint", "Conceptual hint", "Find a direction"],
      ["setup", "Equation & setup", "Start the reasoning"],
      ["calculate", "Calculation guidance", "Work through the process"],
      [
        "solution",
        "Full worked solution",
        "Explicitly reveal the final answer",
      ],
    ]
      .map(
        ([k, t, sub], i) =>
          `<button class="help-button ${help === k ? "selected" : ""}" ${isExam() || (k === "solution" && !attempted) ? "disabled" : ""} onclick="ask('${k}')"><b>${String(i + 1).padStart(2, "0")} · ${t} ${k === "hint" ? "<kbd>H</kbd>" : ""}</b><span>${sub}</span></button>`,
      )
      .join(
        "",
      )}${!attempted && !isExam() ? '<p class="small muted">Submit your own attempt to unlock the full solution.</p>' : ""}${help ? `<div class="help-content ${help === "solution" ? "solution" : ""}" role="status"><h3>${help === "solution" ? "Worked solution" : "Guidance"}</h3><p class="preline">${esc(p[help])}</p>${help === "solution" ? `<p class="small">${esc(checkNote(p))}</p>` : ""}</div>` : ""}</section><section class="panel"><h3>Useful reminders</h3><p>${isExam() ? "Submit your own reasoning. You can revisit locked responses, but cannot edit them." : esc(h.mistakes[0]) + " is a common pitfall in this topic."}</p><button class="list-link" ${isExam() ? "disabled" : ""} onclick="go('reference')">Equations & unit converter →</button><p class="small muted">Responses, drafts and session position save locally. Leaving this page does not reveal or discard an answer.</p></section></aside></div>`;
  }
  function checkWork() {
    let n = Object.values(workChecks).filter(Boolean).length;
    workMessage =
      n === 4
        ? "All four organization steps marked. Now verify the physics and calculations."
        : `${n}/4 steps marked. Review the unchecked steps before trusting the result.`;
    $("work-message").textContent = workMessage;
  }
  function builder() {
    return `${heading("MIXED REVIEW & PRACTICE EXAMS", "Build a useful study session.", "Generated practice sessions draw from this library. They do not predict an upcoming exam.")}<form class="panel" onsubmit="buildSession(event)"><div class="filters"><label>Mode<select id="session-mode"><option value="Guided practice">Guided practice · immediate feedback</option><option value="Practice exam">Timed exam · results at the end</option></select></label><label>Difficulty<select id="session-difficulty"><option>All</option><option>Foundation</option><option>Core</option><option>Integration</option></select></label><label>Question count<input id="session-count" type="number" min="1" max="100" value="10" required></label><label>Optional timer (minutes)<input id="session-minutes" type="number" min="0" max="240" value="0" required></label></div><p class="small muted">Guided practice may be untimed. Exams default to 30 minutes when no duration is entered, lock submitted responses, and finish when time expires. Worked solutions stay hidden.</p><fieldset><legend>Select topics</legend><div class="actions"><button type="button" onclick="document.querySelectorAll('[name=session-topic]').forEach(x=>x.checked=true)">Select all</button><button type="button" onclick="document.querySelectorAll('[name=session-topic]').forEach(x=>x.checked=false)">Clear selection</button></div><div class="builder-grid">${courses
      .map(
        (c) =>
          `<div><h3>${c}</h3>${hubs
            .filter((h) => h.course === c)
            .map(
              (h) =>
                `<label class="check"><input type="checkbox" name="session-topic" value="${h.id}" ${builderSelected.has(h.id) ? "checked" : ""}>${esc(h.title)} (${h.problems.length})</label>`,
            )
            .join("")}</div>`,
      )
      .join(
        "",
      )}</div></fieldset><div id="builder-status" role="status"></div><button class="primary">Start session →</button></form>`;
  }
  function buildSession(e) {
    e.preventDefault();
    let ids = [
      ...document.querySelectorAll("[name=session-topic]:checked"),
    ].map((el) => el.value);
    builderSelected = new Set(ids);
    let diff = $("session-difficulty").value,
      count = Number($("session-count").value),
      minutes = Number($("session-minutes").value);
    let ps = bank.filter(
      (p) => ids.includes(p.hub) && (diff === "All" || p.difficulty === diff),
    );
    if (!ids.length || !ps.length) {
      $("builder-status").textContent =
        "Select at least one topic with questions at this difficulty.";
      return;
    }
    if (count > ps.length) {
      $("builder-status").textContent =
        `Only ${ps.length} distinct questions match. Choose ${ps.length} or fewer, or add topics.`;
      return;
    }
    start(
      shuffle(ps)
        .slice(0, count)
        .map((p) => p.id),
      $("session-mode").value,
      minutes,
    );
  }
  function tick() {
    let el = $("timer"),
      s = state.session;
    if (
      s &&
      !s.completed &&
      s.mode === "Practice exam" &&
      s.deadline &&
      s.deadline <= Date.now()
    ) {
      finish();
      return;
    }
    if (!el || !s) return;
    if (!s.deadline) {
      el.textContent = "Untimed";
      return;
    }
    let left = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000));
    el.textContent = left
      ? `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")} remaining`
      : "Time elapsed · finish when ready";
  }
  setInterval(tick, 1000);
  function assessSession(index, correct) {
    const session = state.session,
      response = session?.responses[index];
    if (!session?.completed || response?.status !== "self") return;
    const attempt = [...state.attempts]
      .reverse()
      .find(
        (a) =>
          a.id === session.ids[index] && a.sessionStarted === session.started,
      );
    if (!attempt) return;
    response.status = attempt.status = correct ? "correct" : "incorrect";
    response.selfAssessed = attempt.selfAssessed = true;
    attempt.correct = correct;
    updateMissions(true);
    persist();
    render();
  }
  function chooseOption(index) {
    const option = current().options?.[index];
    if (option !== undefined) {
      setDraft("answer", String(option.value ?? option));
      render();
    }
  }
  function summary() {
    let s = state.session;
    if (!s)
      return empty(
        "No session yet.",
        "Build a practice session to see its results.",
        "Build session",
        "go('builder')",
      );
    let rows = s.ids.map((id, i) => ({
        p: problem(id),
        r: s.responses[i] || { status: "skipped", hints: [] },
      })),
      n = rows.filter((x) => x.r.status === "correct").length,
      missed = rows.filter((x) => x.r.status !== "correct");
    return `${heading("SESSION REFLECTION", "Notice what to practice next.", `${s.mode} · ${n} correct of ${rows.length}. Skipped and unassessed questions are not counted as correct.`)}<div class="actions"><button class="primary" ${!missed.length ? "disabled" : ""} onclick="retryMissed()">Retry missed / unfinished (${missed.length})</button><button onclick="go('builder')">Build another session</button><button onclick="printSession()">Print question set</button></div><div class="panel"><h2>Topics & learning objectives</h2>${[
      ...new Set(rows.map((x) => x.p.hub)),
    ]
      .map((id) => {
        let a = rows.filter((x) => x.p.hub === id);
        return `<div class="result-line"><div><strong>${esc(hub(id).title)}</strong><p>${a.filter((x) => x.r.status === "correct").length}/${a.length} correct · ${a.reduce((n, x) => n + (x.r.hints || []).length, 0)} help levels used</p></div><button onclick="go('hub','${id}')">Review explanation →</button></div>`;
      })
      .join(
        "",
      )}</div><h2>Question-by-question</h2>${rows.map(({ p, r }, index) => `<div class="result-line panel"><div><span class="badge">${{ correct: "✓ Correct", incorrect: "↺ Missed", self: "Self-check pending", skipped: "Not submitted" }[r.status]}${r.selfAssessed ? " · self-assessed" : ""}</span><h3>${esc(p.title)}</h3><p>Objective: ${esc(scopeObjectives[p.hub]?.objectives.find((o) => o.id === p.id)?.label || p.objective)}</p><p>Help: ${esc((r.hints || []).join(", ") || "none")}</p>${r.status === "self" ? `<details><summary>Assess your reasoning</summary><p>Your response: ${esc(r.answer || "See your saved draft in Progress.")}</p><ul>${(p.rubric || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul><button onclick="assessSession(${index},true)">Meets the criteria</button><button onclick="assessSession(${index},false)">Needs more practice</button></details>` : ""}</div><button onclick="openProblem('${p.id}')">Retry</button></div>`).join("")}`;
  }
  function printSession() {
    let s = state.session;
    if (!s) return;
    let section = document.createElement("section");
    section.id = "print-set";
    section.innerHTML = `<h1>${esc(s.mode)} — practice questions</h1><p>Original practice. No claim of actual exam coverage. Answers omitted.</p>${s.ids
      .map((id, i) => {
        let p = problem(id);
        return `<article><h2>${i + 1}. ${esc(p.title)}</h2><p>${esc(p.prompt)}</p>${safeVisual(p)}<p>Answer / working:</p><div style="height:120px;border-bottom:1px solid #aaa"></div></article>`;
      })
      .join("")}`;
    document.body.append(section);
    document.body.classList.add("printing-set");
    window.print();
    document.body.classList.remove("printing-set");
    section.remove();
  }
  function mistakePage() {
    let ids = missedIds(),
      ms = misses();
    return `${heading("MAKE THE HARD PART USEFUL", "Your mistake review.", "Needs Review includes missed answers and spaced checks due after 3 days (1 day for self-assessment). Earlier attempts remain in Progress.")}<div class="actions"><button class="primary" ${!ids.length ? "disabled" : ""} onclick="start(shuffle(missedIds()),'Mistake review')">Retry missed problems (${ids.length})</button><button ${!ms.length ? "disabled" : ""} onclick="start(shuffle(bank.filter(p=>misses().some(m=>m.h.id===p.hub))).slice(0,15).map(p=>p.id),'Targeted concept quiz')">Generate targeted quiz</button></div>${quickFilters()}${bank
      .filter((p) => quickMatch(p))
      .map(problemRow)
      .join(
        "",
      )}${ms.length ? ms.map((m) => `<section class="result-line panel"><div><span class="eyebrow">${m.h.course}</span><h2>${m.h.title}</h2><p>${m.wrong} missed attempts · ${m.correct} correct attempts</p></div><button onclick="go('hub','${m.h.id}')">Review concept</button></section>`).join("") : empty("A fresh mistake notebook.", "Missed answers appear here after practice. Pending rubric assessments are not counted as mistakes.", "Start practice", "go('library')")}`;
  }
  function bookmarks() {
    let ids = new Set(
      [...state.saved, ...state.crucial].filter((id) =>
        problemIds.includes(id),
      ),
    );
    return `${heading("YOUR REVIEW SHELF", "Keep important ideas close.", "Saved explanations, questions and crucial review problems.")}<h2>Explanations (${state.topicBookmarks.filter((id) => hub(id)).length})</h2><div class="topic-grid">${state.topicBookmarks.map(hub).filter(Boolean).map(card).join("") || '<p class="muted">Bookmark an explanation from any learning hub.</p>'}</div><h2>Problems (${ids.size})</h2>${
      ids.size
        ? bank
            .filter((p) => ids.has(p.id))
            .map(problemRow)
            .join("")
        : empty(
            "No saved problems yet.",
            "Use Save or Mark crucial while practicing.",
            "Browse practice",
            "go('library')",
          )
    }`;
  }
  function searchPage() {
    let q = searchQuery.toLowerCase().trim(),
      hs = q
        ? hubs.filter((h) =>
            [h.title, h.overview, h.detail, h.equation, ...h.terms]
              .join(" ")
              .toLowerCase()
              .includes(q),
          )
        : [],
      ps = q
        ? bank.filter((p) =>
            [p.title, p.prompt, p.topic, p.subtopic]
              .join(" ")
              .toLowerCase()
              .includes(q),
          )
        : [];
    return `${heading("GLOBAL SEARCH", q ? `Results for “${searchQuery}”` : "Search your study space.", `${hs.length} topics and ${ps.length} problems match.`)}<button onclick="searchQuery='';go('search')">Clear search</button>${hs.length ? `<h2>Topics, equations & concepts</h2><div class="topic-grid">${hs.map(card).join("")}</div>` : ""}${ps.length ? `<h2>Problems</h2>${ps.map(problemRow).join("")}` : ""}${!hs.length && !ps.length ? empty(q ? "No matching results." : "Enter a topic or concept above.", q ? "Try “torque”, “pKa”, “flow”, or a phrase from a problem." : "Search covers explanations, equations, glossary terms and problem descriptions.", "", "") : ""}`;
  }
  let refQuery = "";
  function reference() {
    let hs = hubs.filter((h) =>
      [h.title, h.equation, h.variables, ...h.terms]
        .join(" ")
        .toLowerCase()
        .includes(refQuery.toLowerCase()),
    );
    return `${heading("EQUATIONS · VOCABULARY · UNITS", "A reference with context.", "Every relation includes definitions and limits. Follow its topic link for examples.")}<div class="actions no-print"><button onclick="window.print()">Print reference sheet</button></div><section class="panel no-print"><h2>Unit conversion assistant</h2><form onsubmit="convertForm(event)"><div class="filters"><label>Value<input id="convert-value" value="1" required></label><label>From<select id="convert-from">${Object.keys(
      E.units,
    )
      .filter(Boolean)
      .map((u) => `<option ${u === "m" ? "selected" : ""}>${u}</option>`)
      .join("")}</select></label><label>To<select id="convert-to">${Object.keys(
      E.units,
    )
      .filter(Boolean)
      .map((u) => `<option ${u === "cm" ? "selected" : ""}>${u}</option>`)
      .join(
        "",
      )}</select></label><button class="primary">Convert</button></div></form><output id="conversion-result" role="status"></output><p class="small muted">Temperatures are absolute readings, not temperature differences. Gauge and absolute pressures cannot be distinguished by units alone; supply atmospheric pressure yourself. Units sharing a dimension can convert.</p></section><form class="filters no-print" onsubmit="event.preventDefault();refQuery=this.elements.reference.value;render()"><label>Find equation or definition<input name="reference" value="${esc(refQuery)}" placeholder="e.g. momentum, pKa, hardiness"></label><button>Search reference</button><button type="button" onclick="refQuery='';render()">Clear</button></form>${hs.length ? hs.map((h) => `<article class="panel"><h2>${esc(h.title)}</h2><div class="equation" tabindex="0">${esc(h.equation)}</div><p>${esc(h.variables)}</p><p><strong>Limits & conventions:</strong> ${esc(h.assumptions)}</p><details><summary>Glossary & common mistakes</summary>${h.terms.map((t) => `<p>${esc(t)}</p>`).join("")}<ul>${h.mistakes.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></details><button class="text-link" onclick="go('hub','${h.id}')">Open examples and explanation →</button></article>`).join("") : empty("No reference matches.", "Try a broader concept or clear the filter.", "", "")}`;
  }
  function convertForm(e) {
    e.preventDefault();
    let v = E.numeric($("convert-value").value),
      a = $("convert-from").value,
      b = $("convert-to").value;
    let r = Number.isFinite(v)
      ? E.convert(v, a, b)
      : { error: "Enter a finite number, fraction or scientific notation." };
    $("conversion-result").textContent =
      r.error || `${v} ${a} = ${Number(r.value.toPrecision(10))} ${b}`;
  }
  function progress() {
    return `${heading("ACTIVITY, NOT A MASTERY CLAIM", "Your progress & personal notes.", "Viewing, practicing and self-assessment are recorded separately. Repeated independent practice is stronger evidence than a single correct answer.")}<section class="panel"><h2>Keep a backup</h2><button class="primary" onclick="openBackup()">Full backup & restore</button><p>Data stays in this browser and is not synced to an account. Version 1 progress is migrated without changing its original storage key. Export regularly or before switching devices.</p><div class="actions"><button class="primary" onclick="exportData()">Export progress</button><button onclick="openBackup()">Import backup</button><input id="import-file" hidden type="file" accept="application/json" onchange="importData(this.files[0])">${rawRecovery ? "<button onclick=\"download(rawRecovery,'rpi-original-recovery.json')\">Export original recovery copy</button>" : ""}<button class="danger" onclick="resetProgress()">Reset progress…</button></div><p id="import-status" role="status"></p></section><section class="panel"><h2>Practice by topic</h2><div class="table-scroll"><table><thead><tr><th>Topic</th><th>Viewed recently</th><th>Distinct attempted</th><th>Correct / attempts</th><th>Self-assessed</th></tr></thead><tbody>${hubs
      .map((h) => {
        let st = E.stats(state.attempts, h.problems);
        return `<tr><th><button class="text-link" onclick="go('hub','${h.id}')">${h.title}</button></th><td>${state.visited.includes(h.id) ? "Yes" : "Not in recent list"}</td><td>${st.unique}/${h.problems.length}</td><td>${st.correct}/${st.attempts}</td><td>${st.self}</td></tr>`;
      })
      .join(
        "",
      )}</tbody></table></div></section><section class="panel"><h2>Personal notes</h2>${
      Object.entries(state.notes)
        .filter(([id, n]) => n.trim() && hub(id))
        .map(
          ([id, n]) =>
            `<details><summary>${esc(hub(id).title)}</summary><p class="preline">${esc(n)}</p><button onclick="go('hub','${id}')">Edit in learning hub</button></details>`,
        )
        .join("") || "<p>No notes yet. Add them alongside a learning hub.</p>"
    }</section><section class="panel"><h2>Recent attempts</h2>${
      state.attempts
        .filter((a) => problemIds.includes(a.id))
        .slice(-30)
        .reverse()
        .map(
          (a) =>
            `<details><summary>${a.status === "self" ? "○ Pending self-check" : a.correct ? "✓ Correct" : "↺ Review"} · ${esc(problem(a.id).title)} · ${new Date(a.at).toLocaleDateString()}${a.selfAssessed ? " · self-assessed" : ""}</summary><p>Your answer: ${esc(a.answer)} ${esc(a.units || "")}</p><p class="preline">${esc(a.work)}</p><button onclick="openProblem('${a.id}')">Retry problem</button></details>`,
        )
        .join("") || "<p>Your first attempt will start the history.</p>"
    }</section>`;
  }
  function download(text, name) {
    let url = URL.createObjectURL(
        new Blob([text], { type: "application/json" }),
      ),
      a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function exportData() {
    download(
      JSON.stringify({ version: 2, state }, null, 2),
      "rpi-practice-progress-v2.json",
    );
  }
  function importData() {
    openBackup();
  }
  function resetProgress() {
    if (
      !confirm(
        "Reset attempts, notes, bookmarks, drafts and sessions in this browser? Export a backup first if you may need them.",
      )
    )
      return;
    let oldTheme = state.theme;
    recoveryBlocked = false;
    storageMessage = "";
    state = E.defaults();
    state.theme = oldTheme;
    state.route = { page: "progress" };
    persist();
    render();
  }
  function coverage() {
    return `${heading("HONEST COVERAGE", "What is covered—and what is still missing.", "Counts below reflect authored content. Source alignment describes the materials located, not a guarantee of current exam coverage.")}<div class="stat-grid"><div><b>${hubs.length}</b><span>Learning hubs</span></div><div><b>${hubs.reduce((n, h) => n + h.examples.length, 0)}</b><span>Worked-example views · shared problem bank</span></div><div><b>${bank.length}</b><span>Practice questions · ${bank.filter((p) => !/^q\d+$/.test(p.id)).length} new</span></div><div><b>${bank.filter((p) => /^q\d+$/.test(p.id)).length}</b><span>Active original questions retained with stable IDs</span></div></div><section class="panel"><h2>Curriculum map</h2><p>All three courses cover standard introductory topics. Public textbook supplements provide additional references. Instructor-specific exam boundaries remain unverified.</p><div class="table-scroll"><table><thead><tr><th>Course / unit / topic</th><th>Practice</th><th>Examples</th><th>Support</th></tr></thead><tbody>${hubs.map((h) => `<tr><td><small>${h.course} · ${h.unit}</small><br><button class="text-link" onclick="go('hub','${h.id}')">${h.title}</button></td><td>${h.problems.length}</td><td>${h.examples.length}</td><td>${sourceLabel(h)}</td></tr>`).join("")}</tbody></table></div></section><section class="panel"><h2>Documented gaps & next authoring work</h2>${gaps.map((g) => `<article class="gap"><span class="badge">${g.status}</span><h3>${g.course} · ${g.area}</h3><p>${g.detail}</p></article>`).join("")}</section><section class="panel"><h2>Sources and review limits</h2>${Object.values(
      Object.fromEntries(hubs.map((h) => [h.source, sources[h.source]])),
    )
      .map(
        (s) =>
          `<details><summary>${esc(s.title)}</summary>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">Open source ↗</a>` : ""}<p>${esc(s.note)}</p></details>`,
      )
      .join(
        "",
      )}<p>This public package contains authored practice and public references, without private course documents, private document links, or retired subject content. Legacy problem IDs preserve supported backup records.</p><h3>Technical care</h3><p>Friction reduces mechanical energy, not total energy. R/S labels do not determine optical-rotation signs. Reaction rate and equilibrium favorability are different questions. Online supplements are learning resources, not evidence of your upcoming exam content.</p></section><section class="panel"><h2>Feature boundaries</h2><p>Numeric grading supports fractions, scientific notation, declared compatible units and displayed tolerances. Short concept labels use accepted synonyms. Open-ended and symbolic work uses a rubric; no drawing recognition or general symbolic algebra is claimed. Study sessions sample a fixed authored library, not an unlimited question generator.</p><p>Self-assessed responses are marked as such. Data is local, with export/import. The app makes no mastery claim and does not forecast an actual exam.</p></section>`;
  }
  Object.assign(window, {
    assessSession,
    chooseOption,
    $,
    isExam,
    quickMatch,
    quickFilters,
    masteryBar,
    updateMissions,
    persist,
    theme,
    go,
    normalizeScope,
    draft,
    setDraft,
    choose,
    start,
    openProblem,
    resume,
    advance,
    previous,
    finish,
    ask,
    toggle,
    checkAnswer,
    assess,
    misses,
    missedIds,
    retryMissed,
    shuffle,
    sourceLabel,
    sourceInfo,
    heading,
    card,
    render,
    home,
    courseFilter,
    learn,
    hubPage,
    example,
    checkNote,
    interactive,
    updateModel,
    filtered,
    problemRow,
    library,
    empty,
    practice,
    checkWork,
    builder,
    buildSession,
    tick,
    summary,
    printSession,
    mistakePage,
    bookmarks,
    searchPage,
    reference,
    convertForm,
    progress,
    download,
    exportData,
    resetProgress,
    coverage,
    importData,
  });
  Object.defineProperties(window, {
    state: {
      configurable: true,
      get: () => state,
      set: (value) => (state = value),
    },
    help: {
      configurable: true,
      get: () => help,
      set: (value) => (help = value),
    },
    feedback: {
      configurable: true,
      get: () => feedback,
      set: (value) => (feedback = value),
    },
    workChecks: {
      configurable: true,
      get: () => workChecks,
      set: (value) => (workChecks = value),
    },
    revealedExamples: {
      configurable: true,
      get: () => revealedExamples,
      set: (value) => (revealedExamples = value),
    },
    searchQuery: {
      configurable: true,
      get: () => searchQuery,
      set: (value) => (searchQuery = value),
    },
    builderSelected: {
      configurable: true,
      get: () => builderSelected,
      set: (value) => (builderSelected = value),
    },
    refQuery: {
      configurable: true,
      get: () => refQuery,
      set: (value) => (refQuery = value),
    },
  });

  function isExam() {
    return state.session?.mode === "Practice exam" && !state.session.completed;
  }
  function quickMatch(p) {
    const q = state.filters.quick || "All";
    return (
      q === "All" ||
      (q === "Unseen" && !state.attempts.some((a) => a.id === p.id)) ||
      (q === "Flagged" && state.crucial.includes(p.id)) ||
      (q === "Needs Review" && missedIds().includes(p.id))
    );
  }
  function quickFilters() {
    return `<div class="quick-filters" role="group" aria-label="Question status">${["All", "Unseen", "Flagged", "Needs Review"].map((q) => `<button aria-pressed="${(state.filters.quick || "All") === q}" onclick="state.filters.quick='${q}';persist();render()">${q}</button>`).join("")}</div>`;
  }
  function masteryBar(h) {
    const m = E.mastery(state.attempts, h.problems);
    return `<div class="mastery"><label>${m.correct}/${m.total} latest answers correct <progress aria-label="${esc(h.title)} demonstrated coverage" max="${m.total || 1}" value="${m.correct}"></progress></label><small>Demonstrated coverage · ${m.self} self-assessed · not an exam prediction</small></div>`;
  }
  function updateMissions(completing = false) {
    if (!window.ReviewMissions || !window.Orbitarium) return;
    Orbitarium.syncMissions(ReviewMissions.generate(state.attempts, bank));
    if (completing && state.session) Orbitarium.completeMissions(state.session);
  }
  window.addEventListener("keydown", (event) => {
    if (
      event.defaultPrevented ||
      event.repeat ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      document.querySelector("dialog[open]") ||
      event.target.closest('input,textarea,select,[contenteditable="true"]')
    )
      return;
    if (state.route.page !== "practice") return;
    const key = event.key.toLowerCase();
    if (key === "h" && !isExam()) {
      event.preventDefault();
      ask("hint");
    } else if (key === "r") {
      event.preventDefault();
      toggle("crucial", state.current);
    } else if (key === "escape") {
      event.preventDefault();
      go("library");
    } else if (key === "enter") {
      event.preventDefault();
      const response = state.session?.responses[state.session.index];
      if (response && response.status !== "skipped") advance();
      else checkAnswer(event);
    } else if (/^[1-4]$/.test(key)) {
      const options = [...document.querySelectorAll("[data-answer-option]")];
      if (options[Number(key) - 1]) {
        event.preventDefault();
        options[Number(key) - 1].click();
      }
    }
  });

  function safeVisual(p) {
    try {
      return visual(p);
    } catch (error) {
      console.warn("Diagram unavailable", p?.id);
      return '<p class="alert">This diagram could not load. The question and your work are still available.</p>';
    }
  }
  function routeForState() {
    const r = { ...state.route };
    if (r.page === "hub") {
      r.course = StudioRouter.slug(hub(r.id)?.course);
      r.mode = "learn";
    } else if (r.page === "practice") {
      r.course = StudioRouter.slug(current()?.subject);
      r.mode = "practice";
      r.question = state.current;
    } else if (
      ["learn", "library", "mistakes"].includes(r.page) &&
      state.filters.course !== "All"
    ) {
      r.course = StudioRouter.slug(state.filters.course);
      r.mode =
        r.page === "library"
          ? "practice"
          : r.page === "mistakes"
            ? "review"
            : "learn";
    }
    if (r.page === "search") r.query = searchQuery;
    return r;
  }
  function syncRoute(replace = false) {
    const hash = StudioRouter.encode(routeForState());
    if (location.hash !== hash)
      history[replace ? "replaceState" : "pushState"](null, "", hash);
  }
  function readRoute() {
    const r = StudioRouter.decode(location.hash);
    if (!r) return;
    const question = r.question && bank.find((p) => p.id === r.question);
    if (
      (r.id && !hub(r.id)) ||
      (r.question && !question) ||
      (r.course &&
        question &&
        question.subject !== StudioRouter.courses[r.course])
    ) {
      state.route = { page: "notfound" };
      return;
    }
    state.route = r;
    if (r.course) state.filters.course = StudioRouter.courses[r.course];
    if (r.id) state.filters.hub = r.id;
    if (r.query !== undefined) searchQuery = r.query;
    if (question) {
      state.current = question.id;
      if (
        state.session &&
        !state.session.completed &&
        state.session.ids.includes(question.id)
      )
        state.session.index = state.session.ids.indexOf(question.id);
      else if (state.session && !state.session.completed) {
        state.route = { page: "library" };
        storageMessage =
          "An active session is saved. Resume it or finish it before opening another question.";
      } else if (!state.session)
        state.session = {
          ids: [question.id],
          index: 0,
          responses: {},
          started: Date.now(),
          deadline: null,
          completed: false,
          mode: "Guided practice",
        };
    }
    help = "";
    feedback = null;
    lastAttempt = null;
    persist();
  }
  window.addEventListener("hashchange", () => {
    readRoute();
    render();
  });
  window.addEventListener("popstate", () => {
    readRoute();
    render();
  });
  window.addEventListener("studio:storage", () => {
    const el = $("storage-status");
    if (el)
      el.textContent = StudioStorage.status() || "Local save · not synced";
  });

  normalizeScope();
  updateMissions();
  readRoute();
  syncRoute(true);
  render();
}
