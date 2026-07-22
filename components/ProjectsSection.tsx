'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Layers, Smartphone, Monitor, Code } from 'lucide-react';

const PROJECT_PLACEHOLDERS = [
  {
    id: 1,
    title: 'Digital Product Showcase',
    category: 'UI/UX & Web Application',
    description: 'An Apple-inspired full-stack experience featuring fluid micro-interactions and minimalist product presentation.',
    tag: 'Web & Mobile',
    span: 'col-span-1 lg:col-span-2',
    icon: Monitor,
  },
  {
    id: 2,
    title: 'Mobile Application Suite',
    category: 'iOS & Android Experience',
    description: 'Thoughtful mobile interaction design with high-fidelity prototyping and smooth gesture mechanics.',
    tag: 'Mobile App',
    span: 'col-span-1',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Design System & Component Vault',
    category: 'Design Engineering',
    description: 'A modular, accessible UI design system built with custom token architecture and spring physics.',
    tag: 'Design System',
    span: 'col-span-1',
    icon: Layers,
  },
  {
    id: 4,
    title: 'AI-Powered Creative Tool',
    category: 'AI Product Concept',
    description: 'Intelligent interface design leveraging modern generative AI workflows to streamline content creation.',
    tag: 'AI Full-Stack',
    span: 'col-span-1 lg:col-span-2',
    icon: Sparkles,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          04 — Selected Works
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-2xl mt-1 font-normal">
          Upcoming digital products and custom interface designs currently under development.
        </p>
      </div>

      {/* Apple Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECT_PLACEHOLDERS.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl overflow-hidden border border-black/5 hover:border-black/15 transition-all duration-300 group flex flex-col justify-between ${project.span}`}
            >
              {/* Top Content Info */}
              <div className="p-8 sm:p-10 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#86868b]">
                    {project.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Apple-Style Image / Frame Placeholder with "Coming Soon" */}
              <div className="mx-8 mb-8 sm:mx-10 sm:mb-10 rounded-2xl bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] border border-black/5 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px] group-hover:scale-[1.01] transition-transform duration-300">
                {/* Subtle Glass Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Coming Soon Glass Pill */}
                <div className="relative z-10 glass-pill px-6 py-3 rounded-full flex items-center gap-3 border border-black/10 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-sm sm:text-base font-bold tracking-tight text-[#1d1d1f]">
                    Coming Soon
                  </span>
                </div>

                <span className="relative z-10 mt-3 text-xs font-mono uppercase text-[#86868b] tracking-widest">
                  Project In Active Development
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
