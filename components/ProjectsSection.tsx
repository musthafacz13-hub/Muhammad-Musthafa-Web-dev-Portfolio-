'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, Utensils, Globe, Layers, Smartphone, Sparkles, Layout } from 'lucide-react';

const PROJECTS = [
  {
    id: 'kozhikoden-ruchi',
    name: 'Kozhikoden Ruchi',
    category: 'Food Discovery Web Application',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://kozhikoden-ruchi.vercel.app/',
    urlDisplay: 'kozhikoden-ruchi.vercel.app',
    status: 'Completed',
    summary: 'A modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode.',
    description: [
      'Kozhikoden Ruchi is a modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode. The platform allows users to discover popular restaurants, cafés, street food, and authentic Malabar cuisine through a clean, intuitive, and mobile-first user experience.',
      'The project focuses on simplicity, accessibility, and elegant design while making it easy for users to find the best local food destinations. Every screen was designed with usability, visual clarity, and responsive performance in mind to provide a seamless experience across all devices.',
    ],
    highlights: [
      { icon: Utensils, label: 'Popular Restaurants & Street Food' },
      { icon: Smartphone, label: 'Mobile-First UX' },
      { icon: Layers, label: 'Authentic Malabar Cuisine' },
    ],
    responsibilities: [
      'Designed the complete UI/UX',
      'Planned the user flow and information architecture',
      'Built a responsive frontend',
      'Optimized the interface for mobile and desktop',
      'Focused on clean navigation and user-friendly interactions',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    category: 'Portfolio Website',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://muhammad-musthafa-web-dev-portfolio.vercel.app/',
    urlDisplay: 'muhammad-musthafa-web-dev-portfolio.vercel.app',
    status: 'Completed',
    summary: 'A modern personal portfolio website designed and developed to present my work, projects, and design approach through a clean, minimal, and user-focused experience.',
    description: [
      "A modern personal portfolio website designed and developed to present my work, projects, and design approach through a clean, minimal, and user-focused experience. Inspired by Apple's design philosophy, the portfolio emphasizes clarity, elegant typography, smooth interactions, and responsive layouts to create a professional digital presence.",
      'The website showcases my real projects, including UI/UX case studies and web applications, while reflecting my passion for creating intuitive, accessible, and visually refined digital experiences. Every section is designed with careful attention to usability, visual hierarchy, performance, and responsiveness across desktop, tablet, and mobile devices.',
    ],
    highlights: [
      { icon: Layout, label: 'Apple-Inspired Visual System' },
      { icon: Sparkles, label: 'Smooth Motion & Animations' },
      { icon: Globe, label: 'Fully Responsive Layout' },
    ],
    responsibilities: [
      'Designed the complete UI/UX',
      'Created the visual design system',
      'Planned the information architecture',
      'Developed the responsive frontend',
      'Built reusable UI components',
      'Implemented smooth animations and interactions',
      'Optimized performance and accessibility',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Featured Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Selected Work
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                      {project.status}
                    </span>
                    <span className="text-xs font-medium text-white/70 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {project.name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1d1d1f] text-sm font-semibold hover:bg-[#f5f5f7] active:scale-95 transition-all shadow-md group"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Highlights Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-white/70">
                {project.highlights.map((hl) => {
                  const Icon = hl.icon;
                  return (
                    <span key={hl.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-[#0071e3]" />
                      {hl.label}
                    </span>
                  );
                })}
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
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                    Live URL
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0071e3] hover:underline truncate block"
                  >
                    {project.urlDisplay}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                    Category
                  </span>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Detailed Narrative Description */}
              <div className="space-y-4 text-sm sm:text-base text-[#1d1d1f]/80 leading-relaxed">
                {project.description.map((paragraph, i) => (
                  <p key={i} className={i === 1 ? 'text-[#86868b]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Responsibilities List */}
              <div className="pt-6 border-t border-black/5 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  Key Responsibilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1d1d1f]/80">
                  {project.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#86868b] mr-2">Tech Stack:</span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#1d1d1f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  <span>Visit {project.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

