"use client";

import StatCard from "./StatCard";
import type { ComparisonResult } from "@/lib/types";

interface ComparisonDashboardProps {
  result: ComparisonResult;
}

export default function ComparisonDashboard({
  result,
}: ComparisonDashboardProps) {
  const { countryA, countryB, categories } = result;

  return (
    <section className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with country names */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 animate-slide-left">
            <span className="text-3xl">{countryA.flag}</span>
            <span className="text-xl font-bold text-white">
              {countryA.name}
            </span>
          </div>
          <span className="text-[var(--color-gold-400)] font-bold text-lg">
            VS
          </span>
          <div className="flex items-center gap-2 animate-slide-right">
            <span className="text-3xl">{countryB.flag}</span>
            <span className="text-xl font-bold text-white">
              {countryB.name}
            </span>
          </div>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <StatCard
              key={cat.name}
              category={cat}
              flagA={countryA.flag}
              flagB={countryB.flag}
              codeA={countryA.code}
              codeB={countryB.code}
              nameA={countryA.name}
              nameB={countryB.name}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
