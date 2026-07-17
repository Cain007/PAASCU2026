import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Follow-up Action | SCC Biñan PAASCU 2026',
  description: 'Follow-up action areas for the PAASCU resurvey visit.',
};

const followUpAreas = [
  {
    name: 'Administration',
    image: '/follow-up/administration2.png',
    link: 'https://drive.google.com/file/d/1YkdR3ZtOzUPqasiY3zltfoeu2wB5XbTt/view?usp=sharing',
  },
  {
    name: 'Faculty',
    image: '/follow-up/faculty2.png',
    link: 'https://drive.google.com/file/d/1uXwQkzTRUi-Y_Q_4qceyfbWu7CIKuMqp/view?usp=sharing',
  },
  {
    name: 'Curriculum and\nInstruction',
    image: '/follow-up/curriculum2.png',
    link: 'https://drive.google.com/file/d/1qnl_OIir4THap_iCABXixAyIE9BzhRmn/view?usp=sharing',
  },
  {
    name: 'Library and\nAudio-Visual Center',
    image: '/follow-up/library2.png',
    link: 'https://drive.google.com/file/d/1pY5511NZLOxya8BKmTrB-V2nHbkCF_e5/view?usp=sharing',
  },
  {
    name: 'Laboratories /\nFacilities',
    image: '/follow-up/laboratory2.png',
    link: 'https://drive.google.com/file/d/1hgOTXcmdpaNYliaigM_UqBikwmVjnE5d/view?usp=sharing',
  },
  {
    name: 'Student\nServices',
    image: '/follow-up/student3.png',
    link: 'https://drive.google.com/file/d/16_j-mzf0sL3ImI4GOeOh7hmroNPwFZzo/view?usp=sharing',
  },
  {
    name: 'School and\nCommunity',
    image: '/follow-up/school3.png',
    link: 'https://drive.google.com/file/d/1X7cJnELa_BDGZzYG1Y2P717yGjuRmJYm/view?usp=sharing',
  },
];

const firstRow = followUpAreas.slice(0, 4);
const secondRow = followUpAreas.slice(4);

export default function FollowUpActionPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Follow-up Action"
        title="Part II : Follow-up Action"
        subtitle="Actions Taken in Response to Previous PAASCU Recommendations"
        size="md"
        align="center"
      />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          

          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {firstRow.map((area, index) => (
                <article
                  key={area.name}
                  className="mx-auto w-full max-w-[540px]"
                >
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

            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-8">
              {secondRow.map((area) => (
                <article
                  key={area.name}
                  className="w-full max-w-[540px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                >
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
                        className="w-full h-auto cursor-pointer"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}