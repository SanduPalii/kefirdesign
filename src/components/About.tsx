"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import { useGallery } from "@/context/GalleryContext";

export default function About() {
  const { language } = useLanguage();
  const t = translations.about;
  const { openGallery } = useGallery();
  const aboutImages = ["/images/about-artisan.jpeg"];

  return (
    <section id="about" className="py-24 md:py-32 bg-nude-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait/Action Shot */}
          <div
            className="relative aspect-[4/5] min-h-[400px] bg-nude-sand/10 cursor-pointer"
            onClick={() => openGallery(aboutImages, 0)}
          >
            <Image
              src="/images/about-artisan.jpeg"
              alt="Artisan working with glass"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Biography */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-8">
              {t.title[language]}
            </h2>
            <div className="space-y-6 font-sans font-light text-warm-grayLight text-lg leading-relaxed">
              <p>
                {t.content[language]}
              </p>
              <p>
                {language === 'fi'
                  ? "Studioni sijaitsee luonnonkauniissa paikassa Suomessa, missä luonto itse inspiroi uusien muotojen etsimiseen. Kutsun sinut maailmaan, jossa kovasta tulee nestemäistä ja sitten se saa ikuisuuden."
                  : "My studio is located in a picturesque corner of Finland, where nature itself inspires the search for new forms. I invite you to a world where the solid becomes liquid, and then finds eternity."
                }
              </p>
              <p className="italic text-warm-gray/90 border-l border-main-green/30 pl-6 py-2">
                &ldquo;{language === 'fi'
                  ? "Lasi muistaa jokaisen liikkeen. Tehtäväni on antaa sen kertoa tarinansa."
                  : "Glass remembers every movement. My task is to let it tell its story."
                }&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
