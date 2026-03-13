import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { certifications } from '../data/experience'

export function Certifications() {
  return (
    <section id="certifications" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Certifications"
          title="Learning checkpoints"
          description="Add industry-recognized credentials relevant to the roles you want."
          accent="pink"
        />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={`${cert.name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="neo-card p-4 bg-theme-card h-full card-hover"
            >
              <p className="text-sm text-theme-muted">{cert.date}</p>
              <h3 className="text-lg font-bold">{cert.name}</h3>
              <p className="text-sm font-semibold text-theme-secondary">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
