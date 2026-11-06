import { useEffect, useRef } from 'react'

const FALLBACK_DELAY = 800

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let fallback = 0
    const reveal = (instant = false) => {
      if (fallback) window.clearTimeout(fallback)
      fallback = 0
      if (instant) element.classList.add('is-instant')
      element.classList.add('is-visible')
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      reveal()
      return
    }

    const rect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < viewportHeight && rect.bottom > 0) {
      reveal()
      return
    }

    let observer: IntersectionObserver
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            reveal()
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.01, rootMargin: '0px 0px -5% 0px' },
      )
    } catch {
      reveal()
      return
    }

    observer.observe(element)

    fallback = window.setTimeout(() => reveal(true), FALLBACK_DELAY)

    return () => {
      if (fallback) window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return ref
}
