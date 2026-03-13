import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { activities } from '../data/experience'

export function Activities() {
  return (
    <section id="activities" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Extracurricular"
          title="Beyond the classroom"
          description="Showcase community work, volunteering, clubs, or open-source involvement."
          accent="primary"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {activities.map((activity) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="neo-card p-5 bg-theme-card h-full card-hover"
            >
              <p className="text-lg font-semibold">{activity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
