import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "ko", "zh", "ja", "es", "pt", "ar", "hi", "ru", "de", "fr", "tr"];
const COOKIE_NAME = "fc-locale";

function getLocaleFromHeaders(request: NextRequest): string {
  // 1. Check cookie first (user's explicit choice)
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Parse Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  const langs = acceptLang.split(",").map((part) => {
    const [lang] = part.trim().split(";");
    return lang.split("-")[0].toLowerCase();
  });

  for (const lang of langs) {
    if (SUPPORTED_LOCALES.includes(lang)) {
      return lang;
    }
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const locale = getLocaleFromHeaders(request);
  const response = NextResponse.next();

  // Set locale as a cookie so it persists and is readable by server components
  if (!request.cookies.get(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, locale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
      sameSite: "lax",
    });
  }

  // Set a request header so server components can read it
  response.headers.set("x-locale", locale);

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API
    "/((?!_next/static|_next/image|data/|favicon\\.ico|ads\\.txt|robots\\.txt|forcecompareai\\.txt|.*\\.svg$).*)",
  ],
};
