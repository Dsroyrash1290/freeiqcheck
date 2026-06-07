import type { Question, QuizQuestion } from '../data/questions/types';

/** Fisher–Yates shuffle (in-place copy). */
export function shuffleArray<T>(array: T[], random: () => number = Math.random): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Randomize answer order; returns new correctIndex for shuffled options. */
export function shuffleQuestionOptions(question: Question, random: () => number = Math.random): QuizQuestion {
  const order = shuffleArray(question.options.map((_, i) => i), random);
  const shuffledOptions = order.map((i) => question.options[i]);
  const shuffledCorrectIndex = order.indexOf(question.correctIndex);
  return {
    ...question,
    options: shuffledOptions,
    correctIndex: shuffledCorrectIndex,
  };
}

export function prepareQuizQuestions(questions: Question[], random: () => number = Math.random): QuizQuestion[] {
  return questions.map((q) => shuffleQuestionOptions(q, random));
}
