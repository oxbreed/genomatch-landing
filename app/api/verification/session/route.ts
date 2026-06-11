import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { getSmileIdCallbackUrl, getSmileIdConfig } from '@/lib/smile-id/config'
import { generateSmileSignature, smileTimestamp } from '@/lib/smile-id/signature'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { getUserFromRequest } from '@/lib/supabase/request-user'

/** SmartSelfie Registration only — selfie + liveness, no government ID (job type 4). */
const JOB_TYPE = 4

export async function POST(request: Request) {
  const user = await getUserFromRequest(request)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const smile = getSmileIdConfig()
  if (!smile) {
    return NextResponse.json(
      { error: 'Verification service is not configured.' },
      { status: 503 }
    )
  }

  const admin = getSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      { error: 'Verification service is not configured.' },
      { status: 503 }
    )
  }

  const { data: existing } = await admin
    .from('user_verifications')
    .select('status, last_job_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (existing?.status === 'verified') {
    return NextResponse.json({ error: 'Already verified.' }, { status: 409 })
  }

  // Reuse a recent pending job so the mobile SDK can retry without duplicate enrollments.
  if (existing?.last_job_id && existing.status === 'pending') {
    const { data: pendingJob } = await admin
      .from('verification_jobs')
      .select('job_id, created_at')
      .eq('job_id', existing.last_job_id)
      .eq('status', 'pending')
      .maybeSingle()

    if (pendingJob) {
      const ageMs = Date.now() - new Date(pendingJob.created_at).getTime()
      if (ageMs < 30 * 60 * 1000) {
        const timestamp = smileTimestamp()
        const signature = generateSmileSignature(smile.partnerId, smile.apiKey, timestamp)
        return NextResponse.json({
          provider: 'smile_id',
          environment: smile.environment,
          partnerId: smile.partnerId,
          jobType: JOB_TYPE,
          jobId: pendingJob.job_id,
          userId: user.id,
          timestamp,
          signature,
          callbackUrl: getSmileIdCallbackUrl(),
          partnerParams: {
            job_type: JOB_TYPE,
            job_id: pendingJob.job_id,
            user_id: user.id,
          },
          reused: true,
        })
      }
    }
  }

  const jobId = randomUUID()
  const timestamp = smileTimestamp()
  const signature = generateSmileSignature(smile.partnerId, smile.apiKey, timestamp)

  const { error: jobError } = await admin.from('verification_jobs').insert({
    user_id: user.id,
    job_id: jobId,
    job_type: JOB_TYPE,
    status: 'pending',
  })

  if (jobError) {
    return NextResponse.json({ error: 'Could not start verification session.' }, { status: 500 })
  }

  await admin.from('user_verifications').upsert(
    {
      user_id: user.id,
      status: 'pending',
      provider: 'smile_id',
      smile_user_id: user.id,
      last_job_id: jobId,
    },
    { onConflict: 'user_id' }
  )

  return NextResponse.json({
    provider: 'smile_id',
    environment: smile.environment,
    partnerId: smile.partnerId,
    jobType: JOB_TYPE,
    jobId,
    userId: user.id,
    timestamp,
    signature,
    callbackUrl: getSmileIdCallbackUrl(),
    // Mobile SDK: use SmartSelfieEnrollmentEnhanced with these partner params.
    partnerParams: {
      job_type: JOB_TYPE,
      job_id: jobId,
      user_id: user.id,
    },
  })
}
