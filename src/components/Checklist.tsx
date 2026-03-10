"use client";

import { useState } from "react";

export interface ChecklistItem {
  label: string;
}

interface Result {
  min: number;
  max: number;
  message: string;
  color: string;
}

const results: Result[] = [
  {
    min: 0,
    max: 2,
    message: "You have healthy boundaries and good awareness of your energy. Keep it up!",
    color: "emerald",
  },
  {
    min: 3,
    max: 5,
    message:
      "Some people-pleasing tendencies showing. Consider where you can reclaim your 'yes'.",
    color: "amber",
  },
  {
    min: 6,
    max: 8,
    message:
      "Strong people-pleasing patterns detected. Your energy needs protecting — start small with one boundary this week.",
    color: "red",
  },
];

export default function Checklist({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<boolean[]>(Array(items.length).fill(false));
  const [submitted, setSubmitted] = useState(false);

  const score = checked.filter(Boolean).length;
  const result = results.find((r) => score >= r.min && score <= r.max)!;

  function toggle(i: number) {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  }

  return (
    <div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <label
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              checked[i]
                ? "border-emerald-500/50 bg-emerald-500/10"
                : "border-[#374151] bg-[#0F172A] hover:border-[#94A3B8]"
            }`}
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-0.5 accent-emerald-500 w-4 h-4 flex-shrink-0"
            />
            <span className="text-[#E5E7EB] text-sm leading-relaxed">{item.label}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setSubmitted(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
        >
          See My Result
        </button>
      </div>

      {submitted && (
        <div
          className={`mt-6 p-6 rounded-xl border text-center ${
            result.color === "emerald"
              ? "bg-emerald-500/10 border-emerald-500/30"
              : result.color === "amber"
              ? "bg-amber-500/10 border-amber-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
        >
          <p className="text-lg font-bold text-white mb-1">
            {score} / {items.length} checked
          </p>
          <p
            className={`text-sm ${
              result.color === "emerald"
                ? "text-emerald-400"
                : result.color === "amber"
                ? "text-amber-400"
                : "text-red-400"
            }`}
          >
            {result.message}
          </p>
        </div>
      )}
    </div>
  );
}
