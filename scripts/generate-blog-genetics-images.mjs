import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.join('public', 'blog');
await mkdir(outDir, { recursive: true });

const heroSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eef4ff"/>
      <stop offset="100%" stop-color="#f5f3ff"/>
    </linearGradient>
    <linearGradient id="brain" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#1d3fd6"/>
      <stop offset="100%" stop-color="#5a92ff"/>
    </linearGradient>
    <linearGradient id="dna" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M180 180 Q210 140 240 180 T300 180 Q330 220 360 180 T420 180" fill="none" stroke="url(#dna)" stroke-width="8" stroke-linecap="round"/>
  <path d="M180 200 Q210 240 240 200 T300 200 Q330 160 360 200 T420 200" fill="none" stroke="url(#dna)" stroke-width="8" stroke-linecap="round"/>
  <line x1="210" y1="160" x2="210" y2="220" stroke="#7c3aed" stroke-width="3" opacity="0.5"/>
  <line x1="270" y1="160" x2="270" y2="220" stroke="#7c3aed" stroke-width="3" opacity="0.5"/>
  <line x1="330" y1="160" x2="330" y2="220" stroke="#7c3aed" stroke-width="3" opacity="0.5"/>
  <line x1="390" y1="160" x2="390" y2="220" stroke="#7c3aed" stroke-width="3" opacity="0.5"/>
  <ellipse cx="560" cy="310" rx="130" ry="100" fill="url(#brain)" opacity="0.95"/>
  <path d="M505 320 Q560 265 615 320" fill="none" stroke="#bcd4ff" stroke-width="5"/>
  <rect x="820" y="380" width="260" height="64" rx="16" fill="#2550ea" opacity="0.1" stroke="#2550ea" stroke-width="2"/>
  <text x="950" y="410" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#2550ea">Genetics 50-80%</text>
  <text x="950" y="432" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#1e35ad">Inherited influence</text>
  <rect x="820" y="470" width="260" height="64" rx="16" fill="#10b981" opacity="0.1" stroke="#10b981" stroke-width="2"/>
  <text x="950" y="500" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#059669">Environment 20-50%</text>
  <text x="950" y="522" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#047857">Education, nutrition, sleep</text>
  <text x="600" y="580" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#1e35ad">Is Intelligence Genetic?</text>
  <text x="600" y="610" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#64748b">DNA, brain development, and environment shape IQ</text>
</svg>`;

const chartSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img">
  <defs>
    <linearGradient id="geneticsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1d3fd6"/>
      <stop offset="100%" stop-color="#5a92ff"/>
    </linearGradient>
    <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" rx="24" fill="#f8fafc"/>
  <text x="600" y="70" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" font-weight="700" fill="#0f172a">Genetics vs Environment Influence on Intelligence</text>
  <text x="600" y="110" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#64748b">Estimated contribution ranges from behavioral genetics research</text>
  <text x="120" y="220" font-family="Arial,sans-serif" font-size="22" font-weight="600" fill="#1e35ad">Genetics</text>
  <rect x="120" y="240" width="780" height="64" rx="14" fill="#e2e8f0"/>
  <rect x="120" y="240" width="624" height="64" rx="14" fill="url(#geneticsGrad)"/>
  <text x="940" y="280" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#1d3fd6">50-80%</text>
  <text x="120" y="340" font-family="Arial,sans-serif" font-size="16" fill="#64748b">DNA variants, inherited cognitive potential, gene-environment interplay</text>
  <text x="120" y="420" font-family="Arial,sans-serif" font-size="22" font-weight="600" fill="#047857">Environment</text>
  <rect x="120" y="440" width="780" height="64" rx="14" fill="#e2e8f0"/>
  <rect x="120" y="440" width="312" height="64" rx="14" fill="url(#envGrad)"/>
  <text x="940" y="480" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#059669">20-50%</text>
  <text x="120" y="540" font-family="Arial,sans-serif" font-size="16" fill="#64748b">Education, nutrition, sleep, stress, family, culture, and opportunity</text>
  <rect x="180" y="565" width="840" height="44" rx="10" fill="#fef9c3" stroke="#facc15" stroke-width="1"/>
  <text x="600" y="594" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#854d0e">Ranges vary by age, population, and measurement method.</text>
</svg>`;

const diagramSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img">
  <defs>
    <linearGradient id="brainGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#1d3fd6"/>
      <stop offset="100%" stop-color="#5a92ff"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" rx="24" fill="#f8fafc"/>
  <text x="600" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#0f172a">How Genes, Brain, and Environment Interact</text>
  <polygon points="600,120 980,500 220,500" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="8 6"/>
  <line x1="600" y1="120" x2="600" y2="310" stroke="#2550ea" stroke-width="2" opacity="0.35"/>
  <line x1="220" y1="500" x2="600" y2="310" stroke="#10b981" stroke-width="2" opacity="0.35"/>
  <line x1="980" y1="500" x2="600" y2="310" stroke="#10b981" stroke-width="2" opacity="0.35"/>
  <circle cx="600" cy="120" r="70" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" stroke-width="2"/>
  <text x="600" y="115" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="700" fill="#6d28d9">Genes</text>
  <text x="600" y="140" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#7c3aed">DNA and inheritance</text>
  <ellipse cx="600" cy="310" rx="100" ry="78" fill="url(#brainGrad)"/>
  <text x="600" y="305" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="700" fill="#ffffff">Brain</text>
  <text x="600" y="330" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#dbeafe">Development</text>
  <rect x="120" y="460" width="160" height="52" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="493" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#047857">Education</text>
  <rect x="320" y="520" width="160" height="52" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="400" y="553" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#047857">Nutrition</text>
  <rect x="720" y="520" width="160" height="52" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="800" y="553" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#047857">Sleep</text>
  <rect x="920" y="460" width="160" height="52" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="1000" y="493" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#047857">Stress</text>
  <text x="600" y="610" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#64748b">Intelligence emerges from the interaction of all factors.</text>
</svg>`;

const assets = [
  { name: 'iq-genetics-hero.webp', svg: heroSvg, width: 1200, height: 630 },
  { name: 'genetics-vs-environment-chart.webp', svg: chartSvg, width: 1200, height: 630 },
  { name: 'brain-development-diagram.webp', svg: diagramSvg, width: 1200, height: 630 },
];

for (const asset of assets) {
  const svgPath = path.join(outDir, asset.name.replace('.webp', '.svg'));
  await writeFile(svgPath, asset.svg, 'utf8');
  await sharp(Buffer.from(asset.svg))
    .resize(asset.width, asset.height)
    .webp({ quality: 90 })
    .toFile(path.join(outDir, asset.name));
  console.log(`Created ${asset.name}`);
}
