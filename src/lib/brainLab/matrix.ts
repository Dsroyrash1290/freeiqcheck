import type { MatrixCell } from '../../data/brainLab/patternQuestions';

const colorMap: Record<MatrixCell['color'], string> = {
  brand: '#2550ea',
  emerald: '#10b981',
  violet: '#7c3aed',
  rose: '#f43f5e',
};

function shapeSvg(cell: MatrixCell): string {
  const fill = colorMap[cell.color];
  switch (cell.shape) {
    case 'circle':
      return `<circle cx="24" cy="24" r="14" fill="${fill}"/>`;
    case 'square':
      return `<rect x="10" y="10" width="28" height="28" rx="4" fill="${fill}"/>`;
    case 'triangle':
      return `<polygon points="24,8 40,40 8,40" fill="${fill}"/>`;
    case 'diamond':
      return `<polygon points="24,6 42,24 24,42 6,24" fill="${fill}"/>`;
  }
}

export function renderMatrixHtml(matrix: (MatrixCell | null)[]): string {
  const cells = matrix
    .map((cell) => {
      if (!cell) {
        return `<div class="brain-matrix-cell brain-matrix-cell--missing"><span>?</span></div>`;
      }
      return `<div class="brain-matrix-cell">${`<svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">${shapeSvg(cell)}</svg>`}</div>`;
    })
    .join('');
  return `<div class="brain-matrix-grid">${cells}</div>`;
}
