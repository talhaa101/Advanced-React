import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="page">
      <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-slate-400 mb-4">
        This is an example of <strong className="text-white">nested routes</strong> in React Router.
      </p>

      <nav className="flex gap-2 pb-4 mb-6 border-b border-slate-800">
        {[
          { to: '/dashboard', label: 'Dashboard Home', end: true },
          { to: '/dashboard/profile', label: 'Profile' },
          { to: '/dashboard/settings', label: 'Settings' },
        ].map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `px-4 py-2 rounded transition no-underline ${
                isActive
                  ? 'bg-indigo-500/20 text-indigo-400 font-bold'
                  : 'text-slate-400 hover:bg-indigo-500/15'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
