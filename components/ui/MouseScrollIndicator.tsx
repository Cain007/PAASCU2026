interface MouseScrollIndicatorProps {
  label?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

export default function MouseScrollIndicator({
  label = 'Scroll to explore',
  tone = 'light',
  className = '',
}: MouseScrollIndicatorProps) {
  const toneClass = tone === 'light' ? 'text-white/80' : 'text-gray-600';

  return (
    <div className={`mouse-scroll-indicator ${toneClass} ${className}`} aria-hidden="true">
      {label ? <span className="mouse-scroll-indicator__label">{label}</span> : null}
      <div className="mouse-scroll-indicator__mouse">
        <div className="mouse-scroll-indicator__wheel" />
      </div>
      <div className="mouse-scroll-indicator__arrows">
        <span className="mouse-scroll-indicator__arrow unu" />
        <span className="mouse-scroll-indicator__arrow doi" />
        <span className="mouse-scroll-indicator__arrow trei" />
      </div>
    </div>
  );
}
