import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Summary of Ratings | SCSJ-IBED PAASCU 2026',
  description: 'Summary of ratings for the PAASCU resurvey visit.',
};

export default function SummaryOfRatingsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Summary"
        title="Summary of Ratings"
        subtitle="PAASCU Resurvey Visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <article className="mx-auto w-full max-w-[210px]">
            <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200">
              <Image
                src="/PAASCU.png"
                alt="Summary of ratings card"
                width={900}
                height={1400}
                className="h-auto w-full"
                priority
              />
            </div>
            <h2 className="mt-2 text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
              Summary of Ratings
            </h2>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
