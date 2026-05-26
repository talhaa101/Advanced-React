import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page">
      <h1 className="text-4xl font-bold text-white mb-4">Home Page</h1>
      <p className="text-slate-400 leading-relaxed mb-4">
        Welcome to the React Router tutorial. This is the home page.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
        <h2 className="text-indigo-400 text-xl font-semibold mb-3">useNavigate Hook Example</h2>
        <p className="text-slate-400 mb-4">
          Click the button below to navigate to the About page programmatically.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-md cursor-pointer text-base font-medium hover:bg-indigo-600 transition"
        >
          Go to About (useNavigate)
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
        <h2 className="text-indigo-400 text-xl font-semibold mb-3">Link vs NavLink</h2>
        <p className="text-slate-400">
          <strong className="text-white">Link</strong> is used for basic navigation.{' '}
          <strong className="text-white">NavLink</strong> is like Link
          but provides an <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">isActive</code> prop to style the active link.
          Check the navbar to see NavLink in action — the active link is highlighted.
        </p>
      </div>
    </div>
  )
}

export default Home
