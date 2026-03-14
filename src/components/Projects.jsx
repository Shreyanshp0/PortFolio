import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { projects, projectFilters } from '../data/projects'
import { GithubWidget } from './GithubWidget'
import { cardLift, mechanicalButton, staggerGrid, staggerItem, sharpEase } from '../lib/motion'
import { TagBadge } from './ui/TagBadge'

const projectShapes = ['asym-card-a', 'asym-card-b', 'asym-card-d', 'asym-card-c']
const highlightAccents = ['bg-yellow', 'bg-blue', 'bg-primary', 'bg-pink']

export function Projects() {
  void motion
  const [active, setActive] = useState('All')
  const navigate = useNavigate()

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`)
  }

  const handleProjectCardKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleProjectClick(id)
    }
  }

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <section id="projects" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Projects"
          title="Featured builds"
          description="A mix of full-stack, API, and open-source projects. Update the TODO placeholders with your real links and metrics."
          accent="pink"
        />

        <div className="flex flex-wrap gap-3">
          {projectFilters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActive(filter)}
              className={`neo-btn px-4 py-2 text-sm font-semibold ${
                active === filter ? highlightAccents[index % highlightAccents.length] : 'bg-theme-card text-theme-primary'
              }`}
              {...mechanicalButton}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.3fr,0.7fr]">
          <motion.div
            className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="system-connector left-[24%] top-28 h-[3px] w-[20%] bg-black dark:bg-white opacity-30" />
            <div className="system-connector left-[44%] top-28 h-14 w-[3px] bg-black dark:bg-white opacity-30" />
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={staggerItem(idx % 2 === 0 ? -2 : 2)}
                className={`neo-card p-6 h-full flex flex-col justify-between card-hover cursor-pointer list-safe focus-brutal ${
                  projectShapes[idx % projectShapes.length]
                } ${idx % 3 === 1 ? 'lg:translate-y-7' : idx % 3 === 2 ? 'lg:-translate-y-4' : ''}`}
                onClick={() => handleProjectClick(project.id)}
                onKeyDown={(event) => handleProjectCardKeyDown(event, project.id)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.title} project details`}
                {...cardLift}
              >
                <div className={`absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white ${highlightAccents[idx % highlightAccents.length]}`} />
                <div>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{project.title}</h3>
                    <TagBadge accent="yellow" className="shrink-0">
                      {project.category}
                    </TagBadge>
                  </div>
                  <p className="mb-4 text-sm text-theme-secondary">{project.description}</p>
                  <div className={`mb-4 border-[3px] border-black dark:border-white p-4 ${highlightAccents[(idx + 1) % highlightAccents.length]}`} style={{ borderRadius: '14px 6px 14px 6px' }}>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-ink/70">Highlight</p>
                    <p className="mt-2 text-sm font-semibold text-ink">{project.highlight}</p>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <TagBadge key={tech} accent="blue" delay={techIndex * 0.03} animate>
                        {tech}
                      </TagBadge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                  {project.githubLink ? (
                    <motion.a
                      className="neo-btn bg-primary px-3 py-2 flex items-center gap-2"
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} GitHub repository`}
                      {...mechanicalButton}
                    >
                      <motion.span whileHover={{ rotate: -10 }} transition={{ duration: 0.15, ease: sharpEase }}>
                        <Github size={16} />
                      </motion.span>
                      GitHub
                    </motion.a>
                  ) : null}
                  {project.liveDemo ? (
                    <motion.a
                      className="neo-btn bg-theme-card text-theme-primary px-3 py-2 flex items-center gap-2"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} live demo`}
                      {...mechanicalButton}
                    >
                      Live demo
                      <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: sharpEase }}>
                        <ExternalLink size={16} />
                      </motion.span>
                    </motion.a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="xl:pt-8">
            <GithubWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
