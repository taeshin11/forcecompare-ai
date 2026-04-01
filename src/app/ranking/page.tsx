import type { Metadata } from "next";
import countriesData from "../../../public/data/countries.json";
import { compareCountries } from "@/lib/calculatePowerScore";
import type { Country } from "@/lib/types";
import RankingClient from "./RankingClient";

const allCountries = countriesData.countries as Country[];

export const metadata: Metadata = {
  title: "World Military Power Rankings 2025 — Top 50+ Countries",
  description:
    "Complete military strength rankings for 2025. See which countries have the strongest armies, navies, and air forces. Compare Force Ratings across 50+ nations using Global Firepower data.",
  keywords: [
    "military power ranking",
    "strongest military in the world",
    "military strength ranking 2025",
    "top military powers",
    "world military rankings",
    "strongest army in the world",
    "global firepower ranking",
    "military power index",
    "best military in the world",
    "country military ranking",
    "military ranking by country",
    "strongest military 2025",
  ],
  openGraph: {
    title: "World Military Power Rankings 2025 — ForceCompare AI",
    description:
      "Complete ranking of 50+ nations by military strength. See who has the strongest army, navy, and air force.",
    url: "https://forcecompare-ai.vercel.app/ranking",
    type: "website",
    siteName: "ForceCompare AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Military Power Rankings 2025",
    description:
      "Complete ranking of 50+ nations by military strength.",
  },
  alternates: {
    canonical: "https://forcecompare-ai.vercel.app/ranking",
  },
};

// Compute Force Rating for each country (vs average)
function computeAllRatings(): { country: Country; score: number }[] {
  // Use US as reference and compute score for every country against all others
  const ratings = allCountries.map((country) => {
    // Compute score vs all countries
    let totalNorm = 0;
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

    for (const cat of fields) {
      let catScore = 0;
      for (const getter of cat.getters) {
        const values = allCountries.map(getter);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const norm = max === min ? 0.5 : (getter(country) - min) / (max - min);
        catScore += norm;
      }
      catScore /= cat.getters.length;
      totalNorm += catScore * cat.weight;
    }

    return { country, score: Math.round(totalNorm * 1000) / 10 };
  });

  return ratings.sort((a, b) => b.score - a.score);
}

export default function RankingPage() {
  const rankings = computeAllRatings();

  return <RankingClient rankings={rankings} />;
}
