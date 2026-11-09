rallymetrica.com — the site folder at main (edabe4f) + two changes (Nov 9, 2026)

WHAT CHANGED HERE
1. Keep on roster · students: src/lib/guides.ts (Your first match › Choose the players; Run your roster › Keep the roster yours + a note), src/components/Faqs.tsx (one FAQ), src/components/CoachFeatures.tsx (caption), src/lib/screens.ts (five light twins registered), CHANGES.md.
2. Cloudflare Web Analytics: src/app/layout.tsx — line 7, CF_BEACON_TOKEN = 'PASTE_TOKEN_HERE'.

THE CLOUDFLARE STEPS
a. dash.cloudflare.com/sign-up → developer@trokic.tech → verify the email. Free plan, no card. Skip "Add a domain".
b. Left sidebar → Analytics & Logs → Web Analytics → Add a site → hostname rallymetrica.com → Done.
c. The page shows a <script … data-cf-beacon='{"token": "…"}'> snippet. Copy ONLY the token string between the quotes.
d. Open src/app/layout.tsx, line 7: replace PASTE_TOKEN_HERE with the token. Save.

BUILD AND PUSH
e. FIRST, in the rally repo: cd app · node scripts/pictures/site-screens.mjs --all — this copies the 1.3 captures (the five roster pages the guides now show — players-folded, players-hidden, form-roster, form-roster-student, setup-picker — and their light twins) into this folder's public/screens. Without it the two new guide steps show a missing picture.
f. In this folder: npm install (first time only) · npm run build
g. git add -A · git commit -m "Site: roster guides, Cloudflare analytics, 1.3 pictures" · git push
h. When Pages has deployed, open rallymetrica.com once; the Cloudflare dashboard shows the visit within a minute.

This folder replaces the repo's website/ folder whole (public/screens included — 150 files from main).
