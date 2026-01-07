interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className = '' }: PageHeroProps) {
  return (
    <header className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
