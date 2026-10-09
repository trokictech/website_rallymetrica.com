# Rallymetrica website assets

Brand marks copied unchanged from `trokictech/rally`: `public/mark.svg` = `design/lib/design/logo-rm.svg` (the RM monogram, 256 viewBox), `public/wordmark.svg` = `design/lib/design/logo/rallymetrica-white-yellow.svg` (the lockup). The Header, Footer (Logo.tsx) and the Hero use mark.svg.

## public/screens/ (Oct 9, 2026)
Rendered from the design prototype (design/shell/Home Shell.dc.html, Coach plan, demo season) at the iPhone's 402-point width, 2× (804 px wide), the status bar and home indicator cropped — the site's phone frame draws its own. They show the current look (the RM mark, the Oct 2026 layout). Replace them with captures from a release build before launch, keeping the names.

| File | Screen | Used by |
| --- | --- | --- |
| live.png | the live court, Detailed tracking | Hero, Features › Record, /features 01 |
| momentum.png | report › MOMENTUM | Hero, /features 02 |
| aggression.png | report › AGGRESSION | Features › Analyze |
| stats.png | Stats with trend | Features › Improve, /features 04 |
| home.png | Home with a live card | Coach section, /features 05 |
| players.png | the roster | Coach section |

Earlier captures (patterns-create, patterns-assign, patterns-report, replay, setup, coach-*) are from the September builds and show the old RALLY branding; replace them from a release build before launch.

The website is adapted from the supplied TypeScript Pocket template. Its commercial license is retained in LICENSE.md. Manrope is self-hosted by Next.js through next/font.
