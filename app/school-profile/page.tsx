import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContentSection from '@/components/ui/ContentSection';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Award, GraduationCap, Building, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'School Profile | SCSJ-IBED PAASCU 2026',
  description: 'Discover the rich history of Sta. Catalina College, Inc. - the first Catholic school in Biñan, Laguna, established in 1942.',
};

const timelineEvents = [
  {
    year: '1942',
    title: 'The Beginning',
    description: 'Sta. Catalina College, Inc. was established on May 2, 1942, as a Catechetical School.',
    icon: BookOpen,
  },
  {
    year: '1943',
    title: 'Curriculum Expansion',
    description: 'Religion and Spanish courses were offered to students.',
    icon: GraduationCap,
  },
  {
    year: '1946',
    title: 'Academic Course',
    description: 'The Dominican Sisters of St. Catherine of Siena offered an Academic Course and secured government recognition for Elementary and High School Education.',
    icon: Award,
  },
  {
    year: '1956',
    title: 'Campus Expansion',
    description: 'Expansion started by purchasing land for the present site. Construction was financed by the Bishop of Lipa.',
    icon: Building,
  },
  {
    year: '1963',
    title: 'New Building',
    description: 'A three-story concrete building with nine classrooms, Sisters\' quarters, and a chapel was erected. The school was named COLEGIO DE STA. CATALINA DE SENA.',
    icon: Building,
  },
  {
    year: '1996',
    title: 'Name Change & Technology',
    description: 'School name changed to Sta. Catalina College. Computer education was offered from Grade 1 to Fourth Year.',
    icon: GraduationCap,
  },
  {
    year: '2006',
    title: 'Night High School',
    description: 'Night high school classes opened to help working students and less fortunate youth finish high school.',
    icon: Users,
  },
  {
    year: '2012',
    title: 'K to 12 Program',
    description: 'Implementation of the K to 12 Basic Education Program, starting with Kindergarten to Grade 10.',
    icon: BookOpen,
  },
  {
    year: '2014',
    title: 'PAASCU Level II',
    description: 'Granted PAASCU Level II Accreditation Status after the Re-Survey Visit on March 3-4, 2014.',
    icon: Award,
  },
  {
    year: '2016',
    title: 'Senior High School & TESDA',
    description: 'Offered Senior High School (STEM, HUMSS, ABM, GAS) and acquired TESDA Training Center License for Food Beverage Services and Events Management.',
    icon: GraduationCap,
  },
  {
    year: '2017',
    title: 'Diamond Jubilee',
    description: 'Celebrated 75th Diamond Jubilee Year (October 28, 2016 – October 28, 2017).',
    icon: Award,
  },
  {
    year: '2019',
    title: 'PAASCU Re-Accreditation',
    description: 'Granted Level II Re-Accreditation Status valid until May 2024 after the re-survey on February 26-27, 2019.',
    icon: Award,
  },
  {
    year: '2022',
    title: '80th Founding Anniversary',
    description: 'Celebrated 80th Founding Anniversary with the theme: "Sabayang-Sulyap at pagTanaw sa Adhikaing Catherineans".',
    icon: Award,
  },
];

