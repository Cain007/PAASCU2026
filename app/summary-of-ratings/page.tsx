import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Summary of Ratings | SCC-IBED PAASCU 2026',
  description: 'Summary of ratings for the PAASCU resurvey visit.',
};
const followUpAreas = [
  {
    name: 'Summary of Ratings',
    image: '/summary-of-ratings/summary2.png',
    link: 'https://drive.google.com/drive/folders/1CtgcQGriHbMHoOdmVCREh2q-qgRj_xob?usp=drive_link',
  },
 
];

export default function FollowUpActionPage() {
  const area = followUpAreas[0];

  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Follow-up Action"
        title="Summary of Ratings"
        subtitle="Action areas for the PAASCU resurvey visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Implementation Progress
            </h1>

            <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
              PAASCU Resurvey Visit Areas
            </p>
          </div>

          <article className="mx-auto w-full max-w-[300px]">
            <a
              href={area.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                <Image
                  src={area.image}
                  alt={`${area.name} PAASCU card`}
                  width={1500}
                  height={2333}
                  className="h-auto w-full cursor-pointer"
                  priority
                />
              </div>
            </a>

            <h2 className="mt-2 min-h-[60px] whitespace-pre-line text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
              {area.name}
            </h2>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
