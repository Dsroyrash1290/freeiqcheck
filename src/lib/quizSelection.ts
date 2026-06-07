import type { Difficulty, Question, QuizQuestion } from '../data/questions/types';
import { QUIZ_DIFFICULTY_COUNTS, QUESTION_COUNT } from '../data/questions/types';
import { prepareQuizQuestions, shuffleArray } from './quizShuffle';

export type QuizSelectionConfig = typeof QUIZ_DIFFICULTY_COUNTS;

/** Pick N random questions per difficulty from the bank, then shuffle presentation order. */
export function selectQuizQuestions(
  bank: Question[],
  config: QuizSelectionConfig = QUIZ_DIFFICULTY_COUNTS,
  random: () => number = Math.random,
): QuizQuestion[] {
  const pick = (difficulty: Difficulty, count: number): Question[] => {
    const pool = bank.filter((q) => q.difficulty === difficulty);
    if (pool.length < count) {
      throw new Error(`Not enough ${difficulty} questions in bank (need ${count}, have ${pool.length})`);
    }
    return shuffleArray(pool, random).slice(0, count);
  };

  const selected: Question[] = [
    ...pick('easy', config.easy),
    ...pick('medium', config.medium),
    ...pick('hard', config.hard),
  ];

  if (selected.length !== QUESTION_COUNT) {
    throw new Error(`Expected ${QUESTION_COUNT} questions, got ${selected.length}`);
  }

  const ordered = shuffleArray(selected, random);
  return prepareQuizQuestions(ordered, random);
}

export function countBankByDifficulty(bank: Question[]): Record<Difficulty, number> {
  return {
    easy: bank.filter((q) => q.difficulty === 'easy').length,
    medium: bank.filter((q) => q.difficulty === 'medium').length,
    hard: bank.filter((q) => q.difficulty === 'hard').length,
  };
}
