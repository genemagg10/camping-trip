import { Reveal } from "@/components/Reveal";
import { trip } from "@/lib/trip";

const days = [
  { day: "Fri", line: "Arrive, tent up, easy dinner." },
  { day: "Sat", line: "Cub rafting patch, then ~14 mi + lunch." },
  { day: "Sun", line: "Breakfast, pack, home." },
] as const;

const fire = [
  "Patch toast",
  "Skits / songs",
  "What stuck",
  "Soft-hold ask",
] as const;

export function LowerThird() {
  return (
    <section className="mx-auto w-full min-w-0 max-w-6xl px-6 py-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <h2 className="text-xs font-bold tracking-[0.16em] text-river uppercase">
            Fri · Sat · Sun
          </h2>
          <ol className="mt-3 grid gap-2">
            {days.map((item) => (
              <li
                key={`${item.day}-${item.line}`}
                className="grid min-w-0 grid-cols-[2.6rem_1fr] items-baseline gap-2"
              >
                <p className="text-sm font-bold tracking-wide text-ember uppercase">
                  {item.day}
                </p>
                <p className="min-w-0 text-[1.02rem] leading-snug text-pretty">
                  {item.line}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs leading-snug text-ink/65">
            Soft hold · ~${trip.scoutDadApprox} Scout + Dad
          </p>
        </Reveal>
        <Reveal delay={2}>
          <h2 className="text-xs font-bold tracking-[0.16em] text-river uppercase">
            Sat night campfire
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {fire.map((item) => (
              <li
                key={item}
                className="max-w-full rounded-full bg-mist px-3 py-1.5 text-sm leading-snug text-pretty"
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
