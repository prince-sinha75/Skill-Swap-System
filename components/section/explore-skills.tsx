'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SectionHeading } from './section-heading';

const skillImages: Record<string, string> = {
  Technology: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Design: 'https://images.pexels.com/photos/16313664/pexels-photo-16313664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Photography: 'https://images.pexels.com/photos/35001053/pexels-photo-35001053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Music: 'https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Languages: 'https://images.pexels.com/photos/13745480/pexels-photo-13745480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Business: 'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  Writing: 'https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'Personal Development': 'https://images.pexels.com/photos/32417518/pexels-photo-32417518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const skillImageFallback = skillImages.Technology;

const rowOne = [
  'Technology', 'Design', 'Photography', 'Music', 'Languages', 'Business',
  'Writing', 'Marketing', 'Programming', 'Video Editing', 'Guitar', 'UI/UX',
  'Python', 'React', 'JavaScript',
];

const rowTwo = [
  'Figma', 'Java', 'Digital Marketing', 'Node.js', 'TypeScript', 'Graphic Design',
  'Spanish', 'French', 'Piano', 'SEO', 'Content Writing', 'Leadership',
  'Time Management', 'Music Production', 'Illustrator', 'Photography',
];

const skillImageByName: Record<string, string> = {
  ...skillImages,
  Marketing: skillImages.Business,
  Programming: skillImages.Technology,
  'Video Editing': skillImages.Photography,
  Guitar: skillImages.Music,
  'UI/UX': skillImages.Design,
  Python: skillImages.Technology,
  React: skillImages.Technology,
  JavaScript: skillImages.Technology,
  Figma: skillImages.Design,
  Java: skillImages.Technology,
  'Digital Marketing': skillImages.Business,
  'Node.js': skillImages.Technology,
  TypeScript: skillImages.Technology,
  'Graphic Design': skillImages.Design,
  Spanish: skillImages.Languages,
  French: skillImages.Languages,
  Piano: skillImages.Music,
  SEO: skillImages.Business,
  'Content Writing': skillImages.Writing,
  Leadership: skillImages['Personal Development'],
  'Time Management': skillImages['Personal Development'],
  'Music Production': skillImages.Music,
  Illustrator: skillImages.Design,
};

export default function ExploreSkills() {
  const [query, setQuery] = useState('');

  return (
    <section id="explore" className="relative overflow-hidden px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Explore Skills"
          title="Find your next skill"
          subtitle="Choose something you want to learn, then find someone who can help you grow."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What do you want to learn?"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-base text-white placeholder:text-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl space-y-5">
        <MarqueeRow skills={rowOne} reverse={false} onSelect={setQuery} />
        <MarqueeRow skills={rowTwo} reverse onSelect={setQuery} />
        <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />
      </div>
    </section>
  );
}

function MarqueeRow({
  skills,
  reverse,
  onSelect,
}: {
  skills: string[];
  reverse: boolean;
  onSelect: (skill: string) => void;
}) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="mask-fade-x mx-auto max-w-5xl overflow-hidden py-1">
      <div className={`flex w-max gap-5 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {repeatedSkills.map((skill, index) => (
          <button
            key={`${skill}-${index}`}
            type="button"
            onClick={() => onSelect(skill)}
            className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-base font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skillImageByName[skill] || skillImageFallback}
              alt=""
              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-110"
            />
            <span>{skill}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
