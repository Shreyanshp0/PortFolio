import { motion } from 'framer-motion'

const accentMap = {
  primary: 'bg-primary text-ink',
  yellow: 'bg-yellow text-ink',
  pink: 'bg-pink text-ink',
  blue: 'bg-blue text-ink',
}

export function SectionHeader({ kicker, title, description, accent = 'primary' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className="space-y-3"
    >
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 neo-btn ${accentMap[accent] ?? accentMap.primary}`}
      >
        <span className="w-2 h-2 rounded-full theme-dot" />
        <p className="text-sm font-semibold uppercase tracking-wide">{kicker}</p>
      </span>
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-theme-primary">{title}</h2>
        {description ? <p className="max-w-3xl text-lg text-theme-secondary">{description}</p> : null}
      </div>
    </motion.div>
  )
}
