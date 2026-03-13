import { useEffect, useState } from 'react'
import { Github, RefreshCcw, Star } from 'lucide-react'

const username = 'your-handle' // TODO: Replace with your GitHub username

export function GithubWidget() {
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
    <div className="neo-card asym-card-b p-6 space-y-5 card-hover h-full text-theme-primary list-safe">
      <div className="absolute right-0 top-0 h-5 w-24 border-b-[3px] border-l-[3px] border-black dark:border-white bg-primary" />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-[12px] border-[3px] border-black dark:border-white bg-blue text-ink">
            <Github size={18} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-theme-muted">Live Data</p>
            <h4 className="text-lg font-black">GitHub latest repos</h4>
          </div>
        </div>
        <button className="neo-btn bg-yellow text-ink px-3 py-2 text-sm" onClick={fetchRepos} disabled={loading}>
          <RefreshCcw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <div className="grid gap-3 md:grid-cols-2">
        {repos.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className={`neo-card-muted p-4 transition-transform card-hover ${index % 2 === 0 ? 'asym-card-d' : 'asym-card-b'}`}
          >
            <div className={`mb-3 inline-flex rounded-[10px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink ${index % 2 === 0 ? 'bg-pink' : 'bg-yellow'}`}>
              Repo Node
            </div>
            <p className="font-black">{repo.name}</p>
            <p className="mt-2 text-sm text-theme-secondary">{repo.description || 'No description yet.'}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-theme-muted">
              <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
              <span>{repo.language}</span>
              <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
        {!repos.length && !loading ? <p className="text-sm text-theme-secondary">No repos loaded yet. Check username.</p> : null}
      </div>
    </div>
  )
}
