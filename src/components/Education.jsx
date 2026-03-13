import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { education } from '../data/experience'

export function Education() {
  return (
    <section id="education" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Education"
          title="Academic journey"
          description="Keep this concise and focused on what matters for placements."
          accent="blue"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="neo-card p-5 bg-theme-card h-full card-hover"
            >
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-sm font-semibold">{edu.school}</p>
              <p className="text-xs text-theme-muted">{edu.timeline}</p>
              <p className="text-sm mt-2 text-theme-secondary">CGPA: {edu.cgpa}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {edu.coursework.map((course) => (
                  <span key={course} className="text-xs font-semibold px-3 py-1 bg-yellow text-ink border-2 border-black rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
