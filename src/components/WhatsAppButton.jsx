import Icon from './Icons.jsx'

const message = encodeURIComponent(
  "Namaste! I'm interested in a property listed on your website. Could you share more details?",
)

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/919760589858?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float-icon">
        <Icon name="whatsapp" size={24} strokeWidth={1.5} />
      </span>
      <span className="whatsapp-float-text">
        <small>Questions?</small>
        Chat on WhatsApp
      </span>
    </a>
  )
}
