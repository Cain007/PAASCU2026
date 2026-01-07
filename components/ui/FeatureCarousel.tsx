'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRight, Users, FileText, BarChart3, BookOpen, LucideIcon } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Icon mapping to allow passing icon names as strings
const iconMap: Record<string, LucideIcon> = {
  Users,
  FileText,
  BarChart3,
  BookOpen,
};

interface Feature {
  iconName: string;
  title: string;
  description: string;
  href: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

export default function FeatureCarousel({ features }: FeatureCarouselProps) {
  return (
    <div className="relative py-4">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="feature-carousel"
      >
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.iconName] || BookOpen;
          return (
            <SwiperSlide key={index}>
              <Link
                href={feature.href}
                className="group flex flex-col h-full min-h-60 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        .feature-carousel {
          padding-bottom: 48px;
        }
        
        .feature-carousel .swiper-slide {
          width: 260px;
          height: auto;
        }
        
        .feature-carousel .swiper-pagination {
          bottom: 8px !important;
        }
        
        .feature-carousel .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .feature-carousel .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #2563eb;
        }
        
        .feature-carousel .swiper-slide-active {
          z-index: 10;
        }
      `}</style>
    </div>
  );
}
