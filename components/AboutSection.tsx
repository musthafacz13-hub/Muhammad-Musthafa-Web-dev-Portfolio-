'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Code, Palette, Building2, ExternalLink } from 'lucide-react';

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
        {/* Main Story Box - Enters from left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 glass-card p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/10 flex flex-col justify-between"
        >
          <div className="space-y-4 text-base sm:text-lg text-[#1d1d1f]/90 dark:text-white/90 leading-relaxed font-normal">
            <p>
              Hi, I&apos;m <strong className="font-semibold text-[#1d1d1f] dark:text-white">Muhammed Musthafa</strong>, CEO at{' '}
              <a
                href="https://belen-software-studio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:underline font-semibold inline-flex items-center gap-1"
              >
                Belen Software Company
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , and a UI/UX designer and web developer based in Kozhikode, Kerala, India.
            </p>
            <p className="text-[#424245] dark:text-[#e5e5ea] text-base leading-relaxed">
              At Belen Software Studio, we craft digital products, modern web solutions, and intuitive user experiences that help businesses and students succeed.
            </p>
            <p className="text-[#515154] dark:text-[#d1d1d6] text-base leading-relaxed">
              I focus on clear visual hierarchy, accessible interactions, and clean code structures with React, Next.js, TypeScript, and Figma.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#86868b] dark:text-[#a1a1a6]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0071e3] shrink-0" />
              <span>Kozhikode, Kerala, India</span>
            </div>

            <a
              href="https://belen-software-studio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0071e3] hover:underline font-medium"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Visit Belen Software Studio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Quick Focus Cards - Enters from right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 flex flex-col gap-4 justify-between"
        >
          <a
            href="https://belen-software-studio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-3xl border border-black/5 dark:border-white/10 flex-1 flex flex-col justify-center group hover:border-[#0071e3]/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white tracking-tight">Belen Software Studio</h3>
              <ExternalLink className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
            </div>
            <p className="text-xs text-[#515154] dark:text-[#d1d1d6] mt-1.5 leading-relaxed">
              CEO &amp; Founder. Our company portfolio presenting studio services and digital software solutions.
            </p>
          </a>

          <div className="glass-card p-6 rounded-3xl border border-black/5 dark:border-white/10 flex-1 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white tracking-tight">Design &amp; Frontend</h3>
            <p className="text-xs text-[#515154] dark:text-[#d1d1d6] mt-1.5 leading-relaxed">
              Figma UI/UX design, wireframing, TypeScript, React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

