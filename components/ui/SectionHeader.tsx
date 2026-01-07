interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-10 lg:mb-12 ${alignClass}`}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base text-gray-600 leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
