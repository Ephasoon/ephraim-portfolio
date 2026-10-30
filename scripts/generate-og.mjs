import { existsSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const edgeCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
]

const executablePath = edgeCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) throw new Error('Edge executable not found')

const root = process.cwd()
const source = pathToFileURL(path.join(root, 'design', 'og.html')).href
const output = path.join(root, 'public', 'og-image.png')

const browser = await chromium.launch({ executablePath, headless: true })
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})

await page.goto(source, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(250)
await page.screenshot({ path: output, type: 'png' })
await browser.close()

console.log(`wrote ${path.relative(root, output)} (1200x630)`)
