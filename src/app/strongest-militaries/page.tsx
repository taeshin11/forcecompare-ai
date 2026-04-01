import type { Metadata } from "next";
import Link from "next/link";
import countriesData from "../../../public/data/countries.json";
import type { Country } from "@/lib/types";
import { toSlug } from "@/lib/countryUtils";

const allCountries = countriesData.countries as Country[];

export const metadata: Metadata = {
  title: "Top 10 Strongest Militaries in the World 2025",
  description:
    "Discover the top 10 most powerful militaries in the world for 2025. Ranked by composite Force Rating analyzing army, navy, air force, defense budget, and resources. Updated with latest Global Firepower data.",
  keywords: [
    "strongest military in the world",
    "top 10 military powers",
    "most powerful military 2025",
    "strongest army in the world",
    "best military in the world",
    "top military powers 2025",
    "world strongest military",
    "military superpowers",
    "strongest armed forces",
    "top 10 armies in the world",
  ],
  openGraph: {
    title: "Top 10 Strongest Militaries in the World 2025 — ForceCompare AI",
    description:
      "Ranked by composite Force Rating: army, navy, air force, budget, and resources.",
    url: "https://forcecompare-ai.vercel.app/strongest-militaries",
    type: "article",
    siteName: "ForceCompare AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Strongest Militaries in the World 2025",
    description:
      "Which countries have the most powerful armed forces? See the definitive ranking.",
  },
  alternates: {
    canonical: "https://forcecompare-ai.vercel.app/strongest-militaries",
  },
};

function computeScore(country: Country): number {
  const fields = [
    { weight: 0.15, getters: [
      (c: Country) => c.military.totalPersonnel,
      (c: Country) => c.military.activeMilitary,
      (c: Country) => c.military.reserveMilitary,
    ]},
    { weight: 0.25, getters: [
      (c: Country) => c.airforce.totalAircraft,
      (c: Country) => c.airforce.fighters,
      (c: Country) => c.airforce.attackHelicopters,
      (c: Country) => c.airforce.transportAircraft,
    ]},
    { weight: 0.20, getters: [
      (c: Country) => c.army.tanks,
      (c: Country) => c.army.armoredVehicles,
      (c: Country) => c.army.selfPropelledArtillery,
      (c: Country) => c.army.rocketLaunchers,
    ]},
    { weight: 0.20, getters: [
      (c: Country) => c.navy.totalAssets,
      (c: Country) => c.navy.carriers,
      (c: Country) => c.navy.destroyers,
      (c: Country) => c.navy.submarines,
      (c: Country) => c.navy.frigates,
    ]},
    { weight: 0.10, getters: [
      (c: Country) => c.resources.defenseBudget,
      (c: Country) => c.resources.oilProduction,
      (c: Country) => c.resources.oilReserves,
    ]},
    { weight: 0.10, getters: [
      (c: Country) => c.logistics.airports,
      (c: Country) => c.logistics.majorPorts,
      (c: Country) => c.logistics.roadwayCoverage,
      (c: Country) => c.geography.squareArea,
      (c: Country) => c.geography.coastline,
    ]},
  ];

  let total = 0;
  for (const cat of fields) {
    let catScore = 0;
    for (const getter of cat.getters) {
      const values = allCountries.map(getter);
      const min = Math.min(...values);
      const max = Math.max(...values);
      catScore += max === min ? 0.5 : (getter(country) - min) / (max - min);
    }
    catScore /= cat.getters.length;
    total += catScore * cat.weight;
  }
  return Math.round(total * 1000) / 10;
}

