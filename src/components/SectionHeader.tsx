import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  aside?: ReactNode
}

export function SectionHeader({ eyebrow, title, intro, aside }: SectionHeaderProps) {
  return (
    <Reveal className="section-head">
      <div className="section-head__text">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {aside ? <div className="section-head__aside">{aside}</div> : null}
    </Reveal>
  )
}
