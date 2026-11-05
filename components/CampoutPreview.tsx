import Link from "next/link";
import { GoalCard } from "@/components/GoalCard";
import { bookingFacts, campoutJobs, days, planMeta, rank } from "@/lib/plan";

export function CampoutPreview() {
  return (
    <section id="campout-plan" className="scroll-mt-4 border-t-4 border-gold">
      <div className="option-inner">
        <p className="text-xs font-extrabold tracking-[0.14em] text-ember uppercase">{planMeta.kicker}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-wide text-river text-pretty sm:text-4xl">
          {planMeta.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-pretty">{planMeta.lede}</p>
        <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-pretty">{planMeta.statusNote}</p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {bookingFacts.map((fact) => (
            <div key={fact.label} className="logistics-card rounded-2xl bg-white p-4">
              <dt className="text-xs font-extrabold tracking-[0.12em] text-river uppercase">{fact.label}</dt>
              <dd className="mt-1 text-[1.02rem] leading-relaxed text-pretty">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <aside className="rule-aside mt-6 max-w-3xl">
          <h3 className="text-sm font-extrabold tracking-[0.14em] text-ember uppercase">{rank.title}</h3>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty">{rank.body}</p>
        </aside>

        <h3 className="mt-8 text-lg font-bold tracking-wide text-forest uppercase">
          Use the campout for these, if they are still open
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {campoutJobs.map((goal) => (
            <GoalCard key={goal.id} goal={goal} compact />
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold tracking-wide text-forest uppercase">The weekend</h3>
        <ol className="mt-4 grid gap-4 lg:grid-cols-3">
          {days.map((day) => (
            <li key={day.id} className="schedule-card min-w-0 rounded-2xl bg-white p-4">
              <p className="text-xs font-extrabold tracking-[0.14em] text-river uppercase">
                {day.label} · {day.date}
              </p>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty">{day.summary}</p>
            </li>
          ))}
        </ol>

        <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-pretty">
          Not this weekend: Duty to God, the parent guide, the Protect Yourself Rules video, the 14-day fitness
          log, or a pile of extra electives.
        </p>
        <p className="mt-4">
          <Link
            href="/plan"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 font-extrabold text-ink"
          >
            Read the full plan
          </Link>
        </p>
      </div>
    </section>
  );
}
