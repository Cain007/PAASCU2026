import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-950/10 bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-950/55 via-neutral-950 to-neutral-900" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 shadow-lg shadow-red-950/20 ring-1 ring-white/20">
              <Image
                src="/LOGO.png"
                alt="Sta. Catalina College Inc. Biñan logo"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-extrabold tracking-wide text-white sm:text-base">
                SCC Biñan
              </p>
              <p className="text-xs font-medium text-amber-200">
                PAASCU Accreditation 2026
              </p>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-sm font-medium text-white/80">
              Philippine Accrediting Association of Schools, Colleges and Universities
            </p>
            <p className="mt-2 text-xs text-white/45">
              © 2026 Sta. Catalina College Inc. Biñan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
