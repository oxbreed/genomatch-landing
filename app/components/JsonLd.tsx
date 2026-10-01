import { serializeJsonLd } from '@/lib/seo/json-ld'

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/** Server-safe JSON-LD script with `<` escaped for XSS hardening. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
