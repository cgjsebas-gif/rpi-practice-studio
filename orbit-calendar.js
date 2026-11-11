/* Google Identity Services tokens live only in memory, never in localStorage. */
window.OrbitCalendar = (() => {
  let token = "",
    expires = 0,
    loading;
  const scope = "https://www.googleapis.com/auth/calendar.events.readonly";
  function load() {
    return (
      loading ||
      (loading = new Promise((resolve, reject) => {
        let s = document.createElement("script");
        s.src = "https://accounts.google.com/gsi/client";
        s.onload = resolve;
        s.onerror = () => {
          loading = null;
          reject(
            Error("Google sign-in could not load. Check your connection."),
          );
        };
        document.head.append(s);
      }))
    );
  }
  async function connect(clientId) {
    if (!/^[\w.-]+\.apps\.googleusercontent\.com$/.test(clientId))
      throw Error("Add a Google OAuth web client ID first.");
    await load();
    return new Promise((resolve, reject) => {
      google.accounts.oauth2
        .initTokenClient({
          client_id: clientId,
          scope,
          callback: (r) => {
            if (r.error) return reject(Error(r.error));
            token = r.access_token;
            expires = Date.now() + Number(r.expires_in) * 1000;
            resolve();
          },
          error_callback: () =>
            reject(Error("Sign-in was closed or blocked. Try again.")),
        })
        .requestAccessToken({ prompt: "" });
    });
  }
  async function events(calendar, from, to) {
    if (!token || Date.now() > expires)
      throw Error("Connect Google Calendar again to renew access.");
    let items = [],
      page;
    do {
      const q = new URLSearchParams({
        timeMin: new Date(from + "T00:00:00").toISOString(),
        timeMax: new Date(to + "T23:59:59").toISOString(),
        singleEvents: "true",
        maxResults: "2500",
      });
      if (page) q.set("pageToken", page);
      let r = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/" +
          encodeURIComponent(calendar) +
          "/events?" +
          q,
        { headers: { Authorization: "Bearer " + token } },
      );
      if (!r.ok)
        throw Error(
          r.status === 401
            ? "Google access expired. Connect again."
            : "Calendar fetch failed (" +
                r.status +
                "). Check calendar ID and Calendar API setup.",
        );
      const body = await r.json();
      items.push(...(body.items || []));
      page = body.nextPageToken;
      if (items.length > 20000)
        throw Error("Choose a shorter date range (over 20,000 events).");
    } while (page);
    return items;
  }
  function disconnect() {
    if (token && window.google) google.accounts.oauth2.revoke(token, () => {});
    token = "";
    expires = 0;
  }
  function reviewEvents(items) {
    return items.map((item) => ({
      ...item,
      source: "review",
      calendar: "daily-review",
    }));
  }
  return { connect, events, disconnect, reviewEvents };
})();
