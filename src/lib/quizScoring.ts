import type { Difficulty, Question, QuestionCategory } from '../data/questions';
import { categoryLabels, questions } from '../data/questions';

export type ScoreBandId =
  | 'developing'
  | 'average'
  | 'above_average'
  | 'strong'
  | 'exceptional';

export type ScoreBand = {
  id: ScoreBandId;
  label: string;
  iqRange: string;
  summary: string;
  detail: string;
};

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: 'speed' | 'accuracy' | 'streak' | 'hard' | 'balanced';
};

export type BreakdownItem = {
  id: number;
  prompt: string;
  selected: number;
  correctIndex: number;
  explanation: string;
  correct: boolean;
  difficulty: Difficulty;
  category: QuestionCategory;
};

export type QuizResult = {
  correct: number;
  total: number;
  seconds: number;
  answers: number[];
  breakdown: BreakdownItem[];
  completedAt: string;
  illustrativeIQ: number;
  percentile: number;
  accuracy: number;
  weightedAccuracy: number;
  band: ScoreBand;
  performanceSummary: string;
  strengths: string[];
  improvementTips: string[];
  badges: Badge[];
  byCategory: Record<QuestionCategory, { correct: number; total: number }>;
  byDifficulty: Record<Difficulty, { correct: number; total: number }>;
};

const WEIGHTS: Record<Difficulty, number> = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

const BANDS: ScoreBand[] = [
  {
    id: 'developing',
    label: 'Developing Reasoning',
    iqRange: '70–85',
    summary: 'You answered several questions correctly and have clear room to grow.',
    detail:
      'Focus on fundamentals: simple sequences, basic logic rules, and one step at a time. Retake after reviewing missed explanations.',
  },
  {
    id: 'average',
    label: 'Average Range',
    iqRange: '86–99',
    summary: 'You demonstrated solid everyday reasoning on many items.',
    detail:
      'You handle straightforward puzzles well. Medium and hard items are the best place to push next—especially pattern and deduction tasks.',
  },
  {
    id: 'above_average',
    label: 'Above Average',
    iqRange: '100–114',
    summary: 'You performed well across multiple reasoning types.',
    detail:
      'Your accuracy suggests comfortable logical thinking. Sharpen speed and consistency on the hardest multi-step items.',
  },
  {
    id: 'strong',
    label: 'Strong Analytical Skills',
    iqRange: '115–129',
    summary: 'You excelled on challenging logic and pattern questions.',
    detail:
      'Strong performance on weighted hard questions indicates flexible analytical thinking—keep practicing timed puzzles to maintain edge.',
  },
  {
    id: 'exceptional',
    label: 'Exceptional Pattern Recognition',
    iqRange: '130+',
    summary: 'You answered most questions correctly, including difficult ones.',
    detail:
      'Outstanding on this practice quiz. Remember: this is illustrative only—not a clinical IQ score or certificate.',
  },
];

function getBandForIQ(iq: number): ScoreBand {
  if (iq >= 130) return BANDS[4];
  if (iq >= 115) return BANDS[3];
  if (iq >= 100) return BANDS[2];
  if (iq >= 86) return BANDS[1];
  return BANDS[0];
}

/** Maps weighted performance ratio (0–1) to illustrative IQ 70–138 */
export function ratioToIllustrativeIQ(ratio: number): number {
  const r = Math.max(0, Math.min(1, ratio));
  if (r <= 0.15) return Math.round(70 + r * (78 / 0.15));
  if (r <= 0.35) return Math.round(78 + ((r - 0.15) / 0.2) * 12);
  if (r <= 0.55) return Math.round(90 + ((r - 0.35) / 0.2) * 10);
  if (r <= 0.72) return Math.round(100 + ((r - 0.55) / 0.17) * 14);
  if (r <= 0.88) return Math.round(114 + ((r - 0.72) / 0.16) * 16);
  return Math.round(130 + ((r - 0.88) / 0.12) * 8);
}

/** Illustrative percentile — not normed population data */
export function iqToPercentile(iq: number): number {
  if (iq <= 70) return 5;
  if (iq <= 78) return 10;
  if (iq <= 85) return 18;
  if (iq <= 92) return 28;
  if (iq <= 99) return 40;
  if (iq <= 105) return 52;
  if (iq <= 110) return 62;
  if (iq <= 115) return 72;
  if (iq <= 120) return 82;
  if (iq <= 125) return 90;
  if (iq <= 130) return 95;
  return 98;
}

