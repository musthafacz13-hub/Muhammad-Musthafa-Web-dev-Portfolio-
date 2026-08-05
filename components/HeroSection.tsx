'use client';

import React from 'react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center py-16 px-6 sm:px-12 overflow-hidden">
      {/* Main Title & Hero Content */}
      <div className="max-w-4xl text-center relative z-10 flex flex-col items-center">
        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight font-sans text-[#1d1d1f]"
        >
          Musthafa
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#515154] font-medium tracking-tight max-w-2xl"
        >
          Web Developer, Freelancer &amp; Cybersecurity Learner
        </motion.p>

        {/* Short Mission / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#86868b] max-w-xl font-normal leading-relaxed"
        >
          Crafting high-performance web applications, secure digital systems, and minimalist user experiences with modern engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#0071e3] text-white font-medium text-sm sm:text-base hover:bg-[#0077ed] transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] border border-black/5 font-medium text-sm sm:text-base hover:bg-[#e8e8ed] transition-all duration-200 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-[#86868b] tracking-wider uppercase font-medium">
          Scroll to discover
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#86868b]/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[#86868b] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
