import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2";

/* Public RSVP endpoint for the static campout page.
   Visitors are not signed in, so verify_jwt is off.
   The project API key stays in this function's environment.
   This file may only read public.campout_rsvp_tally and
   insert into public.campout_rsvps. Do not query other tables.
   Responses never include names, emails, or notes. */

const MAX_BODY = 8 * 1024;
const HOUR_CAP = 40;
const TOTAL_CAP = 500;
const DEDUPE_MS = 20_000;
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Cache-Control": "no-store",
};

type Attending = "yes" | "maybe" | "no";
type Tent = "own" | "share" | "need";

type Tally = {
  responses: number;
  yes_families: number;
  maybe_families: number;
  no_families: number;
  yes_people: number;
  yes_adults: number;
  yes_kids: number;
  yes_cars: number;
  maybe_people: number;
  maybe_cars: number;
};

type Row = {
  family_name: string;
  contact_email: string | null;
  attending: Attending;
  adults: number;
  kids: number;
  cars: number;
  tent: Tent | null;
  notes: string | null;
};

function json(status: number, body: unknown): Response {
  const headers = new Headers(CORS);
  if (body === null) return new Response(null, { status, headers });
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { status, headers });
}

function admin(): SupabaseClient {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) throw new Error("missing function env");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function emptyTally(): Tally {
  return {
    responses: 0,
    yes_families: 0,
    maybe_families: 0,
    no_families: 0,
    yes_people: 0,
    yes_adults: 0,
    yes_kids: 0,
    yes_cars: 0,
    maybe_people: 0,
    maybe_cars: 0,
  };
}

function asCount(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function tallyFrom(row: Record<string, unknown> | null): Tally {
  if (!row) return emptyTally();
  return {
    responses: asCount(row.responses),
    yes_families: asCount(row.yes_families),
    maybe_families: asCount(row.maybe_families),
    no_families: asCount(row.no_families),
    yes_people: asCount(row.yes_people),
    yes_adults: asCount(row.yes_adults),
    yes_kids: asCount(row.yes_kids),
    yes_cars: asCount(row.yes_cars),
    maybe_people: asCount(row.maybe_people),
    maybe_cars: asCount(row.maybe_cars),
  };
}

async function readTally(db: SupabaseClient): Promise<Tally> {
  const { data, error } = await db.from("campout_rsvp_tally").select("*");
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : null;
  return tallyFrom(row ?? null);
}

function asObject(body: unknown): Record<string, unknown> | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  return body as Record<string, unknown>;
}

function honeypotFilled(input: Record<string, unknown>): boolean {
  const trap = input.company ?? input._gotcha;
  return String(trap ?? "").trim().length > 0;
}

function cleanName(raw: unknown): string | null {
  const value = String(raw ?? "").replace(/\s+/g, " ").trim();
  if (value.length < 1 || value.length > 80) return null;
  return value;
}

function cleanEmail(raw: unknown): { ok: true; value: string | null } | { ok: false } {
  const value = String(raw ?? "").trim();
  if (!value) return { ok: true, value: null };
  if (value.length > 160 || !EMAIL.test(value)) return { ok: false };
  return { ok: true, value: value.toLowerCase() };
}

function cleanCount(raw: unknown, max: number): number | null {
  if (typeof raw === "number" && Number.isInteger(raw) && raw >= 0 && raw <= max) {
    return raw;
  }
  if (typeof raw === "string" && /^\d+$/.test(raw.trim())) {
    const n = Number(raw.trim());
    if (n <= max) return n;
  }
  return null;
}

function cleanNotes(raw: unknown): string | null | "too-long" {
  const value = String(raw ?? "").replace(/\r\n/g, "\n").trim();
  if (!value) return null;
  if (value.length > 1000) return "too-long";
  return value;
}

