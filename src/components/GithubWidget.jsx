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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="neo-card p-5 bg-theme-card space-y-4 card-hover h-full text-theme-primary">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github size={18} />
          <h4 className="text-lg font-semibold">GitHub — latest repos</h4>
        </div>
        <button className="neo-btn bg-yellow text-ink px-3 py-1 text-sm" onClick={fetchRepos} disabled={loading}>
          <RefreshCcw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <div className="grid gap-3 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="neo-card-muted p-3 hover:-translate-y-1 transition-transform"
          >
            <p className="font-semibold">{repo.name}</p>
            <p className="text-sm text-theme-secondary">{repo.description || 'No description yet.'}</p>
            <div className="flex items-center gap-3 text-xs mt-2 text-theme-muted">
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
