'use client';

import Hero from './Hero';
import { ArrowRight } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <Hero
      badge="PAASCU Accreditation 2026"
      title="Sta. Catalina College"
      titleHighlight="Biñan, Inc."
      subtitle="Integrated Basic Education Department"
      subtitleSecondary="Committed to providing quality Catholic education in the Augustinian tradition. Explore our PAASCU accreditation self-study portal."
      size="lg"
      align="left"
      showScrollIndicator
      ctas={[
        { label: 'Explore School Profile', href: '/school-profile', variant: 'primary', icon: ArrowRight },
        { label: 'View Ratings', href: '/summary-of-ratings', variant: 'secondary' },
      ]}
    />
  );
}
