# Oct 9, 2026 — content update (unzip over the repo's website/ folder)

## Second pass (the same day)
- **Hero:** one upright phone (the live court) beside the RM mark at 176px — the second phone, the orbit rings, the floating badge and the footer strip are gone. The copy is unchanged.
- **Logo.tsx (new, replaces the template's):** the RM mark at 36px with RALLY·METRICA — the Header and the Footer pick it up unchanged.
- **public/mark.svg** (the monogram) and **public/wordmark.svg** (the lockup) copied from the design repo.
- **public/screens/home.png** re-rendered — the earlier file was an empty frame (the capture missed the Home screen).


Changed: src/lib/site.ts (plans, support email, Pricing nav) · src/components/Pricing.tsx (new) · src/app/(main)/page.tsx (Pricing after Patterns) · Hero · PrimaryFeatures (Record · Analyze · Improve, aggression) · CoachFeatures (Coach link, background delivery, notifications, roster/home shots) · Faqs (beta, pricing, aggression, Coach link, backup) · Footer (Trokic Tech LLC, help@, Privacy, Terms) · src/app/layout.tsx (title, description) · src/lib/guides.ts (Coach link, report pages, Stats subject, delivery note) · src/app/(main)/features/page.tsx (02 · 04 · 05) · public/screens/ (six current renders — home · players · stats · momentum · aggression · live; see ASSETS.md).

Still to add before launch: /privacy and /terms pages (the Footer links them; App Review needs both URLs), and the App Store URL in site.ts when the listing is live.

Build: npm run build → python ../package-site.py out → commit site.zip and index.html.
