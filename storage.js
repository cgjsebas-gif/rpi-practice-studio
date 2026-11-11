/* One persistence boundary. Legacy source keys are never deleted. */
window.StudioStorage = (() => {
  const key = "rpi-studio-v3";
  const keys = [
    "rpi-studio-v1",
    "rpi-studio-v2",
    "rpi-studio-theme",
    "rpi-orbitarium-v1",
  ];
  let envelope = { version: 3, domains: {} },
    blocked = false,
    message = "",
    originals = {};
  const clone = (value) => JSON.parse(JSON.stringify(value));
  function validate(value) {
    if (
      !value ||
      value.version !== 3 ||
      !value.domains ||
      typeof value.domains !== "object" ||
      Array.isArray(value.domains)
    )
      throw Error("Unsupported backup schema.");
    for (const [name, data] of Object.entries(value.domains)) {
      if (!keys.includes(name) || typeof data !== "string")
        throw Error("Invalid backup domain.");
    }
    return { version: 3, domains: { ...value.domains } };
  }
  function notify() {
    window.dispatchEvent(
      new CustomEvent("studio:storage", { detail: message }),
    );
  }
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      originals[key] = raw;
      try {
        envelope = validate(JSON.parse(raw));
      } catch {
        blocked = true;
        message =
          "Saved data needs recovery. Download a recovery copy before restoring a valid backup.";
      }
    } else {
      for (const name of keys) {
        const raw = localStorage.getItem(name);
        if (raw !== null) envelope.domains[name] = originals[name] = raw;
      }
    }
  } catch {
    message =
      "Storage is unavailable. Changes remain in this tab only; export a backup before leaving.";
  }
  return {
    getItem(name) {
      return envelope.domains[name] ?? null;
    },
    setItem(name, value) {
      if (blocked) throw Error(message);
      if (!keys.includes(name)) throw Error("Unknown storage domain.");
      envelope.domains[name] = String(value);
      try {
        localStorage.setItem(key, JSON.stringify(envelope));
        message = "";
      } catch {
        message =
          "Storage is unavailable or full. Changes remain in this tab only; export a backup before leaving.";
      }
      notify();
      return !message;
    },
    snapshot() {
      return clone(envelope);
    },
    recovery() {
      return clone(originals);
    },
    status() {
      return message;
    },
    isBlocked() {
      return blocked;
    },
    replace(value) {
      const next = validate(value);
      // A restore is successful only when both recovery and replacement are durable.
      localStorage.setItem(
        "rpi-studio-recovery",
        JSON.stringify({ previous: envelope, originals }),
      );
      localStorage.setItem(key, JSON.stringify(next));
      envelope = next;
      blocked = false;
      message = "";
      notify();
    },
  };
})();
