import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { experiences } from '../data/experience'

const shapes = ['asym-card-a', 'asym-card-b']

export function Experience() {
  return (
    <section id="experience" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Experience"
          title="Impactful collaborations"
          description="Highlighting NGO and freelance work. Fill the TODOs with your timelines and metrics."
          accent="primary"
        />

        <div className="relative grid gap-5 md:grid-cols-2">
          <div className="system-connector left-[35%] top-24 h-[3px] w-[18%] bg-black dark:bg-white opacity-30" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`neo-card p-6 h-full card-hover list-safe ${shapes[idx % shapes.length]} ${idx % 2 === 0 ? 'md:-translate-y-4' : 'md:translate-y-6'}`}
            >
              <div className={`absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white ${idx % 2 === 0 ? 'bg-primary' : 'bg-pink'}`} />
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-black">{exp.company}</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-yellow text-ink border-2 border-black rounded-full shrink-0">
                  {exp.team}
                </span>
              </div>
              <p className="text-sm font-black">{exp.role}</p>
              <p className="text-xs text-theme-muted mb-4">{exp.period}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="max-w-full text-xs font-semibold px-3 py-1 bg-blue text-ink border-2 border-black rounded-full break-words">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-safe space-y-3 text-sm text-theme-secondary">
                {exp.contributions.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
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
