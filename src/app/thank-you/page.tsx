import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks! — My Social Battery",
  description: "Thanks for your message. Download My Social Battery on the App Store.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-[#0B1220]">
      <div className="text-center max-w-xl mx-auto">
        <div className="text-6xl mb-6">🔋</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Thanks for reaching out!
        </h1>
        <p className="text-lg text-[#94A3B8] mb-8">
          My Social Battery is live on the App Store — free to download and ready to help you
          track your social energy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-black font-semibold px-7 py-4 rounded-2xl transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 814 1000" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z"/>
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs font-normal">Download on the</span>
              <span className="text-lg font-bold">App Store</span>
            </span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#0F172A] border border-[#374151] hover:border-emerald-500/50 text-[#E5E7EB] font-semibold px-7 py-4 rounded-2xl transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
