'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FolderGit2, User, Wrench, Mail, FileText, ArrowRight, Github, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMMAND_ITEMS = [
  { id: 'about', title: 'About Muhammed Musthafa', category: 'Section', icon: User, href: '#about' },
  { id: 'skills', title: 'Services & Tech Stack', category: 'Section', icon: Wrench, href: '#skills' },
  { id: 'contact', title: 'Get in Touch / Contact', category: 'Section', icon: Mail, href: '#contact' },
  { id: 'cv', title: 'View CV (Google Drive)', category: 'Document', icon: FileText, href: 'https://drive.google.com/file/d/1ZCW3ssIUgUjSzqHkXIxz7MolMw2_xY5e/view?usp=drivesdk', external: true },
  { id: 'github', title: 'GitHub Profile (@musthafacz13-hub)', category: 'Social', icon: Github, href: 'https://github.com/musthafacz13-hub', external: true },
];

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = COMMAND_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-md"
        />

        {/* Command Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl glass-panel rounded-3xl shadow-2xl border border-black/10 dark:border-white/15 overflow-hidden z-10 flex flex-col max-h-[80vh]"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5 dark:border-white/10">
            <Search className="w-5 h-5 text-[#0071e3] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full bg-transparent text-base text-[#1d1d1f] dark:text-white placeholder-[#86868b] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-3 overflow-y-auto space-y-1 max-h-[380px]">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-sm text-[#86868b]">
                No matching results found.
              </div>
            ) : (
              filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-[#1d1d1f] dark:text-white">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      {item.external ? (
                        <ExternalLink className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </a>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-5 py-3 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] text-[#86868b]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono text-[10px]">ESC</kbd> to exit</span>
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono text-[10px]">⌘K / Ctrl+K</kbd> anytime</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
