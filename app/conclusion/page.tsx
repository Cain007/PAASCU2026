import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContentSection from '@/components/ui/ContentSection';
import InfoCard from '@/components/ui/InfoCard';
import Footer from '@/components/layout/Footer';
import { FileText, Lightbulb, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conclusion | SCSJ-IBED PAASCU 2026',
  description: 'Summary findings, key insights, and overall conclusions from the PAASCU accreditation self-study.',
};

export default function ConclusionPage() {
  return (
    <main className="min-h-screen">
      <Hero
        variant="simple"
        badge="Conclusion"
        title="Summary & Findings"
        subtitle="Summary findings and key insights from the accreditation self-study process"
      >
        <Breadcrumbs items={[{ label: 'Conclusion' }]} className="justify-center text-blue-200" />
      </Hero>

      <ContentSection>
        <div className="space-y-8">
          <InfoCard
            icon={FileText}
            title="Executive Summary"
            description="A comprehensive summary of the self-study findings will be presented here."
            variant="default"
          />
          <InfoCard
            icon={Lightbulb}
            title="Key Findings"
            description="Major discoveries and insights from the accreditation process will be outlined here."
            variant="muted"
          />
          <InfoCard
            icon={Compass}
            title="Strategic Recommendations"
            description="Forward-looking recommendations for institutional improvement will be detailed here."
            variant="default"
          />
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
