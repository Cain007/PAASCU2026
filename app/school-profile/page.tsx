import { Metadata } from 'next';
import Image from 'next/image';
import ContentSection from '@/components/ui/ContentSection';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Award, GraduationCap, Building, BookOpen, Users, FileText, Church, Cross } from 'lucide-react';
import Link from 'next/link';

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
      {/* Sticky Hero Container */}
      <div className="relative">
        {/* Sticky Hero Section - stays fixed while content scrolls over */}
        <section className="sticky top-0 h-screen overflow-hidden flex items-center">
          {/* Background Image */}
          <Image
            src="/schoolbldg.png"
            alt="School Building"
            fill
            className="object-cover"
            priority
          />
          
          {/* Brightness overlay for OLED devices */}
          <div className="absolute inset-0 bg-white/20" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/55 to-slate-900/40" />
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Main Content */}
                <div className="space-y-8">
                  {/* Since 1942 Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-0.5 bg-amber-400" />
                    <span className="text-amber-300 font-semibold tracking-widest uppercase text-sm">Since 1942</span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    A Legacy of{' '}
                    <span className="text-amber-300">Catholic Education</span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                    Over 80 years of forming Christ-like individuals through Gospel-centered education
                  </p>
                  
                  {/* Description */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <p className="text-white/90 leading-relaxed text-lg">
                      Sta. Catalina College, Inc. stands as a distinguished{' '}
                      <span className="font-semibold text-amber-300">Catholic Dominican institution</span>{' '}
                      committed to the total formation of students. As the{' '}
                      <span className="font-semibold text-red-400">first Catholic school in Biñan, Laguna</span>,
                      we continue to provide Christian education to the youth of the City of Biñan and neighboring towns.
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href="https://docs.google.com/document/d/e/2PACX-1vRiobEsKpoGia4I5FECaKOn6JLJBiRP7z4XQsiG-OLTr_Ki6WocDSjze3NtTTEPXA/pub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-red-500/25"
                  >
                    <FileText className="w-5 h-5" />
                    View Complete History Document
                  </Link>
                </div>
                
                {/* Right Column - Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Years of Excellence */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">83+</div>
                    <div className="text-white/70 text-sm">Years of Excellence</div>
                  </div>
                  
                  {/* Catholic Dominican */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                      <Cross className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">Dominican</div>
                    <div className="text-white/70 text-sm">Catholic Institution</div>
                  </div>
                  
                  {/* First Catholic School */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <Church className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">First</div>
                    <div className="text-white/70 text-sm">Catholic School in Biñan</div>
                  </div>
                  
                  {/* PAASCU Accredited */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">Level II</div>
                    <div className="text-white/70 text-sm">PAASCU Accredited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content that scrolls over the hero */}
        <div className="relative z-10 bg-white">
          {/* Timeline Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white overflow-hidden">
            {/* Abstract decorations - Left side */}
            <div className="absolute left-0 top-20 hidden lg:block">
              <div className="flex flex-col gap-4">
                <div className="w-1 h-24 bg-linear-to-b from-red-200 to-transparent rounded-full ml-8" />
                <div className="w-3 h-3 bg-red-300 rounded-full ml-7" />
                <div className="w-2 h-2 bg-red-200 rounded-full ml-10" />
                <div className="w-1 h-16 bg-linear-to-b from-red-100 to-transparent rounded-full ml-6" />
              </div>
            </div>
            <div className="absolute left-12 top-1/3 hidden lg:block">
              <div className="w-8 h-8 border-2 border-red-100 rounded-lg rotate-45 opacity-60" />
            </div>
            <div className="absolute left-6 bottom-40 hidden lg:block">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-amber-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-amber-300 rounded-full" />
                <div className="w-1.5 h-1.5 bg-amber-200 rounded-full" />
              </div>
            </div>
            
            {/* Abstract decorations - Right side */}
            <div className="absolute right-0 top-32 hidden lg:block">
              <div className="flex flex-col items-end gap-4">
                <div className="w-1 h-20 bg-linear-to-b from-amber-200 to-transparent rounded-full mr-10" />
                <div className="w-2 h-2 bg-amber-300 rounded-full mr-12" />
                <div className="w-3 h-3 bg-red-200 rounded-full mr-8" />
              </div>
            </div>
            <div className="absolute right-10 top-1/2 hidden lg:block">
              <div className="w-6 h-6 border-2 border-amber-100 rounded-full opacity-60" />
            </div>
            <div className="absolute right-8 bottom-32 hidden lg:block">
              <div className="w-10 h-10 border border-red-100 rounded-lg rotate-12 opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto">
              <AnimatedSection direction="up">
                <SectionHeader
                  badge="Our Journey"
                  title="Historical Timeline"
                  subtitle="Key milestones in our journey of educational excellence"
                />
              </AnimatedSection>

              <div className="max-w-4xl mx-auto mt-12">
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
            </div>
          </section>

          {/* Detailed History Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Abstract decorations - Left side */}
            <div className="absolute left-4 top-24 hidden lg:block">
              <div className="w-12 h-12 border border-gray-100 rounded-full opacity-60" />
            </div>
            <div className="absolute left-8 top-1/3 hidden lg:block">
              <div className="flex flex-col gap-2">
                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
              </div>
            </div>
            
            {/* Abstract decorations - Right side */}
            <div className="absolute right-6 top-40 hidden lg:block">
              <div className="w-8 h-8 border border-gray-100 rounded-lg rotate-12 opacity-50" />
            </div>
            <div className="absolute right-10 bottom-1/3 hidden lg:block">
              <div className="w-1 h-16 bg-linear-to-b from-gray-200 to-transparent rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection direction="up">
                <SectionHeader
                  badge="In Depth"
                  title="Our Story"
                  subtitle="A closer look at our rich history and milestones"
                />
              </AnimatedSection>

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
            </div>
          </section>

          {/* Accreditation & Anniversary Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-50 to-white overflow-hidden">
            {/* Abstract decorations - Left side */}
            <div className="absolute left-6 top-20 hidden lg:block">
              <div className="w-6 h-6 border-2 border-violet-100 rounded-full opacity-60" />
            </div>
            <div className="absolute left-10 top-1/2 hidden lg:block">
              <div className="flex flex-col gap-3">
                <div className="w-1 h-12 bg-linear-to-b from-violet-200 to-transparent rounded-full" />
                <div className="w-2 h-2 bg-violet-200 rounded-full" />
              </div>
            </div>
            
            {/* Abstract decorations - Right side */}
            <div className="absolute right-8 top-32 hidden lg:block">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-red-300 rounded-full" />
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full" />
              </div>
            </div>
            <div className="absolute right-6 bottom-40 hidden lg:block">
              <div className="w-10 h-10 border border-red-100 rounded-lg -rotate-12 opacity-50" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection direction="up">
                <SectionHeader
                  badge="Excellence"
                  title="Recognition & Milestones"
                  subtitle="Our commitment to quality education"
                />
              </AnimatedSection>

              <AnimatedSection direction="up" delay={100}>
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

              <AnimatedSection direction="up" delay={200}>
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

              {/* Closing Statement */}
              <AnimatedSection direction="up" delay={300}>
                <div className="max-w-3xl mx-auto text-center mt-12">
                  <div className="bg-linear-to-r from-red-600 to-rose-700 p-8 lg:p-12 rounded-2xl text-white">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Continuing Commitment</h2>
                    <p className="text-red-100 leading-relaxed">
                      Sta. Catalina College, Inc. vows to continue its service of multiplying Christ-like individuals 
                      through its dedication and commitment to its <span className="font-semibold text-white">Mission and Vision</span>.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
