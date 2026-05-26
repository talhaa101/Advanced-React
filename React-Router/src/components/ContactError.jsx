import { useRouteError, Link } from 'react-router-dom'

const ContactError = () => {
  const error = useRouteError()

  return (
    <div className="page text-center py-16">
      <h1 className="text-4xl font-bold text-red-400 mb-4">Contact Page Error</h1>
      <p className="text-slate-400 mb-6">{error?.message || 'Something went wrong loading the Contact page.'}</p>
      <Link to="/" className="text-indigo-400 font-medium no-underline hover:underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default ContactError
