import { useState, useEffect, useRef } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certifications',
  'achievements',
  'activities',
  'resume',
  'contact',
]

export function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const observer = useRef(null)

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
    <header className="sticky top-0 z-50 bg-theme-navbar backdrop-blur border-b-4 border-black/5 dark:border-white/10 text-theme-primary">
      <div className="container-brutal py-2">
        <div className="neo-card bg-theme-navbar flex items-center justify-between gap-2 px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary border-2 border-black rounded-full grid place-items-center font-bold text-ink shadow-brutal">
              CS
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Shreyansh Pandey</p>
              <p className="text-xs text-theme-secondary">Full Stack / MERN</p>
            </div>
          </div>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`px-2 py-1.5 rounded-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-brutal ${
                    isActive
                      ? 'bg-primary text-ink shadow-brutal border-2 border-black'
                      : 'hover:bg-blue/60'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 justify-end">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="neo-btn px-3 py-2 bg-yellow text-ink flex items-center gap-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              <span className="hidden sm:inline text-sm">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <button
              className="lg:hidden neo-btn px-3 py-2 bg-primary"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden container-brutal mt-2 neo-card bg-theme-navbar p-4 flex flex-col gap-2 text-theme-primary">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-3 py-2 rounded-md hover:bg-primary hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}
