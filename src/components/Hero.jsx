import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'
import { mechanicalButton, sharpEase, staggerGrid, staggerItem } from '../lib/motion'

const profileImage = 'https://github.com/Shreyanshp0.png'

const heroStats = [
  { label: 'Specialty', value: 'Frontend Systems', accent: 'bg-blue', tilt: '-1deg' },
  { label: 'Looking for', value: 'SDE / Frontend / MERN', accent: 'bg-primary', tilt: '1deg' },
  { label: 'Focus', value: 'DX, performance, UX', accent: 'bg-yellow', tilt: '-1deg' },
  { label: 'Status', value: 'Open to collaborate', accent: 'bg-pink', tilt: '1deg' },
]

export function Hero() {
  void motion
  return (
    <section id="hero" className="section-padding scroll-offset grid-faint text-theme-primary lg:min-h-[calc(100vh-96px)]">
      <div className="container-brutal">
        <div className="grid gap-8 lg:min-h-[calc(100vh-136px)] lg:grid-cols-[1.02fr,0.98fr] lg:items-center lg:gap-8">
          <div className="relative space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 18, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.22, ease: sharpEase }}
              className="inline-flex items-center gap-2 px-4 py-2 neo-btn bg-yellow text-ink bounce-soft"
            >
              Available for tech placements and website development
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.24, ease: sharpEase }}
              className="neo-card asym-card-a p-6 md:p-8"
            >
              <div className="absolute right-0 top-0 h-5 w-28 border-b-[3px] border-l-[3px] border-black dark:border-white bg-pink" />
              <div className="absolute -right-4 bottom-8 h-12 w-12 rounded-[14px] border-[3px] border-black dark:border-white bg-blue" />

              <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-theme-muted">Creative Developer Portfolio</p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-[3.15rem]">
                Shreyansh Pandey
                <span className="mt-1.5 block text-primary">Full Stack MERN Developer</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-6 text-theme-secondary md:text-lg">
                Passionate software engineer crafting scalable full-stack applications and experimenting with AI to build
                smarter digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.05, ease: sharpEase }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a className="neo-btn bg-primary px-4 py-3 flex items-center gap-2" href="https://github.com/Shreyanshp0" target="_blank" rel="noreferrer" aria-label="Open GitHub profile" {...mechanicalButton}>
                <motion.span whileHover={{ rotate: -10 }} transition={{ duration: 0.15, ease: sharpEase }}>
                  <Github size={18} />
                </motion.span>
                GitHub
              </motion.a>
              <motion.a className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2" href="https://linkedin.com/in/Shreyanshp0" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile" {...mechanicalButton}>
                <Linkedin size={18} /> LinkedIn
              </motion.a>
              <motion.a className="neo-btn bg-pink px-4 py-3 flex items-center gap-2" href="#resume" aria-label="Jump to resume section" {...mechanicalButton}>
                <Download size={18} /> Resume
              </motion.a>
              <motion.a className="neo-btn bg-yellow text-ink px-4 py-3 flex items-center gap-2" href="#projects" aria-label="Jump to projects section" {...mechanicalButton}>
                View projects
                <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: sharpEase }}>
                  <ArrowUpRight size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.24, ease: sharpEase }}
            className="relative space-y-6 lg:pl-4"
          >
            <div className="system-connector left-0 top-28 h-[3px] w-20 bg-black dark:bg-white opacity-30" />
            <div className="neo-card asym-card-c mx-auto w-full max-w-[240px] overflow-hidden p-4 sm:max-w-[260px] lg:mx-0 lg:max-w-[280px]">
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
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerGrid}
              initial="hidden"
              animate="show"
            >
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem(index % 2 === 0 ? -2 : 2)}
                  className={`neo-card p-5 card-hover list-safe ${index % 2 === 0 ? 'asym-card-b lg:-translate-y-1' : 'asym-card-d lg:translate-y-1'}`}
                  style={{ '--hover-tilt': item.tilt }}
                  whileHover={{ x: -4, y: -4, transition: { duration: 0.16, ease: sharpEase } }}
                >
                  <div className={`accent-strip ${item.accent}`} />
                  <div className="pl-4">
                    <p className="text-xs text-theme-muted sm:text-sm">{item.label}</p>
                    <p className="mt-2 text-base font-black text-theme-primary lg:text-lg xl:text-xl">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
