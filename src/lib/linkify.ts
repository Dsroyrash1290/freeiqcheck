/** Convert [label](href) markdown-style links to anchor tags. */
export function linkify(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="font-semibold text-brand-600 hover:underline dark:text-brand-400">$1</a>',
  );
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
