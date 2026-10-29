import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { properties, cities, propertyTypes } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import Icon from '../components/Icons.jsx'

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

const budgetRanges = {
  sale: { 'under-1': [0, 10000000], '1-3': [10000000, 30000000], '3-6': [30000000, 60000000], '6-plus': [60000000, Infinity] },
  rent: { 'under-1': [0, 100000], '1-3': [100000, 300000], '3-5': [300000, 500000], '5-plus': [500000, Infinity] },
}

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [view, setView] = useState('grid')
  const [visible, setVisible] = useState(6)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const q = searchParams.get('q') || ''
  const purpose = searchParams.get('purpose') || 'All'
  const city = searchParams.get('city') || ''
  const type = searchParams.get('type') || ''
  const budget = searchParams.get('budget') || ''
  const beds = searchParams.get('beds') || ''
  const sort = searchParams.get('sort') || 'newest'

  const update = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'All') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
    setVisible(6)
  }

  useEffect(() => {
    if (purpose === 'Rent' && ['3-6', '6-plus'].includes(budget)) update('budget', '')
    if (purpose !== 'Rent' && ['3-5', '5-plus'].includes(budget)) update('budget', '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purpose])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    const table = purpose === 'Rent' ? budgetRanges.rent : budgetRanges.sale
    const range = budget ? table[budget] : null

    return properties
      .filter((p) => {
        if (term) {
          const haystack = `${p.title} ${p.area} ${p.city} ${p.type} ${p.description}`.toLowerCase()
          if (!haystack.includes(term)) return false
        }
        if (purpose !== 'All' && p.purpose !== purpose) return false
        if (city && p.city !== city) return false
        if (type) {
          if (type === 'House' && !['House', 'Villa', 'Bungalow'].includes(p.type)) return false
          if (type !== 'House' && p.type !== type) return false
        }
        if (beds && p.beds < Number(beds)) return false
        if (range) {
          const compare = p.purpose === 'Rent' ? p.price : p.price
          if (compare < range[0] || compare >= range[1]) return false
        }
        return true
      })
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price
        if (sort === 'price-desc') return b.price - a.price
        return new Date(b.posted) - new Date(a.posted)
      })
  }, [q, purpose, city, type, budget, beds, sort])

  const activeFilters = [
    q && { key: 'q', label: `“${q}”` },
    city && { key: 'city', label: city },
    type && { key: 'type', label: type },
    budget && {
      key: 'budget',
      label: (purpose === 'Rent' ? rentBudgets : saleBudgets).find((b) => b.value === budget)?.label,
    },
    beds && { key: 'beds', label: `${beds}+ beds` },
  ].filter(Boolean)

  const clearAll = () => {
    setSearchParams(purpose !== 'All' ? { purpose } : {}, { replace: true })
    setVisible(6)
  }

  const budgets = purpose === 'Rent' ? rentBudgets : saleBudgets

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Properties</span>
          </nav>
          <h1>Property listings</h1>
          <p>
            {purpose === 'Rent'
              ? 'Rental homes, apartments and commercial spaces across Uttarakhand, India.'
              : 'Houses, apartments, plots and commercial property — visited, verified and ready for a viewing.'}
          </p>
        </div>
      </section>

      <section className="section section--filters">
        <div className="container">
          <div className="filter-card">
            <div className="filter-top">
              <div className="filter-search">
                <Icon name="search" size={18} />
                <input
                  type="search"
                  placeholder="Search by area, city or property name…"
                  value={q}
                  onChange={(e) => update('q', e.target.value)}
                  aria-label="Search properties"
                />
              </div>
              <div className="filter-tabs" role="group" aria-label="Purpose">
                {['All', 'Sale', 'Rent'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`filter-tab ${purpose === option ? 'is-active' : ''}`}
                    onClick={() => update('purpose', option)}
                  >
                    {option === 'All' ? 'All' : option === 'Sale' ? 'Buy' : 'Rent'}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn btn-outline btn-sm filters-toggle"
                onClick={() => setFiltersOpen((v) => !v)}
                aria-expanded={filtersOpen}
              >
                Filters <Icon name="chevronDown" size={15} className={filtersOpen ? 'rotated' : ''} />
              </button>
            </div>

            <div className={`filter-grid ${filtersOpen ? 'is-open' : ''}`}>
              <label className="field">
                <span className="field-label">City</span>
                <span className="select-wrap">
                  <select value={city} onChange={(e) => update('city', e.target.value)}>
                    <option value="">All cities</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <Icon name="chevronDown" size={15} />
                </span>
              </label>

              <label className="field">
                <span className="field-label">Property type</span>
                <span className="select-wrap">
                  <select value={type} onChange={(e) => update('type', e.target.value)}>
                    <option value="">All types</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t === 'House' ? 'House / Villa / Bungalow' : t}</option>
                    ))}
                  </select>
                  <Icon name="chevronDown" size={15} />
                </span>
              </label>

              <label className="field">
                <span className="field-label">Budget {purpose !== 'Rent' && <em>(sale price)</em>}</span>
                <span className="select-wrap">
                  <select value={budget} onChange={(e) => update('budget', e.target.value)}>
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                  <Icon name="chevronDown" size={15} />
                </span>
              </label>

              <label className="field">
                <span className="field-label">Bedrooms</span>
                <span className="select-wrap">
                  <select value={beds} onChange={(e) => update('beds', e.target.value)}>
                    <option value="">Any</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}+ bedrooms</option>
                    ))}
                  </select>
                  <Icon name="chevronDown" size={15} />
                </span>
              </label>

              <div className="filter-clear-wrap">
                <button type="button" className="btn btn-ghost btn-sm" onClick={clearAll}>
                  <Icon name="close" size={14} /> Reset filters
                </button>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="active-filters">
                <span className="active-filters-label">Active:</span>
                {activeFilters.map((f) => (
                  <button key={f.key} type="button" className="chip" onClick={() => update(f.key, '')}>
                    {f.label} <Icon name="close" size={12} />
                  </button>
                ))}
                <button type="button" className="chip chip--clear" onClick={clearAll}>
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="results-bar">
            <p>
              <strong>{filtered.length}</strong> propert{filtered.length === 1 ? 'y' : 'ies'} found
              {purpose !== 'All' && <span className="results-purpose"> · For {purpose.toLowerCase()}</span>}
            </p>
            <div className="results-tools">
              <label className="sort-field">
                <span>Sort by</span>
                <select value={sort} onChange={(e) => update('sort', e.target.value)} aria-label="Sort properties">
                  <option value="newest">Newest first</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                </select>
              </label>
              <div className="view-toggle" role="group" aria-label="Layout">
                <button
                  type="button"
                  className={view === 'grid' ? 'is-active' : ''}
                  onClick={() => setView('grid')}
                  aria-label="Grid view"
                  aria-pressed={view === 'grid'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="7.5" height="7.5" /><rect x="13.5" y="3" width="7.5" height="7.5" />
                    <rect x="3" y="13.5" width="7.5" height="7.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={view === 'list' ? 'is-active' : ''}
                  onClick={() => setView('list')}
                  aria-label="List view"
                  aria-pressed={view === 'list'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon"><Icon name="search" size={26} /></span>
              <h2>No properties match those filters</h2>
              <p>Try widening your budget or removing a filter. Our team can also look for off-market options.</p>
              <div className="empty-actions">
                <button type="button" className="btn btn-green" onClick={clearAll}>
                  Reset filters
                </button>
                <Link to="/contact" className="btn btn-outline">
                  Ask us to find one
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className={view === 'grid' ? 'property-grid' : 'property-list'}>
                {filtered.slice(0, visible).map((property) => (
                  <PropertyCard key={property.id} property={property} variant={view} />
                ))}
              </div>

              {visible < filtered.length && (
                <div className="load-more">
                  <button type="button" className="btn btn-outline" onClick={() => setVisible((v) => v + 6)}>
                    Load more properties
                  </button>
                  <p>Showing {Math.min(visible, filtered.length)} of {filtered.length}</p>
                </div>
              )}
            </>
          )}

          <div className="properties-cta">
            <div>
              <h3>Can’t find the right property?</h3>
              <p>Send us your requirements and we will check our off-market list before anything is advertised.</p>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Tell us what you need <Icon name="arrowRight" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