function parseRow(input: Record<string, unknown>): { row: Row } | { error: string; field: string } {
  const familyName = cleanName(input.familyName ?? input.family_name);
  if (!familyName) {
    return { error: "Add a family name.", field: "familyName" };
  }

  const email = cleanEmail(input.email ?? input.contact_email);
  if (!email.ok) {
    return { error: "That email does not look right. Leave it blank if you prefer.", field: "email" };
  }

  const attending = String(input.attending ?? "");
  if (attending !== "yes" && attending !== "maybe" && attending !== "no") {
    return { error: "Choose Yes, Maybe, or No.", field: "attending" };
  }

  const notes = cleanNotes(input.notes);
  if (notes === "too-long") {
    return { error: "Keep the note under 1000 characters.", field: "notes" };
  }

  if (attending === "no") {
    return {
      row: {
        family_name: familyName,
        contact_email: email.value,
        attending,
        adults: 0,
        kids: 0,
        cars: 0,
        tent: null,
        notes,
      },
    };
  }

  const adults = cleanCount(input.adults, 20);
  const kids = cleanCount(input.kids, 30);
  const cars = cleanCount(input.cars, 10);
  if (adults === null) return { error: "Enter the number of adults, from 0 to 20.", field: "adults" };
  if (kids === null) return { error: "Enter the number of kids, from 0 to 30.", field: "kids" };
  if (cars === null) return { error: "Enter the number of cars, from 0 to 10.", field: "cars" };
  if (adults + kids < 1 || adults + kids > 40) {
    return { error: "Count at least one person.", field: "adults" };
  }

  const tent = String(input.tent ?? "");
  if (tent !== "own" && tent !== "share" && tent !== "need") {
    return { error: "Tell us about the tent.", field: "tent" };
  }

  return {
    row: {
      family_name: familyName,
      contact_email: email.value,
      attending,
      adults,
      kids,
      cars,
      tent,
      notes,
    },
  };
}

async function countSince(db: SupabaseClient, sinceIso: string, familyName?: string): Promise<number> {
  let query = db
    .from("campout_rsvps")
    .select("id", { count: "exact", head: true })
    .gte("created_at", sinceIso);
  if (familyName) query = query.eq("family_name", familyName);
  const { count, error } = await query;
  if (error) throw error;
  return count ?? 0;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return json(204, null);
  if (req.method !== "GET" && req.method !== "POST") {
    return json(405, { ok: false, error: "Not found." });
  }

  let db: SupabaseClient;
  try {
    db = admin();
  } catch (_err) {
    return json(503, { ok: false, error: "The RSVP list is not connected yet." });
  }

  try {
    if (req.method === "GET") {
      const tally = await readTally(db);
      return json(200, { ok: true, tally });
    }

    const declared = Number(req.headers.get("content-length") || "0");
    if (declared > MAX_BODY) return json(413, { ok: false, error: "That note is too large." });

    const raw = await req.text();
    if (raw.length > MAX_BODY) return json(413, { ok: false, error: "That note is too large." });

    let parsed: unknown = {};
    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch (_err) {
        return json(400, { ok: false, error: "We could not read that RSVP." });
      }
    }

    const input = asObject(parsed);
    if (!input) return json(400, { ok: false, error: "We could not read that RSVP." });

    if (honeypotFilled(input)) {
      const tally = await readTally(db);
      return json(200, { ok: true, tally });
    }

    const result = parseRow(input);
    if ("error" in result) {
      return json(400, { ok: false, error: result.error, field: result.field });
    }

    const recent = new Date(Date.now() - DEDUPE_MS).toISOString();
    const duplicate = await countSince(db, recent, result.row.family_name);
    if (duplicate > 0) {
      const tally = await readTally(db);
      return json(200, { ok: true, duplicate: true, tally });
    }

    const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const recentCount = await countSince(db, hourAgo);
    if (recentCount >= HOUR_CAP) {
      return json(429, {
        ok: false,
        error: "Too many RSVPs just now. Wait a bit and try again.",
      });
    }

    const { count: total, error: totalError } = await db
      .from("campout_rsvps")
      .select("id", { count: "exact", head: true });
    if (totalError) throw totalError;
    if ((total ?? 0) >= TOTAL_CAP) {
      return json(429, {
        ok: false,
        error: "The list is full for now. Tell Gene directly.",
      });
    }

    const { error: insertError } = await db.from("campout_rsvps").insert(result.row);
    if (insertError) {
      console.error("campout insert failed", insertError.code);
      if (insertError.code === "23514") {
        return json(400, { ok: false, error: "Check the form and try again." });
      }
      return json(500, { ok: false, error: "We could not save that. Try again." });
    }

    const tally = await readTally(db);
    return json(200, { ok: true, tally });
  } catch (err) {
    console.error("campout rsvp failed", err instanceof Error ? err.name : "error");
    return json(500, { ok: false, error: "We could not save that. Try again." });
  }
});
