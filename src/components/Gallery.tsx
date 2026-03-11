"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import { useGallery } from "@/context/GalleryContext";

const workImages = Array.from({ length: 20 }, (_, i) => `/images/work-${i + 1}.jpeg`);
const studioImages = Array.from({ length: 15 }, (_, i) => `/images/studio-${i + 2}.jpeg`);
export const galleryImages = [
  ...workImages,
  ...studioImages,
  "/images/work-beads.jpeg",
  "/images/work-organic.jpeg",
  "/images/work-sculpture-detail.jpeg",
];

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations.gallery;
  const { openGallery } = useGallery();

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
          {galleryImages.map((src, i) => (
            <div
              key={i}
              onClick={() => openGallery(galleryImages, i)}
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
    </section>
  );
}
