import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContentSection from '@/components/ui/ContentSection';
import InfoCard from '@/components/ui/InfoCard';
import Footer from '@/components/layout/Footer';
import { ClipboardList, PlayCircle, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Follow-up Action | SCSJ-IBED PAASCU 2026',
  description: 'Action plans and implementation updates addressing recommendations from previous accreditation visits.',
};

export default function FollowUpActionPage() {
  return (
    <main className="min-h-screen">
      <Hero
        variant="simple"
        badge="Follow-up Action"
        title="Implementation Progress"
        subtitle="Progress updates and implementation of recommendations from previous evaluations"
      >
        <Breadcrumbs items={[{ label: 'Follow-up Action' }]} className="justify-center text-blue-200" />
      </Hero>

      <ContentSection>
        <div className="space-y-8">
          <InfoCard
            icon={ClipboardList}
            title="Previous Recommendations"
            description="Summary of recommendations from the last accreditation visit will be listed here."
            variant="default"
          />
          <InfoCard
            icon={PlayCircle}
            title="Action Plans & Implementation"
            description="Detailed action plans with timelines and responsible parties will be documented here."
            variant="muted"
          />
          <InfoCard
            icon={BarChart}
            title="Progress Monitoring"
            description="Status updates and evidence of implementation will be presented here."
            variant="default"
          />
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
