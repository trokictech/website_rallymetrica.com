# Rallymetrica website

Production static website for [Rallymetrica](https://rallymetrica.com/). This repository publishes the existing product showcase, feature walkthroughs, and seven user guides through GitHub Pages. The app is currently coming soon.

The editable website source, configuration, dependency lockfile, and assets are in `website/`. The compiled website and publishing files remain at the repository root. No Rallymetrica app source, credentials, build caches, or original template archive is included.

## Run locally

Use Node.js 20.9 or newer and npm. From a fresh clone:

```sh
cd website
npm ci
npm run dev
```

Edit pages and components in `website/src/` and assets in `website/public/`. See `website/README.md` for the guide content and App Store launch configuration.

## Publishing updates

1. From `website/`, run `npm run build` to create the static export in `website/out/`.
2. From the repository root, run `python package-site.py website/out` (Python 3 required).
3. Review and commit `site.zip` and `index.html`, then push to `main`.

The packaging helper preserves Next.js navigation data and adds the flattened segment aliases needed by the Windows export. It rejects source maps and symbolic links. The Pages workflow extracts the archive, uploads the completed artifact, and deploys it. Source-only commits do not deploy until the compiled files are rebuilt and committed.

## Hosting

Pages source: **GitHub Actions**. Custom domain: **rallymetrica.com**. Enforce HTTPS when the certificate is ready. Squarespace DNS should point the apex to GitHub Pages and `www` to `trokictech.github.io`.

Asset origins are recorded in ASSETS.md. The supplied Tailwind Plus license is retained in LICENSE.md. The website is an end product; this repository is not a reusable template or component library.
