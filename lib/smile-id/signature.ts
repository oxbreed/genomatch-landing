import { createHmac, timingSafeEqual } from 'crypto'

const SID_REQUEST = 'sid_request'

/** ISO-8601 timestamp for Smile ID requests. */
export function smileTimestamp(date = new Date()): string {
  return date.toISOString()
}

/** HMAC-SHA256 signature: timestamp + partnerId + "sid_request", base64-encoded. */
export function generateSmileSignature(
  partnerId: string,
  apiKey: string,
  timestamp: string
): string {
  const hmac = createHmac('sha256', apiKey)
  hmac.update(timestamp)
  hmac.update(partnerId)
  hmac.update(SID_REQUEST)
  return hmac.digest('base64')
}

export function confirmSmileSignature(
  partnerId: string,
  apiKey: string,
  timestamp: string,
  receivedSignature: string
): boolean {
  const expected = generateSmileSignature(partnerId, apiKey, timestamp)
  const a = Buffer.from(expected)
  const b = Buffer.from(receivedSignature)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}
