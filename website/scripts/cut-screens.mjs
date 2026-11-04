/* Rallymetrica website — cut the site's phone pictures from the app's captures. Run from the website repo's website/ folder:
     node scripts/cut-screens.mjs ../../rally/app/docs/captures          (the path to the app repo's app/docs/captures)
   For every <name>.png the site serves under public/screens that has a 1206 × 2622 capture of the same name (or its alias below) in that folder,
   dark and -light alike: the WHOLE capture scaled to 804 wide → 804 × 1748 — the status bar kept, as the store pages keep it (Nov 4, 2026:
   the Oct 18 cut took 124 off the top and the header sat flush against the bezel). Writes only what changed (bytes compared), prints each file.
   Needs sharp (the repo's devDependency). Nothing under public/screens that has no capture is touched (the paper pages, the replay still, the sprite). */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node scripts/cut-screens.mjs <path to app/docs/captures>'); process.exit(1); }
const OUT = join(process.cwd(), 'public', 'screens');
const W = 804, H = 1748;                                   /* 1206 × 2622 at 804 wide, nothing cropped */
const ALIAS = { landings: 'placement-court-depth', stats: 'forecast', 'forecast-card': 'home' };   /* site names that are copies of another capture */
const exists = p => stat(p).then(() => true, () => false);

let written = 0, same = 0, skipped = [];
for (const file of (await readdir(OUT)).filter(f => f.endsWith('.png')).sort()) {
  const name = basename(file, '.png'), light = name.endsWith('-light'), base = light ? name.slice(0, -6) : name;
  const srcName = (ALIAS[base] || base) + (light ? '-light' : '');
  const src = join(SRC, srcName + '.png');
  if (!(await exists(src))) { skipped.push(name); continue; }
  const meta = await sharp(src).metadata();
  if (meta.width !== 1206) { skipped.push(`${name} (capture ${meta.width} wide)`); continue; }
  const png = await sharp(src).resize(W, H, { fit: 'fill', kernel: 'lanczos3' }).removeAlpha().png({ compressionLevel: 9, adaptiveFiltering: false }).toBuffer();
  const out = join(OUT, file), before = await readFile(out).catch(() => null);
  if (before && before.equals(png)) { same++; continue; }
  await writeFile(out, png); written++; console.log(`✓ ${file}  ${W} × ${H}  ← ${srcName}.png`);
}
console.log(`\n${written} written · ${same} unchanged · ${skipped.length} without a capture: ${skipped.join(', ')}`);
