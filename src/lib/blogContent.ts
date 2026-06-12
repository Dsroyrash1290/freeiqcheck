import type { BlogContentBlock } from '../data/blog/types';

/** Parse YYYY-MM-DD as a local calendar date (avoids UTC off-by-one in US timezones). */
export function parseBlogDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatBlogDate(
  isoDate: string,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
): string {
  return parseBlogDate(isoDate).toLocaleDateString('en-US', options);
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function getTocHeadings(blocks: BlogContentBlock[]) {
  return blocks
    .filter((b): b is Extract<BlogContentBlock, { type: 'heading' }> => b.type === 'heading' && b.level === 2)
    .map((b) => ({ id: b.id, text: b.text }));
}

export function estimateReadTime(blocks: BlogContentBlock[]): string {
  const text = blocks
    .map((b) => {
      switch (b.type) {
        case 'paragraph':
        case 'pullQuote':
          return b.text;
        case 'heading':
          return b.text;
        case 'list':
          return b.items.join(' ');
        case 'scienceFact':
        case 'highlight':
        case 'didYouKnow':
          return `${b.title ?? ''} ${'text' in b ? b.text : ''}`;
        case 'mythReality':
          return `${b.myth} ${b.reality}`;
        case 'statistics':
          return b.stats.map((s) => `${s.value} ${s.label}`).join(' ');
        case 'inlineCta':
          return `${b.title} ${b.text}`;
        default:
          return '';
      }
    })
    .join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}
