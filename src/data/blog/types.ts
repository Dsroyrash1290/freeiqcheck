import type { FaqItem } from '../faq';

export type BlogGraphicId =
  | 'brain-development-timeline'
  | 'cognitive-factors'
  | 'myth-vs-fact'
  | 'development-flow'
  | 'cognitive-change-chart';

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
  list?: { title: string; text: string }[];
  graphic?: BlogGraphicId;
};

export type BlogReference = {
  title: string;
  url: string;
  source?: string;
};

export type BlogRelatedLink = {
  title: string;
  href: string;
  description: string;
};

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'pullQuote'; text: string; attribution?: string }
  | { type: 'scienceFact'; title: string; text: string }
  | { type: 'didYouKnow'; text: string }
  | { type: 'mythReality'; myth: string; reality: string }
  | { type: 'statistics'; stats: { value: string; label: string }[] }
  | { type: 'highlight'; title: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string; width: number; height: number }
  | { type: 'separator' }
  | { type: 'inlineCta'; title: string; text: string; href?: string; buttonLabel?: string };

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  author?: string;
  authorProfile?: BlogAuthor;
  format?: 'classic' | 'rich';
  featuredImage?: string;
  sections: BlogSection[];
  blocks?: BlogContentBlock[];
  faq: FaqItem[];
  relatedSlugs: string[];
  relatedLinks?: BlogRelatedLink[];
  references?: BlogReference[];
  showToc?: boolean;
};
