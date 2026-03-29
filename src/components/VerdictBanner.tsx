"use client";

import type { ComparisonResult } from "@/lib/types";

interface VerdictBannerProps {
  result: ComparisonResult;
}

export default function VerdictBanner({ result }: VerdictBannerProps) {
  const { countryA, countryB, scoreA, scoreB, winner } = result;
  const loser = winner.code === countryA.code ? countryB : countryA;
  const winnerScore = winner.code === countryA.code ? scoreA : scoreB;
  const loserScore = winner.code === countryA.code ? scoreB : scoreA;
  const diff = Math.abs(scoreA - scoreB);

  let verdictText = "has stronger military forces on paper";
  if (diff < 3) verdictText = "has a marginal edge in military strength";
  else if (diff < 10) verdictText = "holds a moderate military advantage";
  else if (diff >= 25) verdictText = "dominates in military power";

  return (
    <section className="px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="animate-verdict rounded-2xl border border-[var(--color-gold-500)]/30 bg-gradient-to-br from-[var(--color-navy-800)] to-[var(--color-navy-900)] p-8 text-center animate-pulse-glow">
          {/* Score circles */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-4 mx-auto mb-2"
                style={{
                  borderColor:
                    winner.code === countryA.code
                      ? "var(--color-gold-400)"
                      : "#374151",
                  color:
                    winner.code === countryA.code
                      ? "var(--color-gold-400)"
                      : "#9ca3af",
                }}
              >
                {scoreA.toFixed(1)}
              </div>
              <span className="text-lg">{countryA.flag}</span>
              <p className="text-sm text-gray-400">{countryA.name}</p>
            </div>
            <div className="text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-4 mx-auto mb-2"
                style={{
                  borderColor:
                    winner.code === countryB.code
                      ? "var(--color-gold-400)"
                      : "#374151",
                  color:
                    winner.code === countryB.code
                      ? "var(--color-gold-400)"
                      : "#9ca3af",
                }}
              >
                {scoreB.toFixed(1)}
              </div>
              <span className="text-lg">{countryB.flag}</span>
              <p className="text-sm text-gray-400">{countryB.name}</p>
            </div>
          </div>

          {/* Verdict text */}
          <div className="mb-2">
            <span className="text-3xl">{winner.flag}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="text-[var(--color-gold-400)]">{winner.name}</span>{" "}
            {verdictText}
          </h2>
          <p className="text-gray-400 text-sm">
            Force Rating: {winner.name}{" "}
            <span className="text-[var(--color-gold-400)] font-semibold">
              {winnerScore.toFixed(1)}
            </span>{" "}
            vs {loser.name}{" "}
            <span className="text-gray-300 font-semibold">
              {loserScore.toFixed(1)}
            </span>{" "}
            out of 100
          </p>
        </div>
      </div>
    </section>
  );
}
