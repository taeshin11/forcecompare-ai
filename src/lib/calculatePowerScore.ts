import type { Country, ComparisonResult, CategoryResult, SubcategoryResult } from "./types";

function minMaxNormalize(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

function getFieldValues(countries: Country[], getter: (c: Country) => number): { min: number; max: number } {
  const values = countries.map(getter);
  return { min: Math.min(...values), max: Math.max(...values) };
}

function normalize(value: number, countries: Country[], getter: (c: Country) => number): number {
  const { min, max } = getFieldValues(countries, getter);
  return minMaxNormalize(value, min, max);
}

function subWinner(a: number, b: number, codeA: string, codeB: string): string {
  if (a > b) return codeA;
  if (b > a) return codeB;
  return codeA; // tie goes to A
}

export function compareCountries(
  countryA: Country,
  countryB: Country,
  allCountries: Country[]
): ComparisonResult {
  // Calculate category scores for both countries
  // Higher normalized score = stronger

  // --- Military Personnel (15%) ---
  const milFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Total Personnel", getter: (c) => c.military.totalPersonnel },
    { name: "Active Military", getter: (c) => c.military.activeMilitary },
    { name: "Reserve Military", getter: (c) => c.military.reserveMilitary },
  ];

  // --- Air Power (25%) ---
  const airFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Total Aircraft", getter: (c) => c.airforce.totalAircraft },
    { name: "Fighter Aircraft", getter: (c) => c.airforce.fighters },
    { name: "Attack Helicopters", getter: (c) => c.airforce.attackHelicopters },
    { name: "Transport Aircraft", getter: (c) => c.airforce.transportAircraft },
  ];

  // --- Army (20%) ---
  const armyFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Tanks", getter: (c) => c.army.tanks },
    { name: "Armored Vehicles", getter: (c) => c.army.armoredVehicles },
    { name: "Self-Propelled Artillery", getter: (c) => c.army.selfPropelledArtillery },
    { name: "Rocket Launchers", getter: (c) => c.army.rocketLaunchers },
  ];

  // --- Naval Power (20%) ---
  const navyFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Total Naval Assets", getter: (c) => c.navy.totalAssets },
    { name: "Aircraft Carriers", getter: (c) => c.navy.carriers },
    { name: "Destroyers", getter: (c) => c.navy.destroyers },
    { name: "Submarines", getter: (c) => c.navy.submarines },
    { name: "Frigates", getter: (c) => c.navy.frigates },
  ];

  // --- Resources (10%) ---
  const resFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Defense Budget", getter: (c) => c.resources.defenseBudget },
    { name: "Oil Production (bbl/day)", getter: (c) => c.resources.oilProduction },
    { name: "Oil Reserves (bbl)", getter: (c) => c.resources.oilReserves },
  ];

  // --- Logistics & Geography (10%) ---
  const logFields: { name: string; getter: (c: Country) => number }[] = [
    { name: "Airports", getter: (c) => c.logistics.airports },
    { name: "Major Ports", getter: (c) => c.logistics.majorPorts },
    { name: "Roadway Coverage (km)", getter: (c) => c.logistics.roadwayCoverage },
    { name: "Total Area (km²)", getter: (c) => c.geography.squareArea },
    { name: "Coastline (km)", getter: (c) => c.geography.coastline },
  ];

  function computeCategoryScore(
    country: Country,
    fields: { name: string; getter: (c: Country) => number }[]
  ): number {
    const scores = fields.map((f) => normalize(f.getter(country), allCountries, f.getter));
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

  function buildCategory(
    name: string,
    icon: string,
    fields: { name: string; getter: (c: Country) => number }[]
  ): { category: CategoryResult; scoreA: number; scoreB: number } {
    const scoreA = computeCategoryScore(countryA, fields);
    const scoreB = computeCategoryScore(countryB, fields);

    const subcategories: SubcategoryResult[] = fields.map((f) => ({
      name: f.name,
      valueA: f.getter(countryA),
      valueB: f.getter(countryB),
      winnerCode: subWinner(f.getter(countryA), f.getter(countryB), countryA.code, countryB.code),
    }));

    // Category winner based on number of subcategory wins
    const winsA = subcategories.filter((s) => s.winnerCode === countryA.code).length;
    const winsB = subcategories.filter((s) => s.winnerCode === countryB.code).length;

    return {
      category: {
        name,
        icon,
        subcategories,
        winnerCode: winsA >= winsB ? countryA.code : countryB.code,
      },
      scoreA,
      scoreB,
    };
  }

  const mil = buildCategory("Military Personnel", "\u{1F396}\uFE0F", milFields);
  const air = buildCategory("Air Power", "\u2708\uFE0F", airFields);
  const army = buildCategory("Army Strength", "\u{1F3D7}\uFE0F", armyFields);
  const navy = buildCategory("Naval Power", "\u{1F6A2}", navyFields);
  const res = buildCategory("Resources & Budget", "\u{1F4B0}", resFields);
  const log = buildCategory("Logistics & Geography", "\u{1F30D}", logFields);

  // Weighted composite (higher = stronger)
  const totalA =
    mil.scoreA * 0.15 +
    air.scoreA * 0.25 +
    army.scoreA * 0.20 +
    navy.scoreA * 0.20 +
    res.scoreA * 0.10 +
    log.scoreA * 0.10;

  const totalB =
    mil.scoreB * 0.15 +
    air.scoreB * 0.25 +
    army.scoreB * 0.20 +
    navy.scoreB * 0.20 +
    res.scoreB * 0.10 +
    log.scoreB * 0.10;

  // Convert to 0-100 Force Rating
  const scoreA = Math.round(totalA * 1000) / 10;
  const scoreB = Math.round(totalB * 1000) / 10;

  return {
    countryA,
    countryB,
    scoreA,
    scoreB,
    winner: scoreA >= scoreB ? countryA : countryB,
    categories: [
      mil.category,
      air.category,
      army.category,
      navy.category,
      res.category,
      log.category,
    ],
  };
}
