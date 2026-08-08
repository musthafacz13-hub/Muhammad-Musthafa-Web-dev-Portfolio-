'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Palette } from 'lucide-react';

const SERVICES = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Wireframing, user interface layouts, and interactive prototypes in Figma with a focus on usability and clarity.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building clean, fast, and responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Interface Design',
    description: 'Designing intuitive mobile app screens for iOS and Android following modern design guidelines.',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Services Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          What I Do
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Services &amp; Capabilities
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 overflow-hidden sm:overflow-visible">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          // Left card enters from left (-30px), middle from center (0px), right card from right (+30px)
          const xOffset = idx === 0 ? -30 : idx === 2 ? 30 : 0;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: xOffset, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#515154] dark:text-[#d1d1d6] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technologies Section Header */}
      <div id="tech" className="flex flex-col items-start gap-1.5 mb-8 pt-8 border-t border-black/5 dark:border-white/10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Tech Stack
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Tools &amp; Technologies
        </h3>
      </div>

      {/* Tech Stack Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'React & Next.js 15', category: 'Frontend Frameworks', desc: 'App Router, Server Components, and responsive rendering' },
          { name: 'TypeScript', category: 'Language', desc: 'Type safety and clean component prop definitions' },
          { name: 'Tailwind CSS', category: 'Styling', desc: 'Responsive layouts and utility-first styling' },
          { name: 'Figma', category: 'Design & Prototyping', desc: 'Wireframes, UI layouts, and interactive prototypes' },
          { name: 'Framer Motion', category: 'Motion Design', desc: 'Subtle UI animations and smooth page transitions' },
          { name: 'Vercel & Git', category: 'Deployment & Versioning', desc: 'Version control with Git and hosting on Vercel' },
        ].map((tech, idx) => {
          // Columns in 3-col layout: 0 (left -25px), 1 (center 0px), 2 (right +25px)
          const colIndex = idx % 3;
          const xOffset = colIndex === 0 ? -25 : colIndex === 2 ? 25 : 0;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: xOffset, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-5 rounded-2xl border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-full">
                    {tech.category}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1d1d1f] dark:text-white tracking-tight group-hover:text-[#0071e3] transition-colors">
                  {tech.name}
                </h4>
                <p className="text-xs text-[#515154] dark:text-[#d1d1d6] leading-relaxed mt-1.5">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

