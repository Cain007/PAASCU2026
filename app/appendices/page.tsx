import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ContentSection from '@/components/ui/ContentSection';
import InfoCard from '@/components/ui/InfoCard';
import Footer from '@/components/layout/Footer';
import { FolderOpen, FileText, Image, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Appendices | SCSJ-IBED PAASCU 2026',
  description: 'Supporting documents, references, and supplementary materials for the PAASCU accreditation.',
};

export default function AppendicesPage() {
  return (
    <main className="min-h-screen">
      <Hero
        badge="Appendices"
        title="Supporting Documents"
        subtitle="Supporting documents, references, and supplementary materials"
        size="md"
        align="center"
      />

      <ContentSection>
        <div className="space-y-8">
          <InfoCard
            icon={FolderOpen}
            title="Document Repository"
            description="A categorized collection of all supporting documents will be available here."
            variant="default"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={FileText}
              title="Official Documents"
              description="Institutional policies, manuals, and official publications will be listed here."
              variant="muted"
            />
            <InfoCard
              icon={Image}
              title="Evidence Files"
              description="Photos, reports, and other evidence materials will be organized here."
              variant="muted"
            />
          </div>

          <InfoCard
            icon={BookOpen}
            title="References"
            description="Bibliography and external references used in the self-study will be compiled here."
            variant="default"
          />
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
