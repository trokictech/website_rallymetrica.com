# Rallymetrica website

The product site and user guides for Rallymetrica, built from the Pocket TypeScript template on Next.js 16 and Tailwind 4. All source, configuration and assets stay inside `website/`; nothing here imports from `app/`, `design/`, `icons/` or `relay/`.

## Run locally

```sh
cd website
npm ci
npm run dev
```

## Verify, build, publish

```sh
npx tsc --noEmit
npm run build            # static export to out/
python ../package-site.py out   # writes ../site.zip
```

Commit `site.zip` at the repository root; the Pages workflow (`.github/workflows/pages.yml`) unzips it and deploys to rallymetrica.com. The root `index.html` and `ASSETS.md` from an earlier hand-built package are not part of the deploy and can be deleted.

## Pages

- `/` — hero, Record · Analyze · Improve galleries, coach link, patterns of play, plans, privacy, the stats engine teaser, learn preview, FAQs.
- `/features/` — six feature walkthroughs with app screens; the replay moves.
- `/learn/` — searchable guides with topic filters, plus the stats engine reference.
- `/learn/<slug>/` — seven step-by-step guides with preview screens and related guides.
- `/learn/stats-engine/` — the reference: every metric, what it needs, how it is counted; momentum, patterns, cuts, trends.
- `/privacy/`, `/terms/` — the policies App Review links to.
- `sitemap.xml`, `robots.txt` — generated at build.

## App Store launch

The app is in TestFlight. Set the verified App Store listing URL in `src/lib/site.ts` (`appStoreUrl`) when it goes live; the header pill, the App Store buttons and the FAQ switch from Coming soon to links.

## Content and assets

Guide content lives in `src/lib/guides.ts`; plans, prices, navigation and contact in `src/lib/site.ts`. Screens under `public/screens/` are rendered from the design prototype — see ASSETS.md — and should be replaced with release-build captures before launch, keeping the file names. Manrope is self-hosted through next/font. The Pocket license is retained in LICENSE.md.
