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

        <div className="grid gap-5 sm:grid-cols-2">
          {activities.map((activity, index) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`neo-card p-6 h-full card-hover list-safe ${index % 2 === 0 ? 'asym-card-a sm:-translate-y-2' : 'asym-card-b sm:translate-y-5'}`}
            >
              <div className={`mb-4 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${index % 2 === 0 ? 'bg-primary' : 'bg-yellow'}`}>
                Activity Node
              </div>
              <p className="text-lg font-black">{activity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
