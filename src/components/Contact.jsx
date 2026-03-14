import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="contact" className="section-padding scroll-offset bg-theme-main text-theme-primary">
      <div className="container-brutal space-y-10">
        <SectionHeader
          kicker="Contact"
          title="Let's build together"
          description="Form posts to your Express + Mongo backend. Hook this into the provided server route."
          accent="primary"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="neo-card asym-card-a p-6 space-y-4 card-hover list-safe"
          >
            <div className="inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink bg-primary">
              Message Node
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="neo-input w-full px-3 py-3"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="neo-input w-full px-3 py-3"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="neo-input w-full px-3 py-3"
                placeholder="Tell me about the role or collaboration idea"
              />
            </div>
            <button type="submit" className="neo-btn bg-primary px-4 py-3 font-semibold" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' ? <p className="text-green-700 text-sm">Sent! I will reply soon.</p> : null}
            {status === 'error' ? <p className="text-red-700 text-sm">{error}</p> : null}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="neo-card asym-card-b p-6 space-y-5 card-hover list-safe"
          >
            <div className="inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink bg-yellow">
              Direct Links
            </div>
            <div className="flex flex-col gap-3">
              <a className="neo-btn bg-yellow text-ink px-4 py-3 flex items-center gap-2" href="mailto:todo@email.com">
                <Mail size={18} /> TODO: Add email
              </a>
              <a
                className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                href="https://github.com/Shreyanshp0"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2"
                href="https://linkedin.com/in/Shreyanshp0"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="neo-card-muted asym-card-d p-4 bg-pink text-ink">
              <p className="text-sm font-semibold">
                Backend lives at <span className="font-black">/api/contact</span>. Configure your{' '}
                <span className="font-black">MONGO_URI</span> in <span className="font-black">server/.env</span>, then run{' '}
                <span className="font-black">npm run dev:full</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
