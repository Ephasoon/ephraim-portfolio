import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { Icon } from '../components/Icon'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section className="section section--soft" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              A working toolkit, not a <span className="serif">checklist</span>.
            </>
          }
          intro="The technologies I use to take an application from an idea to something maintainable. I choose tools for the problem, not for the logo wall."
          aside="05 areas · applied in projects"
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal as="article" className="skill-card" delay={index * 55} key={group.title}>
              <div className="skill-card__top">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={19} />
                </span>
                <span className="skill-card__index">0{index + 1}</span>
              </div>
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__description">{group.description}</p>
              <ul className="tag-list skill-card__tags" aria-label={`${group.title} technologies`}>
                {group.skills.map((skill) => (
                  <li className="tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills__foot" delay={120}>
          <p>
            <span className="mono-label">Working style</span>
            Understand the workflow, model the data, build the interface, then test it against
            reality.
          </p>
          <span className="skills__foot-note">No proficiency percentages. Just the work.</span>
        </Reveal>
      </div>
    </section>
  )
}
