import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Conclusion | SCC Biñan PAASCU 2026',
  description: 'Conclusion highlights for the PAASCU resurvey visit.',
};

const conclusionItems = [
  {
    name: 'Leadership and\nGovernance',
    image: '/props/leadership2.png',
    link: 'https://drive.google.com/file/d/1RjbnVTIuZhggLIZ7MfARTT4RhMVeS62C/view?usp=sharing',
  },
  {
    name: 'Quality\nAssurance',
    image: '/props/quality2.png',
    link: 'https://drive.google.com/file/d/1tZ_ziDbSQSXdhDLl9GL63_eSaHG9cRFq/view?usp=sharing',
  },
  {
    name: 'Resource\nManagement',
    image: '/props/resource2.png',
    link: 'https://drive.google.com/file/d/189L4REmKi3G3855rqZESJgWUjrKgr46F/view?usp=sharing',
  },
  {
    name: 'Teaching and\nLearning',
    image: '/props/teaching2.png',
    link: 'https://drive.google.com/file/d/189L4REmKi3G3855rqZESJgWUjrKgr46F/view?usp=sharing',
  },
  {
    name: 'Student\nServices',
    image: '/props/student2.png',
    link: 'https://drive.google.com/file/d/1s_3qJ3iNWaot4DWYr2aCrzdUpxyyk9hc/view?usp=sharing',
  },
  {
    name: 'External\nRelations',
    image: '/props/external3.png',
    link: 'https://drive.google.com/file/d/13kOxLDVUZ90LhdOeTLOl90x8KMd5MdmY/view?usp=sharing',
  },
  {
    name: 'Research',
    image: '/props/research2.png',
    link: 'https://drive.google.com/file/d/16D4WbOdTf_eZ_rRX353yT-DOh7jOfugi/view?usp=sharing',
  },
  {
    name: 'Results',
    image: '/props/result2.png',
    link: 'https://drive.google.com/file/d/1FvF3gU4X5vbb6lGC_CsptyMIU2rDLwPP/view?usp=sharing',
  },
];

export default function ConclusionPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Part IV"
        title="Part IV : Conclusion"
        subtitle="Overall Assessment, Key Strengths, and Continuous Quality Improvement"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          

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