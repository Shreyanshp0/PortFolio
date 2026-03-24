import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { achievements } from '../data/experience'
import { cardLift, staggerGrid, staggerItem } from '../lib/motion'

export function Achievements() {
  void motion
  return (
    <section id="achievements" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Achievements"
          title="Highlights & wins"
          description="Turning milestones into momentum—here’s a glimpse of what I’ve accomplished so far."
          accent="yellow"
        />

        <motion.ul
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="list-safe space-y-4 neo-card asym-card-c p-6 md:p-8 card-hover"
          {...cardLift}
        >
          {achievements.map((item, index) => (
            <motion.li key={item} className="flex gap-6 items-start text-lg font-semibold" variants={staggerItem(index % 2 === 0 ? -1 : 1)}>
              <span className={`mt-2.5 h-3 w-3 rounded-[4px] border-2 border-black shrink-0 ${index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-blue' : 'bg-pink'}`} />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
