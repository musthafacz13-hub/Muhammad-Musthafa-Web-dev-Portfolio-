'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowDown, Sparkles, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center pt-28 sm:pt-36 pb-12 px-6 sm:px-12 overflow-hidden select-none">
      {/* Top Location Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.06] backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-[#1d1d1f]/80 tracking-tight flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0071e3]" />
            Based in Kozhikode, Kerala, India
          </span>
        </div>
      </motion.div>

      {/* Main Title & Hero Content */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] leading-[1.08] sm:leading-[1.05]"
        >
          Muhammed Musthafa
        </motion.h1>

        {/* Roles Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#86868b] flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-[#1d1d1f]">UI/UX Designer</span>
          <span className="text-amber-500/80 font-serif italic text-lg sm:text-3xl md:text-4xl">&amp;</span>
          <span className="text-[#1d1d1f]">Web Developer</span>
        </motion.div>

        {/* Minimal Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#86868b] font-normal leading-relaxed tracking-normal"
        >
          Designing and building modern websites, mobile applications, and full-stack digital products with thoughtful simplicity and meticulous craftsmanship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 shadow-md flex items-center gap-2 group"
          >
            <span>Explore Work</span>
            <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="#about"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] border border-black/5 text-[#1d1d1f] text-sm font-medium hover:bg-[#e8e8ed] active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <span>About Muhammed</span>
          </a>
        </motion.div>
      </div>

      {/* Apple-Style Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 flex flex-col items-center gap-2"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
          aria-label="Scroll to About Section"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest opacity-80">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-black/15 flex justify-center p-1 group-hover:border-black/30 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
