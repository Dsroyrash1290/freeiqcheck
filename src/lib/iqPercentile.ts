import { iqToPercentile } from './quizScoring';

export type PercentileBand = {
  min: number;
  max: number;
  label: string;
  range: string;
  summary: string;
};

export const percentileBands: PercentileBand[] = [
  { min: 55, max: 69, label: 'Well below average', range: 'Below 2nd percentile', summary: 'Far below the population mean on standardized scales.' },
  { min: 70, max: 84, label: 'Below average', range: 'Roughly 2nd–16th percentile', summary: 'Below the typical population average, with room to grow through practice.' },
  { min: 85, max: 99, label: 'Average', range: 'Roughly 16th–50th percentile', summary: 'Within the most common IQ range on normed tests (mean 100).' },
  { min: 100, max: 114, label: 'Above average', range: 'Roughly 50th–82nd percentile', summary: 'Above the population mean on many standardized instruments.' },
  { min: 115, max: 129, label: 'High average', range: 'Roughly 84th–97th percentile', summary: 'Strong performance relative to general population norms.' },
  { min: 130, max: 144, label: 'Very high', range: 'Roughly top 2–3%', summary: 'Often associated with gifted programs or high-IQ societies—not a life verdict.' },
  { min: 145, max: 160, label: 'Exceptionally high', range: 'Top ~1% or less', summary: 'Rare scores on professional batteries; online quizzes rarely validate this range.' },
];

export function clampIqInput(value: number): number {
  return Math.min(160, Math.max(55, Math.round(value)));
}

export function getPercentileResult(iq: number) {
  const score = clampIqInput(iq);
  const percentile = iqToPercentile(score);
  const band =
    percentileBands.find((b) => score >= b.min && score <= b.max) ??
    percentileBands[percentileBands.length - 1];

  return {
    iq: score,
    percentile,
    label: band.label,
    range: band.range,
    summary: band.summary,
  };
}
