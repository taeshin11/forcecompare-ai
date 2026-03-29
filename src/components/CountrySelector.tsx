"use client";

import { useState, useRef, useEffect } from "react";
import type { Country } from "@/lib/types";

interface CountrySelectorProps {
  countries: Country[];
  selectedA: Country | null;
  selectedB: Country | null;
  onSelectA: (country: Country) => void;
  onSelectB: (country: Country) => void;
  onCompare: () => void;
  isComparing: boolean;
}

function Dropdown({
  label,
  countries,
  selected,
  onSelect,
  excludeCode,
}: {
  label: string;
  countries: Country[];
  selected: Country | null;
  onSelect: (country: Country) => void;
  excludeCode?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = countries.filter(
    (c) =>
      c.code !== excludeCode &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="relative w-full max-w-xs">
      <label className="block text-sm text-gray-400 mb-1 font-medium">
        {label}
      </label>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-gold-500)] transition-colors text-left"
      >
        {selected ? (
          <>
            <span className="text-xl">{selected.flag}</span>
            <span className="text-white font-medium">{selected.name}</span>
          </>
        ) : (
          <span className="text-gray-500">Select a country...</span>
        )}
        <svg
          className="ml-auto w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div role="listbox" aria-label={`${label} options`} className="absolute z-50 mt-1 w-full rounded-lg bg-[var(--color-navy-900)] border border-[var(--color-card-border)] shadow-xl max-h-60 overflow-hidden">
          <div className="p-2 border-b border-[var(--color-card-border)]">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={`Search countries for ${label}`}
              className="w-full px-3 py-2 rounded bg-[var(--color-navy-950)] border border-[var(--color-card-border)] text-white text-sm focus:outline-none focus:border-[var(--color-gold-500)]"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto max-h-48">
            {filtered.map((country) => (
              <button
                role="option"
                aria-selected={selected?.code === country.code}
                key={country.code}
                onClick={() => {
                  onSelect(country);
                  setOpen(false);
                  setSearch("");
                }}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--color-navy-800)] transition-colors text-left"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-gray-200 text-sm">{country.name}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-gray-500 text-sm text-center py-3">
                No countries found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CountrySelector({
  countries,
  selectedA,
  selectedB,
  onSelectA,
  onSelectB,
  onCompare,
  isComparing,
}: CountrySelectorProps) {
  const canCompare = selectedA && selectedB;

  return (
    <section className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <Dropdown
            label="Country A"
            countries={countries}
            selected={selectedA}
            onSelect={onSelectA}
            excludeCode={selectedB?.code}
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-navy-800)] border border-[var(--color-card-border)] text-[var(--color-gold-400)] font-bold text-lg mt-4 md:mt-6">
            VS
          </div>
          <Dropdown
            label="Country B"
            countries={countries}
            selected={selectedB}
            onSelect={onSelectB}
            excludeCode={selectedA?.code}
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={onCompare}
            disabled={!canCompare || isComparing}
            className="px-8 py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] text-[var(--color-navy-950)] hover:shadow-lg hover:shadow-[var(--color-gold-500)]/20 active:scale-95"
          >
            {isComparing ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Analyzing...
              </span>
            ) : (
              "Compare Forces"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
