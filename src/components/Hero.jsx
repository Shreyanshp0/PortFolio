import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'

const profileImage = 'https://github.com/Shreyanshp0.png'

const heroStats = [
  { label: 'Specialty', value: 'Frontend Systems', accent: 'bg-blue', tilt: '-1deg' },
  { label: 'Looking for', value: 'SDE / Frontend / MERN', accent: 'bg-primary', tilt: '1deg' },
  { label: 'Focus', value: 'DX, performance, UX', accent: 'bg-yellow', tilt: '-1deg' },
  { label: 'Status', value: 'Open to collaborate', accent: 'bg-pink', tilt: '1deg' },
]

export function Hero() {
  return (
    <section id="hero" className="section-padding scroll-offset grid-faint text-theme-primary lg:min-h-[calc(100vh-96px)]">
      <div className="container-brutal">
        <div className="grid gap-6 lg:min-h-[calc(100vh-136px)] lg:grid-cols-[1.02fr,0.98fr] lg:items-center lg:gap-6">
          <div className="relative space-y-4 lg:space-y-3">
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
              className="neo-card asym-card-a p-5 md:p-6"
            >
              <div className="absolute right-0 top-0 h-5 w-28 border-b-[3px] border-l-[3px] border-black dark:border-white bg-pink" />
              <div className="absolute -right-4 bottom-8 h-12 w-12 rounded-[14px] border-[3px] border-black dark:border-white bg-blue" />

              <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-theme-muted">Creative Developer Portfolio</p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-[3.15rem]">
                Shreyansh Pandey
                <span className="mt-1.5 block text-primary">Full Stack MERN Developer</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-6 text-theme-secondary md:text-lg">
                Passionate software engineer crafting scalable full-stack applications and experimenting with AI to build
                smarter digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-2.5 pt-1"
            >
              <a className="neo-btn bg-primary px-4 py-3 flex items-center gap-2" href="https://github.com/Shreyanshp0">
                <Github size={18} /> GitHub
              </a>
              <a className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2" href="https://linkedin.com/in/Shreyanshp0">
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
            className="relative space-y-3 lg:space-y-2.5 lg:pl-4"
          >
            <div className="system-connector left-0 top-28 h-[3px] w-20 bg-black dark:bg-white opacity-30" />
            <div className="neo-card asym-card-c mx-auto w-full max-w-[240px] overflow-hidden p-3 sm:max-w-[260px] lg:mx-0 lg:max-w-[280px]">
              <div className="absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />
              <div className="absolute -left-3 bottom-6 h-10 w-10 rounded-[12px] border-[3px] border-black dark:border-white bg-yellow" />
              <div className="aspect-[4/4.35] max-h-[320px] overflow-hidden border-[3px] border-black dark:border-white bg-theme-main">
                <img
                  src={profileImage}
                  alt="Shreyansh Pandey profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -2 : 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                  className={`neo-card p-4 card-hover list-safe ${index % 2 === 0 ? 'asym-card-b lg:-translate-y-1' : 'asym-card-d lg:translate-y-1'}`}
                  style={{ '--hover-tilt': item.tilt }}
                >
                  <div className={`accent-strip ${item.accent}`} />
                  <div className="pl-4">
                    <p className="text-xs text-theme-muted sm:text-sm">{item.label}</p>
                    <p className="mt-2 text-base font-black text-theme-primary lg:text-lg xl:text-xl">{item.value}</p>
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
