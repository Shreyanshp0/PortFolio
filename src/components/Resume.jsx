import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

export function Resume() {
  const resumeLink = '/resume.pdf' // TODO: Replace with your uploaded resume path

  return (
    <section id="resume" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Resume"
          title="One-page snapshot"
          description="Add a crisp, metrics-focused resume. Keep it to one page for quick screening."
          accent="pink"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="neo-card p-6 md:p-8 bg-theme-card flex flex-col md:flex-row items-center gap-6 card-hover"
        >
          <div className="flex-1 space-y-3">
            <p className="text-lg font-semibold">Resume preview</p>
            <p className="text-sm text-theme-secondary">
              TODO: Drop your PDF into /public/resume.pdf or update the link. Mention recent projects, impact numbers, and
              tech stack alignment with the roles you want.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a className="neo-btn bg-primary px-4 py-3 flex items-center gap-2" href={resumeLink} download>
                <Download size={18} /> Download
              </a>
              <a
                className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={18} /> View
              </a>
            </div>
          </div>
          <div className="neo-card-muted w-full md:w-1/2 h-72 grid place-items-center text-center p-4 bg-theme-card">
            <p className="text-sm font-semibold text-theme-secondary">
              Embed or preview your resume here
            </p>
            <p className="text-xs text-theme-muted">
              Tip: keep it one page with strong verbs and measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
