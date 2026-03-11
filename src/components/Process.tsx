"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import { useGallery } from "@/context/GalleryContext";

export default function Process() {
  const { language } = useLanguage();
  const t = translations.header;
  const { openGallery } = useGallery();

  const steps = [
    {
      title: language === 'fi' ? "Tuli ja muoto" : "Fire and Form",
      caption: language === 'fi' ? "Lasinpuhallus" : "Glass Blowing",
      image: "/images/process-shaping.jpeg",
    },
    {
      title: language === 'fi' ? "Kylmä tarkkuus" : "Cold Precision",
      caption: language === 'fi' ? "Hionta ja kiillotus" : "Grinding and Polishing",
      image: "/images/process-cold-working.jpeg",
    },
    {
      title: language === 'fi' ? "Aika ja kärsivällisyys" : "Time and Patience",
      caption: language === 'fi' ? "Uunityöskentely" : "Kiln Work",
      image: "/images/process-kiln.jpeg",
    },
  ];

  const processImages = steps.map((s) => s.image);

  return (
    <section id="process" className="py-24 md:py-32 bg-main-glass/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-main-deep tracking-elegant mb-4">
          {t.process[language]}
        </h2>
        <p className="font-sans font-light text-warm-grayLight text-lg mb-20 max-w-xl">
          {language === 'fi'
            ? "Alkuperäisestä ideasta valmiiseen muotoon — jokainen teos kulkee tulen, hengityksen ja aikomuksen kautta."
            : "From initial concept to finished form — each piece passes through fire, breath, and intention."
          }
        </p>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="group glass-caustic">
              <div
                className="relative aspect-[4/5] mb-8 overflow-hidden glass-panel border-main-green/10 group-hover:border-main-green/40 transition-colors duration-500 cursor-pointer"
                onClick={() => openGallery(processImages, i)}
              >
                <Image
                  src={step.image}
                  alt={step.caption}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-main-deep/0 group-hover:bg-main-deep/30 transition-colors duration-700" />
              </div>
              <div className="px-2">
                <span className="font-sans text-[10px] font-bold tracking-elegant text-main-green uppercase">
                  Step 0{i + 1} — {step.caption}
                </span>
                <p className="font-serif text-2xl font-light text-main-deep mt-2">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
