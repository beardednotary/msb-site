import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "About My Social Battery — Our Story, Mission & Vision",
  description:
    "Discover the personal journey that inspired My Social Battery and our commitment to helping you thrive in every social interaction.",
};

const philosophyItems = [
  {
    title: "Our Mission: Empowering Social Wellness 🚀",
    content:
      "Our mission is to empower individuals to understand and optimize their unique social energy patterns. We believe that by gaining awareness of what truly energizes and drains you, you can build a more balanced, fulfilling, and authentic social life, free from burnout.",
  },
  {
    title: "Our Philosophy: Self-Awareness is Your Superpower 🧠",
    content:
      "We advocate for a proactive approach to social well-being. My Social Battery helps you track your interactions and emotions, providing personalized insights that reveal your unique social rhythms. This self-awareness is the foundation for lasting change.",
  },
  {
    title: "Our Philosophy: Quality Over Quantity ⚖️",
    content:
      "In a world that often glorifies constant social engagement, we believe true social wellness comes from quality connections and respecting your personal energy limits. It's about building relationships that uplift you, not drain you.",
  },
  {
    title: "Our Philosophy: Empathy & Support for All 🫂",
    content:
      "We understand that everyone's social journey is unique. Whether you're an introvert, an extrovert, or somewhere in between, My Social Battery is designed to provide compassionate support and actionable tools for your individual needs.",
  },
];

const whyItems = [
  "Identify your unique social energizers and drainers.",
  "Plan your social calendar to prevent burnout.",
  "Cultivate more authentic and fulfilling relationships.",
  "Improve your overall mental well-being and productivity.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            About My Social Battery
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Our Story, Our Mission, Our Vision.
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Discover the personal journey that inspired My Social Battery and our commitment to
            helping you thrive in every social interaction.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              💡
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">Building a healthier social future, together.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Our Story: Born from Personal Experience
          </h2>
          <div className="space-y-4 text-[#94A3B8] leading-relaxed text-lg">
            <p>
              Hello, I&apos;m Ray Rothwell, the founder of My Social Battery. This app isn&apos;t
              just a concept — it&apos;s a solution born directly from my own lived experience.
              Like many, I&apos;ve often struggled with managing my social energy. As a naturally
              introverted individual who tends to give a lot of myself in interactions, I frequently
              found myself feeling drained, overwhelmed, and anxious after social engagements.
            </p>
            <p>
              I quickly realized that finding time for myself and intentionally recharging between
              activities wasn&apos;t just a preference, but a necessity for my mental well-being.
              If I, and others like me, were navigating these challenges, there had to be a better
              way to understand and optimize our social lives.
            </p>
            <p>
              That conviction sparked the idea for My Social Battery. My hope is that by providing
              a simple, intuitive tool, others can also gain clarity, prevent burnout, and cultivate
              a social life that truly energizes them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our Mission &amp; Philosophy
          </h2>
          <Accordion items={philosophyItems} />
        </div>
      </section>

      {/* Why My Social Battery */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why My Social Battery?
          </h2>
          <p className="text-[#94A3B8] leading-relaxed mb-6 text-lg">
            In a world that&apos;s increasingly connected yet often leaves us feeling more isolated
            or overwhelmed, My Social Battery offers a fresh perspective. We provide a practical
            framework and a user-friendly tool to help you:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
            {whyItems.map((item) => (
              <li key={item} className="flex gap-3 text-[#94A3B8]">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            It&apos;s more than just an app — it&apos;s a movement towards intentional social
            living.
          </p>
        </div>
      </section>
    </>
  );
}
