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
          initial={{ opacity: 0, y: 24, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="list-safe space-y-4 neo-card asym-card-c p-6 md:p-8 card-hover"
        >
          {achievements.map((item, index) => (
            <li key={item} className="flex gap-4 items-start text-lg font-semibold">
              <span className={`mt-2.5 h-3 w-3 rounded-[4px] border-2 border-black shrink-0 ${index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-blue' : 'bg-pink'}`} />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
