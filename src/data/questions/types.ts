export type QuestionCategory =
  | 'pattern'
  | 'sequence'
  | 'logic'
  | 'spatial'
  | 'deduction'
  | 'numerical'
  | 'analogy'
  | 'memory'
  | 'visual';

export type Difficulty = 'easy' | 'medium' | 'hard';

/** Base question in the master bank — options in canonical order. */
export type Question = {
  id: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
  category: QuestionCategory;
  /** Key into visuals map for image-based items */
  visualId?: string;
};

/** Question as presented in an active quiz (shuffled options). */
export type QuizQuestion = Question & {
  options: string[];
  correctIndex: number;
};

export const QUESTION_COUNT = 25;

export const QUIZ_DIFFICULTY_COUNTS = {
  easy: 8,
  medium: 9,
  hard: 8,
} as const;
