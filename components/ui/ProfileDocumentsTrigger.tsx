'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, BookOpen, Target, Network, Users, GraduationCap, 
  BarChart3, ShieldCheck, FileText, Download 
} from 'lucide-react';
import Link from 'next/link';

// TODO: Replace the '#' href values with your actual Google Drive or internal document URLs
const documents = [
  { title: 'History', icon: BookOpen, href: 'https://drive.google.com/file/d/1Zs8i9Q5dgpnhRQI5MDKLFfyiiJDobONT/view?usp=sharing' },
  { title: 'Vision-Mission Statement', icon: Target, href: 'https://drive.google.com/file/d/1zIyUWxPUBiuwUtWxHvoshjFypNC2w0Hs/view?usp=sharing' },
  { title: 'Institutional Organizational Chart', icon: Network, href: 'https://drive.google.com/file/d/1pStGXKE7wInMQzKCdojWWHuMo5l-ppb-/view?usp=sharing' },
  { title: 'Governing Board', icon: Users, href: 'https://drive.google.com/file/d/1TkFct6hqez7XWhbLH80Z5CwI5lscxiwT/view?usp=sharing' },
  { title: 'Educational Program', icon: GraduationCap, href: 'https://drive.google.com/file/d/11EnGqqhzmRBk3FShHL_c5I_ckvL-YSn_/view?usp=sharing' },
  { title: 'Enrolment Data', icon: BarChart3, href: 'https://drive.google.com/file/d/17rVtYg2yIVdZTK0obsxOuOdjwJN802X4/view?usp=sharing' },
  { title: 'Regulatory Environment', icon: ShieldCheck, href: 'https://drive.google.com/file/d/1N0UcFbYA9lQgWd1gkXL-1XW_TvYkZ8gc/view?usp=sharing' },
  { title: 'Strategic Challenges', icon: FileText, href: 'https://drive.google.com/file/d/11z8usxBkZVNGoBBgTw_ziNN-rRLxVIOp/view?usp=sharing', isFile: true },
];

export function ProfileDocumentsTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-red-500/25"
      >
        <FileText className="w-5 h-5" />
        View Complete School Profile Documents
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="pointer-events-auto w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80 backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">School Profile Documents</h2>
                    <p className="text-sm text-slate-500 mt-1">Select a document to view or download</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-200/80 text-slate-500 hover:text-slate-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Grid */}
                <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <Link
                      key={doc.title}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-red-200 hover:bg-red-50/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-red-100 group-hover:text-red-600 transition-colors duration-300">
                        <doc.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                          <span>{doc.isFile ? 'PDF Document' : 'View Document'}</span>
                          <Download className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="flex-shrink-0 px-6 py-4 bg-slate-50 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500">
                    Need access to restricted documents? Please contact the Admin. Blessed Be God Forever!
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}