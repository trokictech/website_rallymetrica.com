# Oct 16, 2026 — the forecast as a prime object (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

Text only; no screens.

## Home page
- **The Stats engine section moves up** — from after Pricing · Privacy to right after the match features — and **Forecast leads it** as a full-width block: *A forecast that moves with every point*, two paragraphs, three framed screens (the card's chip · the flipped card · the live cover's section — placeholders until the 4h-c capture), a link to the reference; Momentum · Aggression · Pressure · Patterns as the four cards beneath. The heading's paragraph no longer carries the forecast clause.

## Rewritten
- **/learn/stats-engine › Forecast** — rebuilt around the distinction the product now makes: *Row forecasts: one number, its own history* (the ETS family, the shrinkage, the window as a view — Last 3 shows the same star All shows) · *The baseline is honest* · *The range* (the floors, a margin's two points) · *Match forecasts: two players, one scoring system* (the serve rates through the arithmetic of the format; the range pushed THROUGH the scoring model, inside 0–100 by construction; *Even match* whenever the range covers a half) · *The forecast lives through the match* (the pre-match number is the live curve's first point; the live card's FORECAST chip and flip, the live cover's FORECAST section with its two-sided table and the pace column; gone when the match closes) · *Win rate: where the two meet* (the baselines are the match model's, the star the chance against the players you face, averaged by how often — never the opponents averaged first; the page as the match model's calibration). The formula block gains the push-through range and the next-match sum; *Reading it* opens with "know which forecast you are reading". 30 min read.
- **The match guide** — the cover step describes the live FORECAST section; the live-card step the FORECAST chip and the flip (and REPLAY, which replaces REPLAY SO FAR).
- **The stats guide** — the forecast step adds the window rule and the Win rate row's different kind.
- **FAQ** *Does it forecast the next match?* and the home teaser's fifth card — the two kinds.

