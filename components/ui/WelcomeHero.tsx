'use client';

/**
 * WelcomeHero — PAASCU 2026 Editorial Bento Hero (Light Mode)
 *
 * Design intent:
 *  - Clean, premium white canvas inspired by Apple / Linear / Notion.
 *  - Red & gold accents gain presence against the light background.
 *  - The school image becomes a refined artifact with a deep shadow
 *    and subtle warm gradient border.
 *  - Floating cards use light glassmorphism (white + blur + thin border).
 *  - Ambient warm gradients remain but at very low opacity for depth.
 *  - Warm gold grid adds editorial texture that ties into the palette.
 *  - Typography pairing: Cinzel (elegant, authoritative headings) + Inter (clean, modern UI/body text).
 */

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Cinzel, Inter } from 'next/font/google';
import {
  ArrowRight,
  FileText,
  Award,
  GraduationCap,
  Shield,
  BookOpen,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Target,
  FolderOpen,
  FileCheck,
  ClipboardList,
} from 'lucide-react';
import MouseScrollIndicator from './MouseScrollIndicator';

/* -------------------------------------------------------------------------- */
/*  Font Configuration                                                        */
/* -------------------------------------------------------------------------- */

const cinzel = Cinzel({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/* -------------------------------------------------------------------------- */
/*  Motion variants                                                           */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
  },
};

/* -------------------------------------------------------------------------- */
/*  Background — white base + gold grid + warm ambient lighting               */
/* -------------------------------------------------------------------------- */

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Warm off-white base — slightly softer than pure #FFF */}
      <div className="absolute inset-0 bg-[#FAFAF8]" />

      {/* Fine gold grid — warm amber texture */}
      <div
        className="absolute inset-0 opacity-[0.9]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(180, 130, 30, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 130, 30, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      {/* Coarse gold grid — editorial structure */}
      <div
        className="absolute inset-0 opacity-[0.95]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(180, 130, 30, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 130, 30, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '128px 128px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      {/* Ambient warm glow — top left (very faint red) */}
      <motion.div
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-red-500/[0.07] blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ambient gold glow — right side */}
      <motion.div
        className="absolute right-[-8%] top-[18%] h-[480px] w-[480px] rounded-full bg-amber-400/[0.10] blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Secondary red accent — bottom */}
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[420px] w-[420px] rounded-full bg-red-600/[0.05] blur-[140px]"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft top highlight */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white to-transparent" />
      {/* Soft bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating glass card — light mode (NOW CLICKABLE)                          */
/* -------------------------------------------------------------------------- */

interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  accent?: 'red' | 'gold' | 'neutral';
  className?: string;
  parallaxX?: number;
  parallaxY?: number;
  delay?: number;
}

function FloatingCard({
  icon,
  label,
  value,
  href,
  accent = 'neutral',
  className = '',
  parallaxX = 0,
  parallaxY = 0,
  delay = 0,
}: FloatingCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    x.set(parallaxX);
    y.set(parallaxY);
  }, [parallaxX, parallaxY, x, y]);

  const accentStyles = {
    red: 'text-red-700 bg-red-50 border-red-200/60',
    gold: 'text-amber-700 bg-amber-50 border-amber-200/60',
    neutral: 'text-slate-700 bg-slate-50 border-slate-200/60',
  }[accent];

  const cardContent = (
    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${accentStyles}`}>
      {icon}
    </div>
  );

  const textContent = (
    <div className="flex flex-col">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );

  // If href is provided, wrap in Link; otherwise just render as div
  if (href) {
    return (
      <motion.div
        style={{ x: springX, y: springY }}
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.7 + delay,
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
        className={className}
      >
        <Link
          href={href}
          className="group flex items-center gap-3 rounded-2xl border
            border-slate-200/70 bg-white/80 px-4 py-3 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)]
            backdrop-blur-xl transition-all duration-300
            hover:border-slate-300 hover:shadow-[0_16px_48px_-12px_rgba(15,23,42,0.18)]
            hover:bg-white/95 cursor-pointer"
        >
          {cardContent}
          {textContent}
          <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    );
  }

  // Non-clickable version (fallback)
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.7 + delay,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group absolute z-20 flex items-center gap-3 rounded-2xl border
        border-slate-200/70 bg-white/80 px-4 py-3 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)]
        backdrop-blur-xl transition-all duration-300
        hover:border-slate-300 hover:shadow-[0_16px_48px_-12px_rgba(15,23,42,0.18)]
        ${className}`}
    >
      {cardContent}
      {textContent}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Hero                                                                 */
/* -------------------------------------------------------------------------- */

