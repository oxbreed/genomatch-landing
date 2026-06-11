export type VerificationDecision = 'verified' | 'rejected' | 'review' | 'pending'

export type SmileCallbackPayload = {
  ResultCode?: string
  ResultText?: string
  ConfidenceValue?: string
  SmileJobID?: string
  timestamp?: string
  signature?: string
  PartnerParams?: {
    job_id?: string
    job_type?: number | string
    user_id?: string
  }
  Actions?: Record<string, string>
}

const APPROVED_CODES = new Set(['0840', '1240'])
const REJECTED_CODES = new Set(['0841', '0941', '0942', '1241', '1242'])
const REVIEW_CODES = new Set(['0844', '0846'])

export function parseSmileCallback(payload: SmileCallbackPayload): {
  decision: VerificationDecision
  livenessPassed: boolean | null
  selfiePassed: boolean | null
  confidence: number | null
} {
  const code = payload.ResultCode ?? ''
  const actions = payload.Actions ?? {}

  const livenessPassed = actionPassed(actions.Liveness_Check)
  const selfiePassed = actionPassed(actions.Selfie_Check)
  const registerApproved = actions.Register_Selfie === 'Approved'

  const confidence = payload.ConfidenceValue
    ? Number.parseFloat(payload.ConfidenceValue)
    : null

  if (APPROVED_CODES.has(code) || registerApproved) {
    return {
      decision: 'verified',
      livenessPassed,
      selfiePassed,
      confidence: Number.isFinite(confidence) ? confidence : null,
    }
  }

  if (REJECTED_CODES.has(code)) {
    return {
      decision: 'rejected',
      livenessPassed,
      selfiePassed,
      confidence: Number.isFinite(confidence) ? confidence : null,
    }
  }

  if (REVIEW_CODES.has(code) || isUnderReview(actions)) {
    return {
      decision: 'review',
      livenessPassed,
      selfiePassed,
      confidence: Number.isFinite(confidence) ? confidence : null,
    }
  }

  return {
    decision: 'pending',
    livenessPassed,
    selfiePassed,
    confidence: Number.isFinite(confidence) ? confidence : null,
  }
}

function actionPassed(value: string | undefined): boolean | null {
  if (!value || value === 'Not Applicable') return null
  return value === 'Passed' || value === 'Approved'
}

function isUnderReview(actions: Record<string, string>): boolean {
  return Object.values(actions).some((v) => v === 'Under Review')
}
