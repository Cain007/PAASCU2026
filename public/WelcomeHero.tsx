'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import MouseScrollIndicator from '../components/ui/MouseScrollIndicator';

export default function WelcomeHero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 lg:min-h-[940px]"
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
          // Re-tuned for the new, wider photo (more sky/lawn, tree upper-right)
          // 82% center was cropping the old tighter shot; 68% keeps the
          // building + "SCC" letters in frame without losing the sky.
          className="object-cover object-[68%_center] scale-[1.02]"
        />

        {/* Main white fade */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white
            via-white/90
            via-[30%]
            to-transparent
          "
        />

        {/* Soft ambient glow â€” moved toward upper-left to sit under the
            photo's own natural sun flare instead of competing with it */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,.65),transparent_45%)]
          "
        />

        {/* Bottom vignette â€” lightened so the new brighter photo doesn't
            get pulled back toward the old warm/orange cast */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/5
            via-transparent
            to-white/5
          "
        />

        {/* Decorative grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#991b1b_1px,transparent_1px),linear-gradient(to_bottom,#991b1b_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Logo watermark */}
        <div
          className="
            absolute
            left-[-12rem]
            top-1/2
            h-[900px]
            w-[900px]
            -translate-y-1/2
            opacity-[0.05]
            pointer-events-none
          "
        >
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1600px] items-center px-8 lg:px-16">
        <div className="max-w-[760px]">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-neutral-300
              bg-white/75
              px-6
              py-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-neutral-700
              shadow-xl
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-700 opacity-40"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-700"></span>
            </span>
            PAASCU Accreditation 2026
          </div>

          {/* Heading */}
          <h1
            className="
              mt-10
              text-5xl
              font-black
              leading-[0.88]
              tracking-[-0.05em]
              text-neutral-900
              sm:text-6xl
              md:text-7xl
              lg:text-[5.9rem]
              xl:text-[6.4rem]
            "
          >
            <span className="block">Sta. Catalina</span>
            <span className="block">College Inc.</span>
            <span
              className="
                mt-5
                block
                text-[0.42em]
                font-bold
                uppercase
                tracking-[0.22em]
                text-red-800
              "
            >
              Biñan • Laguna
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-10
              max-w-[650px]
              text-xl
              leading-9
              text-neutral-700
            "
          >
            Integrated Basic Education Department self-study portal for
            institutional documents, accreditation evidence, academic
            excellence, and quality assurance initiatives supporting the
            PAASCU Resurvey Visit 2026.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap gap-5">
            <Link
              href="/school-profile"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-red-700
                px-8
                text-base
                font-semibold
                text-white
                shadow-[0_20px_45px_rgba(127,29,29,.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-red-800
                hover:shadow-[0_30px_55px_rgba(127,29,29,.35)]
              "
            >
              Explore School Profile
              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/summary-of-ratings"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-neutral-300
                bg-white/80
                px-8
                text-base
                font-semibold
                text-neutral-900
                backdrop-blur-xl
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-xl
              "
            >
              <FileText className="h-5 w-5" />
              View Ratings
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-3 gap-5">
            <div
              className="
                rounded-2xl
                border
                border-white/60
                bg-white/75
                p-6
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div className="text-4xl font-black text-red-800">2026</div>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">
                PAASCU Resurvey Visit
              </p>
            </div>
            <div
              className="
                rounded-2xl
                border
                border-white/60
                bg-white/75
                p-6
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div className="text-4xl font-black text-red-800">248</div>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">
                Learners
              </p>
            </div>
            <div
              className="
                rounded-2xl
                border
                border-white/60
                bg-white/75
                p-6
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div className="text-4xl font-black text-red-800">36</div>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">
                Faculty & Personnel
              </p>
            </div>
          </div>
        </div>

        {/* Right Spacer */}
        <div className="hidden flex-1 lg:block" />
      </div>

      {/* Decorative Blur */}
      <div
        className="
          absolute
          right-24
          top-24
          h-80
          w-80
          rounded-full
          bg-amber-300/20
          blur-3xl
          pointer-events-none
        "
      />
      <div
        className="
          absolute
          right-80
          bottom-20
          h-48
          w-48
          rounded-full
          bg-red-700/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Floating Accreditation Card */}
      <div
        className="
          absolute
          bottom-28
          right-24
          hidden
          rounded-3xl
          border
          border-white/60
          bg-white/80
          px-8
          py-6
          backdrop-blur-2xl
          shadow-2xl
          xl:block
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Institutional Excellence
        </p>
        <h3 className="mt-3 text-2xl font-bold text-neutral-900">PAASCU</h3>
        <p className="mt-2 max-w-[240px] text-sm leading-6 text-neutral-600">
          Supporting continuous quality improvement through
          evidence-based accreditation.
        </p>
      </div>

      {/* Scroll Indicator (was imported but never rendered) */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <MouseScrollIndicator />
      </div>
    </section>
  );
}
