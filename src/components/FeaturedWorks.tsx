"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Sculptures", "Installations", "Exhibitions", "Limited Editions"];

const works = [
  {
    id: 1,
    title: "Lumina",
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
  },
  {
    id: 2,
    title: "Frozen Light",
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 3,
    title: "Transparency No. 12",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
  },
  {
    id: 4,
    title: "Echo Chamber",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80",
  },
  {
    id: 5,
    title: "Vessel Series III",
    category: "Limited Editions",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
  },
  {
    id: 6,
    title: "Refraction",
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredWorks =
    activeFilter === "All"
      ? works
      : works.filter((w) => w.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-nude-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-4">
          Featured Works
        </h2>
        <p className="font-sans font-light text-warm-grayLight text-lg mb-16 max-w-xl">
          A selection of recent pieces. Each work is a meditation on light,
          form, and the moment of transformation.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans text-sm font-light tracking-elegant transition-all duration-300 ${
                activeFilter === cat
                  ? "text-main-green border-b border-main-green"
                  : "text-warm-grayLight hover:text-main-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-warm-gray/0 group-hover:bg-warm-gray/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-serif text-xl font-light text-nude-white">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
