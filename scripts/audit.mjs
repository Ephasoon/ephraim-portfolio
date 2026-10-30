import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright-core'

const edgeCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
]

const executablePath = edgeCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) throw new Error('Edge executable not found')

const base = 'http://127.0.0.1:5173'
const outDir = path.join(process.cwd(), 'design', 'review')
await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ executablePath, headless: true })
const issues = []

async function prepare(page) {
  page.on('console', (message) => {
    if (message.type() === 'error') issues.push(`console: ${message.text()}`)
  })
  page.on('pageerror', (error) => issues.push(`pageerror: ${error.message}`))
  page.on('requestfailed', (request) => {
    if (!request.url().startsWith('data:')) issues.push(`requestfailed: ${request.url()} ${request.failure()?.errorText}`)
  })
  await page.addInitScript(() => {
    localStorage.removeItem('ephraim-theme')
  })
}

async function settle(page) {
  await page.addStyleTag({
    content:
      '.reveal{opacity:1!important;transform:none!important;transition:none!important}html{scroll-behavior:auto!important}',
  })
  await page.evaluate(async () => {
    await document.fonts.ready
    const step = Math.max(window.innerHeight * 0.8, 400)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 90))
    }
    window.scrollTo(0, 0)
    await Promise.all(
      Array.from(document.images)
        .filter((image) => !image.complete)
        .map(
          (image) =>
            new Promise((resolve) => {
              image.addEventListener('load', resolve, { once: true })
              image.addEventListener('error', resolve, { once: true })
            }),
        ),
    )
  })
  await page.waitForTimeout(500)
}

async function metrics(page, label) {
  const data = await page.evaluate(() => {
    const root = document.documentElement
    const images = Array.from(document.images).map((image) => ({
      src: image.currentSrc,
      complete: image.complete,
      width: image.naturalWidth,
    }))
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map((heading) => ({
      level: heading.tagName,
      text: heading.textContent?.trim().slice(0, 80),
    }))
    const controls = Array.from(document.querySelectorAll('input, select, textarea')).filter(
      (control) => control.type !== 'hidden',
    )
    const unlabeledControls = controls.filter((control) => {
      if (control.getAttribute('aria-label') || control.getAttribute('aria-labelledby')) return false
      if (control.closest('label')) return false
      const id = control.getAttribute('id')
      return !(id && document.querySelector(`label[for="${CSS.escape(id)}"]`))
    })
    const unnamedActions = Array.from(document.querySelectorAll('a[href], button')).filter(
      (element) =>
        !(element.textContent ?? '').trim() &&
        !element.getAttribute('aria-label') &&
        !element.getAttribute('title') &&
        !element.querySelector('img[alt]:not([alt=""])'),
    )
    const ids = Array.from(document.querySelectorAll('[id]')).map((element) => element.id)
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)

    return {
      title: document.title,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
      overflowX: root.scrollWidth - root.clientWidth,
      height: root.scrollHeight,
      images,
      headings,
      main: Boolean(document.querySelector('main')),
      h1Count: document.querySelectorAll('h1').length,
      skipLink: Boolean(document.querySelector('.skip-link')),
      imagesWithoutAlt: Array.from(document.images).filter((image) => !image.hasAttribute('alt')).length,
      unlabeledControls: unlabeledControls.map((control) => control.outerHTML.slice(0, 120)),
      unnamedActions: unnamedActions.map((element) => element.outerHTML.slice(0, 120)),
      duplicateIds: [...new Set(duplicateIds)],
    }
  })
  console.log(`\n[${label}] ${data.title}`)
  console.log(
    `canonical=${data.canonical} h1=${data.h1Count} main=${data.main} overflowX=${data.overflowX} height=${data.height}`,
  )
  const broken = data.images.filter((image) => !image.complete || image.width === 0)
  if (broken.length) issues.push(`${label}: broken images ${JSON.stringify(broken)}`)
  if (data.overflowX > 0) issues.push(`${label}: horizontal overflow ${data.overflowX}px`)
  if (data.h1Count !== 1) issues.push(`${label}: h1 count ${data.h1Count}`)
  if (!data.main) issues.push(`${label}: missing main landmark`)
  if (!data.skipLink) issues.push(`${label}: missing skip link`)
  if (data.imagesWithoutAlt > 0) issues.push(`${label}: ${data.imagesWithoutAlt} image(s) without alt`)
  if (data.unlabeledControls.length) {
    issues.push(`${label}: unlabeled form controls ${JSON.stringify(data.unlabeledControls)}`)
  }
  if (data.unnamedActions.length) {
    issues.push(`${label}: unnamed links/buttons ${JSON.stringify(data.unnamedActions)}`)
  }
  if (data.duplicateIds.length) {
    issues.push(`${label}: duplicate ids ${JSON.stringify(data.duplicateIds)}`)
  }
  console.log('headings:', data.headings.map((heading) => `${heading.level}:${heading.text}`).join(' | '))
  return data
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await prepare(desktop)
await desktop.goto(`${base}/`, { waitUntil: 'networkidle' })
await settle(desktop)
await metrics(desktop, 'home-1440')
await desktop.screenshot({ path: path.join(outDir, 'home-1440-hero.png') })
await desktop.screenshot({ path: path.join(outDir, 'home-1440-full.png'), fullPage: true })

