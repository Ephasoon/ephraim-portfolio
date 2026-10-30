import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon'
  | 'github'
  | 'linkedin'
  | 'upwork'
  | 'globe'
  | 'copy'
  | 'check'
  | 'map-pin'
  | 'layout'
  | 'server'
  | 'database'
  | 'toolbox'
  | 'spark'
  | 'code'
  | 'layers'
  | 'chart'
  | 'rocket'
  | 'lock'
  | 'mail'
  | 'info'

const icons: Record<IconName, ReactNode> = {
  'arrow-right': <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  'arrow-left': <path d="M20 12H5m5.5-5.5L5 12l5.5 5.5" />,
  'arrow-up': <path d="M12 20V5m-5.5 5.5L12 5l5.5 5.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.7 4.7l1.4 1.4M17.9 17.9l1.4 1.4M2.5 12h2M19.5 12h2M4.7 19.3l1.4-1.4M17.9 6.1l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />,
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49v-1.9c-2.84.62-3.44-1.21-3.44-1.21-.46-1.18-1.13-1.5-1.13-1.5-.93-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.56 2.39 1.11 2.97.85.09-.66.36-1.11.65-1.37-2.27-.26-4.65-1.13-4.65-5.04 0-1.11.4-2.02 1.05-2.73-.11-.26-.46-1.3.1-2.71 0 0 .86-.27 2.8 1.05a9.7 9.7 0 0 1 5.1 0c1.94-1.32 2.8-1.05 2.8-1.05.56 1.41.21 2.45.1 2.71.65.71 1.05 1.62 1.05 2.73 0 3.92-2.39 4.78-4.66 5.03.36.32.69.94.69 1.9v2.82c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z"
    />
  ),
  upwork: (
    <>
      <path d="M6 5v6.5a4.5 4.5 0 0 0 9 0V5" />
      <circle cx="19.5" cy="5.5" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4L19 7" />,
  'map-pin': (
    <>
      <path d="M20 10c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h5M11 16.5h5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  toolbox: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12.5h18M10 12.5v2h4v-2" />
    </>
  ),
  spark: (
    <path d="M12 2.8 13.8 9l6.2 1.8-6.2 1.8L12 18.8l-1.8-6.2L4 10.8 10.2 9 12 2.8ZM19 16l.8 2.4 2.4.8-2.4.8L19 22.4l-.8-2.4-2.4-.8 2.4-.8L19 16Z" />
  ),
  code: <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />,
  layers: (
    <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5" />
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  rocket: (
    <>
      <path d="M12.5 15.5 8.5 11.5c1-4 4.5-8 10-8 0 5.5-4 9-8 10Z" />
      <path d="M9 12.5 5.5 14 4 18l4-1.5L9.5 20l1.5-3.5M15 9.5h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.8h.01" />
    </>
  ),
}

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 18, className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ? `icon ${className}` : 'icon'}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {icons[name]}
    </svg>
  )
}
