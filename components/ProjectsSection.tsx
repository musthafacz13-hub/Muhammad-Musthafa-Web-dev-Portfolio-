'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  ShieldCheck,
  KeyRound,
  Sliders,
  Keyboard,
  BookOpen,
  Sparkles,
  Layout,
  Globe,
  Flame,
  Calendar,
  Utensils,
  Smartphone,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  liveUrl: string;
  urlDisplay: string;
  status: string;
  summary: string;
  purpose: string;
  keyFeatures: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'passforge',
    name: 'PassForge',
    category: 'Security & Utility Web App',
    role: 'Product Designer & Frontend Developer',
    liveUrl: 'https://passfourge.vercel.app/',
    urlDisplay: 'passfourge.vercel.app',
    status: 'Live',
    summary:
      'PassForge is a modern, privacy-first password generator designed to help users create strong, unique, and secure passwords instantly.',
    purpose:
      'Eliminates the risks of weak or reused passwords by providing 100% client-side local password generation with real-time strength scoring and estimated crack time calculations.',
    keyFeatures: [
      'Client-side local password generation (100% private)',
      'Real-time strength evaluation & estimated crack time',
      'Customizable length & character sets (symbols, numbers, cases)',
      'One-click copy with instant micro-interaction feedback',
      'Apple, Linear, and Notion inspired minimal interface',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
  },
  {
    id: 'typeflow',
    name: 'TypeFlow',
    category: 'Educational Web App',
    role: 'Frontend Developer & UI Designer',
    liveUrl: 'https://keyboard-learner-by-musthafa.vercel.app/',
    urlDisplay: 'keyboard-learner-by-musthafa.vercel.app',
    status: 'Live',
    summary:
      'TypeFlow is an interactive typing practice web application created for beginners, school students, and first-time computer users.',
    purpose:
      'Provides a clean, distraction-free environment to learn keyboard layouts, build muscle memory, and improve typing speed and accuracy through guided practice sessions.',
    keyFeatures: [
      'Interactive typing practice lessons & guided modules',
      'Real-time WPM speed & accuracy tracking',
      'Physical keyboard key visual feedback',
      'Clean, distraction-free learning environment',
      'Accessible, mobile and desktop responsive layout',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'nexus',
    name: 'Nexus Workspace',
    category: 'Productivity Web App',
    role: 'Product Designer & Full-Stack Developer',
    liveUrl: 'https://nexus-ai-ruby-eight.vercel.app/',
    urlDisplay: 'nexus-ai-ruby-eight.vercel.app',
    status: 'Completed',
    summary:
      'Nexus is a modern productivity workspace built to deliver fast, intelligent, and natural interactions through a clean Apple-inspired user experience.',
    purpose:
      'Combines a monochrome design system with real-time response streaming to help users streamline writing, coding, research, and daily task organization.',
    keyFeatures: [
      'Real-time response streaming interface',
      'Secure authentication flow with Supabase Auth',
      'Markdown and syntax-highlighted code block rendering',
      'Conversation history management & session search',
      'Dark and Light theme toggle',
    ],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
      'Vercel',
    ],
  },
  {
    id: 'habitos',
    name: 'HabitOS',
    category: 'Productivity & SaaS',
    role: 'Product Designer & Frontend Developer',
    liveUrl: 'https://habit-tracker-khaki-five-20.vercel.app/',
    urlDisplay: 'habit-tracker-khaki-five-20.vercel.app',
    status: 'Completed',
    summary:
      'HabitOS is a premium personal habit tracking web application designed to help users build consistent daily routines.',
    purpose:
      'Provides a personalized onboarding flow, daily streak tracking, calendar visualizers, and habit analytics inspired by modern SaaS products like Linear and Notion.',
    keyFeatures: [
      'Custom habit creation & personalized profile onboarding',
      'Daily habit completion streaks & progress analytics',
      'Calendar visualization dashboard & milestone achievements',
      'Local Storage data persistence with zero account setup needed',
      'Light and Dark mode interface',
    ],
    techStack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'Vercel',
    ],
  },
  {
    id: 'kozhikoden-ruchi',
    name: 'Kozhikoden Ruchi',
    category: 'Food Discovery Web App',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://kozhikoden-ruchi.vercel.app/',
    urlDisplay: 'kozhikoden-ruchi.vercel.app',
    status: 'Completed',
    summary:
      'A modern food discovery platform created to help food lovers and travelers explore the rich culinary culture of Kozhikode.',
    purpose:
      'Simplifies destination discovery by showcasing popular restaurants, cafés, street food spots, and authentic Malabar cuisine through a mobile-first, intuitive UI.',
    keyFeatures: [
      'Categorized food & restaurant discovery grid',
      'Mobile-first responsive interface designed for travelers on the go',
      'Clean navigation & location details',
      'Fast image & content loading performance',
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
    summary:
      'An Apple-inspired digital portfolio showcasing selected design and development projects with precision, performance, and accessibility.',
    purpose:
      'Presents personal work, design approach, and frontend capabilities through a clean visual hierarchy, subtle Framer Motion transitions, and a responsive glass design system.',
    keyFeatures: [
      'Apple-inspired minimalist layout & glassmorphic design system',
      'Smooth Framer Motion scroll animations and active tab indicators',
      'Fully responsive, WCAG AA accessible layout',
      'Direct Google Forms contact integration',
    ],
    techStack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Selected Work
        </h2>
        <p className="text-base text-[#86868b] max-w-xl font-normal">
          Real web applications and design systems built with focus on user experience, performance, and modern engineering.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-black/5 hover:border-black/15 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            {/* Top Bar: Badges, Title, Role & Primary CTA */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-black/5">
              <div className="space-y-3 max-w-xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                  <span className="text-xs font-medium text-[#1d1d1f]/70 px-3 py-1 rounded-full bg-black/5">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs font-semibold text-[#86868b] tracking-wide uppercase">
                  Role: <span className="text-[#1d1d1f]">{project.role}</span>
                </p>
              </div>

              {/* Primary Action Button */}
              <div className="shrink-0 pt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-[#2d2d2f] active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-6">
              {/* Summary & Purpose */}
              <div className="space-y-2">
                <p className="text-base text-[#1d1d1f] font-medium leading-relaxed">
                  {project.summary}
                </p>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {project.purpose}
                </p>
              </div>

              {/* Key Features Bullet Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]/70 mb-3">
                  Key Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1d1d1f]/80">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footer: Tech Stack Chips & URL Link */}
            <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-[#86868b] mr-2">Tech:</span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-[11px] font-medium text-[#1d1d1f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                <span>{project.urlDisplay}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
