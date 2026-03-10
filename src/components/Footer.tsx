import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-[#374151] text-[#94A3B8]">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">App</h4>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald-400 transition-colors">
              Download iOS
            </a>
            <span className="text-sm text-[#374151]">
              Android <span className="text-xs">(coming soon)</span>
            </span>
            <a href="/#features" className="text-sm hover:text-emerald-400 transition-colors">Features</a>
            <a href="/#privacy" className="text-sm hover:text-emerald-400 transition-colors">Privacy</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Support</h4>
            <a href="mailto:support@mysocialbattery.app" className="text-sm hover:text-emerald-400 transition-colors">Contact Support</a>
            <a href="mailto:privacy@mysocialbattery.app" className="text-sm hover:text-emerald-400 transition-colors">Privacy Questions</a>
            <Link href="/privacy-policy" className="text-sm hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
            <Link href="/about" className="text-sm hover:text-emerald-400 transition-colors">About Us</Link>
            <a href="mailto:hello@mysocialbattery.app" className="text-sm hover:text-emerald-400 transition-colors">Contact</a>
            <Link href="/faq" className="text-sm hover:text-emerald-400 transition-colors">FAQ</Link>
            <Link href="/blog" className="text-sm hover:text-emerald-400 transition-colors">Blog</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Connect</h4>
            <a
              href="https://facebook.com/mysocialbattery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#374151] pt-6 text-xs text-center text-[#374151]">
          &copy; {year} MySocialBattery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
