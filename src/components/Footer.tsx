"use client";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-nude-white border-t border-nude-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <span className="font-serif text-lg font-light text-main-green tracking-elegant">
            Artist Name
          </span>
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-light tracking-elegant text-warm-grayLight hover:text-main-green transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-light tracking-elegant text-warm-grayLight hover:text-main-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-nude-sand/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="font-sans text-xs font-light text-warm-grayLight">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <a
            href="https://kefirdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-light text-warm-grayLight hover:text-warm-gray transition-colors"
          >
            Designed by kefirdesign.com
          </a>
        </div>
      </div>
    </footer>
  );
}
