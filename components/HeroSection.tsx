'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import dynamic from 'next/dynamic';

const WebThreads = dynamic(() => import('@/components/WebThreads'), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-32 pb-12 px-5 sm:px-12 overflow-hidden">
      {/* Interactive WebThreads WebGL Shader Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40 pointer-events-none transition-opacity duration-500">
        <WebThreads
          color1="#0071e3"
          color2="#a855f7"
          color3="#ffffff"
          speed={0.2}
          threadCount={7}
          frequency={4.0}
          spread={0.2}
          position={0.5}
          glow={0.03}
          brightness={0.8}
          opacity={0.8}
          mouseInteraction={true}
          mouseStrength={0.3}
          className="w-full h-full"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7]/90 dark:bg-[#1c1c1e]/90 border border-black/5 dark:border-white/10 shadow-xs backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-[#1d1d1f]/90 dark:text-white/90 tracking-tight">
            Available for new projects &amp; collaborations
          </span>
        </motion.div>

        {/* Name Heading - Strongest Visual Hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.08] break-words"
        >
          Muhammed Musthafa
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#424245] dark:text-[#e5e5ea] font-medium tracking-tight max-w-xl"
        >
          UI/UX Designer &amp; Web Developer
        </motion.p>

        {/* Short Mission Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#515154] dark:text-[#d1d1d6] max-w-xl font-normal leading-relaxed"
        >
          Crafting high-performance web applications, responsive interfaces, and minimalist digital experiences with precision and modern engineering.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0071e3] text-white font-semibold text-sm sm:text-base hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 text-center"
          >
            Explore Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1ZCW3ssIUgUjSzqHkXIxz7MolMw2_xY5e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white border border-black/5 dark:border-white/10 font-semibold text-sm sm:text-base hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2"
            aria-label="View Muhammed Musthafa's CV in Google Drive (opens in a new tab)"
          >
            <FileText className="w-4 h-4 text-[#0071e3]" />
            <span>View CV</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white border border-black/5 dark:border-white/10 font-semibold text-sm sm:text-base hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 text-center"
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
        className="mt-12 flex flex-col items-center gap-2 pointer-events-none"
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