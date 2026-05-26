import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";

function App() {

  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />

        <Route path="dashboard" element={<Dashboard />}>

          <Route index element={<h2>Welcome Dashboard</h2>} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

          <Route path="orders" element={<Orders />} />

        </Route>

      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
      </Route>

    </Routes>
  );
}

export default App;