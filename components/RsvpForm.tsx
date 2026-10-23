"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Campfire } from "@/components/Campfire";
import { campout, emptyTally, parseTally, type Attending, type RsvpTally, type Tent } from "@/lib/campout";
import { draftPayload, emptyDraft, validateDraft, type RsvpDraft, type RsvpField } from "@/lib/rsvp-form";

const attendingChoices: { value: Attending; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "maybe", label: "Maybe" },
  { value: "no", label: "No" },
];

const tentChoices: { value: Tent; label: string }[] = [
  { value: "own", label: "Bringing our own" },
  { value: "share", label: "Want to share" },
  { value: "need", label: "Need one" },
];

function spotsLeft(people: number) {
  return campout.peopleCap - people;
}

export function RsvpForm() {
  const formId = useId();
  const alertRef = useRef<HTMLParagraphElement>(null);
  const [draft, setDraft] = useState<RsvpDraft>(emptyDraft);
  const [errors, setErrors] = useState<Partial<Record<RsvpField, string>>>({});
  const [tally, setTally] = useState<RsvpTally>(emptyTally);
  const [tallyState, setTallyState] = useState<"loading" | "ready" | "error">("loading");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [savedName, setSavedName] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;
    async function load() {
      try {
        const response = await fetch(campout.endpoint, {
          signal: controller.signal,
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        const body: unknown = await response.json().catch(() => null);
        const next = parseTally(body);
        if (cancelled) return;
        if (!response.ok || !next) {
          setTallyState("error");
          return;
        }
        setTally(next);
        setTallyState("ready");
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return;
        setTallyState("error");
      }
    }
    void load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (status === "error" || status === "saved") alertRef.current?.focus();
  }, [status, formError, savedName]);

  useEffect(() => {
    if (!pop) return;
    const timer = window.setTimeout(() => setPop(false), 700);
    return () => window.clearTimeout(timer);
  }, [pop]);

  function setField<K extends keyof RsvpDraft>(key: K, value: RsvpDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!(key in current)) return current;
      const next = { ...current };
      delete next[key as RsvpField];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateDraft(draft);
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFormError("Check the highlighted fields.");
      return;
    }

    setStatus("saving");
    try {
      const response = await fetch(campout.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(draftPayload(draft)),
      });
      const body: unknown = await response.json().catch(() => null);
      const next = parseTally(body);
      if (next) {
        setTally(next);
        setTallyState("ready");
      }
      if (!response.ok) {
        const message =
          body && typeof body === "object" && "error" in body && typeof body.error === "string"
            ? body.error
            : "We could not save that. Try again.";
        setStatus("error");
        setFormError(message);
        return;
      }
      setDuplicate(Boolean(body && typeof body === "object" && "duplicate" in body && body.duplicate));
      setSavedName(draft.familyName.replace(/\s+/g, " ").trim());
      setStatus("saved");
      setPop(true);
    } catch {
      setStatus("error");
      setFormError("We could not reach the list. Nothing was saved.");
    }
  }

  const coming = draft.attending === "yes" || draft.attending === "maybe";
  const over = Math.max(0, tally.yesPeople - campout.peopleCap);
  const extraSites = over === 0 ? 0 : Math.ceil(over / campout.regularSitePeople);
  const bar = Math.min(100, Math.round((tally.yesPeople / campout.peopleCap) * 100));
  const left = spotsLeft(tally.yesPeople);

  return (
    <div className="grid gap-8">
      <div className="grid items-stretch gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <Campfire responses={tallyState === "ready" ? tally.responses : 0} pop={pop} />
        <section className="rounded-2xl border-2 border-ink bg-white p-4 sm:p-5" aria-labelledby={`${formId}-tally`}>
          <h2 id={`${formId}-tally`} className="text-sm font-extrabold tracking-[0.14em] text-ember uppercase">
            Headcount
          </h2>
          <p className="mt-2 text-pretty text-[1.05rem] leading-relaxed" aria-live="polite">
            {tallyState === "loading" && "Checking the headcount."}
            {tallyState === "error" && "The live headcount did not load. You can still send an RSVP."}
            {tallyState === "ready" && tally.yesPeople === 0 && (
              <>No Yes responses yet. The group site holds {campout.peopleCap}.</>
            )}
            {tallyState === "ready" && tally.yesPeople > 0 && over === 0 && (
              <>
                <strong>{tally.yesPeople}</strong> {tally.yesPeople === 1 ? "person" : "people"} marked Yes, out of{" "}
                {campout.peopleCap} on the group site.
                {left > 0 ? ` ${left} ${left === 1 ? "spot" : "spots"} left.` : " The group site is full."}
              </>
            )}
            {tallyState === "ready" && over > 0 && (
              <>
                <strong>{tally.yesPeople}</strong> people marked Yes. That is {over} over the group site. Regular sites
                hold {campout.regularSitePeople}, so that is about {extraSites} more{" "}
                {extraSites === 1 ? "site" : "sites"}.
              </>
            )}
          </p>
          <div
            className="mt-3 h-3 overflow-hidden rounded-full bg-mist"
            role="img"
            aria-label={`${tally.yesPeople} of ${campout.peopleCap} people from Yes responses`}
          >
            <div
              className={`h-full ${over > 0 ? "bg-ember" : "bg-gold"}`}
              style={{ width: `${tallyState === "ready" ? bar : 0}%` }}
            />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="font-bold text-forest uppercase tracking-wide">Yes cars</dt>
              <dd className="text-2xl font-extrabold text-ink">{tallyState === "ready" ? tally.yesCars : "…"}</dd>
            </div>
            <div>
              <dt className="font-bold text-forest uppercase tracking-wide">Yes families</dt>
              <dd className="text-2xl font-extrabold text-ink">{tallyState === "ready" ? tally.yesFamilies : "…"}</dd>
            </div>
          </dl>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/80">
            The group site fits {campout.groupVehicles} cars. Extra cars use the overnight lot.
            {tallyState === "ready" && tally.maybePeople > 0 && (
              <>
                {" "}
                Maybe, not in the {campout.peopleCap}: {tally.maybePeople}{" "}
                {tally.maybePeople === 1 ? "person" : "people"} and {tally.maybeCars}{" "}
                {tally.maybeCars === 1 ? "car" : "cars"}.
              </>
            )}
          </p>
        </section>
      </div>

      <form className="grid gap-5" onSubmit={onSubmit} noValidate>
        <p
          ref={alertRef}
          tabIndex={-1}
          role={status === "error" ? "alert" : "status"}
          className={`rounded-xl px-4 py-3 text-pretty outline-none ${
            status === "error"
              ? "bg-ember/15 font-bold text-ink"
              : status === "saved"
                ? "bg-forest font-bold text-foam"
                : "sr-only"
          }`}
        >
          {status === "saved" && !duplicate && `${savedName} is saved. Gene has it.`}
          {status === "saved" && duplicate && `${savedName} was just saved. Give it a moment before sending another.`}
          {status === "error" && formError}
        </p>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Company
            <input
              tabIndex={-1}
              autoComplete="off"
              value={draft.company}
              onChange={(event) => setField("company", event.target.value)}
            />
          </label>
        </div>

        <Field label="Family name" error={errors.familyName} id={`${formId}-family`}>
          <input
            id={`${formId}-family`}
            className="rsvp-input"
            name="familyName"
            autoComplete="name"
            required
            maxLength={80}
            value={draft.familyName}
            aria-invalid={Boolean(errors.familyName)}
            aria-describedby={errors.familyName ? `${formId}-family-error` : undefined}
            onChange={(event) => setField("familyName", event.target.value)}
          />
        </Field>

        <Field
          label="Contact email"
          hint="Optional. Only Gene sees it."
          error={errors.email}
          id={`${formId}-email`}
        >
          <input
            id={`${formId}-email`}
            className="rsvp-input"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={160}
            value={draft.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={`${formId}-email-hint`}
            onChange={(event) => setField("email", event.target.value)}
          />
        </Field>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-extrabold tracking-wide text-forest uppercase">Attending</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {attendingChoices.map((choice) => (
              <label key={choice.value} className="rsvp-choice">
                <input
                  type="radio"
                  name="attending"
                  value={choice.value}
                  checked={draft.attending === choice.value}
                  onChange={() => setField("attending", choice.value)}
                />
                {choice.label}
              </label>
            ))}
          </div>
          {errors.attending && <p className="text-sm font-bold text-ember">{errors.attending}</p>}
        </fieldset>

        {draft.attending === "no" && (
          <p className="rounded-xl bg-mist px-4 py-3 text-pretty text-sm leading-relaxed">
            A No does not count toward the {campout.peopleCap}. You can still leave a note.
          </p>
        )}

        {coming && (
          <>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Adults" error={errors.adults} id={`${formId}-adults`}>
                <input
                  id={`${formId}-adults`}
                  className="rsvp-input"
                  inputMode="numeric"
                  min={0}
                  max={20}
                  value={draft.adults}
                  aria-invalid={Boolean(errors.adults)}
                  onChange={(event) => setField("adults", event.target.value)}
                  onWheel={(event) => event.currentTarget.blur()}
                />
              </Field>
              <Field label="Kids" error={errors.kids} id={`${formId}-kids`}>
                <input
                  id={`${formId}-kids`}
                  className="rsvp-input"
                  inputMode="numeric"
                  min={0}
                  max={30}
                  value={draft.kids}
                  aria-invalid={Boolean(errors.kids)}
                  onChange={(event) => setField("kids", event.target.value)}
                  onWheel={(event) => event.currentTarget.blur()}
                />
              </Field>
              <Field label="Cars" error={errors.cars} id={`${formId}-cars`} hint="0 if you are carpooling.">
                <input
                  id={`${formId}-cars`}
                  className="rsvp-input"
                  inputMode="numeric"
                  min={0}
                  max={10}
                  value={draft.cars}
                  aria-invalid={Boolean(errors.cars)}
                  aria-describedby={`${formId}-cars-hint`}
                  onChange={(event) => setField("cars", event.target.value)}
                  onWheel={(event) => event.currentTarget.blur()}
                />
              </Field>
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-sm font-extrabold tracking-wide text-forest uppercase">Tent</legend>
              <div className="grid gap-2">
                {tentChoices.map((choice) => (
                  <label key={choice.value} className="rsvp-choice">
                    <input
                      type="radio"
                      name="tent"
                      value={choice.value}
                      checked={draft.tent === choice.value}
                      onChange={() => setField("tent", choice.value)}
                    />
                    {choice.label}
                  </label>
                ))}
              </div>
              {errors.tent && <p className="text-sm font-bold text-ember">{errors.tent}</p>}
            </fieldset>
          </>
        )}

        <Field
          label="Notes"
          hint="Dietary needs welcome. Say so if anyone needs celiac-safe food."
          error={errors.notes}
          id={`${formId}-notes`}
        >
          <textarea
            id={`${formId}-notes`}
            className="rsvp-input min-h-28 resize-y"
            maxLength={1000}
            value={draft.notes}
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={`${formId}-notes-hint`}
            onChange={(event) => setField("notes", event.target.value)}
          />
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink bg-gold px-6 text-base font-extrabold text-ink shadow-[3px_3px_0_var(--ink)] disabled:opacity-60"
            disabled={status === "saving"}
          >
            {status === "saving" ? "Saving…" : "Send RSVP"}
          </button>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-ink/75">
            Plans change? Send it again. Gene keeps the latest response from your family.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-extrabold tracking-wide text-forest uppercase">
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-ink/70">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-bold text-ember">
          {error}
        </p>
      )}
    </div>
  );
}
