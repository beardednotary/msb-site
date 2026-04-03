import type { Metadata } from "next";
import Link from "next/link";
import EnergyBarChart from "@/components/EnergyBarChartClient";

export const metadata: Metadata = {
  title: "Introvert vs. Extrovert: The Science Behind Social Energy Drain — My Social Battery",
  description:
    "Explore the science behind introvert vs. extrovert social energy. Understand how different personalities recharge and interact.",
};

export default function IntrovertExtrovertPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Introvert vs. Extrovert:
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-400 mt-2">
            The Science Behind Social Energy Drain
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Ever wonder why some social interactions leave you buzzing, while others completely drain you?
            It&apos;s not just about being shy or outgoing. Dive into the fascinating science of personality
            types and discover how your brain&apos;s unique chemistry influences your social energy.
          </p>
        </div>
      </section>

      {/* Definitions */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">It&apos;s All About Energy</h2>
            <p className="mt-3 text-[#94A3B8]">
              Beyond common stereotypes, introversion and extroversion fundamentally describe how
              individuals gain and expend energy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0B1220] p-8 rounded-xl border border-[#374151] flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/20 text-4xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold text-white mb-3">The Introvert</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Introverts are energized by quiet reflection and solitude. Social interaction, especially
                in large groups or for extended periods, tends to deplete their energy. They often prefer
                deep, meaningful conversations over small talk and need time alone to recharge their
                internal &ldquo;social battery.&rdquo;
              </p>
            </div>
            <div className="bg-[#0B1220] p-8 rounded-xl border border-[#374151] flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/20 text-4xl mb-4">🥳</div>
              <h3 className="text-2xl font-bold text-white mb-3">The Extrovert</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Extroverts are energized by social interaction and external stimulation. They thrive in
                group settings, enjoy being the center of attention, and often feel drained or bored when
                spending too much time alone. Social engagement recharges their &ldquo;social battery.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science / Charts */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Brain&apos;s Role: Dopamine &amp; Arousal
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              The differences aren&apos;t just behavioral; they&apos;re rooted in brain chemistry and how
              we process external stimuli.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-[#374151]">
              <h3 className="text-lg font-bold text-white mb-2 text-center">Dopamine Response by Setting</h3>
              <p className="text-[#94A3B8] text-sm mb-4 text-center">
                Extroverts gain more dopamine reward from social stimulation than introverts.
              </p>
              <EnergyBarChart
                title="Dopamine Response"
                labels={["Solitude", "1-on-1", "Small Group", "Large Party", "Concert"]}
                introvertData={[90, 70, 50, 25, 10]}
                extrovertData={[25, 50, 72, 90, 85]}
              />
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-[#374151]">
              <h3 className="text-lg font-bold text-white mb-2 text-center">Comfort at Stimulation Levels</h3>
              <p className="text-[#94A3B8] text-sm mb-4 text-center">
                Introverts prefer lower stimulation; extroverts seek higher stimulation for optimal flow.
              </p>
              <EnergyBarChart
                title="Optimal Arousal"
                labels={["Library", "Café", "Office", "Dinner Party", "Club"]}
                introvertData={[95, 78, 55, 30, 10]}
                extrovertData={[28, 48, 68, 88, 95]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Dynamics */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How Energy is Gained &amp; Lost</h2>
            <p className="mt-3 text-[#94A3B8]">
              Understanding your brain&apos;s wiring helps explain why certain activities affect your energy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Introvert */}
            <div className="bg-[#0B1220] p-8 rounded-xl border border-[#374151]">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Introvert Energy Cycle</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">✨ Recharging Activities</h4>
                <ul className="list-disc list-inside text-[#94A3B8] space-y-2 pl-4 text-sm">
                  <li>Reading, writing, creative hobbies</li>
                  <li>Spending time alone or with a few close friends</li>
                  <li>Quiet reflection, meditation</li>
                  <li>Nature walks, solo exercise</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">📉 Draining Activities</h4>
                <ul className="list-disc list-inside text-[#94A3B8] space-y-2 pl-4 text-sm">
                  <li>Large social gatherings, parties</li>
                  <li>Extended networking events</li>
                  <li>Constant interruptions, open-plan offices</li>
                  <li>Too much small talk</li>
                </ul>
              </div>
            </div>
            {/* Extrovert */}
            <div className="bg-[#0B1220] p-8 rounded-xl border border-[#374151]">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Extrovert Energy Cycle</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">⚡ Recharging Activities</h4>
                <ul className="list-disc list-inside text-[#94A3B8] space-y-2 pl-4 text-sm">
                  <li>Socializing with friends and family</li>
                  <li>Attending parties, events, concerts</li>
                  <li>Brainstorming in groups, team projects</li>
                  <li>Being in bustling environments</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">🔋 Draining Activities</h4>
                <ul className="list-disc list-inside text-[#94A3B8] space-y-2 pl-4 text-sm">
                  <li>Extended periods of solitude</li>
                  <li>Lack of external stimulation</li>
                  <li>Repetitive, monotonous tasks</li>
                  <li>Being stuck at home for too long</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misconceptions */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Common Misconceptions Debunked</h2>
            <p className="mt-3 text-[#94A3B8]">Let&apos;s clear up some common myths about these personality traits.</p>
          </div>
          <div className="space-y-4">
            {[
              { myth: "Introverts are shy or anti-social.", fact: "Shyness is about fear of social judgment; introversion is about how you gain energy. Many introverts enjoy social interaction but need to recharge afterward." },
              { myth: "Extroverts are always loud and attention-seeking.", fact: "While extroverts thrive on external stimulation, this doesn't always mean being boisterous. They simply gain energy from social engagement." },
              { myth: "You are either 100% introvert or 100% extrovert.", fact: "Most people fall somewhere on a spectrum, often identifying as \"ambiverts.\" We all exhibit traits from both sides depending on the situation." },
            ].map((m) => (
              <div key={m.myth} className="bg-[#0F172A] p-6 rounded-xl border border-[#374151]">
                <h3 className="font-bold text-lg text-white mb-2">Myth: {m.myth}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed"><strong className="text-emerald-400">Fact:</strong> {m.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Takeaways */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Practical Takeaways</h2>
            <p className="mt-3 text-[#94A3B8]">
              Understanding your social energy type can transform how you approach relationships and daily life.
              For a more relationship-specific reflection, try{" "}
              <Link href="/the-friendship-audit/" className="text-emerald-400 hover:underline">
                The Friendship Audit
              </Link>
              .
            </p>
          </div>
          <ul className="space-y-5">
            {[
              { title: "Self-Awareness is Key", body: "Pay attention to what truly energizes and drains you. Your experience is unique." },
              { title: "Communicate Your Needs", body: "Share your energy needs with friends, family, and colleagues. Healthy boundaries benefit everyone." },
              { title: "Plan for Recharge", body: "Actively schedule downtime if you're an introvert, or social engagement if you're an extrovert, to maintain balance." },
              { title: "Embrace Your Type", body: "There's no 'better' personality type. Lean into your natural tendencies and design a life that supports your unique energy flow." },
            ].map((t) => (
              <li key={t.title} className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl flex-shrink-0 mt-0.5">✅</span>
                <p className="text-[#E5E7EB]"><strong className="text-white">{t.title}:</strong> {t.body}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <Link
              href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Download on the App Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
