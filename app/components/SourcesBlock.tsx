import { getSources, type HealthSourceId } from '@/lib/scd-facts'
import { BODY, FOREST, GOLD, TEXT_SOFT } from '../theme'

type SourcesBlockProps = {
  sourceIds: readonly HealthSourceId[]
  title?: string
  note?: string
}

export default function SourcesBlock({
  sourceIds,
  title = 'Sources',
  note,
}: SourcesBlockProps) {
  const sources = getSources(sourceIds)

  return (
    <aside
      style={{
        marginTop: '48px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(22,53,34,0.12)',
      }}
    >
      <h2
        style={{
          color: FOREST,
          fontSize: '1.1rem',
          fontWeight: 700,
          marginBottom: '16px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {title}
      </h2>
      {note ? (
        <p
          style={{
            color: TEXT_SOFT,
            fontSize: '14px',
            lineHeight: 1.7,
            marginBottom: '16px',
            fontFamily: BODY,
          }}
        >
          {note}
        </p>
      ) : null}
      <ol
        style={{
          margin: 0,
          paddingLeft: '20px',
          color: TEXT_SOFT,
          fontSize: '14px',
          lineHeight: 1.8,
          fontFamily: BODY,
        }}
      >
        {sources.map((source) => (
          <li key={source.url} style={{ marginBottom: '10px' }}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gm-link"
              style={{ color: GOLD, textDecoration: 'none' }}
            >
              {source.label}
            </a>
            {' — '}
            {source.publisher}
            {source.year ? ` (${source.year})` : ''}
          </li>
        ))}
      </ol>
    </aside>
  )
}
