import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
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

	// Scroll to top on route change to avoid odd offsets on detail pages.
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [location.pathname])

	const pageTransition = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 },
		transition: { duration: 0.25, ease: 'easeOut' },
	}

	const routerContent = useMemo(
		() => (
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
		),
		[location, pageTransition]
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
