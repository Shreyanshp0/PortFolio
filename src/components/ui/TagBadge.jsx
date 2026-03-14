import { motion } from 'framer-motion'
import { tagPop } from '../../lib/motion'

const accentClasses = {
  primary: 'bg-primary',
  yellow: 'bg-yellow',
  blue: 'bg-blue',
  pink: 'bg-pink',
}

export function TagBadge({
  children,
  accent = 'blue',
  delay = 0,
  className = '',
  animate = false,
  textClassName = 'text-ink',
}) {
  const Component = animate ? motion.span : 'span'
  const accentClass = accentClasses[accent] ?? accentClasses.blue

  return (
    <Component
      {...(animate ? tagPop(delay) : {})}
      className={`max-w-full break-words rounded-full border-2 border-black px-3 py-1 text-xs font-semibold ${accentClass} ${textClassName} ${className}`.trim()}
    >
      {children}
    </Component>
  )
}
