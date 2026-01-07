'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft, BookOpen, Users, Award, Target, LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SlideContent {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  description?: string;
  icon?: LucideIcon;
  gradient: string;
  cta?: {
    label: string;
    href: string;
  };
}

const slides: SlideContent[] = [
  {
    badge: 'PAASCU Accreditation 2026',
    title: 'Welcome to',
    titleHighlight: 'SCSJ-IBED',
    subtitle: 'Philippine Accrediting Association of Schools, Colleges and Universities',
    description: 'Integrated Basic Education Department Self-Study Portal',
    icon: Award,
    gradient: 'from-blue-900 via-indigo-800 to-purple-900',
    cta: {
      label: 'Explore Now',
      href: '/school-profile',
    },
  },
  {
    badge: 'Comprehensive Documentation',
    title: 'Self-Study',
    titleHighlight: 'Materials',
    subtitle: 'Access complete accreditation documentation',
    description: 'Explore our institutional profile, analysis, and supporting evidence',
    icon: BookOpen,
    gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
    cta: {
      label: 'View Analysis',
      href: '/analysis-of-the-school',
    },
  },
  {
    badge: 'Excellence in Education',
    title: 'Committed to',
    titleHighlight: 'Quality',
    subtitle: 'Building a Culture of Continuous Improvement',
    description: 'Dedicated to meeting PAASCU standards and exceeding expectations',
    icon: Target,
    gradient: 'from-amber-900 via-orange-800 to-rose-900',
    cta: {
      label: 'View Ratings',
      href: '/summary-of-ratings',
    },
  },
  {
    badge: 'Community & Stakeholders',
    title: 'School',
    titleHighlight: 'Profile',
    subtitle: 'Discover Our Institution',
    description: 'Learn about our history, mission, vision, and educational community',
    icon: Users,
    gradient: 'from-violet-900 via-purple-800 to-fuchsia-900',
    cta: {
      label: 'Learn More',
      href: '/school-profile',
    },
  },
];

export default function HeroSwiper() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-white/50 hover:!bg-white/80 transition-all',
          bulletActiveClass: '!bg-white !w-8 !rounded-full',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        speed={1000}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative h-full w-full bg-linear-to-br ${slide.gradient}`}>
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              
              {/* Animated gradient orbs */}
              <div className="absolute top-20 right-20 w-64 h-64 bg-linear-to-br from-white/10 to-transparent rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-32 left-20 w-48 h-48 bg-linear-to-br from-white/10 to-transparent rounded-full blur-2xl animate-float-delayed" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
                <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
                  {/* Icon - Large and prominent on top */}
                  {slide.icon && (() => {
                    const IconComponent = slide.icon;
                    return (
                      <div className="mb-6 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                        <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                    );
                  })()}

                  {/* Badge */}
                  {slide.badge && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {slide.badge}
                    </div>
                  )}

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                    {slide.title}{' '}
                    <span className="bg-linear-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                      {slide.titleHighlight}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-white/80 mb-2 max-w-2xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  {slide.description && (
                    <p className="text-xs sm:text-sm text-white/60 mb-6 max-w-lg mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  {slide.cta && (
                    <div>
                      <Link
                        href={slide.cta.href}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-lg font-semibold text-sm shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        {slide.cta.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-105">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button className="swiper-button-next-custom absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-105">
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/60">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-scroll" />
        </div>
      </div>

      {/* Slide indicators (dots) positioned above scroll indicator */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 80px !important;
        }
        
        .swiper-pagination-bullet {
          transition: all 0.2s ease;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .swiper-slide-active .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
