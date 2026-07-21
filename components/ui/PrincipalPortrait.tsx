import Image from 'next/image';

export default function PrincipalPortrait({
  src = '/dominican-sister/srai.png',
  alt = 'Directress and Principal',
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
            School Leadership
          </p>
          <h2 className="mt-1 text-xl font-bold text-neutral-950">
            School Head / Principal
          </h2>
        </div>

        <div className="relative bg-white px-5 pt-6">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" aria-hidden />
          <div className="relative mx-auto aspect-[7/9] w-full max-w-[360px]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 360px, 80vw"
              className="select-none object-contain object-bottom drop-shadow-[0_18px_24px_rgba(15,23,42,0.16)]"
              priority
            />
          </div>
        </div>

        <div className="border-t border-amber-200 bg-[#f7c76b] px-5 py-5 text-neutral-950">
          <p className="text-sm font-bold text-red-800">
            Sta. Catalina College Inc.
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-800">
            Welcoming the PAASCU resurvey visit with gratitude, confidence, and a
            shared commitment to continuous improvement.
          </p>
        </div>
      </div>
    </aside>
  );
}
