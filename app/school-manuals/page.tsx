import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'School Manuals | SCC Biñan PAASCU 2026',
  description: 'School manuals and policy references for accreditation.',
};

const manualItems = [
  {
    name: 'Administrative Manual',
    image: '/school-manual/admin2.png',
    link: 'https://drive.google.com/file/d/1cHRviG1wzFDKmBVfi-aeUNcoT5bsqfJ6/view?usp=sharing',
  },
  {
    name: 'Standard Operating Guide',
    image: '/school-manual/standard2.png',
    link: 'https://drive.google.com/drive/folders/149WTWifnZiTbtvRkPQBtjJXKi-nyD4ED?usp=sharing',
  },
  {
    name: 'Faculty Manual',
    image: '/school-manual/faculty2.png',
    link: 'https://drive.google.com/file/d/1sT2LeCBvmp1UHiSjGr4PBnKYpuYDXe6o/view?usp=sharing',
  },
  {
    name: 'Student Handbook',
    image: '/school-manual/student2.png',
    link: 'https://drive.google.com/file/d/1PBn-mk2WNFLFQyVAqBsfrUwyH-iGcPfK/view?usp=sharing',
  },
  {
    name: 'Auxiliary & Support Personnel Manual',
    image: '/school-manual/asp2.png',
    link: 'https://drive.google.com/file/d/1wl1SmCvEtSUIhpaWOZNw_NhDnnz16_JX/view?usp=sharing',
  },
];

export default function SchoolManualsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Manuals"
        title="Part VII : School Manuals"
        subtitle="Institutional Policies, Procedures, and Operational Guidelines"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8">
            {manualItems.map((item, index) => (
              <article
                key={item.name}
                className="w-full max-w-[340px] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                    <Image
                      src={item.image}
                      alt={`${item.name} manual card`}
                      width={1500}
                      height={2333}
                      className="h-auto w-full cursor-pointer"
                      priority={index < 2}
                    />
                  </div>
                </a>

                <h2 className="mt-2 min-h-[60px] text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
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