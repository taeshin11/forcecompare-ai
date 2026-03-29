import type { Metadata } from "next";
import { notFound } from "next/navigation";
import countriesData from "../../../../public/data/countries.json";
import { toSlug, findBySlug, POPULAR_MATCHUPS } from "@/lib/countryUtils";
import { compareCountries } from "@/lib/calculatePowerScore";
import ComparePageClient from "./ComparePageClient";
import type { Country } from "@/lib/types";

const allCountries = countriesData.countries as Country[];

function parseSlug(slug: string): { a: Country; b: Country } | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  const a = findBySlug(allCountries, parts[0]);
  const b = findBySlug(allCountries, parts[1]);
  if (!a || !b || a.code === b.code) return null;
  return { a, b };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const [codeA, codeB] of POPULAR_MATCHUPS) {
    const a = allCountries.find((c) => c.code === codeA);
    const b = allCountries.find((c) => c.code === codeB);
    if (a && b) {
      params.push({ slug: `${toSlug(a.name)}-vs-${toSlug(b.name)}` });
    }
  }
  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const parsed = parseSlug(slug);
  if (!parsed) return { title: "Comparison Not Found" };

  const { a, b } = parsed;
  const result = compareCountries(a, b, allCountries);

  const title = `${a.name} vs ${b.name} Military Comparison 2026 — ForceCompare AI`;
  const description = `Compare ${a.name} vs ${b.name} military strength. ${result.winner.name} leads with a ${Math.max(result.scoreA, result.scoreB).toFixed(1)} Force Rating. Side-by-side analysis of army, navy, air force, defense budget, and more.`;

  return {
    title,
    description,
    keywords: [
      `${a.name} vs ${b.name}`,
      `${a.name} vs ${b.name} military`,
      `${a.name} vs ${b.name} military comparison`,
      `${a.name} military strength`,
      `${b.name} military strength`,
      `${a.name} army vs ${b.name} army`,
      `${a.name} vs ${b.name} who would win`,
      "military power comparison",
      "global firepower",
      "military strength ranking",
    ],
    openGraph: {
      title: `${a.flag} ${a.name} vs ${b.flag} ${b.name} — Military Strength Comparison`,
      description,
      url: `https://forcecompare-ai.vercel.app/compare/${slug}`,
      type: "website",
      siteName: "ForceCompare AI",
    },
    twitter: {
      card: "summary_large_image",
      title: `${a.name} vs ${b.name} Military Comparison`,
      description,
    },
    alternates: {
      canonical: `https://forcecompare-ai.vercel.app/compare/${slug}`,
    },
  };
}

export default async function ComparePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const { a, b } = parsed;
  const result = compareCountries(a, b, allCountries);

  // Build related matchups
  const relatedMatchups = POPULAR_MATCHUPS.filter(
    ([ca, cb]) =>
      (ca === a.code || cb === a.code || ca === b.code || cb === b.code) &&
      !(ca === a.code && cb === b.code) &&
      !(ca === b.code && cb === a.code)
  )
    .slice(0, 6)
    .map(([ca, cb]) => {
      const countryA = allCountries.find((c) => c.code === ca)!;
      const countryB = allCountries.find((c) => c.code === cb)!;
      return {
        slug: `${toSlug(countryA.name)}-vs-${toSlug(countryB.name)}`,
        nameA: countryA.name,
        nameB: countryB.name,
        flagA: countryA.flag,
        flagB: countryB.flag,
      };
    });

  return (
    <ComparePageClient
      result={result}
      slug={slug}
      allCountries={allCountries}
      relatedMatchups={relatedMatchups}
    />
  );
}
