"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "section" | "article" | "li";
  id?: string;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-in");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      show();
      return;
    }
    /* Tall phone sections never fill 16% of the viewport. Any overlap counts.
       If the observer never fires, the timeout still shows the section. */
    const timer = window.setTimeout(show, 1200);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          window.clearTimeout(timer);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const delayClass =
    delay === 1
      ? "reveal-delay-1"
      : delay === 2
        ? "reveal-delay-2"
        : delay === 3
          ? "reveal-delay-3"
          : "";

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
