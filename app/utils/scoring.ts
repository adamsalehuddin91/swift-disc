// DISC Scoring Algorithm

import { DISCType, DISCScore, DISCResult } from '../types';

export function calculateDISCScore(answers: DISCType[]): DISCResult {
  // Initialize scores
  const scores: DISCScore = {
    D: 0,
    I: 0,
    S: 0,
    C: 0
  };

  // Count answers for each type
  answers.forEach(answer => {
    scores[answer]++;
  });

  // Find primary type (highest score)
  let primaryType: DISCType = 'D';
  let highestScore = scores.D;

  (Object.keys(scores) as DISCType[]).forEach(type => {
    if (scores[type] > highestScore) {
      highestScore = scores[type];
      primaryType = type;
    }
  });

  // Find secondary type (second highest, if significant)
  let secondaryType: DISCType | undefined;
  let secondHighest = 0;

  (Object.keys(scores) as DISCType[]).forEach(type => {
    if (type !== primaryType && scores[type] > secondHighest) {
      secondHighest = scores[type];
      secondaryType = type;
    }
  });

  // Only include secondary if it's significant (at least 20% of total)
  const totalAnswers = answers.length;
  if (secondHighest < totalAnswers * 0.2) {
    secondaryType = undefined;
  }

  return {
    primaryType,
    secondaryType,
    scores
  };
}

export function getDISCPercentages(scores: DISCScore): Record<DISCType, number> {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

  return {
    D: Math.round((scores.D / total) * 100),
    I: Math.round((scores.I / total) * 100),
    S: Math.round((scores.S / total) * 100),
    C: Math.round((scores.C / total) * 100)
  };
}
