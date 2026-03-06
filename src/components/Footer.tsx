"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-16 md:py-24 bg-main-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <span className="font-serif text-2xl font-light text-nude-white tracking-elegant flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-main-green"></span>
            Linda Glass Art
          </span>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 font-sans text-[11px] font-light tracking-elegant text-nude-white/60 hover:text-main-green hover:border-main-green/40 transition-all uppercase"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 font-sans text-[11px] font-light tracking-elegant text-nude-white/60 hover:text-main-green hover:border-main-green/40 transition-all uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="font-sans text-[10px] font-light text-nude-white/30 uppercase tracking-wider">
            © {new Date().getFullYear()} Linda Glass Art. {language === 'fi' ? "Kaikki oikeudet pidätetään." : "All rights reserved."}
          </span>
          <a
            href="https://kefirdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] font-light text-nude-white/20 hover:text-main-green transition-colors uppercase tracking-wider"
          >
            Designed by maestro kefirdesign.com
          </a>
        </div>
      </div>
    </footer>
  );
}
