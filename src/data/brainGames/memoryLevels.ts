export type MemoryLevel = {
  level: number;
  digitCount: number;
  showMs: number;
  basePoints: number;
};

/** 10 levels — longer sequences, shorter display time, higher points. */
export const memoryLevels: MemoryLevel[] = [
  { level: 1, digitCount: 3, showMs: 3500, basePoints: 100 },
  { level: 2, digitCount: 4, showMs: 3300, basePoints: 120 },
  { level: 3, digitCount: 4, showMs: 3000, basePoints: 140 },
  { level: 4, digitCount: 5, showMs: 3000, basePoints: 160 },
  { level: 5, digitCount: 5, showMs: 2800, basePoints: 180 },
  { level: 6, digitCount: 6, showMs: 2800, basePoints: 200 },
  { level: 7, digitCount: 6, showMs: 2600, basePoints: 220 },
  { level: 8, digitCount: 7, showMs: 2600, basePoints: 250 },
  { level: 9, digitCount: 7, showMs: 2400, basePoints: 280 },
  { level: 10, digitCount: 8, showMs: 2400, basePoints: 320 },
];

export function generateSequence(length: number): string {
  let seq = '';
  for (let i = 0; i < length; i++) {
    seq += Math.floor(Math.random() * 10).toString();
  }
  return seq;
}
