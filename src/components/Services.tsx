"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const NeonFlame = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6 8 4 12 8 16c1.5 1.5 2 3 2 4 0-2 1-4 2-5 .5 2 2 4 2 5 0-2 2-3.5 2-5.5 0-3-1-5.5-4-12.5z" />
        <path d="M12 22c-2 0-4-2-4-4" opacity="0.5" />
    </svg>
);

const NeonKiln = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M3 11h18" />
        <path d="M7 8V5a2 2 0 0 1 4 0" />
        <path d="M13 8V5a2 2 0 0 1 4 0" />
        <circle cx="12" cy="16" r="2" />
    </svg>
);

const NeonDiamond = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 19 8 12 22 5 8" />
        <line x1="5" y1="8" x2="19" y2="8" />
    </svg>
);

const NeonLeaf = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

const NeonStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export default function Services() {
    const { language } = useLanguage();
    const t = translations.services;

    const services = [
        {
            icon: <NeonFlame />,
            title: t.s1_title[language],
            subtitle: t.s1_sub[language],
            body: t.s1_body[language],
        },
        {
            icon: <NeonKiln />,
            title: t.s2_title[language],
            subtitle: t.s2_sub[language],
            body: t.s2_body[language],
        },
        {
            icon: <NeonDiamond />,
            title: t.s3_title[language],
            subtitle: t.s3_sub[language],
            body: t.s3_body[language],
        },
        {
            icon: <NeonLeaf />,
            title: t.s4_title[language],
            subtitle: t.s4_sub[language],
            body: t.s4_body[language],
        },
        {
            icon: <NeonStar />,
            title: t.s5_title[language],
            subtitle: t.s5_sub[language],
            body: t.s5_body[language],
        },
    ];

    return (
        <section
            id="services"
            className="py-24 md:py-36 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #050f07 0%, #0a1a0d 60%, #061209 100%)" }}
        >
            {/* Neon ambient glow blobs */}
            <div
                className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
                style={{ background: "radial-gradient(circle, #39FF14 0%, transparent 70%)", filter: "blur(60px)" }}
            />
            <div
                className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-[0.06]"
                style={{ background: "radial-gradient(circle, #39FF14 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Section header */}
                <div className="mb-16 md:mb-20 max-w-2xl">
                    {/* Neon accent rule */}
                    <div
                        className="w-10 h-px mb-6"
                        style={{ background: "linear-gradient(90deg, #39FF14, transparent)", boxShadow: "0 0 8px #39FF14" }}
                    />
                    <h2
                        className="font-serif text-4xl md:text-5xl font-light tracking-elegant mb-6"
                        style={{ color: "#f0fff0" }}
                    >
                        {t.title[language]}
                    </h2>
                    <p className="font-sans font-light text-lg leading-relaxed" style={{ color: "rgba(240,255,240,0.55)" }}>
                        {t.intro[language]}
                    </p>
                </div>

                {/* Cards grid — 2 col desktop, 1 col mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="neon-glass-panel p-8 md:p-10 group"
                        >
                            {/* Icon */}
                            <div className="neon-icon-wrap">
                                {svc.icon}
                            </div>

                            {/* Subtitle label */}
                            <span
                                className="block font-sans text-[10px] uppercase tracking-[0.22em] mb-2 font-medium"
                                style={{ color: "#39FF14", textShadow: "0 0 8px rgba(57,255,20,0.7)" }}
                            >
                                {svc.subtitle}
                            </span>

                            {/* Title */}
                            <h3
                                className="font-serif text-2xl md:text-3xl font-light mb-4 leading-snug"
                                style={{ color: "#e8ffe8" }}
                            >
                                {svc.title}
                            </h3>

                            {/* Body */}
                            <p
                                className="font-sans font-light text-base leading-relaxed mb-8"
                                style={{ color: "rgba(220,255,220,0.55)" }}
                            >
                                {svc.body}
                            </p>

                            {/* CTA link */}
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] transition-all duration-300 group-hover:gap-3"
                                style={{ color: "#39FF14", textShadow: "0 0 6px rgba(57,255,20,0.5)" }}
                            >
                                {t.cta[language]}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}

                    {/* Last card spans full width on md if odd count — accent divider card */}
                    <div
                        className="neon-glass-panel md:col-span-2 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                        style={{ background: "linear-gradient(135deg, rgba(57,255,20,0.06) 0%, rgba(0,0,0,0.5) 100%)" }}
                    >
                        <div>
                            <span
                                className="block font-sans text-[10px] uppercase tracking-[0.22em] mb-3 font-medium"
                                style={{ color: "#39FF14", textShadow: "0 0 8px rgba(57,255,20,0.7)" }}
                            >
                                {language === "fi" ? "Yhteistyö" : "Collaboration"}
                            </span>
                            <p
                                className="font-serif text-xl md:text-2xl font-light leading-relaxed max-w-xl"
                                style={{ color: "#e8ffe8" }}
                            >
                                {language === "fi"
                                    ? "Yhdistämme kaikkia tekniikoita — hotshop, uunilasitus, kylmätyöstö ja kierrätys — luodaksemme juuri sen, mitä visioit."
                                    : "We combine all our techniques — hotshop blowing, kiln forming, cold working, and upcycling — to create exactly what you imagine."}
                            </p>
                        </div>
                        <Link
                            href="#contact"
                            className="shrink-0 inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:scale-105"
                            style={{
                                color: "#0a1a0d",
                                background: "linear-gradient(135deg, #39FF14, #22cc0a)",
                                boxShadow: "0 0 24px rgba(57,255,20,0.45)",
                            }}
                        >
                            {language === "fi" ? "Ota yhteyttä" : "Get in touch"}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
