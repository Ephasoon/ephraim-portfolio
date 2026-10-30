import { useId } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  to?: string
  className?: string
  showRole?: boolean
}

export function Logo({ to = '/', className, showRole = true }: LogoProps) {
  const gradientId = useId().replace(/:/g, '')

  const content = (
    <>
      <svg
        className="brand__mark"
        viewBox="0 0 40 40"
        role="img"
        aria-label="Ephraim Shibru monogram"
      >
        <defs>
          <linearGradient id={gradientId} x1="12" y1="10" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#dfeaff" />
            <stop offset="0.55" stopColor="#8ab4ff" />
            <stop offset="1" stopColor="#3f7ff2" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill="#081a30" />
        <rect
          x="0.65"
          y="0.65"
          width="38.7"
          height="38.7"
          rx="11.4"
          fill="none"
          stroke="rgba(138, 180, 255, 0.32)"
          strokeWidth="1.3"
        />
        <path
          d="M12.5 10.5h15v4.2H17.2v2.6h8.4v4.1h-8.4v3.9h10.4v4.2H12.5V10.5Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <span className="brand__text">
        <span className="brand__name">Ephraim Shibru</span>
        {showRole ? <span className="brand__role">Software Developer</span> : null}
      </span>
    </>
  )

  if (!to) {
    return <span className={className ? `brand ${className}` : 'brand'}>{content}</span>
  }

  return (
    <Link to={to} className={className ? `brand ${className}` : 'brand'} aria-label="Ephraim Shibru — home">
      {content}
    </Link>
  )
}
