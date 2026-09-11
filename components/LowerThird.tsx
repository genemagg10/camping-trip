import { Reveal } from "@/components/Reveal";
import { trip } from "@/lib/trip";

const days = [
  {
    day: "Fri",
    date: "Apr 23",
    line: "Arrive the private camp in Lotus. Tent up. Easy dinner (own gear / food).",
  },
  {
    day: "Sat",
    date: "Apr 24",
    line: "Sat 9am Cub Scout rafting patch lesson — they certify it — then ~14 miles + lunch.",
  },
  {
    day: "Sun",
    date: "Apr 25",
    line: "Breakfast, pack, home.",
  },
] as const;

const fire = [
  "Celebrate the river day",
  "Den skits or songs",
  "What was hard, what was fun, who’s next",
  "Soft ask: who’s in (interest only)",
] as const;

export function LowerThird() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
            The weekend
          </h2>
          <ol className="mt-4 grid gap-3">
            {days.map((item) => (
              <li
                key={item.day}
                className="grid grid-cols-[3.4rem_1fr] gap-3 border-l-2 border-mist pl-3"
              >
                <p className="font-display text-lg font-bold tracking-wide text-forest uppercase">
                  {item.day}
                  <span className="mt-0.5 block text-[0.7rem] font-semibold text-ink/60">
                    {item.date}
                  </span>
                </p>
                <p className="pt-0.5 text-[1.02rem] leading-snug">{item.line}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-ink/70">
            Camp ${trip.campPerPersonNight}/person/night × {trip.campNights} ·
            Scout raft ${trip.scoutRaft} · adult ${trip.adultRaft} ·{" "}
            {trip.mealsNote}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
            Sat night campfire
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {fire.map((item) => (
              <li
                key={item}
                className="rounded-full bg-mist px-3 py-2 text-sm leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
