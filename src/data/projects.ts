export type ProjectCategory = 'Full-stack' | 'Business systems' | 'AI & backend' | 'In progress'

export type ProjectStatusTone = 'live' | 'progress' | 'private'

export interface ProjectLink {
  href: string
  label: string
}

export type ProjectPreview =
  | {
      kind: 'image'
      src: string
      srcSet: string
      alt: string
      caption: string
      domain: string
      width: number
      height: number
    }
  | {
      kind: 'art'
      variant: 'gateway' | 'school' | 'crm'
      caption: string
    }

export interface Project {
  slug: string
  index: string
  name: string
  tagline: string
  summary: string
  categories: ProjectCategory[]
  status: string
  statusTone: ProjectStatusTone
  problem: string
  approach: string
  features?: string[]
  planned?: string[]
  tech: string[]
  stackNote?: string
  role: string[]
  preview: ProjectPreview
  demo?: ProjectLink
  source?: ProjectLink
  scopeNote: string
  metaDescription: string
}

export const projects: Project[] = [
  {
    slug: 'openrouter-ai-server',
    index: '01',
    name: 'OpenRouter AI Server',
    tagline: 'A self-hosted AI gateway for centralised model access.',
    summary:
      'A Node.js and PostgreSQL service that sits between applications and AI model APIs, giving projects one backend access point instead of repeating provider integrations.',
    categories: ['AI & backend'],
    status: 'Private build',
    statusTone: 'private',
    problem:
      'Integrating AI models directly into every application creates repeated API code, scattered configuration, and inconsistent behaviour as projects grow. Each new model or provider becomes another integration to maintain.',
    approach:
      'A gateway service that applications call instead of talking to providers individually. The server owns the request lifecycle and keeps model and provider configuration in one place, with PostgreSQL backing the service data.',
    features: [
      'A single access layer between applications and AI model APIs',
      'Node.js service layer for request handling and gateway logic',
      'PostgreSQL-backed configuration and persistence',
      'Built as reusable infrastructure rather than a one-off integration',
    ],
    tech: ['Node.js', 'PostgreSQL', 'AI APIs', 'Gateway architecture'],
    role: ['Backend architecture', 'API integration', 'Database design'],
    preview: {
      kind: 'art',
      variant: 'gateway',
      caption:
        'Conceptual system diagram. This is a private infrastructure build with no public interface to capture.',
    },
    scopeNote:
      'Private infrastructure project. There is no public demo or repository; this summary describes the architecture at a high level without exposing implementation details.',
    metaDescription:
      'OpenRouter AI Server — a self-hosted AI gateway built with Node.js and PostgreSQL for centralised model access.',
  },
  {
    slug: 'panacea-hospital',
    index: '02',
    name: 'Panacea Hospital',
    tagline: 'A patient-facing hospital platform for appointments, departments, and emergency access.',
    summary:
      'A hospital platform for a Hawassa-based hospital in the Sidama Region — appointment booking, department and doctor discovery, a patient portal, 24/7 emergency access, and a separate staff administration path.',
    categories: ['Full-stack', 'Business systems'],
    status: 'Live',
    statusTone: 'live',
    problem:
      'Patient-facing information and hospital operations are often split across phone calls, notice boards, and separate internal records. That makes booking, finding the right department, and coordinating staff harder than it should be.',
    approach:
      'A single public platform that presents the hospital clearly and gives patients a direct route to care: booking, departments, doctors, emergency contact, and a patient portal. Staff administration is kept on a separate access path within the same project.',
    features: [
      'Appointment booking with a confirmation step',
      'Department directory covering eight specialised units',
      'Doctor profiles and patient portal access',
      '24/7 emergency contact and hospital information',
      'Contact form for patient enquiries',
      'Administrative access path for hospital staff',
    ],
    tech: ['Bootstrap 5', 'JavaScript', 'Responsive UI', 'Bootstrap Icons'],
    role: ['Application design', 'Front-end development', 'Workflow structure'],
    preview: {
      kind: 'image',
      src: '/images/projects/panacea-1440.webp',
      srcSet: '/images/projects/panacea-800.webp 800w, /images/projects/panacea-1440.webp 1440w',
      alt: 'Panacea Hospital homepage with appointment booking, departments, doctors, patient portal, and emergency access.',
      caption: 'The public Panacea Hospital homepage, captured from the live demo.',
      domain: 'panacea-hospital.freedev.app',
      width: 1440,
      height: 960,
    },
    demo: {
      href: 'https://panacea-hospital.freedev.app',
      label: 'Visit the live site',
    },
    scopeNote:
      'The live demo is public. Administrative credentials are not published here; staff access is managed in the original project configuration.',
    metaDescription:
      'Panacea Hospital — a patient-facing hospital platform in Hawassa with appointment booking, a department directory, patient portal, and staff administration.',
  },
  {
    slug: 'guestease-hotel',
    index: '03',
    name: 'GuestEase Hotel',
    tagline: 'A direct booking experience for a lakeside hospitality brand.',
    summary:
      'A hotel management and booking platform with a guest-facing website for rooms and suites, availability, amenities, and reservations — including an English and Amharic interface, set beside Lake Hawassa.',
    categories: ['Full-stack', 'Business systems'],
    status: 'Live',
    statusTone: 'live',
    problem:
      'Independent hotels need a credible direct booking channel. Relying entirely on marketplaces limits control over presentation, guest communication, and the booking experience.',
    approach:
      'A responsive hotel site built around the guest journey: discover the property, compare rooms, check availability for specific dates, and move into booking. The interface is bilingual and designed to work well on phones, where most travel research happens.',
    features: [
      'Room and suite listings with nightly rates',
      'Availability search by dates, guests, and room type',
      'Online booking flow',
      'Amenities and gallery sections',
      'English and Amharic interface',
      'Contact and location information',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
    role: ['Product design', 'Front-end engineering', 'Booking experience'],
    preview: {
      kind: 'image',
      src: '/images/projects/guestease-1440.webp',
      srcSet: '/images/projects/guestease-800.webp 800w, /images/projects/guestease-1440.webp 1440w',
      alt: 'GuestEase hotel homepage with availability search, room booking, amenities, and a lakefront property image.',
      caption: 'The public GuestEase guest homepage, captured from the live demo.',
      domain: 'guestease-hotel-management-system.netlify.app',
      width: 1440,
      height: 960,
    },
    demo: {
      href: 'https://guestease-hotel-management-system.netlify.app',
      label: 'Visit the live site',
    },
    scopeNote:
      'The public demo is the guest-facing booking experience. Internal operational modules are not publicly exposed.',
    metaDescription:
      'GuestEase — a lakeside hotel booking platform with room discovery, availability search, nightly rates, and a bilingual English and Amharic guest experience.',
  },
  {
    slug: 'abugida-school',
    index: '04',
    name: 'Abugida School',
    tagline: 'School administration software, currently in development.',
    summary:
      'An ongoing school management project focused on bringing academic records and daily administrative work into one structured system. Still in progress, with scope being refined.',
    categories: ['Full-stack', 'Business systems', 'In progress'],
    status: 'In progress',
    statusTone: 'progress',
    problem:
      'Schools often manage student information, staff records, and academic operations across paper files and spreadsheets. Reporting becomes slow, records drift apart, and daily coordination depends on institutional memory.',
    approach:
      'A structured web application built around the actual rhythm of a school: enrolment, classes, staff, term activity, and reporting. The work is being developed carefully rather than presented as finished before the core workflows are dependable.',
    planned: [
      'Student and academic records',
      'Class and staff administration',
      'Term and reporting workflows',
      'Role-based access for school staff',
    ],
    tech: [],
    stackNote: 'Stack documentation is being finalised as implementation stabilises.',
    role: ['Product scoping', 'System design', 'Application development'],
    preview: {
      kind: 'art',
      variant: 'school',
      caption:
        'Conceptual interface direction for the Abugida administration dashboard. No product screenshots are available yet.',
    },
    scopeNote:
      'This project is not complete. The items shown are planned scope, not delivered features. A live demo and final stack will be published when the core build is ready.',
    metaDescription:
      'Abugida School — an in-progress school management system for academic records, staff administration, and reporting.',
  },
  {
    slug: 'wisionary-crm',
    index: '05',
    name: 'Wisionary',
    tagline: 'A CRM for leads, clients, projects, and commissions.',
    summary:
      'A sales and business CRM that brings lead tracking, client accounts, project delivery, and commission calculations into one workspace — with weekly reporting for the team.',
    categories: ['Business systems', 'Full-stack'],
    status: 'Private build',
    statusTone: 'private',
    problem:
      'Sales teams often track leads in one place, client details in another, and commission calculations in a spreadsheet. Handoffs get missed and nobody has a reliable view of what is actually in the pipeline.',
    approach:
      'Wisionary connects the commercial workflow end to end. Leads move through a tracker, become client accounts, and connect to delivery projects. Commission calculations and weekly reports stay tied to the same records instead of being rebuilt by hand.',
    features: [
      'Dashboard',
      'Lead Tracker',
      'Clients',
      'Projects',
      'Commission Calculator',
      'Weekly Reports',
      'Settings',
    ],
    tech: [],
    stackNote: 'Stack details are not published for this internal product build.',
    role: ['Product design', 'Application development', 'Business workflow modelling'],
    preview: {
      kind: 'art',
      variant: 'crm',
      caption:
        'Conceptual interface direction for the Wisionary CRM workspace. This is a private build with no public screenshots.',
    },
    scopeNote:
      'Private product build. There is no public demo or repository; the modules listed are the known scope of the application.',
    metaDescription:
      'Wisionary — a sales and business CRM with lead tracking, client management, projects, commission calculations, and weekly reporting.',
  },
]

export const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  'Full-stack',
  'Business systems',
  'AI & backend',
  'In progress',
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
