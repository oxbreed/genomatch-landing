export type SmileIdEnvironment = 'sandbox' | 'production'

export function getSmileIdConfig() {
  const partnerId = process.env.SMILE_ID_PARTNER_ID
  const apiKey = process.env.SMILE_ID_API_KEY
  const environment = (process.env.SMILE_ID_ENV ?? 'sandbox') as SmileIdEnvironment

  if (!partnerId || !apiKey) return null

  return {
    partnerId,
    apiKey,
    environment,
    isSandbox: environment !== 'production',
  }
}

export function getSmileIdCallbackUrl(): string {
  if (process.env.SMILE_ID_CALLBACK_URL) {
    return process.env.SMILE_ID_CALLBACK_URL
  }
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://genomatch.app'
  return `${base.replace(/\/$/, '')}/api/verification/smile-id/callback`
}

/** Smile ID production callback IPs — https://docs.usesmileid.com */
export const SMILE_ID_CALLBACK_IPS: Record<SmileIdEnvironment, string[]> = {
  sandbox: ['13.48.228.158', '16.170.104.93', '54.246.37.255', '99.81.237.141'],
  production: ['13.51.0.119', '34.240.137.52', '51.20.27.3', '52.213.46.74'],
}

export function isSmileIdCallbackIp(ip: string, environment: SmileIdEnvironment): boolean {
  return SMILE_ID_CALLBACK_IPS[environment].includes(ip)
}
