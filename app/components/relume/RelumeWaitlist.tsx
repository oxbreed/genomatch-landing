'use client'

import { FormEvent, useState } from 'react'
import { Button, Input } from '@relume_io/relume-ui'
import { joinWaitlist } from '../../actions'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function RelumeWaitlist({ inputId = 'waitlist-email' }: { inputId?: string }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setLoading(true)
    try {
      const result = await joinWaitlist(trimmed)
      if (result.success) {
        setMessage(result.message)
        setSubmitted(true)
      } else {
        setError(result.message)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-border-primary bg-background-secondary px-6 py-8 text-center"
      >
        <p className="font-heading text-lg text-text-primary">{message}</p>
        <p className="mt-2 text-sm font-light text-text-secondary">
          We&apos;ll reach out when GenoMatch launches. Thank you for believing in love with intention.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch" noValidate>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <Input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          className="min-h-12 flex-1 rounded-xl font-body sm:min-w-0"
        />
        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={loading}
          aria-busy={loading}
          className="rl-btn-gold min-h-12 w-full shrink-0 rounded-xl font-body sm:w-auto"
        >
          {loading ? 'Joining…' : 'Join the Waitlist'}
        </Button>
      </form>
      {error ? (
        <p className="mt-2 text-sm text-system-error-red" role="alert" aria-live="polite">
          {error}
        </p>
      ) : null}
    </div>
  )
}
