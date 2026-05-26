const Profile = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-2">Profile</h2>
      <p className="text-slate-400 mb-2">
        This is the Profile page nested inside the Dashboard route.
      </p>
      <p className="text-slate-400">
        Nested routes render inside the parent route's <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">&lt;Outlet /&gt;</code>.
      </p>
    </div>
  )
}

export default Profile