## Corrected
- *Even — either way* → **Even match** (the app's words); the match range is no longer described as a linear approximation.

Build: `npm run build` → `python ../package-site.py out` → commit `site.zip`.

---

# Oct 15, 2026 — the forecast, the palette and the audit's definitions (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

Read against every decision since the Oct 14 pass (design/docs/website-review-oct15.md). Text only — no screen changes; every chart and court picture is stale by the Oct 15 palette and is re-shot once, last.

## New
- **The forecast — its own section of the reference** (#forecast, between Momentum and Patterns, in Momentum's shape: the view, the model behind the baseline, the honest baseline, the range, the match forecast, the formula block, *Reading it*, a placeholder figure `forecast.png`); the On-this-page nav and the home teaser's fifth card link to it; 25 min read. /learn/stats-engine › Stats over time reads *Three views, three questions* with a pointer to it: FORECAST — an exponential-smoothing model (level · trend · damped trend, the member by a small-sample criterion), the dashed baseline the forecast as it stood before each match (refitted from the matches before it alone, never hindsight), the NEXT star one slot past the last match with its 80% range, five matches (eight for a slope), a range that never collapses; a *Reading it* bullet on the gap (+4 vs forecast); a new *The match forecast* paragraph (the two serve rates through the scoring model — a win chance with its range, the likely set score, the expected length, points and break chances; *Asiya likely · 54–71%* · *Even — either way*; on the card before the first point and on the cover). The stats guide gains the step *Ask what the next one should be* (five questions now). FAQ: *Does it forecast the next match?* The home teaser's paragraph names it. Built in 4h; described as decided.

## Corrected
- **The palette:** the Stats line is one quiet line and the DOTS read above · below — yellow · coral; the band is a shaded grey tone with dashed edges (was "blue"); the model lines are dashed; "red" → "coral" in the reference and the stats guide; RUNS' shortest run coral, its two lines dashed; a fault on the serve placement a hollow red ring.
- **Definitions:** '2nd serve pts won' ÷ second-serve points (a double fault a second serve lost); '2nd serve return pts won' ÷ second-serve points received (a double fault one won); the 'return in' rows ÷ the serves received that landed — the server's and the receiver's rows sum to 100% of the same points again. The missing-value box: a count row reads a dash when none of the selected points was recorded at its level (a score-only set inside a Detailed match). Momentum's prior reads the player's history in the order played.
- **The serve session:** the T and WIDE zones are a share of the service box, a fifth by default; the band a serve fell in is its zone; the block summary's title and six cells, END SESSION alone after the last block, the picks kept across a kill, a cut-short session's unplayed blocks faint.
- **The VS rally:** a session that ends level is a tie — no winner, no crown.

## Not changed
- Screens: all stale by the palette (the charts, the courts, the Stats tab); the seven 4g placeholders stay. One re-shoot after the design backlog's export.
- Plans, prices, the coach link, iPad, privacy and terms.

Build: `npm run build` → `python ../package-site.py out` → commit `site.zip`.

---

# Oct 14, 2026 — the decisions pass (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

The site is read against DECISIONS.md from the Oct 11 practice brief to the Oct 14 rulings. Every page that describes the product now describes it as decided — including what 4g-i · 4g-ii still build. New screens are PLACEHOLDER renders (public/screens/, marked in ASSETS.md) to be replaced by captures from the 4g build, keeping the names.

## New
- **Practice sessions, everywhere they belong.** Home: `PracticeFeatures.tsx` (Rally · Co-op · Serve tabs) after Record · Analyze · Improve. /features: a new 05 / Practice block (Patterns moves to 07). Learn: the guide **/learn/practice-sessions/** (the Sessions tab, a VS rally's setup — presets FIRST TO 11 · 15 · 21 · TIMED 10 · OPEN, blocks, serve or feed start, SERVES 2 · 1, rotation — the court and the board, the co-op run, the serve basket with the court's DEUCE · AD and T · MID · WIDE strips, IN % · ON TARGET %, and the three reports). The stats engine reference gains **Practice sessions** (the VS rally on the match catalogue, the co-op's RUNS · ENDINGS, the serve catalogue with its own cuts, TREND) and the rally race model under Momentum. FAQs: "Can I track practice, not only matches?", "Do practice sessions count in my Stats?" (no — matches only), "Does it work on iPad?".
- **Plans** carry sessions on Player (and so on Coach · Academy); Free lists its three facts (score every match, the score-derived report, two detailed matches to try).
- **Support** gains a Practice sessions section; the tabs read Players · Sessions (Matches · Rally · Serve) · Stats · Patterns; iPad's two panes; the Data labels are the app's (Back up to a file · Restore from backup · Load demo season · Clear all data).

- **The reference's reading layer** (fifth pass, Oct 14): a "How to read a report, in order" box opens the catalogue; every catalogue group (Points · Serve, Return, Pressure, Placement) and Aggression ends with a *Reading it* box — the rows to read against each other, what the gap says — and an *Enough to read* sample line (20 points under a cut · 6 break points · 10 decided points); a closing *A worked reading* walks one lost Detailed match through the order to a single practice number. 22 min read.
- **The sessions guide split in three** (fourth pass, Oct 14): `/learn/rally-sessions/` (the Rally page, the format, serve or feed deliberately, the court, the cover and the race Momentum, the tables with the block track, across sessions), `/learn/coop-sessions/` (setup, the feeder pill, RUNS with the two lines, the cells, ENDINGS, the per-player rows, the rest), `/learn/serve-sessions/` (setup, calling side and target, serve · tap · type, the cover's two numbers, the SERVE page and its cuts, TREND, PLACEMENT and the Timeline). The Home Practice tabs, the FAQ and the cross-references link to the new slugs; `practice-sessions` no longer exists.
- **Three guides brought to reading depth** (third pass, Oct 14): *Choose your tracking mode* (what each level asks on court and what it buys in the report, the tap cost, what a mixed-level match looks like), *Read the match. Revisit the rally.* (one step per report page — Cover's format block, Momentum's three readings and two currencies, Aggression's columns, Points as three pairs, the Serve chain and the Return mirror, Pressure's gaps, Placement for the habit and Landings for the reason, Patterns as openings · executions · results, Timeline, cuts, replay), *Assign a pattern. Measure its success.* (drawing to the player's zones, the attempts · completions · won chain as a diagnosis, reading the season).
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
