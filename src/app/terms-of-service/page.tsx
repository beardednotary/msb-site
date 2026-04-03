import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — My Social Battery",
  description:
    "Terms of Service for My Social Battery. Understand the legal agreements, user responsibilities, and conditions for using our app and website.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Terms of Service
        </h1>
        <p className="text-lg text-[#94A3B8] mb-14 text-center">Last Updated: July 10, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              By accessing or using the My Social Battery mobile application (&ldquo;the App&rdquo;) or
              the My Social Battery website (&ldquo;the Website&rdquo;), you agree to be bound by these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use
              the App or Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              My Social Battery provides tools to help you track and understand how social interactions
              affect your personal energy levels. The App offers features for logging activities, viewing
              personal insights, and receiving smart recommendations to optimize your social calendar. The
              Website provides informational content about the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Your Data and Privacy</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              As detailed in our{" "}
              <Link href="/privacy-policy" className="text-emerald-400 hover:underline font-medium">
                Privacy Policy
              </Link>
              , all your activity data within the My Social Battery App is stored locally on your device.
              We do not collect, transmit, or store any personal information on external servers. We do not
              use third-party analytics or track your usage. You have full control over your data within
              the App and can delete it by uninstalling the App.
            </p>
            <p className="text-[#E5E7EB] leading-relaxed">
              The My Social Battery Website is a static informational site and does not collect any
              personal data from visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
            <p className="text-[#E5E7EB] leading-relaxed mb-4">
              You agree to use the App and Website for their intended purpose only. You are responsible for
              maintaining the security of your device and your data. The App is a tool for self-reflection
              and personal organization; it is not a substitute for professional medical, psychological, or
              psychiatric advice, diagnosis, or treatment. Always seek the advice of a qualified health
              provider for any questions you may have regarding a medical or mental health condition.
            </p>
            <ul className="list-disc list-inside text-[#E5E7EB] leading-relaxed pl-4 space-y-2">
              <li>Do not misuse the App or Website.</li>
              <li>Do not attempt to interfere with the proper working of the App or Website.</li>
              <li>Ensure your device meets the necessary requirements for using the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              The App and Website, including all content, features, and functionality, are owned by My
              Social Battery, its licensors, or other providers of such material and are protected by
              copyright, trademark, patent, trade secret, and other intellectual property or proprietary
              rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              The App and Website are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis, without any warranties of any kind, either express or implied. My Social Battery does
              not warrant that the App or Website will be uninterrupted, error-free, or free of viruses or
              other harmful components. Your use of the App and Website is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              To the fullest extent permitted by applicable law, in no event will My Social Battery, its
              affiliates, or their licensors, service providers, employees, agents, officers, or directors
              be liable for damages of any kind, under any legal theory, arising out of or in connection
              with your use, or inability to use, the App or Website, including any direct, indirect,
              special, incidental, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to These Terms</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              We may revise and update these Terms of Service from time to time in our sole discretion.
              All changes are effective immediately when we post them and apply to all access to and use of
              the App and Website thereafter. Your continued use of the App or Website following the
              posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              These Terms and your use of the App and Website are governed by and construed in accordance
              with the laws of the State of California, United States, without regard to its conflict of
              law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-[#E5E7EB] leading-relaxed mt-4">
              Email:{" "}
              <a
                href="mailto:support@mysocialbattery.app"
                className="text-emerald-400 hover:underline"
              >
                support@mysocialbattery.app
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
