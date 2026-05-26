import { NavLink, Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="bg-slate-900 px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
        <Link to="/" className="text-indigo-400 text-xl font-bold no-underline">
          React Router
        </Link>
        <ul className="flex list-none gap-1">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
            { to: '/dashboard', label: 'Dashboard' },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded transition no-underline ${
                    isActive
                      ? 'text-indigo-400 font-bold underline underline-offset-4'
                      : 'text-slate-200 hover:bg-indigo-500/20'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
