"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, SUPPORTED_LOCALES, type Locale, type TranslationKeys } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  // Check localStorage first
  const saved = localStorage.getItem("fc-locale");
  if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
    return saved as Locale;
  }

  // Detect from browser
  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const short = lang.split("-")[0].toLowerCase();
    if (SUPPORTED_LOCALES.includes(short as Locale)) {
      return short as Locale;
    }
  }

  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fc-locale", newLocale);
    document.documentElement.lang = newLocale;
    if (newLocale === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, []);

  // Update html lang on mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
      if (locale === "ar") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }
  }, [locale, mounted]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
