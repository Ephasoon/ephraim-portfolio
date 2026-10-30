import { BriefComposer } from '../components/BriefComposer'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { socials } from '../data/site'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__intro">
            <Reveal>
              <span className="eyebrow">Contact</span>
              <h2 className="section-title">
                Let's talk about what you're <span className="serif">building</span>.
              </h2>
              <p className="section-intro">
                Have a product in mind, a system that needs rebuilding, or an early idea worth
                discussing? Prepare a short brief below, or reach out directly through the channels
                on the left.
              </p>
            </Reveal>

            <Reveal delay={80} className="contact__channels">
              <h3 className="contact__channels-title">Direct channels</h3>
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
          </div>

          <Reveal className="contact__composer" delay={120}>
            <BriefComposer />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
