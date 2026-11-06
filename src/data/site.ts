export const site = {
  name: 'Ephraim Shibru',
  firstName: 'Ephraim',
  role: 'Full-Stack Developer',
  focus: 'Business Systems & AI Solutions',
  positioning: 'Full-Stack Developer | Business Systems & AI Solutions',
  heroIntro:
    'I build practical web applications, backend services, and business management systems that solve real-world problems. Combining software engineering with business understanding, I turn ideas and operational challenges into functional digital solutions.',
  heroSupporting:
    'From full-stack development and backend architecture to business workflow automation and AI integration, I focus on building useful, reliable technology.',
  location: 'Ethiopia',
  locationDetail: 'Hawassa, Ethiopia',
  availability: 'Open to roles, projects & collaboration',
  url: 'https://ephraim.withunion.net',
  businessName: 'WithUnion',
  businessUrl: 'https://withunion.net',
  title: 'Ephraim Shibru | Full-Stack Developer — Business Systems & AI Solutions',
  description:
    'Portfolio of Ephraim Shibru — a full-stack developer in Ethiopia building practical web applications, backend services, business management systems, and AI-enabled solutions. Open to full-time roles and client projects.',
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
    institution: 'Hawassa University',
    field: 'Information Technology',
  },
  {
    institution: 'Infolink College',
    field: 'Business Management',
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
