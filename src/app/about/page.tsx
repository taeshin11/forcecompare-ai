import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ForceCompare AI — Military Strength Comparison Tool",
  description:
    "Learn about ForceCompare AI, the free military power comparison tool using Global Firepower data to analyze army, navy, and air force strength.",
  keywords: [
    "about forcecompare",
    "military comparison tool",
    "global firepower",
    "military strength analyzer",
  ],
  openGraph: {
    title: "About ForceCompare AI",
    description:
      "Learn about ForceCompare AI, the free military power comparison tool.",
    url: "https://forcecompare-ai.vercel.app/about",
    type: "website",
  },
};

export default function AboutPage() {
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
          About ForceCompare AI
        </h1>
        <p className="text-gold-400 text-lg mb-12 border-l-4 border-gold-500 pl-4">
          A free, comprehensive military strength comparison platform built for
          defense enthusiasts, researchers, and curious minds.
        </p>

        {/* What Is ForceCompare AI */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Is ForceCompare AI?
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI is a free online tool designed to compare the
              military strength of nations side by side. In an era where
              geopolitical dynamics shift rapidly and defense capabilities play a
              pivotal role in international relations, having quick access to
              clear, data-driven comparisons has never been more important.
              ForceCompare AI addresses this need by aggregating publicly
              available military data and presenting it in a structured,
              easy-to-understand format.
            </p>
            <p>
              At its core, ForceCompare AI solves a simple but significant
              problem: obtaining a clear, instant comparison between the armed
              forces of any two countries without needing to sift through lengthy
              reports, academic papers, or paywalled databases. Whether you want
              to compare the United States and China, India and Pakistan, or
              Brazil and Turkey, ForceCompare AI lets you do it in seconds with
              a few clicks. The platform analyzes each nation across multiple
              dimensions including personnel strength, air power, ground forces,
              naval capability, natural resources, and logistical infrastructure,
              then produces a composite force rating and a clear verdict
              indicating which country holds the overall military advantage.
            </p>
            <p>
              Unlike many military databases that require subscriptions or
              registrations, ForceCompare AI is entirely free to use. There are
              no accounts to create, no personal data collected beyond standard
              analytics, and no premium tiers gating access to core features.
              The tool was built with accessibility in mind, ensuring that anyone
              with a web browser and an internet connection can explore military
              comparisons without barriers.
            </p>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who Is ForceCompare AI For?
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI serves a diverse audience. The platform is
              intentionally designed to be useful to a wide range of users, from
              casual readers to domain professionals:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong className="text-white">Defense Enthusiasts:</strong>{" "}
                Military buffs and hobbyists who follow global defense
                developments will find ForceCompare AI a quick reference for
                comparing nations they are interested in. Whether debating with
                friends or satisfying personal curiosity, the tool provides
                reliable data points at a glance.
              </li>
              <li>
                <strong className="text-white">Academic Researchers:</strong>{" "}
                Students and scholars studying international relations, security
                studies, political science, or military history can use
                ForceCompare AI as a starting point for their research. The
                structured breakdowns across categories like army, navy, and air
                force provide useful baselines for deeper analysis.
              </li>
              <li>
                <strong className="text-white">Journalists and Analysts:</strong>{" "}
                Media professionals covering geopolitical events, defense
                budgets, or military conflicts can quickly pull up comparative
                data to contextualize their reporting. The shareable URL feature
                makes it easy to reference specific comparisons in articles or
                social media posts.
              </li>
              <li>
                <strong className="text-white">Students and Educators:</strong>{" "}
                Teachers and students at the high school and university levels
                can incorporate ForceCompare AI into lessons about world
                affairs, geography, and political dynamics. Its visual interface
                makes abstract military concepts more tangible and
                understandable.
              </li>
              <li>
                <strong className="text-white">Strategy Gamers:</strong>{" "}
                Players of military simulation and strategy games often enjoy
                comparing real-world military data to in-game scenarios.
                ForceCompare AI provides the real-world reference data that
                enriches this experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Data Source */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Data Source
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI draws its data from the Global Firepower (GFP)
              Index, one of the most widely referenced public databases for
              military strength rankings. The Global Firepower Index compiles
              data on over 145 countries and evaluates them across more than 60
              individual factors to produce its annual rankings. These factors
              span manpower, equipment counts, financial strength, logistical
              capability, natural resources, and geographic considerations.
            </p>
            <p>
              The GFP Index is publicly available and is frequently cited by
              news organizations, defense publications, and academic
              institutions worldwide. It provides a standardized framework for
              evaluating conventional military power without factoring in nuclear
              arsenals, which would otherwise skew comparisons heavily in favor
              of a handful of nations. This approach allows for more meaningful
              comparisons of conventional military capability, which is the type
              of force most relevant to the majority of real-world military
              engagements and deterrence scenarios.
            </p>
            <p>
              ForceCompare AI currently covers more than 50 countries,
              representing the nations most commonly compared and searched for in
              the context of military strength. This selection includes all major
              global military powers, significant regional powers, and several
              smaller nations that frequently appear in geopolitical discussions.
              The data is curated and structured to support the specific
              comparison methodology used by the platform, ensuring that every
              comparison produces meaningful and accurate results.
            </p>
          </div>
        </section>

        {/* Scoring Methodology */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Scoring Methodology
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              The force rating produced by ForceCompare AI is a weighted
              composite score that takes into account six major dimensions of
              military capability. Each dimension is assigned a specific weight
              reflecting its relative importance in determining overall
              conventional military strength:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { label: "Air Power", weight: "25%", desc: "Fighter aircraft, attack helicopters, transport fleet, and overall air superiority capability." },
                { label: "Army (Ground Forces)", weight: "20%", desc: "Tanks, armored vehicles, artillery systems, rocket projectors, and ground combat equipment." },
                { label: "Navy (Naval Forces)", weight: "20%", desc: "Aircraft carriers, destroyers, submarines, frigates, corvettes, and patrol vessels." },
                { label: "Personnel", weight: "15%", desc: "Total active military personnel, reserve forces, and paramilitary units available for deployment." },
                { label: "Natural Resources", weight: "10%", desc: "Oil production, proven oil reserves, and overall energy self-sufficiency relevant to sustained operations." },
                { label: "Logistics", weight: "10%", desc: "Airports, major ports, merchant marine fleet strength, and road/rail infrastructure for force projection." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-900 border border-navy-700 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{item.label}</span>
                    <span className="text-gold-400 font-bold text-lg">{item.weight}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              These weights were chosen to reflect the realities of modern
              conventional warfare, where air superiority often determines the
              outcome of conflicts, ground forces remain essential for
              territorial control, and naval power is critical for power
              projection and trade route protection. Personnel count, while
              important, is weighted somewhat lower because raw manpower is less
              decisive in modern warfare compared to technological and equipment
              advantages. Resources and logistics are included at lower weights
              because they represent supporting factors rather than direct
              combat capability, though they are crucial for sustaining
              prolonged military operations.
            </p>
            <p>
              Within each category, individual metrics are normalized relative
              to the highest value among all countries in the dataset. This
              means that the country with the most fighter jets, for example,
              receives a score of 1.0 in that metric, while other countries
              receive proportional scores. The category scores are then combined
              using the weights above to produce a final composite force rating
              between 0 and 100. This approach ensures that comparisons are
              fair, consistent, and reflect the relative balance of power
              between any two nations selected.
            </p>
          </div>
        </section>

        {/* Coverage */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Countries Covered
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI includes detailed military data for over 50
              countries spanning every inhabited continent. The selection covers
              the full spectrum of military power, from the world&apos;s top-ranked
              forces such as the United States, Russia, China, and India, through
              major regional powers like France, the United Kingdom, Germany,
              Japan, South Korea, Turkey, and Brazil, down to smaller but
              strategically significant nations like Israel, Taiwan, Sweden,
              Greece, and the Philippines.
            </p>
            <p>
              This breadth of coverage ensures that users can compare virtually
              any pair of nations they might be interested in, whether prompted
              by current events, historical interest, or academic study. The
              country roster is periodically reviewed and expanded to include
              additional nations as new data becomes available and as user demand
              warrants.
            </p>
          </div>
        </section>

        {/* Why It's Valuable */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Use ForceCompare AI?
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              There are several compelling reasons to use ForceCompare AI over
              other sources of military comparison data:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong className="text-white">Instant Results:</strong> Select
                two countries and get a full comparison in under a second. No
                waiting for reports to generate or pages to load. The entire
                comparison is computed client-side for maximum speed.
              </li>
              <li>
                <strong className="text-white">No Signup Required:</strong>{" "}
                There is no registration process, no email verification, and no
                account creation. Visit the site and start comparing
                immediately.
              </li>
              <li>
                <strong className="text-white">Completely Free:</strong> Every
                feature of ForceCompare AI is available at no cost. There are no
                premium tiers, no paywalls, and no feature restrictions.
              </li>
              <li>
                <strong className="text-white">Shareable URLs:</strong> Every
                comparison generates a unique URL that can be shared via
                messaging apps, social media, email, or embedded in articles.
                When someone opens a shared link, they see the exact same
                comparison you saw.
              </li>
              <li>
                <strong className="text-white">Visual Clarity:</strong> Data is
                presented through clear bar charts, side-by-side metric
                breakdowns, and color-coded advantage indicators that make it
                easy to identify which nation leads in each category at a
                glance.
              </li>
              <li>
                <strong className="text-white">Mobile Friendly:</strong> The
                interface is fully responsive and works equally well on desktop
                computers, tablets, and smartphones, so you can access
                comparisons from any device.
              </li>
            </ul>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technology Behind the Platform
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI is built using modern web technologies chosen for
              their performance, reliability, and developer experience. The
              application is developed with Next.js, a React-based framework
              that enables server-side rendering and static site generation for
              optimal page load speeds and search engine visibility. TypeScript
              is used throughout the codebase to ensure type safety and reduce
              runtime errors.
            </p>
            <p>
              Military data is stored as static JSON files that are bundled with
              the application. This means that comparisons are computed entirely
              on the client side without requiring API calls to external servers,
              resulting in near-instant comparison results regardless of the
              user&apos;s internet connection speed. The static data approach also
              means the application remains functional and responsive even under
              high traffic conditions, as there is no backend server that can
              become a bottleneck.
            </p>
            <p>
              The user interface is styled with Tailwind CSS, a utility-first
              CSS framework that enables rapid development of responsive,
              visually consistent layouts. The dark military-themed design was
              chosen to be easy on the eyes during extended use and to visually
              reinforce the defense-oriented nature of the content.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Important Disclaimer
          </h2>
          <div className="bg-navy-900 border border-gold-500/30 rounded-xl p-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              ForceCompare AI is an educational and informational tool. The
              comparisons and scores generated by the platform are based on
              publicly available data and a simplified scoring methodology. They
              should not be interpreted as definitive assessments of any
              nation&apos;s true military capability. Real-world military
              effectiveness depends on countless factors that cannot be captured
              in a numerical score, including training quality, morale, combat
              experience, technological sophistication of equipment, strategic
              doctrine, alliance structures, geographic advantages, and
              classified capabilities. ForceCompare AI provides a useful
              starting point for understanding relative military strength, but
              it is not a substitute for professional defense analysis.
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-4 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-6 py-3 rounded-lg transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
