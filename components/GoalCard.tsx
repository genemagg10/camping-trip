import { StatusStamp } from "@/components/StatusStamp";
import type { PlanGoal } from "@/lib/plan";

export function GoalCard({ goal, compact = false }: { goal: PlanGoal; compact?: boolean }) {
  return (
    <article className="activity-card min-w-0 rounded-2xl bg-white p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="min-w-0 flex-1 text-lg font-bold tracking-wide text-ink text-pretty">
          {goal.title}
        </h3>
        <StatusStamp status={goal.status} />
      </div>
      <p className="mt-1 text-xs font-extrabold tracking-[0.12em] text-river uppercase">{goal.ref}</p>
      <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty text-ink/85">
        {compact ? goal.summary : goal.detail}
      </p>
    </article>
  );
}
