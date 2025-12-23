'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1a2e] border-t-4 border-black py-6 px-4 mt-auto">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center space-y-4">
          {/* App Info */}
          <div>
            <h3 className="text-sm md:text-base text-[#4ecca3] font-bold mb-2">
              🎮 DISC for Kids
            </h3>
            <p className="text-xs opacity-70">
              8-Bit Personality Assessment for Children (Ages 5-12)
            </p>
          </div>

          {/* Developer Credit */}
          <div className="bg-[#16213e] border-2 border-[#4ecca3] p-4 inline-block">
            <p className="text-xs mb-2 text-[#ffd93d]">
              💻 Developed by
            </p>
            <p className="text-sm md:text-base font-bold text-[#4ecca3]">
              Mohamad Sahdan Salehuddin
            </p>
            <p className="text-xs opacity-70 mt-1">
              SwiftApps Ecosystem
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="bg-black text-white px-2 py-1 border border-[#4ecca3]">
              Next.js 15
            </span>
            <span className="bg-black text-white px-2 py-1 border border-[#4ecca3]">
              React 19
            </span>
            <span className="bg-black text-white px-2 py-1 border border-[#4ecca3]">
              TypeScript
            </span>
            <span className="bg-black text-white px-2 py-1 border border-[#4ecca3]">
              Tailwind CSS
            </span>
          </div>

          {/* Copyright */}
          <div className="border-t-2 border-[#4ecca3] pt-4">
            <p className="text-xs opacity-60">
              © {currentYear} SwiftApps. All rights reserved.
            </p>
            <p className="text-xs opacity-60 mt-1">
              Built with 💜 using Tokwi v4.0
            </p>
          </div>

          {/* Contact/Links */}
          <div className="flex justify-center gap-4 text-xs">
            <a
              href="https://github.com/adamsalehuddin91/swift-disc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-[#ffd93d] transition-colors"
            >
              📦 GitHub
            </a>
            <span className="opacity-30">|</span>
            <a
              href="https://swift-disc.vercel.app"
              className="text-[#4ecca3] hover:text-[#ffd93d] transition-colors"
            >
              🌐 Web App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
