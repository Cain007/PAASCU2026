import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';
import ManualsGrid from '@/components/ui/ManualsGrid';

export const metadata: Metadata = {
  title: 'School Manuals | SCC Biñan PAASCU 2026',
  description: 'School manuals and policy references for accreditation.',
};

export default function SchoolManualsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Manuals"
        title="Part VII : School Manuals"
        subtitle="Institutional Policies, Procedures, and Operational Guidelines"
        size="md"
        align="center"
      />

      {/* The interactive grid and modal are handled by the Client Component */}
      <ManualsGrid />

      <Footer />
    </main>
  );
}