'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Sparkles, Code2, ShieldCheck, Layers } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WebThreads = dynamic(() => import('@/components/WebThreads'), { ssr: false });

export function HeroSection() {
  const [threadsEnabled, setThreadsEnabled] = useState(true);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 sm:px-12 overflow-hidden">
      {/* Interactive WebThreads WebGL Shader Canvas Background */}
      {threadsEnabled && (
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-50 pointer-events-auto transition-opacity duration-500">
          <WebThreads
            color1="#0071e3"
            color2="#a855f7"
            color3="#ffffff"
            speed={0.25}
            threadCount={8}
            frequency={4.5}
            spread={0.22}
            position={0.5}
            glow={0.03}
            brightness={0.8}
            opacity={0.85}
            mouseInteraction={true}
            mouseStrength={0.4}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-4xl text-center relative z-10 flex flex-col items-center">
        {/* Profile Avatar Card with Apple Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative group"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1.5 glass-card shadow-xl border border-black/10 dark:border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#f5f5f7] dark:bg-[#1c1c1e]">
              <Image
                src="/images/developer_portrait.jpg"
                alt="Muhammed Musthafa - UI/UX Designer & Web Developer"
                fill
                priority
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 112px, 128px"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Live Green Online Badge */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-[#1c1c1e]" />
            </span>
          </div>
        </motion.div>

        {/* Status Pill Badge & Shader Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7]/90 dark:bg-[#1c1c1e]/90 border border-black/5 dark:border-white/10 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-[#1d1d1f]/90 dark:text-white/90 tracking-tight">
              Available for design &amp; engineering projects
            </span>
          </div>

          <button
            type="button"
            onClick={() => setThreadsEnabled(!threadsEnabled)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0071e3]/10 dark:bg-[#0071e3]/20 border border-[#0071e3]/20 text-[#0071e3] dark:text-[#2997ff] text-xs font-semibold hover:bg-[#0071e3]/20 transition-all duration-200"
            title="Toggle WebGL Shader Threads"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WebGL Threads: {threadsEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </motion.div>

        {/* Name Heading - Strongest Visual Hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.06]"
        >
          Muhammed Musthafa
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#424245] dark:text-[#e5e5ea] font-medium tracking-tight max-w-2xl"
        >
          UI/UX Designer &amp; Web Developer
        </motion.p>

        {/* Short Mission Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#515154] dark:text-[#d1d1d6] max-w-xl font-normal leading-relaxed"
        >
          Crafting high-performance web applications, responsive interfaces, and minimalist digital experiences with precision and modern engineering.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-3.5 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#0071e3] text-white font-semibold text-sm sm:text-base hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            Explore Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1ZCW3ssIUgUjSzqHkXIxz7MolMw2_xY5e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white border border-black/5 dark:border-white/10 font-semibold text-sm sm:text-base hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 inline-flex items-center gap-2"
            aria-label="View Muhammed Musthafa's CV in Google Drive (opens in a new tab)"
          >
            <FileText className="w-4 h-4 text-[#0071e3]" />
            <span>View CV</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white border border-black/5 dark:border-white/10 font-semibold text-sm sm:text-base hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Quick Highlights Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl"
        >
          <div className="glass-card p-4 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] dark:text-white">6+</span>
            <span className="text-xs font-semibold text-[#86868b] dark:text-[#a1a1a6] mt-1">Live Applications</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0071e3] dark:text-[#2997ff]">100%</span>
            <span className="text-xs font-semibold text-[#86868b] dark:text-[#a1a1a6] mt-1">Responsive &amp; Private</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] dark:text-white">Figma + Code</span>
            <span className="text-xs font-semibold text-[#86868b] dark:text-[#a1a1a6] mt-1">Design to Deployment</span>
          </div>
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


