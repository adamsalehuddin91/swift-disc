'use client';

import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { DISCType, DISCResult } from './types';
import { calculateDISCScore } from './utils/scoring';

type AppState = 'intro' | 'quiz' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('intro');
  const [result, setResult] = useState<DISCResult | null>(null);

  const handleStart = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = (answers: DISCType[]) => {
    const calculatedResult = calculateDISCScore(answers);
    setResult(calculatedResult);
    setAppState('results');
  };

  const handleRestart = () => {
    setResult(null);
    setAppState('intro');
  };

  return (
    <>
      {appState === 'intro' && <IntroScreen onStart={handleStart} />}
      {appState === 'quiz' && <QuizScreen onComplete={handleQuizComplete} />}
      {appState === 'results' && result && (
        <ResultScreen result={result} onRestart={handleRestart} />
      )}
    </>
  );
}
