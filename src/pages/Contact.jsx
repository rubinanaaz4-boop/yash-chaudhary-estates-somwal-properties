import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const contactCards = [
  {
    icon: 'pin',
    title: 'Head office',
    lines: ['SHIMLA BYPASS, CHANDRAMANI ROAD', 'NEAR BANSAL HOME, DEHRADUN, UTTARAKHAND, INDIA'],
    action: { label: 'Open in Maps', href: 'https://maps.google.com/?q=Shimla+Bypass+Chandramani+Road+Dehradun+Uttarakhand' },
  },
  {
    icon: 'phone',
    title: 'Call or WhatsApp',
    lines: ['+91 9760589858'],
    action: { label: 'Call now', href: 'tel:+919760589858' },
  },
  {
    icon: 'mail',
    title: 'Email us',
    lines: ['yash.choudharyy89@gmail.com'],
    action: { label: 'Send an email', href: 'mailto:yash.choudharyy89@gmail.com' },
  },
  {
    icon: 'clock',
    title: 'Office hours',
    lines: ['Monday – Saturday', '9:30 am – 7:00 pm'],
    action: { label: 'Book a visit', href: '#enquiry' },
  },
]

const offices = [
  { city: 'Dehradun (Head office)', address: 'SHIMLA BYPASS, CHANDRAMANI ROAD, NEAR BANSAL HOME', phone: '+91 9760589858' },
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <h1>Let’s find your next address.</h1>
          <p>
            Call, WhatsApp, email or simply fill in the form — an advisor will get back to you within one working
            hour during office hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-cards">
          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 60}>
              <article className="contact-card">
                <span className="service-icon"><Icon name={card.icon} size={21} /></span>
                <h3>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <a href={card.action.href} className="text-link">
                  {card.action.label} <Icon name="arrowUpRight" size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--cream" id="enquiry">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <p className="eyebrow">Send an enquiry</p>
            <h2>Tell us what you are looking for.</h2>
            <p className="section-text">
              The more detail you share — area, budget, number of bedrooms, timing — the faster we can send you a
              relevant shortlist instead of a long list.
            </p>

            <ul className="contact-points">
              <li>
                <span className="feature-icon"><Icon name="clock" size={18} /></span>
                <div>
                  <strong>One working hour</strong>
                  <p>Typical response time during office hours.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon"><Icon name="users" size={18} /></span>
                <div>
                  <strong>A real advisor</strong>
                  <p>You speak to the person who will handle your file.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon"><Icon name="shield" size={18} /></span>
                <div>
                  <strong>No obligation</strong>
                  <p>Enquiries are free, and we will tell you if we are not the right fit.</p>
                </div>
              </li>
            </ul>

            <a
              className="btn btn-whatsapp"
              href="https://wa.me/919760589858?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20discuss%20a%20property."
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={100} className="contact-form-wrap">
            <LeadForm
              title="Request a callback"
              text="Fill this in and we will call you back — no obligation."
              interestOptions={[
                'Buying a property',
                'Selling a property',
                'Renting a property',
                'Rental management',
                'Investment advice',
                'Valuation',
                'Something else',
              ]}
              submitLabel="Send enquiry"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container offices-layout">
          <Reveal>
            <div className="map-card map-card--large">
              <iframe
                className="map-embed"
                title="Yash Chaudhary Estates | Somwal Properties - Head Office Location"
                src="https://www.google.com/maps?q=SHIMLA%20BYPASS%2C%20CHANDRAMANI%20ROAD%2C%20NEAR%20BANSAL%20HOME%2C%20DEHRADUN%2C%20UTTARAKHAND%2C%20INDIA&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="map-label">
                <strong>Yash Chaudhary Estates | Somwal Properties — Head Office</strong>
                <span>SHIMLA BYPASS, CHANDRAMANI ROAD, NEAR BANSAL HOME, DEHRADUN, UTTARAKHAND, INDIA</span>
              </div>
              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=SHIMLA%20BYPASS%2C%20CHANDRAMANI%20ROAD%2C%20NEAR%20BANSAL%20HOME%2C%20DEHRADUN%2C%20UTTARAKHAND%2C%20INDIA"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="offices-list">
              <h2>Our offices</h2>
              {offices.map((office) => (
                <div key={office.city} className="office">
                  <h3>{office.city}</h3>
                  <p>{office.address}</p>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`}>
                    <Icon name="phone" size={15} /> {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
