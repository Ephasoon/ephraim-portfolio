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
              See what I have built
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>

          <div className="about__content">
            <Reveal delay={60}>
              <p className="about__lead">
                I'm Ephraim Shibru, a software developer working at the intersection of engineering
                and business operations. My starting point is usually a practical problem: a process
                that takes too long, records that do not agree, or software nobody wants to use.
              </p>
            </Reveal>

            <Reveal delay={100} className="about__paragraphs">
              <p>
                I study Information Technology at Hawassa University and Business Management at
                Infolink College. That combination shapes how I build. I care about clean
                implementation, but I also care whether the product makes sense for the people
                running the business.
              </p>
              <p>
                My work spans full-stack web applications, business management systems, backend
                services, and AI-enabled tools. I'm particularly interested in replacing manual
                operational work with something clearer, faster, and more dependable.
              </p>
              <p>
                I'm open to client work, technical collaboration, and early-stage product
                conversations with founders. I value direct communication, realistic scope, and
                software that earns its place.
              </p>
            </Reveal>

            <Reveal delay={140} className="about__education">
              <h3 className="about__subhead">Education</h3>
              <div className="education-grid">
                {education.map((item) => (
                  <div className="education-card" key={item.field}>
                    <span className="education-card__kind">{item.kind}</span>
                    <p className="education-card__field">{item.field}</p>
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
