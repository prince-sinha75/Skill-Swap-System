import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'SkillSwap — Share Your Skills. Discover New Ones.',
  description:
    'Connect with people who can teach what you want to learn — while sharing what you already know. AI-matched peer-to-peer skill exchange.',
  openGraph: {
    title: 'SkillSwap — Share Your Skills. Discover New Ones.',
    description:
      'Connect with people who can teach what you want to learn — while sharing what you already know.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
