import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'muted';
}

export default function Section({
  title,
  children,
  className = '',
  variant = 'default',
}: SectionProps) {
  const variantStyles = {
    default: 'bg-white border border-gray-200 shadow-sm',
    muted: 'bg-gray-50 border border-gray-100',
  };

  return (
    <section
      className={`rounded-xl p-6 sm:p-8 ${variantStyles[variant]} ${className}`}
      aria-labelledby={title ? `section-${title.toLowerCase().replace(/\s+/g, '-')}` : undefined}
    >
      {title && (
        <h2
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"
        >
          {title}
        </h2>
      )}
      {children || (
        <div className="text-gray-500 italic">
          <p>Content coming soon...</p>
        </div>
      )}
    </section>
  );
}
