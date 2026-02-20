"use client";

import { useState } from "react";

export default function Contact() {
  const [isCommission, setIsCommission] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-nude-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-4">
              Get in Touch
            </h2>
            <p className="font-sans font-light text-warm-grayLight text-lg mb-12 max-w-md">
              For inquiries, collaborations, or commission requests. I would
              love to hear from you.
            </p>

            <div className="space-y-6 font-sans font-light text-warm-gray">
              <a
                href="mailto:hello@artist.com"
                className="block hover:text-warm-grayLight transition-colors"
              >
                hello@artist.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-warm-grayLight transition-colors"
              >
                Instagram
              </a>
              <p>Studio · Brooklyn, NY</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-sans text-sm font-light text-warm-grayLight mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-nude-white border border-nude-sand/50 px-4 py-3 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-sans text-sm font-light text-warm-grayLight mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-nude-white border border-nude-sand/50 px-4 py-3 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-sans text-sm font-light text-warm-grayLight mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-nude-white border border-nude-sand/50 px-4 py-3 font-sans font-light text-warm-gray focus:outline-none focus:border-main-green/50 transition-colors resize-none"
              />
            </div>
            <label className="flex items-center gap-3 font-sans text-sm font-light text-warm-grayLight cursor-pointer">
              <input
                type="checkbox"
                checked={isCommission}
                onChange={(e) => setIsCommission(e.target.checked)}
                className="w-4 h-4"
              />
              Commission inquiry
            </label>
            <button
              type="submit"
              className="font-sans text-sm font-light tracking-elegant text-main-green border border-main-green/60 px-8 py-3 hover:bg-main-green/10 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
