"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { SocialCard as SocialCardType } from "@/data/socialCards";

interface SocialCardProps {
  card: SocialCardType;
}

function SocialCardBase({ card }: SocialCardProps) {
  const handleClick = () => {
    window.open(card.facebookUrl, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Visit ${card.title} on Facebook`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group relative w-[260px] sm:w-[300px] md:w-[320px] h-[340px] md:h-[380px] shrink-0 cursor-pointer select-none
                 rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-sm
                 shadow-md hover:shadow-2xl hover:shadow-red-900/10
                 transition-all duration-300 ease-out
                 hover:-translate-y-1.5 hover:border-red-200
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2
                 overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-[58%] overflow-hidden">
        <Image
          src={card.image}
          alt={`${card.title} cover photo`}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

        {/* Facebook badge */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <svg className="w-4 h-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-[42%] p-4 md:p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
            {card.title}
          </h3>
          <p className="mt-1.5 text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">
            {card.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
          Visit page
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-500/10 via-transparent to-amber-500/10" />
    </div>
  );
}

export default memo(SocialCardBase);