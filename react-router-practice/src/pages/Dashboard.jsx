import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {

  const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    display: "block",
    marginBottom: "10px",
  });

  return (
    <div>

      <h1>Dashboard Page</h1>

      <nav>

        <NavLink to="profile" style={navStyle}>
          Profile
        </NavLink>

        <NavLink to="settings" style={navStyle}>
          Settings
        </NavLink>

        <NavLink to="orders" style={navStyle}>
          Orders
        </NavLink>

      </nav>

      <hr />

      <Outlet />

    </div>
  );
}

export default Dashboard;