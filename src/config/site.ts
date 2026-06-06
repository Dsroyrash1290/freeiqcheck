export const site = {
  name: 'FreeIQCheck',
  domain: 'www.freeiqcheck.com',
  url: 'https://www.freeiqcheck.com',
  tagline: 'Free IQ test online with instant results — no email required',
  email: 'hello@freeiqcheck.com',
  primaryKeyword: 'free iq test',
  gaMeasurementId: 'G-T70SBQKFG6',
  ogImage: '/og-image.svg',
  keywords: [
    'free iq test',
    'free iq test online',
    'free iq test with results',
    'free iq test with instant results',
    'free iq test and results',
    'best free iq test',
    'free iq tests',
    'free iq test with free results',
    'free iq test with instant results no email',
    'online iq test',
    'free iq check',
    'logical reasoning test',
    'brain test online',
  ],
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/test', label: 'Take Quiz' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const seoNavLinks = [
  { href: '/test', label: 'Free IQ test' },
  { href: '/what-is-iq', label: 'What is IQ?' },
  { href: '/how-iq-tests-work', label: 'How IQ tests work' },
  { href: '/iq-score-chart', label: 'IQ score chart' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
] as const;
