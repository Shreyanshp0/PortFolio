import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { skillGroups } from '../data/skills'
import { cardLift, staggerGrid, staggerItem } from '../lib/motion'

const accentDot = {
  primary: 'bg-primary',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  blue: 'bg-blue',
}

const shapeMap = ['asym-card-a', 'asym-card-b', 'asym-card-c', 'asym-card-d']

export function Skills() {
  void motion
  return (
    <section id="skills" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Skills"
          title="Core toolkit"
          description="Neo-brutalist cards grouped by area. Update the TODOs with your stack before sharing."
          accent="blue"
        />

        <div className="relative">
          <div className="system-connector left-[18%] top-24 h-[3px] w-[24%] bg-black dark:bg-white opacity-30" />
          <div className="system-connector left-[42%] top-24 h-14 w-[3px] bg-black dark:bg-white opacity-30" />
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                variants={staggerItem(index % 2 === 0 ? -2 : 2)}
                className={`neo-card p-6 h-full card-hover list-safe ${shapeMap[index % shapeMap.length]} ${
                  index % 2 === 0 ? 'lg:-translate-y-3' : 'lg:translate-y-5'
                }`}
                {...cardLift}
              >
                <div className={`accent-strip ${accentDot[group.accent] || accentDot.primary}`} />
                <div className="pl-4">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-black">{group.title}</h3>
                    <span
                      className={`h-4 w-4 rounded-[6px] border-[3px] border-black ${
                        accentDot[group.accent] || accentDot.primary
                      }`}
                    />
                  </div>
                  <ul className="list-safe space-y-4 text-sm font-semibold text-theme-secondary">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full theme-dot shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
