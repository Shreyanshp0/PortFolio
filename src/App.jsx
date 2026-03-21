import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
	void motion
	const location = useLocation()
	const [theme, setTheme] = useState(() => {
		if (typeof window === 'undefined') return 'light'
		const stored = window.localStorage.getItem('portfolio-theme')
		if (stored === 'light' || stored === 'dark') return stored
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	})
	const [scrollProgress, setScrollProgress] = useState(0)

	// Theme toggling on the root keeps dark mode styles predictable across pages and persists preference.
	useEffect(() => {
		const root = document.documentElement
		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
		window.localStorage.setItem('portfolio-theme', theme)
	}, [theme])

	// Track scroll progress for a top indicator bar.
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
			setScrollProgress(percent)
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleToggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	// Support deep-link navigation to home sections from other routes via /#section.
	useEffect(() => {
		const hash = location.hash?.replace('#', '')

		if (!hash) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}

		let attempts = 0
		let timer = null
		const maxAttempts = 20

		const scrollToHashTarget = () => {
			const target = document.getElementById(hash)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' })
				return
			}

			if (attempts < maxAttempts) {
				attempts += 1
				timer = window.setTimeout(scrollToHashTarget, 50)
			}
		}

		scrollToHashTarget()

		return () => {
			if (timer) {
				window.clearTimeout(timer)
			}
		}
	}, [location.pathname, location.hash])

	const pageTransition = {
		initial: { opacity: 0, scale: 0.97 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.985 },
		transition: { duration: 0.22, ease: [0.2, 0.9, 0.2, 1] },
	}

	const routerContent = (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<motion.div {...pageTransition}>
							<Home />
						</motion.div>
					}
				/>
				<Route
					path="/projects/:projectId"
					element={
						<motion.div {...pageTransition}>
							<ProjectDetail />
						</motion.div>
					}
				/>
			</Routes>
		</AnimatePresence>
	)

	return (
		<>
			<div
				className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-[width] duration-200"
				style={{ width: `${scrollProgress}%` }}
			/>
			<Navbar onToggleTheme={handleToggleTheme} theme={theme} />
			<main className="bg-theme-main text-theme-primary">{routerContent}</main>
			<Footer />
		</>
	)
}

export default App
