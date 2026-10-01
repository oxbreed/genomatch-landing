import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Reset password',
  description: 'Set a new password for your GenoMatch account.',
  path: '/reset-password',
  noIndex: true,
})

export default function ResetPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
