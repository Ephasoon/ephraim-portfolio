import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PreviewArt } from '../components/PreviewArt'
import { Reveal } from '../components/Reveal'
import { getProject, projects, type Project } from '../data/projects'
import { site } from '../data/site'
import { useSeo } from '../lib/useSeo'
import NotFoundPage from './NotFoundPage'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <NotFoundPage />

  return <ProjectView project={project} />
}

function ProjectView({ project }: { project: Project }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      headline: project.name,
      description: project.metaDescription,
      url: `${site.url}/work/${project.slug}`,
      creator: {
        '@type': 'Person',
        name: site.name,
        url: site.url,
      },
      keywords: [...project.categories, ...project.tech].join(', '),
    }),
    [project],
  )

  useSeo({
    title: `${project.name} — Case Study | ${site.name}`,
    description: project.metaDescription,
    path: `/work/${project.slug}`,
    type: 'article',
    jsonLd,
  })

  return (
    <article className="case">
      <div className="container">
        <Link className="case__back" to="/#projects">
          <Icon name="arrow-left" size={16} />
          All projects
        </Link>

        <header className="case__header">
          <div className="case__kicker">
            <span className="mono-label">Case study {project.index}</span>
            <span className={`badge badge--${project.statusTone}`}>
              <span className="badge__dot" aria-hidden="true" />
              {project.status}
            </span>
            <span className="case__kicker-type">{project.categories.join(' · ')}</span>
          </div>

          <h1 className="case__title">{project.name}</h1>
          <p className="case__tagline">{project.tagline}</p>
          <p className="case__summary">{project.summary}</p>

          <dl className="case-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role[0]}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.categories.join(' / ')}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Demo</dt>
              <dd>
                {project.demo ? (
                  <a href={project.demo.href} target="_blank" rel="noopener noreferrer">
                    Live site
                    <Icon name="arrow-up-right" size={13} />
                  </a>
                ) : (
                  'Not public'
                )}
              </dd>
            </div>
          </dl>
        </header>

        <Reveal className="case__visual">
          <div className={project.preview.kind === 'image' ? 'browser' : 'browser browser--art'}>
            <div className="browser__bar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="browser__url">
                {project.preview.kind === 'image' ? (
                  <>
                    <Icon name="lock" size={11} />
                    {project.preview.domain}
                  </>
                ) : (
                  'Conceptual preview'
                )}
              </span>
              <span className="browser__tag">{project.preview.kind === 'image' ? 'Live' : 'Preview'}</span>
            </div>

            {project.preview.kind === 'image' ? (
              <img
                src={project.preview.src}
                srcSet={project.preview.srcSet}
                sizes="(max-width: 1240px) 100vw, 1200px"
                width={project.preview.width}
                height={project.preview.height}
                alt={project.preview.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            ) : (
              <PreviewArt variant={project.preview.variant} />
            )}
          </div>
          <p className="case__caption">{project.preview.caption}</p>
        </Reveal>

        <div className="case__layout">
          <div className="case__content">
            <Reveal as="section" className="case-section">
              <span className="mono-label">01 / Problem</span>
              <h2 className="case-section__title">The problem</h2>
              <p>{project.problem}</p>
            </Reveal>

            <Reveal as="section" className="case-section">
              <span className="mono-label">02 / Approach</span>
              <h2 className="case-section__title">The approach</h2>
              <p>{project.approach}</p>
            </Reveal>

            {project.features ? (
              <Reveal as="section" className="case-section">
                <span className="mono-label">03 / Scope</span>
                <h2 className="case-section__title">What it includes</h2>
                <ul className="case-list">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="case-list__icon">
                        <Icon name="check" size={14} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {project.planned ? (
              <Reveal as="section" className="case-section">
                <span className="mono-label">03 / Direction</span>
                <h2 className="case-section__title">Planned scope</h2>
                <p className="case-section__lead">
                  These modules are the current direction for the build. They are not delivered
                  functionality yet.
                </p>
                <ul className="case-list case-list--planned">
                  {project.planned.map((feature) => (
                    <li key={feature}>
                      <span className="case-list__icon case-list__icon--planned">
                        <Icon name="arrow-right" size={13} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            <Reveal as="section" className="case-section">
              <span className="mono-label">04 / Technical notes</span>
              <h2 className="case-section__title">Stack and implementation</h2>
              {project.tech.length > 0 ? (
                <ul className="tag-list case-stack" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
              {project.stackNote ? <p className="case-section__note">{project.stackNote}</p> : null}
            </Reveal>

            <Reveal as="section" className="case-section">
              <span className="mono-label">05 / Contribution</span>
              <h2 className="case-section__title">My role</h2>
              <ul className="tag-list" aria-label="Role and contribution">
                {project.role.map((role) => (
                  <li className="tag" key={role}>
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="section" className="case-section">
              <span className="mono-label">06 / Notes</span>
              <h2 className="case-section__title">Status and scope</h2>
              <div className={`case-callout case-callout--${project.statusTone}`}>
                <Icon name="info" size={17} />
                <p>{project.scopeNote}</p>
              </div>
            </Reveal>

            {project.demo ? (
              <Reveal className="case__live">
                <div>
                  <span className="mono-label">Public demo</span>
                  <p>Explore the live product directly.</p>
                </div>
                <a className="btn btn--primary" href={project.demo.href} target="_blank" rel="noopener noreferrer">
                  {project.demo.label}
                  <Icon name="arrow-up-right" size={16} />
                </a>
              </Reveal>
            ) : null}
          </div>

          <aside className="case__aside">
            <div className="case-aside card">
              <span className="mono-label">At a glance</span>
              <dl className="case-facts">
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                <div>
                  <dt>Project type</dt>
                  <dd>{project.categories.join(', ')}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role.join(', ')}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.tech.length > 0 ? project.tech.join(', ') : 'Not published'}</dd>
                </div>
              </dl>

              {project.demo ? (
                <a className="btn btn--primary case-aside__cta" href={project.demo.href} target="_blank" rel="noopener noreferrer">
                  Visit the live site
                  <Icon name="arrow-up-right" size={16} />
                </a>
              ) : (
                <p className="case-aside__private">
                  <Icon name="lock" size={15} />
                  Private build. No public demo is available.
                </p>
              )}

              <Link className="case-aside__contact" to="/#contact">
                Discuss a similar project
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </aside>
        </div>

        <nav className="case-next" aria-label="Project navigation">
          <Link className="case-next__all" to="/#projects">
            <Icon name="arrow-left" size={15} />
            All projects
          </Link>
          <Link className="case-next__link" to={`/work/${nextProject.slug}`}>
            <span>
              <span className="mono-label">Next case study</span>
              <span className="case-next__title">{nextProject.name}</span>
            </span>
            <span className="case-next__icon">
              <Icon name="arrow-right" size={18} />
            </span>
          </Link>
        </nav>
      </div>
    </article>
  )
}
