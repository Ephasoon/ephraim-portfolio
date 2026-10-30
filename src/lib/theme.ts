import { useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const storageKey = 'ephraim-theme'
const listeners = new Set<() => void>()

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function notify() {
  listeners.forEach((listener) => listener())
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(storageKey, theme)
  } catch {
    /* Storage can be unavailable in private browsing contexts. */
  }
  notify()
}

export function toggleTheme() {
  applyTheme(readTheme() === 'dark' ? 'light' : 'dark')
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey) return
    if (event.newValue !== 'light' && event.newValue !== 'dark') return
    document.documentElement.dataset.theme = event.newValue
    notify()
  })
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark' as Theme)
  return { theme, toggle: toggleTheme }
}
