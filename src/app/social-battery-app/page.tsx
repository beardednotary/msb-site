import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Social Battery App for iPhone — My Social Battery",
  description:
    "My Social Battery is the #1 social battery app for iPhone. Free to download, 100% private, no account needed. Track what drains you and discover what recharges you.",
  openGraph: {
    title: "Best Social Battery App for iPhone — My Social Battery",
    description:
      "Track what drains and recharges you. Free, private, and built for introverts, HSPs, and anyone who's ever said 'my social battery is dead.'",
    url: "https://mysocialbattery.app/social-battery-app/",
    type: "website",
  },
};

const APP_STORE_URL =
  "https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267";

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z" />
  </svg>
);

const steps = [
  {
    number: "01",
    title: "Log an activity",
    description:
      "Choose from 12 categories — family dinner, work meeting, friend hangout, networking event, and more. Takes under 10 seconds.",
  },
  {
    number: "02",
    title: "Rate your energy before & after",
    description:
      "A simple slider captures how you felt going in and how you felt coming out. No journaling, no essays — just your honest energy level.",
  },
  {
    number: "03",
    title: "Watch patterns emerge",
    description:
      "After a few days, the app surfaces which activities drain you most, which recharge you, and when your social battery tends to run low.",
  },
  {
    number: "04",
    title: "Make better decisions",
    description:
      "Use your personalized insights to protect your energy, plan your week intentionally, and stop saying yes to things that leave you depleted.",
  },
];

const personas = [
  {
    icon: "🪫",
    title: "The chronic over-committer",
    description:
      "You say yes to everything, then wonder why you're exhausted by Thursday. My Social Battery shows you exactly which commitments cost the most.",
  },
  {
    icon: "🧠",
    title: "The introvert in an extrovert's world",
    description:
      "Open offices, back-to-back meetings, mandatory happy hours. Track your energy so you can advocate for the recovery time you actually need.",
  },
  {
    icon: "✨",
    title: "The highly sensitive person",
    description:
      "Social situations hit differently for HSPs. This app helps you understand your unique patterns — not compare yourself to anyone else's baseline.",
  },
  {
    icon: "📈",
    title: "The self-optimizer",
    description:
      "You track sleep, workouts, and calories. Social energy is the missing variable. Add it and see how it connects to everything else.",
  },
];

const comparisons = [
  {
    question: "Requires an account?",
    msb: "No. Never.",
    others: "Almost always",
  },
  {
    question: "Data stored privately on-device?",
    msb: "Yes — 100%",
    others: "Usually cloud-synced",
  },
  {
    question: "Pricing model?",
    msb: "Free + optional $6.99 one-time",
    others: "Often subscription",
  },
  {
    question: "Built specifically for social energy?",
    msb: "Yes — that's all it does",
    others: "Generic mood/wellness",
  },
  {
    question: "Works on iPhone?",
    msb: "Yes — iOS 13+",
    others: "Varies",
  },
];

const faqs = [
  {
    q: "What exactly is a social battery app?",
    a: "A social battery app helps you track how social interactions affect your energy levels. You log activities — a dinner with friends, a team meeting, a family gathering — and rate your energy before and after. Over time, patterns emerge that show you what recharges you and what drains you.",
  },
  {
    q: "Is My Social Battery really free?",
    a: "Yes. The core app is completely free — log activities, see your energy history, and get basic insights at no cost. A one-time $6.99 premium unlock adds deeper analytics: 30/90-day trends, weekly and monthly patterns, calendar integration, and unlimited history backup.",
  },
  {
    q: "How is this different from a mood tracker?",
    a: "Mood trackers capture how you feel at a moment in time. My Social Battery is specifically designed to measure the energy cost of specific social activities — so you can connect cause to effect, not just observe your emotional state in isolation.",
  },
  {
    q: "Does it work for extroverts too?",
    a: "Absolutely. Extroverts have social batteries too — they just recharge differently. Some activities drain everyone regardless of personality type. Tracking helps you understand your unique patterns, wherever you fall on the introvert-extrovert spectrum.",
  },
  {
    q: "Is my data really private?",
    a: "Yes. All your data is stored locally on your device only. There are no accounts, no servers, and no cloud sync. We collect zero data — Apple's App Store listing confirms this. You can export or delete everything at any time.",
  },
  {
    q: "Which devices does it support?",
    a: "My Social Battery runs on any iPhone, iPad, or iPod touch with iOS 13 or later. It's also available on Mac (Apple M1 or later) and Apple Vision.",
  },
];

