'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6 sm:px-12 overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/5 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-[#1d1d1f]/90 tracking-tight">
            Available for new projects &amp; collaborations
          </span>
        </motion.div>

        {/* Name Heading - Strongest Visual Hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.08]"
        >
          Muhammed Musthafa
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#515154] font-medium tracking-tight max-w-xl"
        >
          UI/UX Designer &amp; Web Developer
        </motion.p>

        {/* Short Mission Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#86868b] max-w-lg font-normal leading-relaxed"
        >
          Crafting high-performance web applications, responsive interfaces, and minimalist digital experiences with precision and modern engineering.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-3.5 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#0071e3] text-white font-semibold text-sm sm:text-base hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] border border-black/5 font-semibold text-sm sm:text-base hover:bg-[#e8e8ed] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] text-[#86868b] tracking-widest uppercase font-medium">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#86868b]/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[#86868b] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

