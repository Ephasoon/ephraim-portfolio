import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { useSeo } from '../lib/useSeo'

export default function NotFoundPage() {
  const { pathname } = useLocation()

  useSeo({
    title: 'Page not found | Ephraim Shibru',
    description: 'The page you are looking for does not exist on this portfolio.',
    path: pathname,
    noindex: true,
  })

  return (
    <section className="not-found" id="top">
      <div className="container not-found__inner">
        <p className="mono-label">Error / 404</p>
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found__title">
          This page isn't part of the <span className="serif">system</span>.
        </h1>
        <p className="not-found__text">
          The link may be outdated, or the page may have moved. Everything important is still one
          step away.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Back home
            <Icon name="arrow-right" size={16} />
          </Link>
          <Link to="/#projects" className="btn btn--ghost">
            Browse projects
            <Icon name="arrow-up-right" size={15} />
          </Link>
        </div>
        <p className="not-found__path">
          <span className="mono-label">Requested</span>
          <code>{pathname}</code>
        </p>
      </div>
    </section>
  )
}
