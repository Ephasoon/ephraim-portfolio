import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const sourceDir = path.join(root, 'design', 'screenshots')
const outputDir = path.join(root, 'public', 'images', 'projects')

const images = [
  { input: 'panacea.png', name: 'panacea' },
  { input: 'guestease.png', name: 'guestease' },
]

await mkdir(outputDir, { recursive: true })

for (const image of images) {
  const source = path.join(sourceDir, image.input)
  const buffer = await readFile(source)
  const metadata = await sharp(buffer).metadata()

  for (const width of [1440, 800]) {
    const output = path.join(outputDir, `${image.name}-${width}.webp`)
    await sharp(buffer)
      .resize({ width: Math.min(width, metadata.width ?? width), withoutEnlargement: true })
      .webp({ quality: width === 1600 ? 82 : 78, effort: 5 })
      .toFile(output)
    console.log(`${path.relative(root, output)} written`)
  }
}
