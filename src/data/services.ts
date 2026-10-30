export interface Service {
  title: string
  outcome: string
  details: string[]
  icon: 'code' | 'layers' | 'chart' | 'server' | 'spark' | 'rocket'
}

export const services: Service[] = [
  {
    title: 'Full-stack web applications',
    outcome:
      'Responsive applications that turn a business workflow into a dependable product — from interface to database.',
    details: ['Product interface', 'API layer', 'Database design'],
    icon: 'code',
  },
  {
    title: 'Business management systems',
    outcome:
      'One operational system in place of scattered spreadsheets, disconnected records, and manual follow-up.',
    details: ['Records & workflows', 'Admin dashboards', 'Reporting views'],
    icon: 'layers',
  },
  {
    title: 'CRM & sales tools',
    outcome:
      'A clearer path from lead to client, with project and commission information in the same workspace.',
    details: ['Lead tracking', 'Client accounts', 'Sales reporting'],
    icon: 'chart',
  },
  {
    title: 'Backend & API engineering',
    outcome:
      'Service layers and APIs that other parts of a product can rely on — predictable, documented, and maintainable.',
    details: ['REST APIs', 'Third-party integrations', 'Data modelling'],
    icon: 'server',
  },
  {
    title: 'AI-enabled tools',
    outcome:
      'Practical AI features integrated into a workflow, built around a real task rather than added for novelty.',
    details: ['AI API integration', 'Gateway services', 'Workflow automation'],
    icon: 'spark',
  },
  {
    title: 'Startup MVP development',
    outcome:
      'A working first version of a product idea, scoped to answer the questions that matter at an early stage.',
    details: ['Scope definition', 'Prototype', 'Production-ready build'],
    icon: 'rocket',
  },
]
