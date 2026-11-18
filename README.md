# RPI Practice Studio

A static, local-first study app for Calculus I, Physics I and Organic Chemistry I, published with GitHub Pages. Open `index.html` through a local web server or static host. No build step or framework is required.

## Study workflow

- Guided practice records your response first, then offers separate clarification, hint, setup, calculation guidance, and explicitly requested worked solutions.
- Timed exams default to 30 minutes when no duration is provided. Submitting locks an answer and defers grading; expiry finalizes once, including after refresh. Replacing an active exam preserves submitted attempts. Symbolic/open-ended work uses a labeled self-assessment rubric.
- Shortcuts outside text fields/dialogs: Enter checks or continues, H requests a guided hint, R flags, Escape leaves while retaining the session, and 1–4 select choices when a question has options. Numeric and open-ended questions do not have fabricated multiple-choice options.
- All, Unseen, Flagged and Needs Review filters use assessed history. Latest incorrect answers are due immediately; correct answers return after three days, or one day for self-assessed work. This is a simple study schedule, not a validated adaptive mastery model.
- Coverage bars count latest correct answers out of authored questions, with self-assessed counts labeled.

## Routes and persistence

`#/course/calculus-1/learn?topic=limits`, `#/course/physics-1/practice?question=q10`, `#/assignments`, `#/orbitarium`, `#/progress` and `#/settings` support deep linking. Course slugs are defined in `router.js`. Browser history does not replace completed session summaries.

`storage.js` is the only localStorage boundary. A version-3 envelope stores practice, Orbitarium and appearance domains together. Legacy keys remain untouched. Corrupt or future envelopes block writes and retain the raw original for recovery; storage denial falls back to memory with a visible warning. Domain validation remains in the study and backup models. Data is browser-local, not account or device synced.

Use **Backup & restore** to export all domains. Imports are validated and previewed before replacement. Legacy progress v1/v2 and Orbitarium v1 are accepted. Restore writes a previous-state recovery snapshot before committing the replacement; failed persistence does not report success. Export a backup before changing devices. Google access tokens are never stored or included.

## Orbitarium and calendars

Only Google Calendar titles beginning with `[ASSIGNMENT]` or `[DEADLINE]` (case-insensitive) enter the assignment log. Tags are eligibility markers, not proof of completion. Untagged imported records are archived locally and removed from the active assignment/planet lists. Untagged Blackboard assignments are excluded too. Manual entries remain eligible.

Calendar access is read-only and requires Google consent. Blackboard subscriptions refresh on Google's schedule. The website cannot read academic-deadline chats automatically; completion logs can be imported manually.

`review-missions.js` turns due/missed objectives into local daily quests with stable IDs. These appear in Assignments, link to targeted practice, and do not write Google events. A successful session covering all quest questions, or an explicit manual completion, creates one planet. Marking incomplete removes its active planet while preserving its design. Repeated synchronization does not duplicate quests/planets.

Twelve seeded planet themes have deterministic lore. Sector centers can vary automatically or be set to black hole, binary stars, nebula core, pulsar, or amber star. Appearance follows Light/Dark/System, including live system changes.

## Source organization

- `index.html`: loading shell, recovery notice, ordered script dependencies.
- `storage.js`: versioned persistence, legacy migration, atomic replacement.
- `router.js`: URL serialization and validation.
- `backup.js`: full-state validation, preview, export/restore dialog.
- `engine.js`: grading, session validation, exam locking/finalization, coverage and review rules.
- `app.js`: study controller, views and keyboard integration.
- `scope.js`: authored objective mapping and opaque archived identifiers.
- `review-missions.js`: deterministic daily review quest generation.
- `orbit-core.js`: stable completion records and pixel planet generation.
- `orbit-calendar.js`: read-only Calendar adapter plus local review records.
- `orbitarium.js`: assignment/calendar/galaxy views and completion synchronization.
- `diagrams.js`, `style.css`, `orbitarium.css`: responsive theme-aware visuals.

Content remains in `questions.js` and `content.js` (276 original questions, 33 hubs). Course-specific exam boundaries are not verified; content is not represented as an instructor's actual exam.

## Verification

From this folder, run:

```sh
for test in *.test.cjs; do node "$test" || exit 1; done
```

