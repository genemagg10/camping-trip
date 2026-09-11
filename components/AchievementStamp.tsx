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
      className="achieve-stamp inline-flex size-16 shrink-0 flex-col items-center justify-center rounded-full bg-gold text-ink shadow-[0_4px_0_color-mix(in_srgb,var(--patch-gold)_70%,var(--ink))]"
      role="img"
      aria-label="Cub Scout rafting patch — they certify and award it. This paddle mark is den-made, not a BSA emblem."
    >
      <svg viewBox="0 0 64 64" className="size-9" aria-hidden>
        <path
          d="M20 44 L32 12 L44 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 34c10 7 12 7 18 0s8-7 18 0"
          fill="none"
          stroke="var(--forest)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <rect x="26" y="8" width="12" height="8" rx="2" fill="var(--ink)" />
      </svg>
      <span className="font-display text-[0.55rem] tracking-[0.08em] uppercase">
        Earn!
      </span>
    </div>
  );
}
