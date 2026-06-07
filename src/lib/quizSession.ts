import type { QuizQuestion } from '../data/questions/types';

export const QUIZ_SESSION_KEY = 'freeiqcheck-quiz-session';
export const STORAGE_KEY = 'freeiqcheck-result';

export type QuizSession = {
  questions: QuizQuestion[];
  answers: number[];
  index: number;
  seconds: number;
  startedAt: string;
};

export function createSession(questions: QuizQuestion[]): QuizSession {
  return {
    questions,
    answers: new Array(questions.length).fill(-1),
    index: 0,
    seconds: 0,
    startedAt: new Date().toISOString(),
  };
}

export function loadSession(): QuizSession | null {
  try {
    const raw = sessionStorage.getItem(QUIZ_SESSION_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as QuizSession;
    if (!data?.questions?.length || !Array.isArray(data.answers)) return null;
    return data;
  } catch {
    return null;
  }
}

export function saveSession(session: QuizSession): void {
  sessionStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  sessionStorage.removeItem(QUIZ_SESSION_KEY);
}

export function clearResult(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function clearQuizState(): void {
  clearSession();
  clearResult();
}
