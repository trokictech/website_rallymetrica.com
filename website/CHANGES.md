# Oct 14, 2026 — the decisions pass (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

The site is read against DECISIONS.md from the Oct 11 practice brief to the Oct 14 rulings. Every page that describes the product now describes it as decided — including what 4g-i · 4g-ii still build. New screens are PLACEHOLDER renders (public/screens/, marked in ASSETS.md) to be replaced by captures from the 4g build, keeping the names.

## New
- **Practice sessions, everywhere they belong.** Home: `PracticeFeatures.tsx` (Rally · Co-op · Serve tabs) after Record · Analyze · Improve. /features: a new 05 / Practice block (Patterns moves to 07). Learn: the guide **/learn/practice-sessions/** (the Sessions tab, a VS rally's setup — presets FIRST TO 11 · 15 · 21 · TIMED 10 · OPEN, blocks, serve or feed start, SERVES 2 · 1, rotation — the court and the board, the co-op run, the serve basket with the court's DEUCE · AD and T · MID · WIDE strips, IN % · ON TARGET %, and the three reports). The stats engine reference gains **Practice sessions** (the VS rally on the match catalogue, the co-op's RUNS · ENDINGS, the serve catalogue with its own cuts, TREND) and the rally race model under Momentum. FAQs: "Can I track practice, not only matches?", "Do practice sessions count in my Stats?" (no — matches only), "Does it work on iPad?".
- **Plans** carry sessions on Player (and so on Coach · Academy); Free lists its three facts (score every match, the score-derived report, two detailed matches to try).
- **Support** gains a Practice sessions section; the tabs read Players · Sessions (Matches · Rally · Serve) · Stats · Patterns; iPad's two panes; the Data labels are the app's (Back up to a file · Restore from backup · Load demo season · Clear all data).

- **Reading the new charts** (second pass, Oct 14): the sessions guide gains three reading steps — a co-op's RUNS page (the average and median lines read together, Over 10, Balls a minute over the lit runs' seconds, the per-player rows), ENDINGS (who ended the runs and how, what each ending points to) and the serve SERVE · TREND pages (streak against IN %, the mean · median streak lines, the TARGET curve's direction, the cut against the session); the reference's Practice section gains *Streaks, accuracy and the two lines* and *Reading a co-op's two lines*.

## Corrected
- **"Matches" the tab → "Sessions"** wherever a tab is named (guides: first match, reports, coach link, roster; support); "Matches" the page stays where it is the page.
- **Momentum:** p₀ is the player's history shrunk toward the tour's 62% with the same κ (the Oct 13 ruling; a formula line added, κ = 40); the newest provisional swing stays listed beside the largest (4f-iv); "biggest" → **largest** swing (the Oct 12 word) in the reference and the figcaption.
- **The usual range:** the band is the middle 80% literally since the Oct 13 correction — the half-width's t is the one-sided 90% value; the "±19 points" figure (measured under the old meaning) is dropped, "wider than the chart" stays.
- **The catalogue:** the first group is POINTS · SERVE (its serve rows sit on the SERVE page); Win rate (Stats only) listed; the double-fault row's one-serve reading (Faults); the record-kind sentence — what a kind cannot hold is absent, never greyed; Pressure, Placement and Aggression notes name what a rally or co-op changes; the landing maps light one class of ball at a time (END exclusive with the ball pick).
- **Coach link:** sessions arrive live like matches; a session notifies at its start and end only (no set · game · point cadence). Hero, title and description read "match and practice tracking".
- **Privacy · Terms · Support** dated Oct 14; privacy names sessions among what is stored and shared and the relay's 30-day sweep of idle devices; terms name sessions and partners.
- **Roster:** the coach guide's note describes the card's bookmark — the player's initials, the live ones pulsing (Oct 14).

## Placeholders (replace with 4g captures, same names)
sessions.png · rally-court.png · coop-court.png · serve-court.png · serve-report.png · runs.png · rally-report.png — dark frames with the screen's name; drawn, not captured.

## Not changed
- Screens already on the site still show the pre-Oct-12 legend grid on MOMENTUM and STATS (14 · 4; now 26 · 6, 8 under the plot) — re-shot with 4g's capture pass (DECISIONS › Step 4f-iv review Q14).
- `appStoreUrl` stays null until the listing is live.

Build: `npm run build` → `python ../package-site.py out` → commit `site.zip`.

---

# Oct 9, 2026 — the full pass (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

## New
- **/learn/stats-engine/** — the reference the app's numbers deserve: what each tracking level unlocks, the whole catalogue (Points · Return · Pressure · Placement · Aggression) with each row's definition and the level it needs, momentum, patterns, cuts, trends, and how to read a dash. Linked from the home teaser, Pricing, the Learn page, every guide's sidebar, /features 02 and 04, two FAQs and the footer.
- **/privacy/ and /terms/** — the two pages the footer already linked (404 until now) and App Review requires. Written from how the app actually works: no account, matches on the phone, E2EE relay (envelopes expire on retrieval / 30 days, push tokens), RevenueCat for entitlements, optional location → weather, camera for the code, no analytics. Terms carry the subscription rules, the coach-link rules and Apple's required EULA clauses. Shared layout: `components/LegalDoc.tsx`.
- **StatsEngine.tsx** replaces SecondaryFeatures on the home page (which repeated three earlier sections) with four cards — Momentum · Aggression · Pressure · Patterns — into the reference. `SecondaryFeatures.tsx` is no longer imported and can be deleted.
- **ReplayLoop.tsx** — the moving replay from `replay-sprite.png` (11 frames, 1.6 fps; the strip's orientation is read from the image, reduced motion shows the still). Used on /features 03 and in the Analyze gallery.
- `sitemap.ts`, `robots.ts`; Open Graph / Twitter metadata with `public/og.png`; the favicon is the RM mark (`/mark.svg`, was the lockup); `public/apple-touch-icon.png`.

## Fixed
- **Home › Record · Analyze · Improve** now show four screens each (the three tracking modes + the point sheet; momentum · aggression · the moving replay · landings; stats · profile · zones · matches) instead of one — the ask from the last pass, finally shipped with the captures.
- **Hero on phones** — the mark (176) + the phone (230) overflowed a 375-wide screen and the phone was clipped; the mark is 96 below `sm`, the phone `min(230px, 56vw)`, the caption hidden until `sm`.
- **404** had no header or footer (not-found sits outside the (main) layout); it is wrapped in `Layout` now. `body` is a flex column so the footer meets the bottom of short pages.
- **Prose colours** — `.guide-copy p` was unlayered CSS and beat every `text-accent` utility inside a guide (the "In this guide" eyebrow rendered grey); the colour rules moved into `@layer base`, the 1.85 line height stays.
- Guide numbering pads (`01`…`10`), the tracking-modes guide's alt names the Counter court it shows, the coaching-patterns guide shows the editor (`pattern-editor`) it describes, /features 06's alt names the library it shows.
- Pricing links the stats engine; the privacy section links the policy; the footer carries Stats engine · Privacy · Terms · help@.

## Repo housekeeping (do by hand)
- Delete the root `index.html` and root `ASSETS.md` — the hand-built package from the first pass; the Pages workflow deploys `site.zip` only.
- Delete `website/src/components/SecondaryFeatures.tsx`.
- Two lines to confirm in the privacy policy before launch: the weather provider is unnamed ("a weather service"), and the "no third-party analytics" claim assumes the release build adds none.

Build: `npm run build` → `python ../package-site.py out` → commit `site.zip`.

---

# Oct 9, 2026 — content update (earlier the same day)

## Second pass
- **Hero:** one upright phone (the live court) beside the RM mark at 176px — the second phone, the orbit rings, the floating badge and the footer strip are gone. The copy is unchanged.
- **Logo.tsx (new, replaces the template's):** the RM mark at 36px with RALLY·METRICA — the Header and the Footer pick it up unchanged.
- **public/mark.svg** (the monogram) and **public/wordmark.svg** (the lockup) copied from the design repo.
- **public/screens/home.png** re-rendered — the earlier file was an empty frame (the capture missed the Home screen).

Changed: src/lib/site.ts (plans, support email, Pricing nav) · src/components/Pricing.tsx (new) · src/app/(main)/page.tsx (Pricing after Patterns) · Hero · PrimaryFeatures (Record · Analyze · Improve, aggression) · CoachFeatures (Coach link, background delivery, notifications, roster/home shots) · Faqs (beta, pricing, aggression, Coach link, backup) · Footer (Trokic Tech LLC, help@, Privacy, Terms) · src/app/layout.tsx (title, description) · src/lib/guides.ts (Coach link, report pages, Stats subject, delivery note) · src/app/(main)/features/page.tsx (02 · 04 · 05) · public/screens/ (six current renders — home · players · stats · momentum · aggression · live; see ASSETS.md).