const top10 = allCountries
  .map((c) => ({ country: c, score: computeScore(c) }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 10);

const highlights: Record<string, string> = {
  US: "The United States maintains the world's largest defense budget and most advanced air force with over 13,000 aircraft. Its 11 aircraft carriers give it unmatched global power projection capability.",
  RU: "Russia possesses the world's largest tank fleet and a powerful nuclear submarine force. Its vast territory and extensive natural resources provide strategic depth.",
  CN: "China has the largest active military personnel in the world and is rapidly modernizing its navy. Its defense budget has grown significantly, now the second largest globally.",
  IN: "India has one of the largest armed forces by personnel count, with a growing defense industry. Its military is battle-tested and benefits from diverse equipment sources.",
  GB: "The United Kingdom maintains advanced military technology and a blue-water navy. As a NATO member, it possesses nuclear deterrent capability and special forces renowned worldwide.",
  KR: "South Korea maintains a highly trained and technologically advanced military, driven by the ongoing threat from North Korea. Compulsory military service ensures a large reserve force.",
  JP: "Japan's Self-Defense Forces are among the most technologically advanced in Asia. Japan has one of the world's largest naval fleets and a strong indigenous defense industry.",
  FR: "France operates the only nuclear-powered aircraft carrier outside the US and maintains an independent nuclear deterrent. Its military is active in multiple overseas operations.",
  TR: "Turkey has the second-largest army in NATO by personnel. Its strategic location bridging Europe and Asia gives it significant geopolitical importance.",
  IT: "Italy maintains a well-equipped military with strong naval capabilities in the Mediterranean. It is an active NATO contributor and has a growing domestic defense industry.",
};

export default function StrongestMilitariesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 10 Strongest Militaries in the World 2025",
    description: "Comprehensive ranking of the world's most powerful military forces based on composite Force Rating analysis.",
    author: { "@type": "Organization", name: "ForceCompare AI" },
    publisher: { "@type": "Organization", name: "ForceCompare AI" },
    mainEntityOfPage: "https://forcecompare-ai.vercel.app/strongest-militaries",
    datePublished: "2025-03-01",
    dateModified: "2025-03-31",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">Top 10 Strongest Militaries</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Top 10 Strongest Militaries in the World 2025
        </h1>
        <p className="text-gray-400 text-center text-sm mb-10 max-w-2xl mx-auto">
          Ranked by ForceCompare AI&apos;s composite Force Rating — analyzing military personnel, air power, army strength, naval power, resources, and logistics using Global Firepower data.
        </p>

        <div className="space-y-6">
          {top10.map((entry, i) => {
            const c = entry.country;
            const highlight = highlights[c.code] || "";
            const vsSlug = c.code === "US"
              ? `${toSlug(c.name)}-vs-${toSlug(top10[1].country.name)}`
              : `${toSlug(c.name)}-vs-${toSlug(top10[0].country.name)}`;

            return (
              <section
                key={c.code}
                className="rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold flex-shrink-0 w-10 text-center ${
                    i === 0 ? "text-[var(--color-gold-400)]" :
                    i === 1 ? "text-gray-300" :
                    i === 2 ? "text-amber-700" :
                    "text-gray-500"
                  }`}>
                    #{i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{c.flag}</span>
                      <h2 className="text-xl font-bold text-white">{c.name}</h2>
                      <span className="text-[var(--color-gold-400)] font-bold text-lg">
                        {entry.score.toFixed(1)}
                      </span>
                    </div>
                    {highlight && (
                      <p className="text-sm text-gray-400 mb-3">{highlight}</p>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-3">
                      <div className="bg-[var(--color-navy-800)] rounded-lg px-3 py-2">
                        <div className="text-gray-500">Active Military</div>
                        <div className="text-white font-medium">{(c.military.activeMilitary / 1000).toFixed(0)}K</div>
                      </div>
                      <div className="bg-[var(--color-navy-800)] rounded-lg px-3 py-2">
                        <div className="text-gray-500">Aircraft</div>
                        <div className="text-white font-medium">{c.airforce.totalAircraft.toLocaleString()}</div>
                      </div>
                      <div className="bg-[var(--color-navy-800)] rounded-lg px-3 py-2">
                        <div className="text-gray-500">Tanks</div>
                        <div className="text-white font-medium">{c.army.tanks.toLocaleString()}</div>
                      </div>
                      <div className="bg-[var(--color-navy-800)] rounded-lg px-3 py-2">
                        <div className="text-gray-500">Naval Assets</div>
                        <div className="text-white font-medium">{c.navy.totalAssets.toLocaleString()}</div>
                      </div>
                    </div>
                    <Link
                      href={`/compare/${vsSlug}`}
                      className="text-xs text-[var(--color-gold-400)] hover:underline"
                    >
                      Compare {c.name} vs {c.code === "US" ? top10[1].country.name : top10[0].country.name} →
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Internal links */}
        <div className="mt-10 text-center space-y-4">
          <Link
            href="/ranking"
            className="text-[var(--color-gold-400)] hover:underline text-sm"
          >
            View Full Military Power Rankings (50+ Countries) →
          </Link>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] text-[var(--color-navy-950)] font-bold hover:shadow-lg transition-all"
            >
              Compare Any Two Countries
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
