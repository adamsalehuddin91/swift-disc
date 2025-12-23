'use client';

import React from 'react';
import Image from 'next/image';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="retro-container scanlines max-w-2xl w-full">
        {/* Hero Image */}
        <div className="w-full relative h-[180px] md:h-[240px] mb-8 rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0_0_#000]">
          <Image 
            src="/hero-pixel-kids.png" 
            alt="DISC Kids Heroes" 
            fill
            className="object-cover"
            priority /* Load this image immediately as it is above fold */
          />
          {/* Overlay Title */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl pixel-text text-[var(--color-primary)] mb-2 drop-shadow-[4px_4px_0_#000]">
                DISC for Kids
              </h1>
              <p className="text-xs md:text-sm text-white/90 uppercase tracking-widest bg-black/60 px-4 py-1 rounded inline-block">
                Kenal Karakter Kanak-Kanak
              </p>
            </div>
          </div>
        </div>

        {/* Intro Message for Parents */}
        <div className="bg-[rgba(26,26,46,0.8)] border-4 border-black p-6 mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <h2 className="text-[var(--color-secondary)] text-sm md:text-base mb-4 flex items-center gap-2">
            📢 <span>Untuk Ibu Bapa & Guru</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-4 text-gray-200">
            Setiap anak ada cara berfikir dan bertindak yang berbeza.
            Aplikasi ini membantu ibu bapa dan guru memahami anak dengan lebih baik.
          </p>

          {/* Disclaimer Box */}
          <div className="bg-[rgba(255,42,109,0.15)] border-2 border-[var(--color-secondary)] p-4 mt-4 rounded-sm">
            <h3 className="text-[var(--color-accent)] text-xs md:text-sm mb-2 flex items-center gap-2">
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
        <div className="bg-[rgba(5,255,161,0.1)] border-4 border-[var(--color-s)] p-6 mb-8 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10 text-8xl rotate-12">🎮</div>
          <h2 className="text-[var(--color-s)] text-sm md:text-base mb-3 flex items-center gap-2">
            <span className="bounce">👧👦</span>
            <span>Untuk Kanak-Kanak</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed relative z-10">
            Jom jawab soalan mudah untuk <strong className="text-[var(--color-accent)]">kenal diri kita</strong>!
            Tak ada jawapan betul atau salah. Pilih yang paling sesuai dengan diri kamu! 🌟
          </p>
        </div>

        {/* Avatars Preview - Using Emojis for now but styled better */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { icon: '👑', label: 'Pemimpin', color: 'var(--color-d)' },
            { icon: '🎈', label: 'Si Ceria', color: 'var(--color-i)' },
            { icon: '💚', label: 'Penyayang', color: 'var(--color-s)' },
            { icon: '📚', label: 'Si Teliti', color: 'var(--color-c)' }
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <div 
                className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:-translate-y-2 inline-block filter drop-shadow-md"
                style={{ textShadow: `0 0 15px ${item.color}` }}
              >
                {item.icon}
              </div>
              <p className="text-[10px] md:text-xs font-bold opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: item.color }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="pixel-btn pulse text-sm md:text-base w-full md:w-auto"
          >
            🚀 Mula Permainan
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center bg-black/20 p-2 rounded border border-white/5">
          <p className="text-[10px] text-white/50 uppercase tracking-widest">
            15 soalan • 5-7 minit • Mesra kanak-kanak
          </p>
        </div>
      </div>
    </div>
  );
}
