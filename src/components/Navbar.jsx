import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { mechanicalButton, sharpEase } from '../lib/motion'

const navItems = [
  'hero',
  'about',
  'resume',
  'skills',
  'projects',
  'experience',
  'education',
  'certifications',
  'achievements',
  'activities',
  'contact',
]

const navAccentColors = ['#19F2A6', '#FFE95E', '#9FD9FF', '#FFB8F7']

export function Navbar({ onToggleTheme, theme }) {
  void motion
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const observer = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (event, sectionId) => {
    event.preventDefault()

    if (location.pathname === '/') {
      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate(`/#${sectionId}`)
    }

    setOpen(false)
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id
        if (visibleSection) {
          setActiveSection(visibleSection)
        }
      },
      { threshold: 0.1, rootMargin: '-100px 0px -50% 0px' },
    )

    const sections = document.querySelectorAll('.section-padding')
    sections.forEach((section) => {
      observer.current.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section)
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-theme-navbar/95 backdrop-blur border-b-4 border-black/5 dark:border-white/10 text-theme-primary">
      <div className="container-brutal py-4">
        <div className="neo-card asym-card-c bg-theme-navbar px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex shrink-0 items-center gap-4">
              <div className="shrink-0 leading-tight">
                <p className="text-sm font-black">Abhinav Thakur</p>
                <p className="text-xs text-theme-secondary">Full Stack / MERN</p>
              </div>
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-2 whitespace-nowrap text-sm font-semibold lg:flex xl:gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item
                const accentColor = navAccentColors[index % navAccentColors.length]

                return (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={(event) => goToSection(event, item)}
                    className={`relative shrink-0 whitespace-nowrap px-1 py-2 rounded-[10px] border-[3px] border-transparent ${
                      isActive ? `text-ink border-black` : 'hover:bg-blue/60 hover:border-black/20'
                    }`}
                    whileHover={{ y: -2, transition: { duration: 0.15, ease: sharpEase } }}
                  >
                    <AnimatePresence>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-[10px]"
                          style={{ backgroundColor: accentColor }}
                          transition={{
                            layout: { duration: 0.22, ease: sharpEase },
                            backgroundColor: { duration: 0.18, ease: 'linear' },
                          }}
                        />
                      ) : null}
                    </AnimatePresence>
                    <span className="relative z-10">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </motion.a>
                )
              })}
            </nav>

            <div className="flex shrink-0 items-center justify-end gap-4">
              <motion.button
                aria-label="Toggle theme"
                aria-pressed={theme === 'dark'}
                onClick={onToggleTheme}
                className="neo-btn px-3 py-2 bg-yellow text-ink flex items-center gap-2"
                {...mechanicalButton}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                <span className="hidden sm:inline text-sm">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </motion.button>
              <motion.button
                className="lg:hidden neo-btn px-3 py-2 bg-primary"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                {...mechanicalButton}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden container-brutal mt-2">
          <div id="mobile-navigation" className="neo-card asym-card-b bg-theme-navbar p-4 flex flex-col gap-2 text-theme-primary">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(event) => goToSection(event, item)}
                className={`px-3 py-2 rounded-[10px] transition-colors ${
                  index % 4 === 0 ? 'hover:bg-primary hover:text-ink' : index % 4 === 1 ? 'hover:bg-yellow hover:text-ink' : index % 4 === 2 ? 'hover:bg-blue hover:text-ink' : 'hover:bg-pink hover:text-ink'
                }`}
                aria-current={activeSection === item ? 'location' : undefined}
                whileHover={{ x: -2, y: -2, transition: { duration: 0.15, ease: sharpEase } }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
