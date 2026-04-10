import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'School Manuals | SCSJ-IBED PAASCU 2026',
  description: 'School manuals and policy references for accreditation.',
};

const manualItems = [
  'Administrative Manual',
  'Auxiliary and Support Personnel Manual',
  'Faculty Manual',
  'SJA Norms and Policies',
  'Student Handbook',
];

const firstRowItems = manualItems.slice(0, 3);
const secondRowItems = manualItems.slice(3);

export default function SchoolManualsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Manuals"
        title="School Manuals"
        subtitle="Policy and operations references"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {firstRowItems.map((item, index) => (
              <article key={item} className="mx-auto w-full max-w-[210px]">
                <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200">
                  <Image
                    src="/PAASCU.png"
                    alt={`${item} manual card`}
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

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 max-w-[440px] mx-auto">
            {secondRowItems.map((item, index) => (
              <article key={item} className="mx-auto w-full max-w-[210px]">
                <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200">
                  <Image
                    src="/PAASCU.png"
                    alt={`${item} manual card`}
                    width={900}
                    height={1400}
                    className="h-auto w-full"
                    priority={index === 0}
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