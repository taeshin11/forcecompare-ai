"use client";

interface BarChartProps {
  valueA: number;
  valueB: number;
  labelA: string;
  labelB: string;
  flagA: string;
  flagB: string;
  winnerCode: string;
  codeA: string;
  codeB: string;
}

function formatNumber(n: number): string {
  if (n >= 1_000_000_000_000) return `$${(n / 1_000_000_000_000).toFixed(1)}T`;
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export default function BarChart({
  valueA,
  valueB,
  labelA,
  labelB,
  flagA,
  flagB,
  winnerCode,
  codeA,
  codeB,
}: BarChartProps) {
  const max = Math.max(valueA, valueB, 1);
  const pctA = (valueA / max) * 100;
  const pctB = (valueB / max) * 100;

  return (
    <div className="flex flex-col gap-2">
      {/* Country A bar */}
      <div className="flex items-center gap-2">
        <span className="text-sm w-8 text-right">{flagA}</span>
        <div className="flex-1 h-7 rounded bg-[var(--color-navy-900)] overflow-hidden relative">
          <div
            className="h-full rounded animate-fill-bar transition-all"
            style={{
              width: `${pctA}%`,
              background:
                winnerCode === codeA
                  ? "linear-gradient(90deg, var(--color-gold-500), var(--color-gold-400))"
                  : "linear-gradient(90deg, #374151, #4b5563)",
            }}
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white">
            {formatNumber(valueA)}
          </span>
        </div>
      </div>
      {/* Country B bar */}
      <div className="flex items-center gap-2">
        <span className="text-sm w-8 text-right">{flagB}</span>
        <div className="flex-1 h-7 rounded bg-[var(--color-navy-900)] overflow-hidden relative">
          <div
            className="h-full rounded animate-fill-bar transition-all"
            style={{
              width: `${pctB}%`,
              background:
                winnerCode === codeB
                  ? "linear-gradient(90deg, var(--color-gold-500), var(--color-gold-400))"
                  : "linear-gradient(90deg, #374151, #4b5563)",
            }}
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white">
            {formatNumber(valueB)}
          </span>
        </div>
      </div>
    </div>
  );
}
