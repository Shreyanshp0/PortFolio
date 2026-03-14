import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowLeft,
  ExternalLink,
  Github,
  Lightbulb,
  MoveRight,
  Play,
  Server,
  Star,
  Wrench,
  X,
} from 'lucide-react'
import { getProjectById } from '../data/projects'
import { cardLift, mechanicalButton, sectionReveal, staggerGrid, staggerItem, sharpEase } from '../lib/motion'
import { TagBadge } from '../components/ui/TagBadge'

const sectionMeta = {
  problem: {
    title: 'Problem',
    icon: AlertCircle,
    accent: 'bg-yellow',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '28px 8px 26px 8px',
    headerPosition: 'left-5 -top-6',
    wrapper: 'md:pr-8 xl:pr-12 xl:max-w-[92%] z-30',
  },
  solution: {
    title: 'Solution',
    icon: Lightbulb,
    accent: 'bg-primary',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '10px 30px 10px 30px',
    headerPosition: 'right-5 -top-6',
    wrapper: 'md:pt-10 xl:-ml-8 xl:translate-y-12 z-20',
  },
  architecture: {
    title: 'Architecture',
    icon: Server,
    accent: 'bg-blue',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '8px 8px 34px 8px',
    headerPosition: 'left-8 -top-6',
    wrapper: 'md:-mt-4 xl:-mt-10 xl:mr-8 z-10',
  },
  challenges: {
    title: 'Challenges',
    icon: Wrench,
    accent: 'bg-pink',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '8px 30px 8px 18px',
    headerPosition: 'right-8 -top-6',
    wrapper: 'md:mt-14 xl:-ml-4 xl:translate-y-6 z-20',
  },
  impact: {
    title: 'Impact / Results',
    icon: Star,
    accent: 'bg-yellow',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '20px 8px 28px 8px',
    headerPosition: 'right-10 -top-6',
    wrapper: 'md:col-span-2',
  },
  features: {
    title: 'Key Features',
    icon: Star,
    accent: 'bg-lime-300',
    shell: 'bg-theme-card',
    bodyAccent: 'bg-theme-card',
    radius: '36px 8px 8px 24px',
    headerPosition: 'left-10 -top-6',
    wrapper: 'md:col-span-2 xl:w-[62%] xl:ml-[18%] xl:-mt-8 z-30',
  },
}

const architectureModuleAccents = {
  Frontend: 'bg-sky-200',
  Backend: 'bg-lime-300',
  'Realtime Communication': 'bg-pink',
  'External Services': 'bg-yellow',
}

function BulletList({ items, dotClass = 'bg-primary' }) {
  return (
    <ul className="space-y-3 text-sm md:text-[15px] leading-6 text-theme-secondary">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-black dark:border-white ${dotClass}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ArchitectureList({ groups }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group, index) => (
        <div
          key={group.label}
          className={`neo-card-muted p-4 ${architectureModuleAccents[group.label] || 'bg-theme-card'} ${
            index % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'
          }`}
          style={{ borderRadius: index % 2 === 0 ? '22px 8px 22px 8px' : '8px 22px 8px 22px', boxShadow: '5px 5px 0 var(--shadow-color)' }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ink">{group.label}</p>
          <BulletList items={group.items} dotClass="bg-theme-card" />
        </div>
      ))}
    </div>
  )
}

