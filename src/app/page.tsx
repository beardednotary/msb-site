import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

export const metadata: Metadata = {
  title: "My Social Battery – Track Your Social Energy | Free iOS App",
  description:
    "My Social Battery helps you track what drains and recharges your social energy with private, on-device insights. No account required. Download free on iPhone.",
  openGraph: {
    title: "My Social Battery – Track Your Social Energy | Free iOS App",
    description:
      "Track what drains and recharges your social energy with private, on-device insights. No account required. Download free on iPhone.",
    url: "https://mysocialbattery.app/",
    type: "website",
    siteName: "My Social Battery",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Social Battery – Track Your Social Energy | Free iOS App",
    description:
      "Track what drains and recharges your social energy with private, on-device insights. No account required. Download free on iPhone.",
  },
};

const features = [
  {
    icon: "⚡",
    title: "Track Energy Levels",
    description:
      "Log your energy before and after social activities to clearly see which interactions recharge your battery and which truly deplete it.",
  },
  {
    icon: "📊",
    title: "Personal Insights",
    description:
      "Uncover detailed analytics of your unique energy patterns. Identify your most uplifting activities and discover your optimal social rhythm.",
  },
  {
    icon: "🎯",
    title: "Smart Recommendations",
    description:
      "Get actionable, personalized advice powered by your data. Seamlessly optimize your social calendar to consistently maintain a full social battery.",
  },
];

const activities = [
  { icon: "☕", title: "Coffee/Tea", description: "Casual meetups, quick chats over a beverage." },
  { icon: "🍽️", title: "Meals", description: "Social dining, lunches, dinners, or group cooking." },
  { icon: "💼", title: "Work/Business", description: "Meetings, networking events, team collaborations." },
  { icon: "🏃", title: "Exercise/Sports", description: "Group fitness, team sports, active social engagements." },
  { icon: "🎉", title: "Entertainment", description: "Concerts, movies, parties, social gatherings for fun." },
  { icon: "🌳", title: "Outdoor/Nature", description: "Hikes with friends, park visits, outdoor group activities." },
  { icon: "🛍️", title: "Shopping", description: "Retail therapy with companions, group errands." },
  { icon: "👨‍👩‍👧‍👦", title: "Family", description: "Interactions with immediate or extended family members." },
  { icon: "🧑‍🤝‍🧑", title: "Friends", description: "Casual hangouts, deep conversations, shared experiences." },
  { icon: "📚", title: "Learning", description: "Workshops, classes, study groups, intellectual discussions." },
  { icon: "🩺", title: "Health/Medical", description: "Appointments, support groups, wellness activities." },
  { icon: "✈️", title: "Travel", description: "Trips, commutes, or experiences shared with others." },
];

const privacyFeatures = [
  "100% local data storage",
  "No personal information collected",
  "No third-party analytics",
  "Complete control over your data",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-[#0B1220] py-20 md:py-32 px-6 relative overflow-hidden">
        {/* Subtle glow behind CTA area */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Track &amp; Optimize Your{" "}
            <span className="text-emerald-400">Social Energy</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Are you drained by social interactions? Discover how they affect your energy and get
            personalized insights to effortlessly optimize your social calendar and well-being.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z"/>
              </svg>
              Download on the App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-[#0F172A] border border-[#374151] hover:border-emerald-500/50 text-[#E5E7EB] font-semibold px-7 py-3.5 rounded-full transition-colors text-base"
            >
              ✨ Learn More
            </a>
          </div>

          <p className="mt-4 text-sm text-[#94A3B8]">
            Looking for the best{" "}
            <Link
              href="/social-battery-app/"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              social battery app for iPhone?
            </Link>
          </p>

          {/* App screenshots carousel */}
          <div className="mt-14 flex justify-center">
            <ScreenshotCarousel />
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-28 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Master Your Social Energy</h2>
            <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Get powerful insights into how social interactions affect your energy levels and receive
              personalized recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0B1220] rounded-2xl p-8 border border-[#374151] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activity Categories ───────────────────────────────────── */}
      <section id="activities" className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Track Every Interaction, Understand Every Impact.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-[#94A3B8]">
              My Social Battery helps you pinpoint exactly how different parts of your daily life influence
              your social energy. We&apos;ve categorized common activities to make tracking simple and
              insights clear.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
            {activities.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-center text-center bg-[#0F172A] p-5 rounded-xl border border-[#374151] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-2.5">{a.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl mx-auto text-center text-lg text-[#94A3B8]">
            By logging your energy before and after these diverse interactions, you&apos;ll gain powerful
            clarity on what truly recharges your social battery and what drains it.{" "}
            <Link href="/social-battery-app/" className="text-emerald-400 hover:text-emerald-300">
              See how the app works →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Privacy ──────────────────────────────────────────────── */}
      <section id="privacy" className="py-20 md:py-28 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Your Privacy Matters</h2>
              <p className="mt-4 text-[#94A3B8] leading-relaxed">
                Your social energy data is deeply personal. That&apos;s why we built My Social Battery with
                privacy at its core.
              </p>
              <p className="mt-3 text-[#94A3B8] leading-relaxed">
                All your data stays completely private on your device. No cloud storage, no data sharing,
                no tracking.
              </p>
              <ul className="mt-6 space-y-3">
                {privacyFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#E5E7EB]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0B1220] rounded-3xl p-12 border border-[#374151]">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Secure by Design</h3>
              <p className="text-[#94A3B8] text-center text-sm">
                Your data never leaves your device. Complete privacy guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CTA ─────────────────────────────────────────── */}
      <section id="download" className="py-20 md:py-28 px-6 bg-[#0B1220] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-2xl text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Optimize Your Social Energy?
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg">
            My Social Battery is now available on the App Store. Start tracking, understanding, and protecting your energy today.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-black font-semibold px-7 py-4 rounded-2xl transition-colors text-base shadow-lg"
            >
              <svg className="w-7 h-7" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </span>
            </a>
          </div>

          <p className="mt-5 text-[#374151] text-sm">
            Free to download &middot; No subscription required &middot; Privacy-first
          </p>
        </div>
      </section>
    </>
  );
}
