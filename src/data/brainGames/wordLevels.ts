const wordPool = [
  'cloud', 'river', 'planet', 'cipher', 'logic', 'memory', 'signal', 'vector',
  'crystal', 'orbit', 'fusion', 'neuron', 'quantum', 'spectrum', 'theorem',
  'puzzle', 'matrix', 'anchor', 'compass', 'horizon', 'vertex', 'prism',
  'echo', 'lattice', 'module', 'syntax', 'binary', 'focus', 'spark', 'pulse',
  'bridge', 'canvas', 'engine', 'factor', 'garden', 'harbor', 'island',
  'journey', 'kernel', 'ledger', 'mirror', 'network', 'object', 'portal',
];

export type WordLevel = {
  level: number;
  wordCount: number;
  showMs: number;
  distractorCount: number;
  basePoints: number;
};

export const wordLevels: WordLevel[] = [
  { level: 1, wordCount: 8, showMs: 5000, distractorCount: 4, basePoints: 80 },
  { level: 2, wordCount: 9, showMs: 4800, distractorCount: 5, basePoints: 90 },
  { level: 3, wordCount: 9, showMs: 4500, distractorCount: 5, basePoints: 100 },
  { level: 4, wordCount: 10, showMs: 4500, distractorCount: 6, basePoints: 110 },
  { level: 5, wordCount: 10, showMs: 4200, distractorCount: 6, basePoints: 120 },
  { level: 6, wordCount: 11, showMs: 4000, distractorCount: 7, basePoints: 130 },
  { level: 7, wordCount: 12, showMs: 4000, distractorCount: 7, basePoints: 150 },
  { level: 8, wordCount: 13, showMs: 3800, distractorCount: 8, basePoints: 170 },
  { level: 9, wordCount: 14, showMs: 3600, distractorCount: 8, basePoints: 190 },
  { level: 10, wordCount: 15, showMs: 3500, distractorCount: 9, basePoints: 220 },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateWordRound(level: WordLevel): { targetWords: string[]; options: string[] } {
  const targets = shuffle(wordPool).slice(0, level.wordCount);
  const distractors = shuffle(wordPool.filter((w) => !targets.includes(w))).slice(0, level.distractorCount);
  const options = shuffle([...targets, ...distractors]);
  return { targetWords: targets, options };
}
