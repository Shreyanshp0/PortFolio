import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'

const heroStats = [
  { label: 'Specialty', value: 'Frontend Systems', accent: 'bg-blue', tilt: '-1deg' },
  { label: 'Looking for', value: 'SDE / Frontend / MERN', accent: 'bg-primary', tilt: '1deg' },
  { label: 'Focus', value: 'DX, performance, UX', accent: 'bg-yellow', tilt: '-1deg' },
  { label: 'Status', value: 'Open to collaborate', accent: 'bg-pink', tilt: '1deg' },
]

export function Hero() {
  return (
    <section id="hero" className="section-padding scroll-offset grid-faint text-theme-primary">
      <div className="container-brutal">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-center">
          <div className="relative space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 neo-btn bg-yellow text-ink bounce-soft"
            >
              Available for tech placements and website development
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 34, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="neo-card asym-card-a p-7 md:p-8"
            >
              <div className="absolute right-0 top-0 h-5 w-28 border-b-[3px] border-l-[3px] border-black dark:border-white bg-pink" />
              <div className="absolute -right-4 bottom-8 h-12 w-12 rounded-[14px] border-[3px] border-black dark:border-white bg-blue" />

              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-theme-muted">Creative Developer Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Shreyansh Pandey
                <span className="mt-3 block text-primary">Full Stack MERN Developer</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-theme-secondary">
                Passionate software engineer crafting scalable full-stack applications and experimenting with AI to build
                smarter digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
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
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.65 }}
            className="relative lg:pl-8"
          >
            <div className="system-connector left-0 top-28 h-[3px] w-20 bg-black dark:bg-white opacity-30" />
            <div className="grid gap-4 sm:grid-cols-2">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -2 : 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                  className={`neo-card p-6 card-hover list-safe ${index % 2 === 0 ? 'asym-card-b lg:-translate-y-3' : 'asym-card-d lg:translate-y-5'}`}
                  style={{ '--hover-tilt': item.tilt }}
                >
                  <div className={`accent-strip ${item.accent}`} />
                  <div className="pl-4">
                    <p className="text-sm text-theme-muted">{item.label}</p>
                    <p className="mt-4 text-xl font-black text-theme-primary">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
