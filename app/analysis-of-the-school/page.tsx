import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ContentSection from '@/components/ui/ContentSection';
import InfoCard from '@/components/ui/InfoCard';
import Footer from '@/components/layout/Footer';
import { Layers, ThumbsUp, AlertTriangle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Analysis of the School | SCSJ-IBED PAASCU 2026',
  description: 'Comprehensive institutional analysis covering all PAASCU accreditation areas and standards.',
};

export default function AnalysisOfTheSchoolPage() {
  return (
    <main className="min-h-screen">
      <Hero
        badge="Analysis"
        title="Analysis of the School"
        subtitle="In-depth evaluation across all accreditation areas and institutional standards"
        size="md"
        align="center"
      />

      <ContentSection>
        <div className="space-y-8">
          <InfoCard
            icon={Layers}
            title="Area Overview"
            description="Navigation to detailed analysis by accreditation area will be provided here."
            variant="default"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={ThumbsUp}
              title="Strengths"
              description="Key institutional strengths and commendable practices will be highlighted here."
              variant="muted"
            />
            <InfoCard
              icon={AlertTriangle}
              title="Areas for Improvement"
              description="Identified areas requiring development and enhancement will be listed here."
              variant="muted"
            />
          </div>

          <InfoCard
            icon={FileCheck}
            title="Evidence & Documentation"
            description="Links to supporting documents and evidence for each area will be provided here."
            variant="default"
          />
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
