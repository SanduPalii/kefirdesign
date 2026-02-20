"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#exhibitions", label: "Exhibitions" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nude-white/80 backdrop-blur-sm border-b border-nude-sand/20">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="font-serif text-xl font-light text-main-green tracking-elegant hover:opacity-80 transition-opacity"
          >
            Artist Name
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-light tracking-elegant text-warm-grayLight hover:text-main-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-sans text-sm font-light text-main-green"
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-nude-sand/20 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-light tracking-elegant text-warm-grayLight hover:text-main-green"
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
