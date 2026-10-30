import type { CSSProperties, HTMLAttributes } from 'react'
import { useRevealOnScroll } from '../lib/useRevealOnScroll'

type RevealTag = 'div' | 'li' | 'section' | 'article' | 'aside' | 'header' | 'footer'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: RevealTag
  delay?: number
}

export function Reveal({ as = 'div', delay = 0, className = '', style, children, ...rest }: RevealProps) {
  const ref = useRevealOnScroll<HTMLElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={className ? `reveal ${className}` : 'reveal'}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
