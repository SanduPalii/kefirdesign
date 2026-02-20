"use client";

import Image from "next/image";

export default function Studio() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1920&q=80"
          alt="Studio atmosphere"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-gray/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-nude-white leading-relaxed">
          &ldquo;Every piece is shaped by light, silence, and fire.&rdquo;
        </p>
      </div>
    </section>
  );
}
