"use client";

import { useEffect, useRef } from "react";

/** Den-made EARN IT word stamp — motion accent only. Not the patch graphic. */
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
      className="achieve-stamp inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-gold text-ink shadow-[0_3px_0_color-mix(in_srgb,var(--patch-gold)_70%,var(--ink))]"
      role="img"
      aria-label="Earn it — den-made word stamp, not the awarded patch."
    >
      <span className="px-1 text-center text-[0.52rem] font-extrabold leading-tight tracking-[0.08em] uppercase">
        Earn it
      </span>
    </div>
  );
}
