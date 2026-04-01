import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ForceCompare AI",
  description:
    "Privacy policy for ForceCompare AI. Learn how we handle your data, cookies, and third-party services.",
  openGraph: {
    title: "Privacy Policy — ForceCompare AI",
    description:
      "Privacy policy for ForceCompare AI military comparison tool.",
    url: "https://forcecompare-ai.vercel.app/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-navy-950)] text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: March 2025
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              ForceCompare AI is a free, publicly accessible tool that does not
              require account creation, registration, or the submission of any
              personal information. We do not collect your name, email address,
              or any other personally identifiable information unless you
              voluntarily provide it (for example, by contacting us via email).
            </p>
            <p>
              We may automatically collect certain anonymous, non-personally
              identifiable usage data, including but not limited to: pages
              visited, comparison queries performed, browser type, device type,
              referring URL, approximate geographic region, and timestamps. This
              data is collected solely for the purpose of understanding how the
              service is used and improving it over time.
            </p>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">
              Any information we collect is used exclusively for the following
              purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>
                To operate, maintain, and improve the ForceCompare AI service.
              </li>
              <li>
                To analyze usage patterns and trends through aggregated,
                anonymous analytics.
              </li>
              <li>
                To monitor the performance and stability of the application.
              </li>
              <li>
                To respond to inquiries or communications you initiate with us.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          {/* 3. Cookies and Tracking */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              3. Cookies and Tracking
            </h2>
            <p className="mb-3">
              ForceCompare AI and its third-party partners may use cookies, web
              beacons, and similar tracking technologies to collect usage data
              and serve relevant advertisements. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong className="text-gray-300">Google Analytics</strong> — We
                use Google Analytics to collect anonymous usage statistics. Google
                Analytics may set cookies on your device to track sessions and
                user interactions. For more information, please review{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold-400)] hover:underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-gray-300">Google AdSense</strong> —
                Google AdSense serves advertisements on this site and may use
                cookies to personalize ads based on your browsing history. You
                may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold-400)] hover:underline"
                >
                  Google Ads Settings
                </a>
                .
              </li>
              <li>
                <strong className="text-gray-300">Adsterra</strong> — Adsterra
                is a third-party advertising network that may use cookies and
                tracking technologies to deliver and measure the effectiveness of
                advertisements displayed on this site. Please review{" "}
                <a
                  href="https://adsterra.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold-400)] hover:underline"
                >
                  Adsterra&apos;s Privacy Policy
                </a>{" "}
                for details.
              </li>
            </ul>
            <p className="mt-3">
              You may manage or disable cookies through your browser settings at
              any time. Please note that disabling cookies may affect the
              functionality of certain features of this site.
            </p>
          </section>

          {/* 4. Third-Party Services */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              ForceCompare AI relies on the following third-party services in the
              course of its operation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong className="text-gray-300">Google AdSense</strong> — For
                serving display advertisements.
              </li>
              <li>
                <strong className="text-gray-300">Adsterra</strong> — For
                serving display advertisements.
              </li>
              <li>
                <strong className="text-gray-300">Vercel</strong> — For hosting
                and deploying the application.
              </li>
              <li>
                <strong className="text-gray-300">Google Sheets</strong> — For
                anonymous, aggregated tracking of comparison queries (e.g.,
                which country pairs are compared most frequently). No personally
                identifiable information is recorded.
              </li>
            </ul>
            <p className="mt-3">
              Each of these services operates under its own privacy policy. We
              encourage you to review their respective policies to understand how
              they handle data.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              5. Data Retention
            </h2>
            <p>
              Anonymous analytics and comparison tracking data may be retained
              indefinitely for the purpose of service improvement and trend
              analysis. Because we do not collect personally identifiable
              information through normal use of the service, there is generally
              no personal data to delete. If you have contacted us by email and
              wish to have your correspondence removed, you may request deletion
              by emailing us at the address listed below.
            </p>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              6. Children&apos;s Privacy
            </h2>
            <p>
              ForceCompare AI is not directed at children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you believe that a child under 13 has provided us with
              personal information, please contact us immediately so that we can
              take appropriate steps to remove such information.
            </p>
          </section>

          {/* 7. Changes to This Policy */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any
              time. Any changes will be reflected on this page with an updated
              &quot;Last updated&quot; date. Your continued use of ForceCompare
              AI after any modifications constitutes your acceptance of the
              revised policy. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:taeshinkim11@gmail.com"
                className="text-[var(--color-gold-400)] hover:underline"
              >
                taeshinkim11@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-14 pt-8 border-t border-[var(--color-card-border)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--color-gold-400)] transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
