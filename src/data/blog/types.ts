import type { FaqItem } from '../faq';

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
  list?: { title: string; text: string }[];
};

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  sections: BlogSection[];
  faq: FaqItem[];
  relatedSlugs: string[];
};
