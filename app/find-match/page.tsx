'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Repeat2, Search, X, Check,
  Sparkles, Sunrise, Sun, Moon, User, Coffee, Users, Briefcase,
  Calendar, Clock, Zap, Repeat,
} from 'lucide-react';
import {
  matchSkillOptions, skillLevels, availabilityDays,
  availabilityTimes, sessionDurations, connectionTypes,
  matchSteps, howMatchingWorks,
} from '@/lib/data';
import { cn } from '@/lib/utils';

const levelIcons: Record<string, typeof User> = {
  beginner: Sparkles,
  intermediate: Zap,
  advanced: Repeat,
};

const timeIcons: Record<string, typeof Sun> = {
  morning: Sunrise,
  afternoon: Sun,
  evening: Moon,
};

const connectionIcons: Record<string, typeof User> = {
  User, Coffee, Users, Briefcase,
};

type MatchData = {
  skillsToTeach: string[];
  skillsToLearn: string[];
  skillLevel: string;
  availabilityDays: string[];
  availabilityTime: string;
  sessionDuration: number;
  connectionType: string;
};

const initialData: MatchData = {
  skillsToTeach: [],
  skillsToLearn: [],
  skillLevel: '',
  availabilityDays: [],
  availabilityTime: '',
  sessionDuration: 0,
  connectionType: '',
};

type Phase = 'intro' | 'setup' | 'account' | 'matching' | 'results';

