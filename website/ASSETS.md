# Rallymetrica website assets

Brand marks copied unchanged from `trokictech/rally`: `public/mark.svg` = `design/lib/design/logo-rm.svg` (the RM monogram, 256 viewBox), `public/wordmark.svg` is the same mark on the lockup’s artboard (the type is set live by Logo.tsx). The Header, Footer (Logo.tsx) and the Hero use mark.svg; `public/apple-touch-icon.png` (180 px) and `public/og.png` (1200 × 630, the link preview) are rendered from them.

## public/screens/ (Oct 2026)
Rendered from the design prototype (design/shell/Home Shell.dc.html, Coach plan, demo season) at the iPhone's 402-point width, 2× (804 px wide), the status bar and home indicator cropped — the site's phone frame draws its own. Replace them with captures from a release build before launch, keeping the names.

| File | Screen | Used by |
| --- | --- | --- |
| live.png | the live court, Detailed tracking | Hero · Home › Record · /features 01 · stats engine |
| live-counter.png | the live court, Counter | Home › Record · tracking-modes guide · stats engine |
| live-score.png | the live court, Score | Home › Record · stats engine |
| point-end.png | the point sheet (ending, wing, direction) | Home › Record |
| momentum.png | report › MOMENTUM | Home › Analyze · /features 02 · stats engine |
| aggression.png | report › AGGRESSION | Home › Analyze · stats engine |
| landings.png | report › LANDINGS | Home › Analyze · stats engine |
| replay.png | the rally replay (still) | /features 03 poster · reports-and-replay guide |
| replay-sprite.png + .json | the rally replay, 11 frames at 1.6 fps | ReplayLoop: Home › Analyze · /features 03 |
| report-cover.png, report-points.png | report › COVER · POINTS | spare |
| stats.png | Stats with trend | Home › Improve · /features 04 · stats-and-trends guide · stats engine |
| profile.png | a player profile | Home › Improve |
| profile-zones.png | profile › ZONES | Home › Improve |
| profile-patterns.png | profile › PATTERNS | Home › Patterns › Track · stats engine |
| matches.png | the Matches tab | Home › Improve |
| home.png | Home with a live card | Coach section · /features 05 |
| players.png | the roster | Coach section |
| coach-link.png | Settings › Coach link (the code) | coach-player-link guide |
| students.png, notifications.png, settings.png | Settings › Students · Notifications · Settings | spare |
| pattern-editor.png | the pattern editor | Home › Patterns › Create · coaching-patterns guide |
| patterns.png | the pattern library | Home › Patterns › Assign · /features 06 |
| new-match.png | match setup | your-first-match guide |
| welcome.png, about-you.png, choose-plan.png | the first start | spare |

The website is adapted from the supplied TypeScript Pocket template. Its commercial license is retained in LICENSE.md. Manrope is self-hosted by Next.js through next/font.
