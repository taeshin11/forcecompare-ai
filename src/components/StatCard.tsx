"use client";

import BarChart from "./BarChart";
import type { CategoryResult } from "@/lib/types";

interface StatCardProps {
  category: CategoryResult;
  flagA: string;
  flagB: string;
  codeA: string;
  codeB: string;
  nameA: string;
  nameB: string;
  index: number;
}

export default function StatCard({
  category,
  flagA,
  flagB,
  codeA,
  codeB,
  nameA,
  nameB,
  index,
}: StatCardProps) {
  const isWinnerA = category.winnerCode === codeA;

  return (
    <div
      className="rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-5 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{category.icon}</span>
          <h3 className="text-lg font-bold text-white">{category.name}</h3>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
          style={{
            background: isWinnerA
              ? "rgba(212,160,23,0.15)"
              : "rgba(59,130,246,0.15)",
            color: isWinnerA ? "var(--color-gold-400)" : "#60a5fa",
          }}
        >
          <span>{isWinnerA ? flagA : flagB}</span>
          <span>{isWinnerA ? nameA : nameB}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {category.subcategories.map((sub) => (
          <div key={sub.name}>
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
              {sub.name}
            </p>
            <BarChart
              valueA={sub.valueA}
              valueB={sub.valueB}
              labelA={nameA}
              labelB={nameB}
              flagA={flagA}
              flagB={flagB}
              winnerCode={sub.winnerCode}
              codeA={codeA}
              codeB={codeB}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
