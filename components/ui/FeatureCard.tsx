import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({ icon: Icon, title, description, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative p-8 bg-linear-to-br from-slate-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Arrow */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 h-5 text-blue-600" />
      </div>
    </Link>
  );
}
