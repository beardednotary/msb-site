import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import Accordion from "@/components/Accordion";
import EnergyLineChart from "@/components/EnergyLineChartClient";

export const metadata: Metadata = {
  title: "The Hidden Cost of People-Pleasing — My Social Battery",
  description:
    "Uncover the hidden cost of people-pleasing on your social energy. Set boundaries, reclaim your time, and prevent burnout.",
};

const costs = [
  {
    icon: "🧠",
    title: "Mental Exhaustion",
    description:
      "Constantly calibrating your responses to please others creates cognitive overload that persists long after the interaction ends.",
  },
  {
    icon: "😤",
    title: "Hidden Resentment",
    description:
      "Suppressing your true feelings doesn't eliminate them. Unspoken 'no's quietly build into frustration and resentment.",
  },
  {
    icon: "🌀",
    title: "Loss of Identity",
    description:
      "When your choices are driven by others' expectations, you gradually lose touch with your own values, preferences, and sense of self.",
  },
  {
    icon: "💤",
    title: "Decision Fatigue",
    description:
      "Overthinking every response to keep others happy exhausts your mental resources, leaving you depleted for decisions that matter.",
  },
  {
    icon: "😰",
    title: "Anxiety & Dread",
    description:
      "The fear of disappointing others creates persistent low-level anxiety and dread around upcoming social events.",
  },
  {
    icon: "💔",
    title: "Shallow Relationships",
    description:
      "Others get to know the 'agreeable you', not the real you. True connection requires authenticity.",
  },
];

const checklistItems = [
  { label: "I say 'yes' to plans I secretly dread, just to avoid conflict." },
  { label: "I feel relieved when events get cancelled, even ones I 'agreed' to." },
  { label: "I find myself doing things I resent, because I couldn't say no." },
  { label: "My energy is noticeably lower after spending time with certain people." },
  { label: "I rehearse excuses to get out of social commitments." },
  { label: "I feel guilty when I do take time for myself." },
  { label: "I often feel like I'm 'performing' rather than genuinely connecting." },
  { label: "I'm exhausted before social events even begin, just from anticipation." },
];

const strategies = [
  {
    title: "Map Your Energy Drains",
    content:
      "For one week, notice which interactions leave you feeling tired vs. energized. This awareness is the foundation of change. My Social Battery can help you track this automatically.",
  },
  {
    title: "Start With Small 'No's'",
    content:
      "Practice declining low-stakes requests first. 'I can't make it this time, but thanks for thinking of me!' is a complete sentence. Each small no builds the muscle for larger ones.",
  },
  {
    title: "Schedule Non-Negotiable Recharge Time",
    content:
      "Block out recovery time in your calendar like a meeting. Treat it as sacred — your energy is a resource that needs replenishment, not a luxury.",
  },
  {
    title: "Reframe Your Boundaries",
    content:
      "A boundary isn't rejection — it's honesty. When you say no to what drains you, you have more genuine energy to give to what truly matters.",
  },
  {
    title: "Track Your Patterns",
    content:
      "My Social Battery helps you see objectively which interactions cost you the most energy, making it easier to make intentional choices about where you invest your social time.",
  },
];

export default function PeoplePleasingPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            The Hidden Cost of People-Pleasing
          </h1>
          <p className="mt-4 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Do you often find yourself saying &ldquo;yes&rdquo; when your gut screams &ldquo;no&rdquo;?
            This guide will help you understand why your social calendar might be draining you and how you
            can reclaim your energy.
          </p>
          <div className="mt-10 max-w-2xl mx-auto bg-[#0F172A] rounded-2xl border border-[#374151] p-6">
            <EnergyLineChart />
            <p className="text-sm text-[#94A3B8] mt-3">
              An illustration of how obligatory &ldquo;yeses&rdquo; can deplete your social energy
              throughout the day.
            </p>
          </div>
        </div>
      </section>

      {/* True Costs */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Beyond Tired: The True Costs of Social Burnout
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              The impact of chronic people-pleasing extends far beyond simple fatigue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {costs.map((c) => (
              <div
                key={c.title}
                className="bg-[#0B1220] p-6 rounded-xl border border-[#374151] hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Check */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Are You Headed for Social Burnout?
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              This interactive checklist can help you identify the warning signs. How many of these feel
              familiar to you?
            </p>
          </div>
          <Checklist items={checklistItems} />
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Reclaiming Your Energy</h2>
            <p className="mt-3 text-[#94A3B8]">
              You can reverse the trend of social exhaustion. It starts with understanding yourself and
              setting healthy boundaries.
            </p>
          </div>
          <Accordion items={strategies} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your Partner in Energy Management
          </h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Understanding your unique social energy patterns is the first step. This is where My Social
            Battery makes a profound difference. If you&apos;re realizing certain relationships keep
            pulling you into automatic yeses,{" "}
            <Link href="/the-friendship-audit/" className="underline decoration-emerald-100/70 underline-offset-2 hover:text-white">
              The Friendship Audit
            </Link>{" "}
            can help you reflect on which connections genuinely support you.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Identify Triggers", desc: "Pinpoint which types of interactions energize or deplete you, so you can make smarter choices." },
              { icon: "📈", title: "Visualize Patterns", desc: "See trends in your social energy over days, weeks, and months with clear, simple charts." },
              { icon: "🧠", title: "Make Informed Decisions", desc: "Use your data to build a social calendar that supports your well-being, rather than drains it." },
            ].map((f) => (
              <div key={f.title} className="bg-white/20 p-7 rounded-xl">
                <div className="text-2xl font-bold mb-2">{f.icon} {f.title}</div>
                <p className="text-emerald-50 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Download on the App Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
