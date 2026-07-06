import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Image
            src="/LOGO.png"
            alt="Sta. Catalina College Inc. Biñan logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="text-lg font-semibold text-white">SCC-Biñan</span>
        </div>
        <p className="text-sm">PAASCU Accreditation</p>
        <p className="mt-2 text-xs text-slate-500">
          Philippine Accrediting Association of Schools, Colleges and Universities
        </p>
      </div>
    </footer>
  );
}
