'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'fade';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-[-100px]';
      case 'right':
        return 'translate-x-[100px]';
      case 'up':
        return 'translate-y-[50px]';
      case 'fade':
        return '';
      default:
        return 'translate-y-[50px]';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${getInitialTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
