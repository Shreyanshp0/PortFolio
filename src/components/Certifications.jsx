import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { certifications } from '../data/experience'
import { cardLift, staggerGrid, staggerItem, mechanicalButton, sharpEase } from '../lib/motion'
import { FileText } from 'lucide-react'

export function Certifications() {
  void motion
  return (
    <section id="certifications" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Certifications"
          title="Learning checkpoints"
          description="My certificates not only signify my technical skills but also strengthen them, and I have created a project that maps each certificate.  "
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
          className={`neo-card p-6 h-full flex flex-col card-hover list-safe ${idx % 3 === 0 ? 'asym-card-d md:-translate-y-2' : idx % 3 === 1 ? 'asym-card-b md:translate-y-3' : 'asym-card-a md:-translate-y-1'}`}
              {...cardLift}
            >
          <div>
            <div className={`mb-6 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${idx % 2 === 0 ? 'bg-pink' : 'bg-blue'}`}>
              {cert.date}
            </div>
            <h3 className="text-lg font-black">{cert.name}</h3>
            <p className="mt-4 text-sm font-semibold text-theme-secondary">{cert.org}</p>
          </div>
          
          {cert.CertificatePDF && (
            <div className="mt-auto pt-6 flex">
              <motion.a
                href={cert.CertificatePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-theme-card text-theme-primary px-4 py-3 inline-flex items-center gap-2 text-sm font-semibold"
                {...mechanicalButton}
              >
                <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: sharpEase }}>
                  <FileText size={18} />
                </motion.span>
                View Certificate
              </motion.a>
            </div>
          )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
