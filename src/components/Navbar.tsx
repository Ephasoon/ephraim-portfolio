import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, socials } from '../data/site'
import { useActiveSection } from '../lib/useActiveSection'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = navigation.map((item) => item.section)

export function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const activeSection = useActiveSection(sectionIds, isHome)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollTop = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 8)
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0)
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
  }, [])

  useEffect(() => {
    if (!open) return

    const menu = menuRef.current
    const returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.classList.add('no-scroll')
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus())

    const getFocusable = () =>
      menu
        ? Array.from(
            menu.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), select, input, textarea, [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((element) => element.offsetParent !== null)
        : []

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusable = getFocusable()
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', onKeyDown)
      returnFocus?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const query = window.matchMedia('(min-width: 981px)')
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false)
    }

    closeOnDesktop()
    query.addEventListener('change', closeOnDesktop)
    return () => query.removeEventListener('change', closeOnDesktop)
  }, [open])

  const isActive = (section: string) => {
    if (section === 'projects' && pathname.startsWith('/work/')) return true
    return isHome && activeSection === section
  }

  return (
    <>
      <header
        className={scrolled ? 'nav is-scrolled' : 'nav'}
        style={{ '--progress': progress } as CSSProperties}
      >
        <div className="container nav__inner">
          <Logo />

          <nav className="nav__links" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.section}
                to={item.to}
                className="nav__link"
                aria-current={isActive(item.section) ? 'true' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <Link to="/#contact" className="btn btn--primary btn--sm nav__cta">
              Work with me
              <Icon name="arrow-up-right" size={15} />
            </Link>
            <button
              type="button"
              className="icon-btn menu-trigger"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
        <div className="nav__progress" aria-hidden="true">
          <span />
        </div>
      </header>

      <div
        id="mobile-menu"
        className={open ? 'mobile-menu is-open' : 'mobile-menu'}
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <div className="mobile-menu__top">
          <Logo />
          <button
            type="button"
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            ref={closeRef}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className="mobile-menu__links" aria-label="Mobile primary">
          {navigation.map((item) => (
            <Link key={item.section} to={item.to} className="mobile-menu__link" onClick={() => setOpen(false)}>
              <span aria-hidden="true">{item.index}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <div className="mobile-menu__actions">
            <Link to="/#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
              Work with me
              <Icon name="arrow-up-right" size={16} />
            </Link>
            <ThemeToggle />
          </div>
          <div className="socials">
            {socials.map((social) => (
              <a
                key={social.label}
                className="social-link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={social.icon} size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}



