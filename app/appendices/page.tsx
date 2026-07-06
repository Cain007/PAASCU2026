import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Summary of Appendices | SCSJ-IBED PAASCU 2026',
  description: 'Summary of appendices for the PAASCU resurvey visit.',
};


const analysisAreas = [
  {
    name: 'Leadership and\nGovernance',
    image: '/props/leadership2.png',
    link: 'https://drive.google.com/drive/folders/1vsiBDowINMQHUvMvlmk91zv_Pkku6xMo?usp=sharing',
  },
  {
    name: 'Quality\nAssurance',
    image: '/props/quality2.png',
    link: 'https://drive.google.com/drive/folders/1qs69TOOEN1TlMn-yrhP0rU9mYSAOoJKu?usp=sharing',
  },
  {
    name: 'Resource\nManagement',
    image: '/props/resource2.png',
    link: 'https://drive.google.com/drive/folders/1RxZeW4fm9mLBHF40n3PsbGaosc0ZXOmw?usp=sharing',
  },
  {
    name: 'Teaching and\nLearning',
    image: '/props/teaching2.png',
    link: 'https://drive.google.com/drive/folders/1akriVUcZmGbJJHIsvtw-crKudBX9znWf?usp=sharing',
  },
  {
    name: 'Student\nServices',
    image: '/props/student2.png',
    link: 'https://drive.google.com/drive/folders/1NbDIB_Urt5mDIDAmebGP2iy45yp6jMaW?usp=sharing',
  },
  {
    name: 'External\nRelations',
    image: '/props/external2.png',
    link: 'https://drive.google.com/drive/folders/1iOBeBK0PlCB-9NfQUuSD8etyq0ZG75L7?usp=sharing',
  },
  {
    name: 'Research',
    image: '/props/research2.png',
    link: 'https://drive.google.com/drive/folders/1Ymon49pHyNYHrruThjtqzv9m2jttFmHP?usp=sharing',
  },
  {
    name: 'Results',
    image: '/props/result2.png',
    link: 'https://drive.google.com/drive/folders/1wfQDlugFVV6MAZznQF9PpaNWqV76kgZl?usp=sharing',
  },
];

export default function AnalysisOfTheSchoolPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Analysis of the School"
        title="Part V : Summary of Appendices"
        subtitle="PAASCU Resurvey Visit Areas"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Evidence of Implementation
            </h1>

            <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
              PAASCU Resurvey Visit Areas
            </p>
          </div>

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