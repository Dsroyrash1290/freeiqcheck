/** Re-exports the question bank module for backward-compatible imports. */
export {
  questionBank,
  questions,
  QUESTION_COUNT,
  QUIZ_DIFFICULTY_COUNTS,
  categoryLabels,
  questionVisuals,
  getVisualHtml,
} from './questions/index';
export type { Question, QuizQuestion, QuestionCategory, Difficulty } from './questions/types';
