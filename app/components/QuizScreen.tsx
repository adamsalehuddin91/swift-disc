'use client';

import React, { useState } from 'react';
import { QuizQuestion, DISCType } from '../types';
import { questions } from '../data/questions';

interface QuizScreenProps {
  onComplete: (answers: DISCType[]) => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<DISCType[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionSelect = (index: number, type: DISCType) => {
    setSelectedOption(index);

    // Auto-advance after a short delay
    setTimeout(() => {
      const newAnswers = [...answers, type];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="retro-container scanlines max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#4ecca3]">
              Soalan {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-[#feca57]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-[#1a1a2e] border-4 border-black p-6 md:p-8 mb-6">
          <h2 className="text-sm md:text-base leading-relaxed text-[#ffd93d] mb-6">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index, option.type)}
                className={`quiz-option w-full ${
                  selectedOption === index ? 'selected' : ''
                }`}
                disabled={selectedOption !== null}
              >
                <span className="block">
                  <strong className="text-[#ff4444]">
                    {String.fromCharCode(65 + index)}.
                  </strong>{' '}
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Hints */}
        <div className="flex justify-between items-center text-xs opacity-60">
          <span>⬅️ Pilih jawapan yang paling sesuai</span>
          <span className="blink">▶️</span>
        </div>

        {/* Decorative Elements */}
        <div className="mt-6 text-center">
          <div className="flex justify-center gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 border-2 border-black ${
                  index < currentQuestion
                    ? 'bg-[#4ecca3]'
                    : index === currentQuestion
                    ? 'bg-[#feca57]'
                    : 'bg-[#2a2a3e]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
