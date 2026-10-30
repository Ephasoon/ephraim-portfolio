import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function scrollToSection(hash: string, smooth = true) {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  let attempts = 0
  const behavior: ScrollBehavior = smooth && !prefersReducedMotion() ? 'smooth' : 'auto'

  const tryScroll = () => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior, block: 'start' })
      return
    }
    attempts += 1
    if (attempts < 24) requestAnimationFrame(tryScroll)
  }

  requestAnimationFrame(tryScroll)
}

export function useRouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => scrollToSection(hash), 40)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
}
