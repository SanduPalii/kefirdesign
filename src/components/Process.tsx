"use client";

import Image from "next/image";

const steps = [
  {
    title: "From light to matter",
    caption: "Sketch",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  },
  {
    title: "Molten transformation",
    caption: "Glass shaping",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80",
  },
  {
    title: "Frozen transparency",
    caption: "Final piece",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-nude-sand/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-4">
          The Process
        </h2>
        <p className="font-sans font-light text-warm-grayLight text-lg mb-20 max-w-xl">
          From initial concept to finished form—each piece passes through fire,
          breath, and intention.
        </p>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="font-sans text-xs font-light tracking-elegant text-warm-grayLight uppercase">
                {step.caption}
              </span>
              <p className="font-serif text-2xl font-light text-warm-gray mt-2">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
