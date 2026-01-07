import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'muted' | 'bordered';
  children?: ReactNode;
}

export default function InfoCard({
  title,
  description,
  icon: Icon,
  variant = 'default',
  children,
}: InfoCardProps) {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    muted: 'bg-gray-50 border border-gray-100',
    bordered: 'bg-white border-2 border-blue-100',
  };

  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${variants[variant]}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
