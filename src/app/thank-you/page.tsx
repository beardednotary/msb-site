import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're on the List! — My Social Battery",
  description: "Thanks for signing up for early access to My Social Battery.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-[#0B1220]">
      <div className="text-center max-w-xl mx-auto">
        <div className="text-6xl mb-6">🔋</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          You&apos;re on the list!
        </h1>
        <p className="text-lg text-[#94A3B8] mb-8">
          Thanks for signing up for early access. We&apos;ll notify you as soon as My Social Battery
          is ready to download.
        </p>
        <Link
          href="/"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
