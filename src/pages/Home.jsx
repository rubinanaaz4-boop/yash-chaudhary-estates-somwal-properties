import { Link } from 'react-router-dom'
import { properties, featuredProperties, services, testimonials } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import SearchPanel from '../components/SearchPanel.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import LeadForm from '../components/LeadForm.jsx'
import Icon from '../components/Icons.jsx'

const stats = [
  { value: '18', label: 'Years in business', suffix: '+' },
  { value: '1,240', label: 'Properties sold', suffix: '+' },
  { value: '320', label: 'Rentals managed', suffix: '+' },
  { value: '4.9', label: 'Client rating', suffix: '/5' },
]

const typeCards = [
  { type: 'House', icon: 'home', text: 'Family homes & bungalows' },
  { type: 'Apartment', icon: 'building', text: 'Flats & penthouses' },
  { type: 'Plot', icon: 'area', text: 'Residential & commercial plots' },
  { type: 'Commercial', icon: 'chart', text: 'Shops, offices & plazas' },
]

const process = [
  { step: '01', title: 'Tell us what you need', text: 'Budget, area, family size — a five minute call is usually enough for us to start.' },
  { step: '02', title: 'Shortlist & site visits', text: 'We send only properties that fit, then walk you through them in person or on video.' },
  { step: '03', title: 'Negotiation & paperwork', text: 'We negotiate the price and our in-house team verifies the title and handles documents.' },
  { step: '04', title: 'Keys in hand', text: 'Transfer, utilities and handover are completed with you at every step until the end.' },
]

const cityImages = {
  Dehradun: 'photo-1600585154340-be6161a56a0c',
  Roorkee: 'photo-1560448204-e02f11c3d0e2',
  Haridwar: 'photo-1580587771525-78b9dba3b914',
  Mussoorie: 'photo-1600596542815-ffad4c1539a9',
  Saharanpur: 'photo-1570129477492-45c003edd2be',
  Rishikesh: 'photo-1600585154526-990dced4db0d',
}

const cityBlurb = {
  Dehradun: 'Rajpur Road, Clement Town, Dalanwala, Mussoorie Road',
  Roorkee: 'Civil Lines, IIT Area, Cantt, Manglour',
  Haridwar: 'Shantikunj Road, Jwalapur, Har Ki Pauri, Bhupatwala',
  Mussoorie: 'Landour, Mall Road, Library Chowk, Happy Valley',
  Saharanpur: 'Court Road, Delhi Road, Mission Compound, Mahesh Nagar',
  Rishikesh: 'Tapovan, Laxman Jhula, Swarg Ashram, Ram Jhula',
}

