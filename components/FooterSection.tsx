'use client';

import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#f5f5f7] border-t border-black/5 py-10 px-6 sm:px-12 text-[#86868b] text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© 2026 Muhammed Musthafa</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#1d1d1f]">
            <MapPin className="w-3 h-3 text-[#0071e3]" />
            Kozhikode, Kerala, India
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="px-4 py-1.5 rounded-full glass-card hover:bg-white text-[#1d1d1f] text-xs font-medium flex items-center gap-1.5 active:scale-95 transition-all shadow-xs"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 opacity-70" />
        </button>
      </div>
    </footer>
  );
}
