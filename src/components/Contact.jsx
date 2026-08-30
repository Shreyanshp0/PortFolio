import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { Github, Linkedin, Mail } from 'lucide-react'
import { cardLift, mechanicalButton, sectionReveal, sharpEase } from '../lib/motion'

export function Contact() {
  void motion
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
      <div className="container-brutal space-y-8">
        <SectionHeader
          kicker="Contact"
          title="Let's build together"
          description="Feel free to reach out for collaborationLet’s turn your ideas into reality—reach out and let’s build something amazing together."
          accent="primary"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            {...sectionReveal()}
            className="neo-card asym-card-a p-6 md:p-8 space-y-6 card-hover list-safe"
            {...cardLift}
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
                autoComplete="name"
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
                autoComplete="email"
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
            <motion.button type="submit" className="neo-btn bg-primary px-4 py-3 font-semibold" disabled={status === 'loading'} aria-live="polite" {...mechanicalButton}>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </motion.button>
            {status === 'success' ? <p className="text-green-700 text-sm">Sent! I will reply soon.</p> : null}
            {status === 'error' ? <p className="text-red-700 text-sm">{error}</p> : null}
          </motion.form>

          <motion.div
            {...sectionReveal(0.08)}
            className="neo-card asym-card-b p-6 md:p-8 space-y-6 card-hover list-safe"
            {...cardLift}
          >
            <div className="inline-flex rounded-[12px] border-[3px] border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink bg-yellow">
              Direct Links
            </div>
            <div className="flex flex-col gap-4">
              <motion.a className="neo-btn bg-yellow text-ink px-4 py-3 flex items-center gap-2" href="mailto:your.actual@email.com" {...mechanicalButton}>
                <Mail size={18} /> Email Me
              </motion.a>
              <motion.a
                className="neo-btn bg-theme-card text-theme-primary px-4 py-3 flex items-center gap-2"
                href="https://github.com/abhinavthakurr23"
                {...mechanicalButton}
              >
                <motion.span whileHover={{ rotate: -10 }} transition={{ duration: 0.15, ease: sharpEase }}>
                  <Github size={18} />
                </motion.span>
                GitHub
              </motion.a>
              <motion.a
                className="neo-btn bg-blue text-ink px-4 py-3 flex items-center gap-2"
                href="https://www.linkedin.com/in/abhinav-thakur-724182406?trk=contact-info"
                {...mechanicalButton}
              >
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}
