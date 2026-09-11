"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ScheduleIconMark } from "@/components/ScheduleIcons";
import { activities, activitiesIntro, days, type DayId } from "@/lib/copy";

export function Weekend() {
  const [active, setActive] = useState<DayId>("fri");
  const baseId = useId();
  const day = days.find((item) => item.id === active) ?? days[0];

  return (
    <section id="weekend" className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <h2 className="text-xl font-bold tracking-wide text-river uppercase">
          The weekend
        </h2>
        <p className="mt-1 text-sm text-ink/65">
          Soft-hold times. Nothing is booked until the den says go.
        </p>
      </Reveal>

      <div
        role="tablist"
        aria-label="Weekend days"
        className="mt-5 flex flex-wrap gap-2"
      >
        {days.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                  return;
                }
                event.preventDefault();
                const index = days.findIndex((entry) => entry.id === active);
                const next =
                  event.key === "ArrowRight"
                    ? days[(index + 1) % days.length]
                    : days[(index - 1 + days.length) % days.length];
                setActive(next.id);
                const nextTab = event.currentTarget.parentElement?.querySelector(
                  `#${CSS.escape(`${baseId}-tab-${next.id}`)}`,
                );
                if (nextTab instanceof HTMLButtonElement) nextTab.focus();
              }}
              className={`day-tab ${selected ? "is-active" : ""}`}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
        <Reveal className="min-w-0">
          <article
            role="tabpanel"
            id={`${baseId}-panel-${day.id}`}
            aria-labelledby={`${baseId}-tab-${day.id}`}
            className="schedule-card min-w-0 rounded-2xl bg-white px-5 py-6 sm:px-6"
          >
            <header>
              <h3 className="text-sm font-bold tracking-[0.14em] text-river uppercase">
                {day.heading}
              </h3>
              <p className="mt-1 text-sm text-ink/55">{day.subtitle}</p>
            </header>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-pretty text-ink/85">
              {day.intro}
            </p>
            <ol className="schedule-timeline mt-6">
              {day.rows.map((row) => (
                <li key={`${day.id}-${row.time}-${row.title}`} className="schedule-row">
                  <p className="schedule-time">{row.time}</p>
                  <div className="schedule-rail" aria-hidden>
                    <span className="schedule-dot" />
                  </div>
                  <div className="min-w-0">
                    <p className="flex min-w-0 items-start gap-2 font-semibold leading-snug text-ink">
                      <ScheduleIconMark
                        name={row.icon}
                        className="mt-0.5 size-4 shrink-0 text-river"
                      />
                      <span className="min-w-0 text-pretty">{row.title}</span>
                    </p>
                    {row.place ? (
                      <p className="mt-0.5 pl-6 text-sm text-ink/55">{row.place}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <Reveal className="min-w-0 sm:col-span-2">
            <p className="text-[0.98rem] leading-relaxed text-pretty text-ink/70">
              {activitiesIntro}
            </p>
          </Reveal>
          {activities.map((card, index) => (
            <Reveal
              key={card.title}
              delay={(Math.min(index, 3) as 0 | 1 | 2 | 3)}
              as="article"
              className="activity-card min-w-0 rounded-xl bg-white px-4 py-4"
            >
              <h3 className="text-[1.05rem] font-bold leading-snug text-pretty text-ink">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-ink/55">{card.when}</p>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-pretty text-ink/80">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
