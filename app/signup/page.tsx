'use client';

import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Lock, Mail, Repeat2, User } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-white">
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
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <a href="/" className="mb-6 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30">
              <Repeat2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Skill<span className="text-cyan-400">Swap</span>
            </span>
          </a>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Create your profile
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Join SkillSwap and start sharing what you know.
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
                <div className="text-lg font-bold text-white">Profile created!</div>
                <div className="mt-1 text-sm text-slate-400">
                  Your SkillSwap journey starts here.
                </div>
              </div>
              <a
                href="/find-match"
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-2.5 text-sm font-bold text-slate-950"
              >
                Find Your Match
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Field label="Name" icon={<User className="h-5 w-5" />}>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>

              <Field label="Email" icon={<Mail className="h-5 w-5" />}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="form-input"
                />
              </Field>

              <Field label="Password" icon={<Lock className="h-5 w-5" />}>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  show={showPassword}
                  onToggle={() => setShowPassword((visible) => !visible)}
                  placeholder="Create a password"
                />
              </Field>

              <Field label="Confirm password" icon={<Lock className="h-5 w-5" />}>
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  show={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((visible) => !visible)}
                  placeholder="Confirm your password"
                />
              </Field>

              {error && <p className="text-sm text-rose-300">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-400/50 disabled:opacity-80"
              >
                {loading ? 'Creating profile...' : 'Create Profile'}
                {!loading && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <p className="text-center text-sm text-slate-400">
                Already have an account?{' '}
                <a href="/login" className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
                  Log in
                </a>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </main>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span>
        {children}
      </div>
    </div>
  );
}

function PasswordInput({
  value,
  onChange,
  show,
  onToggle,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  onToggle: () => void;
  placeholder: string;
}) {
  return (
    <>
      <input
        type={show ? 'text' : 'password'}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="form-input pr-12"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
        aria-label="Toggle password visibility"
      >
        {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </>
  );
}
