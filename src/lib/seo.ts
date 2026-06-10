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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
}) {
  const imageUrl = post.image ? new URL(post.image, site.url).href : `${site.url}${site.ogImage}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${site.url}${post.path}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author ?? site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: { '@type': 'ImageObject', url: `${site.url}/favicon.svg` },
    },
    image: imageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.url}${post.path}`,
    },
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
}) {
  return articleJsonLd(post);
}

export function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    description: 'Educational articles about IQ tests, cognitive skills, and logical reasoning.',
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
