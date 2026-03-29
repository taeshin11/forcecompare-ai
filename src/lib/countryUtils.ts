import type { Country } from "./types";

/** Convert country name to URL-friendly slug */
export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

/** Convert slug back to search term */
export function fromSlug(slug: string): string {
  return slug.replace(/-/g, " ");
}

/** Find country by slug (case-insensitive name match) */
export function findBySlug(countries: Country[], slug: string): Country | undefined {
  const search = fromSlug(slug).toLowerCase();
  return countries.find((c) => c.name.toLowerCase() === search);
}

/** Generate comparison slug: "united-states-vs-russia" */
export function comparisonSlug(a: Country, b: Country): string {
  return `${toSlug(a.name)}-vs-${toSlug(b.name)}`;
}

/** All popular matchup pairs for static generation + SEO */
export const POPULAR_MATCHUPS: [string, string][] = [
  // Superpower matchups (highest search volume)
  ["US", "RU"], ["US", "CN"], ["RU", "CN"],
  // Asian rivalries
  ["IN", "PK"], ["IN", "CN"], ["JP", "CN"], ["KR", "KP"], ["TW", "CN"],
  ["JP", "KR"], ["IN", "BD"], ["VN", "CN"],
  // Middle East
  ["IL", "IR"], ["SA", "IR"], ["TR", "GR"], ["US", "IR"],
  ["EG", "TR"], ["SA", "EG"], ["IQ", "IR"],
  // European
  ["GB", "FR"], ["DE", "FR"], ["RU", "UA"], ["PL", "DE"],
  ["GB", "DE"], ["FR", "IT"], ["SE", "FI"], ["GR", "TR"],
  // Americas
  ["US", "BR"], ["US", "MX"], ["BR", "AR"], ["CO", "VE"],
  // Cross-region
  ["US", "IN"], ["US", "JP"], ["US", "KR"], ["US", "GB"],
  ["US", "DE"], ["US", "FR"], ["US", "IL"], ["US", "AU"],
  ["US", "TR"], ["US", "SA"], ["US", "PK"], ["US", "EG"],
  ["CN", "IN"], ["CN", "JP"], ["CN", "KR"], ["CN", "AU"],
  ["RU", "IN"], ["RU", "TR"], ["RU", "IR"], ["RU", "JP"],
  ["GB", "IN"], ["FR", "TR"], ["DE", "IT"],
  // Regional powers
  ["AU", "NZ"], ["AU", "ID"], ["PH", "CN"], ["TH", "VN"],
  ["NG", "ZA"], ["EG", "DZ"], ["MA", "DZ"], ["ET", "EG"],
  ["PK", "IR"], ["PK", "SA"], ["ID", "MY"],
  ["NO", "SE"], ["NL", "BE"], ["CZ", "PL"],
  ["BR", "MX"], ["CL", "AR"], ["PE", "CO"],
];
