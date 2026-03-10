import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — My Social Battery",
  description:
    "Have questions about social energy, burnout, or the My Social Battery app? Find answers to common queries here.",
};

const faqs = [
  {
    title: "What is a \"social battery\"?",
    content:
      "The \"social battery\" is a popular metaphor representing your finite capacity for social interaction. When your battery is full, you feel energized and ready to engage. When it's low, you feel drained and need time alone or quiet activities to recharge. It's a key concept in understanding social wellness.",
  },
  {
    title: "Am I an introvert or an extrovert?",
    content:
      "Introversion and extroversion describe how you gain and expend energy. Introverts recharge through solitude, while extroverts gain energy from social interaction. Most people fall somewhere on a spectrum, often being \"ambiverts.\" You can learn more in our article: Introvert vs. Extrovert: The Science Behind Social Energy Drain.",
  },
  {
    title: "What are the signs of social burnout?",
    content:
      "Social burnout manifests as deep exhaustion, dreading social plans, increased irritability, brain fog, and withdrawal. It's a sign you've overextended your social capacity. We've detailed the common signs and solutions in our guide: 7 Signs You're Socially Burned Out (And What to Do About It).",
  },
  {
    title: "How can I improve my social skills in remote work?",
    content:
      "Remote work requires intentional adaptation. Focus on proactive socializing, mastering asynchronous communication, setting clear boundaries, and prioritizing in-person connections when possible. Our article offers comprehensive strategies: Remote Work Changed How We Socialize — Here's How to Adapt.",
  },
  {
    title: "How can I network as an introvert without getting drained?",
    content:
      "Introverts can excel at networking by focusing on quality over quantity, preparing thoughtfully, seeking one-on-one interactions, and prioritizing recharge time. Our guide provides a strategic approach: The Introvert's Guide to Networking Without Burning Out.",
  },
  {
    title: "What is the My Social Battery app?",
    content:
      "My Social Battery is an upcoming app designed to help you track your social energy in real-time. It allows you to log interactions, identify your personal energizers and drainers, and gain insights to optimize your social calendar for better well-being and productivity.",
  },
  {
    title: "How do I join the waitlist for the app?",
    content:
      "You can join our exclusive waitlist directly from our homepage! We'll notify you about the app launch, special features, and provide early access opportunities. Head to mysocialbattery.app and sign up.",
  },
  {
    title: "Where can I find more articles about social energy?",
    content:
      "We regularly publish new insights and guides. Visit our Blog page for a comprehensive collection of articles on social wellness, relationships, and personal growth.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Everything You Need to Know About Your Social Energy.
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Have questions about social energy, burnout, or the My Social Battery app? You&apos;re
            in the right place.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              ❓
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">Your guide to understanding social wellness.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
