import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Rocket, ShieldCheck, UserRound } from 'lucide-react'

const storyChunks = [
  'I am a B.Tech CS student shaping practical products through **full-stack MERN development** and thoughtful execution.',
  'I am driven by translating complex backend behavior into interfaces that feel quiet, fast, and effortless.',
  'I focus on scalable systems, **clean architecture**, and implementation choices that stay maintainable over time.',
  'My philosophy is simple: build for users first, then measure decisions by clarity, trust, and **product impact**.',
  'I thrive on bold ideas and vibrant energy, always willing to take **calculated risks** and make decisive moves to create something impactful.'
]

const aboutCards = [
  {
    title: 'Current Status',
    value: 'Third-Sem CS student building production-ready MERN systems.',
    accent: 'bg-blue',
    icon: UserRound,
  },
  {
    title: 'Core Philosophy',
    value: 'Clean architecture, frictionless UX, measurable outcomes.',
    accent: 'bg-primary',
    icon: ShieldCheck,
  },
  {
    title: 'What Drives Me',
    value: 'Solving hard technical problems that users never have to notice.',
    accent: 'bg-pink',
    icon: BrainCircuit,
  },
  {
    title: 'Working Mode',
    value: 'Ship fast, validate quickly, then refine with intent.',
    accent: 'bg-yellow',
    icon: Rocket,
  },
]

const highlightPhrases = [
  'full-stack MERN development',
  'clean architecture',
  'product impact',
]

const renderHighlightedText = (text) => {
  const pattern = new RegExp(`(${highlightPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')

  return text
    .replace(/\*\*/g, '')
    .split(pattern)
    .map((part, index) =>
      highlightPhrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase()) ? (
        <strong key={`${part}-${index}`} className="font-black text-theme-primary">
          {part}
        </strong>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      ),
    )
}

export function About() {
  void motion

  return (
    <section id="about" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="neo-card asym-card-a p-6 pt-14 md:p-8 md:pt-16 lg:p-10 lg:pt-16"
        >
          <div className="absolute right-0 top-0 h-5 w-28 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />

          <motion.div
            initial={{ opacity: 0, x: 10, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 12 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.22 }}
            className="absolute right-3 top-[-22px] z-20 inline-flex rounded-[16px] border-[3px] border-black bg-theme-card px-4 py-3 text-right text-xs font-black uppercase leading-tight text-ink shadow-[5px_5px_0_#000] md:right-8 md:top-[-18px]"
          >
            Open to
            <br />
            challenges
          </motion.div>

          <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">
            <div className="space-y-6 md:pr-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.06, duration: 0.24 }}
                className="space-y-4"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-theme-secondary md:text-base">
                  Building for the web & beyond
                </p>
                <h2 className="max-w-4xl text-4xl font-black leading-[1.05] text-theme-primary md:text-5xl lg:text-[3.25rem]">
                  I&apos;m obsessed with turning complex backend logic into invisible, intuitive user experiences.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.1, duration: 0.26 }}
                className="max-w-3xl space-y-4 text-base leading-relaxed text-theme-secondary md:text-lg"
              >
                {storyChunks.map((chunk, index) => (
                  <p key={index} className="max-w-[42rem]">
                    {renderHighlightedText(chunk)}
                  </p>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.12, duration: 0.26 }}
                className="neo-card asym-card-c p-4"
              >
                <div className="absolute right-0 top-0 h-4 w-20 border-b-[3px] border-l-[3px] border-black dark:border-white bg-pink" />
                <div className="flex items-center gap-4">
                  <div className="grid h-[84px] w-[84px] shrink-0 place-items-center border-[3px] border-black bg-yellow shadow-[5px_5px_0_#000]">
                    <UserRound size={34} className="text-ink" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-[12px] border-[3px] border-black bg-blue px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink">
                      <Code2 size={14} />
                      <span>Profile Snapshot</span>
                    </div>
                    <p className="text-sm font-black leading-snug text-theme-primary md:text-base">
                      Backend depth, frontend clarity, and systems built to scale.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-4">
                {aboutCards.map((card, index) => {
                  const Icon = card.icon

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -1 : 1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: 0.16 + index * 0.05, duration: 0.24 }}
                      whileHover={{ x: -4, y: -4, transition: { duration: 0.18 } }}
                      className="neo-card-muted card-hover min-h-[122px] p-5"
                    >
                      <div className={`mb-4 inline-flex items-center gap-2 rounded-[12px] border-[3px] border-black px-3 py-1 text-sm font-black uppercase tracking-[0.14em] text-ink ${card.accent}`}>
                        <Icon size={16} />
                        <span>{card.title}</span>
                      </div>
                      <p className="text-base font-black leading-snug text-theme-primary md:text-lg">{card.value}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
