import { useState } from 'react'
import Icon from './Icons.jsx'

export default function LeadForm({
  title = 'Speak to a property advisor',
  text = 'Tell us what you are looking for and we will call you back with a shortlist — no obligation.',
  interestOptions = ['Buying a property', 'Selling a property', 'Renting a property', 'Investment advice', 'Valuation'],
  defaultInterest = '',
  defaultMessage = '',
  submitLabel = 'Request a callback',
  compact = false,
}) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest,
    message: defaultMessage,
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name'
    const digits = values.phone.replace(/[^\d]/g, '')
    if (digits.length < 10) next.phone = 'Please enter a valid phone number'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address'
    }
    setErrors(next)
    if (Object.keys(next).length) return
    setSent(true)
  }

  if (sent) {
    return (
      <div className={`lead-form lead-success ${compact ? 'is-compact' : ''}`}>
        <span className="success-icon">
          <Icon name="check" size={26} strokeWidth={2} />
        </span>
        <h3>Thank you, {values.name.split(' ')[0]}!</h3>
        <p>
          Your enquiry has been noted. A member of our team will call you on{' '}
          <strong>{values.phone}</strong> within one working hour.
        </p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className={`lead-form ${compact ? 'is-compact' : ''}`} onSubmit={submit} noValidate>
      {title && (
        <div className="lead-form-head">
          <h3>{title}</h3>
          {text && <p>{text}</p>}
        </div>
      )}

      <div className="form-grid">
        <label className="form-field">
          <span>Full name *</span>
          <input
            type="text"
            name="name"
            placeholder="e.g. Ahmed Raza"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small className="form-error">{errors.name}</small>}
        </label>

        <label className="form-field">
          <span>Phone / WhatsApp *</span>
          <input
            type="tel"
            name="phone"
            placeholder="03xx xxx xxxx"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <small className="form-error">{errors.phone}</small>}
        </label>

        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <small className="form-error">{errors.email}</small>}
        </label>

        <label className="form-field">
          <span>I am interested in</span>
          <span className="select-wrap">
            <select name="interest" value={values.interest} onChange={update('interest')}>
              <option value="">Select an option</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={16} />
          </span>
        </label>

        <label className="form-field form-field--full">
          <span>Message</span>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            placeholder="Area, budget, number of bedrooms — anything that helps us prepare."
            value={values.message}
            onChange={update('message')}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-green btn-block">
        {submitLabel} <Icon name="arrowRight" size={17} />
      </button>
      <p className="form-note">
        <Icon name="shield" size={14} /> Your details stay private. No spam, no selling of data.
      </p>
    </form>
  )
}
