export type BrainLabTestId = 'memory' | 'pattern' | 'wordRecall';

export type BrainLabTestStats = {
  bestScore: number;
  lastScore: number;
  bestStreak: number;
  lastPlayed: string | null;
  attempts: number;
};

export type BrainLabScores = Record<BrainLabTestId, BrainLabTestStats>;

const STORAGE_KEY = 'freeiqcheck-brain-lab-scores';

const defaultStats = (): BrainLabTestStats => ({
  bestScore: 0,
  lastScore: 0,
  bestStreak: 0,
  lastPlayed: null,
  attempts: 0,
});

export const defaultBrainLabScores = (): BrainLabScores => ({
  memory: defaultStats(),
  pattern: defaultStats(),
  wordRecall: defaultStats(),
});

export function loadBrainLabScores(): BrainLabScores {
  if (typeof window === 'undefined') return defaultBrainLabScores();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultBrainLabScores();
    const parsed = JSON.parse(raw) as Partial<BrainLabScores>;
    return {
      memory: { ...defaultStats(), ...parsed.memory },
      pattern: { ...defaultStats(), ...parsed.pattern },
      wordRecall: { ...defaultStats(), ...parsed.wordRecall },
    };
  } catch {
    return defaultBrainLabScores();
  }
}

export function saveBrainLabResult(
  testId: BrainLabTestId,
  score: number,
  streak: number,
): BrainLabScores {
  const scores = loadBrainLabScores();
  const current = scores[testId];
  scores[testId] = {
    bestScore: Math.max(current.bestScore, score),
    lastScore: score,
    bestStreak: Math.max(current.bestStreak, streak),
    lastPlayed: new Date().toISOString(),
    attempts: current.attempts + 1,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  return scores;
}

export function formatBrainLabDate(iso: string | null): string {
  if (!iso) return 'Never played';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
