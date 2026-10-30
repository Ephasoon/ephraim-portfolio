export const site = {
  name: 'Ephraim Shibru',
  firstName: 'Ephraim',
  role: 'Software Developer',
  positioning: 'Software Developer · IT Student · Business Technology',
  location: 'Ethiopia',
  locationDetail: 'Hawassa, Ethiopia',
  availability: 'Open to projects & collaboration',
  url: 'https://ephraim.withunion.net',
  businessName: 'WithUnion',
  businessUrl: 'https://withunion.net',
  title: 'Ephraim Shibru | Software Developer & Business Technology',
  description:
    'Explore the portfolio of Ephraim Shibru — a software developer building practical web applications, business management systems, AI-powered solutions, and digital products.',
} as const

export type SocialIcon = 'github' | 'linkedin' | 'upwork' | 'globe'

export interface SocialLink {
  label: string
  handle: string
  href: string
  icon: SocialIcon
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@Ephasoon',
    href: 'https://github.com/Ephasoon',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'ephraim-shibru',
    href: 'https://linkedin.com/in/ephraim-shibru',
    icon: 'linkedin',
  },
  {
    label: 'Upwork',
    handle: 'Freelance profile',
    href: 'https://www.upwork.com/freelancers/~012f4b020e841fa8a3',
    icon: 'upwork',
  },
  {
    label: 'WithUnion',
    handle: 'withunion.net',
    href: 'https://withunion.net',
    icon: 'globe',
  },
]

export interface NavItem {
  label: string
  to: string
  section: string
  index: string
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/', section: 'top', index: '01' },
  { label: 'About', to: '/#about', section: 'about', index: '02' },
  { label: 'Skills', to: '/#skills', section: 'skills', index: '03' },
  { label: 'Projects', to: '/#projects', section: 'projects', index: '04' },
  { label: 'Services', to: '/#services', section: 'services', index: '05' },
  { label: 'Collaboration', to: '/#collaboration', section: 'collaboration', index: '06' },
  { label: 'Contact', to: '/#contact', section: 'contact', index: '07' },
]

export const education = [
  {
    field: 'Information Technology',
    institution: 'Hawassa University',
    kind: 'Degree studies',
  },
  {
    field: 'Business Management',
    institution: 'Infolink College',
    kind: 'Business studies',
  },
]

export const principles = [
  {
    title: 'Business problem first',
    body: 'The useful question is not which framework to use, but which workflow needs to work better.',
  },
  {
    title: 'Systems over shortcuts',
    body: 'Clear data models, sensible boundaries, and code another developer can reason about.',
  },
  {
    title: 'Useful over impressive',
    body: 'An interface earns its detail by helping someone finish a task with less friction.',
  },
]