function computeWeightedRatio(
  questionList: Question[],
  answers: number[],
): { ratio: number; earned: number; max: number } {
  let earned = 0;
  let max = 0;
  questionList.forEach((q, i) => {
    const w = WEIGHTS[q.difficulty];
    max += w;
    if (answers[i] === q.correctIndex) earned += w;
  });
  return { ratio: max > 0 ? earned / max : 0, earned, max };
}

function summarizeByCategory(
  questionList: Question[],
  answers: number[],
): Record<QuestionCategory, { correct: number; total: number }> {
  const map = {} as Record<QuestionCategory, { correct: number; total: number }>;
  questionList.forEach((q, i) => {
    if (!map[q.category]) map[q.category] = { correct: 0, total: 0 };
    map[q.category].total++;
    if (answers[i] === q.correctIndex) map[q.category].correct++;
  });
  return map;
}

function summarizeByDifficulty(
  questionList: Question[],
  answers: number[],
): Record<Difficulty, { correct: number; total: number }> {
  const map: Record<Difficulty, { correct: number; total: number }> = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 },
  };
  questionList.forEach((q, i) => {
    map[q.difficulty].total++;
    if (answers[i] === q.correctIndex) map[q.difficulty].correct++;
  });
  return map;
}

function deriveStrengths(byCategory: Record<QuestionCategory, { correct: number; total: number }>): string[] {
  const ranked = (Object.entries(byCategory) as [QuestionCategory, { correct: number; total: number }][])
    .map(([cat, { correct, total }]) => ({
      cat,
      label: categoryLabels[cat],
      pct: total > 0 ? correct / total : 0,
      correct,
      total,
    }))
    .filter((x) => x.total > 0)
    .sort((a, b) => b.pct - a.pct);

  const strengths: string[] = [];
  for (const item of ranked) {
    if (item.pct >= 0.6 && strengths.length < 3) {
      strengths.push(
        `${item.label}: ${item.correct}/${item.total} correct (${Math.round(item.pct * 100)}%)`,
      );
    }
  }
  if (strengths.length === 0 && ranked[0]) {
    strengths.push(`Strongest area: ${ranked[0].label} (${Math.round(ranked[0].pct * 100)}% correct)`);
  }
  return strengths;
}

function deriveTips(
  byCategory: Record<QuestionCategory, { correct: number; total: number }>,
  byDifficulty: Record<Difficulty, { correct: number; total: number }>,
): string[] {
  const tips: string[] = [];
  const weakCats = (Object.entries(byCategory) as [QuestionCategory, { correct: number; total: number }][])
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.5)
    .map(([c]) => categoryLabels[c]);

  if (weakCats.length > 0) {
    tips.push(`Practice ${weakCats.slice(0, 2).join(' and ')} with short daily puzzle sets.`);
  }
  const hard = byDifficulty.hard;
  if (hard.total > 0 && hard.correct / hard.total < 0.5) {
    tips.push('For hard items, write given facts on paper and eliminate wrong options before guessing.');
  }
  const med = byDifficulty.medium;
  if (med.total > 0 && med.correct / med.total < 0.6) {
    tips.push('Medium questions reward slow reading—restate the question in your own words first.');
  }
  tips.push('Retake the quiz after reviewing explanations to track improvement.');
  tips.push('Sleep, reading, and logic puzzles support real-world reasoning—not just test scores.');
  return tips.slice(0, 4);
}

