import { AchievementStamp } from "@/components/AchievementStamp";
import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/copy";

const beats = [copy.patch.lesson, copy.patch.award, copy.patch.river] as const;

export function PatchBeat() {
  return (
    <section id="patch" className="patch-beat">
      <Reveal className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:gap-8 sm:px-6">
        <AchievementStamp size="lg" />
        <div className="min-w-0">
          <p className="patch-kicker">{copy.patch.kicker}</p>
          <h2 className="patch-title mt-1 font-bold tracking-wide text-river uppercase">
            {copy.patch.title}
          </h2>
          <ul className="mt-4 grid gap-2 text-[1.08rem] leading-snug">
            {beats.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gold" />
                <span className="min-w-0 text-pretty">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-pretty text-ink/65">
            {copy.patch.honest}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
