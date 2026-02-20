"use client";

const exhibitions = [
  { name: "Light & Matter", location: "Haus der Kunst, Munich", year: "2024" },
  { name: "Transparency", location: "Victoria & Albert Museum, London", year: "2023" },
  { name: "Frozen Breath", location: "Museum of Glass, Tacoma", year: "2023" },
  { name: "Solo Exhibition", location: "Galerie Kreo, Paris", year: "2022" },
  { name: "Contemporary Glass", location: "Corning Museum of Glass", year: "2022" },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-24 md:py-32 bg-nude-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-gray tracking-elegant mb-4">
          Exhibitions & Press
        </h2>
        <p className="font-sans font-light text-warm-grayLight text-lg mb-20 max-w-xl">
          Selected exhibitions and recognition for the work.
        </p>

        <div className="space-y-8 max-w-2xl">
          {exhibitions.map((ex, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-nude-sand/50 pb-8 last:border-0"
            >
              <div>
                <h3 className="font-serif text-xl font-light text-warm-gray">
                  {ex.name}
                </h3>
                <p className="font-sans text-sm font-light text-warm-grayLight mt-1">
                  {ex.location}
                </p>
              </div>
              <span className="font-sans text-sm font-light text-warm-grayLight tracking-elegant">
                {ex.year}
              </span>
            </div>
          ))}
        </div>

        {/* Press logos placeholder - monochrome */}
        <div className="mt-20 flex flex-wrap gap-12 items-center opacity-60">
          <span className="font-sans text-xs font-light tracking-elegant text-warm-gray">
            ARTFORUM
          </span>
          <span className="font-sans text-xs font-light tracking-elegant text-warm-gray">
            FRIEZE
          </span>
          <span className="font-sans text-xs font-light tracking-elegant text-warm-gray">
            GLASS QUARTERLY
          </span>
        </div>
      </div>
    </section>
  );
}
