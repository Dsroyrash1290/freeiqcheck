/** Central hub for educational guide pages — used in nav, footer, and internal linking. */
export type GuidePage = {
  path: string;
  label: string;
  shortLabel?: string;
  description: string;
};

export const guidePages: GuidePage[] = [
  {
    path: '/what-is-iq',
    label: 'What is IQ?',
    description: 'Definitions, what tests measure, and what scores do not tell you.',
  },
  {
    path: '/how-iq-tests-work',
    label: 'How IQ tests work',
    description: 'Standardization, scoring pipelines, and professional vs. online formats.',
  },
  {
    path: '/iq-score-chart',
    label: 'IQ score chart',
    description: 'Ranges, percentiles, and how to read score bands responsibly.',
  },
  {
    path: '/iq-percentile-calculator',
    label: 'IQ percentile calculator',
    description: 'Convert any IQ score to an estimated percentile band.',
  },
  {
    path: '/are-online-iq-tests-accurate',
    label: 'Are online IQ tests accurate?',
    description: 'Validity signals, common pitfalls, and realistic expectations.',
  },
  {
    path: '/average-iq-by-age',
    label: 'Average IQ by age',
    description: 'How cognitive performance shifts across the lifespan.',
  },
  {
    path: '/can-you-improve-your-iq',
    label: 'Can you improve your IQ?',
    description: 'Evidence on training, lifestyle, and skill growth.',
  },
  {
    path: '/practice-iq-questions',
    label: 'Practice IQ questions',
    description: 'Sample puzzles with explanations before the full quiz.',
  },
  {
    path: '/mensa-iq-test-guide',
    label: 'Mensa IQ test guide',
    description: 'High-IQ societies, qualifying scores, and what membership means.',
  },
  {
    path: '/iq-vs-eq',
    label: 'IQ vs EQ',
    description: 'Cognitive ability compared with emotional and social intelligence.',
  },
  {
    path: '/methodology',
    label: 'Our methodology',
    description: 'How FreeIQCheck builds and scores its educational practice quiz.',
  },
];

export function getRelatedGuides(currentPath: string, limit = 5): GuidePage[] {
  const others = guidePages.filter((g) => g.path !== currentPath);
  const start = others.findIndex((g) => g.path > currentPath);
  const rotated = start > 0 ? [...others.slice(start), ...others.slice(0, start)] : others;
  return rotated.slice(0, limit);
}
