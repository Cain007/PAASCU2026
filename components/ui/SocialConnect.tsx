import { socialCardsLeft, socialCardsRight } from "@/data/socialCards";
import SocialMarquee from "./SocialMarquee";
import AnimatedSection from "./AnimatedSection";

export default function SocialConnect() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50/40 overflow-hidden">
      <AnimatedSection direction="up">
        <div className="max-w-2xl mx-auto text-center px-4 mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-600 mb-2">
            Community
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Stay Connected
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Follow our official social media pages and community updates.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-5 md:gap-6">
        <SocialMarquee cards={socialCardsLeft} direction="left" speedSeconds={38} />
        {/* Single row on mobile: bottom row hidden below sm */}
        <div className="hidden sm:block">
          <SocialMarquee cards={socialCardsRight} direction="right" speedSeconds={44} />
        </div>
      </div>
    </section>
  );
}