'use client';

import { motion } from 'framer-motion';
import { Users, Repeat2, TrendingUp } from 'lucide-react';
import { aboutValues } from '@/lib/data';
import { SectionHeading } from './section-heading';

const iconMap = { Users, Repeat2, TrendingUp };

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          tag="About Us"
          title="Learning Works Better Together."
          subtitle="SkillSwap is a platform where people exchange knowledge, discover new skills, and connect with others who share similar learning goals."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {aboutValues.map((value, i) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 text-center"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
