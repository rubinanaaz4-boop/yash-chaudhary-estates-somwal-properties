import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'

export default function PropertyCard({ property, variant = 'grid' }) {
  const [saved, setSaved] = useState(false)
  const { slug, title, city, area, purpose, type, beds, baths, size, priceLabel, priceNote, image, badge } =
    property

  return (
    <article className={`property-card property-card--${variant}`}>
      <Link to={`/property/${slug}`} className="card-media" aria-label={`View ${title}`}>
        <img src={image} alt={`${title} in ${area}, ${city}`} loading="lazy" />
        <span className={`card-purpose ${purpose === 'Rent' ? 'is-rent' : ''}`}>{purpose}</span>
        <span className="card-type">{type}</span>
      </Link>

      <button
        type="button"
        className={`card-heart ${saved ? 'is-saved' : ''}`}
        aria-label={saved ? 'Remove from shortlist' : 'Save to shortlist'}
        aria-pressed={saved}
        onClick={() => setSaved((v) => !v)}
      >
        <Icon name="heart" size={17} filled={saved} />
      </button>

      <div className="card-body">
        <div className="card-topline">
          <p className="card-price">
            {priceLabel}
            {priceNote && <small>{priceNote}</small>}
          </p>
          {badge && <span className={`card-badge badge-${badge.split(' ')[0].toLowerCase()}`}>{badge}</span>}
        </div>

        <h3 className="card-title">
          <Link to={`/property/${slug}`}>{title}</Link>
        </h3>
        <p className="card-location">
          <Icon name="pin" size={15} />
          {area}, {city}
        </p>

        <ul className="card-specs">
          {beds > 0 && (
            <li>
              <Icon name="bed" size={17} /> {beds} Beds
            </li>
          )}
          {baths > 0 && (
            <li>
              <Icon name="bath" size={17} /> {baths} Baths
            </li>
          )}
          <li>
            <Icon name="area" size={16} /> {size}
          </li>
        </ul>

        <div className="card-foot">
          <div className="card-actions">
            <button
              type="button"
              className="btn btn-call btn-sm"
              aria-label="Call Now"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) e.nativeEvent.stopImmediatePropagation()
                const number = '+919760589858'
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                if (isMobile) {
                  const a = document.createElement('a')
                  a.href = `tel:${number}`
                  document.body.appendChild(a)
                  a.click()
                  document.body.removeChild(a)
                  return
                }
                const existing = document.getElementById('call-copy-modal')
                if (existing) existing.remove()
                const overlay = document.createElement('div')
                overlay.id = 'call-copy-modal'
                overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;z-index:99999;padding:16px;'
                const modal = document.createElement('div')
                modal.style.cssText = 'background:#fff;border-radius:16px;max-width:320px;width:100%;padding:24px;text-align:center;box-shadow:0 40px 60px -30px rgba(0,0,0,0.4);'
                modal.innerHTML = `
                  <div style="font-size:16px;font-weight:600;margin-bottom:8px;">Call Us</div>
                  <div style="font-size:18px;letter-spacing:1px;margin-bottom:18px;">${number}</div>
                  <button id="copy-call-btn" style="width:100%;padding:12px 16px;border-radius:999px;background:linear-gradient(135deg,#0f766e,#14b8a6);color:#fff;font-weight:500;border:0;">Copy Number</button>
                  <button id="close-call-btn" style="margin-top:10px;width:100%;padding:10px 16px;border-radius:999px;background:transparent;color:#5b6a61;border:0;">Cancel</button>
                `
                overlay.appendChild(modal)
                document.body.appendChild(overlay)
                const copyBtn = modal.querySelector('#copy-call-btn')
                const closeBtn = modal.querySelector('#close-call-btn')
                copyBtn.onclick = () => {
                  try {
                    const ta = document.createElement('textarea')
                    ta.value = number
                    ta.style.position = 'fixed'
                    ta.style.left = '-9999px'
                    document.body.appendChild(ta)
                    ta.select()
                    document.execCommand('copy')
                    document.body.removeChild(ta)
                    copyBtn.innerText = 'Copied!'
                    setTimeout(() => {
                      overlay.remove()
                    }, 900)
                  } catch (err) {
                    window.prompt('Copy this number:', number)
                    overlay.remove()
                  }
                }
                closeBtn.onclick = () => overlay.remove()
                overlay.onclick = (ev) => {
                  if (ev.target === overlay) overlay.remove()
                }
              }}
            >
              <Icon name="phone" size={16} /> Call
            </button>
            <a
              className="btn btn-whatsapp btn-sm"
              href={`https://wa.me/919760589858?text=${encodeURIComponent(
                `Namaste, I'm interested in "${title}" at ${area}, ${city}. For ${purpose.toLowerCase()}. Price: ${priceLabel}${priceNote || ''}. Please share more details.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Enquire on WhatsApp"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp
            </a>
          </div>
          <Link to={`/property/${slug}`} className="text-link card-view-link">
            View details <Icon name="arrowRight" size={15} />
          </Link>
        </div>
      </div>
    </article>
  )
}
