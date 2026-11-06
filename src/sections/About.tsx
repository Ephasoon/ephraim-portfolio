import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { education, principles } from '../data/site'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__intro">
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              Software is most useful when it fits the way <span className="serif">work actually happens</span>.
            </h2>
            <p className="about__aside">
              I care about the distance between a working demo and a system a team can rely on
              every day.
            </p>
            <Link to="/#projects" className="btn btn--quiet about__link">
              See my work
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>

          <div className="about__content">
            <Reveal delay={60}>
              <p className="about__lead">
                I'm Ephraim Shibru, a developer from Ethiopia interested in building technology
                that addresses practical problems.
              </p>
            </Reveal>

            <Reveal delay={100} className="about__paragraphs">
              <p>
                My background combines Information Technology at Hawassa University with Business
                Management at Infolink College. That mix gives me an interest in both how software
                is engineered and how businesses actually operate.
              </p>
              <p>
                I work across frontend development, backend systems, databases, and AI integration.
                I particularly enjoy developing business management systems, web applications, and
                digital products that help organizations improve their operations.
              </p>
              <p>
                I'm open to full-time roles, paid internships, and client projects, as well as
                collaborating with founders and early-stage startups — exploring ideas, developing
                products, and turning concepts into working solutions through thoughtful technical
                collaboration.
              </p>
            </Reveal>

            <Reveal delay={140} className="about__education">
              <h3 className="about__subhead">Education</h3>
              <div className="education-grid">
                {education.map((item) => (
                  <div className="education-card" key={item.institution}>
                    <span className="education-card__kind">{item.field}</span>
                    <p className="education-card__institution">{item.institution}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180} className="about__principles">
              <h3 className="about__subhead">How I think about the work</h3>
              <ul className="principle-list">
                {principles.map((principle) => (
                  <li key={principle.title} className="principle">
                    <span className="principle__mark" aria-hidden="true" />
                    <div>
                      <h4 className="principle__title">{principle.title}</h4>
                      <p className="principle__body">{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
