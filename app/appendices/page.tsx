import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Summary of Appendices | SCC Biñan PAASCU 2026',
  description: 'Summary of appendices for the PAASCU resurvey visit.',
};


const analysisAreas = [
  {
    name: 'Leadership and\nGovernance',
    image: '/props/leadership2.png',
    link: 'https://drive.google.com/file/d/1d_O7sJySMIpA8sVH9oGD_FLgJ1xrmcaG/view?usp=sharing',
  },
  {
    name: 'Quality\nAssurance',
    image: '/props/quality2.png',
    link: 'https://drive.google.com/file/d/1qwFg0kqwvVJszsODkecKN8iJaoW94MtK/view?usp=sharing',
  },
  {
    name: 'Resource\nManagement',
    image: '/props/resource2.png',
    link: 'https://drive.google.com/file/d/15UY1bEjQ-gL7CoWaIBIdpuZGC8UyvnAr/view?usp=sharing',
  },
  {
    name: 'Teaching and\nLearning',
    image: '/props/teaching2.png',
    link: 'https://drive.google.com/file/d/1WKH-N2kPPH7wAxAyDFQU7_QUu-Jvry1T/view?usp=sharing',
  },
  {
    name: 'Student\nServices',
    image: '/props/student2.png',
    link: 'https://drive.google.com/file/d/18dC_SVypwidzUUy_tg48LXx_5HPCtVI9/view?usp=sharing',
  },
  {
    name: 'External\nRelations',
    image: '/props/external3.png',
    link: 'https://drive.google.com/file/d/1sEzZQQ6CSIFw6Ft6ve5uVc_Plxmx5iYL/view?usp=sharing',
  },
  {
    name: 'Research',
    image: '/props/research2.png',
    link: 'https://drive.google.com/file/d/14qDECTgmH9brEnj_UDfz066G4uxTEPHE/view?usp=sharing',
  },
  {
    name: 'Results',
    image: '/props/result2.png',
    link: 'https://drive.google.com/file/d/1tDtfalz8bheMHy0eCJY3os88ROWFWKCD/view?usp=sharing',
  },
];

export default function AnalysisOfTheSchoolPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Analysis of the School"
        title="Part V : Summary of Appendices"
        subtitle="Compilation of Supporting Evidence and Reference Materials"
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