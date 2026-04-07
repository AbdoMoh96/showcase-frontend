import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const logoImg =
  'https://www.figma.com/api/mcp/asset/0e457d51-3248-4b8f-b8b8-c133cbbfb689'
const iconGithub = 'https://www.figma.com/api/mcp/asset/47878ef0-000a-4603-8b86-d2f90ded4a84'
const iconLinkedIn = 'https://www.figma.com/api/mcp/asset/5f1bf715-53b2-42af-ae5e-c7fba7557f21'

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="flex items-center gap-1 text-base text-[var(--text)]"
    activeProps={{ className: 'flex items-center gap-1 text-base text-white' }}
  >
    <span className="text-[var(--primary)]">#</span>
    <span>{label}</span>
  </Link>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[var(--bg)]">
      <div className="page-wrap flex items-end justify-between pb-2 pt-6 md:pt-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src={logoImg} alt="" className="h-4 w-4" />
          <span className="text-base font-semibold">Abdelrahman</span>
        </Link>

        <nav className="hidden items-center gap-8 text-base md:flex">
          <NavLink to="/" label="home" />
          <NavLink to="/projects" label="works" />
          <NavLink to="/about" label="about-me" />
          <NavLink to="/contact" label="contacts" />
          <div className="flex items-center gap-1 text-[var(--text)]">
            <span className="font-semibold">EN</span>
            <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
              <path d="M1 1l4 4 4-4" stroke="#ABB2BF" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-[2px] w-6 bg-[var(--text)] before:absolute before:-top-2 before:left-0 before:h-[2px] before:w-6 before:bg-[var(--text)] after:absolute after:top-2 after:left-0 after:h-[2px] after:w-4 after:bg-[var(--text)]" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="border-t border-[var(--line)] px-4 py-6">
            <div className="flex flex-col gap-6 text-lg text-[var(--text)]">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="text-[var(--primary)]">#</span>
                home
              </Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="text-[var(--primary)]">#</span>
                works
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="text-[var(--primary)]">#</span>
                about-me
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="text-[var(--primary)]">#</span>
                contacts
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com/AbdoMoh96" aria-label="GitHub">
                <img src={iconGithub} alt="GitHub" className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/abdo-moh96/" aria-label="LinkedIn">
                <img src={iconLinkedIn} alt="LinkedIn" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