for (const anchor of ['about', 'skills', 'projects', 'services', 'collaboration', 'contact']) {
  await desktop.locator(`#${anchor}`).scrollIntoViewIfNeeded()
  await desktop.waitForTimeout(500)
  await desktop.screenshot({ path: path.join(outDir, `home-1440-${anchor}.png`) })
}

await desktop.goto(`${base}/work/panacea-hospital`, { waitUntil: 'networkidle' })
await settle(desktop)
await metrics(desktop, 'panacea-1440')
await desktop.screenshot({ path: path.join(outDir, 'project-panacea-1440-full.png'), fullPage: true })
await desktop.screenshot({ path: path.join(outDir, 'project-panacea-1440-hero.png') })

await desktop.goto(`${base}/work/openrouter-ai-server`, { waitUntil: 'networkidle' })
await settle(desktop)
await metrics(desktop, 'openrouter-1440')
await desktop.screenshot({ path: path.join(outDir, 'project-openrouter-1440-full.png'), fullPage: true })

await desktop.goto(`${base}/work/abugida-school`, { waitUntil: 'networkidle' })
await settle(desktop)
await metrics(desktop, 'abugida-1440')
await desktop.screenshot({ path: path.join(outDir, 'project-abugida-1440-full.png'), fullPage: true })

await desktop.goto(`${base}/missing-page`, { waitUntil: 'networkidle' })
await settle(desktop)
await metrics(desktop, '404-1440')
await desktop.screenshot({ path: path.join(outDir, 'not-found-1440.png') })

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
await prepare(mobile)
await mobile.goto(`${base}/`, { waitUntil: 'networkidle' })
await settle(mobile)
await metrics(mobile, 'home-390')
await mobile.screenshot({ path: path.join(outDir, 'home-390-hero.png') })
await mobile.screenshot({ path: path.join(outDir, 'home-390-full.png'), fullPage: true })

for (const anchor of ['about', 'skills', 'projects', 'services', 'contact']) {
  await mobile.locator(`#${anchor}`).scrollIntoViewIfNeeded()
  await mobile.waitForTimeout(400)
  await mobile.screenshot({ path: path.join(outDir, `home-390-${anchor}.png`) })
}

await mobile.evaluate(() => window.scrollTo(0, 0))
await mobile.locator('.menu-trigger').click()
await mobile.waitForTimeout(500)
await mobile.screenshot({ path: path.join(outDir, 'mobile-menu-390.png') })
await mobile.keyboard.press('Escape')
await mobile.waitForTimeout(400)

await mobile.goto(`${base}/work/guestease-hotel`, { waitUntil: 'networkidle' })
await settle(mobile)
await metrics(mobile, 'guestease-390')
await mobile.screenshot({ path: path.join(outDir, 'project-guestease-390-full.png'), fullPage: true })

for (const width of [360, 390, 768, 1024, 1280, 1440]) {
  await desktop.setViewportSize({ width, height: 900 })
  await desktop.goto(`${base}/`, { waitUntil: 'networkidle' })
  await settle(desktop)
  const overflow = await desktop.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  console.log(`width ${width}: overflowX=${overflow}`)
  if (overflow > 0) issues.push(`responsive width ${width}: overflow ${overflow}px`)
}

const light = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await light.addInitScript(() => localStorage.setItem('ephraim-theme', 'light'))
await light.goto(`${base}/`, { waitUntil: 'networkidle' })
await settle(light)
await light.screenshot({ path: path.join(outDir, 'home-1440-light-hero.png') })
await metrics(light, 'home-light-1440')

await browser.close()

console.log('\nISSUES')
if (issues.length === 0) console.log('none')
else issues.forEach((issue) => console.log(`- ${issue}`))

await writeFile(path.join(outDir, 'audit.json'), JSON.stringify({ issues }, null, 2))
