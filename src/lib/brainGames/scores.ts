export type BrainGamesTestId = 'memory' | 'pattern' | 'wordRecall';

export type BrainGamesTestStats = {
  bestScore: number;
  lastScore: number;
  bestStreak: number;
  lastPlayed: string | null;
  attempts: number;
};

export type BrainGamesScores = Record<BrainGamesTestId, BrainGamesTestStats>;

const STORAGE_KEY = 'freeiqcheck-brain-games-scores';
const LEGACY_STORAGE_KEY = 'freeiqcheck-brain-lab-scores';

const defaultStats = (): BrainGamesTestStats => ({
  bestScore: 0,
  lastScore: 0,
  bestStreak: 0,
  lastPlayed: null,
  attempts: 0,
});

export const defaultBrainGamesScores = (): BrainGamesScores => ({
  memory: defaultStats(),
  pattern: defaultStats(),
  wordRecall: defaultStats(),
});

function parseStoredScores(raw: string): BrainGamesScores {
  const parsed = JSON.parse(raw) as Partial<BrainGamesScores>;
  return {
    memory: { ...defaultStats(), ...parsed.memory },
    pattern: { ...defaultStats(), ...parsed.pattern },
    wordRecall: { ...defaultStats(), ...parsed.wordRecall },
  };
}

export function loadBrainGamesScores(): BrainGamesScores {
  if (typeof window === 'undefined') return defaultBrainGamesScores();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return parseStoredScores(raw);

    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      const migrated = parseStoredScores(legacy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }

    return defaultBrainGamesScores();
  } catch {
    return defaultBrainGamesScores();
  }
}

export function saveBrainGamesResult(
  testId: BrainGamesTestId,
  score: number,
  streak: number,
): BrainGamesScores {
  const scores = loadBrainGamesScores();
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

export function formatBrainGamesDate(iso: string | null): string {
  if (!iso) return 'Never played';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/** @deprecated Use loadBrainGamesScores */
export const loadBrainLabScores = loadBrainGamesScores;

/** @deprecated Use saveBrainGamesResult */
export const saveBrainLabResult = saveBrainGamesResult;

/** @deprecated Use formatBrainGamesDate */
export const formatBrainLabDate = formatBrainGamesDate;
