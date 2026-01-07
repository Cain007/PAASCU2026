export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SC</span>
          </div>
          <span className="text-white font-semibold text-lg">SCC-Biñan</span>
        </div>
        <p className="text-sm">PAASCU Accreditation</p>
        <p className="text-xs mt-2 text-slate-500">
          Philippine Accrediting Association of Schools, Colleges and Universities
        </p>
      </div>
    </footer>
  );
}
