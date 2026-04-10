import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Follow-up Action | SCSJ-IBED PAASCU 2026',
  description: 'Follow-up action areas for the PAASCU resurvey visit.',
};

const followUpAreas = [
  'Faculty',
  'Curriculum and Instruction',
  'Library and Audio Visual Center',
  'Laboratories',
  'Facilities',
  'Student Services',
  'Administration',
  'School Community',
];

export default function FollowUpActionPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Follow-up Action"
        title="Implementation Progress"
        subtitle="Action areas for the PAASCU resurvey visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Follow-up Action</h1>
            <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
              PAASCU Resurvey Visit Areas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {followUpAreas.map((area, index) => (
              <article key={area} className="mx-auto w-full max-w-[210px]">
                <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200">
                  <Image
                    src="/PAASCU.png"
                    alt={`${area} PAASCU card`}
                    width={900}
                    height={1400}
                    className="h-auto w-full"
                    priority={index < 2}
                  />
                </div>
                <h2 className="mt-2 text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                  {area}
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
