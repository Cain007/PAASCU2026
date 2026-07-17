'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Monitor, Utensils, Heart, BookOpen, Users, FileText, ArrowRight } from 'lucide-react';

type SubLink = {
  name: string;
  link: string;
};

type ManualItem = {
  name: string;
  image: string;
  link?: string;
  hasModal?: boolean;
  subLinks?: SubLink[];
};

const manualItems: ManualItem[] = [
  {
    name: 'Administrative Manual',
    image: '/school-manual/admin2.png',
    link: 'https://drive.google.com/file/d/1cHRviG1wzFDKmBVfi-aeUNcoT5bsqfJ6/view?usp=sharing',
  },

  {
    name: 'Standard Operating Guide',
    image: '/school-manual/standard2.png',
    hasModal: true,
    subLinks: [
      { name: 'Computer Laboratory', link: 'https://drive.google.com/file/d/1aVm0y0zXUgDlDnA6WpbMmis-2YM5B0Y8/view?usp=sharing' }, // TODO: Replace with actual link
      { name: 'Food Services', link: 'https://drive.google.com/file/d/1OttYNWiDMHJ5XXzorgkk4kt03BR_Srfy/view?usp=sharing' },       // TODO: Replace with actual link
      { name: 'Guidance & Testing Center', link: 'https://drive.google.com/file/d/1lBAaRrqkzVQudVjXPmwC3n2ImDs-43I6/view?usp=sharing' },            // TODO: Replace with actual link
      { name: 'Health Services', link: 'https://drive.google.com/file/d/162VQfd--gC7DABA1Iq5ZMyv6rEyXmfCm/view?usp=sharing' },     // TODO: Replace with actual link
      { name: 'Learning Resource Center', link: 'https://drive.google.com/file/d/1erqqFfoXnfKykQmAr2iTlcqBLCAGQt2k/view?usp=sharing' }, // TODO: Replace with actual link
      { name: 'Registrars', link: 'https://drive.google.com/file/d/1X_2Xdw5jnc9JqKlrqScNfhITWg8ckJ1a/view?usp=sharing' },          // TODO: Replace with actual link
    ],
  },
  {
    name: 'Faculty Manual',
    image: '/school-manual/faculty2.png',
    link: 'https://drive.google.com/file/d/1sT2LeCBvmp1UHiSjGr4PBnKYpuYDXe6o/view?usp=sharing',
  },
  {
    name: 'Student Handbook',
    image: '/school-manual/student2.png',
    link: 'https://drive.google.com/file/d/1PBn-mk2WNFLFQyVAqBsfrUwyH-iGcPfK/view?usp=sharing',
  },
  {
    name: 'Auxiliary & Support Personnel Manual',
    image: '/school-manual/asp2.png',
    link: 'https://drive.google.com/file/d/1wl1SmCvEtSUIhpaWOZNw_NhDnnz16_JX/view?usp=sharing',
  },
];

export default function ManualsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedManual, setSelectedManual] = useState<ManualItem | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedManual(null), 200); // Clear state after fade-out animation
  };

  return (
    <>
      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8">
            {manualItems.map((item, index) => {
              // 1. Render Modal Trigger for Standard Operating Guide
              if (item.hasModal) {
                return (
                  <article
                    key={item.name}
                    className="w-full max-w-[340px] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
                  >
                    <button
                      onClick={() => {
                        setSelectedManual(item);
                        setIsModalOpen(true);
                      }}
                      className="block w-full text-left"
                      aria-label={`Open ${item.name} options`}
                    >
                      <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                        <Image
                          src={item.image}
                          alt={`${item.name} manual card`}
                          width={1500}
                          height={2333}
                          className="h-auto w-full"
                          priority={index < 2}
                        />
                      </div>
                    </button>

                    <h2 className="mt-2 min-h-[60px] text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                      {item.name}
                    </h2>
                  </article>
                );
              }

              // 2. Render Standard Direct Link for all other manuals
              return (
                <article
                  key={item.name}
                  className="w-full max-w-[340px] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-2 shadow-sm ring-1 ring-neutral-200 transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                      <Image
                        src={item.image}
                        alt={`${item.name} manual card`}
                        width={1500}
                        height={2333}
                        className="h-auto w-full cursor-pointer"
                        priority={index < 2}
                      />
                    </div>
                  </a>

                  <h2 className="mt-2 min-h-[60px] text-center text-base font-extrabold uppercase leading-tight tracking-[0.01em] text-neutral-900 sm:text-lg">
                    {item.name}
                  </h2>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Premium Modal for Standard Operating Guide */}
      {isModalOpen && selectedManual && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative transform transition-all duration-200 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-neutral-900">{selectedManual.name}</h3>
              <p className="text-sm text-neutral-500 mt-1">Select a department to view its specific guidelines</p>
            </div>

            {/* Modal Links Grid */}
            <div className="grid gap-3">
              {selectedManual.subLinks?.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-red-50 hover:border-red-200 hover:shadow-md transition-all duration-200"
                >
                  {/* Dynamic Icon based on department name */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-600 group-hover:bg-red-100 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
                    {sub.name.includes('Computer') && <Monitor className="w-5 h-5" />}
                    {sub.name.includes('Food') && <Utensils className="w-5 h-5" />}
                    {sub.name.includes('Guidance') && <Users className="w-5 h-5" />}
                    {sub.name.includes('Health') && <Heart className="w-5 h-5" />}
                    {sub.name.includes('Learning') && <BookOpen className="w-5 h-5" />}
                    {sub.name.includes('Registrars') && <FileText className="w-5 h-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <span className="block text-sm font-semibold text-neutral-900 group-hover:text-red-700 transition-colors">
                      {sub.name}
                    </span>
                    <span className="block text-xs text-neutral-500 group-hover:text-red-600/70 transition-colors">
                      Click to open document
                    </span>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}