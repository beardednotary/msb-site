"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const screenshots = [
  { src: "/images/App-SS-1.png", alt: "My Social Battery – main battery tracker" },
  { src: "/images/App-SS-2.png", alt: "My Social Battery – activity logging" },
  { src: "/images/App-SS-3.png", alt: "My Social Battery – energy insights" },
  { src: "/images/App-SS-4.png", alt: "My Social Battery – weekly overview" },
  { src: "/images/App-SS-5.png", alt: "My Social Battery – settings and profile" },
];

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % screenshots.length), []);
  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="flex flex-col items-center gap-5 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Screenshot frame */}
      <div className="relative w-[220px] h-[476px] rounded-[2.5rem] overflow-hidden border-2 border-[#374151] shadow-2xl shadow-emerald-500/10 bg-[#0B1220]">
        {screenshots.map((ss, i) => (
          <div
            key={ss.src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={ss.src}
              alt={ss.alt}
              fill
              sizes="220px"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Prev / Next hit areas */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-0 top-0 h-full w-1/3 cursor-w-resize"
        />
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-0 top-0 h-full w-1/3 cursor-e-resize"
        />
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-emerald-400 w-5" : "bg-[#374151]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
