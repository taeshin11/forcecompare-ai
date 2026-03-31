import type { Metadata } from "next";
import Script from "next/script";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import FeedbackButton from "@/components/FeedbackButton";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forcecompare-ai.vercel.app"),
  title: {
    default: "ForceCompare AI — Military Power Matchup Simulator 2026",
    template: "%s | ForceCompare AI",
  },
  description:
    "Compare military strength between nations side by side. Analyze army, navy, air force, defense budget, and resources using Global Firepower data. Free military comparison tool.",
  keywords: [
    "military comparison",
    "military strength",
    "global firepower",
    "army comparison",
    "navy comparison",
    "air force comparison",
    "military power",
    "military ranking",
    "country military comparison",
    "defense budget comparison",
    "military power index",
    "who has the strongest military",
    "military strength by country",
    "compare military forces",
    "military simulator",
    "USA vs Russia military",
    "USA vs China military",
    "India vs Pakistan military",
    "military ranking 2026",
    "strongest army in the world",
    "world military power ranking",
    "군사력 비교",
    "军事力量对比",
    "軍事力比較",
    "comparación militar",
    "Militärvergleich",
  ],
  openGraph: {
    title: "ForceCompare AI — Military Power Matchup Simulator",
    description:
      "Select two nations. See who dominates. Compare military strength across army, navy, air force, defense budget, and resources. Free tool — no signup required.",
    type: "website",
    siteName: "ForceCompare AI",
    url: "https://forcecompare-ai.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForceCompare AI — Military Power Matchup",
    description:
      "Select two nations. See who dominates. Compare military strength across land, air, sea, and resources.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://forcecompare-ai.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="WddgcbVJsL2BGHNAje5m6DK56IcR0Mw5UOqozI2Xtrc" />
        {/* Google AdSense auto-ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098271335538021"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "ForceCompare AI",
                url: "https://forcecompare-ai.vercel.app",
                description:
                  "Compare military strength between nations using Global Firepower data. Free military comparison tool with side-by-side analysis of army, navy, air force, and defense budget.",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "156",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ForceCompare AI",
                url: "https://forcecompare-ai.vercel.app",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "taeshinkim11@gmail.com",
                  contactType: "customer support",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does ForceCompare AI compare military strength?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ForceCompare AI uses a weighted composite scoring system analyzing 6 categories: Military Personnel (15%), Air Power (25%), Army Strength (20%), Naval Power (20%), Resources & Budget (10%), and Logistics & Geography (10%). Data is sourced from the Global Firepower Index.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which country has the strongest military in 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Based on Global Firepower data, the United States leads with the highest Force Rating, followed by Russia and China. Visit ForceCompare AI to see the full ranking and compare any two countries.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is ForceCompare AI free to use?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, ForceCompare AI is completely free with no sign-up required. Compare military strength between any two countries instantly.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How many countries can I compare?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ForceCompare AI includes military data for over 50 countries covering all major and regional military powers worldwide.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does the comparison include nuclear weapons?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. ForceCompare AI is a numerical comparison of conventional military assets. It does not account for nuclear capabilities, alliance networks, technology quality, cyber warfare, or troop morale.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* Detect locale BEFORE React hydrates — prevents flash of English */}
        <Script
          id="locale-detect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var S=["en","ko","zh","ja","es","pt","ar","hi","ru","de","fr","tr"];var l="en";try{var s=localStorage.getItem("fc-locale");if(s&&S.indexOf(s)!==-1){l=s}else{var b=navigator.languages||[navigator.language];for(var i=0;i<b.length;i++){var c=b[i].split("-")[0].toLowerCase();if(S.indexOf(c)!==-1){l=c;break}}}}catch(e){}document.documentElement.setAttribute("data-locale",l);document.documentElement.lang=l;if(l==="ar")document.documentElement.dir="rtl";})();`,
          }}
        />
        <I18nProvider>
        {children}
        <Footer />
        <FeedbackButton />
        </I18nProvider>
        {/* Adsterra Social Bar (push notification style ads) */}
        <script
          async
          data-cfasync="false"
          src="https://pl29007022.profitablecpmratenetwork.com/49/d5/96/49d596f0de4bd5a9af126cecd2cb1ceb.js"
        />
      </body>
    </html>
  );
}
