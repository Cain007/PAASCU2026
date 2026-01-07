'use client';

import Link from 'next/link';
import { ArrowRight, Users, FileText, BarChart3, BookOpen, ClipboardCheck, FolderOpen, LucideIcon } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Users,
  FileText,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  FolderOpen,
};

interface Resource {
  iconName: string;
  title: string;
  description: string;
  href: string;
  color?: string;
}

interface ResourceGridProps {
  resources: Resource[];
}

const colorStyles: Record<string, { bg: string; icon: string; hover: string }> = {
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-600 text-white',
    hover: 'hover:border-red-300 hover:shadow-red-100/50',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-600 text-white',
    hover: 'hover:border-blue-300 hover:shadow-blue-100/50',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-600 text-white',
    hover: 'hover:border-emerald-300 hover:shadow-emerald-100/50',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'bg-violet-600 text-white',
    hover: 'hover:border-violet-300 hover:shadow-violet-100/50',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-600 text-white',
    hover: 'hover:border-amber-300 hover:shadow-amber-100/50',
  },
};

export default function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource, index) => {
        const IconComponent = iconMap[resource.iconName] || BookOpen;
        const colors = colorStyles[resource.color || 'blue'];
        
        return (
          <Link
            key={index}
            href={resource.href}
            className={`group relative flex flex-col p-5 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${colors.hover}`}
          >
            {/* Top section with icon */}
            <div className={`w-11 h-11 rounded-lg ${colors.icon} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
              <IconComponent className="w-5 h-5" />
            </div>

            {/* Content */}
            <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-gray-700 transition-colors leading-snug">
              {resource.title}
            </h3>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
              {resource.description}
            </p>

            {/* Footer with arrow */}
            <div className="flex items-center text-sm font-semibold text-red-600 group-hover:text-red-700">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </div>

            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} rounded-bl-[40px] rounded-tr-xl opacity-50 -z-10`} />
          </Link>
        );
      })}
    </div>
  );
}
