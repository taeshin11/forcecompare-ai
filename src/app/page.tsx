"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { Country, ComparisonResult } from "@/lib/types";
import { compareCountries } from "@/lib/calculatePowerScore";
import { trackComparison } from "@/lib/trackComparison";
import HeroSection from "@/components/HeroSection";
import CountrySelector from "@/components/CountrySelector";
import ComparisonDashboard from "@/components/ComparisonDashboard";
import VerdictBanner from "@/components/VerdictBanner";
import Disclaimer from "@/components/Disclaimer";
import AdContainer from "@/components/AdContainer";
import PopularMatchups from "@/components/PopularMatchups";
import ShareButtons from "@/components/ShareButtons";

function CompareApp() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedA, setSelectedA] = useState<Country | null>(null);
  const [selectedB, setSelectedB] = useState<Country | null>(null);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load country data
  useEffect(() => {
    fetch("/data/countries.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.countries);
        setLoading(false);

        // Check URL params for pre-selected countries
        const codeA = searchParams.get("a");
        const codeB = searchParams.get("b");
        if (codeA && codeB) {
          const a = data.countries.find(
            (c: Country) => c.code === codeA.toUpperCase()
          );
          const b = data.countries.find(
            (c: Country) => c.code === codeB.toUpperCase()
          );
          if (a && b) {
            setSelectedA(a);
            setSelectedB(b);
            const compResult = compareCountries(a, b, data.countries);
            setResult(compResult);
            document.title = `ForceCompare AI — ${a.name} vs ${b.name}`;
          }
        }
      })
      .catch((err) => {
        setError("Failed to load military data. Please refresh the page.");
        setLoading(false);
        console.error("Data load failed:", err);
      });
  }, [searchParams]);

  const handleCompare = useCallback(() => {
    if (!selectedA || !selectedB) return;
    setIsComparing(true);
    setResult(null);

    // Update URL
    router.push(`?a=${selectedA.code}&b=${selectedB.code}`, { scroll: false });

    setTimeout(() => {
      const compResult = compareCountries(selectedA, selectedB, countries);
      setResult(compResult);
      setIsComparing(false);

      // Update page title with country names
      document.title = `ForceCompare AI — ${selectedA.name} vs ${selectedB.name}`;

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

      trackComparison({
        countryA: selectedA.name,
        countryB: selectedB.name,
        winner: compResult.winner.name,
        powerScoreA: compResult.scoreA,
        powerScoreB: compResult.scoreB,
      });
    }, 250);
  }, [selectedA, selectedB, countries, router]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center" role="status" aria-label="Loading">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--color-gold-500)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading military data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-red-400 text-lg mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-lg bg-[var(--color-gold-500)] text-[var(--color-navy-950)] font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <AdContainer slot="top" className="py-4" />
      <CountrySelector
        countries={countries}
        selectedA={selectedA}
        selectedB={selectedB}
        onSelectA={setSelectedA}
        onSelectB={setSelectedB}
        onCompare={handleCompare}
        isComparing={isComparing}
      />

      {isComparing && (
        <div className="flex items-center justify-center py-12" role="status" aria-label="Analyzing">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-[var(--color-gold-500)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-400 text-sm">Analyzing forces...</p>
          </div>
        </div>
      )}

      {result && (
        <div ref={resultsRef}>
          <VerdictBanner result={result} />
          <ShareButtons
            countryA={result.countryA.name}
            countryB={result.countryB.name}
            winner={result.winner.name}
            scoreA={result.scoreA}
            scoreB={result.scoreB}
          />
          <AdContainer slot="middle" className="py-4" />
          <ComparisonDashboard result={result} />
          <Disclaimer />
          {/* Subtle feedback CTA after results */}
          <div className="flex justify-center py-4">
            <a
              href="mailto:taeshinkim11@gmail.com?subject=ForceCompare%20AI%20Suggestion&body=Hi%2C%0A%0AI%20have%20a%20suggestion%20for%20ForceCompare%20AI%3A%0A%0A"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[var(--color-gold-400)] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
              Missing a country or have a suggestion? Let us know
            </a>
          </div>
        </div>
      )}

      {!result && <PopularMatchups />}
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[var(--color-gold-500)] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CompareApp />
    </Suspense>
  );
}
