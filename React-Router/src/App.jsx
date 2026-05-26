import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ContactError from './components/ContactError.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import UserDetails from './components/UserDetails.jsx'
import Dashboard from './components/Nested/Dashboard.jsx'
import NestedIndex from './components/Nested/NestedIndex.jsx'
import Profile from './components/Nested/Profile.jsx'
import Settings from './components/Nested/Settings.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} errorElement={<ContactError />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="users" element={<div className="page"><h1 className="text-4xl font-bold text-white mb-4">Users Page</h1><p className="text-slate-400">Select a user by ID from the URL.</p></div>} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<NestedIndex />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
