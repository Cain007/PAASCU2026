import { ReactNode } from 'react';
import { Award } from 'lucide-react';

interface HeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleSecondary?: string;
  children?: ReactNode;
  variant?: 'default' | 'simple';
  highlights?: string[];
}

export default function Hero({
  badge,
  title,
  titleHighlight,
  subtitle,
  subtitleSecondary,
  children,
  variant = 'default',
  highlights,
}: HeroProps) {
  if (variant === 'simple') {
    return (
      <section className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
            {titleHighlight && (
              <span className="block mt-2 bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            )}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
          {titleHighlight && (
            <span className="block mt-2 bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            {subtitle}
            {subtitleSecondary && (
              <span className="block mt-2 text-blue-200/60">{subtitleSecondary}</span>
            )}
          </p>
        )}

        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-blue-100/90 text-sm"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
