import { questionBank } from './questions';

/** Curated sample items for the practice page — not the full quiz bank. */
export const practiceQuestions = questionBank.filter((q) => [1, 3, 4, 36, 39, 42].includes(q.id));
