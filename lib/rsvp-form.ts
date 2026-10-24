import type { Attending, Tent } from "@/lib/campout";

export type RsvpField =
  | "familyName"
  | "email"
  | "attending"
  | "adults"
  | "kids"
  | "cars"
  | "tent"
  | "notes";

export type RsvpDraft = {
  familyName: string;
  email: string;
  attending: Attending | "";
  adults: string;
  kids: string;
  cars: string;
  tent: Tent | "";
  notes: string;
  company: string;
};

export const emptyDraft: RsvpDraft = {
  familyName: "",
  email: "",
  attending: "",
  adults: "",
  kids: "",
  cars: "",
  tent: "",
  notes: "",
  company: "",
};

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export type FieldErrors = Partial<Record<RsvpField, string>>;

function count(raw: string, max: number): number | null {
  const value = raw.trim();
  if (!/^\d+$/.test(value)) return null;
  const n = Number(value);
  if (n > max) return null;
  return n;
}

/** Client-side checks. The database constraints are the real backstop. */
export function validateDraft(draft: RsvpDraft): FieldErrors {
  const errors: FieldErrors = {};
  const familyName = draft.familyName.replace(/\s+/g, " ").trim();
  if (familyName.length < 1 || familyName.length > 80) {
    errors.familyName = "Add a family name.";
  }

  const email = draft.email.trim();
  if (email && (email.length > 160 || !EMAIL.test(email))) {
    errors.email = "That email does not look right. Leave it blank if you prefer.";
  }

  if (draft.attending !== "yes" && draft.attending !== "maybe" && draft.attending !== "no") {
    errors.attending = "Choose Yes, Maybe, or No.";
  }

  if (draft.notes.trim().length > 1000) {
    errors.notes = "Keep the note under 1000 characters.";
  }

  if (draft.attending === "yes" || draft.attending === "maybe") {
    const adults = count(draft.adults, 20);
    const kids = count(draft.kids, 30);
    const cars = count(draft.cars, 10);
    if (adults === null) errors.adults = "Enter the number of adults, from 0 to 20.";
    if (kids === null) errors.kids = "Enter the number of kids, from 0 to 30.";
    if (cars === null) errors.cars = "Enter the number of cars, from 0 to 10. Use 0 if you are riding with someone.";
    if (adults !== null && kids !== null && adults + kids < 1) {
      errors.adults = "Count at least one person.";
    }
    if (draft.tent !== "own" && draft.tent !== "share" && draft.tent !== "need") {
      errors.tent = "Tell us about the tent.";
    }
  }

  return errors;
}

export function draftPayload(draft: RsvpDraft) {
  const attending = draft.attending;
  const coming = attending === "yes" || attending === "maybe";
  return {
    familyName: draft.familyName.replace(/\s+/g, " ").trim(),
    email: draft.email.trim(),
    attending,
    adults: coming ? Number(draft.adults) : 0,
    kids: coming ? Number(draft.kids) : 0,
    cars: coming ? Number(draft.cars) : 0,
    tent: coming ? draft.tent : null,
    notes: draft.notes.trim(),
    company: draft.company,
  };
}
