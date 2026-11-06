import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'

const steps = [
  {
    number: '01',
    title: 'Clarify',
    text: 'A focused conversation about the problem, the user, and the constraint that matters most.',
  },
  {
    number: '02',
    title: 'Scope',
    text: 'Define a first version that is small enough to build and useful enough to test.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Design and implement the product, with clear decisions and visible progress along the way.',
  },
  {
    number: '04',
    title: 'Iterate',
    text: 'Review what is working, then improve the product with real feedback rather than guesses.',
  },
]

export function Collaboration() {
  return (
    <section className="section collab-section" id="collaboration">
      <div className="container">
        <Reveal className="collab">
          <div className="collab__glow" aria-hidden="true" />
          <div className="collab__grid" aria-hidden="true" />

          <div className="collab__content">
            <span className="eyebrow eyebrow--inverse">Startup collaboration</span>
            <h2 className="collab__title">
              Have an idea? Let's build something <span className="serif">meaningful</span>.
            </h2>
            <p className="collab__text">
              Some of the most useful products begin as a rough idea and a clear problem. I'm open
              to collaborating with founders, entrepreneurs, and small teams who want to move from
              concept to a working digital product.
            </p>
            <p className="collab__text">
              Whether you are validating an early concept or need technical help shaping an existing
              idea, the first step is a straightforward conversation about what is worth building.
            </p>

            <div className="collab__actions">
              <Link to="/#brief" className="btn btn--primary">
                Discuss your idea
                <Icon name="arrow-up-right" size={16} />
              </Link>
              <Link to="/#services" className="collab__secondary">
                See how I can help
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <p className="collab__confidential">
              <Icon name="lock" size={15} />
              Ideas and early-stage discussions are treated confidentially.
            </p>
          </div>

          <div className="collab__side">
            <p className="collab__side-label">What collaboration can look like</p>
            <ol className="collab__steps">
              {steps.map((step) => (
                <li className="collab-step" key={step.number}>
                  <span className="collab-step__number">{step.number}</span>
                  <div>
                    <h3 className="collab-step__title">{step.title}</h3>
                    <p className="collab-step__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="collab__terms">
              Engagements can be scoped as a contract build, a technical partnership, or a focused
              MVP sprint — with expectations agreed upfront.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
