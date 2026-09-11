import { Reveal } from "@/components/Reveal";
import { trip } from "@/lib/trip";

const days = [
  {
    day: "Fri",
    date: "Apr 23",
    line: "Arrive Whitewater Excitement private camp (Lotus). Tent up. Easy dinner. Settle in.",
  },
  {
    day: "Sat",
    date: "Apr 24",
    line: "Morning Cub Scout rafting patch lesson → ~14 mi South Fork American + lunch on the river. Back to camp.",
  },
  {
    day: "Sat night",
    date: "Apr 24",
    line: "Campfire — goals and activities in the block below.",
  },
  {
    day: "Sun",
    date: "Apr 25",
    line: "Breakfast, pack, home.",
  },
] as const;

const fire = [
  "Celebrate the rafting patch / river day",
  "Den skits or songs — keep it Cub, not corporate",
  "What was hard, what was fun, who’s got next",
  "Who’s in for the soft hold? Interest, not a booking",
] as const;

export function LowerThird() {
  return (
    <section className="mx-auto w-full min-w-0 max-w-6xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
            The weekend
          </h2>
          <ol className="mt-4 grid gap-3">
            {days.map((item) => (
              <li
                key={`${item.day}-${item.date}-${item.line}`}
                className="grid min-w-0 grid-cols-[4.2rem_1fr] gap-3 border-l-2 border-mist pl-3"
              >
                <p className="font-display text-base font-bold tracking-wide text-forest uppercase">
                  {item.day}
                  <span className="mt-0.5 block text-[0.7rem] font-semibold text-ink/60">
                    {item.date}
                  </span>
                </p>
                <p className="min-w-0 pt-0.5 text-[1.02rem] leading-snug text-pretty">
                  {item.line}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-ink/70">
            Soft hold. Own gear / own food for meals. Camp $
            {trip.campPerPersonNight}/person/night × {trip.campNights} · Scout
            raft ${trip.scoutRaft} · adult ${trip.adultRaft} · Scout + Dad ≈ $
            {trip.scoutDadApprox}.
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
                className="max-w-full rounded-full bg-mist px-3 py-2 text-sm leading-snug text-pretty"
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
