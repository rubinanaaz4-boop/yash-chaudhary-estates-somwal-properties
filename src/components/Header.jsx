import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icons.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/properties', label: 'Properties' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // The header floats over the dark home hero, but sits solid on inner pages.
  const solid = scrolled || pathname !== '/'

  return (
    <header className={`site-header ${solid ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Yash Chaudhary Estates | Somwal Properties">
          <span className="brand-mark brand-mark--img" aria-hidden="true">
            <img src="/logo.png" alt="Yash Chaudhary Estates | Somwal Properties" />
          </span>
          <span className="brand-text">
            <strong>Yash Chaudhary</strong>
            <small>Estates | Somwal Properties</small>
          </span>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-drawer-extra">
            <p className="nav-drawer-label">Talk to an advisor</p>
            <a href="tel:+919760589858" className="nav-drawer-call">
              <Icon name="phone" size={18} /> +91 97605 89858
            </a>
            <a
              href="https://wa.me/919760589858?text=Namaste%2C%20I%20would%20like%20to%20discuss%20a%20property."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-block"
            >
              <Icon name="whatsapp" size={18} /> WhatsApp us
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a href="tel:+919760589858" className="header-call-btn" onClick={(e) => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            if (!isMobile) {
              e.preventDefault()
              const number = '+919760589858'
              try {
                const ta = document.createElement('textarea')
                ta.value = number
                ta.style.position = 'fixed'
                ta.style.left = '-9999px'
                document.body.appendChild(ta)
                ta.select()
                document.execCommand('copy')
                document.body.removeChild(ta)
                alert('Number copied: ' + number)
              } catch (err) {
                prompt('Copy this number:', number)
              }
            }
          }}>
            <Icon name="phone" size={16} />
            <span>Call Now</span>
          </a>
          <a href="tel:+919760589858" className="header-phone">
            <Icon name="phone" size={17} />
            <span>+91 97605 89858</span>
          </a>
          <Link to="/contact" className="btn btn-gold btn-sm header-cta">
            Book a visit
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
