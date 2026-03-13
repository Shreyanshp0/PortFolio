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
    <header className="sticky top-0 z-50 bg-theme-navbar/95 backdrop-blur border-b-4 border-black/5 dark:border-white/10 text-theme-primary">
      <div className="container-brutal py-3">
        <div className="neo-card asym-card-c bg-theme-navbar px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex shrink-0 items-center gap-3">
              <div className="shrink-0 leading-tight">
                <p className="text-sm font-black">Shreyansh Pandey</p>
                <p className="text-xs text-theme-secondary">Full Stack / MERN</p>
              </div>
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 px-1 whitespace-nowrap text-sm font-semibold lg:flex xl:gap-1.5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item
                const accentClass = index % 4 === 0 ? 'bg-primary' : index % 4 === 1 ? 'bg-yellow' : index % 4 === 2 ? 'bg-blue' : 'bg-pink'
                return (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`shrink-0 whitespace-nowrap px-1 py-2 rounded-[10px] transition-all duration-150 hover:-translate-y-1 border-[3px] border-transparent ${
                      isActive ? `${accentClass} text-ink border-black shadow-brutal` : 'hover:bg-blue/60 hover:border-black/20'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              })}
            </nav>

            <div className="flex shrink-0 items-center justify-end gap-3">
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
      </div>

      {open ? (
        <div className="lg:hidden container-brutal mt-2">
          <div className="neo-card asym-card-b bg-theme-navbar p-4 flex flex-col gap-2 text-theme-primary">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className={`px-3 py-2 rounded-[10px] transition-colors ${
                  index % 4 === 0 ? 'hover:bg-primary hover:text-ink' : index % 4 === 1 ? 'hover:bg-yellow hover:text-ink' : index % 4 === 2 ? 'hover:bg-blue hover:text-ink' : 'hover:bg-pink hover:text-ink'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
