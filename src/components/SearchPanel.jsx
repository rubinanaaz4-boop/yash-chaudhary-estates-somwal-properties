import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cities, propertyTypes } from '../data/properties.js'
import Icon from './Icons.jsx'

const saleBudgets = [
  { value: '', label: 'Any budget' },
  { value: 'under-1', label: 'Under 1 Crore' },
  { value: '1-3', label: '1 – 3 Crore' },
  { value: '3-6', label: '3 – 6 Crore' },
  { value: '6-plus', label: '6 Crore +' },
]

const rentBudgets = [
  { value: '', label: 'Any budget' },
  { value: 'under-1', label: 'Under 1 Lakh' },
  { value: '1-3', label: '1 – 3 Lakh' },
  { value: '3-5', label: '3 – 5 Lakh' },
  { value: '5-plus', label: '5 Lakh +' },
]

export default function SearchPanel({ compact = false, initial = {} }) {
  const navigate = useNavigate()
  const [purpose, setPurpose] = useState(initial.purpose || 'Sale')
  const [city, setCity] = useState(initial.city || '')
  const [type, setType] = useState(initial.type || '')
  const [budget, setBudget] = useState(initial.budget || '')

  const budgets = purpose === 'Rent' ? rentBudgets : saleBudgets

  const submit = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    params.set('purpose', purpose)
    if (city) params.set('city', city)
    if (type) params.set('type', type)
    if (budget) params.set('budget', budget)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <form className={`search-panel ${compact ? 'is-compact' : ''}`} onSubmit={submit}>
      <div className="search-tabs" role="tablist" aria-label="Buy or rent">
        {['Sale', 'Rent'].map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={purpose === option}
            className={`search-tab ${purpose === option ? 'is-active' : ''}`}
            onClick={() => {
              setPurpose(option)
              setBudget('')
            }}
          >
            {option === 'Sale' ? 'Buy' : 'Rent'}
          </button>
        ))}
      </div>

      <div className="search-fields">
        <label className="field">
          <span className="field-label">Location</span>
          <span className="select-wrap">
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={16} />
          </span>
        </label>

        <label className="field">
          <span className="field-label">Property type</span>
          <span className="select-wrap">
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={16} />
          </span>
        </label>

        <label className="field">
          <span className="field-label">Budget</span>
          <span className="select-wrap">
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              {budgets.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={16} />
          </span>
        </label>

        <button type="submit" className="btn btn-green search-submit">
          <Icon name="search" size={19} />
          Search
        </button>
      </div>
    </form>
  )
}
