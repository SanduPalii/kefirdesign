"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function FeaturedWorks() {
  const { language } = useLanguage();
  const t = translations.featured;

  const categories = [
    t.filterAll[language],
    t.filterSculptures[language],
    t.filterProcess[language]
  ];

  const works = [
    {
      id: 1,
      title: language === 'fi' ? "Orgaaninen muoto" : "Organic Form",
      category: t.filterSculptures[language],
      image: "/images/work-organic.jpeg",
    },
    {
      id: 2,
      title: language === 'fi' ? "Veistoksen yksityiskohta" : "Sculpture Detail",
      category: t.filterSculptures[language],
      image: "/images/work-sculpture-detail.jpeg",
    },
    {
      id: 3,
      title: language === 'fi' ? "Lasikomponentit" : "Glass Components",
      category: t.filterSculptures[language],
      image: "/images/work-beads.jpeg",
    },
    {
      id: 4,
      title: language === 'fi' ? "Muotoiluprosessi" : "Shaping Process",
      category: t.filterProcess[language],
      image: "/images/process-shaping.jpeg",
    },
    {
      id: 5,
      title: language === 'fi' ? "Kylmätyöstö" : "Cold Working",
      category: t.filterProcess[language],
      image: "/images/process-cold-working.jpeg",
    },
    {
      id: 6,
      title: language === 'fi' ? "Uunityöskentely" : "Kiln Work",
      category: t.filterProcess[language],
      image: "/images/process-kiln.jpeg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState(categories[0]);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);

  const filteredWorks =
    activeFilter === categories[0]
      ? works
      : works.filter((w) => w.category === activeFilter);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedWorkIndex(null);
      if (e.key === "ArrowRight") nextWork();
      if (e.key === "ArrowLeft") prevWork();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWorkIndex]);

  const nextWork = () => {
    if (selectedWorkIndex !== null) {
      setSelectedWorkIndex((selectedWorkIndex + 1) % filteredWorks.length);
    }
  };

  const prevWork = () => {
    if (selectedWorkIndex !== null) {
      setSelectedWorkIndex((selectedWorkIndex - 1 + filteredWorks.length) % filteredWorks.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-main-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-nude-white tracking-elegant mb-4">
          {t.title[language]}
        </h2>
        <p className="font-sans font-light text-nude-white/70 text-lg mb-16 max-w-xl">
          {translations.about.content[language]}
        </p>

        {/* Filter - Touch-friendly buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-sans text-sm font-light tracking-elegant transition-all duration-300 touch-manipulation border ${activeFilter === cat
                ? "bg-main-green/20 border-main-green text-main-green"
                : "border-nude-white/10 text-nude-white/60 hover:border-nude-white/30 hover:text-nude-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              onClick={() => setSelectedWorkIndex(index)}
              className="group relative aspect-[4/5] overflow-hidden glass-panel glass-caustic border-nude-white/5 hover:border-main-green/30 cursor-pointer"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Subtle glass refraction overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-main-deep/40 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 bg-main-deep/0 group-hover:bg-main-deep/40 transition-colors duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-main-deep to-transparent backdrop-blur-sm">
                <span className="font-serif text-2xl font-light text-nude-white block mb-1">
                  {work.title}
                </span>
                <span className="font-sans text-[10px] tracking-elegant uppercase text-main-green opacity-80">
                  {work.category}
                </span>
              </div>

              {/* Touch-active ripple simulation */}
              <div className="absolute inset-0 active:bg-white/10 transition-colors duration-100 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedWorkIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-main-deep/95 backdrop-blur-sm transition-all duration-500"
          onClick={() => setSelectedWorkIndex(null)}
        >
          <button
            className="absolute top-8 right-8 text-nude-white/60 hover:text-white transition-colors p-4 z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedWorkIndex(null); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 md:left-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
            onClick={(e) => { e.stopPropagation(); prevWork(); }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] transition-all duration-700"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredWorks[selectedWorkIndex].image}
              alt={filteredWorks[selectedWorkIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="font-serif text-2xl text-nude-white">{filteredWorks[selectedWorkIndex].title}</h3>
              <p className="font-sans text-[10px] tracking-elegant uppercase text-main-green mt-2">{filteredWorks[selectedWorkIndex].category}</p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
            onClick={(e) => { e.stopPropagation(); nextWork(); }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
