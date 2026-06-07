import { questions } from './questions';

/** Curated sample items for the practice page — not the full quiz bank. */
export const practiceQuestions = questions.filter((q) => [1, 3, 4, 9, 12, 14].includes(q.id));
