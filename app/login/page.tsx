'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Repeat2, ArrowRight, ArrowLeft, Mail, Lock, Eye, EyeOff, Check } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px] animate-float" />
        <div className="absolute right-1/4 bottom-0 h-[350px] w-[350px] translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px] animate-float [animation-delay:2s]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-md"
      >
        <div className="glass-strong glow-soft rounded-3xl p-8 sm:p-10">
          {/* Back link */}
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          {/* Logo */}
          <a href="/" className="mb-6 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30">
              <Repeat2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Skill<span className="text-cyan-400">Swap</span>
            </span>
          </a>

          {/* Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Log in to continue swapping skills and growing together.
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
                <Check className="h-7 w-7 text-slate-950" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Logged in!</div>
                <div className="mt-1 text-sm text-slate-400">
                  Redirecting you back home...
                </div>
              </div>
              <a
                href="/"
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-2.5 text-sm font-bold text-slate-950"
              >
                Go to Home
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-base text-white placeholder:text-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-base text-white placeholder:text-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember + forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-slate-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-white/5 accent-cyan-400"
                  />
                  Remember me
                </label>
                <a href="#" className="text-cyan-400 transition-colors hover:text-cyan-300">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50 disabled:opacity-80"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-5 w-5 rounded-full border-2 border-slate-950/30 border-t-slate-950"
                    />
                    Logging in...
                  </>
                ) : (
                  <>
                    Log In
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              {/* Sign up link */}
              <p className="text-center text-sm text-slate-400">
                Don&apos;t have an account?{' '}
                <a href="/signup" className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
                  Sign up
                </a>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </main>
  );
}
