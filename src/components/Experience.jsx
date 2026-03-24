import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { experiences } from '../data/experience'
import { cardLift, sectionReveal } from '../lib/motion'
import { TagBadge } from './ui/TagBadge'

const shapes = ['asym-card-a', 'asym-card-b']

export function Experience() {
  void motion
  return (
    <section id="experience" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Experience"
          title="Impactful collaborations"
          description="Building impact through meaningful collaborations that turn ideas into real-world results."
          accent="primary"
        />

        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="system-connector left-[35%] top-24 h-[3px] w-[18%] bg-black dark:bg-white opacity-30" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              {...sectionReveal(idx * 0.08)}
              className={`neo-card p-6 h-full card-hover list-safe ${shapes[idx % shapes.length]} ${idx % 2 === 0 ? 'md:-translate-y-3' : 'md:translate-y-4'}`}
              {...cardLift}
            >
              <div className={`absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white ${idx % 2 === 0 ? 'bg-primary' : 'bg-pink'}`} />
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3 className="text-xl font-black">{exp.company}</h3>
                <TagBadge accent="yellow" className="shrink-0">{exp.team}</TagBadge>
              </div>
              <p className="text-sm font-black">{exp.role}</p>
              <p className="text-xs text-theme-muted mb-6">{exp.period}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.technologies.map((tech, techIndex) => (
                  <TagBadge key={tech} accent="blue" delay={techIndex * 0.03} animate>
                    {tech}
                  </TagBadge>
                ))}
              </div>
              <ul className="list-safe space-y-4 text-sm text-theme-secondary">
                {exp.contributions.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full theme-dot shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
