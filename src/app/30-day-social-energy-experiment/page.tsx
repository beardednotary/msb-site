import type { Metadata } from "next";
import Link from "next/link";
import ThirtyDayChartsClient from "@/components/ThirtyDayChartsClient";

export const metadata: Metadata = {
  title: "I Tracked My Social Energy for 30 Days — Here's What I Learned — My Social Battery",
  description:
    "A personal 30-day experiment tracking social energy levels reveals surprising patterns about what charges and drains your social battery.",
};

const energizers = [
  { icon: "🚶", title: "Solo Morning Walk", impact: "+25%" },
  { icon: "☕", title: "Coffee with Close Friend", impact: "+20%" },
  { icon: "🎨", title: "Creative Hobbies", impact: "+18%" },
  { icon: "📚", title: "Reading / Quiet Time", impact: "+15%" },
];

const drainers = [
  { icon: "🎉", title: "Noisy Parties", impact: "−25%" },
  { icon: "🤝", title: "Networking Events", impact: "−20%" },
  { icon: "📋", title: "Obligatory Social Events", impact: "−18%" },
  { icon: "💼", title: "Large Group Meetings", impact: "−15%" },
];

const takeaways = [
  {
    icon: "💡",
    title: "Start Tracking",
    text: "Even a week of consistent tracking can reveal significant patterns about your unique energy triggers.",
  },
  {
    icon: "🗓️",
    title: "Plan for Recharge",
    text: "Treat downtime as seriously as you treat social engagements. Schedule it!",
  },
  {
    icon: "🚫",
    title: "Practice Saying No",
    text: "It's okay to decline invitations that don't align with your energy needs. Your well-being is paramount.",
  },
  {
    icon: "💬",
    title: "Communicate Your Needs",
    text: "Share your social energy insights with close friends and family to foster understanding and support.",
  },
  {
    icon: "🧘",
    title: "Identify Your \"Sweet Spot\"",
    text: "Find the optimal balance of social interaction that leaves you feeling energized and fulfilled, not drained.",
  },
];

export default function ThirtyDayExperimentPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            I Tracked My Social Energy for 30 Days
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Here&apos;s What I Learned.
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Ever feel like your social life is a guessing game of energy levels? I decided to stop
            guessing. For 30 days, I meticulously tracked my social energy to uncover the hidden
            truths about my interactions, productivity, and overall well-being.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              🔋
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">My personal journey to social self-awareness.</p>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Motivation Behind the Mission
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Like many of you, I often found myself feeling inexplicably drained after certain social
            events, or surprisingly energized by others. My productivity would fluctuate, and my mood
            often felt tied to my recent interactions. I knew the concept of a &ldquo;social
            battery,&rdquo; but I wanted to move beyond intuition and gather real data. Could tracking
            my social energy for a full month reveal actionable insights for better personal
            development and productivity?
          </p>
        </div>
      </section>

      {/* Experiment Setup */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How I Tracked My Social Battery
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              For 30 consecutive days, I logged every significant social interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "✅",
                title: "Before & After",
                text: "Rated my energy level right before and immediately after each interaction on a 1–5 scale.",
              },
              {
                icon: "🏷️",
                title: "Categorized Interactions",
                text: "Assigned each interaction to a specific category (Work, Friends, Meals, etc.).",
              },
              {
                icon: "📝",
                title: "Added Notes",
                text: "Jotted down qualitative observations about the interaction's nature and my feelings.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#0F172A] border border-[#374151] p-6 rounded-xl">
                <span className="text-4xl mb-3 block">{card.icon}</span>
                <h3 className="font-bold text-xl text-white mb-2">{card.title}</h3>
                <p className="text-[#94A3B8] text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Data Doesn&apos;t Lie: My Key Findings
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Here&apos;s what 30 days of tracking revealed about my social energy patterns.
            </p>
          </div>
          <ThirtyDayChartsClient />
        </div>
      </section>

      {/* Energizers & Drainers */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">My Top Energizers ✨</h3>
              <div className="space-y-3">
                {energizers.map((e) => (
                  <div
                    key={e.title}
                    className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{e.icon}</span>
                      <span className="text-white font-medium">{e.title}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">{e.impact}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">My Top Drainers 📉</h3>
              <div className="space-y-3">
                {drainers.map((d) => (
                  <div
                    key={d.title}
                    className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{d.icon}</span>
                      <span className="text-white font-medium">{d.title}</span>
                    </div>
                    <span className="text-red-400 font-bold">{d.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unexpected Discoveries */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Unexpected Discoveries &amp; Nuances
          </h2>
          <p className="text-[#94A3B8] leading-relaxed mb-6 text-center">
            Beyond the clear patterns, tracking revealed surprising insights that challenged my
            assumptions about social energy.
          </p>
          <ul className="space-y-4 text-[#94A3B8]">
            {[
              "Quality Over Quantity: A short, meaningful coffee chat often recharged me more than a long, superficial gathering.",
              "Context Matters: Even \"draining\" activities like work meetings could be less draining if I prepared mentally or knew my boundaries.",
              "The Power of Proactive Recharge: Scheduling alone time before a big social event significantly improved my experience and recovery.",
              "Morning Rituals are Gold: My morning walks consistently set a positive tone, boosting my initial social battery level for the day.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Takeaways */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Personal Development Journey Starts Here
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              My 30-day experiment proved that understanding your social energy is a game-changer for
              productivity and well-being. Here are my top actionable takeaways:
            </p>
          </div>
          <ul className="space-y-6">
            {takeaways.map((t) => (
              <li key={t.title} className="flex items-start gap-4">
                <span className="text-2xl">{t.icon}</span>
                <p className="text-[#94A3B8] text-lg">
                  <strong className="text-white">{t.title}:</strong> {t.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Unlock Your Own Social Energy Secrets?
          </h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            My 30-day experiment was made simple and insightful with the My Social Battery app.
            It&apos;s designed to help you track, understand, and optimize your social energy — just
            like I did. Start your own personal development journey today.
          </p>
          <Link
            href="/#download"
            className="inline-block bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-xl mt-8 hover:bg-slate-100 transition-colors"
          >
            Ready to Recharge Your Social Life?
          </Link>
        </div>
      </section>
    </>
  );
}
