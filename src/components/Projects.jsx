import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { projects, projectFilters } from '../data/projects'
import { GithubWidget } from './GithubWidget'

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
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`neo-btn px-4 py-2 text-sm font-semibold ${
                active === filter ? 'bg-primary' : 'bg-theme-card text-theme-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="neo-card p-5 bg-theme-card h-full flex flex-col justify-between card-hover cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-yellow text-ink border-2 border-black rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-theme-secondary mb-3">{project.description}</p>
                  <p className="text-xs font-semibold text-theme-muted mb-3">{project.highlight}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-3 py-1 bg-blue text-ink border-2 border-black rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <a
                    className="neo-btn bg-primary px-3 py-2 flex items-center gap-2"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    className="neo-btn bg-theme-card text-theme-primary px-3 py-2 flex items-center gap-2"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live demo <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <GithubWidget />
        </div>
      </div>
    </section>
  )
}
