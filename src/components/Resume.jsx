import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { cardLift, mechanicalButton, sectionReveal, sharpEase } from '../lib/motion'
import resumeLink from '../assets/Abhinav_CV.pdf'

export function Resume() {
  void motion

  return (
    <section id="resume" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Resume"
          title="One-page snapshot"
          description="A quick snapshot of my journey, skills, and impact—all in one page"
          accent="pink"
        />

        <motion.div
          {...sectionReveal()}
          className="neo-card asym-card-a p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-8 card-hover"
          {...cardLift}
        >
          <div className="flex-1 space-y-6 list-safe">
            <div className="inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink bg-yellow">
              Resume Module
            </div>
            <p className="text-lg font-black">Resume preview</p>
            <p className="text-sm text-theme-secondary">
              Here is a crisp, metrics-focused snapshot of my recent projects, impact numbers, and tech stack.
            </p>
            <div className="flex gap-4 flex-wrap">
            <motion.a className="neo-btn bg-primary px-4 py-3 flex items-center gap-2" href={resumeLink} download="AbhinavCV.pdf" {...mechanicalButton}>
                <Download size={18} /> Download
              </motion.a>
                <motion.a
                className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                {...mechanicalButton}
              >
                <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: sharpEase }}>
                  <FileText size={18} />
                </motion.span>
                View
              </motion.a>
            </div>
          </div>
          <div className="neo-card-muted asym-card-b w-full md:w-1/2 min-h-64 grid place-items-center text-center p-6 bg-blue">
            <div className="space-y-2">
              <p className="text-sm font-black text-ink">Results-driven Full Stack Developer with strong expertise in MERN stack, RESTful APIs, and scalable system design, demonstrated through building a real-time AI-powered telemedicine platform with secure video consultations and optimized workflows. Proven ability to enhance performance and efficiency, reducing memory usage by 40% and achieving millisecond-level response times in data-driven applications. Skilled in backend automation, real-time communication technologies, and data structures, with hands-on experience solving 100+ DSA problems to strengthen algorithmic thinking. Recognized as a top performer in a web hackathon, showcasing innovation, problem-solving, and project execution excellence.</p>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}