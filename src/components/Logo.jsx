// Monograma "F": cuadrado redondeado oscuro con borde fino y luz superior.
export function Logo({ size = 22 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#25272b" />
          <stop offset="1" stopColor="#0f1011" />
        </linearGradient>
        <linearGradient id="logo-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="23" height="23" rx="6.5" fill="url(#logo-bg)" stroke="rgba(255,255,255,0.16)" />
      <rect x="4" y="0.5" width="16" height="1" fill="url(#logo-top)" />
      <path d="M8 6.5h8.6v2.5h-5.9v2.3h4.7v2.5h-4.7V18H8z" fill="#f7f8f8" />
    </svg>
  )
}
