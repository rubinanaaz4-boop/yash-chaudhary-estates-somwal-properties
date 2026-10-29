import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light" aria-label="Yash Chaudhary Estates — home">
            <span className="brand-mark" aria-hidden="true">
              <span>YC</span>
            </span>
            <span className="brand-text">
              <strong>Yash Chaudhary</strong>
              <small>Estates</small>
            </span>
          </Link>
          <p className="footer-blurb">
            Trusted property consultant in Dehradun, Uttarakhand, India. Rental homes, sale and purchase of all
            kinds of plots, apartments, bungalows, commercial spaces and more — with honest advice and end-to-end
            support.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.4V14h2.7v8h3.4Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="3.7" />
                <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.9 8.7H3.6V21h3.3V8.7ZM5.2 3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 21h-3.3v-6.4c0-1.6-.6-2.5-1.9-2.5-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V21H9.8s.1-11.2 0-12.3h3.3v1.8c.4-.7 1.3-1.9 3.3-1.9 2.4 0 4 1.6 4 4.9V21Z" />
              </svg>
            </a>
            <a href="https://wa.me/919760589858" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social">
              <Icon name="whatsapp" size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/properties">All properties</Link></li>
            <li><Link to="/properties?purpose=Sale">Buy a home</Link></li>
            <li><Link to="/properties?purpose=Rent">Rent a home</Link></li>
            <li><Link to="/services">Our services</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Areas we serve</h4>
          <ul>
            <li><Link to="/properties?city=Dehradun">Dehradun</Link></li>
            <li><Link to="/properties?city=Roorkee">Roorkee</Link></li>
            <li><Link to="/properties?city=Haridwar">Haridwar</Link></li>
            <li><Link to="/properties?city=Mussoorie">Mussoorie</Link></li>
            <li><Link to="/properties?city=Saharanpur">Saharanpur</Link></li>
            <li><Link to="/properties?city=Rishikesh">Rishikesh</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Get in touch</h4>
          <ul className="contact-list">
            <li>
              <Icon name="pin" size={18} />
              <span>SHIMLA BYPASS, CHANDRAMANI ROAD,<br />NEAR BANSAL HOME,<br />DEHRADUN, UTTARAKHAND, INDIA</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href="tel:+919760589858">+91 9760589858</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href="mailto:yash.choudharyy89@gmail.com">yash.choudharyy89@gmail.com</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>Mon – Sat, 9:30 am – 7:00 pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Yash Chaudhary Estates | Somwal Properties. All rights reserved.</p>
        <p className="footer-legal">
          <a href="#">Privacy</a>
          <span aria-hidden="true">·</span>
          <a href="#">Terms</a>
          <span aria-hidden="true">·</span>
          <span>Property Consultant — Dehradun, Uttarakhand</span>
        </p>
      </div>
    </footer>
  )
}
