'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-red-500/25 group"
      aria-label="Scroll back to top of page"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      Back to Top
    </button>
  );
}