function FloatingHeader({ title, Icon, accent, positionClass }) {
  void Icon
  return (
    <div className={`absolute ${positionClass} z-30`}>
      <div
        className={`inline-flex items-center gap-2 border-[3px] border-black dark:border-white px-4 py-3 ${accent} text-ink`}
        style={{ borderRadius: '18px 6px 18px 6px', boxShadow: '8px 8px 0 var(--shadow-color)' }}
      >
        <div className="grid h-9 w-9 place-items-center border-[3px] border-black rounded-[10px] bg-theme-card text-theme-primary">
          <Icon size={18} />
        </div>
        <div className="leading-none">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-70">Node</p>
          <p className="text-base font-black uppercase tracking-[0.08em]">{title}</p>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({ sectionKey, content }) {
  const { title, icon: Icon, accent, shell, bodyAccent, radius, headerPosition } = sectionMeta[sectionKey]
  const isArchitectureGroup = sectionKey === 'architecture' && Array.isArray(content) && content[0]?.items

  return (
    <motion.article
      {...sectionReveal()}
      className={`relative ${shell} px-5 pb-5 pt-9 md:px-6 md:pb-6 md:pt-10`}
      style={{ border: '3px solid var(--border-color)', borderRadius: radius, boxShadow: '8px 8px 0 var(--shadow-color)' }}
      {...cardLift}
    >
      <FloatingHeader title={title} Icon={Icon} accent={accent} positionClass={headerPosition} />

      <div className="absolute left-5 right-5 top-5 h-4 border-t-[3px] border-dashed border-black/25 dark:border-white/20" />

      <div
        className={`relative mt-3 border-[3px] border-black dark:border-white p-4 ${bodyAccent}`}
        style={{ borderRadius: sectionKey === 'solution' ? '8px 24px 8px 24px' : '18px 8px 18px 8px', boxShadow: '4px 4px 0 var(--shadow-color)' }}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-theme-muted">System Block</p>
          <div className="flex items-center gap-2 text-theme-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-theme-primary" />
            <MoveRight size={15} />
          </div>
        </div>

        {isArchitectureGroup ? <ArchitectureList groups={content} /> : <BulletList items={content} />}
      </div>
    </motion.article>
  )
}

function DiagramConnector({ className, children }) {
  return (
    <div className={`pointer-events-none absolute hidden xl:block ${className}`}>
      {children}
    </div>
  )
}

function MediaPanel({ project, onSelectImage }) {
  return (
    <motion.aside
      {...sectionReveal(0.08)}
      className="relative mt-5"
    >
      <div
        className="relative border-[4px] border-black dark:border-white bg-theme-card p-4 md:p-5"
        style={{ borderRadius: '26px 10px 26px 10px', boxShadow: '10px 10px 0 var(--shadow-color)', transform: 'rotate(-1.4deg)' }}
      >
        <div className="absolute -left-4 top-12 h-8 w-8 rounded-full border-[3px] border-black dark:border-white bg-pink" />
        <div className="absolute -right-4 top-24 h-4 w-16 border-y-[3px] border-black dark:border-white bg-yellow" />

        <div className="relative space-y-5" style={{ transform: 'rotate(1.4deg)' }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-theme-muted">Media Panel</p>
              <h2 className="text-2xl font-black tracking-tight">Pinned Screens & Demos</h2>
            </div>
            <div
              className="grid h-12 w-12 place-items-center border-[3px] border-black dark:border-white bg-pink text-ink"
              style={{ borderRadius: '16px 6px 16px 6px', boxShadow: '6px 6px 0 var(--shadow-color)' }}
            >
              <Play size={18} />
            </div>
          </div>

          {project.images?.length ? (
            <div className="grid grid-cols-2 gap-3">
              {project.images.map((img, index) => (
                <motion.button
                  key={img}
                  type="button"
                  onClick={() => onSelectImage(img)}
                  className={`group border-[3px] border-black dark:border-white bg-theme-card p-2 text-left ${
                    index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
                  } transition-transform hover:-translate-y-1`}
                  style={{ borderRadius: index % 2 === 0 ? '16px 6px 16px 6px' : '6px 16px 6px 16px', boxShadow: '6px 6px 0 var(--shadow-color)' }}
                  {...cardLift}
                >
                  <div className="aspect-[4/3] overflow-hidden border-[3px] border-black dark:border-white bg-theme-main">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-theme-muted">Pinned tile {index + 1}</p>
                </motion.button>
              ))}
            </div>
          ) : (
            <div
              className="border-[3px] border-dashed border-black dark:border-white p-8 text-center text-sm text-theme-secondary"
              style={{ borderRadius: '18px 8px 18px 8px' }}
            >
              Screenshots coming soon.
            </div>
          )}

          {project.video ? (
            <motion.a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="block border-[3px] border-black dark:border-white bg-yellow p-4"
              style={{ borderRadius: '18px 8px 18px 8px', boxShadow: '6px 6px 0 var(--shadow-color)' }}
              {...mechanicalButton}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/70">Demo Link</p>
                  <p className="mt-2 text-base font-semibold text-ink">Open the project walkthrough</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-[10px] border-[3px] border-black bg-theme-card text-theme-primary">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.aside>
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
            <button type="button" onClick={onClose} className="absolute -top-14 right-0 neo-btn bg-yellow px-3 py-2 text-ink">
              <X size={18} />
            </button>
            <div className="overflow-hidden border-[4px] border-white bg-theme-card" style={{ borderRadius: '24px 8px 24px 8px', boxShadow: '10px 10px 0 #000' }}>
              <img src={image} alt={`${title} preview`} className="max-h-[82vh] w-full object-contain bg-theme-main" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function ProjectDetail() {
  void motion
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = useMemo(() => getProjectById(projectId), [projectId])
  const [selectedImage, setSelectedImage] = useState(null)

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-brutal space-y-8">
          <p className="text-2xl font-bold">Project not found.</p>
          <button className="neo-btn bg-primary px-4 py-3 focus-visible:ring-4 focus-visible:ring-offset-2" onClick={() => navigate('/')}>
            Back to projects
          </button>
        </div>
      </section>
    )
  }

  const sectionOrder = ['problem', 'solution', 'architecture', 'challenges', 'features']
  const orderedSections = project.detailedDescription?.impact ? [...sectionOrder, 'impact'] : sectionOrder

  return (
    <div className="bg-theme-main text-theme-primary">
      <section className="section-padding scroll-offset">
        <div className="container-brutal space-y-8">
          <button className="neo-btn bg-yellow px-4 py-3 flex items-center gap-2 focus-brutal" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back to projects
          </button>

          <div
            className="relative overflow-hidden border-[4px] border-black dark:border-white bg-theme-card p-6 md:p-8"
            style={{ borderRadius: '30px 10px 24px 10px', boxShadow: '10px 10px 0 var(--shadow-color)' }}
          >
            <div className="absolute -left-12 top-12 h-24 w-24 rounded-full border-[3px] border-black dark:border-white bg-blue/40" />
            <div className="absolute right-8 top-6 h-5 w-28 border-y-[3px] border-black dark:border-white bg-yellow" />
            <div className="absolute bottom-8 right-12 h-12 w-12 rounded-[14px] border-[3px] border-black dark:border-white bg-pink" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <TagBadge accent="primary">{project.category}</TagBadge>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <TagBadge key={tech} accent="blue" delay={techIndex * 0.03} animate>
                      {tech}
                    </TagBadge>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-theme-muted">Case Study Node</p>
                  <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tight">{project.title}</h1>
                  <p className="max-w-3xl text-lg text-theme-secondary">{project.description}</p>
                </div>

                <div
                  className="border-[3px] border-black dark:border-white bg-yellow p-6"
                  style={{ borderRadius: '8px 24px 8px 24px', boxShadow: '7px 7px 0 var(--shadow-color)' }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/70">Project Snapshot</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-ink">{project.highlight}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubLink ? (
                  <motion.a
                    className="neo-btn bg-primary px-4 py-3 flex items-center gap-2"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    {...mechanicalButton}
                  >
                    <motion.span whileHover={{ rotate: -10 }} transition={{ duration: 0.15, ease: sharpEase }}>
                      <Github size={18} />
                    </motion.span>
                    GitHub
                  </motion.a>
                ) : null}
                {project.liveDemo ? (
                  <motion.a
                    className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    {...mechanicalButton}
                  >
                    Live demo
                    <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: sharpEase }}>
                      <ExternalLink size={18} />
                    </motion.span>
                  </motion.a>
                ) : null}
                {project.video ? (
                  <motion.a
                    className="neo-btn bg-pink px-4 py-3 flex items-center gap-2"
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Watch ${project.title} demo`}
                    {...mechanicalButton}
                  >
                    <Play size={18} /> Watch demo
                  </motion.a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-brutal">
          <div className="relative space-y-8">
            <DiagramConnector className="left-[25%] top-10 z-0 h-48 w-40">
              <div className="absolute left-3 top-2 h-4 w-4 rounded-full border-[3px] border-black dark:border-white bg-primary" />
              <div className="absolute left-5 top-6 h-[3px] w-28 bg-black dark:bg-white" />
              <div className="absolute right-0 top-6 h-28 w-[3px] bg-black dark:bg-white" />
              <div className="absolute right-[-6px] top-[132px] grid h-5 w-5 rotate-45 place-items-center border-t-[3px] border-r-[3px] border-black dark:border-white" />
            </DiagramConnector>

            <DiagramConnector className="left-[20%] top-[43%] z-0 h-56 w-[48%]">
              <div className="absolute left-4 top-0 h-4 w-4 rounded-full border-[3px] border-black dark:border-white bg-blue" />
              <div className="absolute left-6 top-2 h-28 w-[3px] bg-black dark:bg-white" />
              <div className="absolute left-6 top-[112px] h-[3px] w-[72%] bg-black dark:bg-white" />
              <div className="absolute right-[18%] top-[106px] grid h-5 w-5 rotate-45 place-items-center border-t-[3px] border-r-[3px] border-black dark:border-white" />
            </DiagramConnector>

            <motion.div className="relative z-10 grid gap-6 md:grid-cols-2" variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              {orderedSections.map((sectionKey) => (
                <motion.div
                  key={sectionKey}
                  className={sectionKey === 'features' || sectionKey === 'impact' ? 'md:col-span-2' : ''}
                  variants={staggerItem(0)}
                >
                  <CaseStudyCard sectionKey={sectionKey} content={project.detailedDescription[sectionKey]} />
                </motion.div>
              ))}
            </motion.div>

            <MediaPanel project={project} onSelectImage={setSelectedImage} />
          </div>
        </div>
      </section>

      <ImageModal image={selectedImage} title={project.title} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
