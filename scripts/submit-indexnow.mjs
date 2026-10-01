#!/usr/bin/env node
/**
 * Submit canonical GenoMatch URLs to IndexNow (Bing, Yandex, Seznam, Naver, etc.).
 * Google is not part of IndexNow — use Search Console for Google.
 *
 * Usage:
 *   npm run seo:indexnow
 *   node scripts/submit-indexnow.mjs --host www.genomatch.app
 */

const KEY = 'bd3b35f1ffb5b1364ec391f54dce2e1d'
const HOST = process.argv.includes('--host')
  ? process.argv[process.argv.indexOf('--host') + 1]
  : 'www.genomatch.app'

const PATHS = [
  '/',
  '/mission',
  '/partners',
  '/blog',
  '/blog/news',
  '/blog/what-genotype-should-i-check-before-marriage',
  '/blog/can-as-marry-as',
  '/blog/sickle-cell-disease-nigeria-facts',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/support',
  '/delete-account',
]

async function main() {
  const urlList = PATHS.map((path) =>
    path === '/' ? `https://${HOST}/` : `https://${HOST}${path}`
  )
  const keyLocation = `https://${HOST}/${KEY}.txt`
  const body = {
    host: HOST,
    key: KEY,
    keyLocation,
    urlList,
  }

  console.log(`IndexNow → ${urlList.length} URLs on ${HOST}`)
  console.log(`keyLocation: ${keyLocation}`)

  const keyCheck = await fetch(keyLocation)
  if (!keyCheck.ok) {
    console.error(
      `Key file not reachable (${keyCheck.status}). Deploy the key to production first, then re-run.`
    )
    process.exit(1)
  }
  const keyBody = (await keyCheck.text()).trim()
  if (keyBody !== KEY) {
    console.error(`Key file content mismatch. Expected ${KEY}, got ${keyBody}`)
    process.exit(1)
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  const text = await res.text()
  console.log(`IndexNow response: HTTP ${res.status}`)
  if (text) console.log(text)

  // 200 = OK, 202 = Accepted (queued). Both are success.
  if (res.status !== 200 && res.status !== 202) {
    process.exit(1)
  }
  console.log('Submitted successfully.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