export default function SocialBatteryAppPage() {
  return (
    <>
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free on the App Store — iPhone &amp; iPad
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            The Social Battery App
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-2">
            Track What Drains You. Discover What Recharges You.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            My Social Battery is the only iPhone app built specifically to track your social energy —
            so you can stop guessing why you&apos;re exhausted and start making better decisions about
            your time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
            >
              <AppleIcon />
              Download Free — iPhone
            </a>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-[#0F172A] border border-[#374151] hover:border-emerald-500/50 text-[#E5E7EB] font-semibold px-7 py-3.5 rounded-full transition-colors text-base"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#94A3B8]">
            {[
              "🔒 100% private — data never leaves your device",
              "⚡ Free to download",
              "📱 No account required",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            &ldquo;My social battery is dead.&rdquo;
          </h2>
          <p className="mt-2 text-emerald-400 text-lg font-medium">
            You&apos;ve said it. But do you know why?
          </p>
          <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed">
            Most people feel the drain but can&apos;t pinpoint the cause. Was it the three-hour team
            meeting? The family dinner that ran long? The networking event you didn&apos;t want to
            attend? Or just too many interactions stacked back-to-back with no recovery time?
          </p>
          <p className="mt-4 text-[#94A3B8] text-lg leading-relaxed">
            Without data, you&apos;re guessing. My Social Battery gives you the data.
          </p>
          <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl inline-flex items-center justify-center gap-4 text-left">
            <span className="text-5xl flex-shrink-0">🔋</span>
            <p className="text-white text-lg font-medium">
              Log an activity. Rate your energy before and after.{" "}
              <span className="text-emerald-400">Patterns appear in days, not months.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
            <p className="mt-3 text-[#94A3B8] max-w-xl mx-auto">
              No complicated setup. No daily journaling. Just a quick log after each interaction —
              and the app does the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#0F172A] p-7 rounded-xl border border-[#374151] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-extrabold text-emerald-400/30 mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for people who feel it all
            </h2>
            <p className="mt-3 text-[#94A3B8] max-w-xl mx-auto">
              Whether you&apos;re an introvert, an HSP, or just someone trying to be more intentional
              with your time — this app was made for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div
                key={p.title}
                className="bg-[#0B1220] p-7 rounded-xl border border-[#374151] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything in the free version
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              No trial period. No paywall on the basics. These features are free, forever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Activity logging",
                description:
                  "Log any social interaction in seconds across 12 built-in categories.",
              },
              {
                icon: "📊",
                title: "Before & after energy tracking",
                description:
                  "See exactly how each activity affected your energy level, not just how you feel right now.",
              },
              {
                icon: "🔍",
                title: "Energizing vs. draining insights",
                description:
                  "The app automatically surfaces which activities cost you the most — and which ones give back.",
              },
              {
                icon: "📜",
                title: "Full activity history",
                description:
                  "Every log you've ever made, scrollable and searchable whenever you need it.",
              },
              {
                icon: "🎯",
                title: "Personalized recommendations",
                description:
                  "Get actionable suggestions based on your actual data, not generic wellness advice.",
              },
              {
                icon: "📤",
                title: "Export your data anytime",
                description:
                  "Your data belongs to you. Export it whenever you want, for whatever reason.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#0F172A] rounded-2xl p-8 border border-[#374151] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0F172A] border border-emerald-500/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Premium — one-time $6.99
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Unlock deeper patterns</h3>
                <p className="text-[#94A3B8] text-sm max-w-lg">
                  30 and 90-day trends, weekly and monthly breakdowns, calendar integration with
                  follow-up reminders, advanced category analysis, and unlimited history backup.
                  Pay once. Own it forever.
                </p>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
              >
                <AppleIcon />
                Get the app
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Your social energy data stays yours
              </h2>
              <p className="mt-4 text-[#94A3B8] leading-relaxed">
                Most wellness apps treat your personal data as their product. My Social Battery does
                the opposite. There are no servers. No accounts. No tracking. Apple&apos;s own App Store
                review confirmed:{" "}
                <strong className="text-white">data not collected</strong>.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "100% local data storage — stays on your device",
                  "No personal information collected",
                  "No third-party analytics",
                  "Export or delete everything, anytime",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#E5E7EB]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#0B1220] rounded-3xl p-12 border border-[#374151]">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Secure by design</h3>
              <p className="text-[#94A3B8] text-center text-sm">
                Your data never leaves your device. Complete privacy guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How we compare to other social battery apps
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Most wellness apps are built for general mood tracking. My Social Battery is the only
              one designed from the ground up for social energy specifically.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#374151]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F172A] border-b border-[#374151]">
                  <th className="text-left px-5 py-3 text-[#94A3B8] font-medium w-1/2">
                    Feature
                  </th>
                  <th className="px-5 py-3 text-emerald-400 font-semibold text-center">
                    My Social Battery
                  </th>
                  <th className="px-5 py-3 text-[#94A3B8] font-medium text-center">
                    Other apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.question}
                    className={`border-b border-[#374151] last:border-b-0 ${
                      i % 2 === 0 ? "bg-[#0B1220]" : "bg-[#0F172A]"
                    }`}
                  >
                    <td className="px-5 py-4 text-[#94A3B8]">{row.question}</td>
                    <td className="px-5 py-4 text-center text-white font-medium">{row.msb}</td>
                    <td className="px-5 py-4 text-center text-[#4B5563]">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#0B1220] p-6 rounded-xl border border-[#374151]">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Learn more about social energy
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: "/introvert-extrovert-social-energy-drain/",
                title: "Introvert vs. Extrovert: The Science",
                description:
                  "The brain chemistry behind why social interaction drains or energizes different people.",
              },
              {
                href: "/7-signs-socially-burned-out/",
                title: "7 Signs You're Socially Burned Out",
                description:
                  "Identify the subtle indicators of social fatigue and learn what to do about them.",
              },
              {
                href: "/social-battery-phenomenon/",
                title: "The Social Battery Phenomenon",
                description:
                  "Why Gen Z put a name to something everyone was already feeling.",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-[#0F172A] p-6 rounded-xl border border-[#374151] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 block"
              >
                <h3 className="font-bold text-white text-sm mb-2">{article.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{article.description}</p>
                <span className="mt-3 inline-block text-emerald-400 text-xs">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#0B1220] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-2xl text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stop guessing. Start tracking.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg">
            Download the social battery app that was actually built for this — free on iPhone, no
            account needed, no data shared with anyone.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-black font-semibold px-7 py-4 rounded-2xl transition-colors text-base shadow-lg"
            >
              <svg className="w-7 h-7" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z" />
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