function deriveBadges(
  correct: number,
  total: number,
  seconds: number,
  byDifficulty: Record<Difficulty, { correct: number; total: number }>,
  breakdown: BreakdownItem[],
): Badge[] {
  const badges: Badge[] = [];
  const accuracy = total > 0 ? correct / total : 0;
  const hardPct =
    byDifficulty.hard.total > 0 ? byDifficulty.hard.correct / byDifficulty.hard.total : 0;

  if (accuracy >= 0.88) {
    badges.push({
      id: 'high_accuracy',
      title: 'Sharp Mind',
      description: '88%+ accuracy across all 25 questions.',
      icon: 'accuracy',
    });
  }
  if (seconds > 0 && seconds <= 18 * 60) {
    badges.push({
      id: 'efficient',
      title: 'Efficient Thinker',
      description: 'Completed within 18 minutes.',
      icon: 'speed',
    });
  }
  if (hardPct >= 0.75 && byDifficulty.hard.total >= 4) {
    badges.push({
      id: 'hard_mode',
      title: 'Hard Mode Hero',
      description: '75%+ correct on the hardest questions.',
      icon: 'hard',
    });
  }
  let maxStreak = 0;
  let streak = 0;
  breakdown.forEach((b) => {
    if (b.correct) {
      streak++;
      maxStreak = Math.max(maxStreak, streak);
    } else streak = 0;
  });
  if (maxStreak >= 6) {
    badges.push({
      id: 'streak',
      title: 'Hot Streak',
      description: `${maxStreak} correct answers in a row.`,
      icon: 'streak',
    });
  }
  const cats = new Set(breakdown.filter((b) => b.correct).map((b) => b.category));
  if (cats.size >= 5) {
    badges.push({
      id: 'balanced',
      title: 'Well Rounded',
      description: 'Correct answers across 5+ reasoning categories.',
      icon: 'balanced',
    });
  }
  return badges;
}

function buildPerformanceSummary(
  correct: number,
  total: number,
  band: ScoreBand,
  byDifficulty: Record<Difficulty, { correct: number; total: number }>,
): string {
  const e = byDifficulty.easy;
  const m = byDifficulty.medium;
  const h = byDifficulty.hard;
  return `You answered ${correct} of ${total} correctly (${band.label}). Easy: ${e.correct}/${e.total} · Medium: ${m.correct}/${m.total} · Hard: ${h.correct}/${h.total}. Harder questions count more toward your illustrative score.`;
}

export function computeQuizResult(
  questionList: Question[],
  answers: number[],
  seconds: number,
): QuizResult {
  let correct = 0;
  const breakdown: BreakdownItem[] = questionList.map((q, i) => {
    const ok = answers[i] === q.correctIndex;
    if (ok) correct++;
    return {
      id: q.id,
      prompt: q.prompt,
      selected: answers[i],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      correct: ok,
      difficulty: q.difficulty,
      category: q.category,
    };
  });

  const total = questionList.length;
  const { ratio: weightedRatio } = computeWeightedRatio(questionList, answers);
  const illustrativeIQ = ratioToIllustrativeIQ(weightedRatio);
  const band = getBandForIQ(illustrativeIQ);
  const percentile = iqToPercentile(illustrativeIQ);
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const weightedAccuracy = Math.round(weightedRatio * 100);
  const byCategory = summarizeByCategory(questionList, answers);
  const byDifficulty = summarizeByDifficulty(questionList, answers);
  const strengths = deriveStrengths(byCategory);
  const improvementTips = deriveTips(byCategory, byDifficulty);
  const badges = deriveBadges(correct, total, seconds, byDifficulty, breakdown);

  return {
    correct,
    total,
    seconds,
    answers,
    breakdown,
    completedAt: new Date().toISOString(),
    illustrativeIQ,
    percentile,
    accuracy,
    weightedAccuracy,
    band,
    performanceSummary: buildPerformanceSummary(correct, total, band, byDifficulty),
    strengths,
    improvementTips,
    badges,
    byCategory,
    byDifficulty,
  };
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/** Recompute if legacy session payload lacks new fields */
export function normalizeStoredResult(raw: unknown): QuizResult | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  if (data.illustrativeIQ != null && data.band != null) return data as QuizResult;

  const answers = (data.answers as number[]) ?? [];
  const seconds = (data.seconds as number) ?? 0;
  if (!answers.length) return null;
  return computeQuizResult(questions, answers, seconds);
}

export const STORAGE_KEY = 'freeiqcheck-result';

export function scoreRingOffset(iq: number): number {
  const min = 70;
  const max = 138;
  const pct = Math.max(0, Math.min(1, (iq - min) / (max - min)));
  const circumference = 2 * Math.PI * 54;
  return circumference * (1 - pct);
}
