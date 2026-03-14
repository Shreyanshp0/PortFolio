import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { certifications } from '../data/experience'
import { cardLift, staggerGrid, staggerItem } from '../lib/motion'

export function Certifications() {
  void motion
  return (
    <section id="certifications" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Certifications"
          title="Learning checkpoints"
          description="Add industry-recognized credentials relevant to the roles you want."
          accent="pink"
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={`${cert.name}-${idx}`}
              variants={staggerItem(idx % 2 === 0 ? -2 : 2)}
              className={`neo-card p-6 h-full card-hover list-safe ${idx % 3 === 0 ? 'asym-card-d md:-translate-y-2' : idx % 3 === 1 ? 'asym-card-b md:translate-y-3' : 'asym-card-a md:-translate-y-1'}`}
              {...cardLift}
            >
              <div className={`mb-6 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${idx % 2 === 0 ? 'bg-pink' : 'bg-blue'}`}>
                {cert.date}
              </div>
              <h3 className="text-lg font-black">{cert.name}</h3>
              <p className="mt-4 text-sm font-semibold text-theme-secondary">{cert.org}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
