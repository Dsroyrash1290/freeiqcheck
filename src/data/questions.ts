export type QuestionCategory =
  | 'pattern'
  | 'sequence'
  | 'logic'
  | 'spatial'
  | 'deduction'
  | 'numerical'
  | 'analogy';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
  id: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
  category: QuestionCategory;
};

export const QUESTION_COUNT = 25;

export const questions: Question[] = [
  // Easy 1–8
  {
    id: 1,
    difficulty: 'easy',
    category: 'sequence',
    prompt: 'Which number completes the sequence? 3, 6, 9, 12, __',
    options: ['14', '15', '16', '18'],
    correctIndex: 1,
    explanation: 'Add 3 each time: 12 + 3 = 15.',
  },
  {
    id: 2,
    difficulty: 'easy',
    category: 'pattern',
    prompt: 'Which symbol comes next? ● ▲ ● ▲ ● __',
    options: ['●', '▲', '■', '◆'],
    correctIndex: 1,
    explanation: 'The symbols alternate circle and triangle.',
  },
  {
    id: 3,
    difficulty: 'easy',
    category: 'analogy',
    prompt: 'Finger is to Hand as Toe is to __',
    options: ['Leg', 'Foot', 'Arm', 'Heel'],
    correctIndex: 1,
    explanation: 'A finger is part of a hand; a toe is part of a foot.',
  },
  {
    id: 4,
    difficulty: 'easy',
    category: 'logic',
    prompt: 'All roses are flowers. Rose is a rose. Therefore Rose is __',
    options: ['A tree', 'A flower', 'Not a flower', 'Cannot tell'],
    correctIndex: 1,
    explanation: 'If all roses are flowers and Rose is a rose, Rose must be a flower.',
  },
  {
    id: 5,
    difficulty: 'easy',
    category: 'numerical',
    prompt: 'What is 48 ÷ 6?',
    options: ['6', '7', '8', '9'],
    correctIndex: 2,
    explanation: '48 ÷ 6 = 8.',
  },
  {
    id: 6,
    difficulty: 'easy',
    category: 'deduction',
    prompt: 'Find the odd one out.',
    options: ['Piano', 'Violin', 'Drum', 'Flute'],
    correctIndex: 2,
    explanation: 'Drum is primarily percussion; the others are melodic string/wind instruments.',
  },
  {
    id: 7,
    difficulty: 'easy',
    category: 'sequence',
    prompt: 'Which letter continues the pattern? Z, X, V, T, __',
    options: ['P', 'Q', 'R', 'S'],
    correctIndex: 2,
    explanation: 'Move backward two letters in the alphabet: T → R.',
  },
  {
    id: 8,
    difficulty: 'easy',
    category: 'spatial',
    prompt: 'How many lines of symmetry does a square have?',
    options: ['2', '4', '6', '8'],
    correctIndex: 1,
    explanation: 'A square has 4 lines of symmetry (2 diagonals, 2 through midpoints of opposite sides).',
  },
  // Medium 9–17
  {
    id: 9,
    difficulty: 'medium',
    category: 'numerical',
    prompt: 'A bat and ball cost $1.10. The bat costs $1 more than the ball. How much is the ball?',
    options: ['$0.10', '$0.05', '$0.15', '$0.20'],
    correctIndex: 1,
    explanation: 'Ball = $0.05 and bat = $1.05; together they total $1.10.',
  },
  {
    id: 10,
    difficulty: 'medium',
    category: 'numerical',
    prompt: 'If CODE = 27 (C=3, O=15, D=4, E=5), what is MATH using the same rule?',
    options: ['42', '43', '44', '45'],
    correctIndex: 0,
    explanation: 'M(13) + A(1) + T(20) + H(8) = 42.',
  },
  {
    id: 11,
    difficulty: 'medium',
    category: 'numerical',
    prompt: '4 workers finish a task in 8 days. How long would 8 workers take (same rate)?',
    options: ['16 days', '8 days', '4 days', '2 days'],
    correctIndex: 2,
    explanation: 'Twice the workers means half the time: 4 days.',
  },
  {
    id: 12,
    difficulty: 'medium',
    category: 'logic',
    prompt: 'All squares are rectangles. Some rectangles are blue. Which must be true?',
    options: [
      'All blue shapes are squares',
      'Some squares may be blue',
      'No squares are blue',
      'All rectangles are squares',
    ],
    correctIndex: 1,
    explanation: 'Blue rectangles could include squares, so some squares may be blue.',
  },
  {
    id: 13,
    difficulty: 'medium',
    category: 'numerical',
    prompt: 'Which fraction is largest?',
    options: ['3/7', '4/9', '5/11', '2/5'],
    correctIndex: 2,
    explanation: '5/11 ≈ 0.455 is the largest of the four.',
  },
  {
    id: 14,
    difficulty: 'medium',
    category: 'analogy',
    prompt: 'Rearrange the letters in LISTEN to form another English word.',
    options: ['SILENT', 'ENLIST', 'INLETS', 'TINSEL'],
    correctIndex: 0,
    explanation: 'LISTEN is an anagram of SILENT.',
  },
  {
    id: 15,
    difficulty: 'medium',
    category: 'deduction',
    prompt: 'In a row of houses: red is left of blue, and green is right of blue. Where is green relative to red?',
    options: ['Left of red', 'Right of red', 'Same house', 'Cannot tell'],
    correctIndex: 1,
    explanation: 'Order is Red … Blue … Green, so green is to the right of red.',
  },
  {
    id: 16,
    difficulty: 'medium',
    category: 'sequence',
    prompt: 'What comes next? 5, 10, 20, 35, 55, __',
    options: ['70', '80', '85', '90'],
    correctIndex: 1,
    explanation: 'Differences increase by 5: +5, +10, +15, +20, +25 → 55 + 25 = 80.',
  },
  {
    id: 17,
    difficulty: 'medium',
    category: 'spatial',
    prompt: 'Which capital letter has vertical mirror symmetry?',
    options: ['F', 'G', 'A', 'J'],
    correctIndex: 2,
    explanation: 'A looks the same when reflected in a vertical mirror.',
  },
  // Hard 18–25
  {
    id: 18,
    difficulty: 'hard',
    category: 'sequence',
    prompt: 'What comes next? 1, 1, 2, 3, 5, 8, __',
    options: ['11', '12', '13', '14'],
    correctIndex: 2,
    explanation: 'Fibonacci sequence: each term is the sum of the two before it → 13.',
  },
  {
    id: 19,
    difficulty: 'hard',
    category: 'logic',
    prompt:
      'Three boxes (A, B, C) — one contains a prize. A says: "Prize is in B." B says: "Prize is not in A." C says: "Prize is in A." Only ONE statement is true. Where is the prize?',
    options: ['Box A', 'Box B', 'Box C', 'Cannot be determined'],
    correctIndex: 2,
    explanation: 'If the prize is in C: A is false, B is true, C is false — exactly one true statement.',
  },
  {
    id: 20,
    difficulty: 'hard',
    category: 'spatial',
    prompt: 'A square sheet is folded in half twice, then one corner is punched through all layers. How many holes appear when fully unfolded?',
    options: ['1', '2', '4', '8'],
    correctIndex: 2,
    explanation: 'Two folds create 4 layers; one punch through all layers makes 4 holes when unfolded.',
  },
  {
    id: 21,
    difficulty: 'hard',
    category: 'deduction',
    prompt: 'Amy is taller than Ben. Ben is taller than Cal. Dana is shorter than Cal. Who is the shortest?',
    options: ['Amy', 'Ben', 'Cal', 'Dana'],
    correctIndex: 3,
    explanation: 'Dana < Cal < Ben < Amy, so Dana is shortest.',
  },
  {
    id: 22,
    difficulty: 'hard',
    category: 'numerical',
    prompt: 'A $40 item is discounted by 25%. What is the sale price?',
    options: ['$10', '$25', '$30', '$35'],
    correctIndex: 2,
    explanation: '25% of $40 is $10 off → $30.',
  },
  {
    id: 23,
    difficulty: 'hard',
    category: 'pattern',
    prompt: 'What comes next? 2, 4, 12, 48, __',
    options: ['96', '120', '192', '240'],
    correctIndex: 3,
    explanation: 'Multiply by 2, then 3, then 4, then 5: 48 × 5 = 240.',
  },
  {
    id: 24,
    difficulty: 'hard',
    category: 'analogy',
    prompt: 'Architect is to Building as Composer is to __',
    options: ['Instrument', 'Orchestra', 'Symphony', 'Conductor'],
    correctIndex: 2,
    explanation: 'An architect creates a building; a composer creates a symphony.',
  },
  {
    id: 25,
    difficulty: 'hard',
    category: 'logic',
    prompt:
      'Rule: Everyone who studies daily passes the review. Jordan studies daily. Which conclusion follows logically?',
    options: [
      'Jordan might not pass',
      'Jordan passes the review',
      'Only Jordan passes',
      'No conclusion',
    ],
    correctIndex: 1,
    explanation: 'Given the rule and that Jordan studies daily, Jordan must pass the review.',
  },
];

export const categoryLabels: Record<QuestionCategory, string> = {
  pattern: 'Pattern recognition',
  sequence: 'Sequences',
  logic: 'Logic puzzles',
  spatial: 'Spatial reasoning',
  deduction: 'Deduction',
  numerical: 'Numerical reasoning',
  analogy: 'Analogies',
};
