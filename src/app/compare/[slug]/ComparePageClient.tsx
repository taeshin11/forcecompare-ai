"use client";

import Link from "next/link";
import type { ComparisonResult } from "@/lib/types";
import type { Country } from "@/lib/types";
import { useI18n } from "@/lib/i18n/context";
import VerdictBanner from "@/components/VerdictBanner";
import ComparisonDashboard from "@/components/ComparisonDashboard";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";
import AdContainer from "@/components/AdContainer";

interface RelatedMatchup {
  slug: string;
  nameA: string;
  nameB: string;
  flagA: string;
  flagB: string;
}

interface ComparePageClientProps {
  result: ComparisonResult;
  slug: string;
  allCountries: Country[];
  relatedMatchups: RelatedMatchup[];
}

export default function ComparePageClient({
  result,
  slug,
  allCountries,
  relatedMatchups,
}: ComparePageClientProps) {
  const { t } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${result.countryA.name} vs ${result.countryB.name} Military Comparison`,
    description: `Compare military strength between ${result.countryA.name} and ${result.countryB.name}. ${result.winner.name} leads with a ${Math.max(result.scoreA, result.scoreB).toFixed(1)} Force Rating.`,
    author: { "@type": "Organization", name: "ForceCompare AI" },
    publisher: { "@type": "Organization", name: "ForceCompare AI" },
    mainEntityOfPage: `https://forcecompare-ai.vercel.app/compare/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb nav */}
      <nav className="max-w-5xl mx-auto px-4 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">
              {t.compare_breadcrumb_home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">
            {result.countryA.flag} {result.countryA.name} vs {result.countryB.flag} {result.countryB.name}
          </li>
        </ol>
      </nav>

      {/* SEO heading */}
      <section className="text-center px-4 pt-4 pb-2">
        <h1
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {result.countryA.flag} {result.countryA.name}{" "}
          <span className="text-[var(--color-gold-400)]">vs</span>{" "}
          {result.countryB.flag} {result.countryB.name}
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          {t.compare_subtitle}
        </p>
      </section>

      <AdContainer slot="top" className="py-3" />

      <VerdictBanner result={result} />

      <ShareButtons
        countryA={result.countryA.name}
        countryB={result.countryB.name}
        winner={result.winner.name}
        scoreA={result.scoreA}
        scoreB={result.scoreB}
      />

      <AdContainer slot="middle" className="py-3" />

      <ComparisonDashboard result={result} />

      <Disclaimer />

      {/* Related comparisons for internal linking / SEO */}
      {relatedMatchups.length > 0 && (
        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-xl font-bold text-white text-center mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.compare_related}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {relatedMatchups.map((m) => (
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
          </div>
        </section>
      )}

      {/* CTA to try custom comparison */}
      <section className="px-4 pb-10">
        <div className="max-w-md mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] text-[var(--color-navy-950)] font-bold hover:shadow-lg hover:shadow-[var(--color-gold-500)]/20 transition-all"
          >
            {t.compare_any}
          </Link>
        </div>
      </section>
    </>
  );
}
