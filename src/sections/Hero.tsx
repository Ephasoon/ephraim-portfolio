import { Link } from 'react-router-dom'
import { site, socials } from '../data/site'
import { Icon } from '../components/Icon'

const stack = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Laravel', 'Docker', 'AI APIs']

const steps = [
  {
    number: '01',
    title: 'Frame the problem',
    text: 'Start with the workflow and the constraint — not the framework.',
  },
  {
    number: '02',
    title: 'Design the system',
    text: 'Clear data models, sensible API boundaries, and an interface that follows the work.',
  },
  {
    number: '03',
    title: 'Build and refine',
    text: 'Ship something usable, then improve it with real feedback instead of assumptions.',
  },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              <span className="hero__status">
                <span className="status-dot" aria-hidden="true" />
                {site.availability}
              </span>
              <span className="hero__eyebrow-sep" aria-hidden="true" />
              <span>{site.locationDetail}</span>
            </p>

            <h1 className="hero__title">
              <span className="hero__name">{site.name}</span>{' '}
              <span className="hero__role">
                <span className="hero__role-primary">{site.role}</span>
                <span className="hero__role-divider" aria-hidden="true" />
                {' '}
                <span className="hero__role-focus">{site.focus}</span>
              </span>
            </h1>

            <p className="hero__text">{site.heroIntro}</p>
            <p className="hero__text hero__text--muted">{site.heroSupporting}</p>

            <div className="hero__actions">
              <Link to="/#projects" className="btn btn--primary">
                Explore my work
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link to="/#contact" className="btn btn--ghost">
                Discuss a project
                <Icon name="arrow-up-right" size={16} />
              </Link>
            </div>

            <div className="hero__links">
              <span className="hero__links-label">Find me</span>
              <div className="socials">
                {socials.slice(0, 3).map((social) => (
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

          <aside className="hero-panel" aria-label="How I approach a project">
            <div className="hero-panel__bar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="hero-panel__path">ephraim / approach</span>
              <span className="hero-panel__state">
                <span className="status-dot" aria-hidden="true" />
                Open
              </span>
            </div>

            <div className="hero-panel__body">
              <div className="hero-panel__heading">
                <span className="mono-label">From idea to product</span>
                <p>How I approach the work.</p>
              </div>

              <ol className="hero-steps">
                {steps.map((step) => (
                  <li key={step.number} className="hero-step">
                    <span className="hero-step__number">{step.number}</span>
                    <div>
                      <h2 className="hero-step__title">{step.title}</h2>
                      <p className="hero-step__text">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="hero-panel__foot">
                <span>Web apps</span>
                <span>APIs</span>
                <span>Data</span>
                <span>AI</span>
              </div>
            </div>
            <span className="hero-panel__watermark" aria-hidden="true">
              E
            </span>
          </aside>
        </div>

        <div className="hero__strip">
          <span className="hero__strip-label">Working with</span>
          <ul className="hero__stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
