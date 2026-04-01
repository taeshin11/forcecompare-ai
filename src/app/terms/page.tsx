import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ForceCompare AI",
  description:
    "Terms of service for using ForceCompare AI, the free military power comparison tool.",
  openGraph: {
    title: "Terms of Service — ForceCompare AI",
    description: "Terms and conditions for using ForceCompare AI.",
    url: "https://forcecompare-ai.vercel.app/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-navy-950)] text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: March 2025
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using ForceCompare AI (available at{" "}
              <a
                href="https://forcecompare-ai.vercel.app"
                className="text-[var(--color-gold-400)] hover:underline"
              >
                https://forcecompare-ai.vercel.app
              </a>
              ), you agree to be bound by these Terms of Service and our{" "}
              <Link
                href="/privacy"
                className="text-[var(--color-gold-400)] hover:underline"
              >
                Privacy Policy
              </Link>
              . If you do not agree to these terms, you must discontinue use of
              the service immediately.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              2. Description of Service
            </h2>
            <p>
              ForceCompare AI is a free, publicly accessible web-based tool that
              provides side-by-side comparisons of military strength between
              nations. The service is intended for informational, educational,
              and entertainment purposes only. It is not a substitute for
              professional military analysis or strategic assessment.
            </p>
          </section>

          {/* 3. Data Accuracy Disclaimer */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              3. Data Accuracy Disclaimer
            </h2>
            <p className="mb-3">
              All military data presented on ForceCompare AI is compiled from
              publicly available sources, including but not limited to the Global
              Firepower Index. While we strive to maintain accuracy, we make no
              representations or warranties of any kind, express or implied,
              regarding the completeness, accuracy, reliability, or currency of
              any data displayed on this site.
            </p>
            <p className="font-semibold text-gray-200">
              The information provided by ForceCompare AI should not be used as
              the basis for any military, strategic, governmental, or
              security-related decisions. Use of this data for such purposes is
              strictly at your own risk.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All original content, design, branding, code, and visual elements
              of ForceCompare AI are the intellectual property of ForceCompare AI
              and its creators. You may not reproduce, distribute, modify, or
              create derivative works from any part of this service without prior
              written permission. Underlying military data sourced from
              third-party providers remains subject to the terms and conditions
              of those respective providers.
            </p>
          </section>

          {/* 5. Limitation of Liability */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, ForceCompare AI,
              its creators, contributors, and affiliates shall not be held liable
              for any direct, indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use the
              service, including but not limited to damages resulting from
              reliance on any data, information, or content obtained through the
              service. The service is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis without warranties of any kind.
            </p>
          </section>

          {/* 6. Acceptable Use */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              6. Acceptable Use
            </h2>
            <p className="mb-3">
              You agree not to use ForceCompare AI in any manner that:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>
                Involves automated scraping, crawling, or data harvesting of the
                site or its content without prior written consent.
              </li>
              <li>
                Uses bots, scripts, or other automated means to access or
                interact with the service.
              </li>
              <li>
                Misrepresents the data, results, or outputs of ForceCompare AI
                as official, authoritative, or government-endorsed information.
              </li>
              <li>
                Interferes with or disrupts the operation, security, or
                integrity of the service.
              </li>
              <li>
                Violates any applicable local, state, national, or international
                law or regulation.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to restrict or terminate access to any user
              who violates these terms.
            </p>
          </section>

          {/* 7. Third-Party Links and Ads */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              7. Third-Party Links and Advertisements
            </h2>
            <p>
              ForceCompare AI may display advertisements provided by third-party
              advertising networks, including Google AdSense and Adsterra.
              Additionally, the site may contain links to third-party websites or
              resources. We do not endorse and are not responsible for the
              content, privacy practices, or availability of any third-party
              sites or services. Your interactions with any third-party
              advertisements or linked websites are solely between you and the
              respective third party and are governed by that party&apos;s own
              terms and policies.
            </p>
          </section>

          {/* 8. Modifications to Terms */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              8. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify, update, or replace these Terms of
              Service at any time at our sole discretion. Changes will be
              effective immediately upon being posted on this page with an
              updated &quot;Last updated&quot; date. Your continued use of
              ForceCompare AI following any changes constitutes acceptance of the
              revised terms. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              9. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the United States. Any disputes arising
              from or relating to these terms or your use of ForceCompare AI
              shall be resolved in the appropriate courts of competent
              jurisdiction.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-gold-400)] mb-3">
              10. Contact
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of
              Service, please contact us at:{" "}
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
