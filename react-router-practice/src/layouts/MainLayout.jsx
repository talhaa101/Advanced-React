import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {

  const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    marginRight: "15px",
  });

  return (
    <div>

      <nav>

        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/about" style={navStyle}>
          About
        </NavLink>

        <NavLink to="/contact" style={navStyle}>
          Contact
        </NavLink>

        <NavLink to="/dashboard" style={navStyle}>
          Dashboard
        </NavLink>

      </nav>

      <hr />

      <Outlet />

      <hr />

      <h3>Footer Section</h3>

    </div>
  );
}

export default MainLayout;