"use client";

import { useState } from "react";

export interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-[#0F172A] border border-[#374151] rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold hover:text-emerald-400 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[#94A3B8] text-sm leading-relaxed border-t border-[#374151] pt-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
