import { easyQuestions } from './bank-easy';
import { mediumQuestions } from './bank-medium';
import { hardQuestions } from './bank-hard';

export * from './types';
export * from './categoryLabels';
export { questionVisuals, getVisualHtml } from './visuals';

export const questionBank = [...easyQuestions, ...mediumQuestions, ...hardQuestions];

/** @deprecated Use questionBank — kept for imports that expect `questions` */
export const questions = questionBank;
