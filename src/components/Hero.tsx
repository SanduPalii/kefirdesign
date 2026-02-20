"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - cinematic glass artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1920&q=80"
          alt="Aurora lights - sculpting light"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-gray/20" />
      </div>

      {/* Content - asymmetrical left alignment */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24">
        <div className="max-w-2xl">
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-nude-white tracking-elegant animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Artist Name
          </h1>
          <p
            className="font-sans text-xl md:text-2xl font-extralight text-nude-white/95 mt-6 tracking-wide animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Sculpting light through glass.
          </p>
          <div
            className="flex flex-wrap gap-6 mt-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link
              href="#portfolio"
              className="font-sans text-sm font-light tracking-elegant text-nude-white border border-nude-white/60 px-8 py-3 hover:bg-nude-white/10 transition-all duration-500"
            >
              View Portfolio
            </Link>
            <Link
              href="#works"
              className="font-sans text-sm font-light tracking-elegant text-nude-white/90 hover:text-nude-white transition-colors duration-500"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
        <div className="w-px h-16 bg-nude-white/40" />
      </div>
    </section>
  );
}
