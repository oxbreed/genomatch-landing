'use server'

import { createClient } from '@supabase/supabase-js'

export async function joinWaitlist(email: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: email.toLowerCase().trim() })

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
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error } = await supabase
    .from('partner_enquiries')
    .insert({
      organisation: organisation.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim()
    })

  if (error) {
    return { success: false, message: 'Something went wrong. Please try again or email us directly at hello@genomatch.app' }
  }

  return { success: true, message: 'Thank you for reaching out. We will be in touch within 48 hours.' }
}
