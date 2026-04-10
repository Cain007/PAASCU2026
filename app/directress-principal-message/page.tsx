import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Directress/Principal Message | SCSJ-IBED PAASCU 2026',
  description: 'Official message from the Directress/Principal.',
};

export default function DirectressPrincipalMessagePage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Message"
        title="Directress/Principal Message"
        subtitle="Leadership message for the PAASCU resurvey visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[210px] bg-white p-2 shadow-sm ring-1 ring-neutral-200">
          <Image
            src="/PAASCU.png"
            alt="Directress and principal message placeholder"
            width={900}
            height={1400}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}