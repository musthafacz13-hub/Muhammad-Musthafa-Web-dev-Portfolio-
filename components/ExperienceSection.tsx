'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Sparkles, Target, Compass, Code } from 'lucide-react';

const TIMELINE = [
  {
    period: '2023 — Early 2024',
    title: 'Foundational Learning & UI/UX Exploration',
    description:
      'Initiated independent study of visual hierarchy, Figma prototyping, and fundamental web technologies. Experimented with mobile UI layouts and responsive design principles.',
    type: 'Self-Directed Learning',
  },
  {
    period: '2024 — Present (1.5 Years)',
    title: 'Independent Digital Product Development',
    description:
      'Designing modern websites, mobile application interfaces, and personal digital products. Embracing AI-assisted tools to accelerate code generation, component architecture, and full-stack prototyping.',
    type: 'Active Building',
  },
  {
    period: '2025 — 2027 Vision',
    title: 'The Path to Professional Web Developer',
    description:
      'Deepening mastery of JavaScript/TypeScript fundamentals, backend systems, database modeling, and production-ready Web architecture to launch a full-time Web Development career by 2027.',
    type: 'Future Goal',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          05 — Experience
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Honest Journey &amp; Milestones
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-2xl mt-1 font-normal">
          An authentic timeline of 1.5 years of independent craft, continuous learning, and future goals.
        </p>
      </div>

      {/* Honest Experience Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 sm:p-8 rounded-3xl mb-12 border border-black/5 bg-gradient-to-r from-[#f5f5f7] via-white to-[#f5f5f7] flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1d1d1f]">Pure Authenticity Guarantee</h3>
          <p className="text-sm text-[#86868b] leading-relaxed mt-1">
            I do not have formal corporate company experience yet. I take pride in presenting my 1.5-year journey honestly, focused entirely on self-driven execution, continuous growth, and absolute dedication to craft.
          </p>
        </div>
      </motion.div>

      {/* Apple-Style Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-black/10 space-y-12">
        {TIMELINE.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0071e3] group-hover:scale-125 transition-transform duration-300 shadow-sm" />

            {/* Timeline Card */}
            <div className="glass-card p-8 rounded-3xl border border-black/5 hover:border-black/15 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-[#0071e3] px-3 py-1 rounded-full bg-[#0071e3]/10">
                  {item.period}
                </span>
                <span className="text-xs font-medium text-[#86868b] px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5">
                  {item.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
