import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function ContentSection({
  children,
  className = '',
  background = 'white',
}: ContentSectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-linear-to-b from-gray-50 to-white',
  };

  return (
    <section className={`py-16 lg:py-20 ${backgrounds[background]} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