export default function Home() {
  const cityCounts = properties.reduce((acc, p) => {
    acc[p.city] = (acc[p.city] || 0) + 1
    return acc
  }, {})

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" alt="" />
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-inner">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow-dot" /> Somwal Properties
          </p>
          <h1 className="hero-title">
            Yash Chaudhary Estates
            <br />
            <em>Somwal Properties</em>
          </h1>
          <p className="hero-text">
            Rental homes, sale and purchase of all kinds of plots, apartments, bungalows, commercial space etc. in
            Dehradun, Uttarakhand, India. Trusted guidance for buying, selling & renting with complete peace of
            mind.
          </p>

          <div className="hero-actions">
            <Link to="/properties" className="btn btn-gold">
              Somwal Properties <Icon name="arrowRight" size={18} />
            </Link>
            <a href="tel:+919760589858" className="btn btn-glass">
              <Icon name="phone" size={17} /> +91 97605 89858
            </a>
          </div>

          <SearchPanel />

          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>
                  {s.value}
                  <span>{s.suffix}</span>
                </strong>
                <span className="hero-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <Reveal>
              <SectionHeading
                eyebrow="Handpicked for you"
                title="Featured properties"
                text="A selection from our current portfolio — every listing visited and verified by our team."
              />
            </Reveal>
            <Reveal delay={80}>
              <Link to="/properties" className="btn btn-outline">
                View all properties <Icon name="arrowUpRight" size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="property-grid">
            {featuredProperties.slice(0, 6).map((property, index) => (
              <Reveal key={property.id} delay={(index % 3) * 90}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Start with a category"
              title="What are you looking for?"
            />
          </Reveal>
          <div className="type-grid">
            {typeCards.map((card, index) => {
              const count = properties.filter((p) =>
                card.type === 'Commercial' ? p.type === 'Commercial' : p.type === card.type,
              ).length
              return (
                <Reveal key={card.type} delay={index * 70}>
                  <Link to={`/properties?type=${card.type}`} className="type-card">
                    <span className="type-icon">
                      <Icon name={card.icon} size={24} />
                    </span>
                    <h3>{card.type === 'Commercial' ? 'Commercial' : `${card.type}s`}</h3>
                    <p>{card.text}</p>
                    <span className="type-count">
                      {count} listing{count === 1 ? '' : 's'} <Icon name="arrowRight" size={14} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split">
          <Reveal className="split-media">
            <div className="media-stack">
              <img
                className="media-main"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80"
                alt="Premium property in Dehradun"
                loading="lazy"
              />
              <img
                className="media-small"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80"
                alt="Property advisor handing over keys"
                loading="lazy"
              />
              <div className="media-badge">
                <strong>18</strong>
                <span>years of local<br />market experience</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="split-copy">
            <SectionHeading
              eyebrow="Why Rashid Estates"
              title="A property dealer that behaves like your family's advisor."
              text="We started with one office in Gulberg in 2008. The market has changed many times since then; our approach hasn't. We tell you what a property is actually worth, what the paperwork will involve, and when a deal is not right for you."
            />

            <ul className="feature-list">
              <li>
                <span className="feature-icon"><Icon name="shield" size={20} /></span>
                <div>
                  <strong>Verified listings only</strong>
                  <p>Every title checked, every property visited before it reaches this website.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon"><Icon name="scale" size={20} /></span>
                <div>
                  <strong>Transparent commission</strong>
                  <p>Our fee is agreed in writing before we start. No surprises at the registry office.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon"><Icon name="users" size={20} /></span>
                <div>
                  <strong>Local people, not call centres</strong>
                  <p>The advisor you speak to on day one is the one who handles your file to the end.</p>
                </div>
              </li>
            </ul>

            <Link to="/about" className="text-link text-link--lg">
              Meet the team <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <Reveal>
              <SectionHeading
                eyebrow="How we can help"
                title="Everything property, under one roof."
                text="Whether you are buying your first home or adding to a portfolio, the same team handles it end to end."
              />
            </Reveal>
            <Reveal delay={80}>
              <Link to="/services" className="btn btn-outline">
                All services <Icon name="arrowUpRight" size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="services-grid">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article className="service-card">
                  <span className="service-icon">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={14} strokeWidth={2.2} /> {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="Simple, start to finish"
              title="How we work with you"
              text="No pressure, no chasing. Just a clear path from first call to handover."
            />
          </Reveal>
          <ol className="process-grid">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
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

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <SectionHeading align="center" eyebrow="Local knowledge" title="Areas we know best" />
          </Reveal>
          <div className="city-grid">
            {Object.keys(cityImages).map((city, index) => (
              <Reveal key={city} delay={index * 70}>
                <Link to={`/properties?city=${city}`} className="city-card">
                  <img
                    src={`https://images.unsplash.com/${cityImages[city]}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Property in ${city}`}
                    loading="lazy"
                  />
                  <div className="city-overlay" />
                  <div className="city-content">
                    <h3>{city}</h3>
                    <p>{cityBlurb[city]}</p>
                    <span>
                      {cityCounts[city] || 0} listings <Icon name="arrowUpRight" size={14} />
                    </span>
                  </div>
                </Link>
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
              eyebrow="Client stories"
              title="What our clients say"
              text="Most of our business comes from people we have already worked with, and their families."
            />
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((t, index) => (
              <Reveal key={t.name} delay={index * 90}>
                <figure className="testimonial">
                  <Icon name="quote" size={28} className="quote-icon" />
                  <div className="stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon key={i} name="star" size={15} filled strokeWidth={1} />
                    ))}
                  </div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="avatar">{t.initials}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <small>{t.role}</small>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-grid">
          <Reveal className="cta-copy">
            <p className="eyebrow">Thinking of selling?</p>
            <h2>Find out what your property is worth — free.</h2>
            <p className="section-text">
              Book a no-obligation valuation. We will visit, review recent sales in your area and give you a
              realistic figure in writing within 48 hours.
            </p>
            <ul className="cta-points">
              <li><Icon name="check" size={16} strokeWidth={2.2} /> Free, written valuation</li>
              <li><Icon name="check" size={16} strokeWidth={2.2} /> Professional photography included</li>
              <li><Icon name="check" size={16} strokeWidth={2.2} /> No fee until your property sells</li>
            </ul>
            <a href="tel:+919760589858" className="cta-phone">
              <span><Icon name="phone" size={18} /></span>
              <div>
                <small>Prefer to talk?</small>
                <strong>+92 300 123 4567</strong>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120} className="cta-form">
            <LeadForm
              title="Request your free valuation"
              text="Share a few details and we will call to arrange a convenient time."
              defaultInterest="Valuation"
              submitLabel="Book my valuation"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
