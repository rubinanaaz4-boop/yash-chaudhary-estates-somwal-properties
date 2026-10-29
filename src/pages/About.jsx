import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const values = [
  {
    icon: 'shield',
    title: 'Honesty first',
    text: 'If a property is overpriced, we say so. If a deal is not right for you, we walk away with you.',
  },
  {
    icon: 'pin',
    title: 'Local knowledge',
    text: 'Our advisors live in the areas they sell. Street-level knowledge beats a spreadsheet every time.',
  },
  {
    icon: 'scale',
    title: 'Everything in writing',
    text: 'Commission, timelines and obligations are agreed in writing before any work begins.',
  },
  {
    icon: 'users',
    title: 'Long-term relationships',
    text: 'Two thirds of our clients come back or refer a friend. That is the only marketing metric we care about.',
  },
]

const team = [
  {
    name: 'Yash Chaudhary',
    role: 'Founder & Owner',
    bio: 'Founder of Yash Chaudhary Estates | Somwal Properties, serving Dehradun, Roorkee, Haridwar, Mussoorie, Saharanpur & Rishikesh with trusted property solutions.',
    photo: 'yash',
  },
]

const milestones = [
  { year: '2008', text: 'Yash Chaudhary Estates | Somwal Properties opens a single office on Main Boulevard, Gulberg, with two advisors.' },
  { year: '2012', text: 'First 100 residential deals completed across Lahore.' },
  { year: '2016', text: 'Karachi branch opens in Clifton; rental management service launched.' },
  { year: '2020', text: 'Virtual viewings introduced for overseas Indiai clients.' },
  { year: '2024', text: 'Islamabad office opens in Blue Area. 1,200th property sold.' },
]

const numbers = [
  { value: '1,240+', label: 'Properties sold' },
  { value: '320+', label: 'Rentals managed' },
  { value: '18', label: 'Years in business' },
  { value: '4.9/5', label: 'Average client rating' },
]

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--image">
        <img
          className="page-hero-bg"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt=""
        />
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">About</span>
          </nav>
          <h1>We sell property the way we would for our own family.</h1>
          <p>
            Yash Chaudhary Estates | Somwal Properties is an independent property dealer working across Dehradun, Uttarakhand, India since
            2008. No call centres, no pressure — just people who know the market and answer their phones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split-copy">
            <SectionHeading
              eyebrow="Our story"
              title="Started with one office and a simple promise."
              text="In 2008, Yash Chaudhary opened a small office in Gulberg with a rule that still runs the business: never recommend a property you would not buy yourself."
            />
            <p>
              At the time, most dealers worked on a handshake and a phone number. We decided to do the opposite —
              write everything down, verify every title, and stay reachable after the deal was done. It was slower
              work, but clients started sending their brothers, cousins and colleagues.
            </p>
            <p>
              Eighteen years later we have three offices, a full documentation team and a rental management desk.
              The promise hasn’t changed.
            </p>
            <div className="signature">
            <img src="/yash-chaudhary.jpg" alt="Yash Chaudhary - Founder, Somwal Properties" style={{width:'110px',height:'110px',borderRadius:'50%',objectFit:'cover',marginBottom:'14px',border:'3px solid var(--gold)'}} />
              <strong>Yash Chaudhary</strong>
              <span>Founder, Yash Chaudhary Estates | Somwal Properties</span>
            </div>
          </Reveal>

          <Reveal delay={100} className="split-media">
            <div className="media-stack media-stack--single">
              <img
                className="media-main"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=80"
                alt="Yash Chaudhary Estates | Somwal Properties advisor handing keys to a client"
                loading="lazy"
              />
              <div className="media-badge">
                <strong>Since<br />2008</strong>
                <span>serving families<br />across Uttarakhand, India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-band-grid">
          {numbers.map((n) => (
            <div key={n.label}>
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we stand for"
              title="Four things we do not compromise on"
            />
          </Reveal>
          <div className="value-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <article className="value-card">
                  <span className="service-icon"><Icon name={value.icon} size={22} /></span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
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
              eyebrow="The team"
              title="People you will actually meet"
              text="Every file is handled by a named advisor — not handed between departments."
            />
          </Reveal>
          <div className="team-grid" style={{gridTemplateColumns:'1fr',maxWidth:'420px'}}>
            <Reveal>
              <article className="team-card">
                <div className="team-photo">
                  <img
                    src="/yash-chaudhary.jpg"
                    alt="Yash Chaudhary - Founder, Somwal Properties"
                    loading="lazy"
                  />
                </div>
                <div className="team-body">
                  <h3>Yash Chaudhary</h3>
                  <span>Founder & Owner</span>
                  <p>Founder of Yash Chaudhary Estates | Somwal Properties, serving Dehradun, Roorkee, Haridwar, Mussoorie, Saharanpur & Rishikesh with trusted property solutions.</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container timeline-wrap">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="A steady eighteen years" />
          </Reveal>
          <ol className="timeline">
            {milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 70}>
                <li>
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container about-cta">
          <div>
            <p className="eyebrow eyebrow--light">Let’s talk</p>
            <h2>Looking for property, or ready to sell?</h2>
            <p className="section-text">
              Tell us what you have in mind. A short conversation is usually enough to know whether we can help.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn btn-gold">
              Contact the team <Icon name="arrowRight" size={17} />
            </Link>
            <Link to="/properties" className="btn btn-glass">Browse properties</Link>
          </div>
        </div>
      </section>
    </>
  )
}