export default function WelcomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    // Applied inter.className here so all UI/body text uses the modern sans-serif
    <section
      ref={containerRef}
      className={`relative min-h-[100svh] overflow-hidden text-slate-900 ${inter.className}`}
      role="banner"
      aria-label="Sta. Catalina College PAASCU 2026 home hero"
    >
      <HeroBackground />

      {/* Main bento grid */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 gap-10 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-36">
        {/* ---------------------------------------------------------------- */}
        {/*  LEFT COLUMN — Editorial content                                 */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col justify-center lg:col-span-6">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200/80
                bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl transition-all duration-300
                hover:border-slate-300 hover:shadow-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                PAASCU Accreditation 2026
              </span>
              <span className="h-3 w-px bg-slate-300" />
              <span className="text-[11px] font-medium text-slate-500">Self-Study Portal</span>
            </div>
          </motion.div>

          {/* Headline — Cinzel Font with True Bold Weights */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className={`leading-[1.1] text-slate-900 ${cinzel.className}`}
          >
            <span 
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-7xl"
              style={{ 
                fontWeight: 700, 
                letterSpacing: '-0.02em', 
                WebkitFontSmoothing: 'antialiased' 
              }}
            >
              Sta. Catalina
            </span>
            
            <span 
              className="block text-xl sm:text-2xl md:text-3xl lg:text-7xl mt-2 sm:mt-3 text-black"
              style={{ 
                fontWeight: 700, 
                letterSpacing: '-0.02em', 
                WebkitFontSmoothing: 'antialiased' 
              }}
            >
              College{' '}
              <span 
                className="bg-gradient-to-br from-red-700 via-red-600 to-amber-600 bg-clip-text text-transparent"
                style={{ fontWeight: 800 }} 
              >
                Inc.
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="mt-6 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-gradient-to-r from-amber-500 to-transparent" />
            <span className="text-lg font-semibold tracking-wide text-amber-700 sm:text-xl">
              Biñan, Laguna
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Welcome to the Integrated Basic Education Department Self-Study Portal, where we share our journey of quality Catholic education, accreditation, and continuous improvement.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/school-profile"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
                rounded-xl bg-gradient-to-b from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold
                text-white shadow-[0_8px_24px_-4px_rgba(185,28,28,0.35)] transition-all duration-300
                hover:shadow-[0_12px_32px_-4px_rgba(185,28,28,0.45)] hover:from-red-700 hover:to-red-800
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Explore School Profile</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/summary-of-ratings"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border
                border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800
                shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-slate-400
                hover:bg-white hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <FileText className="h-4 w-4 text-red-700" />
              View Summary of Ratings
            </Link>

            <Link
              href="/follow-up-action"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5
                text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-slate-900
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Browse Documents
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>PAASCU Candidate Status</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-amber-600" />
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-red-600" />
              <span>Quality Education</span>
            </div>
          </motion.div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*  RIGHT COLUMN — Feature image + floating cards                   */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative lg:col-span-6">
          <div className="relative h-full min-h-[520px] w-full lg:min-h-[640px]">
            {/* Image container */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 lg:right-0 lg:left-auto lg:w-[92%]"
            >
              {/* Gradient border wrapper — subtler on white */}
              <div
                className="relative h-full w-full overflow-hidden rounded-[32px] p-[1.5px]
                  shadow-[0_32px_64px_-16px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.04)]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(185,28,28,0.25) 0%, rgba(245,158,11,0.2) 50%, rgba(15,23,42,0.08) 100%)',
                }}
              >
                {/* Inner image */}
                <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-slate-100">
                  <Image
                    src="/schoolbldg10.png"
                    alt="Sta. Catalina College Inc. campus building in Biñan, Laguna"
                    fill
                    className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Inner overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-amber-500/5" />

                  {/* Glass caption overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                          
                        </div>
                        <div className="mt-1 text-sm font-semibold text-white">
                          St. Catherine Building
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents — subtler on white */}
              <div className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-full bg-amber-300/30 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-red-400/20 blur-2xl" />
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/*  Floating glass cards around the image                         */}
            {/* -------------------------------------------------------------- */}

           <FloatingCard
              icon={<BookOpen className="h-4 w-4" />}
              label="PART I"
              value="School Profile"
              href="/school-profile"
              accent="gold"
              className="left-[-4%] top-[8%] hidden sm:flex absolute z-20"
              parallaxX={mouse.x * -18}
              parallaxY={mouse.y * -12}
              delay={0}
            />

            <FloatingCard
              icon={<Target className="h-4 w-4" />}
              label="PART II"
              value="Follow-up Actions"
              href="/follow-up-action"
              accent="red"
              className="right-[-2%] top-[4%] hidden md:flex absolute z-20"
              parallaxX={mouse.x * 14}
              parallaxY={mouse.y * -10}
              delay={0.15}
            />

            <FloatingCard
              icon={<BarChart3 className="h-4 w-4" />}
              label="PART III"
              value="Analysis of the School"
              href="/analysis-of-the-school"
              accent="neutral"
              className="left-[-6%] top-[45%] hidden lg:flex absolute z-20"
              parallaxX={mouse.x * -22}
              parallaxY={mouse.y * -6}
              delay={0.3}
            />

            <FloatingCard
              icon={<CheckCircle2 className="h-4 w-4" />}
              label="PART IV"
              value="Conclusion"
              href="/conclusion"
              accent="gold"
              className="right-[-4%] top-[50%] hidden lg:flex absolute z-20"
              parallaxX={mouse.x * 18}
              parallaxY={mouse.y * -8}
              delay={0.45}
            />

            <FloatingCard
              icon={<FolderOpen className="h-4 w-4" />}
              label="PART V"
              value="Summary of Appendices"
              href="/appendices"
              accent="neutral"
              className="left-[6%] bottom-[6%] hidden sm:flex absolute z-20"
              parallaxX={mouse.x * -14}
              parallaxY={mouse.y * 10}
              delay={0.6}
            />

            <FloatingCard
              icon={<Award className="h-4 w-4" />}
              label="PART VI"
              value="Summary of Ratings"
              href="/summary-of-ratings"
              accent="red"
              className="right-[4%] bottom-[2%] hidden md:flex absolute z-20"
              parallaxX={mouse.x * 16}
              parallaxY={mouse.y * 12}
              delay={0.75}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator — dark tone for white background */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <MouseScrollIndicator
          tone="dark"
          label="Scroll to explore"
          className="scale-90 opacity-70"
        />
      </div>
    </section>
  );
}