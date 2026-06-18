export type MatrixCell = {
  shape: 'circle' | 'square' | 'triangle' | 'diamond';
  color: 'brand' | 'emerald' | 'violet' | 'rose';
};

export type PatternQuestion = {
  id: string;
  difficulty: number;
  type: 'number' | 'matrix';
  prompt: string;
  /** Number sequence with ? for missing term */
  sequence?: string;
  matrix?: (MatrixCell | null)[];
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const patternQuestions: PatternQuestion[] = [
  {
    id: 'n1',
    difficulty: 1,
    type: 'number',
    prompt: 'What number completes the sequence?',
    sequence: '2, 4, 6, 8, ?',
    options: ['9', '10', '12', '14'],
    correctIndex: 1,
    explanation: 'Each term increases by 2 (even numbers).',
  },
  {
    id: 'n2',
    difficulty: 1,
    type: 'number',
    prompt: 'Find the missing number.',
    sequence: '1, 3, 5, 7, ?',
    options: ['8', '9', '10', '11'],
    correctIndex: 1,
    explanation: 'Odd numbers increasing by 2.',
  },
  {
    id: 'm1',
    difficulty: 2,
    type: 'matrix',
    prompt: 'Which shape completes the pattern?',
    matrix: [
      { shape: 'circle', color: 'brand' },
      { shape: 'square', color: 'emerald' },
      { shape: 'triangle', color: 'violet' },
      { shape: 'square', color: 'emerald' },
      null,
      { shape: 'circle', color: 'brand' },
      { shape: 'triangle', color: 'violet' },
      { shape: 'circle', color: 'brand' },
      { shape: 'square', color: 'emerald' },
    ],
    options: ['Green square', 'Blue circle', 'Purple triangle', 'Pink diamond'],
    correctIndex: 0,
    explanation: 'Each row contains circle, square, and triangle once.',
  },
  {
    id: 'n3',
    difficulty: 2,
    type: 'number',
    prompt: 'What comes next?',
    sequence: '3, 6, 12, 24, ?',
    options: ['30', '36', '48', '72'],
    correctIndex: 2,
    explanation: 'Each term doubles.',
  },
  {
    id: 'n4',
    difficulty: 3,
    type: 'number',
    prompt: 'Find the missing number.',
    sequence: '2, 3, 5, 8, 12, ?',
    options: ['15', '16', '17', '18'],
    correctIndex: 2,
    explanation: 'Differences increase by 1: +1, +2, +3, +4, +5 → 17.',
  },
  {
    id: 'm2',
    difficulty: 3,
    type: 'matrix',
    prompt: 'Select the missing cell.',
    matrix: [
      { shape: 'circle', color: 'brand' },
      { shape: 'circle', color: 'emerald' },
      { shape: 'circle', color: 'violet' },
      { shape: 'square', color: 'brand' },
      { shape: 'square', color: 'emerald' },
      null,
      { shape: 'triangle', color: 'brand' },
      { shape: 'triangle', color: 'emerald' },
      { shape: 'triangle', color: 'violet' },
    ],
    options: ['Blue square', 'Green square', 'Purple square', 'Blue triangle'],
    correctIndex: 2,
    explanation: 'Each row shares a shape; columns cycle brand → emerald → violet.',
  },
  {
    id: 'n5',
    difficulty: 3,
    type: 'number',
    prompt: 'What number replaces ?',
    sequence: '1, 4, 9, 16, 25, ?',
    options: ['30', '32', '36', '49'],
    correctIndex: 2,
    explanation: 'Perfect squares: 1², 2², 3² … 6² = 36.',
  },
  {
    id: 'n6',
    difficulty: 4,
    type: 'number',
    prompt: 'Complete the sequence.',
    sequence: '1, 1, 2, 3, 5, 8, ?',
    options: ['11', '12', '13', '15'],
    correctIndex: 2,
    explanation: 'Fibonacci: each term is the sum of the two before it.',
  },
  {
    id: 'm3',
    difficulty: 4,
    type: 'matrix',
    prompt: 'Which option fits the matrix?',
    matrix: [
      { shape: 'diamond', color: 'rose' },
      { shape: 'circle', color: 'brand' },
      { shape: 'diamond', color: 'rose' },
      { shape: 'circle', color: 'brand' },
      null,
      { shape: 'diamond', color: 'rose' },
      { shape: 'diamond', color: 'rose' },
      { shape: 'circle', color: 'brand' },
      { shape: 'diamond', color: 'rose' },
    ],
    options: ['Blue circle', 'Pink diamond', 'Green square', 'Purple triangle'],
    correctIndex: 0,
    explanation: 'Checkerboard of diamond and circle; center is circle.',
  },
  {
    id: 'n7',
    difficulty: 4,
    type: 'number',
    prompt: 'Find the next number.',
    sequence: '81, 27, 9, 3, ?',
    options: ['0', '1', '2', '6'],
    correctIndex: 1,
    explanation: 'Each term is divided by 3.',
  },
  {
    id: 'n8',
    difficulty: 5,
    type: 'number',
    prompt: 'What is the missing value?',
    sequence: '2, 6, 12, 20, 30, ?',
    options: ['38', '40', '42', '44'],
    correctIndex: 2,
    explanation: 'Add consecutive even numbers: +4, +6, +8, +10, +12 → 42.',
  },
  {
    id: 'm4',
    difficulty: 5,
    type: 'matrix',
    prompt: 'Identify the missing pattern element.',
    matrix: [
      { shape: 'triangle', color: 'violet' },
      { shape: 'square', color: 'emerald' },
      { shape: 'circle', color: 'brand' },
      { shape: 'square', color: 'emerald' },
      { shape: 'circle', color: 'brand' },
      null,
      { shape: 'circle', color: 'brand' },
      { shape: 'triangle', color: 'violet' },
      { shape: 'square', color: 'emerald' },
    ],
    options: ['Purple triangle', 'Green square', 'Blue circle', 'Pink diamond'],
    correctIndex: 0,
    explanation: 'Each column cycles triangle → square → circle.',
  },
];

/** Pick 10 questions sorted by increasing difficulty. */
export function selectPatternRound(): PatternQuestion[] {
  const sorted = [...patternQuestions].sort((a, b) => a.difficulty - b.difficulty);
  return sorted.slice(0, 10);
}
