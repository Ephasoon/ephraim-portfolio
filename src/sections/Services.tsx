import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { services } from '../data/services'

export function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Engineering with the <span className="serif">business context</span> attached.
            </>
          }
          intro="I build software around the operational outcome: fewer manual steps, clearer records, faster decisions, and a product people can actually use."
          aside="06 ways to work together"
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-card" delay={index * 45} key={service.title}>
              <div className="service-card__top">
                <span className="service-card__icon">
                  <Icon name={service.icon} size={19} />
                </span>
                <span className="service-card__index">0{index + 1}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__problem">{service.problem}</p>
              <div className="service-card__deliverables">
                <span className="service-card__label">What I deliver</span>
                <ul className="service-card__details">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <span className="service-card__dot" aria-hidden="true" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="service-card__value">
                <span className="service-card__label">Value</span>
                {service.value}
              </p>
              <Link to="/#brief" className="service-card__link">
                Discuss this service
                <Icon name="arrow-up-right" size={15} />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="services__foot" delay={100}>
          <p>
            Every engagement starts with scope. We agree on what the first version needs to do
            before writing production code.
          </p>
          <Link to="/#brief" className="btn btn--quiet">
            Start with a project brief
            <Icon name="arrow-right" size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
