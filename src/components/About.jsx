import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'

const aboutItems = [
  { label: 'Academic focus', value: 'TODO: e.g., Systems + Web', accent: 'bg-blue' },
  { label: 'Career interests', value: 'Frontend Engineering, SDE, Developer Tools', accent: 'bg-primary' },
  { label: 'Technology focus', value: 'React, Node.js, Cloud basics', accent: 'bg-pink' },
]

export function About() {
  void motion
  return (
    <section id="about" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="About"
          title="Who I am"
          description="A quick overview of my academic background, career interests, and the technologies I enjoy working with."
          accent="yellow"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="neo-card asym-card-a p-6 md:p-8 card-hover"
        >
          <div className="absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="list-safe space-y-6">
              <div className="inline-flex rounded-[14px] border-[3px] border-black px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-ink bg-yellow">
                <span className="h-3 w-3 rounded-full bg-ink" />
                <span>Profile Block</span>
              </div>
              <p className="text-lg leading-relaxed text-theme-secondary">
                TODO: Write your personal bio. Highlight your academic path, what sparked your interest in MERN
                development, and the kind of products you love crafting. Mention your focus on performance,
                accessibility, and building delightful developer experiences.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className={`neo-card-muted p-6 card-hover list-safe ${index === 1 ? 'asym-card-b lg:translate-x-4' : 'asym-card-d'} ${index === 2 ? 'lg:-translate-x-2' : ''}`}
                >
                  <div className={`mb-4 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-sm font-black uppercase tracking-[0.14em] text-ink ${item.accent}`}>
                    {item.label}
                  </div>
                  <p className="text-lg font-black text-theme-primary">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
