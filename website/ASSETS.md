# Rallymetrica website assets

Brand marks copied unchanged from `trokictech/rally`: `public/mark.svg` = `design/lib/design/logo-rm.svg` (the RM monogram, 256 viewBox), `public/wordmark.svg` is the same mark on the lockup’s artboard (the type is set live by Logo.tsx). The Header, Footer (Logo.tsx) and the Hero use mark.svg; `public/apple-touch-icon.png` (180 px) and `public/og.png` (1200 × 630, the link preview) are rendered from them.

## public/screens/paper*.png (Oct 18, 2026 — the report on paper)
paper.png (1800 × 1500): three Letter pages of the match report, rendered at 2× from the design prototype's Report PDF (design/shell/Report PDF.dc.html — the demo season's m1) and fanned on the site's ground with soft shadows: Landings at the back, Aggression in the middle, the cover in front. Used by the home page's PaperFeatures section and /features 03. paper-cover.png · paper-aggression.png · paper-landings.png are the three pages alone (1632 × 2112). Re-render when the PDF's pages change.

## public/screens/ (Oct 16, 2026 — re-shot from the prototype under the new palette)
3× DOM snapshots of the design prototype (design/shell/Home Shell.dc.html, Coach plan, the 67-match demo season) in the 402 × 874 phone frame, downscaled to 804 wide with the status bar and home indicator cropped — the site's frame draws its own. The App Store set (design/store/iphone-6.3/) is the same captures at 1206 × 2622. Replace with device captures at the re-shoot, keeping the names.

| File | Screen | Used by |
| --- | --- | --- |
| home.png · forecast-card.png | Home with the live match card (the FORECAST chip) | Coach section · /features 05 · the Forecast tab |
| live.png | the live court, Detailed, a second serve pending | Hero · Home › Record · /features 01 · stats engine |
| momentum.png | report › MOMENTUM with the largest swing open (the BEFORE · AFTER table) | Home › Analyze · /features 02 · stats engine |
| forecast.png · stats.png | Stats › FORECAST (the baseline, the LIVE dot, the star and its range) | Forecast section · Home › Improve · /features 04 · stats guide |
| stats-trend.png | Stats › TREND | spare |
| forecast-flip.png | the live card flipped to its FORECAST face | the Forecast tab |
| forecast-cover.png · report-cover.png | a live match's cover with the FORECAST section | the Forecast tab · spare |
| aggression.png · landings.png · pressure.png | report › AGGRESSION · LANDINGS · PRESSURE | Home › Analyze · stats engine |
| report-summary.png · report-points.png · report-timeline.png | report › SUMMARY · POINTS · TIMELINE | spare · reports guide |
| players.png · profile.png · profile-zones.png · profile-patterns.png | the roster · a profile · ZONES · PATTERNS | Coach section · Home › Improve · Patterns |
| matches.png · sessions.png | Sessions › MATCHES (FINISHED · 67) · Sessions › RALLY | Home › Improve · sessions guide |
| patterns.png | the pattern library | Home › Patterns · /features 06 |
| rally-court.png | the live court on a VS rally (B1 · SCORE, the feed) | Home › Practice › Rally · rally guide |

**Still placeholders or stale (the element renderer cannot paint the Practice Screens subtree — captured from the app at the re-shoot):** coop-court.png · serve-court.png · serve-report.png · runs.png · rally-report.png (drawn frames); replay.png · replay-sprite (the Oct 14 captures, old palette); live-counter.png · live-score.png · point-end.png · pattern-editor.png · new-match.png · coach-link.png · students.png · notifications.png · settings.png · welcome.png · about-you.png · choose-plan.png (Oct 14 captures — not chart or court screens, so the palette barely touches them).

The website is adapted from the supplied TypeScript Pocket template. Its commercial license is retained in LICENSE.md. Manrope is self-hosted by Next.js through next/font.
