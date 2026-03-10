"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 text-lg">
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
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#features" className="hover:text-emerald-600 transition-colors">Features</a>
          <a href="/#activities" className="hover:text-emerald-600 transition-colors">Activities</a>
          <a href="/#privacy" className="hover:text-emerald-600 transition-colors">Privacy</a>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <Link href="/faq" className="hover:text-emerald-600 transition-colors">FAQ</Link>
        </nav>

        {/* CTA */}
        <a
          href="/#download"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Get Early Access
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600"
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
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
          <a href="/#features" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">Features</a>
          <a href="/#activities" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">Activities</a>
          <a href="/#privacy" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">Privacy</a>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">Blog</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">FAQ</Link>
          <a
            href="/#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center bg-emerald-500 text-white px-4 py-2 rounded-full w-full"
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
}
