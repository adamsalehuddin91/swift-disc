'use client';

import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DISCResult } from '../types';
import { discProfiles } from '../data/profiles';
import { getDISCPercentages } from '../utils/scoring';

interface ResultScreenProps {
  result: DISCResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const [showTips, setShowTips] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const profile = discProfiles[result.primaryType];
  const percentages = getDISCPercentages(result.scores);

  const handleSaveImage = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1a1a2e',
        scale: 2,
        logging: false,
        useCORS: true,
      });

      // Convert to blob
      canvas.toBlob((blob) => {
        if (!blob) return;

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `disc-result-${profile.nameBM.toLowerCase().replace(/\s/g, '-')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert('✅ Imej disimpan! Kongsi di WhatsApp/Facebook 🎉');
      }, 'image/png');
    } catch (error) {
      console.error('Error generating image:', error);
      alert('❌ Maaf, ada masalah. Cuba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareImage = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1a1a2e',
        scale: 2,
        logging: false,
        useCORS: true,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const file = new File([blob], `disc-${profile.nameBM}.png`, { type: 'image/png' });

        // Try native share API (works on mobile)
        if (navigator.share && navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({
              title: `DISC for Kids - ${profile.nameBM}`,
              text: `Keputusan DISC saya: ${profile.nameBM} ${profile.emoji}`,
              files: [file],
            });
          } catch (err) {
            // User cancelled or error - fallback to download
            handleSaveImage();
          }
        } else {
          // Fallback to download on desktop
          handleSaveImage();
        }

        setIsGenerating(false);
      }, 'image/png');
    } catch (error) {
      console.error('Error sharing image:', error);
      setIsGenerating(false);
      alert('❌ Maaf, ada masalah. Cuba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="retro-container scanlines max-w-4xl w-full">
        {/* Success Banner */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl pixel-text mb-2 text-[#4ecca3]">
            🎉 Tahniah! 🎉
          </h1>
          <p className="text-xs md:text-sm text-[#feca57]">
            Kamu telah selesaikan kuiz!
          </p>
        </div>

        {/* Shareable Card - This will be captured as image */}
        <div
          ref={cardRef}
          className="bg-[#1a1a2e] border-4 border-black p-8 mb-6"
          style={{ borderColor: profile.color }}
        >
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div
              className="pixel-avatar"
              style={{ borderColor: profile.color }}
            >
              <span>{profile.avatar}</span>
            </div>
          </div>

          {/* Type Name */}
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl mb-2" style={{ color: profile.color }}>
              {profile.emoji} {profile.nameBM}
            </h2>
            <p className="text-xs md:text-sm leading-relaxed opacity-80">
              {profile.descriptionBM}
            </p>
          </div>

          {/* Traits */}
          <div className="bg-[#16213e] border-2 border-black p-6 mb-6">
            <h3 className="text-sm md:text-base mb-4 text-[#ffd93d] text-center">
              ✨ Karakter Kamu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profile.traitsBM.map((trait, index) => (
                <div key={index} className="flex items-start gap-2 text-xs md:text-sm">
                  <span style={{ color: profile.color }}>▶</span>
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="bg-[#16213e] border-2 border-black p-6 mb-4">
            <h3 className="text-sm md:text-base mb-4 text-[#4ecca3] text-center">
              📊 Pecahan Skor
            </h3>
            <div className="space-y-3">
              {(['D', 'I', 'S', 'C'] as const).map(type => {
                const typeProfile = discProfiles[type];
                return (
                  <div key={type} className="flex items-center gap-3">
                    <div className="w-16 text-xs font-bold" style={{ color: typeProfile.color }}>
                      {typeProfile.emoji} {type}
                    </div>
                    <div className="flex-1 progress-bar h-6">
                      <div
                        className="progress-fill h-full flex items-center justify-end pr-2 text-xs font-bold"
                        style={{
                          width: `${percentages[type]}%`,
                          background: typeProfile.color
                        }}
                      >
                        {percentages[type] > 15 && `${percentages[type]}%`}
                      </div>
                    </div>
                    <div className="w-12 text-xs text-right">
                      {result.scores[type]}/15
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Branding */}
          <div className="text-center text-xs opacity-60">
            <p>🎮 DISC for Kids - swift-disc.vercel.app</p>
          </div>
        </div>

        {/* Parent Tips Toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full bg-[#ff6b6b] border-4 border-black p-4 text-xs md:text-sm hover:bg-[#ff8888] transition-colors"
          >
            {showTips ? '📖 Tutup' : '📖 Panduan Ibu Bapa & Guru'}
            <span className="ml-2">{showTips ? '▲' : '▼'}</span>
          </button>

          {showTips && (
            <div className="bg-[#1a1a2e] border-4 border-black border-t-0 p-6">
              <h3 className="text-sm md:text-base mb-4 text-[#ffd93d]">
                💡 Cara Handle Anak "{profile.nameBM}"
              </h3>
              <div className="space-y-3">
                {profile.parentTipsBM.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs md:text-sm leading-relaxed">
                    <span className="text-[#4ecca3] font-bold">{index + 1}.</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#4ecca333] border-2 border-[#4ecca3] p-4">
                <p className="text-xs leading-relaxed">
                  <strong className="text-[#4ecca3]">Ingat:</strong> Setiap anak adalah unik!
                  Panduan ini untuk membantu komunikasi yang lebih baik, bukan untuk label anak. 💚
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={handleSaveImage}
            disabled={isGenerating}
            className="pixel-btn bg-[#ffd93d] text-xs md:text-sm disabled:opacity-50"
          >
            {isGenerating ? '⏳ Menjana...' : '💾 Simpan Imej'}
          </button>
          <button
            onClick={handleShareImage}
            disabled={isGenerating}
            className="pixel-btn bg-[#ff6b6b] text-xs md:text-sm disabled:opacity-50"
          >
            {isGenerating ? '⏳ Menjana...' : '📤 Kongsi'}
          </button>
          <button
            onClick={onRestart}
            className="pixel-btn bg-[#6bcb77] text-xs md:text-sm"
          >
            🔄 Mula Semula
          </button>
        </div>

        {/* Footer Message */}
        <div className="text-center bg-[#16213e] border-2 border-black p-4">
          <p className="text-xs leading-relaxed">
            <span className="text-[#4ecca3]">💜</span>{' '}
            <strong>"Kenal karakter, bina potensi anak."</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
