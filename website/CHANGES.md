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
