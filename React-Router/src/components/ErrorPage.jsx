import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  if (error?.status === 404) {
    return (
      <div className="page text-center py-16">
        <h1 className="text-5xl font-bold text-red-400 mb-4">404 — Page Not Found</h1>
        <p className="text-slate-400 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-indigo-400 font-medium no-underline hover:underline">
          Go back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="page text-center py-16">
      <h1 className="text-4xl font-bold text-red-400 mb-4">Oops! Something went wrong</h1>
      <p className="text-slate-400 mb-6">{error?.statusText || error?.message || 'An unexpected error occurred.'}</p>
      <Link to="/" className="text-indigo-400 font-medium no-underline hover:underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default ErrorPage
