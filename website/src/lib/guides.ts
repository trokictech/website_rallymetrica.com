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
    slug: 'stats-and-trends', title: 'See your progress over time', description: 'Look beyond one result with player metrics, match windows, and trends.', category: 'Analysis', duration: '4 min', screen: 'stats', screenAlt: 'Rallymetrica player trend chart across matches',
    intro: 'One match is one data point. Stats brings your matches together so you can inspect the same metric over time and return to the match behind a chart value.',
    steps: [
      { title: 'Pick the player', body: 'Open **Stats**. On Free and Player the subject is you; on Coach, select the **Player** whose performance you want to explore.' },
      { title: 'Choose the metric', body: 'Pick a category and statistic, such as **Points → Win rate**, or a serve, return, or pressure metric. The choices depend on what your matches recorded.' },
      { title: 'Set the comparison', body: 'Keep **Any opponent** or choose a specific opponent for a head-to-head view. On the Coach plan you can also pick any player on the roster and compare two players against a common opponent. Available filters depend on the metric.' },
      { title: 'Choose the match window', body: 'Use **Last**, **3**, **7**, **10**, or **All** under the chart. In a single-player view, select **MA** for a moving average or **Trend** for a trend view.' },
      { title: 'Inspect the match behind a dot', body: 'Tap a chart dot to see that match. You can also open **Players → a player → Trends**, then tap a metric row to open its chart in Stats.' },
    ],
    notes: ['Moving average needs at least two matches with metric values. Trend needs at least three.', 'A missing value can mean “not captured” or “no points in this cut.” It is not a zero.', 'Stats and profile Trends share the same match window.'],
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
  },
]
