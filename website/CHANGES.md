## Oct 28, 2026 — the court zones renamed (unzip over the repo's website/ folder, rebuild, package, commit site.zip)
- **Learn › Stats Engine — the short-ball ledger and Handed over (owner, Oct 29; DECISIONS › Court zones renamed · the depth bands):** Points gains three rows — **Finish: Punished** (points lost ÷ one's short balls: a rally ball into the opponent's Finish zone inside one's channel, not a volley, the opponent not pinned), **Finish: Rewarded** (points won ÷ one's short balls by design: angles, volleys, drops), **Finish: Converted** (points won ÷ one's opportunities: balls struck from one's own Finish zone) — the count under each percentage; Detailed only, shot three on. Then **Deep: Rewarded** (points won ÷ deep rally balls) and **Angles: Made · Rewarded** — an angle is a crosscourt rally ball landing outside one's channel and short of the opponent's deep band (wide and short; no origin clause); Made counts the crosscourt ball that missed wide as an attempt. The Landings page's zones table is zones-as-rows now (Channel · Angles · Deep · Short · Short by design · My FH · Opp FH × Balls · Won) and 'Mid' reads 'Channel' everywhere a zone is named. Placement gains the two shares beside Deep landings (Short balls · Short by design ÷ rally balls in court). Aggression gains **Intent margin** (built − given − handed over) and **Handed over** (points lost after one's own short ball, beaten or forced; an unforced error is counted once, as given); the Given definition drops the Oct 6 'invited forced error' (now Handed over); the notes rewritten (two margins, one chart — the classical line and the intent line beneath it on the Momentum page's Aggression view; the Counter match hands nothing over); the reading paragraphs: a large Handed over column is depth and shape; a +4 margin against a −4 intent margin is the pusher's match. The Placement note's 'invited errors' reference updated. Lands in the app with the 4i-h slice; the Aggression and Points captures re-shoot then.
- **Channel · Deep replace "mid court" · "deep court" everywhere** (DECISIONS › Court zones renamed · the depth bands): a coach read *mid court* as the depth zone coaches mean by it — the strip around the service line — while ours is the lateral band down the centre that separates the middle ball from crosscourt and down the line. The app's sliders now read **Channel · Deep** under the Court heading (the next build); the site follows: the zones guide (the first step defines the **Channel** and says in one sentence that it is not the coaches' mid-court, which the app does not draw yet; the scale and gradient steps; the notes' defaults and ranges), the Start a match guide's zones step, the coach guide's profile step, the stats-engine Placement notes, the FAQ. No screen changes — the profile-zones captures still show the old labels until the next app build's re-shoot.

- **FIRST: the repo's website/src/lib/guides.ts on main carries an UNRESOLVED MERGE CONFLICT** (<<<<<<< HEAD … >>>>>>> b922b93 around serve-sessions › 'Call the side and the target'). This copy resolves it the ruled way — behind the server = the net at the BOTTOM, the deuce box left (DECISIONS › Step 4h-p review Q34); the HEAD side had the net at the top. The file here is the repo's (its step type with screen · alt, its alt texts) plus everything below — overwrite, do not merge.
- **New guide — Learn › Set the zones. Read them your way.** (slug zones, Getting started, after Choose your tracking mode): the four zones and what each feeds; where to set them (profile › Zones, New match › Zones, Settings › Zones for the scale); % · feet · metres (Settings → Zones → Court zones, the unit from Units; the zone does not move, only its reading); **O'Shannessy's lanes** (A B C D across the court's width, the forehand A · B · C for a right-hander and B · C · D for a left-hander — Settings → Zones → FH zone → Lanes; the court letters and shades the lanes); reading the gradient fills (forehand darkening toward D, mid court strongest on the centre line, deep court strongest at the baseline); the match's own copy and Reset. Notes: the defaults, the ranges (the forehand floor is now 25%, one lane), the scale is a reading not a storage, the serve strips.
- **Your first match:** 'Choose the rules' now names the Customize sheet's rows — the **set tiebreak** at games-all and the **match tiebreak** in place of the final set (7 or 10) are two settings; a new step **Check the zones** (the New match › Zones tab — both players on one court, the player track, sliders starting at the profile, this match only, Reset); the note reworded.
- **Track, correct, and resume:** a note on **haptics** — one light tick per landing, two for an ending that costs the point, a heavier one for Undo, a warning buzz for a refused tap; Settings → Haptics; none on iPad.
- **Read the match. Revisit the rally.:** the Oct 24 **Games won** sentences (Points · Serve · Return open with it; under a cut, the complete games the cut's points fall in) — the scratch copy had them, the repo did not.
- **Learn › Stats Engine › Placement (Oct 29, night):** the lead describes the matrix — five tabs, zones as rows, one measure (Balls · Punished · Rewarded · Converted); a closing reading paragraph carries the three measures in the owner's words and the FROM-lane filter. The Points rows read Finish: Punished · Rewarded · Converted and Deep: Rewarded (one word for the zone everywhere).
- **Learn › Stats Engine › Placement (Oct 25, late):** the eight lane rows under the six — **Into lane A · B · C · D** (the opponent's four lanes, lettered from their deuce side) and **Serve +1 · Return +1 from FH zone**, each with its won row — and a reading paragraph on O'Shannessy's lanes (C · D the backhand side against a right-hander; a +1 row under 50%; a high share with a low won rate). They show in the app under Settings → Zones → FH zone → Lanes, the default from 4i-f.
- **Learn › Stats Engine › Crosscourt (Oct 26):** the how-line now states the rule for a ball struck from inside the middle band (read from the side of centre it was struck on) — direction is always an estimate; it lands in the app with the first post-1.0 slice.
- **Learn › Stats Engine — one stat, one row (owner, Oct 25):** every grouped metric split as the app lists it — Crosscourt · Down the line · Middle; Serves T · middle · wide; 1st · 2nd serves here; Return unforced · forced · total errors; the lane and +1 rows above; on the serve-session table 1st · 2nd serve in, To the T · To the middle · Out wide, Flat · Slice · Kick. No row's meaning changed.
- **Assign a pattern** and **Run your roster:** 'middle, deep' → 'mid court, deep court'; the roster's Zones line adds the scales and the lanes.
- **learn/stats-engine:** the repo's math-rendered page kept; the **Games won** row added at the head of Points and serve; the Placement notes' zone ranges rewritten (mid court 10–75% of the width · deep court the last 10–50% · the forehand zone 25–100% or one to four lanes · T · wide 5–25% of the box; read in %, feet or metres); 'deep, middle' → 'deep court, mid court'.
- **Oct 25, later — the lanes pinned to the court (O'Shannessy: 'Position A is always out wide in the Deuce court … regardless of a left-handed or right-handed player'):** the zones guide's lanes step, the FAQ and the stats page's Placement reading now say the letters belong to the court — A the deuce-side lane, D the ad-side — and a left-hander's forehand reads D · C · B (the earlier wording implied the letters flipped).
- **learn/stats-engine, the catalogue mirrors the app's pages:** the old 'Points and serve' group is split into **Points** (Games won · Points won · Break points won · Win rate · Winners · errors) and **Serve** (Games won as the hold rate · the serve chain · Aces · Service winners · Double faults, with its own reading and sample note); **Return** gains Games won as the break rate and a paragraph reading it against 2nd serve return pts won. Six groups now: Points · Serve · Return · Pressure · Placement · Aggression, as in the app.
- **learn/stats-engine, the reading paragraphs:** Points and serve opens with how to read **Games won** against Points won and under the cuts (hold rate under Serving, break rate under Returning, games held from break point down); Placement's last paragraph explains the forehand rows under **O'Shannessy's lanes** (A B C D; the forehand A · B · C; a left-hander's reversed).
- **FAQ:** 'Can I set the zones in feet or metres?' → the zones guide. **PrimaryFeatures › Improve:** the profile-zones shot's alt and caption name the scales.
- **Six screens replaced (4i-e, Oct 25 — the app's captures, 1206 × 2622 → the site's 804 × 1624 crop, the status bar off):** profile-zones (+ -light) — the ZONES tab as it opens: the court with Asiya's forehand on her half and her mid, deep and serve strips on the opponent's, the caption, ZONE TRAITS, COURT · SERVE · STROKE with the four sliders at 25 · 30 · 20 · 75%; new-match (+ -light) — PLAYERS with the four-tab row PLAYERS · RULES · ZONES · TRACKING and the plain court under SWAP ENDS; settings (+ -light) — the eight rows with ZONES '% · %' and HAPTICS as ON | OFF pills. The other 86 screens stand. App Store Connect — none of the ten store screens shows zones or Settings; nothing redone there.
- Still from Oct 21 · 24 (below): the serve-court string and the PracticeFeatures line; the capture list of Oct 21.
- **Four screens replaced (4i-f, Oct 25, night — the same crop):** profile-zones (+ -light) — the ZONES tab with the court lettered D · C · B · A down Asiya's half, her forehand's fade stepped over A · B · C, FH ZONE reading A · B · C (LANES the default); settings (+ -light) — ZONES reading '% · Lanes'. new-match's pair unchanged (the PLAYERS court draws no zones). Nothing in the App Store set shows these.
- **Thirty-eight screens replaced (4i-g, Oct 25, night — the app's one whole capture run, the same crop):** profile (+ -light) and report-points (+ -light) now open with **Games won** (the profile's TRENDS 49% · 65/133; the report's POINTS 63% · 12/19 | 7/19 · 37%); report-cover · forecast-cover · rally-report · point-end · students · coach-link (+ -light each) carry the app's spacing since 4i-c (the covers' facts lower under their dividers, the point sheet taller, the two sheets' tops higher; coach-link's code minted per run); the rest — coop-between-runs · coop-court · forecast-card · home · live · live-half-return · rally-court · stats-trend (+ -light each), live-counter · live-score · live-turned (dark), forecast · matches · stats (light) — differ from the Oct 24 pictures by the LIVE dot's phase alone, replaced so the site's set equals the app's. No page or word changed with them.

## Oct 24, 2026 — CORRECTION to the Oct 21 serve-court words (the 4h-p review)
- guides.ts › serve-sessions › 'Call the side and the target': the Oct 21 string had the net INVERTED against the ruling (behind the server = the net at the BOTTOM, the deuce box left; behind the receiver = the net at the TOP, the deuce box right) and described the zones as 'the T a solid wash and the wide a cross-hatch' where the court hatches BOTH zones and lights the block's target. The string above is the corrected one; the website repo's commit 643706d carries the wrong one — replace it before pushing (one commit; the PracticeFeatures line is fine).

## Oct 21, 2026 — the serve court's vantage point
- guides.ts › serve-sessions › 'Call the side and the target': the court is drawn from where you stand — behind the server by default, ☰ → Standing behind → Receiver turns it round; serves stored in the server's frame either way; the zones' marks (T a wash, wide a cross-hatch, mid the plain box); the strips now UNDER the court.
- PracticeFeatures.tsx › Serve › items: one line for the vantage point.
- Captures to refresh when 4h-p runs: serve-court (the strips under the court, UNDO in the corner, the zone marks), live (the toast under the scoreboard, UNDO · FAVE as the pane's corners), coop-court · rally courts (the feeder pill in the footer), paper-cover and the session papers (the cover's columns and foot, the restyled tables).

# Oct 19, 2026 (evening) — the guides explain the court (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

- **Track, correct, and resume** gains two steps before the prompt: *Read the court from your seat* (Full and Half court, ☰ → Court view, drawn from the observer's seat, left always your left) and *Let the court change ends with the players* (the changeover turn; behind a baseline hold the phone upright, beside the net post turn it sideways; the dotted arrow between the last two balls). Duration 5 → 7 min; intro and description updated.
- **Your first match › Set the opening serve and ends**: *Swap ends* is explained as the one-time answer to "which end am I sitting behind" — set once, then the court turns with the players.
- **Rally sessions › Play it like a match**: one clause that the two court views and the turn apply there too.

---

# Oct 19, 2026 — the app's own screenshots (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

- **public/screens/ replaced with the app's capture set** (4h-l (5), both themes): every screen the site shows is now a picture of the app, not the prototype — the tab bar's accent glyphs, the watermark, the ☰ courts, the light palette as built. Cropped to the site's 804 × 1624 as before; no source change (`croppedScreens` · `lightScreens` already name every one). The replay has a light twin too: `replay-sprite-light.png` · `replay-light.png` (eleven frames of m1's point 14, an 11-shot rally Asiya wins, from the prototype's replay in both themes at 402 × 812 — the FULL court with the alley names, the Oct 17 palette); `ReplayLoop` draws both strips and CSS shows the theme's; `replay-sprite.json` now 402 × 812.

---

# Oct 18, 2026 (night) — light mode shows light phones; the bottoms uncovered (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

- **Every site screen re-shot at 804 × 1624** (status bar cropped, home indicator kept): the first cut's 68px bottom crop cut the courts' UNDO · FAVE row, the Counter's ending bar, SAVE PATTERN and the point sheet's buttons. `AppScreenshot` cropped height 1556 → 1624. The point sheet and pattern editor no longer show wrapped labels (a renderer artifact, pinned at capture).
- **Nineteen more LIGHT twins** under public/screens/ (ASSETS.md lists them); `src/lib/screens.ts › lightScreens` now names every screen the site shows but the replay, so the theme switch no longer leaves dark phones on a light page — the Record gallery, Practice, Patterns, the coach sheets and every guide included. `point-end.png` · `pattern-editor.png` re-captured in dark at the site's crop and added to `AppScreenshot › croppedScreens`.
- Left for the next pass: a light `replay-sprite.png` for the ReplayLoop (Home › Analyze, /features 04).

---

# Oct 18, 2026 (late) — the support page's contact card

- **/support opens on a contact card** (`ContactCard.tsx`, the CallToAction surface): the eyebrow SUPPORT & PRODUCT QUESTIONS, the address as the headline, the one-line ask, WRITE AN EMAIL opening a pre-addressed mail with the subject 'Rallymetrica support'. The old Reach us section becomes 'What to include'; About no longer names a city. `LegalDoc` gains an optional `lead` slot under the header.

---

# Oct 17, 2026 (late) — the exports, and SwingVision as coming soon (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

Text only. The app gains PDF and CSV export on every report's Share sheet and a season CSV under Settings › Data (design: DECISIONS › CSV export · The PDF was never scheduled; built in 4h-j). The SwingVision import is advertised and not released: the column map waits on SwingVision.

## Oct 18, 2026 — the re-shoot
- Every phone picture re-captured from the design prototype after the 4h line (35 screens; the Oct 17–18 palette, the ground's watermark, the tab glyphs in the accent, the Settings foot, the live court's corners and ☰, the card's forecast face flat).
- 17 screens gain a LIGHT twin (`<name>-light.png`); `src/lib/screens.ts › lightScreens` lists them, so the theme switch now shows a light phone on a light page.
- The practice courts and reports are real captures (no drawn frames left but replay.png).

## New
- **A QR code in the hero** (owner, Oct 18): the bare code beside the stacked App Store · See the plans buttons, 'Scan to install' under it — no card, no address — hidden under sm. It carries `rallymetrica.com/get`, a fixed address: `/get` forwards to the App Store listing the moment `appStoreUrl` is set in lib/site.ts (meta refresh; the site is static) and reads 'Coming soon to the App Store' until then, so the printed code never changes. The code is `public/qr-get.svg`, generated once (version 3, EC level M, verified by round-trip decode); `/get` is noindex and not in the sitemap.
- **SHARE is the fourth pill** of Record · Analyze · Improve (owner, Oct 18: the paper and the CSV are what you do with the report once you have it — the fourth verb). The pill's pictures are four pages of the report (paper-cover · paper-momentum · paper-aggression · paper-landings) in the other pills' 2×2, each a white sheet with the phone's shadow (`.paper-sheet`); its link goes to the sharing step of the reports guide. The standalone paper section (PaperFeatures.tsx) is gone from the home page; /features keeps its 08 block. The tab track widens to max-w-xl for four pills.
- **The mark follows the theme.** components/Mark.tsx draws the RM inline — letters in currentColor, the ball and bars in the accent — so the header, the footer and the hero's large mark read #FFB733 in light and the neon in dark; public/mark.svg stays as the favicon only.
- **The report, on paper — a home-page section** (`PaperFeatures.tsx`, between the stats engine and Practice; the only picture on the page that is not a phone, because this is the one feature that leaves it): the cover · Aggression · Landings pages as a trio on a transparent ground (`public/screens/paper.png`, rendered from the design prototype's Report PDF — the cover upright in front, the two pages turned outward behind it), the heading *Take the match off the phone*, two buttons (the guide's Share step, Support › Your data), three cards — one sheet three ways · the data too · every session kind.
- **/features 03 / The report, on paper** — the same picture and words as a feature block after *02 / After the point*; the later blocks renumbered 04–08.

## Changed
- **Support › Your data** — three new bullets ahead of Backup: the PDF (what it contains, the three ways out of the sheet), the CSV (the ball-per-row log and the season file), and *Import from SwingVision — coming soon* (what it will read; the row sits under gear → Data and opens when the import ships).
- **Privacy › What the app stores on your phone** — the PDF and the CSV named beside the backup as files the owner creates and keeps.
- **Home › It's your data, card 01** — *Saved on your phone, yours to take*: every report a PDF, every match, session or season a CSV.
- **The match guide** — a Share step after Replay: the PDF, the CSV, the season export.
- **/features 02** — a bullet for the PDF and the CSV.
- **FAQ** — *Can I get my data out?* before the storage question; names the import as coming soon.

---

# Oct 16, 2026 (late) — screens re-shot from the prototype

24 of public/screens/ replaced with 3× prototype snapshots under the new palette (ASSETS.md has the table): Home with the forecast chip, the live court, Momentum with a swing open, Stats › FORECAST and TREND, the flipped card, the live cover with its FORECAST section, Aggression · Landings · Pressure · Summary · Points · Timeline, the roster and profile pages, Sessions › Matches and Rally, the pattern library, the VS rally court. The practice courts and reports stay placeholders until the app's re-shoot. No text changes.

---

# Oct 16, 2026 — the forecast as a prime object (unzip over the repo's website/ folder, rebuild, package, commit site.zip)

Text only; no screens.

## Home page
- **The Forecast tab's description** names the mechanism — the per-player smoothing model, the shrinkage, the exact scoring arithmetic, the push-through range, the live re-read — and states the plan: first and second serves, unforced errors, winners and aggression are tested next as inputs, each earning its place by forecasting real matches better.
- **It's your data and Learn Rallymetrica** take the horizontal card row (the old Stats engine grammar: heading left, lead or buttons right, then three cards across under hairlines) instead of the heading-left / stacked-list-right form; the privacy notes sit as two small columns under the cards.
- **The Stats engine section moves up** — from after Pricing · Privacy to right after the match features — and is rebuilt in the house pattern every other section uses (the centred heading, the pill tabs, one panel of text + phone each): **01 Forecast · 02 Momentum · 03 Aggression · 04 Pressure**, Forecast first — *A forecast that moves with every point*, three checks (the live card, the live cover, the Stats tab), the live cover's screen (a placeholder until 4h-c's capture), a button into the reference. Patterns has its own section already.

## Rewritten
- **/learn/stats-engine › Forecast** — rebuilt around the distinction the product now makes: *Row forecasts: one number, its own history* (the ETS family, the shrinkage, the window as a view — Last 3 shows the same star All shows) · *The baseline is honest* · *The range* (the floors, a margin's two points) · *Match forecasts: two players, one scoring system* (the serve rates through the arithmetic of the format; the range pushed THROUGH the scoring model, inside 0–100 by construction; *Even match* whenever the range covers a half) · *The forecast lives through the match* (the pre-match number is the live curve's first point; the live card's FORECAST chip and flip, the live cover's FORECAST section with its two-sided table and the pace column; gone when the match closes) · *Win rate: where the two meet* (the baselines are the match model's, the star the chance against the players you face, averaged by how often — never the opponents averaged first; the page as the match model's calibration). The formula block gains the push-through range and the next-match sum; *Reading it* opens with "know which forecast you are reading". 30 min read.
- **The match guide** — the cover step describes the live FORECAST section; the live-card step the FORECAST chip and the flip (and REPLAY, which replaces REPLAY SO FAR).
- **The stats guide** — the forecast step adds the window rule and the Win rate row's different kind.
- **FAQ** *Does it forecast the next match?* and the home teaser's fifth card — the two kinds.

## Corrected
- **Rallymetrica**, never "Rally", as the product's name (four Oct 16 sentences); "Rally" stays the Sessions page's name.
- **The reference's match-forecast section** gains *What feeds the rates is decided by evidence, and it is growing* — today's input (the serve rate), the four forms tested next (the serve split with double faults, recent error form, recent aggression form, the plain rate as the baseline), the judging rule (held-out matches, log loss · Brier · coverage, the simpler model on a tie), and that the live FORECAST table already shows errors and winners against their forecasts.
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
