"use client";

import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-16 px-4 text-center">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #0a0e1a 0%, #162040 25%, #1e2d5a 50%, #162040 75%, #0a0e1a 100%)",
          backgroundSize: "200% 200%",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-[var(--color-gold-400)]">Force</span>
          <span className="text-white">Compare</span>
          <span className="text-[var(--color-gold-500)] text-2xl md:text-3xl ml-2">
            AI
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
          {t.hero_subtitle}
        </p>
        <p className="text-base text-gray-400 max-w-xl mx-auto">
          {t.hero_description}
        </p>
      </div>
    </section>
  );
}
