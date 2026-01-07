import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/schoolbldg.png"
          alt="Sta. Catalina College Biñan Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            PAASCU Accreditation 2026
          </div>

          {/* Welcome Text */}
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-wider mb-3">
            Welcome to
          </p>

          {/* School Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Sta. Catalina College
            <span className="block text-amber-300">Biñan, Inc.</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 mb-3 leading-relaxed">
            Integrated Basic Education Department
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/60 mb-8 max-w-lg leading-relaxed">
            Committed to providing quality Catholic education in the Augustinian tradition. 
            Explore our PAASCU accreditation self-study portal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/school-profile"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:bg-red-700 transition-all duration-300"
            >
              Explore School Profile
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/summary-of-ratings"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Ratings
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
