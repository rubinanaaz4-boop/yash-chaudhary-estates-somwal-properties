import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProperty, properties, cities } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import LeadForm from '../components/LeadForm.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const agent = {
  name: 'Yash Chaudhary',
  role: 'Founder & Owner',
  phone: '+91 97605 89858',
  email: 'yash.choudharyy89@gmail.com',
  photo: '/yash-chaudhary.jpg',
}

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getProperty(slug)
  const [lightbox, setLightbox] = useState(null)
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((i) => (i + 1) % property.gallery.length)
      if (event.key === 'ArrowLeft') setLightbox((i) => (i - 1 + property.gallery.length) % property.gallery.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, property])

  if (!property) {
    return (
      <section className="section">
        <div className="container empty-state">
          <span className="empty-icon"><Icon name="home" size={26} /></span>
          <h2>Property not found</h2>
          <p>This listing may have been sold or removed. Browse our current properties instead.</p>
          <Link to="/properties" className="btn btn-green">View all properties</Link>
        </div>
      </section>
    )
  }

  const similar = properties
    .filter((p) => p.id !== property.id && (p.city === property.city || p.type === property.type))
    .slice(0, 3)

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const specs = [
    { label: 'Purpose', value: `For ${property.purpose}` },
    { label: 'Type', value: property.type },
    { label: 'Bedrooms', value: property.beds > 0 ? property.beds : '—' },
    { label: 'Bathrooms', value: property.baths > 0 ? property.baths : '—' },
    { label: 'Covered area', value: property.size },
    { label: 'City', value: property.city },
    { label: 'Area', value: property.area },
    { label: 'Listed on', value: new Date(property.posted).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) },
  ]

  return (
    <>
      <section className="detail-top">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/properties">Properties</Link>
            <span>/</span>
            <span aria-current="page">{property.title}</span>
          </nav>

          <div className="detail-head">
            <div>
              <div className="detail-tags">
                <span className={`card-purpose ${property.purpose === 'Rent' ? 'is-rent' : ''}`}>
                  For {property.purpose}
                </span>
                <span className="detail-type">{property.type}</span>
                {property.badge && <span className="detail-badge">{property.badge}</span>}
              </div>
              <h1>{property.title}</h1>
              <p className="detail-loc">
                <Icon name="pin" size={17} /> {property.area}, {property.city} , Uttarakhand, India
              </p>
            </div>
            <div className="detail-price-box">
              <div className="detail-price">
                {property.priceLabel}
                {property.priceNote && <small>{property.priceNote}</small>}
              </div>
              <div className="detail-actions">
                <button type="button" className="btn btn-outline btn-sm" onClick={share}>
                  <Icon name="arrowUpRight" size={15} /> {copied ? 'Link copied' : 'Share'}
                </button>
                <button
                  type="button"
                  className={`btn btn-outline btn-sm ${saved ? 'is-saved' : ''}`}
                  onClick={() => setSaved((v) => !v)}
                  aria-pressed={saved}
                >
                  <Icon name="heart" size={15} filled={saved} /> {saved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>

          <div className="detail-gallery">
            <button type="button" className="gallery-main" onClick={() => setLightbox(0)}>
              <img src={property.gallery[0]} alt={`${property.title} — main view`} />
              <span className="gallery-count">
                <Icon name="area" size={14} /> View all {property.gallery.length} photos
              </span>
            </button>
            <div className="gallery-side">
              {property.gallery.slice(1, 3).map((src, index) => (
                <button type="button" key={src} onClick={() => setLightbox(index + 1)}>
                  <img src={src} alt={`${property.title} — photo ${index + 2}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-body">
        <div className="container detail-layout">
          <div className="detail-main">
            <div className="detail-specs">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>

            <div className="detail-block">
              <h2>About this property</h2>
              <p>{property.description}</p>
              <p>
                Located in {property.area}, {property.city}, the property is well connected to schools, markets
                and main roads. Our team has visited the site and reviewed the ownership documents; full details
                are available on request.
              </p>
            </div>

            <div className="detail-block">
              <h2>Features & amenities</h2>
              <ul className="feature-checks">
                {property.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={15} strokeWidth={2.3} /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h2>Location</h2>
              <p>
                {property.area} is one of the most sought-after addresses in {property.city}. Speak to our team
                for a walk-through of the street, nearby amenities and what recent sales in the area have
                achieved.
              </p>
              <div className="map-card">
                <div className="map-grid" aria-hidden="true" />
                <div className="map-pin">
                  <Icon name="pin" size={22} />
                </div>
                <div className="map-label">
                  <strong>{property.area}</strong>
                  <span>{property.city} , Uttarakhand, India</span>
                </div>
                <a
                  className="map-link"
                  href={`https://www.google.com/maps/search/${encodeURIComponent(`${property.area}, ${property.city}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="agent-card">
              <div className="agent-head">
                <img src={agent.photo} alt={agent.name} loading="lazy" />
                <div>
                  <span className="agent-label">Listed by</span>
                  <strong>{agent.name}</strong>
                  <small>{agent.role}</small>
                </div>
              </div>
              <ul className="agent-contact">
                <li>
                  <a href={`tel:${agent.phone.replace(/\s/g, '')}`}>
                    <Icon name="phone" size={16} /> {agent.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${agent.email}`}>
                    <Icon name="mail" size={16} /> {agent.email}
                  </a>
                </li>
                <li className="agent-hours">
                  <Icon name="clock" size={16} /> Usually replies within an hour
                </li>
              </ul>
              <a
                className="btn btn-whatsapp btn-block"
                href={`https://wa.me/919760589858?text=${encodeURIComponent(
                  `Namaste, I'm interested in "${property.title}" at ${property.area}, ${property.city}. For ${property.purpose.toLowerCase()} - ${property.priceLabel}${property.priceNote || ''}. Please share more details.`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size={18} /> Enquire on WhatsApp
              </a>
            </div>

            <div className="sidebar-form">
              <LeadForm
                compact
                title="Book a viewing"
                text="Tell us a good time and we will arrange the visit."
                defaultInterest={property.purpose === 'Rent' ? 'Renting a property' : 'Buying a property'}
                defaultMessage={`I'm interested in ${property.title} (${property.area}, ${property.city}). Please contact me.`}
                submitLabel="Request a viewing"
              />
            </div>

            <div className="assurance-card">
              <h4>Buying with Yash Chaudhary Estates | Somwal Properties</h4>
              <ul>
                <li><Icon name="shield" size={15} /> Title verified before listing</li>
                <li><Icon name="scale" size={15} /> Written commission agreement</li>
                <li><Icon name="users" size={15} /> One advisor, start to finish</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <div className="section-head-row">
              <Reveal>
                <div className="section-heading">
                  <p className="eyebrow">You may also like</p>
                  <h2>Similar properties</h2>
                </div>
              </Reveal>
              <Link to={`/properties?city=${property.city}`} className="btn btn-outline">
                More in {property.city} <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <div className="property-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Property photos">
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close photos">
            <Icon name="close" size={24} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label="Previous photo"
            onClick={() => setLightbox((i) => (i - 1 + property.gallery.length) % property.gallery.length)}
          >
            <Icon name="arrowRight" size={24} className="flip" />
          </button>
          <figure>
            <img src={property.gallery[lightbox]} alt={`${property.title} — photo ${lightbox + 1}`} />
            <figcaption>
              {property.title} · {lightbox + 1} / {property.gallery.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label="Next photo"
            onClick={() => setLightbox((i) => (i + 1) % property.gallery.length)}
          >
            <Icon name="arrowRight" size={24} />
          </button>
          <div className="lightbox-thumbs">
            {property.gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                className={index === lightbox ? 'is-active' : ''}
                onClick={() => setLightbox(index)}
                aria-label={`Photo ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
