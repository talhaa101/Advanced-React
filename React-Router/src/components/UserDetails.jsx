import { useParams, Link } from 'react-router-dom'

const usersLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  const users = await response.json()
  return { users }
}

const UserDetails = () => {
  const { id } = useParams()
  const { users } = usersLoader()
  const [ user ] = users.filter(u => u.id === Number(id))

  if (!user) {
    return (
      <div className="page">
        <h1 className="text-4xl font-bold text-red-400 mb-4">User Not Found</h1>
        <p className="text-slate-400 mb-4">No user found with ID {id}.</p>
        <Link to="/users" className="text-indigo-400 font-medium no-underline hover:underline">
          &larr; Back to Users
        </Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/users" className="inline-block text-indigo-400 font-medium no-underline mb-4 hover:underline">
        &larr; Back to Users
      </Link>
      <h1 className="text-4xl font-bold text-white mb-4">{user.name}</h1>
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-4">
        <p className="mb-2 text-slate-300"><strong className="text-white">Username:</strong> @{user.username}</p>
        <p className="mb-2 text-slate-300"><strong className="text-white">Email:</strong> {user.email}</p>
        <p className="mb-2 text-slate-300"><strong className="text-white">Phone:</strong> {user.phone}</p>
        <p className="mb-2 text-slate-300"><strong className="text-white">Website:</strong> {user.website}</p>
        <p className="mb-2 text-slate-300"><strong className="text-white">Company:</strong> {user.company?.name}</p>
        <p className="mb-2 text-slate-300"><strong className="text-white">City:</strong> {user.address?.city}</p>
      </div>
      <p className="bg-slate-800 border-l-4 border-purple-400 pl-4 py-3 rounded text-slate-300 mt-6">
        Route parameter: <code className="bg-slate-700 px-1.5 py-0.5 rounded text-slate-200">:id = {id}</code> — This is dynamic routing!
      </p>
    </div>
  )
}

export default UserDetails
