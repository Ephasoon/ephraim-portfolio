import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { Icon } from './Icon'
import { PreviewArt } from './PreviewArt'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  delay?: number
}

export function ProjectCard({ project, featured = false, delay = 0 }: ProjectCardProps) {
  const tags = project.tech.length > 0 ? project.tech.slice(0, 3) : project.categories.slice(0, 3)

  return (
    <article
      className={featured ? 'project-card project-card--featured reveal' : 'project-card reveal'}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      <Link className="project-card__link" to={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`}>
        <div className="project-card__preview">
          {project.preview.kind === 'image' ? (
            <img
              src={project.preview.src}
              srcSet={project.preview.srcSet}
              sizes={featured ? '(max-width: 900px) 100vw, 720px' : '(max-width: 900px) 100vw, 560px'}
              width={project.preview.width}
              height={project.preview.height}
              alt={project.preview.alt}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <PreviewArt variant={project.preview.variant} />
          )}
          <span className={`badge badge--${project.statusTone} project-card__status`}>
            <span className="badge__dot" aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <div className="project-card__body">
          <div className="project-card__meta">
            <span className="project-card__index">{project.index}</span>
            <span>{project.categories[0]}</span>
          </div>
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
          <ul className="tag-list project-card__tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <span className="project-card__cta">
            Read the case study
            <Icon name="arrow-right" size={16} />
          </span>
        </div>
      </Link>
    </article>
  )
}
