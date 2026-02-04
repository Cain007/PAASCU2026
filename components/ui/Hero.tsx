'use client';

import { ReactNode, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

// Hook to detect prefers-reduced-motion
function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      mq.addEventListener('change', callback);
      return () => mq.removeEventListener('change', callback);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );
}

// CTA button interface
interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
}

// Hero component props
interface HeroProps {
  // Content
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleSecondary?: string;
  badge?: string;
  
  // CTAs
  ctas?: CTAButton[];
  
  // Layout
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  
  // Slots
  breadcrumbSlot?: ReactNode;
  children?: ReactNode;
  
  // Options
  showScrollIndicator?: boolean;
}

export default function Hero({
  title,
  titleHighlight,
  subtitle,
  subtitleSecondary,
  badge,
  ctas,
  align = 'center',
  size = 'md',
  breadcrumbSlot,
  children,
  showScrollIndicator = false,
}: HeroProps) {
  const reducedMotion = useReducedMotion();
  
  // Size configurations
  const sizeConfig = {
    sm: {
      section: 'py-16 lg:py-20',
      title: 'text-2xl sm:text-3xl md:text-4xl',
      subtitle: 'text-base sm:text-lg',
      maxWidth: 'max-w-4xl',
    },
    md: {
      section: 'py-20 lg:py-28',
      title: 'text-3xl sm:text-4xl md:text-5xl',
      subtitle: 'text-lg sm:text-xl',
      maxWidth: 'max-w-5xl',
    },
    lg: {
      section: 'min-h-[85vh] flex items-center',
      title: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
      subtitle: 'text-lg sm:text-xl',
      maxWidth: 'max-w-6xl',
    },
  };
  
  const config = sizeConfig[size];
  
  // Animation classes (respect reduced motion)
  const animateClass = reducedMotion ? '' : 'animate-pulse';
  const bounceClass = reducedMotion ? '' : 'animate-bounce';
  
  return (
    <section
      className={`relative overflow-hidden ${config.section}`}
      role="banner"
      aria-label={`${title} hero section`}
    >
      {/* Background Image - Same as Home page */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/schoolbldg.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        {/* Blue-toned Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-slate-900/40" />
      </div>
      
      {/* Content Container */}
      <div
        className={`relative z-10 w-full ${config.maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${
          size === 'lg' ? 'py-20' : ''
        } ${align === 'center' ? 'text-center' : 'text-left'}`}
      >
        <div className={align === 'left' ? 'max-w-2xl' : ''}>
          {/* Badge */}
          {badge && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/10 backdrop-blur-sm border-white/20 text-white/90 text-xs font-medium mb-6"
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-amber-400 ${animateClass}`} />
              {badge}
            </div>
          )}
          
          {/* Title */}
          <h1 className={`${config.title} font-bold text-white mb-4 leading-tight`}>
            {title}
            {titleHighlight && (
              <span className="block mt-2 text-amber-300">
                {titleHighlight}
              </span>
            )}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className={`${config.subtitle} text-white/80 mb-3 leading-relaxed ${align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-lg'}`}>
              {subtitle}
            </p>
          )}
          
          {/* Secondary Subtitle */}
          {subtitleSecondary && (
            <p className={`text-sm text-white/60 mb-6 ${align === 'center' ? 'max-w-lg mx-auto' : 'max-w-lg'}`}>
              {subtitleSecondary}
            </p>
          )}
          
          {/* CTA Buttons */}
          {ctas && ctas.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-3 mt-8 ${align === 'center' ? 'justify-center' : ''}`}>
              {ctas.map((cta, index) => {
                const Icon = cta.icon;
                const isPrimary = cta.variant !== 'secondary';
                return (
                  <Link
                    key={index}
                    href={cta.href}
                    className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                      isPrimary
                        ? 'bg-red-600 text-white shadow-lg hover:bg-red-700'
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {cta.label}
                    {Icon ? (
                      <Icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    ) : isPrimary ? (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    ) : null}
                  </Link>
                );
              })}
            </div>
          )}
          
          {/* Breadcrumb Slot */}
          {breadcrumbSlot && <div className="mt-6">{breadcrumbSlot}</div>}
          
          {/* Children */}
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className={`w-1 h-2 rounded-full bg-white/50 ${bounceClass}`} />
          </div>
        </div>
      )}
    </section>
  );
}
