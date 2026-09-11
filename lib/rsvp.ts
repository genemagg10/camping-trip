export const RSVP_STORAGE_KEY = "aol-river-weekend-rsvp";

export type Interest = "in" | "maybe" | "out";

export type RsvpRecord = {
  family: string;
  scouts: number;
  adults: number;
  notes: string;
  interest: Interest;
  savedAt: string;
};

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

export function subscribeRsvp(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function emptyRsvp(): RsvpRecord {
  return {
    family: "",
    scouts: 1,
    adults: 1,
    notes: "",
    interest: "in",
    savedAt: "",
  };
}

export function readRsvp(): RsvpRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(RSVP_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<RsvpRecord>;
    if (!parsed.family || !parsed.interest) return null;
    return {
      family: String(parsed.family),
      scouts: Number(parsed.scouts) || 1,
      adults: Number(parsed.adults) || 1,
      notes: String(parsed.notes ?? ""),
      interest: parsed.interest,
      savedAt: String(parsed.savedAt ?? ""),
    };
  } catch {
    return null;
  }
}

export function writeRsvp(record: RsvpRecord): void {
  window.localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(record));
  emit();
}

export function clearRsvp(): void {
  window.localStorage.removeItem(RSVP_STORAGE_KEY);
  emit();
}
