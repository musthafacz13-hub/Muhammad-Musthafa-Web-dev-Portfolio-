'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Code, Palette } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          My Background
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Main Story Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 glass-card p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/10 flex flex-col justify-between"
        >
          <div className="space-y-4 text-base sm:text-lg text-[#1d1d1f]/90 dark:text-white/90 leading-relaxed font-normal">
            <p>
              Hi, I&apos;m <strong className="font-semibold text-[#1d1d1f] dark:text-white">Muhammed Musthafa</strong>, a UI/UX designer and web developer based in Kozhikode, Kerala, India.
            </p>
            <p className="text-[#424245] dark:text-[#e5e5ea] text-base leading-relaxed">
              I design clean web and mobile user interfaces in Figma, and build responsive frontend applications using React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-[#515154] dark:text-[#d1d1d6] text-base leading-relaxed">
              I focus on clear visual hierarchy, accessible interactions, and practical code structures that scale smoothly across devices.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex items-center gap-2.5 text-xs font-medium text-[#86868b] dark:text-[#a1a1a6]">
            <MapPin className="w-4 h-4 text-[#0071e3] shrink-0" />
            <span>Kozhikode, Kerala, India</span>
          </div>
        </motion.div>

        {/* Quick Focus Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 flex flex-col gap-4 justify-between"
        >
          <div className="glass-card p-6 rounded-3xl border border-black/5 dark:border-white/10 flex-1 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white tracking-tight">Design Focus</h3>
            <p className="text-xs text-[#515154] dark:text-[#d1d1d6] mt-1.5 leading-relaxed">
              Figma wireframing, component libraries, layout systems, and user interface prototypes.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-black/5 dark:border-white/10 flex-1 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#1d1d1f]/10 dark:bg-white/10 text-[#1d1d1f] dark:text-white flex items-center justify-center mb-3">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white tracking-tight">Frontend Focus</h3>
            <p className="text-xs text-[#515154] dark:text-[#d1d1d6] mt-1.5 leading-relaxed">
              Semantic HTML, modern CSS, TypeScript, React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

