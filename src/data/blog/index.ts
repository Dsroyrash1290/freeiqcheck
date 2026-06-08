import type { BlogPost } from './types';
import { canYouIncreaseYourIq } from './can-you-increase-your-iq';
import { freeIqTestsAccurate } from './free-iq-tests-accurate';
import { goodIqScore } from './good-iq-score';
import { improveIq } from './improve-iq';
import { iqVsEq } from './iq-vs-eq';
import { top10Questions } from './top-10-questions';

export type {
  BlogPost,
  BlogSection,
  BlogContentBlock,
  BlogReference,
  BlogRelatedLink,
} from './types';

export const blogPosts: BlogPost[] = [
  canYouIncreaseYourIq,
  goodIqScore,
  freeIqTestsAccurate,
  improveIq,
  top10Questions,
  iqVsEq,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
}
