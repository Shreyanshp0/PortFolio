import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="section-padding scroll-offset grid-faint text-theme-primary">
      <div className="container-brutal">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 neo-btn bg-yellow text-ink"
            >
              Available for tech placements and Website Development
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Shreyansh Pandey
              <span className="block text-primary mt-2">Full Stack MERN Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-lg text-theme-secondary max-w-2xl"
            >
              Passionate software engineer crafting scalable full-stack applications and experimenting with AI to build smarter digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <a className="neo-btn bg-primary px-4 py-3 flex items-center gap-2" href="https://github.com/your-handle">
                <Github size={18} /> GitHub
              </a>
              <a className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2" href="https://linkedin.com/in/your-handle">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="neo-btn bg-pink px-4 py-3 flex items-center gap-2" href="#resume">
                <Download size={18} /> Resume
              </a>
              <a className="neo-btn bg-yellow text-ink px-4 py-3 flex items-center gap-2" href="#projects">
                View projects <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="neo-card p-7 lg:p-8 bg-theme-card card-hover"
          >
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-wide">Snapshot</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Specialty', value: 'Frontend Systems' },
                  { label: 'Looking for', value: 'SDE / Frontend / MERN' },
                  { label: 'Focus', value: 'DX, performance, UX' },
                  { label: 'Status', value: 'Open to collaborate' },
                ].map((item) => (
                  <div key={item.label} className="neo-card-muted p-4 h-full flex flex-col justify-between card-hover">
                    <p className="text-sm text-theme-muted">{item.label}</p>
                    <p className="text-lg font-semibold text-theme-primary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
