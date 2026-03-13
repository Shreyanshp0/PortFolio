import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="About"
          title="Who I am"
          description="A quick overview of my academic background, career interests, and the technologies I enjoy working with."
          accent="yellow"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="neo-card p-6 md:p-8 bg-theme-card space-y-6 card-hover"
        >
          <p className="text-lg leading-relaxed text-theme-secondary">
            TODO: Write your personal bio. Highlight your academic path (e.g., B.Tech CSE), what sparked your interest in
            MERN development, and the kind of products you love crafting. Mention your focus on performance, accessibility,
            and building delightful developer experiences.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[{ label: 'Academic focus', value: 'TODO: e.g., Systems + Web' }, { label: 'Career interests', value: 'Frontend Engineering, SDE, Developer Tools' }, { label: 'Technology focus', value: 'React, Node.js, Cloud basics' }].map((item) => (
              <div key={item.label} className="neo-card-muted p-4 h-full card-hover">
                <p className="text-sm text-theme-muted">{item.label}</p>
                <p className="text-lg font-semibold text-theme-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