export default function FindMatchPage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [data, setData] = useState<MatchData>(initialData);

  useEffect(() => {
    const skill = new URLSearchParams(window.location.search).get('skill');
    if (skill && matchSkillOptions.includes(skill)) {
      setData((current) => ({
        ...current,
        skillsToLearn: current.skillsToLearn.includes(skill)
          ? current.skillsToLearn
          : [skill],
      }));
    }
  }, []);

  const progress = useMemo(() => {
    if (phase !== 'setup') return 0;
    return ((step + 1) / matchSteps.length) * 100;
  }, [phase, step]);

  const canProceed = useMemo(() => {
    switch (step) {
      case 0: return data.skillsToTeach.length > 0;
      case 1: return data.skillsToLearn.length > 0;
      case 2: return data.skillLevel !== '';
      case 3: return data.availabilityDays.length > 0 && data.availabilityTime !== '' && data.sessionDuration > 0;
      case 4: return true;
      default: return false;
    }
  }, [step, data]);

  const handleNext = () => {
    if (step < matchSteps.length - 1) {
      setStep(step + 1);
    } else {
      setPhase('account');
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleFindMatch = () => {
    setPhase('matching');
    setTimeout(() => setPhase('results'), 3000);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[120px] animate-float" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px] animate-float [animation-delay:2s]" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid mask-fade-b opacity-20" />

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
        <nav className="glass-strong flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 shadow-lg shadow-black/20 sm:px-6">
          <a href="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110">
              <Repeat2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Skill<span className="text-cyan-400">Swap</span>
            </span>
          </a>
          <a
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            Log In
          </a>
        </nav>
      </header>

      <div className="px-4 pb-20 pt-28 sm:pt-32">
        <AnimatePresence mode="wait">
          {/* INTRO PHASE */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-4xl"
            >
              {/* Hero */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Let&apos;s find your perfect skill exchange
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  Find Your <span className="text-gradient">Skill Match</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-300"
                >
                  Tell us what you know, what you want to learn, and when
                  you&apos;re available. We&apos;ll help you discover people with
                  complementary skills.
                </motion.p>
              </div>

              {/* Visual exchange animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative mx-auto mt-12 max-w-2xl"
              >
                <ExchangeVisual />
              </motion.div>

              {/* How matching works */}
              <div className="mt-16">
                <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
                  How Matching Works
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {howMatchingWorks.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="glass relative overflow-hidden rounded-2xl p-5"
                    >
                      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl" />
                      <div className="relative">
                        <span className="text-2xl font-bold text-cyan-400/30">
                          {item.step}
                        </span>
                        <h3 className="mt-2 text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-400">
                          {item.description}
                        </p>
                      </div>
                      {i < howMatchingWorks.length - 1 && (
                        <ArrowRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-slate-700 lg:block" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Start button */}
              <div className="mt-12 text-center">
                <button
                  onClick={() => { setPhase('setup'); setStep(0); }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50 animate-pulse-glow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Matching
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>
            </motion.div>
          )}

          {/* SETUP PHASE */}
          {phase === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-3xl"
            >
              {/* Progress indicator */}
              <ProgressIndicator step={step} progress={progress} />

              {/* Step content */}
              <div className="glass-strong mt-8 rounded-3xl p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 0: Skills to teach */}
                    {step === 0 && (
                      <SkillStep
                        title="What Can You Teach?"
                        subtitle="Choose the skills you can confidently share with another learner."
                        selected={data.skillsToTeach}
                        onToggle={(s) => setData(d => ({
                          ...d,
                          skillsToTeach: d.skillsToTeach.includes(s)
                            ? d.skillsToTeach.filter(x => x !== s)
                            : [...d.skillsToTeach, s],
                        }))}
                        accentColor="teal"
                      />
                    )}

                    {/* Step 1: Skills to learn */}
                    {step === 1 && (
                      <>
                        <SkillStep
                          title="What Do You Want to Learn?"
                          subtitle="Choose the skills you'd like to learn from someone else."
                          selected={data.skillsToLearn}
                          onToggle={(s) => setData(d => ({
                            ...d,
                            skillsToLearn: d.skillsToLearn.includes(s)
                              ? d.skillsToLearn.filter(x => x !== s)
                              : [...d.skillsToLearn, s],
                          }))}
                          accentColor="cyan"
                        />
                        {/* Two-way exchange visual */}
                        {data.skillsToTeach.length > 0 && data.skillsToLearn.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 flex items-center justify-center gap-3"
                          >
                            <div className="flex flex-wrap justify-center gap-1.5">
                              {data.skillsToTeach.slice(0, 3).map(s => (
                                <span key={s} className="rounded-lg border border-teal-400/30 bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-200">
                                  {s}
                                </span>
                              ))}
                            </div>
                            <Repeat2 className="h-5 w-5 text-cyan-400" />
                            <div className="flex flex-wrap justify-center gap-1.5">
                              {data.skillsToLearn.slice(0, 3).map(s => (
                                <span key={s} className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    )}

                    {/* Step 2: Skill level */}
                    {step === 2 && (
                      <div>
                        <StepHeader title="What's Your Skill Level?" subtitle="Tell us about your current experience level." />
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                          {skillLevels.map((level) => {
                            const Icon = levelIcons[level.value] || Sparkles;
                            const isActive = data.skillLevel === level.value;
                            return (
                              <button
                                key={level.value}
                                onClick={() => setData(d => ({ ...d, skillLevel: level.value }))}
                                className={cn(
                                  'group relative overflow-hidden rounded-2xl border p-5 text-left transition-all',
                                  isActive
                                    ? 'border-cyan-400/40 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]',
                                )}
                              >
                                {isActive && (
                                  <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500">
                                    <Check className="h-3 w-3 text-slate-950" />
                                  </div>
                                )}
                                <div className={cn(
                                  'mb-3 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-white/10 transition-transform group-hover:scale-110',
                                  isActive ? 'bg-gradient-to-br from-cyan-400 to-teal-500' : 'bg-white/5',
                                )}>
                                  <Icon className={cn('h-5 w-5', isActive ? 'text-slate-950' : 'text-cyan-400')} />
                                </div>
                                <h3 className="text-base font-bold text-white">{level.label}</h3>
                                <p className="mt-1 text-xs text-slate-400">{level.description}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Availability */}
                    {step === 3 && (
                      <div>
                        <StepHeader title="When Are You Available?" subtitle="Select your preferred days, time, and session duration." />

                        {/* Days */}
                        <div className="mt-8">
                          <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                            Days
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {availabilityDays.map((day) => {
                              const isActive = data.availabilityDays.includes(day.value);
                              return (
                                <button
                                  key={day.value}
                                  onClick={() => setData(d => ({
                                    ...d,
                                    availabilityDays: d.availabilityDays.includes(day.value)
                                      ? d.availabilityDays.filter(x => x !== day.value)
                                      : [...d.availabilityDays, day.value],
                                  }))}
                                  className={cn(
                                    'rounded-xl border px-4 py-2.5 text-sm font-medium transition-all',
                                    isActive
                                      ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                                      : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white',
                                  )}
                                >
                                  {day.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Preferred time */}
                        <div className="mt-6">
                          <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                            Preferred Time
                          </label>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {availabilityTimes.map((time) => {
                              const Icon = timeIcons[time.value] || Sun;
                              const isActive = data.availabilityTime === time.value;
                              return (
                                <button
                                  key={time.value}
                                  onClick={() => setData(d => ({ ...d, availabilityTime: time.value }))}
                                  className={cn(
                                    'group flex items-center gap-3 rounded-xl border p-4 transition-all',
                                    isActive
                                      ? 'border-cyan-400/40 bg-cyan-500/10'
                                      : 'border-white/10 bg-white/5 hover:border-white/20',
                                  )}
                                >
                                  <div className={cn(
                                    'flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 transition-transform group-hover:scale-110',
                                    isActive ? 'bg-gradient-to-br from-cyan-400 to-teal-500' : 'bg-white/5',
                                  )}>
                                    <Icon className={cn('h-4 w-4', isActive ? 'text-slate-950' : 'text-cyan-400')} />
                                  </div>
                                  <span className={cn('text-sm font-semibold', isActive ? 'text-white' : 'text-slate-300')}>
                                    {time.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Session duration */}
                        <div className="mt-6">
                          <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                            Session Duration
                          </label>
                          <div className="flex flex-wrap gap-3">
                            {sessionDurations.map((dur) => {
                              const isActive = data.sessionDuration === dur.value;
                              return (
                                <button
                                  key={dur.value}
                                  onClick={() => setData(d => ({ ...d, sessionDuration: dur.value }))}
                                  className={cn(
                                    'flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all',
                                    isActive
                                      ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                                      : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white',
                                  )}
                                >
                                  <Clock className="h-4 w-4" />
                                  {dur.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Connection preference */}
                    {step === 4 && (
                      <div>
                        <StepHeader
                          title="What Kind of Connection Are You Looking For?"
                          subtitle="This is optional — choose what fits your learning style."
                        />
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          {connectionTypes.map((conn) => {
                            const Icon = connectionIcons[conn.icon] || User;
                            const isActive = data.connectionType === conn.value;
                            return (
                              <button
                                key={conn.value}
                                onClick={() => setData(d => ({
                                  ...d,
                                  connectionType: d.connectionType === conn.value ? '' : conn.value,
                                }))}
                                className={cn(
                                  'group relative overflow-hidden rounded-2xl border p-5 text-left transition-all',
                                  isActive
                                    ? 'border-cyan-400/40 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]',
                                )}
                              >
                                {isActive && (
                                  <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500">
                                    <Check className="h-3 w-3 text-slate-950" />
                                  </div>
                                )}
                                <div className="flex items-center gap-3">
                                  <div className={cn(
                                    'flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 transition-transform group-hover:scale-110',
                                    isActive ? 'bg-gradient-to-br from-cyan-400 to-teal-500' : 'bg-white/5',
                                  )}>
                                    <Icon className={cn('h-5 w-5', isActive ? 'text-slate-950' : 'text-cyan-400')} />
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-bold text-white">{conn.label}</h3>
                                    <p className="mt-0.5 text-xs text-slate-400">{conn.description}</p>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className={cn(
                      'flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold transition-colors',
                      step === 0
                        ? 'cursor-not-allowed text-slate-700'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    )}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {step < matchSteps.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed}
                      className={cn(
                        'group relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 text-sm font-bold transition-all',
                        canProceed
                          ? 'bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50'
                          : 'cursor-not-allowed bg-white/5 text-slate-600',
                      )}
                    >
                      Continue
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleFindMatch}
                      className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50 animate-pulse-glow"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Find My Match
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>
                  )}
                </div>

                {!canProceed && step < matchSteps.length - 1 && (
                  <p className="mt-3 text-center text-xs text-slate-500">
                    {step === 0 && 'Select at least one skill you can teach'}
                    {step === 1 && 'Select at least one skill you want to learn'}
                    {step === 2 && 'Choose your skill level'}
                    {step === 3 && 'Select your days, preferred time, and session duration'}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ACCOUNT PHASE */}
          {phase === 'account' && (
            <motion.div
              key="account"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-2xl"
            >
              <div className="glass-strong glow-soft rounded-3xl p-8 text-center sm:p-12">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30"
                >
                  <Check className="h-8 w-8 text-slate-950" />
                </motion.div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Your skill match is <span className="text-gradient">almost ready.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-lg text-slate-300">
                  Create your SkillSwap profile to save your skills, learning
                  goals, and preferences — and discover people with
                  complementary skills.
                </p>

                {/* Summary of entered data */}
                <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">I can teach</span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {data.skillsToTeach.map(s => (
                          <span key={s} className="rounded-md border border-teal-400/20 bg-teal-500/10 px-2 py-1 text-xs text-teal-200">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">I want to learn</span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {data.skillsToLearn.map(s => (
                          <span key={s} className="rounded-md border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 border-t border-white/10 pt-3 text-xs text-slate-400">
                      {data.skillLevel && <span>Level: <span className="text-white capitalize">{data.skillLevel}</span></span>}
                      {data.availabilityDays.length > 0 && <span>Days: <span className="text-white">{data.availabilityDays.length} selected</span></span>}
                      {data.sessionDuration > 0 && <span>Duration: <span className="text-white">{data.sessionDuration} min</span></span>}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    onClick={handleFindMatch}
                    className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Create Profile
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
                  <a
                    href="/login"
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Already have an account? Log In
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* MATCHING PHASE */}
          {phase === 'matching' && (
            <motion.div
              key="matching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-h-[60vh] flex-col items-center justify-center"
            >
              <MatchingAnimation />
            </motion.div>
          )}

          {/* RESULTS PHASE */}
          {phase === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-3xl"
            >
              <EmptyMatchState data={data} onReset={() => { setData(initialData); setStep(0); setPhase('intro'); }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 px-4 py-8 backdrop-blur-md">
        <div className="mx-auto max-w-5xl text-center">
          <a href="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500">
              <Repeat2 className="h-4 w-4 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-base font-bold text-white">
              Skill<span className="text-cyan-400">Swap</span>
            </span>
          </a>
          <p className="mt-3 text-xs text-slate-500">© 2026 SkillSwap</p>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Sub-components ---------- */

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function SkillStep({
  title, subtitle, selected, onToggle, accentColor,
}: {
  title: string;
  subtitle: string;
  selected: string[];
  onToggle: (skill: string) => void;
  accentColor: 'cyan' | 'teal';
}) {
  const [query, setQuery] = useState('');
  const filtered = query
    ? matchSkillOptions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : matchSkillOptions;

  const isTeal = accentColor === 'teal';

  return (
    <div>
      <StepHeader title={title} subtitle={subtitle} />

      {/* Search */}
      <div className="relative mt-6">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-base text-white placeholder:text-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <AnimatePresence>
            {selected.map(skill => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium',
                  isTeal
                    ? 'border-teal-400/30 bg-teal-500/10 text-teal-200'
                    : 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
                )}
              >
                {skill}
                <button
                  onClick={() => onToggle(skill)}
                  className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-white/10"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Skill options */}
      <div className="mt-5 flex flex-wrap gap-2">
        {filtered.map(skill => {
          const isSelected = selected.includes(skill);
          return (
            <motion.button
              key={skill}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggle(skill)}
              className={cn(
                'rounded-xl border px-4 py-2.5 text-sm font-medium transition-all',
                isSelected
                  ? isTeal
                    ? 'border-teal-400/40 bg-teal-500/15 text-teal-200'
                    : 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white',
              )}
            >
              {isSelected && <Check className="mr-1 inline h-3.5 w-3.5" />}
              {skill}
            </motion.button>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-sm text-slate-500">No skills found for &quot;{query}&quot;.</p>
        )}
      </div>
    </div>
  );
}

function ProgressIndicator({ step, progress }: { step: number; progress: number }) {
  return (
    <div className="relative">
      {/* Desktop horizontal */}
      <div className="hidden sm:block">
        <div className="relative">
          <div className="absolute left-0 top-5 h-0.5 w-full bg-white/10" />
          <motion.div
            className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
          <div className="relative flex justify-between">
            {matchSteps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all',
                    i <= step
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-400 to-teal-500 text-slate-950'
                      : 'border-white/10 bg-slate-900 text-slate-500',
                  )}
                >
                  {i < step ? <Check className="h-4 w-4" /> : s.num}
                </div>
                <span className={cn(
                  'text-xs font-medium',
                  i <= step ? 'text-white' : 'text-slate-500',
                )}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile compact */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-white">
            Step {step + 1} of {matchSteps.length}
          </span>
          <span className="text-sm text-slate-400">{matchSteps[step].title}</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}

function ExchangeVisual() {
  return (
    <div className="glass-strong relative rounded-3xl p-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[50px]" />

      {/* Connection line */}
      <svg className="pointer-events-none absolute left-1/2 top-0 h-full w-16 -translate-x-1/2" viewBox="0 0 60 300" fill="none" preserveAspectRatio="none">
        <motion.line
          x1="30" y1="50" x2="30" y2="250"
          stroke="url(#match-grad)" strokeWidth="2" strokeDasharray="6 8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <defs>
          <linearGradient id="match-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(174 72% 55%)" />
            <stop offset="100%" stopColor="hsl(160 60% 45%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particles */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
          animate={{ top: ['15%', '85%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative flex flex-col items-center gap-4">
        {/* You */}
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-300">You</div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {['React', 'JavaScript', 'Frontend'].map(s => (
                <span key={s} className="rounded-lg border border-teal-400/20 bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-200">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center badge */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 shadow-lg backdrop-blur-md">
          <motion.div animate={{ rotate: 180 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>
            <Repeat2 className="h-5 w-5 text-cyan-400" />
          </motion.div>
        </div>

        {/* Someone */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <div className="rounded-2xl border border-teal-400/20 bg-teal-500/5 p-4 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-300">Someone</div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {['UI/UX', 'Figma', 'Design'].map(s => (
                <span key={s} className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MatchingAnimation() {
  const steps = [
    { label: 'Your Skills', icon: Check },
    { label: 'Matching', icon: Repeat2 },
    { label: 'Compatible Skills', icon: Search },
    { label: 'Potential Matches', icon: Users },
  ];

  return (
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400/30 border-t-cyan-400"
      />
      <h2 className="text-2xl font-bold text-white">Preparing your matches...</h2>
      <p className="mt-2 text-sm text-slate-400">Finding people with complementary skills</p>

      <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.5 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/10 ring-1 ring-white/10">
                <Icon className="h-4 w-4 text-cyan-300" />
              </div>
              <span className="text-sm text-slate-300">{s.label}</span>
              {i < steps.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-slate-600" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function EmptyMatchState({ data, onReset }: { data: MatchData; onReset: () => void }) {
  return (
    <div className="text-center">
      {/* Animated illustration */}
      <div className="relative mx-auto mb-8 h-32 w-full max-w-sm">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[40px]" />
        <div className="relative flex h-full items-center justify-center gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-500/10"
          >
            <Check className="h-7 w-7 text-teal-300" />
          </motion.div>
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <Repeat2 className="h-6 w-6 text-cyan-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10"
          >
            <User className="h-7 w-7 text-cyan-300" />
          </motion.div>
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Your perfect skill exchange is <span className="text-gradient">waiting.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-lg text-slate-300">
        We don&apos;t have a suitable match for you yet. As more learners join
        SkillSwap, compatible matches will appear here.
      </p>

      {/* Summary */}
      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          {data.skillsToTeach.length > 0 && (
            <div>
              <span className="font-semibold text-teal-300">Can teach: </span>
              <span className="text-white">{data.skillsToTeach.join(', ')}</span>
            </div>
          )}
          {data.skillsToLearn.length > 0 && (
            <div>
              <span className="font-semibold text-cyan-300">Want to learn: </span>
              <span className="text-white">{data.skillsToLearn.join(', ')}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          Update My Skills
        </button>
        <a
          href="/#explore"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50"
        >
          Explore Skills
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
