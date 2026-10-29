export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, children }) {
  return (
    <div className={`section-heading align-${align} ${light ? 'is-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {text && <p className="section-text">{text}</p>}
      {children}
    </div>
  )
}
