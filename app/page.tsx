import ScrollProgressBar from '@/components/section/scroll-progress';
import Navbar from '@/components/section/nav-bar';
import Hero from '@/components/section/hero';
import About from '@/components/section/about';
import Features from '@/components/section/features';
import HowItWorks from '@/components/section/how-it-works';
import ExploreSkills from '@/components/section/explore-skills';
import CtaFooter from '@/components/section/cta-footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Ambient background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute left-0 top-0 h-[600px] w-full bg-gradient-to-b from-cyan-950/30 to-transparent" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <ExploreSkills />
      <CtaFooter />
    </main>
  );
}
