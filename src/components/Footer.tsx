"use client";

import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)] mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>
            Data source:{" "}
            <a
              href="https://www.globalfirepower.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
            >
              Global Firepower Index
            </a>
          </span>
          <span className="hidden md:inline">|</span>
          <span>ForceCompare AI &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <VisitorCounter />
          <span className="text-gray-600">|</span>
          <span className="text-gray-600">
            Ad-supported — ads help keep this tool free
          </span>
        </div>
      </div>
    </footer>
  );
}
