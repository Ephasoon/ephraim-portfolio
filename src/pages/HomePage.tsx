import { site } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Services } from '../sections/Services'
import { Collaboration } from '../sections/Collaboration'
import { Contact } from '../sections/Contact'

export default function HomePage() {
  useSeo({
    title: site.title,
    description: site.description,
    path: '/',
  })

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Collaboration />
      <Contact />
    </>
  )
}
