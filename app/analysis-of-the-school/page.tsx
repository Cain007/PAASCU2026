import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Analysis of the School | SCC Biñan PAASCU 2026',
  description: 'Analysis areas for the PAASCU resurvey visit.',
};

const analysisAreas = [
  {
    name: 'Leadership and\nGovernance',
    image: '/props/leadership2.png',
    link: 'https://drive.google.com/file/d/1HYxCX2aVHJSzmC_a_bRE1MfC9qt1mJb0/view?usp=sharing',
  },
  {
    name: 'Quality\nAssurance',
    image: '/props/quality2.png',
    link: 'https://drive.google.com/file/d/11fxq5zytKiUrhu46I-Lf7KNjMvO94sgo/view?usp=sharing',
  },
  {
    name: 'Resource\nManagement',
    image: '/props/resource2.png',
    link: 'https://drive.google.com/file/d/1BVU-q6qOB9uEcr0PoocDJLgVrMX20tze/view?usp=sharing',
  },
  {
    name: 'Teaching and\nLearning',
    image: '/props/teaching2.png',
    link: 'https://drive.google.com/file/d/1I8wHzp3LVPuXRIRlAjOcWXaP0hfqmLMy/view?usp=sharing',
  },
  {
    name: 'Student\nServices',
    image: '/props/student2.png',
    link: 'https://drive.google.com/file/d/1UL26l9ot0zmJlKAqbSDuszhgCBvlTBmJ/view?usp=sharing',
  },
  {
    name: 'External\nRelations',
    image: '/props/external3.png',
    link: 'https://drive.google.com/file/d/1RcShMgL3rrvYwfOtSbmyyKSuqIIlrKHx/view?usp=sharing',
  },
  {
    name: 'Research',
    image: '/props/research2.png',
    link: 'https://drive.google.com/file/d/1Z7PaKB8T61WIwWlbDcN0WEoMPjKGrsuy/view?usp=sharing',
  },
  {
    name: 'Results',
    image: '/props/result2.png',
    link: 'https://drive.google.com/file/d/14jdLOiY0032twObnUZPke1L5fwVgpWGg/view?usp=sharing',
  },
];

export default function AnalysisOfTheSchoolPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Analysis of the School"
        title="Part III : Analysis of the School"
        subtitle="Comprehensive Analysis of Institutional Practices and Quality Standards"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {analysisAreas.map((area, index) => (
              <article
                key={area.name}
                className="mx-auto w-full max-w-[540px] p-2"
              >
                <a
                  href={area.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <Image
                      src={area.image}
                      alt={`${area.name} PAASCU card`}
                      width={1500}
                      height={2333}
                      className="w-full h-auto cursor-pointer"
                      priority={index < 2}
                    />
                  </div>
                </a>

                <h2 className="mt-2 min-h-[60px] whitespace-pre-line text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                  {area.name}
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