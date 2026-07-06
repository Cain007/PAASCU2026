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

const firstRowItems = manualItems.slice(0, 4);
const secondRowItems = manualItems.slice(4);

export default function SchoolManualsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Manuals"
        title="Part VII : School Manuals"
        subtitle="Policy and operations references"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          

          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {firstRowItems.map((item, index) => (
                <article
                  key={item}
                  className="mx-auto w-full max-w-[540px]"
                >
                  <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                    <Image
                      src="/PAASCU.png"
                      alt={`${item} manual card`}
                      width={1500}
                      height={2333}
                      className="h-auto w-full"
                      priority={index < 2}
                    />
                  </div>

                  <h2 className="mt-2 min-h-[60px] text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                    {item}
                  </h2>
                </article>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-8">
              {secondRowItems.map((item) => (
                <article
                  key={item}
                  className="w-full max-w-[540px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                >
                  <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                    <Image
                      src="/PAASCU.png"
                      alt={`${item} manual card`}
                      width={1500}
                      height={2333}
                      className="h-auto w-full"
                    />
                  </div>

                  <h2 className="mt-2 min-h-[60px] text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                    {item}
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
