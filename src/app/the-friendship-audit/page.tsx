import type { Metadata } from "next";
import Link from "next/link";
import FriendshipAuditQuiz from "@/components/FriendshipAuditQuiz";

export const metadata: Metadata = {
  title: "The Friendship Audit: Which Relationships Actually Energize You? — My Social Battery",
  description:
    "Take this interactive friendship audit to reflect on your social circle and discover which relationships genuinely energize you — and which drain your battery.",
};

const actionSteps = [
  {
    color: "emerald",
    title: "Nurture the Uplifting Ones ✨",
    items: [
      "Invest more time and energy into relationships that consistently leave you feeling energized and supported.",
      "Express gratitude to these friends — let them know the positive impact they have.",
      "Initiate plans with them that align with your energy needs.",
    ],
  },
  {
    color: "red",
    title: "Set Boundaries with the Draining Ones 🚫",
    items: [
      "It's okay to limit time with relationships that consistently drain you.",
      "Practice saying \"no\" gracefully to invitations that don't serve your energy.",
      "Communicate your needs clearly and kindly. You don't owe anyone your energy.",
    ],
  },
  {
    color: "blue",
    title: "Diversify Your Social Portfolio 🌐",
    items: [
      "Seek out new connections that align with your current interests and energy levels.",
      "Don't rely on one type of relationship for all your social needs.",
      "Explore online communities if in-person interactions feel overwhelming.",
    ],
  },
  {
    color: "amber",
    title: "Prioritize Self-Care 🧘",
    items: [
      "Schedule intentional alone time or recharging activities after social engagements.",
      "Listen to your body's signals for social fatigue.",
      "Remember, a full social battery benefits all your relationships.",
    ],
  },
];

const borderMap: Record<string, string> = {
  emerald: "border-emerald-500/40",
  red: "border-red-500/40",
  blue: "border-blue-500/40",
  amber: "border-amber-500/40",
};

const titleMap: Record<string, string> = {
  emerald: "text-emerald-400",
  red: "text-red-400",
  blue: "text-blue-400",
  amber: "text-amber-400",
};

export default function FriendshipAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            The Friendship Audit:
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Which Relationships Actually Energize You?
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Are your friendships truly uplifting, or are some subtly draining your{" "}
            <Link href="/social-battery-phenomenon" className="text-emerald-400 hover:underline">
              social battery
            </Link>
            ? Take this interactive audit to reflect on your social circle and discover which
            relationships genuinely energize you.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              👯
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">A mindful look at your social connections.</p>
          </div>
        </div>
      </section>

      {/* Why audit */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Audit Your Friendships?
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-4">
            Just like you audit your finances or your health, your social life deserves a check-up.
            Not every relationship is meant to last forever, nor is every relationship meant to
            provide the same kind of energy. This audit isn&apos;t about cutting people off —
            it&apos;s about gaining clarity, setting healthier boundaries, and intentionally
            cultivating relationships that genuinely support your well-being.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Be honest with yourself. Your social energy is a precious resource.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Social Circle Reflection
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Think of a specific person as you answer. There are no right or wrong answers — just
              honest reflection.
            </p>
          </div>
          <FriendshipAuditQuiz />
        </div>
      </section>

      {/* Actionable steps */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cultivating Your Energizing Connections
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Now that you have clarity, here are actionable steps to optimize your social energy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {actionSteps.map((step) => (
              <div
                key={step.title}
                className={`bg-[#0B1220] p-6 rounded-xl border ${borderMap[step.color]}`}
              >
                <h3 className={`font-bold text-xl mb-3 ${titleMap[step.color]}`}>{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[#94A3B8] text-sm">
                      <span className="mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Track Your Real-Time Social Energy</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            The Friendship Audit is a great start. For ongoing clarity and optimization of your
            social battery, My Social Battery is your daily companion. Track your interactions, see
            your energy trends, and make informed choices for a more balanced and energized life.
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
