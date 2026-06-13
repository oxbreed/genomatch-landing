import HomeContent from './HomeContent'
import ScdNewsFeed from './components/ScdNewsFeed'

/** Refresh homepage news strip every 6 hours. */
export const revalidate = 21600

export default function Home() {
  return (
    <>
      <HomeContent />
      <div style={{ background: '#F3EDE3' }}>
        <ScdNewsFeed limit={4} compact showViewAll />
      </div>
    </>
  )
}
