'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  UserCircle,
  Repeat2,
  CalendarClock,
  MessageCircle,
  TrendingUp,
  ArrowUpRight,
  Star,
  Check,
  User,
  Mail,
  Target,
} from 'lucide-react';
import { features } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

const iconMap = {
  BrainCircuit,
  UserCircle,
  Repeat2,
  CalendarClock,
  MessageCircle,
  TrendingUp,
};

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Features"
          title="Everything you need to swap smarter"
          subtitle="A complete peer-to-peer learning experience — from matching to collaboration to growth tracking."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const isCyan = feature.accent === 'cyan';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors',
                  isCyan
                    ? 'border-white/10 bg-gradient-to-br from-cyan-500/[0.08] to-transparent hover:border-cyan-400/30'
                    : 'border-white/10 bg-gradient-to-br from-teal-500/[0.08] to-transparent hover:border-teal-400/30',
                )}
              >
                {/* Hover glow */}
                <div
                  className={cn(
                    'pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    isCyan ? 'bg-cyan-500/15' : 'bg-teal-500/15',
                  )}
                />

                {/* Top gradient bar */}
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    isCyan ? 'from-cyan-400 to-teal-500' : 'from-teal-400 to-emerald-500',
                  )}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
                        isCyan
                          ? 'bg-gradient-to-br from-cyan-500/25 to-teal-500/10'
                          : 'bg-gradient-to-br from-teal-500/25 to-emerald-500/10',
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-6 w-6 transition-transform duration-300 group-hover:scale-110',
                          isCyan ? 'text-cyan-300' : 'text-teal-300',
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        'text-2xl font-bold transition-colors',
                        isCyan
                          ? 'text-cyan-500/20 group-hover:text-cyan-400/40'
                          : 'text-teal-500/20 group-hover:text-teal-400/40',
                      )}
                    >
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>

                  {/* Visual previews */}
                  {feature.preview === 'match' && <MatchPreview />}
                  {feature.preview === 'profile' && <ProfilePreview />}
                  {feature.preview === 'exchange' && <ExchangePreview />}
                  {feature.preview === 'schedule' && <SchedulePreview />}
                  {feature.preview === 'collaborate' && <CollaboratePreview />}
                  {feature.preview === 'growth' && <GrowthPreview />}

                  <div className="mt-auto pt-5">
                    <div
                      className={cn(
                        'flex items-center gap-1.5 text-sm font-semibold transition-colors',
                        isCyan ? 'text-slate-600 group-hover:text-cyan-300' : 'text-slate-600 group-hover:text-teal-300',
                      )}
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MatchPreview() {
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
          <div>
            <div className="text-xs font-bold text-white">Partner</div>
            <div className="text-[10px] text-slate-400">Knows React</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-cyan-300">Match</div>
        </div>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '92%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-500"
        />
      </div>
    </div>
  );
}

function ProfilePreview() {
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500">
          <User className="h-4 w-4 text-slate-950" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold text-white">Your Profile</div>
          <div className="text-[10px] text-slate-400">Level: Intermediate</div>
        </div>
      </div>
      <div className="mt-2.5 space-y-1.5">
        <div className="flex items-center gap-2 text-[10px]">
          <Target className="h-3 w-3 text-teal-400" />
          <span className="text-slate-300">Goal: Learn UI/UX Design</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <Mail className="h-3 w-3 text-teal-400" />
          <span className="text-slate-300">Teach: React, JavaScript</span>
        </div>
      </div>
      <div className="mt-2.5 flex gap-1">
        <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500" />
        <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500" />
        <div className="h-1 flex-1 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function ExchangePreview() {
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="flex items-center justify-center gap-2 text-xs font-semibold">
        <span className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-cyan-200">
          You teach React
        </span>
        <Repeat2 className="h-4 w-4 text-cyan-400" />
        <span className="rounded-lg border border-teal-400/20 bg-teal-500/10 px-2.5 py-1 text-teal-200">
          They teach UI/UX
        </span>
      </div>
    </div>
  );
}

function SchedulePreview() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const booked = [1, 3];
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-semibold text-white">This week</span>
        <span className="flex items-center gap-1 text-slate-400">
          <CalendarClock className="h-3 w-3 text-cyan-400" />
          2 sessions
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div key={i} className="text-center">
            <div className="mb-0.5 text-[9px] text-slate-500">{d}</div>
            <div
              className={cn(
                'flex h-6 items-center justify-center rounded-md text-[10px] font-semibold',
                booked.includes(i)
                  ? 'bg-gradient-to-br from-cyan-400 to-teal-500 text-slate-950'
                  : 'bg-white/5 text-slate-500',
              )}
            >
              {booked.includes(i) ? <Star className="h-3 w-3 fill-slate-950" /> : '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaboratePreview() {
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500" />
          <div className="rounded-lg rounded-tl-sm bg-white/5 px-2.5 py-1.5 text-xs text-slate-200">
            Hi! Ready to learn React?
          </div>
        </div>
        <div className="flex items-start justify-end gap-2">
          <div className="rounded-lg rounded-tr-sm bg-cyan-500/15 px-2.5 py-1.5 text-xs text-cyan-200">
            Yes! And I&apos;ll teach you UI/UX
          </div>
          <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/10 pt-2 text-[10px] text-slate-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Connected and collaborating
      </div>
    </div>
  );
}

function GrowthPreview() {
  const items = [
    { label: 'Skills learned', done: true },
    { label: 'In progress', done: true },
    { label: 'Next goal', done: false },
  ];
  return (
    <div className="mt-4 glass-strong rounded-xl p-3.5">
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <span
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full',
                item.done
                  ? 'bg-gradient-to-br from-teal-400 to-emerald-500 text-slate-950'
                  : 'border border-white/20 bg-white/5',
              )}
            >
              {item.done && <Check className="h-2.5 w-2.5" />}
            </span>
            <span className={item.done ? 'text-slate-200' : 'text-slate-500'}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
