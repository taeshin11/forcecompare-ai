"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
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

  // Check data-locale attribute (set by inline script before React)
  const htmlLocale = document.documentElement.getAttribute("data-locale");
  if (htmlLocale && SUPPORTED_LOCALES.includes(htmlLocale as Locale)) {
    return htmlLocale as Locale;
  }

  // Fallback: localStorage
  const saved = localStorage.getItem("fc-locale");
  if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
    return saved as Locale;
  }

  // Fallback: browser language
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
  // Start with "en" to match server render, then immediately update on mount
  const [locale, setLocaleState] = useState<Locale>("en");

  // On mount, detect actual locale and update
  useEffect(() => {
    const detected = detectLocale();
    if (detected !== "en") {
      setLocaleState(detected);
    }
    // Also update the html attributes
    document.documentElement.lang = detected;
    document.documentElement.setAttribute("data-locale", detected);
    if (detected === "ar") {
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fc-locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.setAttribute("data-locale", newLocale);
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);

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
