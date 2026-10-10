'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Repeat2, Sparkles } from 'lucide-react';
import { heroExchange } from '@/lib/data';

const floatTransition = (delay: number) => ({
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px] animate-float" />
        <div className="absolute right-1/4 top-40 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px] animate-float [animation-delay:2s]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-30" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: Text content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Share • Match • Connect • Grow
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Share Your Skills.
            <br />
            <span className="text-gradient">Discover New Ones.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-lg text-pretty text-lg text-slate-300 lg:mx-0"
          >
            Connect with people who can teach what you want to learn — while
            sharing what you already know.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="/find-match"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Find Your Match
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#explore"
              className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              Explore Skills
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-sm text-slate-400"
          >
            Learn • Teach • Connect • Grow
          </motion.p>
        </div>

        {/* Right: Skill exchange animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <ExchangeAnimation />
        </motion.div>
      </div>
    </section>
  );
}

function ExchangeAnimation() {
  const { userA, userB } = heroExchange;

  return (
    <div className="relative">
      {/* Connection glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[60px]" />

      {/* Animated SVG connection */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-full w-24 -translate-x-1/2"
        viewBox="0 0 80 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="40"
          y1="60"
          x2="40"
          y2="340"
          stroke="url(#exchange-gradient)"
          strokeWidth="2"
          strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="exchange-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(174 72% 55%)" />
            <stop offset="100%" stopColor="hsl(160 60% 45%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated particles traveling along the line */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
          animate={{
            top: ['12%', '88%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeInOut',
          }}
        />
      ))}
      {[0, 1].map((i) => (
        <motion.div
          key={`rev-${i}`}
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50"
          animate={{
            top: ['88%', '12%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1.5 + 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative flex flex-col gap-6">
        {/* User A card */}
        <motion.div animate={floatTransition(0)}>
          <UserCard user={userA} />
        </motion.div>

        {/* Center exchange badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-slate-900/80 shadow-lg backdrop-blur-md"
        >
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <Repeat2 className="h-6 w-6 text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* User B card */}
        <motion.div animate={floatTransition(2)}>
          <UserCard user={userB} />
        </motion.div>
      </div>
    </div>
  );
}

function UserCard({
  user,
}: {
  user: { label: string; knows: string[]; wantsToLearn: string[]; accent: string };
}) {
  const isCyan = user.accent === 'cyan';
  const ringColor = isCyan ? 'border-cyan-400/30' : 'border-teal-400/30';
  const glowColor = isCyan ? 'from-cyan-500/10' : 'from-teal-500/10';
  const labelColor = isCyan ? 'text-cyan-300' : 'text-teal-300';
  const badgeBorder = isCyan ? 'border-cyan-400/20 bg-cyan-500/10 text-cyan-200' : 'border-teal-400/20 bg-teal-500/10 text-teal-200';
  const wantBorder = isCyan ? 'border-teal-400/20 bg-teal-500/10 text-teal-200' : 'border-cyan-400/20 bg-cyan-500/10 text-cyan-200';

  return (
    <div className={`glass-strong rounded-2xl border ${ringColor} bg-gradient-to-br ${glowColor} to-transparent p-5`}>
      <div className={`mb-3 text-xs font-bold uppercase tracking-wider ${labelColor}`}>
        {user.label}
      </div>
      <div className="space-y-3">
        <div>
          <div className="mb-2 text-xs text-slate-400">Knows</div>
          <div className="flex flex-wrap gap-2">
            {user.knows.map((skill) => (
              <span
                key={skill}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${badgeBorder}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs text-slate-400">Wants to learn</div>
          <div className="flex flex-wrap gap-2">
            {user.wantsToLearn.map((skill) => (
              <span
                key={skill}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${wantBorder}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
