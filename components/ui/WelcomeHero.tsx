'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { Cinzel, Inter } from 'next/font/google';
import MouseScrollIndicator from './MouseScrollIndicator';

const cinzel = Cinzel({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function WelcomeHero() {
  return (
    <section
      className={`relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-neutral-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 ${inter.className}`}
      role="banner"
      aria-label="Sta. Catalina College PAASCU 2026 home hero"
    >
      <div className="absolute inset-0">
        <Image
          src="/schoolbldg.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-red-950/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/55 via-red-950/45 to-neutral-950/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(251,191,36,0.24),transparent_32%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 shadow-lg shadow-red-950/20 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.9)]" />
          PAASCU Accreditation 2026
        </div>

        <h1
          className={`${cinzel.className} mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl`}
        >
          Sta. Catalina College Inc.
          <span className="mt-3 block bg-gradient-to-r from-amber-100 via-amber-300 to-white bg-clip-text text-transparent">
            Biñan, Laguna
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base font-medium leading-relaxed text-white/82 sm:text-lg">
          Integrated Basic Education Department self-study portal for PAASCU
          accreditation documents, institutional evidence, and quality assurance updates.
        </p>

        <div className="mt-9 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/school-profile"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-950/30 transition-all duration-200 hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-red-950"
          >
            Explore School Profile
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/summary-of-ratings"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/20 backdrop-blur-xl transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-red-950"
          >
            <FileText className="h-4 w-4" />
            View Summary of Ratings
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <MouseScrollIndicator
          tone="light"
          label="Scroll to explore"
          className="scale-90 opacity-80"
        />
      </div>
    </section>
  );
}
