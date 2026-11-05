import type { AdventureStatus } from "@/lib/plan";

export function StatusStamp({ status }: { status: AdventureStatus }) {
  const done = status === "done";
  return (
    <span className={done ? "tbd-stamp is-done" : "tbd-stamp"}>
      {done ? "Done" : "TBD"}
    </span>
  );
}
