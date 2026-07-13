'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import MouseScrollIndicator from './MouseScrollIndicator';

export default function WelcomeHero() {
  return (
    <section
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-neutral-950 pt-28 text-white"
      role="banner"
      aria-label="Sta. Catalina College PAASCU 2026 home hero"
    >
      <div className="absolute inset-0">
        <Image
          src="/schoolbldg6.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-red-950/30 to-neutral-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/78 via-transparent to-neutral-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(251,191,36,0.24),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white/90 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.85)]" />
            PAASCU Accreditation 2026
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-[0.96] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block whitespace-nowrap">Sta. Catalina College Inc.</span>
            <span className="mt-3 block text-amber-200">Biñan, Laguna</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/80 sm:text-lg">
            Integrated Basic Education Department self-study portal for institutional
            documents, accreditation evidence, and quality assurance updates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/school-profile"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-red-950/25 transition-all duration-200 hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-red-950"
            >
              Explore School Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/summary-of-ratings"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-red-950"
            >
              <FileText className="h-4 w-4" />
              View Ratings
            </Link>
          </div>
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