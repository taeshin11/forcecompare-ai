import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use ForceCompare AI — Guide & FAQ",
  description:
    "Step-by-step guide on comparing military forces between nations. FAQs about data sources, scoring methodology, and more.",
  keywords: [
    "how to compare military",
    "military comparison guide",
    "force comparison FAQ",
    "global firepower comparison",
  ],
  openGraph: {
    title: "How to Use ForceCompare AI — Guide & FAQ",
    description:
      "Step-by-step guide and FAQs for comparing military strength between nations.",
    url: "https://forcecompare-ai.vercel.app/how-to-use",
    type: "website",
  },
};

const faqs = [
  {
    question: "What data source does ForceCompare AI use?",
    answer:
      "ForceCompare AI uses data derived from the Global Firepower (GFP) Index, one of the most widely cited and publicly accessible military strength databases in the world. The GFP Index evaluates over 145 countries across more than 60 individual factors, including manpower, equipment inventories, financial resources, logistical capacity, natural resources, and geographic considerations. ForceCompare AI curates and structures this data for over 50 countries to power its comparison engine. The GFP Index is regularly referenced by major news outlets, defense publications, and academic researchers worldwide, making it a reliable and recognized baseline for conventional military strength assessments.",
  },
  {
    question: "How is the Force Rating calculated?",
    answer:
      "The Force Rating is a weighted composite score calculated across six major dimensions of military capability. Air Power receives the highest weight at 25%, reflecting its decisive role in modern warfare. Army (ground forces) and Navy each account for 20%, recognizing their critical importance for territorial control and power projection respectively. Personnel strength is weighted at 15%, acknowledging that manpower remains important but is less decisive than equipment and technology in contemporary conflicts. Natural Resources and Logistics each receive 10%, as they represent sustaining factors essential for prolonged military operations. Within each category, individual metrics are normalized against the highest value in the dataset, ensuring proportional and fair scoring. The final composite score ranges from 0 to 100, with higher scores indicating greater overall conventional military strength.",
  },
  {
    question: "How many countries are available for comparison?",
    answer:
      "ForceCompare AI currently includes detailed military data for over 50 countries. This selection covers all major global military powers (United States, Russia, China, India), significant regional powers (France, United Kingdom, Germany, Japan, South Korea, Turkey, Brazil, Egypt, Iran, Pakistan), and numerous strategically important smaller nations (Israel, Taiwan, Sweden, Greece, Philippines, Colombia, and many more). The roster spans every inhabited continent and represents the vast majority of nations that users typically want to compare. The country list is periodically reviewed and expanded as new data becomes available and based on user feedback and demand.",
  },
  {
    question: "Is the data accurate and up to date?",
    answer:
      "The data used by ForceCompare AI is sourced from the Global Firepower Index, which updates its rankings and data points annually. ForceCompare AI strives to reflect the most recent available GFP data, though there may be a lag between when GFP publishes updates and when those changes are incorporated into the platform. It is important to understand that all military data available in the public domain has inherent limitations. Exact equipment counts, personnel figures, and capability assessments can vary between sources, and classified programs or recent acquisitions may not be reflected. ForceCompare AI provides the best available approximation based on publicly accessible information, and it should be used as an informational reference rather than a definitive intelligence assessment.",
  },
  {
    question: "Can I share my comparison with others?",
    answer:
      "Yes, every comparison you make on ForceCompare AI generates a unique shareable URL. When you select two countries and click Compare Forces, the URL in your browser address bar automatically updates to include the country codes of both nations. You can simply copy this URL and share it via text message, email, social media, or any other communication channel. When the recipient opens the link, they will see the exact same comparison you created, with all the same data breakdowns and scoring. This feature is particularly useful for journalists referencing comparisons in articles, students including data in presentations, or anyone sharing interesting matchups with friends and colleagues.",
  },
  {
    question: "Why doesn't ForceCompare AI include nuclear weapons?",
    answer:
      "ForceCompare AI deliberately excludes nuclear weapons from its comparison methodology, and this is a conscious design choice shared with the Global Firepower Index itself. The reason is straightforward: nuclear arsenals are so overwhelmingly destructive that including them would render almost all other military factors irrelevant in the comparison. A country with even a modest nuclear arsenal would appear to dominate any non-nuclear state, regardless of how much stronger the non-nuclear state might be in every conventional category. By focusing exclusively on conventional military strength, ForceCompare AI produces comparisons that are far more nuanced, informative, and reflective of the military dynamics that actually determine the outcome of most real-world conflicts. The vast majority of military engagements, deterrence scenarios, and geopolitical standoffs are shaped by conventional capabilities, not nuclear weapons.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "The Global Firepower Index, which serves as the primary data source for ForceCompare AI, publishes updated rankings and data on an annual basis, typically early in each calendar year. ForceCompare AI aims to incorporate these updates as they become available, usually within a few weeks to months of the GFP annual release. Between annual updates, the data remains static. Users should be aware that significant military events, such as major equipment purchases, fleet expansions, or personnel changes, may occur between annual updates and may not be immediately reflected in the platform. For the most current information on any specific military development, users should consult dedicated defense news sources alongside ForceCompare AI.",
  },
  {
    question: "Is ForceCompare AI free to use?",
    answer:
      "Yes, ForceCompare AI is completely free to use with no restrictions. There are no premium tiers, no subscription fees, no feature gates, and no account registration required. Every feature available on the platform, including all country comparisons, detailed metric breakdowns, force ratings, and shareable URLs, is accessible to every visitor at no cost. The platform is supported through advertising, which allows it to remain free while covering hosting and development costs. ForceCompare AI was created with the belief that access to publicly available military comparison data should be open and accessible to everyone, whether you are a student writing a paper, a journalist covering a story, or simply someone curious about how different nations compare militarily.",
  },
  {
    question: "What categories are compared between two countries?",
    answer:
      "ForceCompare AI breaks down the comparison into six major categories. Air Power covers fighter and interceptor aircraft, dedicated attack aircraft, transport aircraft, trainer fleets, helicopters, and attack helicopters. Army includes battle tanks, armored fighting vehicles, self-propelled artillery, towed artillery, and rocket projectors. Navy encompasses total fleet strength including aircraft carriers, helicopter carriers, destroyers, frigates, corvettes, submarines, patrol vessels, and mine warfare craft. Personnel covers total active military personnel, reserve personnel, and paramilitary forces. Natural Resources examines oil production capacity and proven oil reserves, which are critical for sustaining military operations. Finally, Logistics evaluates airports, major ports and terminals, merchant marine fleet strength, and overall transportation infrastructure. Each category contributes to the final force rating based on its assigned weight.",
  },
  {
    question: "Can I compare more than two countries at once?",
    answer:
      "Currently, ForceCompare AI is designed as a head-to-head comparison tool that evaluates two countries at a time. This one-versus-one format was chosen because it provides the clearest and most focused analysis, allowing users to see exactly how two specific nations stack up across every category and metric. Comparing more than two countries simultaneously would require a significantly different interface and could make the results harder to interpret. However, you can easily run multiple comparisons in succession to build a broader picture. For example, you could compare the United States vs. China, then China vs. Russia, and then Russia vs. India to understand the relative rankings across several major powers. Multi-country comparison features may be considered for future updates based on user feedback.",
  },
];

