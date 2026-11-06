import { Link } from 'react-router-dom'
import { navigation, site, socials } from '../data/site'
import { Icon } from './Icon'
import { Logo } from './Logo'

const currentYear = new Date().getFullYear()

export function Footer() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__about">
              Full-stack developer working between web applications, business systems, and
              AI-enabled solutions. Based in {site.locationDetail}.
            </p>
          </div>

          <div>
            <h2 className="footer__title">Explore</h2>
            <ul className="footer__list">
              {navigation.slice(1).map((item) => (
                <li key={item.section}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__title">Elsewhere</h2>
            <ul className="footer__list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                    <Icon name="arrow-up-right" size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__title">Availability</h2>
            <ul className="footer__list">
              <li>
                <span className="badge badge--live">
                  <span className="badge__dot" aria-hidden="true" />
                  Open to roles &amp; projects
                </span>
              </li>
              <li>
                <span>Remote &amp; in-person</span>
              </li>
              <li>
                <span>Roles, internships &amp; freelance</span>
              </li>
              <li>
                <Link to="/#contact">Start a conversation</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} {site.name}. Built in Ethiopia.
          </p>
          <div className="footer__bottom-links">
            <a href={site.businessUrl} target="_blank" rel="noopener noreferrer">
              WithUnion
            </a>
            <button type="button" onClick={scrollToTop} className="footer__to-top">
              Back to top
              <Icon name="arrow-up" size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
