import { Link } from 'react-router-dom'
import { BriefComposer } from '../components/BriefComposer'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { socials } from '../data/site'

export function Contact() {
  const linkedin = socials.find((social) => social.icon === 'linkedin')?.href ?? ''
  const github = socials.find((social) => social.icon === 'github')?.href ?? ''
  const upwork = socials.find((social) => social.icon === 'upwork')?.href ?? ''

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let's talk about what comes <span className="serif">next</span>.
          </h2>
          <p className="section-intro">
            Whether you are hiring for a role or scoping a project, a short conversation is the
            right first step. Choose the path that fits.
          </p>
        </Reveal>

        <div className="contact__paths">
          <Reveal as="article" className="path-card path-card--employer" delay={40}>
            <span className="path-card__label">For employers</span>
            <h3 className="path-card__title">Hiring for a role?</h3>
            <p className="path-card__text">
              Review my technical skills, education, and project work. The fastest way to start a
              conversation is LinkedIn.
            </p>
            <div className="path-card__links">
              <Link to="/#skills">
                Skills
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link to="/#about">
                Education
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link to="/#projects">
                Case studies
                <Icon name="arrow-right" size={14} />
              </Link>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <Icon name="arrow-up-right" size={14} />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="path-card path-card--client" delay={80}>
            <span className="path-card__label">For clients</span>
            <h3 className="path-card__title">Have a project in mind?</h3>
            <p className="path-card__text">
              Describe what you want to build and the problem it should solve. The brief helps
              define a focused first version before any code is written.
            </p>
            <div className="path-card__links">
              <Link to="/#services">
                Services
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link to="/#projects">
                Relevant work
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link to="/#brief">
                Start a brief
                <Icon name="arrow-right" size={14} />
              </Link>
              <a href={upwork} target="_blank" rel="noopener noreferrer">
                Upwork
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal delay={80} className="contact__channels">
            <h3 className="contact__channels-title">Direct channels</h3>
            <p className="contact__channels-note">
              Prefer a direct message? These profiles are the best place to start.
            </p>
            <ul className="channel-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    className="channel"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="channel__icon">
                      <Icon name={social.icon} size={18} />
                    </span>
                    <span className="channel__text">
                      <span className="channel__label">{social.label}</span>
                      <span className="channel__value">{social.handle}</span>
                    </span>
                    <Icon name="arrow-up-right" size={16} className="channel__arrow" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="contact__location">
              <Icon name="map-pin" size={15} />
              Hawassa, Ethiopia · available for remote work
            </p>
          </Reveal>

          <Reveal className="contact__composer" delay={120} id="brief">
            <BriefComposer />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
