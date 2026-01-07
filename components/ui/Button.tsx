import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300';

  const variants = {
    primary:
      'bg-white text-slate-900 shadow-xl shadow-black/20 hover:bg-blue-50 hover:scale-105',
    secondary:
      'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
    ghost: 'text-blue-600 hover:text-blue-700',
    outline:
      'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className={`${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} group-hover:translate-x-1 transition-transform`} />
      )}
    </Link>
  );
}
