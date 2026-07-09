'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <section
      className="relative flex min-h-[560px] items-center overflow-hidden bg-neutral-900 py-24 lg:min-h-[640px] lg:py-0"
      role="banner"
      aria-label="Sta. Catalina College PAASCU 2026 Home Hero"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src="/schoolbldg7.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover object-[68%_center]"
        />

        {/* Dark scrim for text contrast, matching the reference */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/80
            via-black/55
            via-[45%]
            to-black/10
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center px-6 lg:px-16">
        <div className="max-w-[640px]">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            PAASCU Accreditation 2026
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            <span className="block">Sta. Catalina</span>
            <span className="block">College Inc.</span>
            <span className="mt-2 block text-2xl font-bold text-amber-300 sm:text-3xl lg:text-4xl">
              Biñan, Laguna
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-base leading-7 text-white/75 sm:text-lg">
            Integrated Basic Education Department self-study portal for
            institutional documents, accreditation evidence, and quality
            assurance updates.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/school-profile"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-red-700
                px-6
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-red-800
              "
            >
              Explore School Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/summary-of-ratings"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/30
                bg-white/10
                px-6
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/20
              "
            >
              <FileText className="h-4 w-4" />
              View Ratings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
