import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 'Social Battery' Phenomenon: Why Gen Z is Redefining Social Wellness — My Social Battery",
  description:
    "From viral TikToks to everyday conversations, the concept of a 'social battery' has exploded. Discover why Gen Z is leading a new conversation about social wellness.",
};

const genZReasons = [
  {
    icon: "📱",
    title: "Digital Natives, Social Overload",
    description:
      "Growing up with constant connectivity has made Gen Z acutely aware of the mental toll of perpetual availability. They're the first generation to name and quantify the exhaustion.",
  },
  {
    icon: "🧠",
    title: "Mental Health Literacy",
    description:
      "Gen Z has grown up with unprecedented access to mental health language and concepts. They've normalized talking about emotional and social capacity in practical terms.",
  },
  {
    icon: "🎭",
    title: "Post-Pandemic Reckoning",
    description:
      "The pandemic forced a global reset on social expectations. Gen Z emerged with a clearer sense of which social interactions were truly worth their energy.",
  },
  {
    icon: "🌐",
    title: "Social Media as Both Cause & Cure",
    description:
      "The same platforms that drain social energy have become the spaces where Gen Z validates these experiences — turning a private struggle into a shared cultural moment.",
  },
];

const insights = [
  {
    stat: "~60%",
    label: "of Gen Z report feeling socially exhausted at least weekly",
  },
  {
    stat: "\"Low battery\"",
    label: "has become a universal shorthand for needing social recovery time",
  },
  {
    stat: "3x",
    label: "more likely than Boomers to set boundaries around social obligations",
  },
];

export default function SocialBatteryPhenomenonPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            The &lsquo;Social Battery&rsquo; Phenomenon:
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Why Gen Z is Redefining Social Wellness
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            From viral TikToks to everyday conversations, the concept of a &ldquo;social battery&rdquo;
            has exploded. But it&apos;s more than just a meme &mdash; it&apos;s a powerful shift in how a
            generation understands and prioritizes their mental and social well-being.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Decoding the &lsquo;Social Battery&rsquo;
          </h2>
          <p className="text-[#94A3B8] leading-relaxed mb-6 text-lg">
            The <strong className="text-white">social battery</strong> is a widely adopted metaphor
            representing an individual&apos;s{" "}
            <Link href="/introvert-extrovert-social-energy-drain" className="text-emerald-400 hover:underline">
              finite capacity for social interaction
            </Link>{" "}
            before needing to recharge. When your battery is full, you&apos;re ready to engage; when
            it&apos;s low, you feel drained and need solitude or quiet activities to replenish.
          </p>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl flex items-center justify-center gap-4">
            <span className="text-5xl">🔋</span>
            <p className="text-white text-lg font-medium">
              It&apos;s a universal feeling, but Gen Z has given it a name and a voice.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((s) => (
              <div key={s.stat} className="bg-[#0F172A] border border-[#374151] rounded-xl p-6 text-center">
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">{s.stat}</div>
                <p className="text-[#94A3B8] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gen Z */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Gen Z is Leading This Conversation
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Several factors have converged to make Gen Z the generation most vocal about social energy
              and its limits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {genZReasons.map((r) => (
              <div key={r.title} className="bg-[#0B1220] p-7 rounded-xl border border-[#374151]">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it means */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why This Matters for Everyone
          </h2>
          <div className="space-y-5 text-[#94A3B8] text-lg leading-relaxed">
            <p>
              The social battery metaphor has spread beyond Gen Z because it resonates universally.
              Whether you&apos;re an{" "}
              <Link href="/introvert-extrovert-social-energy-drain" className="text-emerald-400 hover:underline">
                introvert or extrovert
              </Link>
              , your social energy is finite. The difference is just where you recharge.
            </p>
            <p>
              By naming the phenomenon, we can talk about it — with employers, friends, and partners. We
              can set boundaries without guilt, plan recovery time without embarrassment, and make
              intentional choices about where our social energy goes.
            </p>
            <p>
              This cultural shift is healthy. It&apos;s not about avoiding people — it&apos;s about
              engaging with them in a sustainable way that actually leaves room for genuine connection.
            </p>
          </div>
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
