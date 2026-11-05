import Link from "next/link";
import { GoalCard } from "@/components/GoalCard";
import { ScheduleIconMark } from "@/components/ScheduleIcons";
import {
  beforeWeLeave,
  bookingFacts,
  campoutJobs,
  days,
  notThisWeekend,
  planMeta,
  planSources,
  rank,
  rules,
  weave,
} from "@/lib/plan";
import { ExtLink } from "@/components/ExtLink";

export function CampoutPlan() {
  return (
    <div className="option-inner">
      <p className="max-w-3xl text-[1.05rem] leading-relaxed text-pretty">{planMeta.lede}</p>
      <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-pretty">{planMeta.statusNote}</p>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {bookingFacts.map((fact) => (
          <div key={fact.label} className="logistics-card rounded-2xl bg-white p-4">
            <dt className="text-xs font-extrabold tracking-[0.12em] text-river uppercase">{fact.label}</dt>
            <dd className="mt-1 text-[1.02rem] leading-relaxed text-pretty">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section id="goals" className="scroll-mt-4 mt-12">
        <h2 className="text-3xl font-bold tracking-wide text-river text-pretty">Goals</h2>
        <aside className="rule-aside mt-4 max-w-3xl">
          <h3 className="text-sm font-extrabold tracking-[0.14em] text-ember uppercase">{rank.title}</h3>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty">{rank.body}</p>
        </aside>

        <h3 className="mt-8 text-lg font-bold tracking-wide text-forest uppercase">
          Use the campout for these, if they are still open
        </h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {campoutJobs.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold tracking-wide text-forest uppercase">Worth weaving in</h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {weave.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold tracking-wide text-forest uppercase">Not this weekend</h3>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed">
          {notThisWeekend.map((item) => (
            <li key={item} className="text-pretty">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="weekend" className="scroll-mt-4 mt-12">
        <h2 className="text-3xl font-bold tracking-wide text-river text-pretty">Weekend plan</h2>
        <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-pretty">
          Group site #127, tent site #130, Friday through Sunday. Meals the Scouts cook are celiac-safe. The
          afternoon on Saturday is one skill block, not three.
        </p>
        <div className="mt-6 grid gap-6">
          {days.map((day) => (
            <article key={day.id} className="schedule-card min-w-0 rounded-2xl bg-white p-4 sm:p-5">
              <h3 className="text-sm font-extrabold tracking-[0.14em] text-river uppercase">
                {day.label} · {day.date}
              </h3>
              <p className="mt-2 max-w-3xl text-[1.02rem] leading-relaxed text-pretty">{day.summary}</p>
              <ol className="schedule-timeline mt-4">
                {day.beats.map((beat) => (
                  <li key={`${day.id}-${beat.title}`} className="schedule-row">
                    <p className="schedule-time">{beat.time}</p>
                    <div className="schedule-rail" aria-hidden="true">
                      <span className="schedule-dot" />
                    </div>
                    <div className="min-w-0">
                      <p className="flex items-start gap-2 font-bold text-pretty">
                        <ScheduleIconMark
                          name={beat.icon}
                          className="mt-0.5 size-4 shrink-0 text-river"
                        />
                        <span>{beat.title}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-pretty text-ink/80">{beat.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section id="before" className="scroll-mt-4 mt-12">
        <h2 className="text-3xl font-bold tracking-wide text-river text-pretty">Before we leave</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed">
          {beforeWeLeave.map((item) => (
            <li key={item} className="text-pretty">
              {item}
            </li>
          ))}
        </ul>
        <aside className="rule-aside mt-6 max-w-3xl">
          <h3 className="text-sm font-extrabold tracking-[0.14em] text-ember uppercase">While we are there</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed">
            {rules.map((item) => (
              <li key={item} className="text-pretty">
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <p className="mt-6">
          <Link href="/rsvp" className="text-link">
            RSVP
          </Link>
          <span> so the headcount is real. Notes are the place for dietary needs.</span>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-extrabold tracking-[0.12em] text-ink/70 uppercase">Sources</h2>
        <ul className="mt-2 flex flex-col gap-1 text-sm">
          {planSources.map((link) => (
            <li key={link.href}>
              <ExtLink href={link.href}>{link.label}</ExtLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
