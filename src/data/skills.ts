export type SkillIcon = 'layout' | 'server' | 'database' | 'toolbox' | 'spark'

export interface SkillGroup {
  title: string
  icon: SkillIcon
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Interfaces that stay clear, responsive, and usable under real content.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'Server-side application logic, APIs, and the structure behind the interface.',
    skills: ['Node.js', 'Express.js', 'Laravel', 'PHP'],
  },
  {
    title: 'Databases',
    icon: 'database',
    description: 'Relational modelling and the data structures a system is built on.',
    skills: ['PostgreSQL', 'SQL', 'Database design'],
  },
  {
    title: 'Tools & infrastructure',
    icon: 'toolbox',
    description: 'The everyday tooling used to build, version, and ship projects.',
    skills: ['Git', 'GitHub', 'Docker', 'Vite', 'VS Code'],
  },
  {
    title: 'AI & automation',
    icon: 'spark',
    description: 'Applied through API integration, gateway work, and practical automation.',
    skills: ['AI API integration', 'AI gateways', 'AI-powered applications', 'Workflow automation'],
  },
]
