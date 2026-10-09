# Rallymetrica website

An independent product showcase and user guide built from the supplied Pocket TypeScript template. All website source, configuration, assets, and generated files stay inside `website/`. There are no imports or build dependencies on `app/`, `design/`, `icons/`, or `relay/`.

## Run locally

```sh
cd website
npm ci
npm run dev
```

## Verify and build

```sh
npx tsc --noEmit
npm run build
```

Next.js exports a static site to `out/`. Configure the hosting project’s root as `website/`, build with `npm run build`, and publish `out/`. The existing Rallymetrica app and repository-level configuration do not need changes.

## Pages

- `/`: product showcase, interactive Track/Review/Improve tabs, coach–player linking and pattern execution, learning links, and FAQs.
- `/features/`: six feature walkthroughs with app screenshots.
- `/learn/`: searchable guides with topic filters.
- `/learn/<slug>/`: seven step-by-step guides, including live coach–player linking and pattern execution results, with preview screens and related guides.

## App Store launch

The app is not live yet. Set the verified Apple App Store listing URL in `src/lib/site.ts` when it launches. The shared header and App Store action will then become links; until then they explicitly show Coming soon. No download hosting or signup form is included.

## Content and assets

Guide content lives in `src/lib/guides.ts` and reflects the current app controls and tracking limitations. See ASSETS.md for screenshot origins and the pre-launch screenshot refresh. The uploaded Pocket license is retained in LICENSE.md.
