import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContentSection from '@/components/ui/ContentSection';
import InfoCard from '@/components/ui/InfoCard';
import Footer from '@/components/layout/Footer';
import { BarChart3, TrendingUp, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Summary of Ratings | SCSJ-IBED PAASCU 2026',
  description: 'Overview of accreditation ratings and scores across all PAASCU evaluation areas.',
};

export default function SummaryOfRatingsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        variant="simple"
        badge="Ratings"
        title="Summary of Ratings"
        subtitle="Comprehensive overview of accreditation ratings across all evaluation areas"
      >
        <Breadcrumbs items={[{ label: 'Summary of Ratings' }]} className="justify-center text-blue-200" />
      </Hero>

      <ContentSection>
        <div className="space-y-8">
          <InfoCard
            icon={BarChart3}
            title="Overall Rating Summary"
            description="Aggregate scores and overall accreditation status will be displayed here."
            variant="default"
          />

          <InfoCard
            icon={TrendingUp}
            title="Ratings by Area"
            description="Detailed breakdown of ratings for each PAASCU accreditation area will be presented here."
            variant="muted"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={TrendingUp}
              title="Performance Trends"
              description="Historical comparison and improvement trends will be visualized here."
              variant="default"
            />
            <InfoCard
              icon={Target}
              title="Target vs. Actual"
              description="Comparison of target ratings against actual performance will be shown here."
              variant="default"
            />
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
