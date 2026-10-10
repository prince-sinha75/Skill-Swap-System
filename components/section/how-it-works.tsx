'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Tags, BrainCircuit, Rocket, Check, ArrowRight } from 'lucide-react';
import { howItWorks } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

const iconMap = { UserPlus, Tags, BrainCircuit, Rocket };

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="How It Works"
          title="Four steps to your first swap"
          subtitle="A simple, guided process from profile creation to your first skill exchange."
        />

        {/* Tab buttons */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all',
                  active === i
                    ? 'border-cyan-400/40 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]',
                )}
              >
                <div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors',
                    active === i
                      ? 'bg-gradient-to-br from-cyan-400 to-teal-500 text-slate-950'
                      : 'bg-white/5 text-cyan-400',
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-cyan-300">
                    Step {step.step}
                  </div>
                  <div className="text-sm font-bold text-white">{step.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Animated content panel */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl sm:p-10">
          {/* Dotted connector line */}
          <svg
            className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 lg:block"
            preserveAspectRatio="none"
          >
            <line
              x1="10%"
              y1="50%"
              x2="90%"
              y2="50%"
              stroke="hsl(174 72% 45% / 0.3)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
          </svg>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  STEP {howItWorks[active].step}
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {howItWorks[active].title}
                </h3>
                <p className="mt-3 max-w-lg text-slate-300">
                  {howItWorks[active].description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {howItWorks[active].points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-slate-200"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 ring-1 ring-cyan-400/30">
                        <Check className="h-3 w-3 text-cyan-400" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Visual preview */}
              <StepVisual step={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StepVisual({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="glass rounded-2xl p-5">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Your Profile
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500" />
            <div>
              <div className="text-sm font-bold text-white">Your Name</div>
              <div className="text-xs text-slate-400">Experience: Intermediate</div>
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-xs text-teal-300">I can teach</div>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript'].map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-teal-400/30 bg-teal-500/10 px-3 py-1.5 text-sm font-medium text-teal-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div>
            <div className="mb-1.5 text-xs text-cyan-300">I want to learn</div>
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design'].map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="glass rounded-2xl p-5">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Add Your Skills
        </div>
        <div className="space-y-3">
          <div>
            <div className="mb-2 text-xs text-teal-300">Skills you can teach</div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'JavaScript', '+ Add skill'].map((s, i) => (
                <span
                  key={s}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-sm font-medium',
                    i === 3
                      ? 'border-dashed border-white/20 text-slate-500'
                      : 'border-teal-400/30 bg-teal-500/10 text-teal-200',
                  )}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div>
            <div className="mb-2 text-xs text-cyan-300">Skills you want to learn</div>
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Figma', '+ Add skill'].map((s, i) => (
                <span
                  key={s}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-sm font-medium',
                    i === 2
                      ? 'border-dashed border-white/20 text-slate-500'
                      : 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
                  )}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="glass rounded-2xl p-5">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          AI Match Result
        </div>
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500" />
            <div>
              <div className="text-sm font-bold text-white">You</div>
              <div className="text-xs text-slate-400">Knows React</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-bold text-white">Partner</div>
              <div className="text-xs text-slate-400">Knows UI/UX</div>
            </div>
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-slate-400">Compatibility</span>
            <span className="font-bold text-cyan-300">High</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '90%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-500"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { label: 'Skills', val: 'High' },
            { label: 'Goals', val: 'Match' },
            { label: 'Focus', val: 'Aligned' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-white/10 bg-white/5 py-2"
            >
              <div className="text-sm font-bold text-white">{m.val}</div>
              <div className="text-xs text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Start Swapping
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
        <div className="flex items-center gap-1.5 pb-3">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-xs text-slate-500">session.live</span>
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="text-slate-500"># Your first skill swap session</div>
          <div className="text-cyan-300">{'// Teaching React'}</div>
          <div className="text-teal-300">{'// Learning UI/UX Design'}</div>
          <div className="text-slate-400">{'>>> Connected and ready to grow'}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Session active
        </div>
        <span className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
          Growing together
        </span>
      </div>
    </div>
  );
}
