import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { skillGroups } from '../data/skills'

const accentDot = {
  primary: 'bg-primary',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  blue: 'bg-blue',
}

export function Skills() {
  return (
    <section id="skills" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Skills"
          title="Core toolkit"
          description="Neo-brutalist cards grouped by area. Update the TODOs with your stack before sharing."
          accent="blue"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="neo-card p-5 bg-theme-card h-full card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">{group.title}</h3>
                <span
                  className={`w-3 h-3 rounded-full border-2 border-black ${accentDot[group.accent] || accentDot.primary}`}
                />
              </div>
              <ul className="space-y-2 text-sm font-semibold text-theme-secondary">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
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
