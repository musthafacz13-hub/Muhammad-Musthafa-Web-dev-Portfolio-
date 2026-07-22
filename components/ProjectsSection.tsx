'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, Utensils, Code2, Layers, Smartphone } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Featured Project
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Selected Work
        </h2>
      </div>

      {/* Primary Featured Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        {/* Project Visual Banner Header */}
        <div className="bg-gradient-to-br from-[#1d1d1f] via-[#2d2d2f] to-[#1d1d1f] p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0071e3]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Completed
                </span>
                <span className="text-xs font-medium text-white/70 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                  Food Discovery Web Application
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Kozhikoden Ruchi
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                A modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://kozhikoden-ruchi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1d1d1f] text-sm font-semibold hover:bg-[#f5f5f7] active:scale-95 transition-all shadow-md group"
              >
                <span>View Live Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Mockup Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Utensils className="w-3.5 h-3.5 text-[#0071e3]" />
              Popular Restaurants &amp; Street Food
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Smartphone className="w-3.5 h-3.5 text-[#0071e3]" />
              Mobile-First UX
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Layers className="w-3.5 h-3.5 text-[#0071e3]" />
              Authentic Malabar Cuisine
            </span>
          </div>
        </div>

        {/* Editorial Content Body */}
        <div className="p-8 sm:p-10 space-y-8 bg-white">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 border-b border-black/5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                Role
              </span>
              <p className="text-sm font-semibold text-[#1d1d1f]">
                UI/UX Designer &amp; Frontend Developer
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                Live URL
              </span>
              <a
                href="https://kozhikoden-ruchi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#0071e3] hover:underline truncate block"
              >
                kozhikoden-ruchi.vercel.app
              </a>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                Category
              </span>
              <p className="text-sm font-semibold text-[#1d1d1f]">
                Food Discovery Web Application
              </p>
            </div>
          </div>

          {/* Detailed Narrative Description */}
          <div className="space-y-4 text-sm sm:text-base text-[#1d1d1f]/80 leading-relaxed">
            <p>
              Kozhikoden Ruchi is a modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode. The platform allows users to discover popular restaurants, cafés, street food, and authentic Malabar cuisine through a clean, intuitive, and mobile-first user experience.
            </p>
            <p className="text-[#86868b]">
              The project focuses on simplicity, accessibility, and elegant design while making it easy for users to find the best local food destinations. Every screen was designed with usability, visual clarity, and responsive performance in mind to provide a seamless experience across all devices.
            </p>
          </div>

          {/* Responsibilities List */}
          <div className="pt-6 border-t border-black/5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Key Responsibilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1d1d1f]/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Designed the complete UI/UX</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Planned the user flow and information architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Built a responsive frontend</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Optimized the interface for mobile and desktop</span>
              </li>
              <li className="flex items-start gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Focused on clean navigation and user-friendly interactions</span>
              </li>
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#86868b] mr-2">Tech Stack:</span>
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#1d1d1f]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://kozhikoden-ruchi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
            >
              <span>Visit Kozhikoden Ruchi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

