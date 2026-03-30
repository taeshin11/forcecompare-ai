import type { MetadataRoute } from "next";
import countriesData from "../../public/data/countries.json";
import { toSlug, POPULAR_MATCHUPS } from "@/lib/countryUtils";
import type { Country } from "@/lib/types";

const allCountries = countriesData.countries as Country[];
const BASE_URL = "https://forcecompare-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ranking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/strongest-militaries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-to-use`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const comparisonPages: MetadataRoute.Sitemap = POPULAR_MATCHUPS.map(
    ([codeA, codeB]) => {
      const a = allCountries.find((c) => c.code === codeA);
      const b = allCountries.find((c) => c.code === codeB);
      if (!a || !b) return null;
      return {
        url: `${BASE_URL}/compare/${toSlug(a.name)}-vs-${toSlug(b.name)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      };
    }
  ).filter((x): x is NonNullable<typeof x> => x !== null);

  return [...staticPages, ...comparisonPages];
}
