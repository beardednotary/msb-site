"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1220]/90 backdrop-blur-sm border-b border-[#374151]">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-white text-lg">
          <Image
            src="/images/icon.png"
            alt="My Social Battery"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span>My Social Battery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          <a href="/#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="/#activities" className="hover:text-emerald-400 transition-colors">Activities</a>
          <a href="/#privacy" className="hover:text-emerald-400 transition-colors">Privacy</a>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
          <Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link>
        </nav>

        {/* CTA */}
        <a
          href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 814 1000" fill="currentColor">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z"/>
          </svg>
          Download Free
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#94A3B8]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#374151] bg-[#0F172A] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#94A3B8]">
          <a href="/#features" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Features</a>
          <a href="/#activities" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Activities</a>
          <a href="/#privacy" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Privacy</a>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Blog</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">FAQ</Link>
          <a
            href="https://apps.apple.com/us/app/my-social-battery-tracker/id6759211267"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full w-full"
          >
            <svg className="w-4 h-4" viewBox="0 0 814 1000" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-165.9-117.1c-72.3-101.4-131.1-258.7-131.1-407.8 0-159.6 104.1-244.2 205.9-244.2 54.1 0 99.1 35.6 133.2 35.6 32.5 0 83.5-37.6 144.1-37.6 23.7 0 108.1 2 166.1 77.3zm-180.8-100.8c27.8-33.1 47.5-79.1 47.5-125.1 0-6.4-.6-12.8-1.9-18.5-45 1.9-99 30.2-131.3 67.9-25.1 28.5-48.4 74.5-48.4 121.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.4 1.3 40.4 0 93.5-26.8 121.8-63.3z"/>
            </svg>
            Download Free
          </a>
        </div>
      )}
    </header>
  );
}
