'use client';

import React from 'react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center py-16 px-6 sm:px-12 overflow-hidden select-none">
      {/* Main Title & Hero Content */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
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
          Designing and building clean, responsive web applications and user interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 shadow-md flex items-center gap-2 group"
          >
            <span>Get in Touch</span>
            <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="#about"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] border border-black/5 text-[#1d1d1f] text-sm font-medium hover:bg-[#e8e8ed] active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <span>About Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
