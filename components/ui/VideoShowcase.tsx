'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function VideoShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection direction="up">
          {/* Wrapped in a div to apply layout classes safely */}
          <div className="text-center mb-12">
            <SectionHeader
              badge="Video Showcase"
              title="Highlights"
              subtitle="Watch Our Journey"
            />
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto -mt-6 mb-12">
            Experience the vibrant spirit, faith-driven initiatives, and dynamic community of Sta. Catalina College through our latest event highlights.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          {/* Floating MacBook Container */}
          <div 
            className="relative max-w-4xl mx-auto group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Ambient Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500/20 via-amber-500/20 to-red-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* MacBook Frame & Animation Wrapper */}
            <div className="relative transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2">
              
              {/* Screen Bezel */}
              <div className="relative bg-neutral-900 rounded-t-2xl border-[6px] border-neutral-800 shadow-2xl overflow-hidden">
                
                {/* Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-800 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full border border-neutral-600" />
                </div>

                {/* Auto-playing Preview Video */}
                <video 
                  className="w-full aspect-video object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                >
                  <source src="/SLK YOUTH Congress.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Hover Overlay with Play Button */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-neutral-900 ml-1" />
                  </div>
                  <span className="absolute bottom-6 text-white/90 text-sm font-medium tracking-wide uppercase">
                    Click to watch in fullscreen
                  </span>
                </div>
              </div>

              {/* MacBook Base / Hinge */}
              <div className="h-3 bg-neutral-800 rounded-b-lg mx-[-6px] relative z-10 shadow-xl" />
              
              {/* MacBook Bottom Tray */}
              <div className="h-2 bg-neutral-700 rounded-b-2xl mx-[-24px] shadow-2xl" />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Video with Controls */}
            <video 
              className="w-full h-full object-contain" 
              controls 
              autoPlay 
              src="/SLK YOUTH Congress.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}