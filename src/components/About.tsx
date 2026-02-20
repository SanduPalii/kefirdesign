"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-nude-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="relative aspect-[4/5] min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Artist portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Biography */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-8">
              About the Artist
            </h2>
            <div className="space-y-6 font-sans font-light text-warm-grayLight text-lg leading-relaxed">
              <p>
                Each piece begins with a question: what happens when light meets
                matter? For over two decades, I have explored the boundaries
                between transparency and form, fire and stillness.
              </p>
              <p>
                My work lives in the space between—where molten glass becomes
                frozen light, where the ephemeral finds permanence. I am drawn
                to the quiet moments of transformation, the breath between
                intention and result.
              </p>
              <p className="italic text-warm-gray/90">
                &ldquo;Glass remembers. It holds every gesture, every breath, every
                moment of heat. My role is to listen.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
