'use server'

import { createClient } from '@supabase/supabase-js'
import { headers } from 'next/headers'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_ORG_LENGTH = 200
const MAX_NAME_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitHits = new Map<string, number[]>()

async function isRateLimited(action: string): Promise<boolean> {
  const requestHeaders = await headers()
  const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const key = `${action}:${ip}`
  const now = Date.now()

  const recent = (rateLimitHits.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  )
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitHits.set(key, recent)
    return true
  }

  recent.push(now)
  // Prevent unbounded growth in long-lived processes
  if (rateLimitHits.size > 10_000) rateLimitHits.clear()
  rateLimitHits.set(key, recent)
  return false
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function joinWaitlist(email: string) {
  const trimmed = email?.trim().toLowerCase() ?? ''
  if (!trimmed || trimmed.length > 254 || !EMAIL_RE.test(trimmed)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  if (await isRateLimited('waitlist')) {
    return { success: false, message: 'Too many attempts. Please try again in a minute.' }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return { success: false, message: 'Service temporarily unavailable. Please try again later.' }
  }

  const { error } = await supabase.from('waitlist').insert({ email: trimmed })

  if (error) {
    if (error.code === '23505') {
      return { success: false, message: 'You are already on the waitlist!' }
    }
    return { success: false, message: 'Something went wrong. Please try again.' }
  }

  return { success: true, message: "You're on the list! We'll be in touch." }
}

export async function submitPartnerEnquiry(
  organisation: string,
  email: string,
  message: string
) {
  const trimmedOrg = organisation?.trim() ?? ''
  const trimmedEmail = email?.trim().toLowerCase() ?? ''
  const trimmedMessage = message?.trim() ?? ''

  if (!trimmedOrg || trimmedOrg.length > MAX_ORG_LENGTH) {
    return { success: false, message: 'Please enter your organisation name.' }
  }
  if (!trimmedEmail || trimmedEmail.length > 254 || !EMAIL_RE.test(trimmedEmail)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }
  if (!trimmedMessage || trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return { success: false, message: 'Please tell us how you would like to partner.' }
  }

  if (await isRateLimited('partner')) {
    return { success: false, message: 'Too many attempts. Please try again in a minute.' }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return {
      success: false,
      message: 'Service temporarily unavailable. Please email us directly at hello@genomatch.app',
    }
  }

  const { error } = await supabase.from('partner_enquiries').insert({
    organisation: trimmedOrg,
    email: trimmedEmail,
    message: trimmedMessage,
  })

  if (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again or email us directly at hello@genomatch.app',
    }
  }

  return { success: true, message: 'Thank you for reaching out. We will be in touch within 48 hours.' }
}

export async function submitContactEnquiry(
  name: string,
  email: string,
  message: string
) {
  const trimmedName = name?.trim() ?? ''
  const trimmedEmail = email?.trim().toLowerCase() ?? ''
  const trimmedMessage = message?.trim() ?? ''

  if (!trimmedName || trimmedName.length > MAX_NAME_LENGTH) {
    return { success: false, message: 'Please enter your name.' }
  }
  if (!trimmedEmail || trimmedEmail.length > 254 || !EMAIL_RE.test(trimmedEmail)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }
  if (!trimmedMessage || trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return { success: false, message: 'Please enter a message.' }
  }

  if (await isRateLimited('contact')) {
    return { success: false, message: 'Too many attempts. Please try again in a minute.' }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return {
      success: false,
      message: 'Service temporarily unavailable. Please email us directly at hello@genomatch.app',
    }
  }

  const { error } = await supabase.from('contact_enquiries').insert({
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
  })

  if (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again or email us directly at hello@genomatch.app',
    }
  }

  return { success: true, message: 'Thank you for getting in touch. We will reply within 48 hours.' }
}
