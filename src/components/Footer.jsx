import { motion } from 'framer-motion'
import { sharpEase } from '../lib/motion'

function FooterLink({ href, children, external = false }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="relative inline-block"
      whileHover={{ y: -2, transition: { duration: 0.15, ease: sharpEase } }}
    >
      <span>{children}</span>
      <motion.span
        className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-current origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.18, ease: sharpEase }}
      />
    </motion.a>
  )
}

export function Footer() {
  void motion
  return (
    <footer className="py-8 bg-theme-navbar text-theme-primary">
      <div className="container-brutal flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-semibold">Built with React, Tailwind, and lots of coffee</p>
        <div className="flex gap-6 text-sm">
          <FooterLink href="#hero">Back to top</FooterLink>
          <FooterLink href="https://github.com/Shreyanshp0" external>
            GitHub
          </FooterLink>
          <FooterLink href="mailto:todo@email.com">Email</FooterLink>
        </div>
      </div>
    </footer>
  )
}
