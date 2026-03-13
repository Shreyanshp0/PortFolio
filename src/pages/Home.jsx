import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Certifications } from '../components/Certifications'
import { Achievements } from '../components/Achievements'
import { Activities } from '../components/Activities'
import { Resume } from '../components/Resume'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <div className="bg-theme-main text-theme-primary">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Activities />
      <Resume />
      <Contact />
    </div>
  )
}
