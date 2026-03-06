"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function Contact() {
  const [isCommission, setIsCommission] = useState(false);
  const { language } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact" className="py-24 md:py-32 bg-nude-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-8">
              {t.title[language]}
            </h2>
            <p className="font-sans font-light text-warm-grayLight text-lg mb-12 max-w-md">
              {t.description[language]}
            </p>

            <div className="space-y-8 font-sans font-light text-warm-gray">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray/40">WhatsApp / Telegram</span>
                <a
                  href="https://wa.me/358000000000"
                  className="block text-2xl hover:text-main-green transition-colors font-serif"
                >
                  +358 00 000 0000
                </a>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray/40">Email</span>
                <a
                  href="mailto:linda@glassart.fi"
                  className="block text-xl hover:text-main-green transition-colors"
                >
                  linda@glassart.fi
                </a>
              </div>

              <div className="pt-8 border-t border-nude-sand/20">
                <p className="text-sm">Studio · Finland</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-nude-white/50 p-8 md:p-12 border border-nude-sand/10 backdrop-blur-sm">
            <div>
              <label
                htmlFor="name"
                className="block font-sans text-xs uppercase tracking-widest text-warm-gray/50 mb-3"
              >
                {language === 'fi' ? "Nimi" : "Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-b border-nude-sand/50 py-2 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-sans text-xs uppercase tracking-widest text-warm-gray/50 mb-3"
              >
                {language === 'fi' ? "Sähköposti" : "Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-nude-sand/50 py-2 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-sans text-xs uppercase tracking-widest text-warm-gray/50 mb-3"
              >
                {language === 'fi' ? "Viesti" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-nude-sand/50 py-2 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto font-sans text-xs uppercase tracking-[0.2em] text-nude-white bg-main-green px-12 py-4 hover:bg-main-green/90 transition-all duration-300 shadow-lg shadow-main-green/10"
            >
              {language === 'fi' ? "Lähetä" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
