import { useEffect } from 'react'
import { site } from '../data/site'

interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
  noindex?: boolean
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  element.href = href
}

export function useSeo({
  title,
  description,
  path,
  image,
  imageAlt = `${site.name} — ${site.positioning}`,
  type = 'website',
  jsonLd,
  noindex = false,
}: SeoOptions) {
  useEffect(() => {
    const url = `${site.url}${path}`
    const socialImage = image ?? `${site.url}/og-image.png`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', socialImage)
    upsertMeta('property', 'og:image:alt', imageAlt)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', socialImage)
    upsertMeta('name', 'twitter:image:alt', imageAlt)

    if (noindex) {
      document.head.querySelector('link[rel="canonical"]')?.remove()
    } else {
      upsertCanonical(url)
    }

    const scriptId = 'page-structured-data'
    document.getElementById(scriptId)?.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [title, description, path, image, imageAlt, type, jsonLd, noindex])
}
