"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "After spending time with this person (or type of person), you typically feel…",
    options: [
      { label: "Energized and uplifted", score: 3 },
      { label: "Neutral — neither better nor worse", score: 2 },
      { label: "A bit tired but okay", score: 1 },
      { label: "Drained or stressed", score: 0 },
    ],
  },
  {
    id: 2,
    text: "When you see their name on your phone, your first instinct is…",
    options: [
      { label: "Happy — you look forward to it", score: 3 },
      { label: "Neutral — you'll call back eventually", score: 2 },
      { label: "Mild reluctance", score: 1 },
      { label: "Definite dread", score: 0 },
    ],
  },
  {
    id: 3,
    text: "How often do conversations feel balanced (rather than mostly about them)?",
    options: [
      { label: "Almost always balanced", score: 3 },
      { label: "Usually balanced", score: 2 },
      { label: "Sometimes one-sided", score: 1 },
      { label: "Almost always one-sided", score: 0 },
    ],
  },
  {
    id: 4,
    text: "This person respects your need for alone time and personal space.",
    options: [
      { label: "Always — they get it completely", score: 3 },
      { label: "Usually, with minor friction", score: 2 },
      { label: "Sometimes — can be pushy", score: 1 },
      { label: "Rarely — they ignore my limits", score: 0 },
    ],
  },
  {
    id: 5,
    text: "After a difficult week, spending time with them…",
    options: [
      { label: "Helps me recharge", score: 3 },
      { label: "Makes no real difference", score: 2 },
      { label: "Adds a little more stress", score: 1 },
      { label: "Makes things noticeably worse", score: 0 },
    ],
  },
  {
    id: 6,
    text: "They show genuine interest in your life, goals, and well-being.",
    options: [
      { label: "Consistently and authentically", score: 3 },
      { label: "Most of the time", score: 2 },
      { label: "Occasionally", score: 1 },
      { label: "Rarely or never", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Conversations with them tend to be…",
    options: [
      { label: "Uplifting, meaningful, or fun", score: 3 },
      { label: "Mostly pleasant", score: 2 },
      { label: "Hit or miss", score: 1 },
      { label: "Draining or negative", score: 0 },
    ],
  },
  {
    id: 8,
    text: "How often do you genuinely look forward to seeing them?",
    options: [
      { label: "Always or almost always", score: 3 },
      { label: "Usually", score: 2 },
      { label: "Sometimes", score: 1 },
      { label: "Rarely", score: 0 },
    ],
  },
];

type Result = {
  label: string;
  color: string;
  description: string;
  tip: string;
};

function getResult(score: number): Result {
  if (score >= 20) {
    return {
      label: "Energizing Connection ✨",
      color: "emerald",
      description:
        "This relationship is a genuine asset to your social battery. It consistently leaves you feeling better than when you started.",
      tip: "Invest more time here. Let this person know the positive impact they have — it strengthens the bond.",
    };
  } else if (score >= 13) {
    return {
      label: "Mixed Signals 🔶",
      color: "amber",
      description:
        "This relationship has real value but also some friction. With clearer communication or adjusted expectations, it could become more energizing.",
      tip: "Identify the specific interactions that drain you and explore whether boundaries or honest conversation could shift the dynamic.",
    };
  } else {
    return {
      label: "Energy Drain 🔴",
      color: "red",
      description:
        "Spending time with this person consistently costs more than it gives back. That's important data — not a moral judgment.",
      tip: "Consider limiting the time and energy you invest here. You don't owe anyone unlimited access to your battery.",
    };
  }
}

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  amber: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  red: "bg-red-500/10 border-red-500/30 text-red-400",
};

export default function FriendshipAuditQuiz() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const totalScore = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const result = getResult(totalScore);

  if (!started) {
    return (
      <div className="text-center">
        <button
          onClick={() => setStarted(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start the Audit
        </button>
      </div>
    );
  }

  if (submitted) {
    const colorClass = colorMap[result.color];
    return (
      <div className="space-y-6">
        <div className={`border rounded-xl p-6 ${colorClass}`}>
          <div className="text-2xl font-extrabold mb-2">{result.label}</div>
          <p className="mb-4">{result.description}</p>
          <p className="font-medium">
            <strong>Action step:</strong> {result.tip}
          </p>
        </div>
        <p className="text-[#94A3B8] text-sm text-center">
          This is a reflection tool, not a verdict. Use it as a starting point for honest
          self-awareness about where your social energy goes.
        </p>
        <div className="text-center">
          <button
            onClick={() => {
              setAnswers(Array(questions.length).fill(null));
              setSubmitted(false);
              setStarted(false);
            }}
            className="text-emerald-400 hover:text-emerald-300 underline text-sm"
          >
            Audit another relationship
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-[#94A3B8] text-sm text-center">
        Think of a specific person (or type of relationship) as you answer. There are no right or
        wrong answers — just honest reflection.
      </p>
      {questions.map((q, qi) => (
        <div key={q.id} className="bg-[#0F172A] border border-[#374151] rounded-xl p-5">
          <p className="text-white font-medium mb-4">
            {qi + 1}. {q.text}
          </p>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const selected = answers[qi] === opt.score;
              return (
                <button
                  key={opt.label}
                  onClick={() => {
                    const next = [...answers];
                    next[qi] = opt.score;
                    setAnswers(next);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                    selected
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                      : "border-[#374151] text-[#94A3B8] hover:border-[#94A3B8] hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="text-center">
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-900 disabled:text-emerald-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          See Your Audit Results
        </button>
        {!allAnswered && (
          <p className="text-[#94A3B8] text-xs mt-2">Answer all questions to continue.</p>
        )}
      </div>
    </div>
  );
}
