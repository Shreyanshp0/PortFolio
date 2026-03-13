import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { experiences } from '../data/experience'

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

        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="neo-card p-5 bg-theme-card h-full card-hover"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-yellow text-ink border-2 border-black rounded-full">
                  {exp.team}
                </span>
              </div>
              <p className="text-sm font-semibold">{exp.role}</p>
              <p className="text-xs text-theme-muted mb-3">{exp.period}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-semibold px-3 py-1 bg-blue text-ink border-2 border-black rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-theme-secondary">
                {exp.contributions.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full theme-dot" />
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
