"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function FeedbackButton() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useI18n();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {expanded && (
        <div className="mb-2 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-navy-900)] p-4 shadow-2xl w-72 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white">{t.send_feedback}</h3>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-500 hover:text-white text-lg leading-none"
              aria-label="Close feedback"
            >
              &times;
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            {t.feedback_desc}
          </p>
          <a
            href="mailto:taeshinkim11@gmail.com?subject=ForceCompare%20AI%20Feedback&body=Hi%2C%0A%0AI%20have%20the%20following%20feedback%3A%0A%0A"
            className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] text-[var(--color-navy-950)] font-semibold text-sm hover:shadow-lg transition-all"
          >
            {t.send_email}
          </a>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-10 h-10 rounded-full bg-[var(--color-navy-800)] border border-[var(--color-card-border)] hover:border-[var(--color-gold-500)] text-gray-400 hover:text-[var(--color-gold-400)] transition-all shadow-lg flex items-center justify-center"
        aria-label={t.send_feedback}
        title={t.send_feedback}
      >
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      </button>
    </div>
  );
}
