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
  partial?: string[]
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
  verification?: string
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
      'The public demo covers the patient-facing site, including the appointment and contact forms. Admin modules require staff credentials, which are not published. The patient portal is implemented in the project, but /portal.php currently returns PHP source on the public deployment instead of rendering the portal.',
    partial: [
      'Patient portal: implemented in the project, but the public deployment currently serves the PHP source instead of the portal page.',
      'Admin dashboard, records, billing, and reporting: implemented but not publicly verifiable without staff credentials.',
    ],
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
    verification:
      'Verified November 2026: the homepage, appointment and contact endpoints, and staff login are reachable on the public demo. Admin and patient-portal workflows could not be verified live.',
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
      'Team & Roles and Integrations screens use static demo data. Organisation, commission-rule, and security settings persist to the database. Invitation, billing, notification-preference, and payment-gateway workflows are incomplete, and a dedicated task board is not exposed in the UI.',
    partial: [
      'Team & Roles and Integrations screens still use static demo data.',
      'Invitation, billing, notification-preference, and payment-gateway workflows are incomplete.',
      'A dedicated task board is not exposed in the UI, although tasks exist in the data model.',
    ],
    planned: [
      'Database-backed team invitations and role management.',
      'Billing, notification preferences, and payment-gateway integrations.',
      'A task board and the remaining settings surfaces.',
    ],
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Zod',
      'Tailwind CSS',
      'Recharts',
    ],
    stackNote:
      'Next.js App Router with route handlers, PostgreSQL through Drizzle ORM, Zod validation, session-based authentication, role checks on API routes, and security headers on every response.',
    technical: [
      'The app uses the Next.js App Router for both the interface and API route handlers, with PostgreSQL accessed through Drizzle ORM. Zod schemas validate request input on the server.',
      'Authentication is session-based, with SHA-256-hashed session tokens in httpOnly cookies and role checks for owners, admins, managers, sales representatives, support staff, and viewers. Business records are scoped to the signed-in user’s organisation, with a separate isolation-check script for cross-organisation leaks.',
      'Operational modules cover leads, clients, pipeline, projects, invoices and PDFs, payments, commissions, analytics, documents, notifications, and an AI assistant. The assistant uses a configured model when available and an in-app fallback otherwise.',
      'The service includes a minimal health endpoint, security headers, and rate limiting on the AI route. An audit-log table and setting exist, but no administrative write path is exposed yet. Some surfaces remain intentionally incomplete: team invitations, integrations, billing, notification preferences, and a dedicated task view.',
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
    verification:
      'Verified November 2026 against the public repository: authentication, organisation scoping, CRM records, invoices and PDFs, payments, commissions, analytics, documents, notifications, and the AI fallback are implemented. No hosted demo is available.',
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
      'All booking and admin data is mock or local data. There is no authentication, database, payment processing, or persistence in this build. The admin panel is reachable without a login, and the booking confirmation is a client-side state only.',
    partial: [
      'Booking confirmation is a client-side state; no reservation is stored or emailed.',
      'The admin panel is publicly reachable without authentication.',
      'No payment processing or backend persistence is implemented.',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router', 'Framer Motion', 'Recharts'],
    stackNote:
      'Client-side React application using local mock data. No backend services are implemented in the current repository.',
    technical: [
      'The interface is a React 19 single-page application built with TypeScript and Vite, with React Router handling the guest and admin views.',
      'Tailwind CSS 4 provides the responsive layout system, while Framer Motion handles interface transitions and Recharts is used for dashboard charts.',
      'Booking, reservation, and admin records are typed mock data held in the client. The project demonstrates interaction design and front-end architecture rather than a working hotel back office.',
      'The admin routes are not protected by authentication, and the dashboard is a UI prototype over mock records. The booking flow ends in a local confirmation screen without creating a reservation.',
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
    verification:
      'Verified November 2026 on the live deployment: guest pages, room filters, the booking flow, the English/Amharic switch, the chatbot, and the admin dashboard are reachable. Admin data is mock data and the panel has no authentication.',
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
    featuresNote:
      'The service is a development build. There is no authentication, rate limiting, model picker, or deployment hardening; the model is fixed on the server.',
    partial: [
      'The browser client and API have no authentication or rate limiting.',
      'The model is fixed to openai/gpt-oss-20b:free; there is no model picker or routing.',
      'No production deployment or hardening is included.',
    ],
    planned: [
      'Authentication and per-user rate limiting.',
      'Model selection and provider routing.',
      'Deployment hardening and operational monitoring.',
    ],
    tech: ['Node.js', 'Express 5', 'PostgreSQL', 'OpenAI SDK', 'OpenRouter API', 'Vanilla JavaScript'],
    stackNote:
      'Express 5 with the OpenAI SDK pointed at the OpenRouter base URL. The model is currently fixed to openai/gpt-oss-20b:free; there is no model picker, authentication, or rate limiting.',
    technical: [
      'The server is an Express 5 application backed by a PostgreSQL connection pool. Conversations and messages are stored as UUID-keyed records so chat history survives server restarts.',
      'Model requests go through the OpenAI SDK with its base URL pointed at OpenRouter. The model is configured on the server rather than selected by the client, and requests time out after 60 seconds.',
      'The static browser client lists saved conversations, creates new chats, renders model responses as markdown, highlights code blocks, and sanitises the resulting HTML with DOMPurify before inserting it into the page. Code blocks include a copy button.',
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
    verification:
      'Verified November 2026 against the public repository: the Express 5 API, PostgreSQL conversation/message persistence, OpenRouter calls through the OpenAI SDK, the static chat client, sanitised markdown, and syntax highlighting are implemented. No hosted demo is available.',
    metaDescription:
      'OpenRouter AI Server — an Express and PostgreSQL gateway for AI conversations, OpenRouter integration, persistent chat history, and sanitised markdown rendering.',
  },
  {
    slug: 'abugida-school',
    index: '05',
    name: 'Abugida School',
    tagline: 'A school management API with role-scoped workflows, still in active development.',
    summary:
      'An Express and PostgreSQL backend for school administration, with domain APIs for students, staff, parents, classes, attendance, exams, results, finance, timetables, documents, reporting, and analytics. The public repository is backend-only; the React frontend is developed separately. The project is still in active development.',
    categories: ['Business systems', 'In progress'],
    status: 'In progress',
    statusTone: 'progress',
    problem:
      'Schools often manage student information, staff records, and academic operations across paper files and spreadsheets. Reporting becomes slow, records drift apart, and daily coordination depends on institutional memory.',
    solution:
      'A modular backend that models the school’s core records and exposes them through authenticated, role-scoped APIs. The current phase focuses on a dependable API foundation; the frontend and some end-to-end workflows are still being completed.',
    features: [
      'JWT access tokens with hashed, revocable refresh-token sessions',
      'Role-based access for admin, principal, teacher, parent, and student',
      'Student, teacher, parent, and staff records with class and subject assignments',
      'Attendance marking, correction, reporting, and student history',
      'Exams, grades, semester results, conduct, and promotion decisions',
      'Monthly fee structures, charges, discounts, payments, receipts, and outstanding balances',
      'Timetable management with conflict checks and class copying',
      'Document uploads with category, privacy, and role-scoped access',
      'PDF report cards, ID cards, and receipts, plus QR codes',
      'Analytics, dashboards, audit logs, and school settings',
    ],
    featuresNote:
      'These modules are implemented in the backend repository at different levels of maturity. The public repository is API-only; the React frontend is developed separately and is not included. The README describes the overall system as roughly 55% complete, which includes the frontend work that is not in this repository.',
    partial: [
      'The React frontend is a separate project and is not in the public repository.',
      'Some academic and finance workflows are still being completed end to end.',
      'The README describes the overall system as roughly 55% complete.',
    ],
    planned: [
      'Public frontend for staff, students, and parents',
      'End-to-end browser testing across academic and finance workflows',
      'Deployment and production hardening',
    ],
    tech: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Helmet',
      'express-rate-limit',
      'Multer',
      'PDFKit',
      'QRCode',
    ],
    stackNote:
      'Express API with PostgreSQL, JWT access tokens and hashed refresh-token sessions, bcrypt password hashing, Helmet, login rate limiting, Multer uploads, PDFKit exports, and QR code generation.',
    technical: [
      'The backend is an Express API organised into route, controller, middleware, service, and utility layers. PostgreSQL stores academic, staff, attendance, finance, document, and audit records, with SQL migrations applied in order.',
      'Authentication uses short-lived JWT access tokens and revocable refresh-token sessions stored as SHA-256 hashes in PostgreSQL. Refresh tokens are set as httpOnly, same-site cookies; bcrypt hashes passwords. Login is rate-limited, and password changes or account disabling revoke active sessions.',
      'Role and record-level checks scope access for admins, principals, teachers, parents, and students. Teachers can mark attendance and enter grades only for their assigned classes and subjects; parents and students see only their own records.',
      'The API covers students, teachers, parents, classes, subjects, academic years, attendance, exams, results, conduct, promotion, monthly fees, payments, timetables, documents, PDFs, analytics, dashboards, audit logs, and settings.',
      'The public repository is backend-only. The React frontend is a separate project and is not included; the README describes the overall system as roughly 55% complete.',
    ],
    role: ['Product scoping', 'Backend architecture', 'API development', 'Database design'],
    contribution: [
      'Scoped the school domain modules and their relationships.',
      'Built the Express/PostgreSQL API structure, migrations, and authentication layer.',
      'Implemented role- and record-level access rules across academic, attendance, results, finance, and document routes.',
      'Added PDF exports, QR codes, audit logging, and project test scripts.',
      'Continued development toward a separate frontend and complete end-to-end workflows.',
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
      'Active development, not a finished product. The public repository contains the backend only; the React frontend is developed separately and is not included. The README describes the overall system as roughly 55% complete, and some routes and workflows are still being completed.',
    verification:
      'Verified November 2026 against the public repository: migrations 001–026, the route modules, JWT and refresh-token sessions, role middleware, finance/results/documents APIs, and the test scripts are present. No hosted demo or frontend is available.',
    metaDescription:
      'Abugida School — an in-progress Express and PostgreSQL school management API covering students, staff, attendance, exams, results, finance, documents, and reporting.',
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
