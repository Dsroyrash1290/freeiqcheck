// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://www.freeiqcheck.com';

/** Pages excluded from sitemap (noindex or session-only). */
function shouldIncludePage(url) {
  return !url.pathname.includes('/results');
}

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => shouldIncludePage(new URL(page, site)),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname === '/' || url.pathname === '') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (url.pathname === '/test' || url.pathname === '/test/') {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        if (url.pathname.startsWith('/free-iq-test') || url.pathname.startsWith('/best-free-iq-test')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        if (url.pathname === '/iq-percentile-calculator' || url.pathname === '/iq-percentile-calculator/') {
          return { ...item, priority: 0.85, changefreq: 'monthly' };
        }
        const learnPaths = [
          '/what-is-iq',
          '/average-iq-by-age',
          '/iq-score-chart',
          '/iq-percentile-calculator',
          '/how-iq-tests-work',
          '/are-online-iq-tests-accurate',
          '/can-you-improve-your-iq',
          '/mensa-iq-test-guide',
          '/practice-iq-questions',
          '/iq-vs-eq',
          '/methodology',
        ];
        if (learnPaths.some((p) => url.pathname === p || url.pathname === `${p}/`)) {
          return { ...item, priority: 0.75, changefreq: 'monthly' };
        }
        if (url.pathname === '/blog' || url.pathname === '/blog/') {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        if (url.pathname.startsWith('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        if (url.pathname.startsWith('/brain-games')) {
          return { ...item, priority: 0.85, changefreq: 'weekly' };
        }
        const legalPaths = ['/privacy-policy', '/terms', '/disclaimer'];
        if (legalPaths.some((p) => url.pathname === p || url.pathname === `${p}/`)) {
          return { ...item, priority: 0.5, changefreq: 'yearly' };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
