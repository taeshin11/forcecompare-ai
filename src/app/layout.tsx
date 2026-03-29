import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import FeedbackButton from "@/components/FeedbackButton";
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
            ]),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
        <Footer />
        <FeedbackButton />
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