Tests cover grading, legacy data, route parsing, controller boot, exam replacement/history, locked responses/expiry, storage corruption/denial, restore validation, theme safety, tagged imports, assignment reversal, planet identity and daily review rules. Browser QA additionally covers desktop/375px layout, guided and exam flows, backup restore, modal focus, light/dark appearances and console errors.

Source formatting uses Prettier 3.9.10. Runtime uses self-hosted OpenChemLib 9.26.0 for molecular editing; no npm install is needed to run the app. Google Fonts is optional; system and monospace fallbacks remain available.

## Late-completion moons and extended bank

Planets derive `isLateSubmission` from `completedAt` (or `submittedAt`) and `dueAt`/`dueDate`/`due`. Saved assignment deadlines are reconciled into legacy planets. Missing or invalid dates stay unknown; date-only deadlines mean end-of-day Eastern, and exact hours are shown only when both timestamps include a time. Completion is user-reported and is not proof of a Blackboard submission. Marking incomplete removes the active planet and its moon; restoring completion keeps its recorded timestamp and appearance. Galaxy filters distinguish all, on-time, late, and unknown timing. Canvas moons respect the existing pause/reduced-motion controls.

The bank now contains 276 problems, including the earlier 36-question extension and 60 new four-option problems (20 per course). See [curriculum sources and validation](CURRICULUM-SOURCES.md).


## Consistency release (consistency10)

Five distinct valid answers or one newly completed assignment/review mission qualify a local day. Exam answers earn activity when locked, without revealing correctness; invalid numeric entries earn no activity. Each distinct question per day earns 10 XP and each newly completed mission earns 30 XP. Completion toggles and due/submission-date edits cannot duplicate or backdate rewards. Existing records are not retroactively assigned invented activity dates.

Seven consecutive qualifying days earn a shield (maximum two). A shield preserves a streak over one isolated missed day without crediting that day as activity. Milestones at 3, 7, 14 and 30 qualifying streak days grant one-time bonuses of 25, 75, 150 and 400 XP. The 30-day/12-week heatmap and navigation goal update on reward events, local date changes and tab visibility changes. The versioned reward-event domain is included in full backups.

The redemption queue replays saved assessed attempts and clears a missed or guessed question after two distinct consecutive correct attempts. Rechecking a corrected response cannot count as a separate recovery attempt. Confidence tags remain editable and survive refresh and exam finalization. A guessed correct answer generates review work without being marked incorrect.

Quick reference / scratchpad opens scoped formulas and definitions during guided practice and exams. It excludes worked solutions, preserves your draft, and keeps the exam timer running. Timed simulation is explicitly reference-enabled. Boot recovery handles rejected promises and cancels its initial timeout after a successful mount.

See QUESTION-EXPANSION.md for content provenance. All additions are original first-course practice; exact instructor boundaries remain unverified. Tests are dependency-free Node scripts in this folder.


## Molecular practice (molecules11a)

Organic Chemistry now has 101 problems: 12 new structure-drawing challenges and four mechanism-analysis challenges, plus three enriched existing prompts. Every organic question includes an optional molecular scratch workspace. Filter Practice library by **Structure drawing** for product drawing or **Mechanism analysis** for the new written challenges.

The 2D OpenChemLib editor supports bonds, rings, atoms, charges and stereobonds, with a SMILES keyboard alternative. Save explicitly commits a drawing; Cancel keeps the previous saved version. Product slots compare canonical molecular structures, accepting equivalent atom orderings. Connectivity-only problems ignore stereochemistry; explicitly marked stereo tasks compare it. Explanations use self-assessment. There is no 3D conformer viewer or automatic curved-arrow mechanism grading in this release.

`molecules.js` owns the editor dialog and safe graph checking. Molecule answers are versioned JSON strings in the existing answer field, preserving immutable exam snapshots and backup compatibility; scratch drawings live in `drafts[id].moleculeScratch`. All drawing processing stays in the browser. Invalid and partial structures are rejected before molecular exam locking. Submitted targets stay hidden until an attempted question's full solution is explicitly requested.

`openchemlib.js` is bundled from official npm openchemlib@9.26.0 using esbuild@0.25.12 (`--bundle --format=iife --global-name=OCL --minify`); `molecule-resources.js` registers that package's resources.json locally. License: `OPEN-CHEM-LIB-LICENSE.txt`. Official API: https://cheminfo.github.io/openchemlib-js/. Native session-replacement confirmations were replaced with an inline confirmation to avoid browser-modal stalls. Keyboard shortcuts do not intercept focused buttons or links.
