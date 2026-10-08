# Rallymetrica website

Production static website for [Rallymetrica](https://rallymetrica.com/). This repository publishes the existing product showcase, feature walkthroughs, and seven user guides through GitHub Pages. The app is currently coming soon.

The repository contains only the compiled website and publishing files. The editable Pocket-based website source remains in the original local website project. No Rallymetrica app source, credentials, build caches, or original template archive is included.

## Publishing updates

1. Edit the original website project and build its static export with `npm run build`.
2. From this checkout, run `python package-site.py path/to/website/out`.
3. Review and commit `site.zip` and `index.html`, then push to `main`.

The packaging helper preserves Next.js navigation data and adds the flattened segment aliases needed by the Windows export. It rejects source maps and symbolic links. The Pages workflow extracts the archive, uploads the completed artifact, and deploys it.

## Hosting

Pages source: **GitHub Actions**. Custom domain: **rallymetrica.com**. Enforce HTTPS when the certificate is ready. Squarespace DNS should point the apex to GitHub Pages and `www` to `trokictech.github.io`.

Asset origins are recorded in ASSETS.md. The supplied Tailwind Plus license is retained in LICENSE.md. The website is an end product; this repository is not a reusable template or component library.