export default function HowToUsePage() {
  return (
    <main className="min-h-screen bg-navy-950 text-gray-200">
      {/* Header */}
      <div className="bg-navy-900 border-b border-card-border">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
          >
            &larr; Back to Home
          </Link>
          <span
            className="text-gold-500 font-bold text-lg tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ForceCompare AI
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How to Use ForceCompare AI
        </h1>
        <p className="text-gold-400 text-lg mb-12 border-l-4 border-gold-500 pl-4">
          A step-by-step guide to comparing military forces, plus answers to
          frequently asked questions.
        </p>

        {/* Step-by-Step Guide */}
        <section className="mb-16">
          <h2
            className="text-2xl font-semibold text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Compare Forces in 3 Simple Steps
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6 flex gap-5">
              <div
                className="flex-shrink-0 w-14 h-14 bg-gold-500 text-navy-950 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                1
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Select Country A
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  On the ForceCompare AI homepage, you will see two dropdown
                  menus side by side. Click on the first dropdown labeled
                  &quot;Select Country A&quot; to open the list of available
                  nations. You can scroll through the alphabetically sorted list
                  or start typing a country name to quickly filter the results.
                  The dropdown includes over 50 countries spanning all major
                  military powers and significant regional forces. Once you find
                  the country you want to analyze, click on it to select it. The
                  dropdown will close and display your selected country name along
                  with its national flag.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6 flex gap-5">
              <div
                className="flex-shrink-0 w-14 h-14 bg-gold-500 text-navy-950 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Select Country B
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Next, click on the second dropdown labeled &quot;Select Country
                  B&quot; and choose the nation you want to compare against your
                  first selection. The process is identical: scroll or type to
                  find your country, then click to select it. You can compare any
                  two different nations available in the database. For example, if
                  you selected the United States as Country A, you might choose
                  China, Russia, or any other nation as Country B. The system
                  will prevent you from selecting the same country for both
                  slots, ensuring that every comparison produces meaningful
                  results.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6 flex gap-5">
              <div
                className="flex-shrink-0 w-14 h-14 bg-gold-500 text-navy-950 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Click &quot;Compare Forces&quot;
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With both countries selected, click the prominent &quot;Compare
                  Forces&quot; button located between the two dropdowns. The
                  comparison engine will instantly calculate force ratings for
                  both nations and display a comprehensive results dashboard. The
                  results include an overall force rating for each country, a
                  clear verdict banner showing which nation holds the advantage,
                  and detailed category-by-category breakdowns covering air
                  power, ground forces, naval strength, personnel, resources, and
                  logistics. Each category shows the specific metrics that
                  contributed to the score, with color-coded bars indicating
                  which country leads in each area. The page URL also updates
                  automatically, so you can bookmark or share the comparison
                  link with anyone.
                </p>
              </div>
            </div>
          </div>

          {/* Understanding Results */}
          <div className="mt-10">
            <h3
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Understanding Your Results
            </h3>
            <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
              <p>
                After clicking Compare Forces, the results dashboard displays
                several key elements designed to give you a complete picture of
                how the two nations stack up:
              </p>
              <ul className="space-y-3 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 flex-shrink-0">&#9670;</span>
                  <span>
                    <strong className="text-white">Verdict Banner:</strong> A
                    prominent banner at the top of the results showing the
                    overall winner along with both nations&apos; force ratings on a
                    0-100 scale. The margin of victory is described qualitatively
                    as marginal, moderate, or dominant to give you immediate
                    context.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 flex-shrink-0">&#9670;</span>
                  <span>
                    <strong className="text-white">Category Cards:</strong> Six
                    detailed cards covering Personnel, Air Power, Army, Navy,
                    Resources, and Logistics. Each card identifies which country
                    leads in that category and by how much.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 flex-shrink-0">&#9670;</span>
                  <span>
                    <strong className="text-white">Metric Bar Charts:</strong>{" "}
                    Within each category, animated horizontal bars display every
                    sub-metric. Gold-highlighted bars indicate the leading value,
                    making it instantly clear which country has the advantage in
                    each specific area such as tank count, submarine fleet size,
                    or active personnel.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 flex-shrink-0">&#9670;</span>
                  <span>
                    <strong className="text-white">Shareable URL:</strong> The
                    browser URL updates automatically with query parameters
                    containing both country codes. Copy and share this link
                    anywhere, and anyone who opens it will see the exact same
                    comparison.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mt-8 bg-navy-900 border border-gold-500/30 rounded-xl p-6">
            <h3
              className="text-lg font-semibold text-gold-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pro Tips
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9670;</span>
                <span>
                  You can share any comparison by copying the URL from your
                  browser address bar. The link contains both country codes and
                  will reproduce the exact same comparison for anyone who opens
                  it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9670;</span>
                <span>
                  After viewing a comparison, simply change one or both country
                  selections and click Compare Forces again to run a new
                  comparison without refreshing the page.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9670;</span>
                <span>
                  The comparison works on any device including smartphones and
                  tablets. The responsive layout adjusts automatically to provide
                  the best viewing experience on your screen size.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9670;</span>
                <span>
                  Run successive comparisons to build a broader understanding of
                  regional power dynamics. For example, compare all major powers
                  in a specific region against each other to see who leads overall.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden"
              >
                <div className="px-6 py-4 bg-navy-900 border-b border-card-border">
                  <h3
                    className="text-white font-semibold flex items-center gap-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span className="text-gold-500 text-sm font-bold">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="mb-12">
          <div className="bg-navy-900 border border-card-border rounded-xl p-8 text-center">
            <h2
              className="text-xl font-semibold text-white mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              ForceCompare AI is continuously being improved based on user
              feedback. If you have suggestions, spot data inaccuracies, or want
              to request a new country to be added to the database, feel free to
              reach out. The best way to get started is to try a comparison
              yourself and explore the results.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &larr; Start Comparing Now
            </Link>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-4 pb-8">
          <Link
            href="/"
            className="text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
