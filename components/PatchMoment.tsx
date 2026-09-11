"use client";

import { useEffect, useRef } from "react";
import { RaftingPatch } from "@/components/RaftingPatch";
import { Reveal } from "@/components/Reveal";

export function PatchMoment() {
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
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-pine text-cream">
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-paper to-transparent" />
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-4 py-16 sm:grid-cols-[200px_1fr] sm:py-20">
        <div className="mx-auto w-44 sm:w-52">
          <div ref={mark} className="patch-mark">
            <RaftingPatch className="drop-shadow-[0_18px_18px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            The Saturday badge moment
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
            They do not almost earn it. They earn it.
          </h2>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-foam/95">
            Saturday at 9am is the Cub Scout rafting patch lesson. Whitewater
            Excitement certifies it and awards it — the real cloth-on-the-shirt
            kind of win, not a participation sticker we printed in the minivan.
            Then the river becomes the lab: about 14 miles of paddling, plus
            lunch, with the lesson still wet on their sleeves.
          </p>
          <p className="mt-4 text-sm tracking-wide text-gold uppercase">
            Arrow of Light energy · one clear stamp · then we go raft
          </p>
        </Reveal>
      </div>
    </section>
  );
}
