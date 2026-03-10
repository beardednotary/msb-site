import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Remote Work Changed How We Socialize — Here's How to Adapt — My Social Battery",
  description:
    "The shift to remote work transformed workplace dynamics. Discover actionable strategies for individuals and teams to foster meaningful social connections in the new era of work.",
};

const rippleEffects = [
  {
    icon: "😟",
    title: "Increased Social Anxiety",
    text: "Less frequent in-person interactions can make social situations feel more daunting, even among colleagues.",
  },
  {
    icon: "📉",
    title: "Erosion of Informal Skills",
    text: "The art of small talk and reading non-verbal cues diminishes without daily practice.",
  },
  {
    icon: "🫂",
    title: "Weakened Team Cohesion",
    text: "Spontaneous bonding and shared experiences are harder to replicate in a purely virtual setting.",
  },
  {
    icon: "💡",
    title: "Impact on Innovation",
    text: "Casual cross-pollination of ideas, often born from informal chats, can suffer.",
  },
];

const individualItems = [
  {
    title: "1. Proactive Socializing",
    content:
      "Don't wait for invitations. Schedule virtual coffee breaks with colleagues, join online interest groups, or suggest brief \"check-in\" calls with team members you rarely interact with. Even 15 minutes can make a difference.",
  },
  {
    title: "2. Master Asynchronous Communication",
    content:
      "Not all connection needs to be real-time. Use tools like Slack or Teams for non-work-related channels (e.g., #pets, #foodie, #gaming). Share small updates about your life or react to others' posts to maintain a sense of presence and personality.",
  },
  {
    title: "3. Set Boundaries (Digital & Social)",
    content:
      "Combat Zoom fatigue by blocking out \"no meeting\" times. Understand your social energy limits for virtual interactions. It's okay to decline optional social video calls if you're feeling drained. Protect your focus time, but also intentionally allocate time for social connection.",
  },
  {
    title: "4. Prioritize In-Person (If Possible)",
    content:
      "If your team has hybrid days or occasional meetups, make an effort to attend. The quality of in-person social interaction for building rapport often surpasses virtual equivalents. Maximize these opportunities.",
  },
];

const teamItems = [
  {
    title: "1. Create Dedicated Social Spaces",
    content:
      "Establish virtual \"watercoolers\" — dedicated channels or recurring, optional casual calls (e.g., \"Friday Fun Half-Hour\") where work is off-limits. Encourage sharing personal anecdotes, photos, or memes.",
  },
  {
    title: "2. Model Healthy Digital Behavior",
    content:
      "Leaders should demonstrate healthy boundaries (e.g., not sending emails at 10 PM) and engage in informal social interactions themselves. Their behavior sets the tone for the entire team.",
  },
  {
    title: "3. Facilitate Structured Team Bonding",
    content:
      "Organize virtual team-building activities, online games, skill-sharing sessions, or even a virtual lunch club. For hybrid teams, create events specifically for in-office days to maximize face-to-face time.",
  },
  {
    title: "4. Emphasize Well-being Resources",
    content:
      "Regularly remind employees of mental health and wellness resources available. Openly discuss the challenges of remote work socialization and encourage employees to prioritize their social battery and mental health.",
  },
];

export default function RemoteWorkSocialAdaptPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Remote Work Changed How We Socialize
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Here&apos;s How to Adapt.
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            The shift to remote work and hybrid models transformed workplace dynamics, especially
            how we connect. Discover actionable strategies for individuals and teams to foster
            meaningful social connections in the new era of work.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              👥
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">Navigating connection in the digital workplace.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Unseen Shift: From Watercooler to Zoom Room
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Before the pandemic, casual interactions were the backbone of workplace socialization:
            spontaneous coffee breaks, hallway chats, lunchtime gatherings. Remote work, while
            offering flexibility, largely eliminated these organic moments. Now, every interaction is
            often scheduled, purposeful, and mediated by a screen. This fundamental shift has
            profound implications for our social skills, mental{" "}
            <Link href="/social-battery-phenomenon" className="text-emerald-400 hover:underline">
              well-being
            </Link>
            , and team cohesion.
          </p>
        </div>
      </section>

      {/* Ripple effects */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Ripple Effect: What&apos;s at Stake?
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              The changes aren&apos;t just logistical; they impact our fundamental human need for
              connection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {rippleEffects.map((r) => (
              <div key={r.title} className="bg-[#0F172A] border border-[#374151] p-6 rounded-xl text-center">
                <span className="text-4xl mb-3 block">{r.icon}</span>
                <h3 className="font-bold text-xl text-white mb-2">{r.title}</h3>
                <p className="text-[#94A3B8] text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adapt */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How to Adapt: Intentional Connection in a Remote World
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Adapting requires conscious effort, from both individuals and organizations.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              For Individuals: Reclaiming Your Social Mojo
            </h3>
            <Accordion items={individualItems} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              For Teams &amp; Leaders: Fostering a Connected Culture
            </h3>
            <Accordion items={teamItems} />
          </div>
        </div>
      </section>

      {/* Personal awareness */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Power of Personal Awareness: Managing Your Social Battery
          </h2>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            In a world where social interactions are more intentional, understanding your personal
            social energy levels becomes paramount. Recognizing which interactions energize you and
            which drain you — whether virtual or in-person — is the first step towards adapting
            successfully. My Social Battery helps individuals proactively manage their social calendar
            to optimize for productivity and well-being.
          </p>
        </div>
      </section>

      {/* Empowerment */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empowering Connections in the New Work Era
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Remote work is here to stay, and so is the need for human connection. By being mindful
            and proactive, both individuals and organizations can overcome the challenges of remote
            socialization. The goal isn&apos;t to replicate the old office environment, but to build
            new, effective ways to foster connection, support well-being, and ensure that our social
            batteries are charged for success.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Optimize Your Social Energy Today</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Whether you&apos;re a remote worker navigating new social dynamics or an HR professional
            seeking insights, understanding social energy is key.
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
