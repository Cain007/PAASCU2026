import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface CTASectionProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
  children?: ReactNode;
}

export default function CTASection({ title, description, buttons, children }: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-linear-to-r from-red-600 via-red-700 to-rose-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        {children}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={
                button.variant === 'secondary'
                  ? 'inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'
                  : 'inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 rounded-xl font-semibold shadow-lg hover:bg-red-50 transition-all duration-300'
              }
            >
              {button.label}
              {button.variant !== 'secondary' && <ArrowRight className="w-5 h-5" />}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
