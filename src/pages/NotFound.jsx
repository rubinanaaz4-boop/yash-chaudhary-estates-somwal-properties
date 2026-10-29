import { Link } from 'react-router-dom'
import Icon from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This address doesn’t exist.</h1>
        <p className="section-text">
          The page you are looking for may have moved. Let’s get you back to the property listings.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-green">
            Back to home <Icon name="arrowRight" size={17} />
          </Link>
          <Link to="/properties" className="btn btn-outline">
            Browse properties
          </Link>
        </div>
      </div>
    </section>
  )
}
