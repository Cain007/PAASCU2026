import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import WelcomeHero from '@/components/ui/WelcomeHero';
import CTASection from '@/components/ui/CTASection';
import Footer from '@/components/layout/Footer';
import ContentSection from '@/components/ui/ContentSection';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Home | SCSJ-IBED PAASCU 2026',
  description: 'Welcome to the SCSJ-IBED PAASCU Accreditation 2026 portal. Explore our institutional profile, accreditation documents, and comprehensive analysis.',
};



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Swiper Carousel */}
      <WelcomeHero />

      {/* About Section */}
      <ContentSection background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up">
            <SectionHeader
              badge="About This Portal"
              title="Dedicated to Excellence in Education"
              subtitle="This portal serves as the comprehensive documentation hub for our PAASCU accreditation journey."
            />
            <p className="text-gray-600 text-sm leading-relaxed -mt-4 mb-6">
              Navigate through the sections to explore our school profile, detailed institutional analysis,
              follow-up actions, and supporting documents that demonstrate our commitment to quality education.
            </p>
            <Link
              href="/analysis-of-the-school"
              className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:text-red-700 transition-colors"
            >
              View Detailed Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Vision & Mission Section - Slide-in Testimonial Style */}
      <ContentSection>
        <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
          {/* Vision Card - Aligned Left */}
          <AnimatedSection direction="left">
            <div className="md:w-4/5 lg:w-3/4">
              <div className="relative p-6 lg:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-red-600">
                {/* Quote mark decoration */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-red-600 uppercase tracking-wide mb-3">Our Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    {"\"We envision that Sta. Catalina College, Inc. Biñan, Laguna to be "}<span className="font-semibold text-gray-900 not-italic">Innovative and responsive Agent of Evangelization</span>{" in the Spirit of "}<span className="font-bold text-red-600 not-italic">Communion, Participation, and Mission</span>{".\""}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card - Aligned Right */}
          <AnimatedSection direction="right" delay={200}>
            <div className="md:w-4/5 lg:w-3/4 ml-auto">
              <div className="relative p-6 lg:p-8 bg-white rounded-2xl shadow-lg border-r-4 border-amber-500">
                {/* Quote mark decoration */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-amber-600 uppercase tracking-wide mb-3 text-right">Our Mission</h3>
                  <p className="text-gray-700 text-lg leading-relaxed italic text-right">
                    {"\"As a member of "}<span className="font-semibold text-gray-900 not-italic">OP-Siena School System Development</span>{", the community of Sta. Catalina College, the first Catholic School in Biñan, Laguna, commits itself to the "}<span className="font-semibold text-gray-900 not-italic">Evangelizing Mission of the Church</span>{" for Integral Faith Formation that promotes academic proficiency and Gospel values lived by the "}<span className="font-bold text-red-600 not-italic">Dominican Saints and Venerable Francisca del Espiritu Santo de Fuentes</span>{".\""}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Connect With Us - Facebook Section */}
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-red-500 via-rose-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-100">
                <Image
                  src="/schoolFb1.png"
                  alt="Sta. Catalina College Biñan Facebook Page"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={100}>
            <div className="lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow Us
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Stay Connected with
                <span className="block text-red-600">Our Community</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Follow our official Facebook page for the latest updates, announcements, events, and highlights from Sta. Catalina College Biñan. Join our growing community of students, parents, alumni, and educators.
              </p>
              <a
                href="https://www.facebook.com/scccaresbinan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877f2] text-white rounded-lg font-semibold text-sm shadow-lg hover:bg-[#166fe5] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Visit Our Facebook Page
              </a>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Location Section with Google Map */}
      <ContentSection>
        <AnimatedSection direction="up">
          <SectionHeader
            badge="Our Location"
            title="Visit Sta. Catalina College"
            subtitle="Located in the heart of Biñan, Laguna, our campus provides a nurturing environment for academic excellence"
          />
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Map */}
          <AnimatedSection direction="left" delay={100}>
            <div className="w-full h-[350px] lg:h-[380px] rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.0!2d121.0869522!3d14.3392819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9fbadaaaaab%3A0x514e535b17aeac9d!2sSta%20Catalina%20College!5e0!3m2!1sen!2sph!4v1704499200000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sta. Catalina College Location Map"
              />
            </div>
          </AnimatedSection>

          {/* Location Info */}
          <AnimatedSection direction="right" delay={200}>
            <div className="flex flex-col gap-4 h-full">
              <div className="p-5 bg-linear-to-br from-red-50 to-rose-50 rounded-xl border border-red-100">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-11 h-11 bg-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Sta. Catalina College Inc.
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Biñan, Laguna
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm flex-1">
                <h4 className="text-base font-bold text-gray-900 mb-2">About Our Campus</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Sta. Catalina College is committed to providing quality Catholic education. 
                  Our campus offers modern facilities designed to support holistic student development.
                </p>
                <a
                  href="https://www.google.com/maps/place/Sta+Catalina+College/@14.3392819,121.0869522,18.6z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:text-red-700 transition-colors"
                >
                  Get Directions
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      <CTASection
        title="Ready to Explore?"
        description="Discover our comprehensive self-study documentation and see how SCSJ-IBED meets PAASCU accreditation standards."
        buttons={[
          { label: 'Start with School Profile', href: '/school-profile' },
          { label: 'View Follow-up Actions', href: '/follow-up-action', variant: 'secondary' },
        ]}
      />

      <Footer />
    </main>
  );
}
