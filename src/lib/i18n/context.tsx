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

export function I18nProvider({
  children,
  serverLocale,
}: {
  children: React.ReactNode;
  serverLocale: Locale;
}) {
  // Initialize with server-detected locale — no flash of wrong language
  const [locale, setLocaleState] = useState<Locale>(serverLocale);

  // On mount, check if user has a localStorage override
  useEffect(() => {
    const saved = localStorage.getItem("fc-locale");
    if (saved && SUPPORTED_LOCALES.includes(saved as Locale) && saved !== locale) {
      setLocaleState(saved as Locale);
      document.documentElement.lang = saved;
      // Sync cookie with localStorage choice
      document.cookie = `fc-locale=${saved};path=/;max-age=${365 * 24 * 60 * 60};samesite=lax`;
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fc-locale", newLocale);
    document.cookie = `fc-locale=${newLocale};path=/;max-age=${365 * 24 * 60 * 60};samesite=lax`;
    document.documentElement.lang = newLocale;
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