export default function SchoolProfilePage() {
  return (
    <main className="min-h-screen">
      <Hero
        variant="simple"
        badge="School Profile"
        title="Our History"
        subtitle="The first Catholic school in Biñan, Laguna — serving the community since 1942"
      >
        <Breadcrumbs items={[{ label: 'School Profile' }]} className="justify-center text-red-200" />
      </Hero>

      {/* Introduction Section */}
      <ContentSection>
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Since 1942"
              title="A Legacy of Catholic Education"
              subtitle="Over 80 years of forming Christ-like individuals through Gospel-centered education"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-center mb-8">
                Sta. Catalina College, Inc. stands as a distinguished <span className="font-semibold text-gray-800">Catholic Dominican institution</span> committed 
                to the total formation of students. As the <span className="font-semibold text-red-600">first Catholic school in Biñan, Laguna</span>, 
                we continue to provide Christian education to the youth of the City of Biñan and neighboring towns.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Timeline Section */}
      <ContentSection background="gradient">
        <AnimatedSection direction="up">
          <SectionHeader
            badge="Our Journey"
            title="Historical Timeline"
            subtitle="Key milestones in our journey of educational excellence"
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-red-500 via-red-400 to-amber-500" />
            
            {/* Timeline events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <AnimatedSection 
                    key={event.year} 
                    direction={isLeft ? 'left' : 'right'} 
                    delay={index * 50}
                  >
                    <div className={`relative flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                        <div className={`inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-2`}>
                          {event.year}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                      </div>
                      
                      {/* Icon circle */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-red-500 rounded-full flex items-center justify-center shadow-md z-10">
                        <IconComponent className="w-3.5 h-3.5 text-red-600" />
                      </div>
                      
                      {/* Spacer for opposite side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Detailed History Sections */}
      <ContentSection>
        <div className="max-w-4xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Early Beginnings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The early beginnings of Sta. Catalina College, Inc. dates back to <span className="font-semibold">May 2, 1942</span>, as a Catechetical School. 
                    In 1943, Religion and Spanish courses were offered. Four years later, in 1946, the Dominican Sisters of St. Catherine of Siena offered an Academic Course. 
                    They secured government recognition for the Elementary and High School Education. Later, they obtained a permit to open the academic Normal Course for young teachers.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 1956, expansion started by buying the land for its present site. The construction of the building was financed by the Bishop of Lipa, 
                    which Laguna was then a part of. The school assumed its legal name, <span className="font-semibold">COLEGIO DE STA. CATALINA DE SENA</span>. 
                    A three-story concrete building with nine classrooms, Sisters&apos; quarters, and a chapel was erected in 1963. The overwhelming increase in enrollment 
                    was a remarkable result of the school&apos;s inclusion among the first 200 schools in the community which conducted the First National Test for Fourth-Year students.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Service to the Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sta. Catalina College continually provides the youth of the City of Biñan and other neighboring towns with Christian education. 
                    It extends help to poor students through scholarship grants and to out-of-school youth and adults, skills training to enable them to cope 
                    with the economic demands of our times. Night high school classes for the first year opened in <span className="font-semibold">Academic Year 2006-2007</span> to 
                    help working students and less fortunate youth to finish high school.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PAASCU Accreditation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The school takes pride in its continuing quest for academic excellence. Aside from the Congregational and Follow-up Visit (CFV-CEV) to ensure 
                    the offer of quality education, the school sought the help of the <span className="font-semibold">Philippine Accrediting Association of Schools, 
                    Colleges and Universities (PAASCU)</span>. On March 3-4, 2014, SCC had its PAASCU Re-Survey Visit and was granted <span className="font-semibold text-red-600">Level II 
                    Accreditation Status</span>. The school re-applied and had the re-survey on February 26-27, 2019, and was granted Level II Re-Accreditation Status valid until May 2024.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <div className="bg-linear-to-br from-red-50 to-amber-50 p-6 lg:p-8 rounded-2xl border border-red-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">80th Founding Anniversary (2022)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With God&apos;s blessing, Sta. Catalina College, Inc. celebrated its <span className="font-bold text-red-600">80th Founding Anniversary</span> with the theme: 
                    <span className="italic"> &quot;Sabayang-Sulyap at pagTanaw sa Adhikaing Catherineans&quot;</span>. The grand opening was held on May 02, 2022, 
                    with a Eucharistic celebration together with the administration, personnel and staff, parents, students, benefactors, and alumni. 
                    The celebration included the monumental unveiling of the 80th logo marker and the singing of the anniversary hymn at St. Catherine&apos;s ground.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Closing Statement */}
      <ContentSection>
        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-linear-to-r from-red-600 to-rose-700 p-8 lg:p-12 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Continuing Commitment</h2>
              <p className="text-red-100 leading-relaxed">
                Sta. Catalina College, Inc. vows to continue its service of multiplying Christ-like individuals 
                through its dedication and commitment to its <span className="font-semibold text-white">Mission and Vision</span>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </ContentSection>

      <Footer />
    </main>
  );
}
