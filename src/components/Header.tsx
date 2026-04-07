import { Link } from '@tanstack/react-router'

const logoImg =
  'https://www.figma.com/api/mcp/asset/0e457d51-3248-4b8f-b8b8-c133cbbfb689'

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
  return (
    <header className="bg-[var(--bg)]">
      <div className="page-wrap flex items-end justify-between pb-2 pt-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src={logoImg} alt="" className="h-4 w-4" />
          <span className="text-base font-semibold">Elias</span>
        </Link>

        <nav className="flex items-center gap-8 text-base">
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
      </div>
    </header>
  )
}
