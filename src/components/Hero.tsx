"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - cinematic glass artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hotshop.jpeg"
          alt="Artisan working with molten glass"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-main-deep/60 via-main-glass/30 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Glass Caustic Overlay for atmosphere */}
      <div className="absolute inset-0 z-[1] glass-caustic pointer-events-none opacity-20" />

      {/* Content - asymmetrical left alignment */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24">
        <div className="glass-panel p-8 md:p-16 max-w-3xl glass-caustic">
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-nude-white tracking-elegant animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Linda <span className="text-main-green italic">Glass</span> Art
          </h1>
          <p
            className="font-sans text-xl md:text-2xl font-extralight text-nude-white/95 mt-6 tracking-wide animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {t.subtitle[language]}
          </p>
          <div
            className="flex flex-wrap gap-6 mt-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link
              href="#portfolio"
              className="button-maestro min-w-[200px]"
            >
              {t.ctaPortfolio[language]}
            </Link>
            <Link
              href="#contact"
              className="button-maestro bg-transparent border-nude-white/20 hover:border-nude-white/40 min-w-[200px]"
            >
              {t.ctaContact[language]}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
        <div className="flex flex-col items-center gap-4">
          <span className="text-nude-white/60 text-[10px] tracking-[0.2em] uppercase origin-left -rotate-90">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-nude-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
