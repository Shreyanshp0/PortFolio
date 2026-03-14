import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, RefreshCcw, Star } from 'lucide-react'
import { cardLift, mechanicalButton, sectionReveal, staggerGrid, staggerItem } from '../lib/motion'

const username = 'Shreyanshp0'

export function GithubWidget() {
  void motion
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchRepos = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`)
      if (!res.ok) throw new Error('GitHub rate limit or invalid username')
      const data = await res.json()
      setRepos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <motion.div className="neo-card asym-card-b h-full space-y-6 p-6 text-theme-primary card-hover list-safe" {...sectionReveal()} {...cardLift}>
      <div className="absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-[12px] border-[3px] border-black dark:border-white bg-blue text-ink">
            <Github size={18} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-theme-muted">Live Data</p>
            <h4 className="text-lg font-black">GitHub latest repos</h4>
          </div>
        </div>
        <motion.button className="neo-btn bg-yellow text-ink px-3 py-2 text-sm" onClick={fetchRepos} disabled={loading} {...mechanicalButton}>
          <RefreshCcw size={14} className={loading ? 'animate-spin' : ''} />
        </motion.button>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <motion.div className="grid gap-4 md:grid-cols-2" variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className={`neo-card-muted p-5 transition-transform card-hover ${index % 2 === 0 ? 'asym-card-d' : 'asym-card-b'}`}
            variants={staggerItem(index % 2 === 0 ? -1 : 1)}
            {...cardLift}
          >
            <div className={`mb-4 inline-flex rounded-[10px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${index % 2 === 0 ? 'bg-pink' : 'bg-yellow'}`}>
              Repo Node
            </div>
            <p className="font-black">{repo.name}</p>
            <p className="mt-3 text-sm text-theme-secondary">{repo.description || 'No description yet.'}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-theme-muted">
              <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
              <span>{repo.language}</span>
              <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.a>
        ))}
        {!repos.length && !loading ? <p className="text-sm text-theme-secondary">No repos loaded yet. Check username.</p> : null}
      </motion.div>
    </motion.div>
  )
}
