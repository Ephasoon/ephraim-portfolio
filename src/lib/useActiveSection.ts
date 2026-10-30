import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[], enabled: boolean) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (!enabled) return

    let frame = 0
    const update = () => {
      frame = 0
      const marker = window.scrollY + window.innerHeight * 0.34
      let current = sectionIds[0] ?? ''

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (!element) return
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      })

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? current
      }

      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled, sectionIds])

  return active
}
