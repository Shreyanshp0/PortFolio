import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowLeft,
  ExternalLink,
  Github,
  Lightbulb,
  Play,
  Server,
  Star,
  Wrench,
  X,
} from 'lucide-react'
import { getProjectById } from '../data/projects'

const sectionMeta = {
  problem: {
    title: 'Problem',
    icon: AlertCircle,
    accent: 'bg-yellow',
  },
  solution: {
    title: 'Solution',
    icon: Lightbulb,
    accent: 'bg-primary',
  },
  architecture: {
    title: 'Architecture',
    icon: Server,
    accent: 'bg-blue',
  },
  challenges: {
    title: 'Challenges',
    icon: Wrench,
    accent: 'bg-pink',
  },
  features: {
    title: 'Key Features',
    icon: Star,
    accent: 'bg-green',
  },
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-sm md:text-[15px] leading-6 text-theme-secondary">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary border border-black dark:border-white" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ArchitectureList({ groups }) {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.label} className="neo-card-muted p-4">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-theme-primary">
            {group.label}
          </p>
          <BulletList items={group.items} />
        </div>
      ))}
    </div>
  )
}

function CaseStudyCard({ sectionKey, content }) {
  const { title, icon: Icon, accent } = sectionMeta[sectionKey]
  const isArchitectureGroup = sectionKey === 'architecture' && Array.isArray(content) && content[0]?.items

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="neo-card rounded-2xl p-6 md:p-7 h-full"
    >
      <div className="mb-5 flex items-center gap-3 border-b-2 border-black/10 dark:border-white/10 pb-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-xl border-[3px] border-black dark:border-white ${accent} text-ink shadow-[4px_4px_0_var(--shadow-color)]`}
        >
          <Icon size={22} />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-theme-muted">Case Study</p>
          <h2 className="text-2xl font-black tracking-tight text-theme-primary">{title}</h2>
        </div>
      </div>

      {isArchitectureGroup ? <ArchitectureList groups={content} /> : <BulletList items={content} />}
    </motion.article>
  )
}

function ImageModal({ image, title, onClose }) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-14 right-0 neo-btn bg-yellow px-3 py-2 text-ink"
            >
              <X size={18} />
            </button>
            <div className="neo-card overflow-hidden rounded-2xl bg-theme-card">
              <img src={image} alt={`${title} preview`} className="max-h-[82vh] w-full object-contain bg-theme-main" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = useMemo(() => getProjectById(projectId), [projectId])
  const [selectedImage, setSelectedImage] = useState(null)

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-brutal space-y-6">
          <p className="text-2xl font-bold">Project not found.</p>
          <button className="neo-btn bg-primary px-4 py-3" onClick={() => navigate('/')}>
            Back to projects
          </button>
        </div>
      </section>
    )
  }

  const sectionOrder = ['problem', 'solution', 'architecture', 'challenges', 'features']

  return (
    <div className="bg-theme-main text-theme-primary">
      <section className="section-padding scroll-offset">
        <div className="container-brutal space-y-8">
          <button className="neo-btn bg-yellow px-4 py-3 flex items-center gap-2" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back to projects
          </button>

          <div className="neo-card p-6 md:p-8">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold px-3 py-1 bg-primary border-2 border-black rounded-full text-ink">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1 bg-blue border-2 border-black rounded-full text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tight">{project.title}</h1>
                  <p className="max-w-3xl text-lg text-theme-secondary">{project.description}</p>
                </div>

                <div className="neo-card-muted p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-theme-muted">Project Snapshot</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-theme-primary">{project.highlight}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.githubLink ? (
                  <a
                    className="neo-btn bg-primary px-4 py-3 flex items-center gap-2"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} /> GitHub
                  </a>
                ) : null}
                {project.liveDemo ? (
                  <a
                    className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <ExternalLink size={18} />
                  </a>
                ) : null}
                {project.video ? (
                  <a
                    className="neo-btn bg-pink px-4 py-3 flex items-center gap-2"
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Play size={18} /> Watch demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-brutal grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)]">
          <div className="grid gap-6 md:grid-cols-2">
            {sectionOrder.map((sectionKey) => (
              <div
                key={sectionKey}
                className={sectionKey === 'features' ? 'md:col-span-2 xl:max-w-[calc(50%-0.75rem)]' : ''}
              >
                <CaseStudyCard sectionKey={sectionKey} content={project.detailedDescription[sectionKey]} />
              </div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="xl:sticky xl:top-24"
          >
            <div className="neo-card rounded-2xl p-6 md:p-7 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-theme-muted">Media Panel</p>
                  <h2 className="text-2xl font-black tracking-tight">Screenshots & Demos</h2>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-xl border-[3px] border-black dark:border-white bg-pink text-ink shadow-[4px_4px_0_var(--shadow-color)]">
                  <Play size={18} />
                </div>
              </div>

              {project.images?.length ? (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className="group neo-card-muted p-2 text-left transition-transform hover:-translate-y-1"
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-xl border-[3px] border-black dark:border-white bg-theme-main">
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-theme-muted">
                        Preview {index + 1}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="neo-card-muted p-8 text-center text-sm text-theme-secondary">
                  Screenshots coming soon.
                </div>
              )}

              {project.video ? (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-card-muted block p-4 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-theme-muted">Demo Video</p>
                      <p className="mt-2 text-base font-semibold text-theme-primary">Open the project walkthrough</p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-xl border-[3px] border-black dark:border-white bg-primary text-ink">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </a>
              ) : null}
            </div>
          </motion.aside>
        </div>
      </section>

      <ImageModal image={selectedImage} title={project.title} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
