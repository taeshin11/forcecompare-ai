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
  title: "ForceCompare AI — Military Power Matchup",
  description:
    "Compare military strength between nations. Side-by-side analysis of army, navy, air force, and resources using Global Firepower data.",
  keywords: [
    "military comparison",
    "military strength",
    "global firepower",
    "army comparison",
    "navy comparison",
    "air force comparison",
    "military power",
  ],
  openGraph: {
    title: "ForceCompare AI — Military Power Matchup",
    description:
      "Select two nations. See who dominates. Compare military strength across land, air, sea, and resources.",
    type: "website",
    siteName: "ForceCompare AI",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ForceCompare AI",
              description:
                "Compare military strength between nations using Global Firepower data.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
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
