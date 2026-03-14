export function Footer() {
  return (
    <footer className="py-8 bg-theme-navbar text-theme-primary">
      <div className="container-brutal flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm font-semibold">Built with React, Tailwind, and lots of coffee ☕️</p>
        <div className="flex gap-4 text-sm">
          <a href="#hero" className="underline underline-offset-4">
            Back to top
          </a>
          <a href="https://github.com/Shreyanshp0" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            GitHub
          </a>
          <a href="mailto:todo@email.com" className="underline underline-offset-4">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
