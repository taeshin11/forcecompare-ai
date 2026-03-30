"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useI18n } from "@/lib/i18n/context";

const matchups = [
  { slug: "united-states-vs-russia", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\uddf7\ud83c\uddfa", nameA: "USA", nameB: "Russia" },
  { slug: "united-states-vs-china", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "USA", nameB: "China" },
  { slug: "india-vs-pakistan", flagA: "\ud83c\uddee\ud83c\uddf3", flagB: "\ud83c\uddf5\ud83c\uddf0", nameA: "India", nameB: "Pakistan" },
  { slug: "india-vs-china", flagA: "\ud83c\uddee\ud83c\uddf3", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "India", nameB: "China" },
  { slug: "russia-vs-china", flagA: "\ud83c\uddf7\ud83c\uddfa", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Russia", nameB: "China" },
  { slug: "south-korea-vs-north-korea", flagA: "\ud83c\uddf0\ud83c\uddf7", flagB: "\ud83c\uddf0\ud83c\uddf5", nameA: "South Korea", nameB: "North Korea" },
  { slug: "united-states-vs-iran", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\uddee\ud83c\uddf7", nameA: "USA", nameB: "Iran" },
  { slug: "turkey-vs-greece", flagA: "\ud83c\uddf9\ud83c\uddf7", flagB: "\ud83c\uddec\ud83c\uddf7", nameA: "Turkey", nameB: "Greece" },
  { slug: "japan-vs-china", flagA: "\ud83c\uddef\ud83c\uddf5", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Japan", nameB: "China" },
  { slug: "israel-vs-iran", flagA: "\ud83c\uddee\ud83c\uddf1", flagB: "\ud83c\uddee\ud83c\uddf7", nameA: "Israel", nameB: "Iran" },
  { slug: "united-kingdom-vs-france", flagA: "\ud83c\uddec\ud83c\udde7", flagB: "\ud83c\uddeb\ud83c\uddf7", nameA: "UK", nameB: "France" },
  { slug: "taiwan-vs-china", flagA: "\ud83c\uddf9\ud83c\uddfc", flagB: "\ud83c\udde8\ud83c\uddf3", nameA: "Taiwan", nameB: "China" },
  { slug: "russia-vs-ukraine", flagA: "\ud83c\uddf7\ud83c\uddfa", flagB: "\ud83c\uddfa\ud83c\udde6", nameA: "Russia", nameB: "Ukraine" },
  { slug: "saudi-arabia-vs-iran", flagA: "\ud83c\uddf8\ud83c\udde6", flagB: "\ud83c\uddee\ud83c\uddf7", nameA: "Saudi Arabia", nameB: "Iran" },
  { slug: "united-states-vs-india", flagA: "\ud83c\uddfa\ud83c\uddf8", flagB: "\ud83c\uddee\ud83c\uddf3", nameA: "USA", nameB: "India" },
  { slug: "germany-vs-france", flagA: "\ud83c\udde9\ud83c\uddea", flagB: "\ud83c\uddeb\ud83c\uddf7", nameA: "Germany", nameB: "France" },
];

// All available country codes for random matchup
const countryCodes = [
  "US","RU","CN","IN","KR","GB","JP","TR","PK","FR","IT","EG","BR","ID","IR",
  "DE","AU","IL","SA","TW","UA","ES","PL","CA","TH","VN","DZ","BD","MM","NG",
  "MX","AR","PH","CO","ZA","NO","SE","GR","NL","SG","CH","PT","PE","KP","IQ",
  "CZ","RO","MA","ET","AO","AE","MY","BE","FI","DK","CL","AT","VE","NZ",
];

export default function PopularMatchups() {
  const router = useRouter();
  const { t } = useI18n();

  const handleRandom = useCallback(() => {
    const i = Math.floor(Math.random() * countryCodes.length);
    let j = Math.floor(Math.random() * (countryCodes.length - 1));
    if (j >= i) j++;
    router.push(`/?a=${countryCodes[i]}&b=${countryCodes[j]}`);
  }, [router]);

  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-xl font-bold text-white text-center mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.popular_matchups}
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          {t.popular_matchups_desc}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {matchups.map((m) => (
            <Link
              key={m.slug}
              href={`/compare/${m.slug}`}
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

        {/* Random Matchup button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleRandom}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-navy-800)] hover:border-[var(--color-gold-500)] text-gray-300 hover:text-white transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {t.random_matchup}
          </button>
        </div>
      </div>
    </section>
  );
}
