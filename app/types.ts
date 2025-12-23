// DISC for Kids - Type Definitions

export type DISCType = 'D' | 'I' | 'S' | 'C';

export interface QuizOption {
  type: DISCType;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface DISCScore {
  D: number;
  I: number;
  S: number;
  C: number;
}

export interface DISCResult {
  primaryType: DISCType;
  secondaryType?: DISCType;
  scores: DISCScore;
}

export interface DISCProfile {
  type: DISCType;
  name: string;
  nameBM: string;
  color: string;
  emoji: string;
  avatar: string;
  traits: string[];
  traitsBM: string[];
  description: string;
  descriptionBM: string;
  parentTips: string[];
  parentTipsBM: string[];
}
