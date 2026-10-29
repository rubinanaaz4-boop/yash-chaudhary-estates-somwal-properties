const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  whatsapp: <><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.5L3.5 20.5l1.4-4.5a8.4 8.4 0 1 1 15.6-4.4Z" /><path d="M8.7 8.2c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6a7 7 0 0 0 3.1 2.6c.3.1.4 0 .6-.1l.7-.8c.1-.2.3-.2.5-.1l1.6.8c.3.1.4.2.4.4a2.3 2.3 0 0 1-1.5 2.1c-.6.2-1.3.2-2.1 0a10.6 10.6 0 0 1-5.6-4.7 4.6 4.6 0 0 1-.7-2.2c0-.7.2-1.3.4-1.5Z" /></>,
  arrowRight: <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  heart: <path d="M12 20.5s-7.5-4.4-7.5-9.6A4.4 4.4 0 0 1 12 7.8a4.4 4.4 0 0 1 7.5 3.1c0 5.2-7.5 9.6-7.5 9.6Z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  star: <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9Z" />,
  menu: <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>,
  close: <><path d="m5 5 14 14" /><path d="M19 5 5 19" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.4 2" /></>,
  shield: <><path d="M12 22s8-3.5 8-10V5.5L12 2 4 5.5V12c0 6.5 8 10 8 10Z" /><path d="m8.8 11.8 2.2 2.2 4.2-4.4" /></>,
  home: <><path d="m3 10.5 9-7.5 9 7.5" /><path d="M5.5 9.5V21h13V9.5" /><path d="M9.5 21v-6h5v6" /></>,
  key: <><circle cx="8" cy="8" r="4.4" /><path d="m11 11 9 9" /><path d="m15.5 15.5 2.2-2.2" /><path d="m18 18 2.2-2.2" /></>,
  chart: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></>,
  scale: <><path d="M12 3v18" /><path d="M6 21h12" /><path d="M5 7h14" /><path d="m5 7-3 6h6L5 7Z" /><path d="m19 7-3 6h6l-3-6Z" /></>,
  calculator: <><rect x="4" y="2.5" width="16" height="19" rx="2.5" /><path d="M8 7h8" /><path d="M8 12h.01M12 12h.01M16 12h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01" /></>,
  bed: <><path d="M3 18v-7h18v7" /><path d="M3 18v3M21 18v3" /><path d="M3 11V7a2 2 0 0 1 2-2h6v6" /><circle cx="7" cy="14" r="1.2" /><path d="M11 9h7a3 3 0 0 1 3 3v2" /></>,
  bath: <><path d="M3 12h18" /><path d="M5 12V6a2.5 2.5 0 0 1 4.8-1" /><path d="M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" /><path d="M7 19v2M17 19v2" /></>,
  area: <><rect x="3.5" y="3.5" width="17" height="17" rx="2" /><path d="M8 16V8h8" /><path d="M8 8l8 8" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  quote: <path d="M9 7H5.5A2.5 2.5 0 0 0 3 9.5V12h5V9.5M9 12v5H3v-5M21 7h-3.5A2.5 2.5 0 0 0 15 9.5V12h5V9.5M21 12v5h-6v-5" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20v-1.5A5.5 5.5 0 0 1 8 13h2a5.5 5.5 0 0 1 5.5 5.5V20" /><path d="M17 5.1a3.5 3.5 0 0 1 0 6.8" /><path d="M18.5 13.4a5.5 5.5 0 0 1 3 4.9V20" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" /><path d="M10 21v-3h4v3" /></>,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />,
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6, filled = false }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
