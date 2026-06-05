/**
 * Ensures https://www.freeiqcheck.com/sitemap.xml exists after Astro build.
 * @astrojs/sitemap emits sitemap-index.xml + sitemap-0.xml; Google accepts both.
 * Cloudflare Pages serves static files from dist/ — we copy the primary chunk to sitemap.xml.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'dist');
const target = path.join(dist, 'sitemap.xml');
const chunk0 = path.join(dist, 'sitemap-0.xml');
const index = path.join(dist, 'sitemap-index.xml');

if (!fs.existsSync(dist)) {
  console.error('ensure-sitemap: dist/ not found — run astro build first');
  process.exit(1);
}

if (fs.existsSync(chunk0)) {
  fs.copyFileSync(chunk0, target);
  console.log('ensure-sitemap: wrote dist/sitemap.xml from sitemap-0.xml');
} else if (fs.existsSync(index)) {
  fs.copyFileSync(index, target);
  console.log('ensure-sitemap: wrote dist/sitemap.xml from sitemap-index.xml');
} else {
  console.error('ensure-sitemap: no sitemap-0.xml or sitemap-index.xml in dist/');
  process.exit(1);
}
