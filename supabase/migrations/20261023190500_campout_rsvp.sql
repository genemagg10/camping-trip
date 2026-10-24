-- Applied to the Lafayette Pulse project (kcrhxkebazpospwljpit).
-- Do not run this twice. It documents the live schema.
--
-- campout_rsvps holds family RSVPs. The campout-rsvp edge function is the
-- only writer. Anon and authenticated have no grants. RLS is on and forced,
-- with no policies, so the Data API cannot read or write the rows.
-- Gene reads names, emails, and notes in the Supabase table editor.
-- campout_rsvp_tally is people and cars only.

create table public.campout_rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  family_name text not null,
  contact_email text,
  attending text not null,
  adults smallint not null,
  kids smallint not null,
  cars smallint not null,
  tent text,
  notes text,
  constraint campout_rsvps_family_name_check
    check (char_length(btrim(family_name)) between 1 and 80),
  constraint campout_rsvps_email_check
    check (
      contact_email is null
      or (
        char_length(contact_email) between 3 and 160
        and contact_email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
      )
    ),
  constraint campout_rsvps_attending_check
    check (attending in ('yes', 'maybe', 'no')),
  constraint campout_rsvps_counts_check
    check (
      adults between 0 and 20
      and kids between 0 and 30
      and cars between 0 and 10
    ),
  constraint campout_rsvps_party_check
    check (
      (
        attending = 'no'
        and adults = 0
        and kids = 0
        and cars = 0
        and tent is null
      )
      or (
        attending in ('yes', 'maybe')
        and (adults + kids) between 1 and 40
        and tent in ('own', 'share', 'need')
      )
    ),
  constraint campout_rsvps_notes_check
    check (notes is null or char_length(notes) <= 1000)
);

comment on table public.campout_rsvps is
  'Arrow of Light den RSVPs for Pinnacles Campground group site 127, Fri Apr 30 to Sun May 2 2027. Inserts come only from the campout-rsvp edge function. Read them in the table editor. Do not grant this table to anon.';

comment on column public.campout_rsvps.contact_email is
  'Optional family contact. Not included in the public tally.';

comment on column public.campout_rsvps.notes is
  'Free text such as dietary needs (including celiac-safe food). Not included in the public tally.';

comment on column public.campout_rsvps.tent is
  'own = bringing a tent, share = wants to share, need = needs one. Null when attending is no.';

alter table public.campout_rsvps enable row level security;
alter table public.campout_rsvps force row level security;

revoke all on table public.campout_rsvps from public, anon, authenticated;
grant insert, select on table public.campout_rsvps to service_role;
revoke update, delete, truncate, references, trigger on table public.campout_rsvps from service_role;

create index campout_rsvps_created_at_idx
  on public.campout_rsvps (created_at desc);

create view public.campout_rsvp_tally
with (security_invoker = true) as
select
  count(*)::integer as responses,
  count(*) filter (where attending = 'yes')::integer as yes_families,
  count(*) filter (where attending = 'maybe')::integer as maybe_families,
  count(*) filter (where attending = 'no')::integer as no_families,
  coalesce(sum(adults + kids) filter (where attending = 'yes'), 0)::integer as yes_people,
  coalesce(sum(adults) filter (where attending = 'yes'), 0)::integer as yes_adults,
  coalesce(sum(kids) filter (where attending = 'yes'), 0)::integer as yes_kids,
  coalesce(sum(cars) filter (where attending = 'yes'), 0)::integer as yes_cars,
  coalesce(sum(adults + kids) filter (where attending = 'maybe'), 0)::integer as maybe_people,
  coalesce(sum(cars) filter (where attending = 'maybe'), 0)::integer as maybe_cars
from public.campout_rsvps;

comment on view public.campout_rsvp_tally is
  'Headcount only: people and cars. No names, emails, or notes. security_invoker is on. The public site reads it through the campout-rsvp function as service_role.';

revoke all on table public.campout_rsvp_tally from public, anon, authenticated;
grant select on table public.campout_rsvp_tally to service_role;

create view public.campout_rsvps_latest
with (security_invoker = true) as
select distinct on (lower(btrim(family_name)))
  id,
  created_at,
  family_name,
  contact_email,
  attending,
  adults,
  kids,
  cars,
  tent,
  notes
from public.campout_rsvps
order by lower(btrim(family_name)), created_at desc;

comment on view public.campout_rsvps_latest is
  'Latest RSVP per family name, for the table editor. Includes contact email and notes. Not granted to anon, authenticated, or service_role.';

revoke all on table public.campout_rsvps_latest from public, anon, authenticated, service_role;
