export const site = {
  name: 'FreeIQCheck',
  domain: 'freeiqcheck.com',
  url: 'https://freeiqcheck.com',
  tagline: 'Free online IQ-style reasoning quiz with instant results',
  email: 'hello@freeiqcheck.com',
  primaryKeyword: 'free iq test',
  keywords: [
    'free iq test',
    'online iq test',
    'free iq check',
    'iq checker',
    'instant iq test',
    'quick iq test',
    'iq score test',
    'brain test online',
    'logical reasoning test',
  ],
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/test', label: 'Take Quiz' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
