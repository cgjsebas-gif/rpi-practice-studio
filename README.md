# RPI Practice Studio + Orbitarium

Static, dependency-free study app for GitHub Pages. Serve the repository root using any static web server. In GitHub Settings → Pages, publish `main` → `/ (root)`.

## Components

- `orbit-core.js`: pure completion normalization, deterministic ID-based pixel sprites, themes and fictional bios.
- `orbitarium.js`: accessible dialog forms, searchable galaxy, canvas orbital animation, local persistence and import/export.
- `orbit-calendar.js`: Google Identity Services read-only Calendar adapter, paginated event fetching, in-memory access token.
- `orbitarium.css`: scoped retro presentation, pixel headings and reduced-motion support.
- `app.js`: adds the Orbitarium navigation route and mounts the view. Existing guided practice stays intact.

No build or paid backend is required. `node orbitarium.test.cjs` runs pure model tests. `node practice.test.cjs` checks the original study bank and grading.

## State strategy

`rpi-orbitarium-v1` in localStorage stores `{version, planets, config}`. Manual and imported records share one normalized array. Stable keys combine source, calendar and source event ID; repeated imports update rather than duplicate a planet. The Google Calendar ID is part of the key. Manual IDs use `crypto.randomUUID()`. Deterministic artwork and lore survive reloads. No calendar tokens or client secrets are saved. All imported values are escaped before UI rendering.

The visible sector is capped at 24 worlds with a searchable paginated grid. Canvas animation runs at approximately 30 fps; navigation cancels the detached view, pause is available, and reduced-motion preferences default to paused. Search covers assignment titles, topics and generated planet names. Keyboard-accessible cards provide an alternative to canvas clicking.

Progress is local to the current browser and origin, not cloud-synced across devices. Backup the study app and Orbitarium separately. Concurrent edits in multiple browser tabs are not coordinated. An absent/cancelled calendar event does not erase a previously saved achievement; this is an achievement ledger, not a calendar mirror.

## Google Calendar setup

The ChatGPT calendar connector is not available inside a standalone GitHub website. A separate OAuth web client is required:

1. Create/select a Google Cloud project, enable Google Calendar API, configure the OAuth consent screen, and add your Google account as a test user if the app is in testing.
2. Create a Web application OAuth client. Add `https://cgjsebas-gif.github.io` as an authorized JavaScript origin (not the repository path). For local testing add `http://127.0.0.1:4173` separately.
3. Paste the **client ID** into Orbitarium → Calendar uplink → First-time Google setup. Never paste or commit a client secret.
4. Choose calendar ID and date range; click Connect & fetch assignments and consent to read-only calendar events access.

The adapter requests `calendar.events.readonly`. Explicit `[DONE]` / `✅` title prefixes or `extendedProperties.private.orbitariumCompleted = 'true'` create planets. `status: confirmed`, past end times, accepted invitations and ordinary prose saying “completed” do not. Other likely assignments appear as candidates; the user must click “I finished this.” Google Calendar events do not provide a universal assignment-completion field. Completion time stays unknown unless supplied; due dates are never substituted.

Sync is user-triggered while the app is open. It follows all pages within the chosen window and fails visibly on expired tokens, API errors or oversized requests. It does not edit Calendar or run a background server. Live OAuth requires the owner’s Google Cloud setup and consent; the code alone cannot provision it.

## Study calendar and academic-deadline chat integration

For an existing JavaScript calendar, call:

```js
Orbitarium.ingest([{id:'stable-assignment-id', title:'Related rates HW', topic:'Calculus I', completed:true, completedAt:'2026-11-10', theme:'cyber'}], 'study-calendar');
// Or dispatch the shared completion event:
window.dispatchEvent(new CustomEvent('study:completed', {detail:{id:'stable-assignment-id',title:'Related rates HW',topic:'Calculus I',completed:true}}));
```

For chat records, export a JSON log and import it via Orbitarium. The website cannot read private ChatGPT/Codex conversations automatically. Ask the academic-deadline chat for this shape, using stable IDs and only explicit completion evidence:

```json
{"version":1,"assignments":[{"id":"stable-assignment-id","source":"academic-deadlines","title":"Related rates HW","topic":"Calculus I","completed":true,"completedAt":null}]}
```

Do not infer completion from a deadline passing, a dropped task, or a skipped assignment. Unknown completion dates are null. Do not place private JSON logs in this public repository. If calendar and chat refer to the same item, use the same source/calendar/ID or import it through only one source; different source IDs are intentionally not deduplicated by fuzzy title matching.

## Moving from the former site

In the old site, use Progress & notes → Export. In this GitHub site, import that practice backup on the same page. Browser storage cannot transfer automatically across domains. Previous course problem IDs are retained for migration. Private course-document URLs have been removed from the public source; original questions and public supplemental references remain.

## Verification and limits

Model checks cover explicit completion recognition, cancelled events, stable IDs, duplicate sync, topic themes, deterministic lore, invalid records, SVG safety and 10,000-record merges. Browser checks exercise manual creation, persistence, dialogs, search, themes and grid view. Numerical study checks are retained. Live Google OAuth cannot be verified until the owner configures a client and grants access. Fictional bios are template-generated, not factual scientific descriptions or AI service calls.

References: [Google token model](https://developers.google.com/identity/oauth2/web/guides/use-token-model), [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
