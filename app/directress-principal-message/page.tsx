import { Metadata } from 'next';
import { CheckCircle2, HeartHandshake, Quote, Sparkles } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import Footer from '@/components/layout/Footer';
import PrincipalPortrait from '@/components/ui/PrincipalPortrait';

export const metadata: Metadata = {
  title: 'Directress/Principal Message | SCSJ-IBED PAASCU 2026',
  description: 'Official message from the Directress/Principal.',
};

const messageParagraphs = [
  'This profound statement reminds us that authentic growth begins with sincere reflection. The same is true of an educational institution. Without continuous self-examination and external evaluation, a school risks becoming complacent rather than continually responding to the changing needs of the times. Accreditation, therefore, is not merely a process of evaluation; it is an opportunity for renewal, transformation, and excellence.',
  'As we welcome the PAASCU accreditors to Sta. Catalina College, Inc., we receive this visit with gratitude, confidence, and humility. We recognize accreditation as a valuable partnership that helps us affirm what we do well, identify areas for improvement, and strengthen our commitment to our mission of forming learners who excel academically, grow spiritually, and serve compassionately.',
  'Inspired by the Dominican tradition of seeking truth, we embrace this accreditation journey as a living expression of our school\'s motto, "Passion for Truth and Compassion for Humanity." Like St. Dominic de Guzman, who believed that truth is pursued through study, prayer, dialogue, and service, we remain steadfast in our commitment to providing an education that transforms lives and nurtures responsible, faith-filled, and compassionate citizens.',
  'This accreditation is not the work of a few but the shared responsibility of our entire school community. I extend my deepest appreciation to our administrators, faculty, staff, students, parents, alumni, and all our partners whose dedication, collaboration, and unwavering support have made this journey possible. Every effort, whether seen or unseen, reflects our collective pursuit of excellence.',
  'As we open our doors to our PAASCU accreditors, may we also open our minds to learn, our hearts to receive constructive recommendations, and our spirits to embrace continuous improvement. We welcome this experience not as the culmination of our efforts but as another milestone in our enduring journey toward educational excellence.',
  'May God continue to bless Sta. Catalina College, Inc. as we faithfully pursue truth, serve with compassion, and inspire generations of learners to become instruments of faith, wisdom, and hope.',
  'Welcome to Sta. Catalina College, Inc. and thank you for accompanying us on this meaningful journey of quality assurance and educational excellence.',
];

const messageHighlights = [
  {
    title: 'Reflective growth',
    description: 'Accreditation is treated as a moment of honest review and renewal.',
    icon: Sparkles,
  },
  {
    title: 'Shared mission',
    description: 'The school community moves together in service of truth and compassion.',
    icon: HeartHandshake,
  },
  {
    title: 'Continuous improvement',
    description: 'Recommendations become guideposts for stronger educational excellence.',
    icon: CheckCircle2,
  },
];

export default function DirectressPrincipalMessagePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Hero
        badge="Message"
        title="Part VIII : School Head / Principal Message"
        subtitle="Leadership message for the PAASCU resurvey visit"
        size="md"
        align="center"
      />

      <section className="border-b border-neutral-200 bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {messageHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="text-base font-bold text-neutral-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          <PrincipalPortrait src="/dominican-sister/srai.png" alt="Directress and Principal" />

          <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <div className="border-b border-amber-200 bg-[#f7c76b] px-6 py-8 text-neutral-950 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-800">
                A Message From Our Directress
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Leading With Purpose, Growing With Heart
              </h2>
            </div>

            <div className="px-6 py-8 sm:px-8 lg:px-10">
              <figure className="mb-8 border-l-4 border-red-700 bg-red-50 px-5 py-5">
                <Quote className="mb-3 h-6 w-6 text-red-700" aria-hidden />
                <blockquote className="text-xl font-semibold leading-8 text-neutral-950">
                  &quot;The unexamined life is not worth living.&quot;
                </blockquote>
                <figcaption className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Socrates
                </figcaption>
              </figure>

              <div className="space-y-6 text-base leading-8 text-neutral-700">
                {messageParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
