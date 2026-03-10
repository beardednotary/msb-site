import type { Metadata } from "next";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "My Social Battery — Track & Optimize Your Social Energy",
  description:
    "Are you drained by social interactions? Discover how they affect your energy and get personalized insights to effortlessly optimize your social calendar and well-being.",
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
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-base"
            >
              📱 Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-[#0F172A] border border-[#374151] hover:border-emerald-500/50 text-[#E5E7EB] font-semibold px-7 py-3.5 rounded-full transition-colors text-base"
            >
              ✨ Learn More
            </a>
          </div>

          {/* Phone mockup */}
          <div className="mt-14 flex justify-center">
            <div className="relative w-52 bg-[#0F172A] rounded-3xl shadow-2xl border border-[#374151] p-6 flex flex-col items-center gap-2">
              <div className="text-5xl">⚡</div>
              <h3 className="font-bold text-white text-base">My Social Battery</h3>
              <p className="text-[#94A3B8] text-xs text-center">Track your social energy patterns</p>
              <div className="mt-2 w-full bg-[#374151] rounded-full h-2.5 overflow-hidden">
                <div className="bg-emerald-500 h-2.5 rounded-full w-3/4" />
              </div>
              <p className="text-emerald-400 text-xs font-medium">Battery: 75%</p>
            </div>
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
            clarity on what truly recharges your social battery and what drains it, empowering you to live
            more intentionally.
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

      {/* ── Download / Email CTA ─────────────────────────────────── */}
      <section id="download" className="py-20 md:py-28 px-6 bg-[#0B1220] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-2xl text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Optimize Your Social Energy?
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg">
            Be among the first to know when My Social Battery launches and take control of your social energy.
          </p>

          <div className="mt-8">
            <EmailSignup />
          </div>

          <p className="mt-5 text-[#374151] text-sm">
            Free to download &middot; No subscription required &middot; Privacy-first
          </p>
        </div>
      </section>
    </>
  );
}
