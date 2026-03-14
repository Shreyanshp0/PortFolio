import { motion } from 'framer-motion'

const accentMap = {
  primary: 'bg-primary text-ink',
  yellow: 'bg-yellow text-ink',
  pink: 'bg-pink text-ink',
  blue: 'bg-blue text-ink',
}

export function SectionHeader({ kicker, title, description, accent = 'primary' }) {
  void motion
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="section-node space-y-4 pb-4"
    >
      <motion.span
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`floating-label ${accentMap[accent] ?? accentMap.primary}`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-[10px] border-[3px] border-black bg-theme-card">
          <span className="h-3 w-3 rounded-full bg-ink" />
        </span>
        <span className="text-sm font-black uppercase tracking-[0.18em]">{kicker}</span>
      </motion.span>

      <div className="neo-card asym-card-c p-6 pt-10 md:p-8 md:pt-12">
        <div className="absolute left-0 top-0 h-4 w-32 border-b-[3px] border-r-[3px] border-black dark:border-white bg-blue" />
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-theme-primary">{title}</h2>
          {description ? <p className="max-w-3xl text-base md:text-lg text-theme-secondary">{description}</p> : null}
        </div>
      </div>
    </motion.div>
  )
}
