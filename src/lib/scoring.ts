/** @deprecated Use quizScoring.ts — re-exports for compatibility */
export {
  computeQuizResult,
  formatDuration,
  normalizeStoredResult,
  ratioToIllustrativeIQ,
  iqToPercentile,
  STORAGE_KEY,
} from './quizScoring';

export type { QuizResult, ScoreBand, Badge } from './quizScoring';
