import { NextResponse } from 'next/server'
import { getUserFromRequest } from '@/lib/supabase/request-user'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const user = await getUserFromRequest(request)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) {
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 })
  }

  const authHeader = request.headers.get('authorization') ?? ''
  const supabase = createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data: verification } = await supabase
    .from('user_verifications')
    .select('status, verified_at, last_job_id, updated_at')
    .eq('user_id', user.id)
    .maybeSingle()

  const { data: latestJob } = await supabase
    .from('verification_jobs')
    .select('job_id, status, result_code, result_text, created_at, updated_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  return NextResponse.json({
    status: verification?.status ?? 'none',
    verifiedAt: verification?.verified_at ?? null,
    lastJobId: verification?.last_job_id ?? null,
    latestJob: latestJob ?? null,
  })
}
