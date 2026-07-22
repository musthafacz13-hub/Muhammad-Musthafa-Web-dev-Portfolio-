'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, MapPin, Globe } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#f5f5f7] border-t border-black/5 pt-16 pb-12 px-6 sm:px-12 text-[#86868b] text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Apple Style Breadcrumbs & Nav Shortcuts */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-black/5">
          <div className="flex items-center gap-2 text-[#1d1d1f] font-medium text-xs">
            <span className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center font-bold text-[10px]">
              MM
            </span>
            <span>Muhammed Musthafa</span>
            <span className="text-[#86868b]">&gt;</span>
            <span className="text-[#86868b]">Portfolio</span>
            <span className="text-[#86868b]">&gt;</span>
            <span className="text-[#0071e3]">2026 Edition</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full glass-card hover:bg-white text-[#1d1d1f] text-xs font-medium flex items-center gap-1.5 active:scale-95 transition-all shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 opacity-70" />
          </button>
        </div>

        {/* Footnote Disclaimers */}
        <div className="space-y-3 leading-relaxed text-[11px] text-[#86868b]">
          <p>
            1. Designed and engineered for Muhammed Musthafa. Inspired by Apple&apos;s Human Interface Guidelines and WWDC design language.
          </p>
          <p>
            2. This portfolio represents an authentic display of independent design and building. No fabricated company history, fake projects, or invented certificates are used.
          </p>
        </div>

        {/* Bottom Legal & Location Bar */}
        <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Copyright © 2026 Muhammed Musthafa. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[#1d1d1f] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Kozhikode, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
