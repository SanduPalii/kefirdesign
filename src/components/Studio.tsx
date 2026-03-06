"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function Studio() {
  const { language } = useLanguage();
  const t = translations.studio;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio-1.jpeg"
          alt="Studio atmosphere"
          fill
          className="object-cover scale-110"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-main-deep/50 backdrop-blur-[1px]" />
      </div>

      <div className="absolute inset-0 z-[1] glass-caustic pointer-events-none opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel p-12 md:p-20 border-white/5 bg-white/5">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-nude-white leading-relaxed tracking-elegant">
            &ldquo;{t.quote[language]}&rdquo;
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-main-green/40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
