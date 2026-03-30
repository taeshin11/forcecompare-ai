"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Disclaimer() {
  const { t } = useI18n();

  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto rounded-lg border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6">
        <h3 className="text-sm font-bold text-[var(--color-gold-400)] uppercase tracking-wider mb-3">
          {t.disclaimer_title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {t.disclaimer_text}
        </p>
      </div>
    </section>
  );
}
