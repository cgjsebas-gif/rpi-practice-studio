/* UI controller: OrbitCore stays independent from Practice Studio. */
window.Orbitarium = (() => {
  const C = OrbitCore,
    key = "rpi-orbitarium-v1",
    e = (s) =>
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
  let data = {
      version: 1,
      planets: [],
      assignments: [],
      excludedCalendar: [],
      center: "auto",
      config: {
        clientId:
          "438894651104-np5i0ss6dcfo20lstbtqlbbq4t1sk61p.apps.googleusercontent.com",
        calendar: "primary",
      },
    },
    query = "",
    timingFilter = "all",
    page = 0,
    mode = "solar",
    paused = matchMedia("(prefers-reduced-motion: reduce)").matches,
    message = "",
    blocked = false,
    frame = 0,
    candidates = [];
  let lectures = [];
  let removedCalendar = 0;
  try {
    const s = JSON.parse(StudioStorage.getItem(key) || "null");
    if (s) {
      lectures = Array.isArray(s.lectures) ? s.lectures.filter(l => l && typeof l.reflection === "string" && l.reflection.trim().length >= 100) : [];
      if (s.version !== 1 || !Array.isArray(s.planets)) throw Error();
      const excluded = [
        ...s.planets,
        ...(Array.isArray(s.assignments) ? s.assignments : []),
      ].filter((p) => p && p.source === "google" && !C.eligible(p));
      s.excludedCalendar = [
        ...(s.excludedCalendar || []),
        ...excluded.filter(
          (p) => !(s.excludedCalendar || []).some((a) => a.key === p.key),
        ),
      ];
      removedCalendar = new Set(excluded.map((p) => p.key)).size;
      data = {
        version: 1,
        planets: s.planets
          .map((p) => p && C.normalize(p, p.source, p.calendar))
          .filter(Boolean),
        excludedCalendar: Array.isArray(s.excludedCalendar)
          ? s.excludedCalendar
          : [],
        center: typeof s.center === "string" ? s.center : "auto",
        assignments: Array.isArray(s.assignments)
          ? s.assignments
              .filter(
                (a) =>
                  a &&
                  typeof a.key === "string" &&
                  typeof a.title === "string" &&
                  (a.source !== "google" || C.eligible(a)),
              )
              .map((a) => ({
                ...a,
                topic: String(a.topic || "Independent study"),
                due:
                  typeof a.due === "string" &&
                  Number.isFinite(Date.parse(a.due))
                    ? a.due
                    : "",
                completed: !!a.completed,
              }))
          : [],
        config: {
          clientId: String(
            s.config?.clientId ||
              "438894651104-np5i0ss6dcfo20lstbtqlbbq4t1sk61p.apps.googleusercontent.com",
          ),
          calendar: String(s.config?.calendar || "primary"),
        },
      };
    }
  } catch {
    blocked = true;
    message =
      "Saved galaxy could not be read. Export recovery data before importing a valid backup.";
  }
  // Recover existing achievements as completed assignments without changing their worlds.
  for (const p of data.planets)
    if (!data.assignments.some((a) => a.key === p.key))
      data.assignments.push({ ...p, due: p.dueAt || "", completed: true, planet: p });
  let assignmentMode = "list",
    assignmentQuery = "",
    assignmentFilter = "all",
    month = new Date().getMonth(),
    year = new Date().getFullYear();
  function reconcileTiming() {
    data.planets = data.planets.map(p => {
      const a = data.assignments.find(a => a.key === p.key);
      return C.normalize({...p, dueAt:a?.due || a?.dueAt || p.dueAt}, p.source, p.calendar);
    }).filter(Boolean);
    data.assignments.forEach(a => {
      const p = data.planets.find(p => p.key === a.key);
      if (p) { a.planet = p; a.completedAt = p.completedAt; a.dueAt = p.dueAt; }
      a.isLateSubmission = !!a.completed && C.timing({...a, completedAt:a.planet?.completedAt || a.completedAt}).status === "late";
    });
  }
  reconcileTiming();
  data.lectures = lectures;
  function timingLabel(p) {
    const t = C.timing(p);
    return t.status === "late" ? "Satellite captured: Submitted past due date" + (t.hours == null ? " (exact hours unknown)" : ` (+${t.hours < 0.1 ? "<0.1" : t.hours.toFixed(1)} hrs late)`)
      : t.status === "on-time" ? "On-time completion" : "Submission timing unknown";
  }
  const save = () => {
    data.lectures = lectures;
    reconcileTiming();
    if (blocked)
      throw Error("Recover your saved galaxy before making changes.");
    try {
      StudioStorage.setItem(key, JSON.stringify({...data, lectures}));
    } catch {
      throw Error(
        "Storage is full or unavailable. Export your galaxy before leaving.",
      );
    }
  };
  if (removedCalendar) {
    try {
      save();
      message = `Archived ${removedCalendar} untagged calendar records. Only [ASSIGNMENT] and [DEADLINE] calendar titles are imported.`;
    } catch (err) {
      message = err.message;
    }
  }
  const options = () =>
    Object.entries(C.themes)
      .map(([k, v]) => `<option value="${k}">${v.name}</option>`)
      .join("");
  const centers = {
    auto: "Vary by sector",
    blackhole: "Black hole",
    binary: "Binary stars",
    nebula: "Nebula core",
    pulsar: "Pulsar",
    sun: "Amber star",
  };
  function centerType() {
    return data.center !== "auto" && centers[data.center]
      ? data.center
      : ["blackhole", "binary", "nebula", "pulsar", "sun"][page % 5];
  }
  function setCenter(v) {
    if (!centers[v]) return;
    data.center = v;
    try {
      save();
      render();
    } catch (err) {
      message = err.message;
    }
  }
  function drawCenter(ctx, t) {
    const type = centerType();
    ctx.save(); ctx.translate(500,310);
    if(type !== "binary") ctx.rotate(t * (type === "pulsar" ? 2.5 : .45));
    const pulse=1+.07*Math.sin(t*5); ctx.scale(pulse,pulse); ctx.translate(-500,-310);
    for (let y = -64; y <= 64; y += 4)
      for (let x = -80; x <= 80; x += 4) {
        const d = Math.hypot(x, y),
          ring = Math.hypot(x / 1.6, y / 0.5);
        let color = "";
        if (type === "blackhole") {
          if (ring > 35 && ring < 50) color = ring < 41 ? "#fff0b8" : "#e98b66";
          if (d < 24) color = "#03040b";
          else if (d < 29) color = "#ba95f3";
        } else if (type === "binary") {
          const d1 = Math.hypot(x - 29 * Math.cos(t), y - 17 * Math.sin(t)),
            d2 = Math.hypot(x + 29 * Math.cos(t), y + 17 * Math.sin(t));
          if (d1 < 20) color = d1 < 13 ? "#fff3bb" : "#f4ac62";
          if (d2 < 15) color = d2 < 10 ? "#e6ffff" : "#74bfe9";
        } else if (type === "nebula") {
          const noise = C.hash(x + ":" + y) % 17;
          if (d < 55 && noise < 11)
            color = ["#835fa7", "#42688e", "#b976b3", "#93d0d1"][noise % 4];
          if (d < 12) color = "#fff0da";
        } else if (type === "pulsar") {
          if (Math.abs(x) < 5 && Math.abs(y) < 61) color = "#74d5ef";
          if (d < 22) color = "#6f9fef";
          if (d < 13) color = "#efffff";
        } else {
          if (d < 32) color = d < 23 ? "#ffe6a3" : "#f4a547";
        }
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(500 + x, 310 + y, 4, 4);
        }
      }
    ctx.restore();
  }
  function view() {
    return `<section class="orbitarium"><header class="orbit-head"><span class="orbit-kicker">MISSION CONTROL / YOUR COMPLETION COSMOS</span><h1 id="main-heading" tabindex="-1">ORBITARIUM<span class="blink">_</span></h1><p>Every finished assignment becomes a world worth exploring.</p><div class="orbit-actions"><button onclick="Orbitarium.addForm()">＋ Forge a planet</button><button onclick="Orbitarium.lectureForm()">＋ Lecture attended</button><button onclick="Orbitarium.syncForm()">↻ Assignments & calendar</button><button onclick="Orbitarium.importForm()">⇧ Import completions</button><button onclick="Orbitarium.exportData()">⇩ Backup galaxy</button></div></header><div class="orbit-hud"><b>${data.planets.length} WORLDS DISCOVERED</b><span>LOCAL LOG · PRIVATE ON THIS DEVICE</span></div><p id="orbit-status" role="status">${e(message)}</p><div class="orbit-tools"><label>Search galaxy<input id="orbit-search" type="search" value="${e(query)}" oninput="Orbitarium.search(this.value)" placeholder="Assignment, course, planet…"></label><button onclick="Orbitarium.mode()">${mode === "solar" ? "▦ Galaxy grid" : "◎ Solar system"}</button><button onclick="Orbitarium.pause()">${paused ? "▶ Resume orbits" : "Ⅱ Pause orbits"}</button></div><label>Galaxy center<select onchange="Orbitarium.setCenter(this.value)">${Object.entries(
      centers,
    )
      .map(
        ([v, label]) =>
          `<option value="${v}" ${data.center === v ? "selected" : ""}>${label}</option>`,
      )
      .join(
        "",
      )}</select></label><label>Submission timing<select onchange="Orbitarium.timingFilter(this.value)">${[["all","All worlds"],["on-time","On-time"],["late","Late (Moon)"],["unknown","Timing unknown"]].map(([v,l])=>`<option value="${v}" ${timingFilter===v ? "selected" : ""}>${l}</option>`).join("")}</select></label><p class="moon-legend">◌ Moon = completed after the due date. Missing dates stay unknown. All-day deadlines end at midnight Eastern.</p><div id="orbit-results"></div><p class="orbit-foot">A permanent record of effort. Fictional worlds, real accomplishments.<br>Calendar sync is read-only. A past due date or “confirmed” event is never proof of completion.</p><dialog id="orbit-dialog" class="orbitarium orbit-dialog" aria-labelledby="orbit-dialog-title"></dialog></section>`;
  }
  function list() {
    return data.planets.filter((p) =>
      (timingFilter === "all" || C.timing(p).status === timingFilter) && [p.title, p.topic, C.world(p).name]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  }
  function results() {
    cancelAnimationFrame(frame);
    const el = document.getElementById("orbit-results");
    if (!el) return;
    const all = list();
    page = Math.min(page, Math.max(0, Math.ceil(all.length / 24) - 1));
    const ps = all.slice(page * 24, (page + 1) * 24);
    el.innerHTML = `<div class="orbit-sector"><button onclick="Orbitarium.page(-1)" ${page === 0 ? "disabled" : ""}>← Sector</button><span>SECTOR ${page + 1} / ${Math.max(1, Math.ceil(all.length / 24))} · ${all.length} matching worlds</span><button onclick="Orbitarium.page(1)" ${(page + 1) * 24 >= all.length ? "disabled" : ""}>Sector →</button></div>${mode === "solar" ? '<div class="orbit-space"><canvas id="orbit-canvas" width="1000" height="620" aria-label="Animated solar system. Use the planet buttons below to explore."></canvas><div class="space-caption">' + e(centers[centerType()].toUpperCase()) + "<br><small>A COSMOS BUILT BY YOU</small></div></div>" : ""}${!ps.length && (query || timingFilter !== "all") ? '<div class="orbit-empty"><strong>NO WORLDS FOUND</strong><p>Try another assignment, course name or timing filter.</p></div>' : !ps.length ? '<div class="orbit-empty"><strong>UNCHARTED SPACE</strong><p>Finish something, then forge your first planet.<br>No sample achievements are counted as yours.</p><button onclick="Orbitarium.addForm()">＋ Log a completed assignment</button></div>' : ""}<div class="planet-grid ${mode === "solar" ? "compact" : ""}">${ps.map((p, i) => `<button class="planet-card ${p.isLateSubmission ? "planet--late" : ""}" title="${e(timingLabel(p))}" onclick="Orbitarium.open(${page * 24 + i})">${C.sprite(p)}<span><b>${e(C.world(p).name)}</b><small>${e(p.title)}</small><em>${e(C.themes[p.theme].name)} / ${e(p.topic)}</em><small class="moon-label">${e(timingLabel(p))}</small></span></button>`).join("")}</div>`;
    if (mode === "solar") animate(ps);
  }
  function animate(ps) {
    const canvas = document.getElementById("orbit-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d"),
      sprites = ps.map((p) => {
        const image = new Image();
        image.src =
          "data:image/svg+xml;charset=utf-8," + encodeURIComponent(C.sprite(p));
        return image;
      });
    let t = 0,
      last = -100,
      positions = [];
    function draw(now) {
      if (!canvas.isConnected) return;
      if (now - last < 33) {
        frame = requestAnimationFrame(draw);
        return;
      }
      last = now;
      if (!paused && !document.hidden) t += 0.003;
      const light = document.documentElement.dataset.theme === "light";
      ctx.fillStyle = light ? "#e8f0fa" : "#0b1022";
      ctx.fillRect(0, 0, 1000, 620);
      for (let i = 0; i < 170; i++) {
        let n = C.hash("star" + i);
        ctx.fillStyle = i % 3 ? "#596b91" : "#d6ecff";
        ctx.fillRect(n % 1000, (n >>> 10) % 620, i % 4 === 0 ? 3 : 2, 2);
      }
      ctx.strokeStyle = light ? "#aebed4" : "#29314c";
      for (let r = 1; r <= 4; r++) {
        ctx.beginPath();
        ctx.ellipse(500, 310, 85 + r * 84, 40 + r * 49, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      lectures.slice(-100).forEach((l,i) => {
        const seed=C.hash(l.id), x=((seed%1000+t*(20+seed%25))%1040)-20, y=((seed>>>10)%620+t*(8+seed%9))%620;
        ctx.save(); ctx.translate(x,y); ctx.fillStyle=["#bfa58c","#f3d17c","#91b9dc","#c3a7dd"][seed%4];
        if(seed%2) { ctx.fillRect(-1,-6,2,12); ctx.fillRect(-6,-1,12,2); ctx.fillRect(-2,-2,4,4); }
        else { ctx.rotate(seed+t); ctx.fillRect(-5,-3,10,6); ctx.fillRect(-3,-5,6,10); ctx.fillStyle="#635d70";ctx.fillRect(0,-2,3,3); }
        ctx.restore();
      });
      drawCenter(ctx, t);
      ps.forEach((p, i) => {
        let ring = Math.floor(i / 6) + 1,
          angle =
            ((i % 6) * Math.PI) / 3 +
            (C.hash(p.key) % 100) / 90 +
            t / (ring * 0.8);
        let x = 500 + Math.cos(angle) * (85 + ring * 84),
          y = 310 + Math.sin(angle) * (40 + ring * 49);
        ctx.imageSmoothingEnabled = false;
        if (sprites[i].complete && sprites[i].naturalWidth)
          ctx.drawImage(sprites[i], x - 16, y - 16, 32, 32);
        if (p.isLateSubmission) {
          ctx.save();
          ctx.strokeStyle = light ? "#98623d88" : "#e5ac7288";
          ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.arc(x, y, 25, 0, Math.PI*2); ctx.stroke();
          const phase = t * 7 + C.hash(p.key), mx = Math.round(x + Math.cos(phase)*25), my = Math.round(y + Math.sin(phase)*25);
          ctx.fillStyle = "#dfb28b"; ctx.fillRect(mx-3,my-5,6,10); ctx.fillRect(mx-5,my-3,10,6);
          ctx.fillStyle = "#9b6255"; ctx.fillRect(mx-2,my-2,3,3); ctx.fillRect(mx+2,my+1,2,2); ctx.restore();
        }
        ctx.font = "12px monospace";
        ctx.fillStyle = light ? "#263c5c" : "#d6ecff";
        ctx.fillText(C.world(p).name, x + 35, y + 4);
        positions[i] = { x, y };
      });
      if (!paused) frame = requestAnimationFrame(draw);
    }
    sprites.forEach((img) => {
      img.onload = () => {
        if (paused) {
          last = -100;
          frame = requestAnimationFrame(draw);
        }
      };
    });
    frame = requestAnimationFrame(draw);
    canvas.onmousemove = (ev) => {
      const r = canvas.getBoundingClientRect(), x = (ev.clientX-r.left)*1000/r.width, y = (ev.clientY-r.top)*620/r.height;
      const i = positions.findIndex(p => p && Math.hypot(p.x-x,p.y-y)<32);
      canvas.title = i < 0 ? "" : ps[i].title + " — " + timingLabel(ps[i]);
    };
    canvas.onclick = (ev) => {
      const r = canvas.getBoundingClientRect(),
        x = ((ev.clientX - r.left) * 1000) / r.width,
        y = ((ev.clientY - r.top) * 620) / r.height;
      const i = positions.findIndex(
        (p) => p && Math.hypot(p.x - x, p.y - y) < 26,
      );
      if (i >= 0) open(page * 24 + i);
    };
  }
  function modal(title, html) {
    const d = document.getElementById("orbit-dialog"),
      previous = document.activeElement;
    d.onclose = () => previous?.isConnected && previous.focus();
    d.innerHTML = `<div class="dialog-top"><h2 id="orbit-dialog-title">${e(title)}</h2><button onclick="document.getElementById('orbit-dialog').close()" aria-label="Close dialog">✕</button></div>${html}`;
    d.showModal();
  }
  function addForm() {
    modal(
      "FORGE A NEW WORLD",
      `<form id="planet-form"><label>Completed assignment<input name="title" required maxlength="180" placeholder="e.g. Related rates problem set"></label><label>Course or topic<input name="topic" required maxlength="120" placeholder="Calculus I"></label><label>Completion date<input name="completedAt" type="date" required max="${new Date().toLocaleDateString("en-CA")}" value="${new Date().toLocaleDateString("en-CA")}"></label><label>Due date (optional)<input name="due" type="date"></label><label>Planet theme<select name="theme"><option value="auto">Automatic from topic</option>${options()}</select></label><label>Captain’s log<textarea name="notes" maxlength="2000" placeholder="What did you learn?"></textarea></label><label class="check"><input type="checkbox" required> I completed this assignment.</label><button type="submit">✦ Generate planet</button><p id="orbit-form-status" role="status"></p></form>`,
    );
    document.getElementById("planet-form").onsubmit = (ev) => {
      ev.preventDefault();
      try {
        const raw = Object.fromEntries(new FormData(ev.target));
        const p = C.normalize({
          ...raw,
          id: crypto.randomUUID(),
          completed: true,
        });
        data.planets = C.merge(data.planets, [p]);
        data.assignments.push({ ...p, due: "", planet: p });
        save();
        document.getElementById("orbit-dialog").close();
        message = "A new world has joined your galaxy.";
        render();
      } catch (err) {
        document.getElementById("orbit-form-status").textContent = err.message;
      }
    };
  }
  function editDates(i) {
    const a=data.assignments[i]; if(!a)return;
    const local=v=>{if(!v)return ""; if(v.length===10)return v+"T23:59";const d=new Date(v);return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16);};
    modal("EDIT ASSIGNMENT DATES",`<form id="date-form"><p>Times use your device timezone. These edits stay in this app and survive calendar refreshes. A submission date records your reported submission.</p><label>Due date and time<input name="due" type="datetime-local" value="${e(local(a.due || a.dueAt))}"></label><label>Submission date and time<input name="submitted" type="datetime-local" value="${e(local(a.planet?.completedAt || a.completedAt))}"></label><button>Save dates</button><p id="date-error" role="status"></p></form>`);
    document.getElementById("date-form").onsubmit=ev=>{ev.preventDefault();try{
      const f=new FormData(ev.target), due=f.get("due"), submitted=f.get("submitted");
      const dueAt=due?new Date(due).toISOString():null, completedAt=submitted?new Date(submitted).toISOString():null;
      a.due=dueAt || "";a.dueAt=dueAt;a.completedAt=completedAt;a.datesEdited=true;
      if(a.planet)a.planet={...a.planet,dueAt,completedAt};
      data.planets=data.planets.map(p=>p.key===a.key?{...p,dueAt,completedAt}:p);
      save();document.getElementById("orbit-dialog").close();render();
    }catch(err){document.getElementById("date-error").textContent=err.message;}};
  }
  function lectureForm() {
    modal("LECTURE ATTENDED",`<form id="lecture-form"><label>Course / lecture title<input name="title" required maxlength="180"></label><label>Date attended<input name="date" type="date" required></label><label>What was taught and what you learned (100 characters minimum)<textarea name="reflection" required minlength="100" maxlength="4000"></textarea></label><label class="check"><input type="checkbox" required>I actually attended this lecture.</label><button>Add to my sky</button><p id="lecture-error" role="status"></p></form><h3>Your lecture log</h3>${lectures.slice(-20).reverse().map(l=>`<details><summary>${e(l.date)} · ${e(l.title)}</summary><p>${e(l.reflection)}</p></details>`).join("")}`);
    document.getElementById("lecture-form").onsubmit=ev=>{ev.preventDefault();const f=Object.fromEntries(new FormData(ev.target));if(f.reflection.trim().length<100){document.getElementById("lecture-error").textContent="Please write at least 100 characters, excluding surrounding spaces.";return;}lectures.push({...f,reflection:f.reflection.trim(),id:crypto.randomUUID()});save();document.getElementById("orbit-dialog").close();render();};
  }
  function open(i) {
    const p = list()[i];
    if (!p) return;
    const w = C.world(p);
    modal(
      w.name,
      `<div class="planet-profile ${p.isLateSubmission ? "planet--late" : ""}">${C.sprite(p)}<span>${e(C.themes[p.theme].name)} WORLD</span></div><h3>${e(p.title)}</h3><p>${e(p.topic)}</p><p>Completed: ${e(p.completedAt?.slice(0, 10) || "Date not recorded")}<br>Due: ${e(dueLabel(p.dueAt))}<br>Source: ${e(p.source)}</p><p class="moon-label">${e(timingLabel(p))}</p><button onclick="Orbitarium.editDates(${data.assignments.findIndex(a => a.key === p.key)})">Edit due / submission dates</button><h3>PLANET BIO / FICTIONAL LORE</h3><p>${e(w.bio)}</p><p>${e(p.notes)}</p><label>Change world theme<select id="planet-theme">${options()}</select></label><button id="save-theme">Save theme</button>`,
    );
    document.getElementById("planet-theme").value = p.theme;
    document.getElementById("save-theme").onclick = () => {
      try {
        p.theme = document.getElementById("planet-theme").value;
        const a = data.assignments.find((a) => a.key === p.key);
        if (a) a.planet = { ...p };
        save();
        document.getElementById("orbit-dialog").close();
        render();
      } catch (err) {
        message = err.message;
        document.getElementById("orbit-dialog").close();
        render();
      }
    };
  }
  function importForm() {
    modal(
      "IMPORT COMPLETION LOG",
      `<p>Import a galaxy backup or a JSON completion log from your study calendar or academic-deadline chat. Existing IDs merge without duplicate planets. Only explicit completions are accepted.</p><label>JSON file<input id="orbit-file" type="file" accept=".json,application/json"></label><p id="orbit-import-status" role="status"></p>`,
    );
    document.getElementById("orbit-file").onchange = async (ev) => {
      try {
        const f = ev.target.files[0];
        if (!f || f.size > 10000000)
          throw Error("Choose a JSON file under 10 MB.");
        const raw = JSON.parse(await f.text()),
          items = Array.isArray(raw) ? raw : raw.planets || raw.assignments;
        if (!Array.isArray(items) || items.length > 20000)
          throw Error(
            "Expected an assignments or planets array (up to 20,000).",
          );
        const incoming = items
          .map((p) =>
            C.normalize(p, p.source || "import", p.calendar || "primary"),
          )
          .filter(Boolean);
        if (!incoming.length && !raw.assignments?.length)
          throw Error(
            "No explicit completed assignments with IDs and titles found.",
          );
        data.planets = C.merge(data.planets, incoming);
        if (Array.isArray(raw.assignments)) {
          for (const a of raw.assignments) {
            if (
              a &&
              typeof a.key === "string" &&
              typeof a.title === "string" &&
              (a.source !== "google" || C.eligible(a))
            ) {
              const i = data.assignments.findIndex((x) => x.key === a.key);
              if (i < 0) data.assignments.push(a);
              else data.assignments[i] = a;
            }
          }
        }
        for (const p of incoming)
          if (!data.assignments.some((a) => a.key === p.key))
            data.assignments.push({ ...p, due: "", planet: p });
        data.planets = data.planets.filter(
          (p) => !data.assignments.some((a) => a.key === p.key && !a.completed),
        );
        blocked = false;
        save();
        document.getElementById("orbit-dialog").close();
        message = `Merged ${incoming.length} completion records. Repeated IDs stay one planet.`;
        render();
      } catch (err) {
        document.getElementById("orbit-import-status").textContent =
          err.message;
      }
    };
  }
  function exportData() {
    const value = blocked
        ? StudioStorage.getItem(key)
        : JSON.stringify(data, null, 2),
      url = URL.createObjectURL(
        new Blob([value], { type: "application/json" }),
      ),
      a = document.createElement("a");
    a.href = url;
    a.download = "orbitarium-backup.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function syncForm() {
    modal(
      "CALENDAR UPLINK",
      `<p>Only calendar titles beginning with <b>[ASSIGNMENT]</b> or <b>[DEADLINE]</b> are imported (case-insensitive). Tags alone do not mean completed: mark the assignment complete to create its planet. No calendar events are edited.</p><details><summary>First-time Google setup</summary><p>A Google OAuth web client is required. Enable Calendar API in your Google Cloud project; add this website’s origin to Authorized JavaScript origins. This is a client ID, never a client secret.</p><label>OAuth client ID<input id="google-client" value="${e(data.config.clientId)}" placeholder="…apps.googleusercontent.com"></label></details><label>Calendar ID<input id="google-calendar" value="${e(data.config.calendar)}"></label><div class="orbit-tools"><label>From<input id="google-from" type="date" value="${new Date(Date.now() - 90 * 86400000).toLocaleDateString("en-CA")}"></label><label>Through<input id="google-to" type="date" value="${new Date(Date.now() + 90 * 86400000).toLocaleDateString("en-CA")}"></label></div><button id="google-connect">Connect & fetch assignments</button><button onclick="OrbitCalendar.disconnect();document.getElementById('uplink-status').textContent='Disconnected. Saved planets remain.'">Disconnect Google</button><p id="uplink-status" role="status">Not connected in this session.</p><label>Search assignments or courses<input type="search" id="assignment-search" oninput="Orbitarium.calendarResults()" placeholder="Chapter, course, assignment…"></label><p>Untagged lectures and reminders are excluded. Only mark work you actually completed. Dates below are calendar dates, not proof of submission. Blackboard updates depend on Google’s subscription refresh.</p><div id="calendar-candidates"></div><p class="small">Chat completion records are imported separately. This website cannot read your chats automatically.</p>`,
    );
    document.getElementById("google-connect").onclick = async () => {
      const status = document.getElementById("uplink-status"),
        button = document.getElementById("google-connect");
      button.disabled = true;
      try {
        data.config = {
          clientId: document.getElementById("google-client").value.trim(),
          calendar:
            document.getElementById("google-calendar").value.trim() ||
            "primary",
        };
        const from = document.getElementById("google-from").value,
          to = document.getElementById("google-to").value;
        if (!from || !to || from > to)
          throw Error("Choose a valid date range.");
        save();
        status.textContent = "Waiting for Google sign-in…";
        await OrbitCalendar.connect(data.config.clientId);
        status.textContent = "Fetching calendar pages…";
        const fetched = await OrbitCalendar.events(
            data.config.calendar,
            from,
            to,
          ),
          events = fetched.filter(C.eligible);
        const excludedIds = new Set(
          fetched.filter((p) => !C.eligible(p)).map((p) => p.id),
        );
        const removed = data.assignments.filter(
          (a) =>
            a.source === "google" &&
            a.calendar === data.config.calendar &&
            excludedIds.has(a.id),
        );
        data.excludedCalendar.push(
          ...removed.filter(
            (a) => !data.excludedCalendar.some((x) => x.key === a.key),
          ),
        );
        const removedKeys = new Set(removed.map((a) => a.key));
        data.assignments = data.assignments.filter(
          (a) => !removedKeys.has(a.key),
        );
        data.planets = data.planets.filter((p) => !removedKeys.has(p.key));
        const done = events
          .map((p) => C.normalize(p, "google", data.config.calendar))
          .filter(Boolean);
        for (const ev of events) {
          if (ev.status === "cancelled") continue;
          const p = C.normalize(
            { ...ev, completed: true },
            "google",
            data.config.calendar,
          );
          if (!p) continue;
          const old = data.assignments.find((a) => a.key === p.key);
          const a = {
            ...p,
            due: old?.datesEdited ? old.due : ev.start?.dateTime || ev.start?.date || "",
            datesEdited: !!old?.datesEdited,
            completed: old ? old.completed : C.completed(ev),
            planet: old?.planet || p,
          };
          if (old) Object.assign(old, a);
          else data.assignments.push(a);
          if (a.completed) data.planets = C.merge(data.planets, [a.planet]);
        }
        save();
        candidates = events
          .filter((p) => p.status !== "cancelled")
          .sort((a, b) =>
            String(a.start?.dateTime || a.start?.date || "").localeCompare(
              String(b.start?.dateTime || b.start?.date || ""),
            ),
          );
        status.textContent = `${done.length} marked completions synced. ${candidates.length} tagged entries loaded; ${fetched.length - events.length} untagged entries skipped. Review dates and confirm completed assignments.`;
        calendarResults();
        results();
        assignmentResults();
      } catch (err) {
        status.textContent = err.message;
      } finally {
        button.disabled = false;
      }
    };
  }
  function calendarResults() {
    const el = document.getElementById("calendar-candidates");
    if (!el) return;
    const q = (
      document.getElementById("assignment-search")?.value || ""
    ).toLowerCase();
    const rows = candidates
      .map((p, i) => ({ p, i }))
      .filter(({ p }) =>
        [p.summary, p.description].join(" ").toLowerCase().includes(q),
      );
    el.innerHTML =
      rows
        .slice(0, 200)
        .map(({ p, i }) => {
          const record = C.normalize(
              { ...p, completed: true },
              "google",
              data.config.calendar,
            ),
            saved = record && data.planets.some((x) => x.key === record.key),
            date = p.start?.dateTime || p.start?.date;
          let label = "Date not provided";
          if (date) {
            label = /^\d{4}-\d{2}-\d{2}$/.test(date)
              ? date + " (all day)"
              : new Date(date).toLocaleString("en-US", {
                  timeZone: "America/New_York",
                  dateStyle: "medium",
                  timeStyle: "short",
                }) + " Eastern";
          }
          return `<div class="calendar-row"><span><strong>${e(p.summary || "Untitled event")}</strong><br><small>${e(label)}</small><details><summary>Event details</summary><p style="white-space:pre-wrap;overflow-wrap:anywhere">${e(p.description || "No additional details.")}</p></details></span><button onclick="Orbitarium.confirmEvent(${i},this)" ${saved ? "disabled" : ""}>${saved ? "Planet saved" : "I finished this → planet"}</button></div>`;
        })
        .join("") +
      (rows.length > 200
        ? "<p>Showing first 200 matches. Search or narrow the date range to find more.</p>"
        : !rows.length
          ? "<p>No matching calendar entries. Try another search or date range.</p>"
          : "");
  }
  function confirmEvent(i, button) {
    try {
      const p = C.normalize(
        { ...candidates[i], completed: true, completedAt: null },
        "google",
        data.config.calendar,
      );
      let a = data.assignments.find((a) => a.key === p.key);
      if (a) {
        a.completed = true;
        a.planet = p;
      } else
        data.assignments.push({
          ...p,
          due: candidates[i].start?.dateTime || candidates[i].start?.date || "",
          planet: p,
        });
      data.planets = C.merge(data.planets, [p]);
      save();
      button.disabled = true;
      button.textContent = "Planet saved";
      results();
      assignmentResults();
    } catch (err) {
      document.getElementById("uplink-status").textContent = err.message;
    }
  }

  function assignmentsView() {
    return `<section class="orbitarium assignments"><header><span class="orbit-kicker">MISSION LOG</span><h1>ASSIGNMENTS</h1><p>Plan your work. Every completed assignment becomes a world. Mark it incomplete to return its planet to the drawing board.</p><div class="orbit-actions"><button onclick="Orbitarium.assignmentForm()">＋ Add assignment</button><button onclick="Orbitarium.syncForm()">↻ Sync calendar</button><button onclick="Orbitarium.exportData()">Backup assignments & galaxy</button></div></header><div class="orbit-tools"><label>Search assignments<input type="search" value="${e(assignmentQuery)}" oninput="Orbitarium.filterAssignments(this.value)"></label><label>Status<select onchange="Orbitarium.statusFilter(this.value)">${["all", "incomplete", "complete"].map((x) => `<option ${assignmentFilter === x ? "selected" : ""}>${x}</option>`).join("")}</select></label><button onclick="Orbitarium.assignmentMode('list')" aria-pressed="${assignmentMode === "list"}">List view</button><button onclick="Orbitarium.assignmentMode('calendar')" aria-pressed="${assignmentMode === "calendar"}">Calendar view</button></div><p id="assignment-status" role="status"></p><div id="assignment-results"></div><p class="small">Saved in this browser. Completion changes affect your Orbitarium, not Blackboard submissions or Google events. Calendar imports require a leading [ASSIGNMENT] or [DEADLINE] tag. Google controls subscription refresh delays.</p><dialog id="orbit-dialog" class="orbitarium orbit-dialog" aria-labelledby="orbit-dialog-title"></dialog></section>`;
  }
  function assignmentRows() {
    return data.assignments
      .filter(
        (a) =>
          (a.title + " " + a.topic)
            .toLowerCase()
            .includes(assignmentQuery.toLowerCase()) &&
          (assignmentFilter === "all" ||
            a.completed === (assignmentFilter === "complete")),
      )
      .sort((a, b) => (a.due || "9999").localeCompare(b.due || "9999"));
  }
  function dueLabel(d) {
    if (!d) return "No due date";
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d + " · all day";
    return (
      new Date(d).toLocaleString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " Eastern"
    );
  }
  function dayKey(d) {
    if (!d) return "";
    if (d.length === 10) return d;
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(d));
  }
  function assignmentCard(a) {
    const i = data.assignments.indexOf(a);
    return `<article class="assignment-card ${a.completed ? "is-complete" : ""}"><h3>${e(a.title)}</h3><p>${e(a.topic)}<br><time>${e(dueLabel(a.due))}</time></p>${a.source === "review" && a.questionIds?.length ? `<button onclick="Orbitarium.startMission(${i})">Practice this quest →</button>` : ""}<button onclick="Orbitarium.editDates(${i})">Edit dates</button><button onclick="Orbitarium.toggleAssignment(${i})">${a.completed ? "✓ Complete · Mark incomplete" : "○ Incomplete · Mark complete"}</button></article>`;
  }
  function assignmentResults() {
    const el = document.getElementById("assignment-results");
    if (!el) return;
    const rows = assignmentRows();
    if (assignmentMode === "list") {
      el.innerHTML =
        rows.map(assignmentCard).join("") ||
        "<p>No assignments yet. Add one or sync your calendar.</p>";
      return;
    }
    const first = new Date(year, month, 1),
      days = new Date(year, month + 1, 0).getDate();
    el.innerHTML = `<div class="orbit-sector"><button onclick="Orbitarium.month(-1)" aria-label="Previous month">←</button><h2>${first.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h2><button onclick="Orbitarium.month(1)" aria-label="Next month">→</button></div><div class="assignment-calendar">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => `<strong>${d}</strong>`).join("")}${Array.from({ length: first.getDay() }, () => '<div class="calendar-blank"></div>').join("")}${Array.from(
      { length: days },
      (_, i) => {
        const day =
          year +
          "-" +
          String(month + 1).padStart(2, "0") +
          "-" +
          String(i + 1).padStart(2, "0");
        return `<section class="assignment-day"><h3>${i + 1}</h3>${rows
          .filter((a) => dayKey(a.due) === day)
          .map(assignmentCard)
          .join("")}</section>`;
      },
    ).join("")}</div>${
      rows.some((a) => !a.due)
        ? "<h2>No due date</h2>" +
          rows
            .filter((a) => !a.due)
            .map(assignmentCard)
            .join("")
        : ""
    }`;
  }
  function toggleAssignment(i) {
    const a = data.assignments[i];
    if (!a) return;
    const prev = JSON.parse(JSON.stringify({...data, lectures}));
    try {
      a.completed = !a.completed;
      if (a.completed) {
        a.planet = C.normalize(
          {
            ...a,
            completed: true,
            completedAt: a.planet?.completedAt || new Date().toISOString(),
            theme: a.planet?.theme,
          },
          a.source,
          a.calendar,
        );
        data.planets = C.merge(data.planets, [a.planet]);
      } else {
        a.planet = data.planets.find((p) => p.key === a.key) || a.planet;
        data.planets = data.planets.filter((p) => p.key !== a.key);
      }
      save();
      assignmentResults();
      results();
    } catch (err) {
      data = prev;
      document.getElementById("assignment-status").textContent = err.message;
    }
  }
  function assignmentForm() {
    modal(
      "ADD ASSIGNMENT",
      `<form id="assignment-form"><label>Assignment title<input name="title" required maxlength="180"></label><label>Course or topic<input name="topic" required maxlength="120"></label><label>Due date<input name="due" type="date"></label><label class="check"><input name="completed" type="checkbox"> Already completed</label><button type="submit">Save assignment</button><p id="assignment-form-error" role="status"></p></form>`,
    );
    document.getElementById("assignment-form").onsubmit = (ev) => {
      ev.preventDefault();
      const previous = JSON.parse(JSON.stringify({...data, lectures}));
      try {
        const raw = Object.fromEntries(new FormData(ev.target)),
          p = C.normalize({
            ...raw,
            id: crypto.randomUUID(),
            completed: true,
            completedAt: raw.completed ? new Date().toISOString() : null,
          });
        data.assignments.push({
          ...p,
          due: raw.due,
          completed: !!raw.completed,
          planet: p,
        });
        if (raw.completed) data.planets = C.merge(data.planets, [p]);
        save();
        document.getElementById("orbit-dialog").close();
        assignmentResults();
      } catch (err) {
        data = previous;
        document.getElementById("assignment-form-error").textContent =
          err.message;
      }
    };
  }

  function syncMissions(items) {
    if (blocked) return;
    let changed = false;
    for (const item of OrbitCalendar.reviewEvents(items)) {
      const p = C.normalize(
        { ...item, completed: true },
        "review",
        "daily-review",
      );
      if (!p || data.assignments.some((a) => a.key === p.key)) continue;
      data.assignments.push({
        ...p,
        completed: false,
        due: item.due,
        questionIds: item.questionIds,
        planet: p,
      });
      changed = true;
    }
    if (changed) save();
  }
  function completeMissions(session) {
    if (blocked || !session.completed) return;
    let changed = false;
    const correct = new Set(
      session.ids.filter((id, i) => session.responses[i]?.status === "correct"),
    );
    for (const a of data.assignments) {
      if (
        a.source !== "review" ||
        a.completed ||
        !a.questionIds?.length ||
        !a.questionIds.every((id) => correct.has(id))
      )
        continue;
      a.completed = true;
      a.planet = C.normalize(
        { ...a, completed: true, completedAt: new Date().toISOString() },
        "review",
        "daily-review",
      );
      data.planets = C.merge(data.planets, [a.planet]);
      changed = true;
    }
    if (changed) save();
  }
  function startMission(index) {
    const a = data.assignments[index];
    if (a?.questionIds?.length) start(a.questionIds, "Daily review quest");
  }

  function ingest(items, source = "study-calendar") {
    const incoming = items.map((p) => C.normalize(p, source)).filter(Boolean);
    data.planets = C.merge(data.planets, incoming);
    save();
    if (document.getElementById("orbit-results")) render();
    return incoming.length;
  }
  window.addEventListener("studio:theme", () => {
    if (document.getElementById("orbit-results")) results();
  });
  window.addEventListener("study:completed", (ev) => {
    try {
      ingest([ev.detail]);
    } catch (err) {
      message = err.message;
    }
  });
  return {
    syncMissions,
    completeMissions,
    startMission,
    setCenter,
    editDates, lectureForm,
    timingFilter: (v) => { timingFilter = ["all","on-time","late","unknown"].includes(v) ? v : "all"; page = 0; results(); },
    assignmentsView,
    assignmentMount: assignmentResults,
    assignmentForm,
    toggleAssignment,
    filterAssignments: (q) => {
      assignmentQuery = q;
      assignmentResults();
    },
    statusFilter: (v) => {
      assignmentFilter = v;
      assignmentResults();
    },
    assignmentMode: (v) => {
      assignmentMode = v;
      render();
    },
    month: (d) => {
      const n = new Date(year, month + d, 1);
      year = n.getFullYear();
      month = n.getMonth();
      assignmentResults();
    },
    calendarResults,
    view,
    mount: results,
    addForm,
    open,
    importForm,
    exportData,
    syncForm,
    assignmentResults,
    confirmEvent,
    ingest,
    search: (q) => {
      query = q;
      page = 0;
      results();
    },
    page: (d) => {
      page = Math.max(0, page + d);
      results();
    },
    mode: () => {
      mode = mode === "solar" ? "grid" : "solar";
      render();
    },
    pause: () => {
      paused = !paused;
      render();
    },
  };
})();
