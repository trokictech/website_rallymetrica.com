export type Guide = {
  slug: string
  title: string
  description: string
  category: 'Getting started' | 'On court' | 'Analysis' | 'Coaching'
  duration: string
  screen: string
  screenAlt: string
  intro: string
  steps: { title: string; body: string }[]
  notes: string[]
}

export const guides: Guide[] = [
  {
    slug: 'your-first-match', title: 'Your first match', description: 'Choose your players, set the rules, and get onto the live court.', category: 'Getting started', duration: '4 min', screen: 'new-match', screenAlt: 'Rallymetrica match setup showing tracking options',
    intro: 'A little setup gives every point its context. Choose the two players, the match format, and how much detail you want to record.',
    steps: [
      { title: 'Start with the players', body: 'On Home, tap **New match**. In **Players**, tap **Choose** in each slot. Select two different players from your roster, or tap **+ New player** and save a new player.' },
      { title: 'Set the opening serve and ends', body: 'Choose who **Serves first**. Use **Swap ends** if the other player should start at the near end of the court.' },
      { title: 'Choose the rules', body: 'Open **Rules** and select the format you are playing, such as **Best of 3 · TB**, **Best of 3 · full**, or **Fast4**. Check the format before the first point.' },
      { title: 'Choose your tracking level', body: 'In **Tracking**, choose **Score**, **Counter**, or **Detailed**. Score keeps the point winners; Counter adds shots and endings; Detailed records landings on the court.' },
      { title: 'Start the match', body: 'Optionally set **Surface**, **Court**, and **Use location and weather**. Both players are required, but weather is optional. Tap **Start match** to open the live court.' },
    ],
    notes: ['Setup opens with your saved default rules and tracking level.', 'If you adjust a player’s zone traits during setup, those changes apply to this match only.', 'You can start without waiting for weather.'],
  },
  {
    slug: 'tracking-modes', title: 'Choose your tracking mode', description: 'Find the right balance between simple scoring and detailed insight.', category: 'Getting started', duration: '3 min', screen: 'live-counter', screenAlt: 'The live court in Counter mode: one tap per shot, then the ending',
    intro: 'The data you record determines the insight you can review. Choose a level that is practical for the match you are watching.',
    steps: [
      { title: 'Open the tracking options', body: 'Go to **New match → Tracking**. The three choices are **Score**, **Counter**, and **Detailed**.' },
      { title: 'Keep it simple with Score', body: 'Choose **Score** to record only who won each point. The app keeps the score, break points, and momentum. It does not record point endings or shot placements.' },
      { title: 'Add context with Counter', body: 'Choose **Counter** to count shots and record how each point ends. This supports serve percentages, rally length, winners, and errors, without recording court placements.' },
      { title: 'Record the full picture with Detailed', body: 'Choose **Detailed** to tap each landing on the court. This adds placement, direction, depth, serve targets, zone traits, and pattern matching.' },
      { title: 'Adjust during the match', body: 'The middle footer control cycles between **Detailed**, **Counter only**, and **Score only**. A change preserves shots already tapped and clears an unconfirmed placement. The new level applies to this match.' },
    ],
    notes: ['Counter and Score do not record court coordinates, so full rally paths require Detailed tracking.', 'At match setup, Free includes two non-score trial matches. After those trials, Counter and Detailed require Player or Coach.', 'Pattern focus is available only when you set up Detailed tracking.'],
  },
  {
    slug: 'live-tracking', title: 'Track, correct, and resume', description: 'Record the point, undo a mistake, and pick up where you left off.', category: 'On court', duration: '5 min', screen: 'live', screenAlt: 'Rallymetrica live court and Undo control',
    intro: 'Follow the live court’s prompt one action at a time. The scoring updates as you record points, and you can correct a mistake or leave the match open.',
    steps: [
      { title: 'Follow the court prompt', body: 'In **Detailed**, tap the serve landing, then each return or rally landing. In **Counter only**, tap once for the serve and each shot. In **Score only**, tap the point winner’s side.' },
      { title: 'Record how the point ended', body: 'In Counter or Detailed, choose the appropriate ending, such as **Ace**, **Service winner**, **Winner**, **Unforced error**, or **Forced error**. In Detailed, an error requires an outside landing or a net tap.' },
      { title: 'Confirm the point', body: 'Review the ending sheet, choose **Forehand**, **Backhand**, or **Other** when prompted, then tap **Save point**. **Star** and **Add note** are optional. Score only awards the point directly.' },
      { title: 'Correct or take a break', body: 'Use **Undo** to reverse a draft, unconfirmed placement, or earlier recorded action. Use the left footer control to return to the app. Your match remains live; tap **Resume** on its card to continue.' },
      { title: 'Finish the match', body: 'Open the match menu and select **End match**. If the score has not decided the result, select the winner and confirm **End match**.' },
    ],
    notes: ['Fault, Double fault, and Let appear during serving as appropriate.', 'Leaving keeps the current score, open point, and time on court available to resume.', 'Undo also works after you resume a match.'],
  },
  {
    slug: 'reports-and-replay', title: 'Read the match. Revisit the rally.', description: 'Explore the report, filter the moments, and replay recorded points.', category: 'Analysis', duration: '5 min', screen: 'replay', screenAlt: 'Rallymetrica recorded rally replay with court and playback controls',
    intro: 'The final score tells you the result. The report helps you understand how it happened, from serving and pressure to momentum and recorded rally paths.',
    steps: [
      { title: 'Open the match report', body: 'Open a finished match from **Matches**, or choose **Quick stats** from the live match menu to review the match so far.' },
      { title: 'Explore the report pages', body: 'Swipe horizontally or use the page picker to move between **Cover**, **Momentum**, **Aggression**, **Points**, **Serve**, **Return**, **Pressure**, **Landings**, **Patterns**, and **Timeline**. The available pages depend on the data recorded.' },
      { title: 'Narrow the question', body: 'Use the available set, **Situation**, and **Score** filters to isolate a part of the match. Try a pressure situation or a specific set, then compare the players within that selection.' },
      { title: 'Open a recorded rally', body: 'In **Timeline**, open a game to inspect its points. Tap a replay icon for a point, game, or set. A live match card’s **Replay so far** opens the recorded match to date.' },
      { title: 'Control the replay', body: 'Use play/pause and previous/next. Choose **Shot**, **Point**, **Game**, or **Set** when available, or tap the momentum strip to jump to a moment.' },
    ],
    notes: ['Replay animates recorded placements; it is not video. Full court paths require Detailed tracking.', 'Placement and Landings require Detailed tracking. Shots appears only when a match contains speed data.', 'Point, Game, and Set controls appear when the selected replay contains enough of those units.'],
  },
  {
    slug: 'stats-and-trends', title: 'See your progress over time', description: 'Am I improving? Was that a normal day? How do I compare — with a rival, or two students against the same opponent?', category: 'Analysis', duration: '6 min', screen: 'stats', screenAlt: 'The Stats tab: one metric across ten matches with its trend and usual range',
    intro: 'One match is one data point. The Stats tab charts one metric across a window of matches and answers four questions in order: where is my normal, was this match typical, am I improving, and how do I compare. Each answer is a tap or two.',
    steps: [
      { title: 'Find your normal', body: 'Open **Stats**, choose a category and metric — say **Serve → 1st serve in** — set the window to **10** and the view to **MA**. The flat line is your average over those matches. The blue band is your **usual range**: the middle 80% of where a normal match for you lands. It appears once five matches carry the metric.' },
      { title: 'Ask whether today was typical', body: 'Look at the last dot. Inside the band it was a normal day, even if it sits red below the average — change nothing. Outside the band it is notable, high or low: tap the dot to open that match, then look for the reason in the report (the opponent, the surface, one set, one situation).' },
      { title: 'Ask whether you are improving', body: 'Switch to **Trend**. The legend states the slope — **+0.4% per match** — and the line is yellow where a match beat the trend, red where it fell short. Three matches in a row on the same side of the average say the level has moved; the slope says how fast. A flat trend with a wide band means the problem is consistency, not level. Use **7** or **10**: three matches cannot show a trend.' },
      { title: 'Ask whether it improved where it matters', body: 'Put a cut on before you judge. **Situation → Break point**, or **Score → 30–30**, recomputes every match from those points only: **2nd serve points won under break point** across ten matches is the honest test of the second serve you have been practising. A dotted gap is a match with no such points, not a zero.' },
      { title: 'Compare with one opponent', body: 'Change **Any opponent** to a name. The window narrows to that head-to-head, and the same metric reads against that player only. Compare the average here with the average against anyone: if your first serve drops ten points against one rival, that is a tactical fact, not a bad day.' },
      { title: 'Coach: compare two students against the same opponent', body: 'On the **Coach** plan pick a player, a second player, and a common opponent. Both appear as series on one axis — same metric, same cut, same opponent. Read two things: who sits higher, and whose dots scatter less. The steadier player is often the one to trust on the big day; the higher, less steady one has the bigger upside and the clearer thing to work on.' },
      { title: 'Start from a profile', body: 'In **Players → a player → Trends** the same window applies. Tap any metric row to open its chart in Stats with the player already chosen.' },
    ],
    notes: ['The moving average needs two matches, the trend three, the usual range five.', 'The usual range is a prediction band: it says where your next normal match should land, which is why one match outside it is worth a look and one inside it is not.', 'A match in progress is drawn as the last, hollow point and left out of the average, the trend and the band until it finishes.', 'A missing value means “not captured at that tracking level” or “no points under this cut”. It is never a zero.', 'The reference page explains the band and the colours in full: Learn → The stats engine → Stats over time.'],
  },
  {
    slug: 'practice-plan', title: 'Turn a report into a practice plan', description: 'Read Momentum, Aggression and Pressure in the right order, pick one thing to fix, and check next week whether it moved.', category: 'Analysis', duration: '7 min', screen: 'momentum', screenAlt: 'The Momentum page with the largest swing starred',
    intro: 'A report earns its place only if it changes next week’s practice. This is the order to read it in, the one question each page answers, and the way to leave with a single number to improve.',
    steps: [
      { title: 'Start with Momentum, not the score', body: 'Open the report and go to **Momentum → Points**. Find the starred swing — the largest move the curve made — and tap it. The popover compares the stretch before with the stretch after: points played and win chance for each player. If the win chance fell while the share of points barely moved, the big points were lost, not the rallies: go to **Pressure**. If both fell together, a stretch of poor play: put the **set** cut on that set and go to **Aggression**.' },
      { title: 'Ask Aggression who was dictating', body: 'The **Margin** or **Efficiency** line sits above EVEN when a player is building more points than they give away. The counts beneath say how. If **Yielding** is the bigger column, the problem is errors — and the split tells you which: many **invited** forced errors mean short, middle balls that invited the attack (a depth problem); many unforced errors mean margins and shot selection. If both columns are small, the player made nothing happen and the opponent decided the match (a passivity problem). Switch Momentum to **Aggression** to see when in the match the dictating stopped.' },
      { title: 'Check Pressure for the moments', body: 'Points won overall at 52% with break points won at 20% is not a tennis problem; it is a pressure problem. Read **30–30**, **40–40**, **break points saved**, **first points won**. A gap of ten points or more between the pressure rows and the overall row points at the practice format, not the stroke: play practice games from 30–30, serve second serves only, start sets at 4–4.' },
      { title: 'Find the shot', body: '**Serve**: 2nd serve points won low with double faults present is the second serve; 1st serve in high with 1st serve points won low means the serve goes in but goes nowhere — check **T · Mid · Wide**. **Return**: return in % low on first serves is position, not technique. **Landings**: a low deep % is depth; a direction share that is nearly all crosscourt is a pattern the opponent has read.' },
      { title: 'Pick one thing and write it as a number', body: 'One metric, one cut, one window: “2nd serve points won under break point — 31% now, 45% over the next five matches.” Not three things. The report will still be there next week.' },
      { title: 'Check it on Stats', body: 'Open **Stats**, choose that metric, put the same cut on, set the window to **7** and the view to **Trend**. It has moved when the slope is positive and the last three dots sit above the old average. One good match inside the old usual range is not evidence yet; it is a normal day.' },
      { title: 'Coaches: hand it back as a pattern', body: 'If the fix is a sequence — serve wide, forehand into the open court — draw it in **Patterns**, assign it, and have the player include it in their next Detailed match. The report’s **Patterns** page then returns attempts, completions and points won, which is the fix measured.' },
    ],
    notes: ['Momentum → Points needs only the score. Aggression needs a Counter match; the invited / pressured split needs the landings of a Detailed one.', 'The aggression rows read a dash under ten decided points — a short match says nothing about aggression.', 'Five matches is the smallest honest window for a change; do not chase one result.', 'The reference page defines every row named here: Learn → The stats engine.'],
  },
  {
    slug: 'cuts', title: 'Ask a narrower question', description: 'Set, situation, score, serve side, rally length: the same number under the right cut answers a sharper question.', category: 'Analysis', duration: '5 min', screen: 'report-points', screenAlt: 'A report page with the filter track: sets, situation and score',
    intro: 'Every table page, Momentum and Landings share one filter track, and so does the Stats tab. A cut keeps only the points that fit and recomputes every row from them. Learning the five cuts turns a page of averages into answers.',
    steps: [
      { title: 'Set', body: '**S1 … S5** keeps one set. “Did the first set lie?” — compare 1st serve in under S1 with S3. On Momentum a set cut fades the other sets rather than hiding them, so the swing can still be read against the whole match.' },
      { title: 'Situation', body: 'One at a time: **Break point** (the receiver is a point from breaking), **Break game** (every point of a game the receiver won), **Break consolidation** (the service game straight after a break), **Tiebreak**, **Set point**, **Match point**. “How do I serve on break point?” — Serve page, Break point, read 1st serve in and 2nd serve points won against the uncut page.' },
      { title: 'Score', body: 'The game score before the point, server first: the presets **First point · 30–30 · Deuce · Advantage**, or any pair on the two wheels. A score cut stays live inside a game situation — “30–30 points inside break games” is a legal question. Pressure turns the score cut off because each of its rows already names a score.' },
      { title: 'The page’s own tracks', body: '**Serving · Returning**; rally length **0–4 · 5–8 · 9+**; **starred** points; on the serve and return pages **Deuce · Ad** and **T · Mid · Wide**; on the landing maps **Serve · Return · Rally · End**. Rally length is a property of the whole point, so on the Serve page **9+** reads “where my serves landed in the points that became long rallies” — a question about which serve starts the rallies you lose.' },
      { title: 'Read the grey', body: 'An option greys out when no row on the page can use it, or when it could not change the row: rally length on aces, break point on break points. Grey is the page telling you the question is empty, not a fault.' },
      { title: 'Carry the cut to Stats', body: 'The Stats tab has the same track. A question that was true for one match — “I lose the long rallies on my second serve” — becomes a trend across ten: 2nd serve points won, 9+, window 10.' },
    ],
    notes: ['Cover and Patterns take no cuts; Win rate takes none.', 'A missing value under a cut means no points fit. In a trend it is a gap, not a drop.', 'Starred points are the ones you starred on the live court when saving the point — your own highlight reel as a cut.', 'The full matrix of which cut applies to which row is in the reference: Learn → The stats engine → Cuts.'],
  },
  {
    slug: 'coach-player-link', title: 'Link your coach. Share the match live.', description: 'Connect both phones with encrypted sharing, then unlink whenever you choose.', category: 'Coaching', duration: '5 min', screen: 'coach-link', screenAlt: 'Rallymetrica Coach link screen showing the pairing code',
    intro: 'A linked coach can follow a player’s match on their own phone. Each saved point updates the shared match as it lands, giving both people the same score, report, and recorded rallies to review. Your matches live on your phone, and everything sent between the two phones is end-to-end encrypted.',
    steps: [
      { title: 'Show the player’s code', body: 'On the player’s phone, open the gear on **Home**, then **Settings → Coach link**. Display the QR code. This screen requires the **Player** plan.' },
      { title: 'Scan on the coach’s phone', body: 'On the **Coach** plan, open **Settings → Students → Add student**. Allow camera access and scan the code displayed on the player’s phone.' },
      { title: 'Approve the link', body: 'The player sees the coach’s name and **Wants to link**. Tap **Link** to approve. The coach then sees the player’s linked confirmation. The initial sync shares the profile, past matches, and any live match recorded so far.' },
      { title: 'Follow saved points', body: 'Record the match on the player’s phone. On the coach’s phone, find the shared live match in **Home** or **Matches**, then tap **Report**. Updates arrive after each saved point, including corrections made with Undo.' },
      { title: 'Review together', body: 'Use **Replay so far** to revisit the recorded match. In **Settings → Students**, open the student to use **Open profile**. Coach-created pattern assignments sync back to the player for their next match setup.' },
      { title: 'Unlink when you choose', body: 'On the player’s phone, open **Settings → Coach link**, tap **Unlink**, and confirm **Unlink**. New sharing stops on your phone. Once the coach’s app is online and receives the unlink, match copies received through the link are removed. Your original recordings remain on your phone.' },
    ],
    notes: ['Points arrive on the coach’s phone in the background, with a notification every set, game or point as the coach chooses under Settings → Notifications — per student under Settings → Students. Unfinished shot taps are not shared until the point is saved.', 'Offline updates queue and sync in order when connectivity returns. Offline unlinking also waits for connectivity to notify the other phone.', 'Shared matches are read-only on the coach’s phone; the recording phone controls the match.', 'The delivery relay stores encrypted messages until retrieval, plus device and connection details. It cannot read the shared match content.', 'Unlinking does not remove independently recorded coach matches or copies already exported or shared outside the link. Pausing stops new updates and keeps received copies.', 'Detailed tracking supplies the placements needed for full rally replay and pattern execution results.'],
  },
  {
    slug: 'coaching-patterns', title: 'Assign a pattern. Measure its success.', description: 'Create patterns of play, assign them to players, and review execution and points won.', category: 'Coaching', duration: '6 min', screen: 'pattern-editor', screenAlt: 'Rallymetrica coach pattern editor with a drawn shot sequence and Assign to',
    intro: 'Turn a tactical idea into a sequence you can draw and assign. Detailed match reports connect the plan with its execution: how often the sequence was completed, and how often those points were won.',
    steps: [
      { title: 'Open the pattern library', body: 'On the **Coach** plan, go to **Patterns → + New pattern**. Choose **Blank court** or start from a template.' },
      { title: 'Draw the sequence', body: 'Name the pattern, drag the ball and landing handles, and use **+ Shot** or **Remove last** to change the sequence. Consecutive landings must alternate sides for it to be counted.' },
      { title: 'Assign and save', body: 'Use **Assign to** to choose the players, then tap **Save pattern**. Changes and draft assignments are saved together. A linked player receives the assigned patterns at the next sync.' },
      { title: 'Choose the match focus', body: 'During setup, choose **Detailed**, then turn on **Include patterns** under **Pattern focus**. Select up to three patterns per player. Coach can also use **+ From library**. Record the landings during the match so the app can match the sequence.' },
      { title: 'Read attempts and completions', body: 'Open the match report’s **Patterns** page. An attempt is counted when the recorded point reaches the pattern’s opening zone with the correct player and serve context. A completion means the full sequence of landing zones was recorded in order. Each pattern counts at most once per point.' },
      { title: 'Understand the result', body: '**3 of 7 attempts · 67% won** means three complete executions from seven openings, and two of those three completed-pattern points won. The percentage describes points won after completion. Player profiles also bring pattern results together across recorded Detailed matches.' },
    ],
    notes: ['The pattern library and editor require Coach. A linked Player can include patterns assigned by their coach.', 'Pattern counts are inferred from manually recorded landing zones. Counter and Score do not provide execution counts.', 'Pattern focus is available only in Detailed setup. Switching away from Detailed clears the selected patterns.', 'A match keeps the patterns selected at its start; later edits do not rewrite that match’s results.', 'Serve options None, Any, 1st, and 2nd appear only when the first ball is in a service box. Cancel discards unsaved edits.'],
  },  {
    slug: 'run-your-roster', title: 'Run your roster', description: 'Link students, choose how you are told, follow matches live, compare players, and hand the work back as patterns.', category: 'Coaching', duration: '6 min', screen: 'students', screenAlt: 'Settings → Students: linked students with their live-score settings',
    intro: 'Coach puts every player you work with in one place: their matches arrive live, their profiles and trends are yours to read, and the Stats tab compares them. This is the weekly routine.',
    steps: [
      { title: 'Link each student', body: '**Settings → Students → Add student**, scan the code on the student’s phone, and they approve on theirs. The first sync brings their profile and past matches. **Coach** links up to five students; **Academy** up to twenty-five. Over the cap, **Settings → Plan** upgrades you; nothing is unlinked by a plan change.' },
      { title: 'Decide how you want to be told', body: '**Settings → Notifications → Live scores** sets the default: **Off · Every set · Every game · Every point**. Then, under **Settings → Students**, each student carries their own strip — **Off · Set · Game · Point** — which overrides the default for that student. Every point for the match you cannot be at; every set for the rest.' },
      { title: 'Follow a match live', body: 'A student’s live match appears on **Home** and in **Matches**. Open it for the report so far and **Replay so far**. Points arrive after each saved point, corrections included. The match is read-only on your phone; the student’s phone records it.' },
      { title: 'Read the student, not the match', body: '**Players → the student** opens their profile: **Trends** across the shared window, **Patterns** with completions across their Detailed matches, **Zones** with their zone traits — where middle, deep and the forehand zone begin for this player. Set the zones to the player, because every placement row reads through them.' },
      { title: 'Compare two students', body: '**Stats**: pick a player, a second player, and a common opponent. Two series on one axis, same metric, same cut. Who sits higher and whose dots scatter less are different facts; the steadier player is the one to trust on the day, the higher, less steady one has the clearer thing to work on. The same chart is how you tell a student the truth with numbers rather than opinion.' },
      { title: 'Hand the work back as a pattern', body: 'Draw the sequence in **Patterns**, **Assign to** the student, save. It syncs to their phone; they include it in their next Detailed match; **attempts · completions · won** come back in that match’s report and accumulate on their profile.' },
      { title: 'Pausing and unlinking', body: 'The student controls the link: **Settings → Coach link → Unlink** on their phone. Once your app is online and receives it, the copies you received through the link are removed; your own recorded matches stay. Pausing stops new updates and keeps the copies.' },
    ],
    notes: ['You appear on Players under YOU with your own matches; students sit under ROSTER. A coach is never a student on their own phone.', 'Shared matches are read-only; corrections come from the recording phone.', 'Coach and Academy differ only in the student cap: five or twenty-five.', 'Points arrive in the background with the notification you chose; unfinished shot taps are not shared until the point is saved.'],
  },
]
