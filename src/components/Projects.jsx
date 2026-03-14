import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { projects, projectFilters } from '../data/projects'
import { GithubWidget } from './GithubWidget'

const projectShapes = ['asym-card-a', 'asym-card-b', 'asym-card-d', 'asym-card-c']
const highlightAccents = ['bg-yellow', 'bg-blue', 'bg-primary', 'bg-pink']

export function Projects() {
  const [active, setActive] = useState('All')
  const navigate = useNavigate()

  const handleProjectClick = (id) => {
    window.location.hash = '#projects'
    navigate(`/projects/${id}`)
  }

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <section id="projects" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Projects"
          title="Featured builds"
          description="A mix of full-stack, API, and open-source projects. Update the TODO placeholders with your real links and metrics."
          accent="pink"
        />

        <div className="flex flex-wrap gap-3">
          {projectFilters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`neo-btn px-4 py-2 text-sm font-semibold ${
                active === filter ? highlightAccents[index % highlightAccents.length] : 'bg-theme-card text-theme-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.3fr,0.7fr]">
          <div className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <div className="system-connector left-[24%] top-28 h-[3px] w-[20%] bg-black dark:bg-white opacity-30" />
            <div className="system-connector left-[44%] top-28 h-14 w-[3px] bg-black dark:bg-white opacity-30" />
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className={`neo-card p-6 h-full flex flex-col justify-between card-hover cursor-pointer list-safe ${
                  projectShapes[idx % projectShapes.length]
                } ${idx % 3 === 1 ? 'lg:translate-y-7' : idx % 3 === 2 ? 'lg:-translate-y-4' : ''}`}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className={`absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white ${highlightAccents[idx % highlightAccents.length]}`} />
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black">{project.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-yellow text-ink border-2 border-black rounded-full shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-theme-secondary mb-4">{project.description}</p>
                  <div className={`mb-4 border-[3px] border-black dark:border-white p-3 ${highlightAccents[(idx + 1) % highlightAccents.length]}`} style={{ borderRadius: '14px 6px 14px 6px' }}>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-ink/70">Highlight</p>
                    <p className="mt-2 text-sm font-semibold text-ink">{project.highlight}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="max-w-full text-xs font-semibold px-3 py-1 bg-blue text-ink border-2 border-black rounded-full break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                  {project.githubLink ? (
                    <a
                      className="neo-btn bg-primary px-3 py-2 flex items-center gap-2"
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> GitHub
                    </a>
                  ) : null}
                  {project.liveDemo ? (
                    <a
                      className="neo-btn bg-theme-card text-theme-primary px-3 py-2 flex items-center gap-2"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live demo <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="xl:pt-10">
            <GithubWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
