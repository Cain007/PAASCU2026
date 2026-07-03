import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';
import PrincipalScrollPortrait from '@/components/ui/PrincipalScrollPortrait';

export const metadata: Metadata = {
  title: 'Directress/Principal Message | SCSJ-IBED PAASCU 2026',
  description: 'Official message from the Directress/Principal.',
};

export default function DirectressPrincipalMessagePage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Hero
        badge="Message"
        title="Directress/Principal Message"
        subtitle="Leadership message for the PAASCU resurvey visit"
        size="md"
        align="center"
      />

      {/* Existing scanned/document image, kept as-is */}
      

      {/* New: scroll-driven storytelling section */}
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <PrincipalScrollPortrait
            src="/dominican-sister/srai.png"
            alt="Directress and Principal"
          />

          <div className="pt-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-700">
              A Message From Our Directress
            </p>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Leading With Purpose, Growing With Heart
            </h2>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              "The unexamined life is not worth living." — Socrates
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              This profound statement reminds us that authentic growth begins with sincere reflection. The same is true of an educational institution. Without continuous self-examination and external evaluation, a school risks becoming complacent rather than continually responding to the changing needs of the times. Accreditation, therefore, is not merely a process of evaluation; it is an opportunity for renewal, transformation, and excellence.
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              As we welcome the PAASCU accreditors to Sta. Catalina College, Inc., we receive this visit with gratitude, confidence, and humility. We recognize accreditation as a valuable partnership that helps us affirm what we do well, identify areas for improvement, and strengthen our commitment to our mission of forming learners who excel academically, grow spiritually, and serve compassionately.
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              Inspired by the Dominican tradition of seeking truth, we embrace this accreditation journey as a living expression of our school's motto, "Passion for Truth and Compassion for Humanity." Like St. Dominic de Guzman, who believed that truth is pursued through study, prayer, dialogue, and service, we remain steadfast in our commitment to providing an education that transforms lives and nurtures responsible, faith-filled, and compassionate citizens.
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              This accreditation is not the work of a few but the shared responsibility of our entire school community. I extend my deepest appreciation to our administrators, faculty, staff, students, parents, alumni, and all our partners whose dedication, collaboration, and unwavering support have made this journey possible. Every effort, whether seen or unseen, reflects our collective pursuit of excellence.
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              As we open our doors to our PAASCU accreditors, may we also open our minds to learn, our hearts to receive constructive recommendations, and our spirits to embrace continuous improvement. We welcome this experience not as the culmination of our efforts but as another milestone in our enduring journey toward educational excellence.
            </p>

            <p className="mb-7 text-base leading-8 text-neutral-700">
              May God continue to bless Sta. Catalina College, Inc. as we faithfully pursue truth, serve with compassion, and inspire generations of learners to become instruments of faith, wisdom, and hope.
            </p>

            <p className="text-base leading-8 text-neutral-700">
              Welcome to Sta. Catalina College, Inc. and thank you for accompanying us on this meaningful journey of quality assurance and educational excellence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
