"use client";

import { useState, useMemo } from "react";
import SocialCard from "./SocialCard";
import type { SocialCard as SocialCardType } from "@/data/socialCards";

interface SocialMarqueeProps {
  cards: SocialCardType[];
  direction: "left" | "right";
  speedSeconds?: number;
}

export default function SocialMarquee({
  cards,
  direction,
  speedSeconds = 40,
}: SocialMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate so the loop has no visible seam
  const loopCards = useMemo(() => [...cards, ...cards], [cards]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-5 md:gap-6 py-2"
        style={{
          animationName: direction === "left" ? "marquee-left" : "marquee-right",
          animationDuration: `${speedSeconds}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {loopCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <SocialCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}