'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function VideoShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Two-Column Layout: Text Left, Laptop Right */}
        <div className="grid lg:grid-cols-[40%_60%] gap-16 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <AnimatedSection direction="left">
            <div>
              <div className="mb-12">
                <SectionHeader
                  badge="Video Showcase"
                  title="Highlights"
                  subtitle="Watch Our Journey"
                />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                Experience the vibrant spirit, faith-driven initiatives, and dynamic community of Sta. Catalina College through our latest event highlights.
              </p>
              <p className="text-gray-500 text-base leading-relaxed text-justify">
                From youth congresses to academic achievements, see how our students live out our mission of communion, participation, and mission in every aspect of campus life.
              </p>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN: Floating MacBook */}
          <AnimatedSection direction="right" delay={200}>
            <div>
              
              {/* Floating MacBook Container */}
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Ambient Glow Effect */}
                <div className="absolute -inset-12 bg-gradient-to-r from-red-500/20 via-amber-500/20 to-red-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* MacBook Frame & Animation Wrapper */}
                <div className="relative transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-3">
                  
                  {/* Screen Bezel */}
                  <div className="relative bg-neutral-900 rounded-t-3xl border-[10px] border-neutral-800 shadow-2xl overflow-hidden">
                    
                    {/* Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-800 rounded-b-xl z-20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-neutral-700 rounded-full border border-neutral-600" />
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
                      <source src="/highlight.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Hover Overlay with Play Button */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-neutral-900 ml-1" />
                      </div>
                      <span className="absolute bottom-10 text-white/90 text-lg font-medium tracking-wide uppercase">
                        Click to watch in fullscreen
                      </span>
                    </div>
                  </div>

                  {/* MacBook Base / Hinge */}
                  <div className="h-5 bg-neutral-800 rounded-b-lg mx-[-10px] relative z-10 shadow-xl" />
                  
                  {/* MacBook Bottom Tray */}
                  <div className="h-4 bg-neutral-700 rounded-b-3xl mx-[-40px] shadow-2xl" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-7xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
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
              src="/highlight.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}