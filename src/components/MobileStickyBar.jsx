import Icon from './Icons.jsx'

export default function MobileStickyBar() {
  const phone = '+919760589858'
  const whatsappUrl = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(
    "Namaste, I'm interested in your properties. Please share more details.",
  )}`

  return (
    <div className="mobile-sticky-bar">
      <button
        type="button"
        className="mobile-sticky-btn mobile-sticky-btn--call"
        onClick={() => {
          const number = phone
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
              setTimeout(() => overlay.remove(), 900)
            } catch (err) {
              window.prompt('Copy this number:', number)
              overlay.remove()
            }
          }
          closeBtn.onclick = () => overlay.remove()
          overlay.onclick = (ev) => { if (ev.target === overlay) overlay.remove() }
        }}
      >
        <Icon name="phone" size={18} />
        <span>Call Now</span>
      </button>
      <a className="mobile-sticky-btn mobile-sticky-btn--whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
