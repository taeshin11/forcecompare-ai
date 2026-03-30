"use client";

import Link from "next/link";
import type { Country } from "@/lib/types";
import { useI18n } from "@/lib/i18n/context";
import { toSlug } from "@/lib/countryUtils";

interface RankingEntry {
  country: Country;
  score: number;
}

export default function RankingClient({ rankings }: { rankings: RankingEntry[] }) {
  const { t } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "World Military Power Rankings 2026",
    description: "Global military strength rankings based on composite Force Rating scores.",
    numberOfItems: rankings.length,
    itemListElement: rankings.slice(0, 20).map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.country.name} — Force Rating: ${r.score.toFixed(1)}`,
      url: `https://forcecompare-ai.vercel.app/compare/${toSlug(r.country.name)}-vs-${toSlug(rankings[0].country.name === r.country.name ? rankings[1].country.name : rankings[0].country.name)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-4 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">
              {t.compare_breadcrumb_home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">{t.ranking_title}</li>
        </ol>
      </nav>

      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.ranking_title}
          </h1>
          <p className="text-gray-400 text-center text-sm mb-8 max-w-2xl mx-auto">
            {t.ranking_description}
          </p>

          {/* Rankings table */}
          <div className="rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[60px_1fr_100px_80px] md:grid-cols-[80px_1fr_140px_100px] gap-2 px-4 py-3 bg-[var(--color-navy-800)] text-xs text-gray-400 uppercase tracking-wider font-medium border-b border-[var(--color-card-border)]">
              <div>{t.ranking_rank}</div>
              <div>{t.ranking_country}</div>
              <div className="text-right">{t.ranking_force_rating}</div>
              <div className="text-center">{t.ranking_compare}</div>
            </div>

            {/* Rows */}
            {rankings.map((r, i) => {
              const topCountry = rankings[0].country;
              const vsSlug = r.country.code === topCountry.code
                ? `${toSlug(r.country.name)}-vs-${toSlug(rankings[1].country.name)}`
                : `${toSlug(r.country.name)}-vs-${toSlug(topCountry.name)}`;

              return (
                <div
                  key={r.country.code}
                  className={`grid grid-cols-[60px_1fr_100px_80px] md:grid-cols-[80px_1fr_140px_100px] gap-2 px-4 py-3 items-center transition-colors hover:bg-[var(--color-navy-800)] ${
                    i < rankings.length - 1 ? "border-b border-[var(--color-card-border)]" : ""
                  }`}
                >
                  {/* Rank */}
                  <div className="text-center">
                    {i < 3 ? (
                      <span className={`text-lg font-bold ${
                        i === 0 ? "text-[var(--color-gold-400)]" :
                        i === 1 ? "text-gray-300" :
                        "text-amber-700"
                      }`}>
                        {i === 0 ? "#1" : i === 1 ? "#2" : "#3"}
                      </span>
                    ) : (
                      <span className="text-gray-500 text-sm font-medium">#{i + 1}</span>
                    )}
                  </div>

                  {/* Country */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl flex-shrink-0">{r.country.flag}</span>
                    <span className={`font-medium truncate ${
                      i < 3 ? "text-white" : "text-gray-300"
                    }`}>
                      {r.country.name}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="hidden md:block flex-1 max-w-[60px] h-2 rounded-full bg-[var(--color-navy-900)] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)]"
                          style={{ width: `${r.score}%` }}
                        />
                      </div>
                      <span className={`font-bold text-sm ${
                        i < 3 ? "text-[var(--color-gold-400)]" : "text-gray-300"
                      }`}>
                        {r.score.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Compare link */}
                  <div className="text-center">
                    <Link
                      href={`/compare/${vsSlug}`}
                      className="text-xs text-gray-400 hover:text-[var(--color-gold-400)] transition-colors underline"
                    >
                      {t.ranking_compare}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] text-[var(--color-navy-950)] font-bold hover:shadow-lg hover:shadow-[var(--color-gold-500)]/20 transition-all"
            >
              {t.compare_any}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
