import { trip } from "@/lib/trip";

export function SoftHoldBar() {
  return (
    <p className="sticky top-0 z-40 border-b border-amber/30 bg-gold/90 px-4 py-2 text-center text-[0.92rem] font-semibold tracking-wide text-ink shadow-[0_8px_20px_-16px_rgba(27,36,48,0.6)] backdrop-blur-sm">
      Soft hold only · {trip.dates} · nothing booked · we are just counting hands
    </p>
  );
}
