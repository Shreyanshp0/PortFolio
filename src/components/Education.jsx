import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { education } from '../data/experience'

export function Education() {
  return (
    <section id="education" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Education"
          title="Academic journey"
          description="Keep this concise and focused on what matters for placements."
          accent="blue"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className={`neo-card p-6 h-full card-hover list-safe ${index % 2 === 0 ? 'asym-card-c sm:-translate-y-2' : 'asym-card-b sm:translate-y-5'}`}
            >
              <div className={`absolute left-0 top-0 h-5 w-24 border-b-[3px] border-r-[3px] border-black dark:border-white ${index % 2 === 0 ? 'bg-blue' : 'bg-yellow'}`} />
              <div className="pt-4">
                <h3 className="text-xl font-black">{edu.degree}</h3>
                <p className="mt-1 text-sm font-semibold">{edu.school}</p>
                <p className="text-xs text-theme-muted">{edu.timeline}</p>
                <div className="mt-4 inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-sm font-black text-ink bg-primary">
                  CGPA: {edu.cgpa}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={course}
                      className={`max-w-full text-xs font-semibold px-3 py-1 text-ink border-2 border-black rounded-full break-words ${
                        courseIndex % 3 === 0 ? 'bg-yellow' : courseIndex % 3 === 1 ? 'bg-blue' : 'bg-pink'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
