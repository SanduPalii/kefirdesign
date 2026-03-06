"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const workImages = Array.from({ length: 20 }, (_, i) => `/images/work-${i + 1}.jpeg`);
const studioImages = Array.from({ length: 15 }, (_, i) => `/images/studio-${i + 2}.jpeg`);
const allGalleryImages = [
  ...workImages,
  ...studioImages,
  "/images/work-beads.jpeg",
  "/images/work-organic.jpeg",
  "/images/work-sculpture-detail.jpeg"
];

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations.gallery;

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allGalleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allGalleryImages.length) % allGalleryImages.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-main-deep/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-main-deep tracking-elegant mb-4">
            {t.title[language]}
          </h2>
          <p className="font-sans font-light text-warm-grayLight text-lg max-w-xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allGalleryImages.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(i)}
              className="group relative aspect-square overflow-hidden glass-panel border-white/5 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Glass art piece ${i + 1}`}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-main-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-main-deep/95 backdrop-blur-sm transition-all duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-nude-white/60 hover:text-white transition-colors p-4 z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 md:left-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
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
              src={allGalleryImages[selectedImage]}
              alt="Full size glass art"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 md:right-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-nude-white/40 font-sans text-[10px] tracking-widest uppercase">
            {selectedImage + 1} / {allGalleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
