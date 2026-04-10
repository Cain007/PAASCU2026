import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Other Resources for Accreditation | SCSJ-IBED PAASCU 2026',
  description: 'Additional accreditation resources and references.',
};

const resourceItems = [
  'Personnel Profile',
  'Professional Licenses',
  'Class Program',
  "Teachers' Program",
  "Teachers' Aide Program",
  'Library Period',
];

export default function OtherResourcesForAccreditationPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Resources"
        title="Other Resources for Accreditors"
        subtitle="PAASCU Resurvey Visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {resourceItems.map((item, index) => (
              <article key={item} className="mx-auto w-full max-w-[210px]">
                <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200">
                  <Image
                    src="/PAASCU.png"
                    alt={`${item} resource card`}
                    width={900}
                    height={1400}
                    className="h-auto w-full"
                    priority={index < 2}
                  />
                </div>
                <h2 className="mt-2 text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                  {item}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}