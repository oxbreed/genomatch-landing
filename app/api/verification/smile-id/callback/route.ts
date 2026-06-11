import { NextResponse } from 'next/server'
import {
  getSmileIdConfig,
  isSmileIdCallbackIp,
} from '@/lib/smile-id/config'
import {
  parseSmileCallback,
  type SmileCallbackPayload,
} from '@/lib/smile-id/parse-callback'
import { confirmSmileSignature } from '@/lib/smile-id/signature'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  const smile = getSmileIdConfig()
  if (!smile) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }

  if (process.env.SMILE_ID_SKIP_IP_CHECK !== 'true') {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      ''
    if (ip && !isSmileIdCallbackIp(ip, smile.environment)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  let payload: SmileCallbackPayload
  try {
    payload = (await request.json()) as SmileCallbackPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { timestamp, signature } = payload
  if (!timestamp || !signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  if (!confirmSmileSignature(smile.partnerId, smile.apiKey, timestamp, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const jobId = payload.PartnerParams?.job_id
  const userId = payload.PartnerParams?.user_id
  const jobType = Number(payload.PartnerParams?.job_type)
  if (!jobId || !userId) {
    return NextResponse.json({ error: 'Missing partner params' }, { status: 400 })
  }

  // Reject ID-based Smile ID products (KYC, document verify, etc.) — selfie-only policy.
  if (jobType !== 4) {
    return NextResponse.json({ error: 'Unsupported job type' }, { status: 400 })
  }

  const admin = getSupabaseAdmin()
  if (!admin) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }

  const { data: job, error: jobLookupError } = await admin
    .from('verification_jobs')
    .select('id, user_id, status')
    .eq('job_id', jobId)
    .maybeSingle()

  if (jobLookupError || !job) {
    return NextResponse.json({ error: 'Unknown job' }, { status: 404 })
  }

  if (job.user_id !== userId) {
    return NextResponse.json({ error: 'User mismatch' }, { status: 400 })
  }

  const parsed = parseSmileCallback(payload)

  const { error: updateJobError } = await admin
    .from('verification_jobs')
    .update({
      smile_job_id: payload.SmileJobID ?? null,
      status: parsed.decision === 'pending' ? 'pending' : parsed.decision,
      result_code: payload.ResultCode ?? null,
      result_text: payload.ResultText ?? null,
      liveness_passed: parsed.livenessPassed,
      selfie_passed: parsed.selfiePassed,
      confidence: parsed.confidence,
      raw_result: payload,
    })
    .eq('job_id', jobId)

  if (updateJobError) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }

  const verificationUpdate: Record<string, unknown> = {
    user_id: userId,
    provider: 'smile_id',
    smile_user_id: userId,
    last_job_id: jobId,
    status: parsed.decision === 'pending' ? 'pending' : parsed.decision,
  }

  if (parsed.decision === 'verified') {
    verificationUpdate.verified_at = new Date().toISOString()
  }

  const { error: updateUserError } = await admin
    .from('user_verifications')
    .upsert(verificationUpdate, { onConflict: 'user_id' })

  if (updateUserError) {
    return NextResponse.json({ error: 'Profile update failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, decision: parsed.decision })
}
