/* Validation is separate from UI so restoring never partially changes domains. */
window.StudioBackup = (() => {
  function orbit(raw) {
    if (
      !raw ||
      raw.version !== 1 ||
      !Array.isArray(raw.planets) ||
      (raw.assignments !== undefined && !Array.isArray(raw.assignments))
    )
      throw Error("Invalid galaxy backup.");
    if (raw.planets.length > 20000 || (raw.assignments?.length || 0) > 20000)
      throw Error("Backup contains too many records.");
    const planets = raw.planets
      .map((p) => OrbitCore.normalize(p, p?.source, p?.calendar))
      .filter(Boolean);
    const assignments = (raw.assignments || [])
      .map((a) => {
        if (
          !a ||
          typeof a.title !== "string" ||
          typeof a.id !== "string" ||
          typeof a.key !== "string" ||
          typeof a.completed !== "boolean"
        )
          throw Error("Invalid assignment record.");
        const p = OrbitCore.normalize(
          { ...a, completed: true },
          a.source,
          a.calendar,
        );
        if (!p) return null;
        const due =
          typeof a.due === "string" && Number.isFinite(Date.parse(a.due))
            ? a.due
            : "";
        return {
          ...p,
          completed: a.completed,
          due,
          questionIds: Array.isArray(a.questionIds)
            ? a.questionIds.filter((id) => bank.some((p) => p.id === id))
            : [],
          planet: OrbitCore.normalize(
            a.planet || { ...a, completed: true },
            a.source,
            a.calendar,
          ),
        };
      })
      .filter(Boolean);
    return {
      version: 1,
      planets: planets.filter(
        (p) => !assignments.some((a) => a.key === p.key && !a.completed),
      ),
      assignments,
      excludedCalendar: Array.isArray(raw.excludedCalendar)
        ? raw.excludedCalendar
        : [],
      center: [
        "auto",
        "blackhole",
        "binary",
        "nebula",
        "pulsar",
        "sun",
      ].includes(raw.center)
        ? raw.center
        : "auto",
      config: {
        clientId: String(raw.config?.clientId || ""),
        calendar: String(raw.config?.calendar || "primary"),
      },
    };
  }
  function validate(raw) {
    let next;
    if (
      raw?.version === 3 &&
      raw.domains &&
      typeof raw.domains === "object" &&
      !Array.isArray(raw.domains)
    )
      next = { version: 3, domains: { ...raw.domains } };
    else if ([1, 2].includes(raw?.version) && raw.state)
      next = {
        ...StudioStorage.snapshot(),
        domains: {
          ...StudioStorage.snapshot().domains,
          "rpi-studio-v2": JSON.stringify(raw.state),
        },
      };
    else if (raw?.version === 1 && Array.isArray(raw.planets))
      next = {
        ...StudioStorage.snapshot(),
        domains: {
          ...StudioStorage.snapshot().domains,
          "rpi-orbitarium-v1": JSON.stringify(raw),
        },
      };
    else throw Error("Choose a supported Studio or Orbitarium backup.");
    const allowed = [
      "rpi-studio-v1",
      "rpi-studio-v2",
      "rpi-studio-theme",
      "rpi-orbitarium-v1",
    ];
    for (const [key, value] of Object.entries(next.domains)) {
      if (!allowed.includes(key) || typeof value !== "string")
        throw Error("Invalid backup section.");
      if (key === "rpi-studio-theme") {
        if (!["system", "dark", "light"].includes(value))
          throw Error("Invalid appearance setting.");
        continue;
      }
      const data = JSON.parse(value);
      if (key === "rpi-orbitarium-v1")
        next.domains[key] = JSON.stringify(orbit(data));
      else {
        if (data.version !== undefined && ![1, 2].includes(data.version))
          throw Error("This progress version is not supported.");
        next.domains[key] = JSON.stringify(
          StudyEngine.sanitize(
            data,
            [...bank, ...archivedBank].map((p) => p.id),
            [...hubs, ...archivedHubs].map((h) => h.id),
          ),
        );
      }
    }
    return next;
  }
  function download(value, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }),
    );
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function open() {
    const previous = document.activeElement,
      d = document.createElement("dialog");
    d.className = "backup-dialog";
    d.setAttribute("aria-labelledby", "backup-heading");
    d.innerHTML =
      '<div class="dialog-top"><h2 id="backup-heading">Backup & restore</h2><button aria-label="Close backup">×</button></div><p>Keep your practice, notes, sessions, assignments and galaxy together. Google sign-in is not included.</p><button id="backup-export">Download full backup</button> <button id="backup-recovery">Download recovery copy</button><hr><label for="backup-file">Restore a JSON backup</label><input id="backup-file" type="file" accept=".json,application/json"><p id="backup-status" role="status">Choose a file to preview before replacing anything.</p><button id="backup-restore" disabled>Replace with this backup</button>';
    document.body.append(d);
    d.querySelector('[aria-label="Close backup"]').onclick = () => d.close();
    d.onclose = () => {
      d.remove();
      previous?.focus();
    };
    d.querySelector("#backup-export").onclick = () =>
      download(StudioStorage.snapshot(), "rpi-studio-full-backup.json");
    d.querySelector("#backup-recovery").onclick = () =>
      download(
        {
          current: StudioStorage.snapshot(),
          originals: StudioStorage.recovery(),
        },
        "rpi-studio-recovery.json",
      );
    let pending = null;
    const status = d.querySelector("#backup-status"),
      restore = d.querySelector("#backup-restore");
    d.querySelector("#backup-file").onchange = async (ev) => {
      pending = null;
      restore.disabled = true;
      try {
        const file = ev.target.files[0];
        if (!file || file.size > 10000000)
          throw Error("Choose a JSON backup under 10 MB.");
        pending = validate(JSON.parse(await file.text()));
        const p = JSON.parse(pending.domains["rpi-studio-v2"] || "{}"),
          o = JSON.parse(pending.domains["rpi-orbitarium-v1"] || "{}");
        status.textContent = `Preview: ${p.attempts?.length || 0} attempts, ${o.assignments?.length || 0} assignments, ${o.planets?.length || 0} planets. Restoring replaces saved data. Download a full backup first to keep both.`;
        restore.disabled = false;
      } catch (error) {
        status.textContent = error.message;
      }
    };
    restore.onclick = () => {
      if (!pending) return;
      try {
        StudioStorage.replace(pending);
        location.reload();
      } catch {
        status.textContent =
          "Restore could not be saved. Current data was not replaced. Free browser storage and try again.";
      }
    };
    d.showModal();
  }
  return { validate, orbit, open };
})();
window.openBackup = () => StudioBackup.open();
