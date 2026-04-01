"use client";

import Link from "next/link";
import VisitorCounter from "./VisitorCounter";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--color-card-border)] mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 text-sm">
          <Link
            href="/about"
            className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
          >
            {t.about_us}
          </Link>
          <Link
            href="/how-to-use"
            className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
          >
            {t.how_to_use}
          </Link>
          <Link
            href="/ranking"
            className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
          >
            {t.ranking_title.replace(/\s*2025$/, "")}
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
          >
            {t.privacy_policy}
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-[var(--color-gold-400)] hover:underline transition-colors"
          >
            {t.terms_of_service}
          </Link>
        </div>

        {/* Feedback link — subtle, non-intrusive */}
        <div className="flex justify-center mb-5">
          <a
            href="mailto:taeshinkim11@gmail.com?subject=ForceCompare%20AI%20Feedback"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[var(--color-gold-400)] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {t.suggestions_feedback}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500 pt-4 border-t border-[var(--color-card-border)]">
          <div className="flex items-center gap-4">
            <span>
              {t.data_source}:{" "}
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
            <span>&copy; {new Date().getFullYear()} ForceCompare AI</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
