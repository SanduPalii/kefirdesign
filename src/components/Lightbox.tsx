"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";

export default function Lightbox() {
  const { images, selectedIndex, closeGallery, next, prev } = useGallery();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeGallery, next, prev]);

  if (selectedIndex === null || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-main-deep/95 transition-all duration-500"
      onClick={closeGallery}
    >
      {/* Close */}
      <button
        className="absolute top-8 right-8 text-nude-white/60 hover:text-white transition-colors p-4 z-[110]"
        onClick={(e) => { e.stopPropagation(); closeGallery(); }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
        onClick={(e) => { e.stopPropagation(); prev(); }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] transition-all duration-700"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[selectedIndex]}
          alt={`Gallery image ${selectedIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 text-nude-white/40 hover:text-white transition-colors p-6 z-[110]"
        onClick={(e) => { e.stopPropagation(); next(); }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-nude-white/40 font-sans text-[10px] tracking-widest uppercase">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
}
