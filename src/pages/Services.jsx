import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/properties.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const steps = [
  { step: '01', title: 'Free consultation', text: 'A call or meeting to understand your budget, timing and what matters most to you.' },
  { step: '02', title: 'Search & shortlist', text: 'We do the filtering — including off-market options that never reach a listing site.' },
  { step: '03', title: 'Visits & negotiation', text: 'Site visits at your convenience, followed by a price negotiation handled by us.' },
  { step: '04', title: 'Transfer & handover', text: 'Title verification, documentation, registry and utility transfer, completed for you.' },
]

const faqs = [
  {
    q: 'How much commission do you charge?',
    a: 'Our standard commission is 2% of the sale value, agreed in writing before we begin. On rentals it is typically one month’s rent. There are no hidden charges, and you will never be asked to pay for a viewing.',
  },
  {
    q: 'Do you verify the property documents?',
    a: 'Yes. Every listing goes through a title check before it is advertised. For a transaction, our documentation team reviews the registry, mutation record, approvals and any dues, and shares a written summary with you.',
  },
  {
    q: 'Can NRIs buy through you?',
    a: 'Absolutely — around a third of our clients are overseas. We provide video walk-throughs, share documents digitally, coordinate with your power of attorney and keep you updated at every step of the transfer.',
  },
  {
    q: 'How long does a sale usually take?',
    a: 'A straightforward resale in a developed area typically completes in four to eight weeks. Timelines depend mainly on document readiness and the buyer’s payment schedule; we give you a realistic estimate up front.',
  },
  {
    q: 'Is the valuation really free?',
    a: 'Yes. We provide one free written valuation for properties in the areas we cover. It is based on recent transactions we have personally handled, not automated estimates.',
  },
  {
    q: 'Do you manage rented property after handover?',
    a: 'We do. Our rental desk handles tenant vetting, agreement drafting, rent collection, annual inspections and maintenance coordination for a fixed monthly management fee.',
  },
]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Services</span>
          </nav>
          <h1>Everything property, under one roof.</h1>
          <p>
            Buying, selling, renting, investing or simply checking what your property is worth — one team handles
            it from the first call to the final signature.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--detailed">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 2) * 80}>
                <article className="service-card service-card--detailed">
                  <div className="service-card-head">
                    <span className="service-icon"><Icon name={service.icon} size={22} /></span>
                    <span className="service-index">0{index + 1}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}><Icon name="check" size={14} strokeWidth={2.2} /> {point}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-link">
                    Enquire about this <Icon name="arrowRight" size={15} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our process"
              title="What working with us looks like"
              text="The same four steps whether you are buying a 5 Marla house or a commercial plaza."
            />
          </Reveal>
          <ol className="process-grid process-grid--light">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <li className="process-step">
                  <span className="process-number">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers before you ask"
              text="Still unsure about something? Call us — there is no obligation and no sales script."
            />
            <a href="tel:+913001234567" className="btn btn-green faq-call">
              <Icon name="phone" size={17} /> \+91 97605 89858
            </a>
          </Reveal>

          <div className="accordion">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <div key={faq.q} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span>{faq.q}</span>
                    <Icon name="chevronDown" size={19} />
                  </button>
                  <div className="accordion-panel">
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container about-cta">
          <div>
            <p className="eyebrow eyebrow--light">Ready when you are</p>
            <h2>Tell us what you need — we will do the legwork.</h2>
            <p className="section-text">
              One call is enough for us to tell you honestly whether we can help, and what it would involve.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn btn-gold">
              Book a consultation <Icon name="arrowRight" size={17} />
            </Link>
            <Link to="/properties" className="btn btn-glass">See listings</Link>
          </div>
        </div>
      </section>
    </>
  )
}
