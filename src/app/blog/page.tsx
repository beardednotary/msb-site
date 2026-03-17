import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — My Social Battery",
  description:
    "Insights, guides, and case studies to help you understand, manage, and optimize your social energy for a more fulfilling life.",
};

const articles = [
  {
    href: "/the-hidden-cost-of-people-pleasing",
    title: "The Hidden Cost of People-Pleasing",
    summary:
      "Discover why constantly saying 'yes' can drain your social battery and how to reclaim your energy.",
  },
  {
    href: "/introvert-extrovert-social-energy-drain",
    title: "Introvert vs. Extrovert: The Science",
    summary:
      "Explore the brain chemistry behind social energy and how your personality type influences it.",
  },
  {
    href: "/7-signs-socially-burned-out",
    title: "7 Signs You're Socially Burned Out",
    summary:
      "Identify the subtle (and not-so-subtle) indicators of social fatigue and learn what to do about it.",
  },
  {
    href: "/social-battery-phenomenon",
    title: "The 'Social Battery' Phenomenon",
    summary:
      "Understand why Gen Z is redefining social wellness and embracing the concept of social energy.",
  },
  {
    href: "/30-day-social-energy-experiment",
    title: "I Tracked My Social Energy for 30 Days",
    summary:
      "A personal case study on how tracking social energy transformed daily life and productivity.",
  },
  {
    href: "/remote-work-social-adapt",
    title: "Remote Work Changed How We Socialize",
    summary:
      "Learn strategies for individuals and teams to foster connection in the new era of remote work.",
  },
  {
    href: "/introverts-guide-to-networking",
    title: "The Introvert's Guide to Networking",
    summary:
      "Strategic approaches for introverted professionals to build meaningful connections without burnout.",
  },
  {
    href: "/the-friendship-audit",
    title: "The Friendship Audit",
    summary:
      "An interactive tool to discover which relationships in your life genuinely energize you.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900/30 to-[#0B1220]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            My Social Battery Blog
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mt-3">
            Insights for an Energized Social Life
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Dive into our collection of articles, guides, and case studies designed to help you
            understand, manage, and optimize your social energy for a more fulfilling life.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-5xl">
              📚
            </div>
            <p className="mt-3 text-[#94A3B8] font-medium">Your hub for social wellness wisdom.</p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 md:py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Articles &amp; Guides
            </h2>
            <p className="mt-3 text-[#94A3B8]">
              Explore our content to deepen your understanding of social energy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-[#0F172A] border border-[#374151] p-6 rounded-xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{article.summary}</p>
                <p className="text-emerald-400 font-semibold mt-4 text-sm">Read More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-emerald-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Download on the App Store</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Discover how My Social Battery can help you understand and optimize your social energy.
          </p>
          <Link
            href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-xl mt-8 hover:bg-slate-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
