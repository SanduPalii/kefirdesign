"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations, Language } from "@/constants/translations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations.header;

  const navLinks = [
    { href: "#about", label: t.about[language] },
    { href: "#portfolio", label: translations.hero.ctaPortfolio[language] },
    { href: "#process", label: t.process[language] },
    { href: "#contact", label: t.contact[language] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-main-deep/30 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="font-serif text-2xl font-light text-nude-white tracking-elegant hover:text-main-green transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-main-green"></span>
            Linda Glass Art
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 rounded-full font-sans text-[11px] font-light tracking-elegant text-nude-white/70 hover:text-main-green hover:bg-white/5 transition-all duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l border-white/10 pl-6">
              {(['fi', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-[10px] tracking-widest uppercase transition-all border ${language === lang
                    ? "bg-main-green/20 border-main-green text-main-green font-medium"
                    : "border-transparent text-nude-white/40 hover:text-nude-white"
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-2">
              {(['fi', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[11px] uppercase ${language === lang ? "text-main-green font-medium" : "text-warm-gray/40"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-sans text-sm font-light text-main-green"
              aria-label="Toggle menu"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-nude-sand/20 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-[13px] font-light tracking-elegant text-warm-gray hover:text-main-green"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
