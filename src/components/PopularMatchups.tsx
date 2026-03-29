"use client";

import Link from "next/link";

const matchups = [
  { a: "US", b: "RU", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\uddf7\ud83c\uddfa", nameA: "USA", nameB: "Russia" },
  { a: "US", b: "CN", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "USA", nameB: "China" },
  { a: "IN", b: "PK", flagA: "\ud83c\uddee\ud83c\uddf3", flagB: "\ud83c\uddf5\ud83c\uddf0", nameA: "India", nameB: "Pakistan" },
  { a: "IN", b: "CN", flagA: "\ud83c\uddee\ud83c\uddf3", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "India", nameB: "China" },
  { a: "RU", b: "CN", flagA: "\ud83c\uddf7\ud83c\uddfa", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Russia", nameB: "China" },
  { a: "KR", b: "KP", flagA: "\ud83c\uddf0\ud83c\uddf7", flagB: "\ud83c\uddf0\ud83c\uddf5", nameA: "South Korea", nameB: "North Korea" },
  { a: "US", b: "IR", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\uddee\ud83c\uddf7", nameA: "USA", nameB: "Iran" },
  { a: "TR", b: "GR", flagA: "\ud83c\uddf9\ud83c\uddf7", flagB: "\ud83c\uddec\ud83c\uddf7", nameA: "Turkey", nameB: "Greece" },
  { a: "JP", b: "CN", flagA: "\ud83c\uddef\ud83c\uddf5", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Japan", nameB: "China" },
  { a: "IL", b: "IR", flagA: "\ud83c\uddee\ud83c\uddf1", flagB: "\ud83c\uddee\ud83c\uddf7", nameA: "Israel", nameB: "Iran" },
  { a: "GB", b: "FR", flagA: "\ud83c\uddec\ud83c\udde7", flagB: "\ud83c\uddeb\ud83c\uddf7", nameA: "UK", nameB: "France" },
  { a: "TW", b: "CN", flagA: "\ud83c\uddf9\ud83c\uddfc", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Taiwan", nameB: "China" },
];

export default function PopularMatchups() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-6">
          Popular Matchups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {matchups.map((m) => (
            <Link
              key={`${m.a}-${m.b}`}
              href={`/?a=${m.a}&b=${m.b}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-[var(--color-gold-500)] hover:bg-[var(--color-navy-800)] transition-all text-sm group"
            >
              <span>{m.flagA}</span>
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {m.nameA}
              </span>
              <span className="text-[var(--color-gold-500)] text-xs font-bold">vs</span>
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {m.nameB}
              </span>
              <span>{m.flagB}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
