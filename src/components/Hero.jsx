import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'
import { sharpEase } from '../lib/motion'

import profileImage from '../../Reference image/Abhinav_ProfilePic.jpeg'

const heroStats = [
  { label: 'Specialty', value: 'MERN Stack', accent: 'bg-blue', tilt: '-1deg' },
  { label: 'Looking for', value: 'SDE / Backend / MERN', accent: 'bg-primary', tilt: '1deg' },
  { label: 'Focus', value: 'Backend System Designing', accent: 'bg-yellow', tilt: '-1deg' },
  { label: 'Status', value: 'Open to collaborate', accent: 'bg-pink', tilt: '1deg' },
]

const heroShell = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: 'easeOut',
    },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: 'easeOut',
    },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: 'easeOut',
    },
  },
}

const cardHoverByIndex = (index) => ({
  y: -8,
  scale: index === 1 ? 1.04 : 1.03,
  rotate: index % 2 === 0 ? -1 : 1,
  transition: {
    duration: 0.24,
    ease: 'easeOut',
  },
})

const floatingTransition = (duration, delay = 0) => ({
  duration,
  delay,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'loop',
})

export function Hero() {
  void motion
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="hero" className="section-padding scroll-offset grid-faint text-theme-primary lg:min-h-[calc(100vh-96px)]">
      <div className="container-brutal">
        <motion.div
          className="grid gap-8 lg:min-h-[calc(100vh-136px)] lg:grid-cols-[1.02fr,0.98fr] lg:items-center lg:gap-8"
          variants={heroShell}
          initial="hidden"
          animate="show"
        >
          <motion.div className="relative space-y-6" variants={slideLeft}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 neo-btn bg-yellow text-ink bounce-soft"
            >
              Available for tech placements and website development
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.68, ease: 'easeOut' }}
              className="neo-card asym-card-a p-6 md:p-8"
            >
              <div className="absolute right-0 top-0 h-5 w-28 border-b-[3px] border-l-[3px] border-black dark:border-white bg-pink" />
              <div className="absolute -right-4 bottom-8 h-12 w-12 rounded-[14px] border-[3px] border-black dark:border-white bg-blue" />

              <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-theme-muted">Creative Developer Portfolio</p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-[3.15rem]">
                Abhinav Thakur
                <span className="mt-1.5 block text-primary">Full Stack MERN Developer</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-6 text-theme-secondary md:text-lg">
                Passionate software engineer crafting scalable full-stack applications and experimenting with AI to build
                smarter digital experiences.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              variants={staggerContainer}
            >
              <motion.a
                className="neo-btn bg-primary px-4 py-3 flex items-center gap-2"
                href="https://github.com/Shreyanshp0"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.22, ease: 'easeOut' } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.16, ease: 'easeOut' } }}
              >
                <motion.span whileHover={{ rotate: -10 }} transition={{ duration: 0.2, ease: sharpEase }}>
                  <Github size={18} />
                </motion.span>
                GitHub
              </motion.a>
              <motion.a
                className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2"
                href="https://www.linkedin.com/in/abhinav-thakur-724182406?trk=contact-info"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.22, ease: 'easeOut' } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.16, ease: 'easeOut' } }}
              >
                <Linkedin size={18} /> LinkedIn
              </motion.a>
              <motion.a
                className="neo-btn bg-pink px-4 py-3 flex items-center gap-2"
                href="#resume"
                aria-label="Jump to resume section"
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.22, ease: 'easeOut' } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.16, ease: 'easeOut' } }}
              >
                <Download size={18} /> Resume
              </motion.a>
              <motion.a
                className="neo-btn bg-yellow text-ink px-4 py-3 flex items-center gap-2"
                href="#projects"
                aria-label="Jump to projects section"
                variants={fadeUp}
                style={prefersReducedMotion ? undefined : { scale: 1.05 }}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                  transition: { duration: 0.24, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.96, transition: { duration: 0.16, ease: 'easeOut' } }}
              >
                View projects
                <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2, ease: sharpEase }}>
                  <ArrowUpRight size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="relative space-y-6 lg:pl-4" variants={slideRight}>
            <div className="system-connector left-0 top-28 h-[3px] w-20 bg-black dark:bg-white opacity-30" />
            <motion.div variants={fadeUp}>
              <motion.div
                animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
                transition={prefersReducedMotion ? undefined : floatingTransition(4.2, 0.2)}
              >
                <motion.div
                  className="neo-card asym-card-c mx-auto w-full max-w-[240px] overflow-hidden p-4 sm:max-w-[260px] lg:mx-0 lg:max-w-[280px]"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: 1.035,
                          rotate: 1.2,
                          transition: { duration: 0.28, ease: 'easeOut' },
                        }
                  }
                >
                  <div className="absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />
                  <div className="absolute -left-3 bottom-6 h-10 w-10 rounded-[12px] border-[3px] border-black dark:border-white bg-yellow" />
                  <motion.div
                    className="aspect-[4/4.35] max-h-[320px] overflow-hidden border-[3px] border-black dark:border-white bg-theme-main"
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            rotate: -1.2,
                            scale: 1.02,
                            transition: { duration: 0.28, ease: 'easeOut' },
                          }
                    }
                  >
                    <motion.img
                      src={profileImage}
                      alt="Abhinav Thakur profile"
                      className="h-full w-full object-cover"
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
              {heroStats.map((item, index) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            y: [0, index % 2 === 0 ? -5 : -7, 0],
                          }
                    }
                    transition={prefersReducedMotion ? undefined : floatingTransition(3.4 + index * 0.45, index * 0.22)}
                  >
                    <motion.div
                      className={`neo-card p-5 card-hover list-safe ${index % 2 === 0 ? 'asym-card-b lg:-translate-y-1' : 'asym-card-d lg:translate-y-1'}`}
                      style={{ '--hover-tilt': item.tilt, willChange: 'transform' }}
                      whileHover={prefersReducedMotion ? undefined : cardHoverByIndex(index)}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                    >
                      <div className={`accent-strip ${item.accent}`} />
                      <div className="pl-4">
                        <p className="text-xs text-theme-muted sm:text-sm">{item.label}</p>
                        <p className="mt-2 text-base font-black text-theme-primary lg:text-lg xl:text-xl">{item.value}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
