-- Selfie liveness verification (Smile ID SmartSelfie Registration, job type 4)

create type public.verification_status as enum (
  'none',
  'pending',
  'verified',
  'rejected',
  'review'
);

create table public.verification_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  provider text not null default 'smile_id',
  job_id text not null unique,
  smile_job_id text,
  job_type int not null default 4,
  status public.verification_status not null default 'pending',
  result_code text,
  result_text text,
  liveness_passed boolean,
  selfie_passed boolean,
  confidence numeric,
  raw_result jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index verification_jobs_user_id_idx on public.verification_jobs (user_id, created_at desc);
create index verification_jobs_status_idx on public.verification_jobs (status);

create table public.user_verifications (
  user_id uuid primary key references auth.users (id) on delete cascade,
  status public.verification_status not null default 'none',
  verified_at timestamptz,
  provider text,
  smile_user_id text,
  last_job_id text,
  updated_at timestamptz not null default now()
);

alter table public.verification_jobs enable row level security;
alter table public.user_verifications enable row level security;

-- Users can read their own verification state. Writes go through the service role API.
create policy "Users read own verification jobs"
  on public.verification_jobs
  for select
  using (auth.uid() = user_id);

create policy "Users read own verification"
  on public.user_verifications
  for select
  using (auth.uid() = user_id);

create or replace function public.set_verification_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger verification_jobs_updated_at
  before update on public.verification_jobs
  for each row execute function public.set_verification_updated_at();

create trigger user_verifications_updated_at
  before update on public.user_verifications
  for each row execute function public.set_verification_updated_at();
