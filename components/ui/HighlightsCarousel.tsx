'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { CheckCircle, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const highlightDetails = [
  {
    title: 'Comprehensive Self-Study Documentation',
    description: 'Complete and thorough documentation covering all aspects of institutional evaluation and accreditation requirements.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Evidence-Based Analysis & Assessment',
    description: 'Data-driven approach to institutional analysis with concrete evidence supporting all claims and conclusions.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Strategic Improvement Planning',
    description: 'Forward-looking strategies and action plans designed to address identified areas for growth and development.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Stakeholder Engagement Reports',
    description: 'Comprehensive reports detailing engagement with students, faculty, parents, and community partners.',
    color: 'from-purple-500 to-violet-600',
  },
];

export default function HighlightsCarousel() {
  return (
    <div className="relative w-full flex justify-center lg:justify-end py-4">
      <Swiper
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        cardsEffect={{
          perSlideOffset: 6,
          perSlideRotate: 1.5,
          rotate: true,
          slideShadows: false,
        }}
        className="highlights-carousel"
      >
        {highlightDetails.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`relative p-6 rounded-2xl bg-linear-to-br ${item.color} text-white h-full flex flex-col shadow-xl`}>
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/15" />
              
              {/* Check icon */}
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mb-2 leading-tight pr-6">{item.title}</h3>
              
              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed flex-1">{item.description}</p>

              {/* Slide indicator */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-white/60 text-xs font-medium">
                  {index + 1} / {highlightDetails.length}
                </span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/70 rounded-full"
                    style={{ width: `${((index + 1) / highlightDetails.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .highlights-carousel {
          width: 300px;
          height: 280px;
        }
        
        .highlights-carousel .swiper-slide {
          border-radius: 1rem;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
