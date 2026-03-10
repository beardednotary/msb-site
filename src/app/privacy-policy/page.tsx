import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — My Social Battery",
  description:
    "Privacy Policy for My Social Battery. Learn how your data is collected, used, and protected. Your privacy and security are our top priority.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-[#94A3B8] mb-14 text-center">Last Updated: July 10, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              At My Social Battery, we are deeply committed to protecting your privacy. We understand that
              your social energy data is highly personal, and we&apos;ve designed our app and website with
              your privacy as our top priority. This Privacy Policy outlines our practices regarding data
              collection, usage, and storage, ensuring transparency and giving you full control over your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              <strong className="text-white">For the My Social Battery App:</strong> The My Social Battery
              app is built on a principle of local-first data storage. All your activity data, including
              your energy levels before and after social interactions, is stored exclusively on your device.
            </p>
            <ul className="list-disc list-inside text-[#E5E7EB] leading-relaxed mb-4 pl-4 space-y-2">
              <li>We do not collect, transmit, or store any personal information on external servers.</li>
              <li>Your data never leaves your device unless you explicitly choose to export it.</li>
            </ul>
            <p className="text-[#E5E7EB] leading-relaxed">
              <strong className="text-white">For the My Social Battery Website:</strong> Our website
              (mysocialbattery.app) is a static informational site. We do not use cookies, tracking
              technologies, or collect any personal information from visitors to our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data Usage</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              <strong className="text-white">For the My Social Battery App:</strong> Your social energy
              data within the app is used solely for its intended purpose: to provide you with personalized
              insights and recommendations to help you understand and optimize your social energy.
            </p>
            <ul className="list-disc list-inside text-[#E5E7EB] leading-relaxed mb-4 pl-4 space-y-2">
              <li>No data is shared with third parties.</li>
              <li>Your data is never used for advertising purposes.</li>
              <li>Your data is never sold.</li>
            </ul>
            <p className="text-[#E5E7EB] leading-relaxed">
              <strong className="text-white">For the My Social Battery Website:</strong> As our website
              does not collect any personal data, there is no data to use or share from your website
              visits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage &amp; Your Control</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              <strong className="text-white">For the My Social Battery App:</strong> All your app data is
              stored securely in a local SQLite database directly on your mobile device. You have complete
              control over your data at all times.
            </p>
            <ul className="list-disc list-inside text-[#E5E7EB] leading-relaxed mb-4 pl-4 space-y-2">
              <li>
                You can delete your data at any time by uninstalling the My Social Battery app from your
                device.
              </li>
              <li>We do not retain any copies of your data once the app is uninstalled.</li>
            </ul>
            <p className="text-[#E5E7EB] leading-relaxed">
              <strong className="text-white">For the My Social Battery Website:</strong> No user data is
              stored by this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Analytics</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              We are committed to maintaining your privacy, which extends to our analytics practices.
            </p>
            <ul className="list-disc list-inside text-[#E5E7EB] leading-relaxed pl-4 space-y-2">
              <li>
                We do not use any third-party analytics services for either the app or the website.
              </li>
              <li>
                Your usage patterns and personal information within the app remain completely private and
                are not shared with us or any other entity for analytical purposes.
              </li>
              <li>We do not track website visitors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are effective when they are
              posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              If you have any questions about this Privacy Policy or how your data is handled within the
              My Social Battery app, please do not hesitate to contact us:
            </p>
            <p className="text-[#E5E7EB] leading-relaxed mt-4">
              Email:{" "}
              <a
                href="mailto:privacy@mysocialbattery.app"
                className="text-emerald-400 hover:underline"
              >
                privacy@mysocialbattery.app
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#374151] text-center">
          <Link href="/" className="text-emerald-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
