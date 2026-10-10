'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Repeat2 } from 'lucide-react';
import { footerLinks } from '@/lib/data';

const floatingSkills = [
  { label: 'React', top: '10%', left: '5%', delay: 0 },
  { label: 'UI/UX', top: '20%', right: '8%', delay: 1 },
  { label: 'Python', top: '70%', left: '8%', delay: 2 },
  { label: 'Figma', top: '80%', right: '10%', delay: 0.5 },
  { label: 'Guitar', top: '45%', left: '3%', delay: 1.5 },
  { label: 'Spanish', top: '55%', right: '4%', delay: 2.5 },
];

export default function CtaFooter() {
  return (
    <>
      {/* CTA Section */}
      <section id="cta" className="relative px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-emerald-500/10 p-8 text-center backdrop-blur-xl sm:p-14"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[80px]" />
            <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-teal-500/15 blur-[60px]" />
          </div>

          {/* Floating skill badges */}
          {floatingSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md sm:block"
              style={{
                top: skill.top,
                left: skill.left,
                right: skill.right,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: skill.delay,
                ease: 'easeInOut',
              }}
            >
              {skill.label}
            </motion.div>
          ))}

          <div className="relative z-10">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30">
              <Repeat2 className="h-7 w-7 text-slate-950" strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Find Your Skill Match?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              You know something someone wants to learn. Someone knows something
              you want to learn.
            </p>

            <a
              href="/find-match"
              className="group relative mx-auto mt-8 flex w-fit items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Find Your Match
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 px-4 py-12 backdrop-blur-md">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="max-w-xs">
              <a href="#home" className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500">
                  <Repeat2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold text-white">
                  Skill<span className="text-cyan-400">Swap</span>
                </span>
              </a>
              <p className="mt-3 text-sm text-slate-400">
                Share skills. Learn together. Grow together.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-slate-500">© 2026 SkillSwap</p>
          </div>
        </div>
      </footer>
    </>
  );
}
