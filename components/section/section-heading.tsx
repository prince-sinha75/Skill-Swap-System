'use client';

import { motion } from 'framer-motion';

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
}: {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-cyan-300">
        {tag}
      </div>
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-lg text-slate-300 sm:text-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
