import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { achievements } from '../data/experience'

export function Achievements() {
  return (
    <section id="achievements" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Achievements"
          title="Highlights & wins"
          description="Short, outcome-driven bullets."
          accent="yellow"
        />

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="space-y-3 neo-card p-6 bg-theme-card card-hover"
        >
          {achievements.map((item) => (
            <li key={item} className="flex gap-3 items-start text-lg font-semibold">
              <span className="mt-2 h-2.5 w-2.5 rounded-full theme-dot" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
