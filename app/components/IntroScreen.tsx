'use client';

import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="retro-container scanlines max-w-2xl w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl pixel-text mb-4 text-[#4ecca3]">
            🎮 DISC for Kids 🎮
          </h1>
          <p className="text-sm md:text-base text-[#feca57] leading-relaxed">
            Kenal Karakter Kanak-Kanak
          </p>
        </div>

        {/* Intro Message for Parents */}
        <div className="bg-[#1a1a2e] border-4 border-black p-6 mb-6">
          <h2 className="text-[#ff6b6b] text-sm md:text-base mb-4">
            📢 Untuk Ibu Bapa & Guru
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-4">
            Setiap anak ada cara berfikir dan bertindak yang berbeza.
            Aplikasi ini membantu ibu bapa dan guru memahami anak dengan lebih baik.
          </p>

          {/* Disclaimer Box */}
          <div className="bg-[#ff444433] border-2 border-[#ff4444] p-4 mt-4">
            <h3 className="text-[#ffd93d] text-xs md:text-sm mb-2 flex items-center gap-2">
              ⚠️ <span>Disclaimer</span>
            </h3>
            <p className="text-xs leading-relaxed opacity-90">
              Alat ini <strong>BUKAN diagnosis psikologi</strong>.
              Ia bertujuan <strong>pendidikan dan panduan komunikasi</strong> sahaja.
              Setiap anak adalah unik dan istimewa!
            </p>
          </div>
        </div>

        {/* Message for Kids */}
        <div className="bg-[#6bcb7733] border-4 border-[#6bcb77] p-6 mb-8">
          <h2 className="text-[#4ecca3] text-sm md:text-base mb-3 flex items-center gap-2">
            <span className="bounce">👧👦</span>
            <span>Untuk Kanak-Kanak</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed">
            Jom jawab soalan mudah untuk <strong className="text-[#ffd93d]">kenal diri kita</strong>!
            Tak ada jawapan betul atau salah. Pilih yang paling sesuai dengan diri kamu! 🌟
          </p>
        </div>

        {/* Avatars Preview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-2">👑</div>
            <p className="text-xs">Pemimpin</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎈</div>
            <p className="text-xs">Si Ceria</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💚</div>
            <p className="text-xs">Penyayang</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-xs">Si Teliti</p>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="pixel-btn pulse text-sm md:text-base"
          >
            🚀 Mula Permainan
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-xs opacity-60">
            15 soalan • 5-7 minit • Mesra kanak-kanak
          </p>
        </div>
      </div>
    </div>
  );
}
