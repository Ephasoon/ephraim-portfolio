export type ProjectCategory = 'Full-stack' | 'Business systems' | 'AI & backend' | 'In progress'

export type ProjectStatusTone = 'live' | 'progress' | 'source' | 'private'

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
  solution: string
  features?: string[]
  featuresNote?: string
  planned?: string[]
  tech: string[]
  stackNote?: string
  technical: string[]
  role: string[]
  contribution: string[]
  preview: ProjectPreview
  demo?: ProjectLink
  source?: ProjectLink
  scopeNote: string
  metaDescription: string
}

export const projects: Project[] = [
  {
    slug: 'panacea-hospital',
    index: '01',
    name: 'Panacea Hospital',
    tagline: 'A patient-facing hospital site and the admin platform behind it.',
    summary:
      'A PHP and MySQL hospital platform built around the patient journey and the staff workflows behind it: department and doctor discovery, appointment booking, a patient portal, emergency access, and an admin dashboard for records, billing, and reporting.',
    categories: ['Full-stack', 'Business systems'],
    status: 'Live demo',
    statusTone: 'live',
    problem:
      'Patient information and hospital operations are often split across phone calls, notice boards, spreadsheets, and separate internal records. That makes booking, finding the right department, and coordinating staff harder than it should be.',
    solution:
      'A single PHP/MySQL application that separates the public hospital experience from staff operations while keeping both in one codebase. Patients can find departments and doctors, request appointments, and reach emergency information; staff work from an authenticated dashboard covering records, scheduling, billing, and reporting.',
    features: [
      'Public hospital site with departments, doctors, services, and emergency contact',
      'Appointment booking with patient details and a confirmation step',
      'Patient portal access',
      'Admin dashboard for patients, appointments, and medical records',
      'Invoicing, billing, services, and pricing management',
      'Department, doctor, and staff-user administration',
      'Reports, exports, contact messages, and password management',
    ],
    featuresNote:
      'The public demo covers the patient-facing site. Admin modules are included in the project but require staff credentials, which are not published.',
    tech: ['PHP 8', 'MySQL', 'PDO', 'Bootstrap 5', 'JavaScript'],
    stackNote:
      'Server-rendered PHP with PDO prepared statements, session-based authentication, and a MySQL schema for hospital operations.',
    technical: [
      'The application is server-rendered in PHP 8, with MySQL accessed through PDO prepared statements. Shared includes handle layout, database connection, authentication, and request validation.',
      'Authenticated staff routes cover patients, appointments, medical records, invoices, services and pricing, departments, doctors, staff users, reports, messages, and password changes. Passwords are hashed and login attempts are throttled.',
      'Bootstrap 5 provides the responsive public and admin layouts, with small vanilla JavaScript interactions for navigation and interface behaviour.',
    ],
    role: ['Application design', 'Full-stack development', 'Database design', 'Admin workflow modelling'],
    contribution: [
      'Designed the public site, patient portal, and admin information architecture.',
      'Built the PHP/MySQL application layer, including CRUD workflows for patients, appointments, staff, billing, and medical records.',
      'Added CSRF protection, session handling, password hashing, and login throttling across authenticated areas.',
      'Implemented reporting and export workflows for operational and billing data.',
    ],
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
      'Deployed as a public demo, not presented as a production hospital deployment. No real patient data is published, and administrative credentials are kept private.',
    metaDescription:
      'Panacea Hospital — a PHP and MySQL hospital platform with appointment booking, patient portal access, medical records, billing, and staff administration.',
  },
  {
    slug: 'withunion-crm',
    index: '02',
    name: 'WithUnion CRM',
    tagline: 'A full-stack CRM for leads, clients, delivery, and revenue.',
    summary:
      'A Next.js and PostgreSQL business system that connects sales and delivery: leads, clients, pipeline, projects, invoices, payments, commissions, analytics, documents, and an AI assistant. Built with role-based access and organisation-scoped data.',
    categories: ['Business systems', 'Full-stack'],
    status: 'Source available',
    statusTone: 'source',
    problem:
      'Sales teams often track leads in one tool, client details in another, project delivery in a third, and commission calculations in a spreadsheet. Handoffs get missed and reporting depends on manual reconciliation.',
    solution:
      'A single workspace that carries a record from lead to client to project and invoice. Shared data, role-based access, and organisation scoping keep commercial and delivery teams working from the same source of truth instead of rebuilding reports by hand.',
    features: [
      'Dashboard with pipeline, revenue, and activity views',
      'Lead tracking and conversion to client records',
      'Client accounts and project delivery tracking',
      'Invoices with PDF generation, payments, and outstanding balances',
      'Commission calculations and payment tracking',
      'Analytics and reporting',
      'AI assistant for CRM queries',
      'Notifications, documents, and organisation settings',
    ],
    featuresNote:
      'Team & Roles and Integrations screens are present but still use static demo data. Invitation, billing, notification-preference, and payment-gateway workflows are not complete, and a dedicated task board is not exposed in the UI.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'Tailwind CSS', 'Recharts'],
    stackNote:
      'Next.js App Router with route handlers, PostgreSQL through Drizzle ORM, Zod validation, session-based authentication, and role checks on API routes.',
    technical: [
      'The app uses the Next.js App Router for both the interface and API route handlers, with PostgreSQL accessed through Drizzle ORM. Zod schemas validate request input on the server.',
      'Authentication is session-based, with hashed session tokens and role checks for owners, admins, managers, sales representatives, support staff, and viewers. Business records are scoped to the signed-in user’s organisation.',
      'Operational modules cover leads, clients, pipeline, projects, invoices and PDFs, payments, commissions, analytics, documents, notifications, and an AI assistant. The assistant uses a configured model when available and an in-app fallback otherwise.',
      'Some surfaces remain intentionally incomplete: team invitations, integrations, billing, notification preferences, and a dedicated task view.',
    ],
    role: ['Product design', 'Full-stack development', 'Database design', 'Business workflow modelling'],
    contribution: [
      'Designed the CRM data model around organisations, users, leads, clients, projects, invoices, payments, and commissions.',
      'Built the Next.js application and PostgreSQL/Drizzle data layer.',
      'Implemented session authentication, hashed tokens, role-based permissions, and organisation-scoped queries.',
      'Delivered the core sales, delivery, billing, reporting, document, and AI-assistant workflows.',
    ],
    preview: {
      kind: 'art',
      variant: 'crm',
      caption:
        'Conceptual interface direction for the WithUnion CRM workspace. The source is public, but there is no hosted demo to capture.',
    },
    source: {
      href: 'https://github.com/Ephasoon/withunion-crm',
      label: 'View source',
    },
    scopeNote:
      'Source is public, but there is no hosted demo. Some settings and team-management surfaces are unfinished; the core CRM, billing, commission, reporting, and document workflows are implemented.',
    metaDescription:
      'WithUnion CRM — a full-stack Next.js and PostgreSQL CRM with leads, clients, projects, invoices, payments, commissions, analytics, and role-based access.',
  },
  {
    slug: 'guestease-hotel',
    index: '03',
    name: 'GuestEase Hotel',
    tagline: 'A bilingual hotel booking and operations prototype.',
    summary:
      'A React front-end prototype for a lakeside hotel: a guest booking journey, English and Amharic content, and an admin interface for rooms, reservations, guests, check-in, billing, housekeeping, staff, and reports. The current build uses mock data and is not connected to a backend.',
    categories: ['Business systems'],
    status: 'Live prototype',
    statusTone: 'live',
    problem:
      'Independent hotels need a credible direct booking channel and a clear view of daily operations. Relying entirely on marketplaces limits control over presentation, guest communication, and the booking experience.',
    solution:
      'A responsive React application that demonstrates the guest and staff experience in one interface: room discovery, availability search, booking, and an operational dashboard. It was built as a front-end prototype to validate the flows before backend integration.',
    features: [
      'Guest home page with rooms, suites, amenities, gallery, and location',
      'Availability search by dates, guests, and room type',
      'Booking flow with guest details and reservation summary',
      'English and Amharic interface',
      'Guest chatbot for common questions',
      'Admin dashboard with rooms, reservations, guests, check-in and check-out, billing, housekeeping, staff, reports, and settings',
    ],
    featuresNote:
      'All booking and admin data is mock or local data. There is no authentication, database, payment processing, or persistence in this build.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router', 'Framer Motion', 'Recharts'],
    stackNote:
      'Client-side React application using local mock data. No backend services are implemented in the current repository.',
    technical: [
      'The interface is a React 19 single-page application built with TypeScript and Vite, with React Router handling the guest and admin views.',
      'Tailwind CSS 4 provides the responsive layout system, while Framer Motion handles interface transitions and Recharts is used for dashboard charts.',
      'Booking, reservation, and admin records are typed mock data held in the client. The project demonstrates interaction design and front-end architecture rather than a working hotel back office.',
    ],
    role: ['Product design', 'Front-end engineering', 'Bilingual UX', 'Dashboard design'],
    contribution: [
      'Built the guest-facing React experience, including room discovery, availability search, and booking screens.',
      'Implemented the English and Amharic interface and a guest-facing chatbot.',
      'Designed and built the admin dashboard for rooms, reservations, guests, check-in and check-out, billing, housekeeping, staff, and reports.',
      'Used typed mock data to model end-to-end flows before backend integration.',
    ],
    preview: {
      kind: 'image',
      src: '/images/projects/guestease-1440.webp',
      srcSet: '/images/projects/guestease-800.webp 800w, /images/projects/guestease-1440.webp 1440w',
      alt: 'GuestEase hotel homepage with availability search, room booking, amenities, and a lakefront property image.',
      caption: 'The public GuestEase guest homepage, captured from the live deployment.',
      domain: 'guestease-hotel-management-system.netlify.app',
      width: 1440,
      height: 960,
    },
    demo: {
      href: 'https://guestease-hotel-management-system.netlify.app',
      label: 'Visit the live prototype',
    },
    source: {
      href: 'https://github.com/Ephasoon/guestease-hotel-management-system',
      label: 'View source',
    },
    scopeNote:
      'The public deployment is a front-end prototype. Booking, admin, and chatbot data are mock only; no real reservations, payments, or guest records are processed.',
    metaDescription:
      'GuestEase — a React and TypeScript hotel booking and operations prototype with English and Amharic interfaces, a guest booking flow, and an admin dashboard.',
  },
  {
    slug: 'openrouter-ai-server',
    index: '04',
    name: 'OpenRouter AI Server',
    tagline: 'A self-hosted gateway for model access and conversation history.',
    summary:
      'An Express and PostgreSQL service that gives applications a single API layer for AI chat. It manages conversations and messages, calls a model through the OpenRouter API, and serves a small browser client with safe markdown rendering.',
    categories: ['AI & backend'],
    status: 'Source available',
    statusTone: 'source',
    problem:
      'Integrating a model provider into every application duplicates API clients, prompt handling, and conversation storage. It also makes provider changes and message rendering inconsistent across projects.',
    solution:
      'A small gateway service that owns the chat request lifecycle: it creates conversations, stores messages, calls the model through one OpenRouter-compatible client, and returns responses to a static web client. Provider and model configuration stay in one place.',
    features: [
      'Conversation and message API backed by PostgreSQL',
      'OpenRouter integration through the OpenAI SDK',
      'Server-side model configuration',
      'Static browser chat client',
      'Markdown rendering with syntax highlighting',
      'HTML sanitisation before rendered responses are displayed',
    ],
    tech: ['Node.js', 'Express 5', 'PostgreSQL', 'OpenAI SDK', 'OpenRouter API', 'Vanilla JavaScript'],
    stackNote:
      'Express 5 with the OpenAI SDK pointed at the OpenRouter base URL. The model is currently fixed to openai/gpt-oss-20b:free; there is no model picker, authentication, or rate limiting.',
    technical: [
      'The server is an Express 5 application backed by a PostgreSQL connection pool. Conversations and messages are stored as UUID-keyed records so chat history survives server restarts.',
      'Model requests go through the OpenAI SDK with its base URL pointed at OpenRouter. The model is configured on the server rather than selected by the client.',
      'The static browser client renders model responses as markdown, highlights code blocks, and sanitises the resulting HTML before inserting it into the page.',
      'The current build is a development service. Authentication, rate limiting, model routing, and deployment hardening are not implemented yet.',
    ],
    role: ['Backend architecture', 'API integration', 'Database design', 'Front-end integration'],
    contribution: [
      'Built the Express service and PostgreSQL schema for conversations and messages.',
      'Integrated the OpenRouter API through the OpenAI SDK and kept model configuration server-side.',
      'Built the browser chat client and added sanitised markdown rendering with syntax highlighting.',
      'Packaged the service as reusable infrastructure rather than a one-off application integration.',
    ],
    preview: {
      kind: 'art',
      variant: 'gateway',
      caption:
        'Conceptual system diagram for the AI gateway. The source is public, but there is no hosted interface to capture.',
    },
    source: {
      href: 'https://github.com/Ephasoon/openrouter-ai-server',
      label: 'View source',
    },
    scopeNote:
      'Public source is available, but there is no hosted demo. The current implementation has no authentication or rate limiting and should be treated as a development build, not a production gateway.',
    metaDescription:
      'OpenRouter AI Server — an Express and PostgreSQL gateway for AI conversations, OpenRouter integration, persistent chat history, and sanitised markdown rendering.',
  },
  {
    slug: 'abugida-school',
    index: '05',
    name: 'Abugida School',
    tagline: 'A school management API, still in active development.',
    summary:
      'An Express and PostgreSQL backend for school administration, with domain APIs for students, staff, parents, classes, attendance, exams, results, finance, timetables, documents, and reporting. The repository is backend-only and the project is still in progress.',
    categories: ['Business systems', 'In progress'],
    status: 'In progress',
    statusTone: 'progress',
    problem:
      'Schools often manage student information, staff records, and academic operations across paper files and spreadsheets. Reporting becomes slow, records drift apart, and daily coordination depends on institutional memory.',
    solution:
      'A modular backend that models the school’s core records and exposes them through authenticated APIs. The current phase focuses on a dependable API foundation; the frontend and end-to-end workflows are still being completed.',
    features: [
      'JWT authentication and role-based access',
      'Student, teacher, parent, and staff records',
      'Academic years, classes, and subjects',
      'Attendance, exams, grades, and results',
      'Finance, fees, and account workflows',
      'Timetable and document management',
      'PDF exports, QR codes, analytics, and dashboard APIs',
    ],
    featuresNote:
      'These modules exist in the backend repository. They are not all complete end to end, and no frontend is included in the public repository.',
    planned: [
      'Frontend application for staff and administrators',
      'End-to-end testing of academic and finance workflows',
      'Deployment and production hardening',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt', 'Multer', 'PDFKit', 'QRCode'],
    stackNote:
      'Express API with PostgreSQL, JWT authentication, bcrypt password hashing, Helmet, rate limiting, Multer uploads, PDFKit exports, and QR code generation.',
    technical: [
      'The backend is organised as an Express API with separate route and controller modules for each school domain. PostgreSQL stores the core academic, staff, attendance, finance, and document records.',
      'Authentication uses JWTs with bcrypt-hashed passwords. Helmet, rate limiting, and role checks are used to harden the API surface.',
      'Document and reporting endpoints generate PDFs with PDFKit and QR codes for exported records. Multer handles file uploads.',
      'The public repository is backend-only. The README estimates the project is about 55% complete, and the module routes are at different stages of completion.',
    ],
    role: ['Product scoping', 'Backend architecture', 'API development', 'Database design'],
    contribution: [
      'Scoped the school domain modules and their relationships.',
      'Built the Express/PostgreSQL API structure and authentication layer.',
      'Implemented domain routes for academic records, attendance, exams, finance, documents, and reporting.',
      'Continued development toward complete end-to-end workflows and a frontend client.',
    ],
    preview: {
      kind: 'art',
      variant: 'school',
      caption:
        'Conceptual interface direction for the Abugida administration dashboard. The public repository is backend-only and no product screenshots are available.',
    },
    source: {
      href: 'https://github.com/Ephasoon/abugida-school-management-system-backend',
      label: 'View source',
    },
    scopeNote:
      'Active development, not a finished product. The public repository contains the backend only. The README estimates the project is about 55% complete, and the module routes are at different stages of completion.',
    metaDescription:
      'Abugida School — an in-progress Express and PostgreSQL school management API covering students, staff, attendance, exams, finance, documents, and reporting.',
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
