import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "7 Signs You're Socially Burned Out (And What to Do About It) — My Social Battery",
  description:
    "Are you socially burned out? Identify the signs of social fatigue and find actionable steps to recover your energy.",
};

const signs = [
  {
    title: "1. Persistent Exhaustion After Socializing",
    content:
      "Even brief, low-key gatherings leave you needing hours — or days — to recover. This isn't normal tiredness; it's your nervous system signaling overload. Track which interactions drain you most and schedule deliberate recovery time after social engagements.",
  },
  {
    title: "2. Dreading Events You Once Enjoyed",
    content:
      "Activities or people you used to look forward to now fill you with dread or anxiety. When joy becomes obligation, it's a key warning sign. Prioritize only the social commitments that feel genuinely meaningful right now, and give yourself permission to decline the rest.",
  },
  {
    title: "3. Increased Irritability",
    content:
      "You're snapping at people you love, or finding small annoyances deeply frustrating. Irritability is often displaced overwhelm. Identify what's overfilling your social cup and start cancelling the non-essentials — you can't pour from an empty battery.",
  },
  {
    title: "4. Brain Fog & Difficulty Concentrating",
    content:
      "After social interactions, you struggle to focus, think clearly, or be productive. Your mental bandwidth is limited. Give yourself a quiet recovery period after intense social events, and don't schedule demanding cognitive work directly after draining gatherings.",
  },
  {
    title: "5. Withdrawing From Close Relationships",
    content:
      "You're avoiding even the people you love because social interaction of any kind feels like too much. This is a sign you need serious rest. Communicate your needs to loved ones — true friends will understand. Isolation compounds burnout; gentle connection can help.",
  },
  {
    title: "6. Physical Symptoms",
    content:
      "Frequent headaches, muscle tension, fatigue, getting sick more often — your body is signaling overload. Take social burnout as seriously as you would physical burnout. Rest, proper sleep, and reducing social obligations are not luxuries; they're necessities.",
  },
  {
    title: "7. Going Through the Motions",
    content:
      "You're present physically but mentally checked out, just waiting for interactions to end. Quality over quantity. It's better to attend fewer events and actually be present than to attend many on empty. Start saying no to what drains you so you can say yes to what fills you.",
  },
];

export default function SevenSignsPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            7 Signs You&apos;re Socially Burned Out
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            And What to Do About It
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Do you feel constantly drained after social interactions? Are you dreading your social calendar?
            You might be experiencing social burnout. This guide will help you identify the signs and offer
            actionable steps to reclaim your energy and well-being.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understanding Social Burnout
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Social burnout isn&apos;t just being tired — it&apos;s a state of mental, emotional, and physical
            exhaustion caused by excessive or overwhelming social demands. It&apos;s particularly common for{" "}
            <Link href="/introvert-extrovert-social-energy-drain" className="text-emerald-400 hover:underline">
              introverts
            </Link>
            , highly sensitive people, and anyone who struggles with setting social boundaries. Recognizing
            the symptoms is the first step towards recovery.
          </p>
        </div>
      </section>

      {/* The 7 Signs */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Identify the Signs: Are You Drained?
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Click on each sign to reveal practical advice on how to address it.
            </p>
          </div>
          <Accordion items={signs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Reclaim Your Social Energy</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Recognizing the signs of social burnout is powerful, but understanding your unique energy
            patterns is transformative. My Social Battery helps you track your social energy, pinpoint your
            triggers, and build a social life that truly recharges you.
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
