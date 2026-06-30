import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Conclusion | SCSJ-IBED PAASCU 2026',
  description: 'Conclusion highlights for the PAASCU resurvey visit.',
};

const conclusionItems = [
  {
    name: 'Leadership and\nGovernance',
    image: '/conclusion/leadership.png',
    link: 'https://docs.google.com/document/d/193QyxlABd3EWPBoH9ejR-uGKvFAOjX0T/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Quality\nAssurance',
    image: '/conclusion/quality.png',
    link: 'https://docs.google.com/document/d/1gdXss_20n4fRiH_lnCchsxQ0Gwi9Lfp8/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Resource\nManagement',
    image: '/conclusion/resource.png',
    link: 'https://docs.google.com/document/d/1g_UJCjzR16oFFdwpDwbigXmqbd4Dyt4F/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Teaching and\nLearning',
    image: '/conclusion/teaching.png',
    link: 'https://docs.google.com/document/d/1QavIltQgkWFBIEyaSSXli_G2ygTvkkrG/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Student\nServices',
    image: '/conclusion/student.png',
    link: 'https://docs.google.com/document/d/1iBxtgnXyY0ScxV3P0iZXmsoTat8dY2To/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'External\nRelations',
    image: '/conclusion/external.png',
    link: 'https://docs.google.com/document/d/1xabSDyJwpmBRaaLFHVOmJs0GkL7rcBSQ/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Research',
    image: '/conclusion/research.png',
    link: 'https://docs.google.com/document/d/1O0meiFERAgJdRTe0i2v1UXLBrbN8_x2I/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
  {
    name: 'Results',
    image: '/conclusion/result.png',
    link: 'https://docs.google.com/document/d/1L3AS13ZBgB2sZRwh2JNC2RXgBgHOKZTJ/edit?usp=drive_link&ouid=104708168691383246323&rtpof=true&sd=true',
  },
];

export default function ConclusionPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Part IV"
        title="Conclusion"
        subtitle="PAASCU Resurvey Visit"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Conclusion
            </h1>

            <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
              PAASCU Resurvey Visit
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {conclusionItems.map((item, index) => (
              <article
                key={item.name}
                className="mx-auto w-full max-w-[540px] p-2"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <Image
                      src={item.image}
                      alt={`${item.name} PAASCU card`}
                      width={1500}
                      height={2333}
                      className="w-full h-auto cursor-pointer"
                      priority={index < 2}
                    />
                  </div>
                </a>

                <h2 className="mt-2 min-h-[60px] whitespace-pre-line text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                  {item.name}
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