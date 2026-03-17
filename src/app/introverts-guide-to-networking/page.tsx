import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "The Introvert's Guide to Networking Without Burning Out — My Social Battery",
  description:
    "Discover strategic networking approaches for introverted professionals to build meaningful connections, advance their careers, and thrive — without draining your social battery.",
};

const beforeItems = [
  {
    title: "1. Define Your \"Why\" & Goals",
    content:
      "Instead of \"meet everyone,\" aim for 1-3 quality conversations. What specific insights are you seeking? Who do you genuinely want to connect with? A clear purpose reduces overwhelm.",
  },
  {
    title: "2. Research & Identify Key People",
    content:
      "Look at the attendee list (if available). Identify a few individuals whose work or interests genuinely align with yours. This gives you concrete targets and conversation starters, avoiding aimless wandering.",
  },
  {
    title: "3. Prepare Conversation Starters (Beyond Small Talk)",
    content:
      "Think of open-ended questions related to the event's theme or your research. \"What brought you here today?\" or \"What's the most interesting thing you've learned so far?\" can lead to deeper discussions.",
  },
  {
    title: "4. Plan Your Exit Strategy & Recharge",
    content:
      "Decide how long you'll stay (e.g., 60-90 minutes). Plan for immediate alone time afterward. This mental preparation reduces anxiety about \"being stuck\" and ensures you can recharge effectively.",
  },
];

const duringItems = [
  {
    title: "1. Seek Out One-on-One Opportunities",
    content:
      "Instead of diving into large groups, look for individuals standing alone or small clusters of 2-3 people. It's easier to initiate and maintain a deeper conversation in these settings.",
  },
  {
    title: "2. Listen More, Talk Less",
    content:
      "Introverts are often excellent listeners. Use this strength! Ask thoughtful questions and genuinely listen to the answers. People love talking about themselves, and it takes pressure off you.",
  },
  {
    title: "3. Find Your \"Anchor\" (If Applicable)",
    content:
      "If you know someone at the event, connect with them early. They can introduce you to others or provide a comfortable \"home base\" if you need a moment to regroup.",
  },
  {
    title: "4. Take Strategic Breaks",
    content:
      "Step outside for a few minutes, visit the restroom, or grab a drink. These brief respites can help you reset your energy and re-enter the fray with renewed focus.",
  },
];

const afterItems = [
  {
    title: "1. Prioritize Your Recharge",
    content:
      "Immediately after the event, honor your energy needs. Don't schedule anything demanding. Engage in quiet, restorative activities that replenish your social battery.",
  },
  {
    title: "2. Follow Up Thoughtfully",
    content:
      "Send personalized follow-up emails within 24-48 hours. Reference something specific you discussed to show genuine interest. This is where introverts often shine — in thoughtful, one-on-one communication.",
  },
  {
    title: "3. Reflect & Refine",
    content:
      "What went well? What was draining? What could you do differently next time? Use these reflections to refine your networking strategy and better manage your social energy.",
  },
];

export default function IntrovertsNetworkingPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            The Introvert&apos;s Guide to Networking
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Without Burning Out.
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Networking can feel like an extrovert&apos;s game, but it doesn&apos;t have to drain your
            social battery. Discover strategic networking approaches for introverted professionals to
            build meaningful connections, advance their careers, and thrive in any professional setting.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              💼
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">Connect authentically, recharge effectively.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Networking: An Introvert&apos;s Unique Challenge
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            For many introverts, the thought of a networking event can trigger a cascade of anxiety.
            Small talk feels draining, large crowds are overwhelming, and the pressure to &ldquo;be
            on&rdquo; can quickly deplete one&apos;s{" "}
            <Link href="/social-battery-phenomenon" className="text-emerald-400 hover:underline">
              social energy
            </Link>
            . This guide isn&apos;t about changing who you are, but about equipping you with
            strategies to navigate professional connections in a way that aligns with your natural
            energy flow.
          </p>
        </div>
      </section>

      {/* 3 Phases */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Strategic Networking: Before, During, &amp; After
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Successful networking for introverts starts long before the event and continues long
              after. Here&apos;s a phased approach.
            </p>
          </div>

          {/* Before */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-1">
                Phase 1
              </span>
              Before the Event 🗓️
            </h3>
            <Accordion items={beforeItems} />
          </div>

          {/* During */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-1">
                Phase 2
              </span>
              During the Event 🤝
            </h3>
            <Accordion items={duringItems} />
          </div>

          {/* After */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-1">
                Phase 3
              </span>
              After the Event ✅
            </h3>
            <Accordion items={afterItems} />
          </div>
        </div>
      </section>

      {/* App plug */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empower Your Networking with My Social Battery
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Understanding your social energy is the ultimate networking superpower for introverts.
            My Social Battery helps you track your energy levels before and after interactions,
            identify your unique energizers and drainers, and proactively plan your social calendar
            to avoid{" "}
            <Link href="/7-signs-socially-burned-out" className="text-emerald-400 hover:underline">
              burnout
            </Link>
            . Transform networking from a dreaded chore into a strategic opportunity for growth.
          </p>
        </div>
      </section>

      {/* Empowerment */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Network Authentically, Thrive Professionally
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Networking doesn&apos;t have to be exhausting. By embracing your introverted strengths
            and implementing these strategic approaches, you can build a powerful professional
            network that supports your career goals without compromising your well-being. Your
            unique approach to connection is your greatest asset.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Network Smarter, Not Harder?</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Take control of your social energy and master professional connections.
          </p>
          <Link
            href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-xl mt-8 hover:bg-slate-100 transition-colors"
          >
            Download on the App Store
          </Link>
        </div>
      </section>
    </>
  );
}
