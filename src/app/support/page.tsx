import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — My Social Battery",
  description:
    "Get help with My Social Battery. Browse common questions or reach out to us directly.",
};

const topics = [
  {
    icon: "📱",
    title: "App Access",
    text: "My Social Battery is now available on the App Store — free to download, no subscription required.",
    cta: { label: "Download on the App Store", href: "https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267" },
  },
  {
    icon: "🔒",
    title: "Privacy & Data",
    text: "We take your privacy seriously. Read our full Privacy Policy to understand how we handle your data.",
    cta: { label: "View Privacy Policy", href: "/privacy-policy/" },
  },
  {
    icon: "📄",
    title: "Terms of Service",
    text: "Review the terms and conditions that govern your use of My Social Battery.",
    cta: { label: "View Terms", href: "/terms-of-service/" },
  },
  {
    icon: "❓",
    title: "General Questions",
    text: "Check our FAQ for answers to the most common questions about social energy, burnout, and the app.",
    cta: { label: "View FAQ", href: "/faq/" },
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Support
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            We&apos;re Here to Help
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Browse the topics below or reach out to us directly. We aim to respond within 1–2
            business days.
          </p>
        </div>
      </section>

      {/* Support topics */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-[#0B1220] border border-[#374151] p-6 rounded-xl"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{topic.text}</p>
                <Link
                  href={topic.cta.href}
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium underline"
                >
                  {topic.cta.label} →
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-[#0B1220] border border-emerald-500/30 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h2 className="text-2xl font-bold text-white mb-3">Contact Us Directly</h2>
            <p className="text-[#94A3B8] mb-6 max-w-lg mx-auto">
              Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get
              back to you as soon as possible.
            </p>
            <a
              href="mailto:hello@mysocialbattery.app"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              hello@mysocialbattery.app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
