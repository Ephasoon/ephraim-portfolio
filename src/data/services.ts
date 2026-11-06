export interface Service {
  title: string
  problem: string
  deliverables: string[]
  value: string
  icon: 'code' | 'layers' | 'chart' | 'server' | 'spark' | 'rocket'
}

export const services: Service[] = [
  {
    title: 'Web Development',
    problem:
      'A business needs a clear, responsive web application that works on the devices its customers and staff actually use.',
    deliverables: ['Responsive frontend', 'Frontend and backend implementation', 'Maintainable component structure'],
    value:
      'A working product that presents the business clearly and supports the workflow behind it.',
    icon: 'code',
  },
  {
    title: 'Business Management Systems',
    problem:
      'Records, approvals, and reporting are spread across spreadsheets, messages, and paper, so staff spend time reconciling instead of working.',
    deliverables: ['Records and workflow modules', 'Admin dashboards', 'Reporting and data views'],
    value:
      'One operational system with clearer records, fewer manual steps, and a shared view of the work.',
    icon: 'layers',
  },
  {
    title: 'Backend & API Development',
    problem:
      'A product needs a reliable service layer and data model that the interface and integrations can depend on.',
    deliverables: ['REST APIs', 'PostgreSQL schema and queries', 'Third-party integrations'],
    value:
      'A maintainable backend that supports the product as it grows and makes data access predictable.',
    icon: 'server',
  },
  {
    title: 'AI Integration & Automation',
    problem:
      'A workflow has repetitive or text-heavy steps where an AI-assisted feature could save time, but the integration has to fit the existing system.',
    deliverables: ['API-based AI features', 'AI gateway services', 'Workflow automation'],
    value:
      'Practical AI functionality tied to a real task, not a novelty feature added to the product.',
    icon: 'spark',
  },
  {
    title: 'CRM & Sales Tools',
    problem:
      'Leads, clients, projects, and commissions live in separate places, making follow-up and reporting harder than they should be.',
    deliverables: ['Lead and client tracking', 'Pipeline and project views', 'Sales and commission reporting'],
    value:
      'A clearer path from first contact to delivered work, with the commercial context in one place.',
    icon: 'chart',
  },
  {
    title: 'Startup MVP Development',
    problem:
      'An early product idea needs a working version that can be shown, tested, and discussed without building the entire product first.',
    deliverables: ['Scope for the first version', 'Working prototype', 'Foundation for further development'],
    value:
      'A focused build that answers the important early questions and gives the idea something concrete to test.',
    icon: 'rocket',
  },
]
