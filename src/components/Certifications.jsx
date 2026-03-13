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

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={`${cert.name}-${idx}`}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`neo-card p-6 h-full card-hover list-safe ${idx % 3 === 0 ? 'asym-card-d md:-translate-y-2' : idx % 3 === 1 ? 'asym-card-b md:translate-y-4' : 'asym-card-a md:-translate-y-1'}`}
            >
              <div className={`mb-4 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${idx % 2 === 0 ? 'bg-pink' : 'bg-blue'}`}>
                {cert.date}
              </div>
              <h3 className="text-lg font-black">{cert.name}</h3>
              <p className="mt-2 text-sm font-semibold text-theme-secondary">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
