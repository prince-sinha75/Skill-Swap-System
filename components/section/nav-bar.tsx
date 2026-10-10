'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Repeat2 } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6',
          scrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110">
            <Repeat2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Skill<span className="text-cyan-400">Swap</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                activeSection === link.href
                  ? 'text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white',
              )}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            Log In
          </a>
          <a
            href="/find-match"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-400/50"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Find Your Match
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-200 transition-colors hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    activeSection === link.href
                      ? 'bg-cyan-500/10 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
                <a
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Log In
                </a>
                <a
                  href="/find-match"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950"
                >
                  Find Your Match
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
