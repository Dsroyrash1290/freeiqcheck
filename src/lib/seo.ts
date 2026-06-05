import type { FaqItem } from '../data/faq';
import { site } from '../config/site';

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.tagline,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.tagline,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}/faq?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function webPageJsonLd(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${site.url}${path}`,
    isPartOf: { '@type': 'WebSite', url: site.url, name: site.name },
  };
}

export function quizJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'FreeIQCheck Logical Reasoning Quiz',
    description:
      'A free iq test online with 25 multiple-choice reasoning questions and instant illustrative results. Educational use only.',
    url: `${site.url}/test`,
    educationalLevel: 'General',
    isAccessibleForFree: true,
  };
}
