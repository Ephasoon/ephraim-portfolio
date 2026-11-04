import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { projectFilters, projects, type ProjectCategory } from '../data/projects'

type Filter = 'All' | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Systems built for <span className="serif">real operations</span>.
            </>
          }
          intro="A mix of live demos, source-available builds, and work in progress. Each case study covers the problem, the solution, and the scope — without inflated claims."
          aside={`${projects.length} selected projects`}
        />

        <Reveal className="projects__toolbar" delay={40}>
          <div className="filters" role="group" aria-label="Filter projects by category">
            {projectFilters.map((option) => (
              <button
                key={option}
                type="button"
                className="filter"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="projects__count" role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          </p>
        </Reveal>

        <div className="projects__grid" key={filter}>
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={filter === 'All' && index === 0}
              delay={Math.min(index * 60, 240)}
            />
          ))}
        </div>

        <Reveal className="projects__note" delay={100}>
          <p>
            Public demos and source repositories are linked directly. Where something is not
            public, the case study says so.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
