"use client";

import { useEffect, useRef } from "react";

export function AchievementStamp() {
  const mark = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mark.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stamp = () => el.classList.add("is-stamped");
    if (reduced) {
      stamp();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          stamp();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={mark}
      className="achieve-stamp inline-flex size-[4.5rem] items-center justify-center rounded-full border-[3px] border-gold bg-gold/15 text-center"
      aria-hidden
    >
      <svg viewBox="0 0 64 64" className="size-12" aria-hidden>
        <path
          d="M18 46 L30 14"
          stroke="#1A2420"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M46 46 L34 14"
          stroke="#1A2420"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M12 40c10 6 14 6 20 0s10-6 20 0"
          fill="none"
          stroke="#E07A3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="26" y="10" width="12" height="7" rx="1.5" fill="#E6B422" />
      </svg>
    </div>
  );
}
