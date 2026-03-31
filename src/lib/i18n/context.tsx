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

/** Read locale that was pre-detected by the inline script in <head> */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  // Read from the data attribute set by the inline <head> script
  const htmlLocale = document.documentElement.getAttribute("data-locale");
  if (htmlLocale && SUPPORTED_LOCALES.includes(htmlLocale as Locale)) {
    return htmlLocale as Locale;
  }

  // Fallback: detect here
  const saved = localStorage.getItem("fc-locale");
  if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
    return saved as Locale;
  }

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
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale());

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fc-locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.setAttribute("data-locale", newLocale);
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", locale);
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

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

/**
 * Inline script to inject in <head> BEFORE React hydrates.
 * This detects locale immediately and sets data-locale on <html>,
 * so React can read it synchronously on first render.
 */
export const LOCALE_DETECT_SCRIPT = `
(function(){
  var S=["en","ko","zh","ja","es","pt","ar","hi","ru","de","fr","tr"];
  var l="en";
  try{
    var s=localStorage.getItem("fc-locale");
    if(s&&S.indexOf(s)!==-1){l=s}
    else{
      var b=navigator.languages||[navigator.language];
      for(var i=0;i<b.length;i++){
        var c=b[i].split("-")[0].toLowerCase();
        if(S.indexOf(c)!==-1){l=c;break}
      }
    }
  }catch(e){}
  document.documentElement.setAttribute("data-locale",l);
  document.documentElement.lang=l;
  if(l==="ar")document.documentElement.dir="rtl";
})();
`;
