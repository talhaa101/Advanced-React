import { Outlet, NavLink } from "react-router-dom";

function AdminLayout() {

  const navStyle = ({ isActive }) => ({
    color: isActive ? "yellow" : "white",
    display: "block",
    marginBottom: "15px",
    textDecoration: "none",
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >

      {/* Sidebar */}

      <div
        style={{
          width: "250px",
          background: "black",
          color: "white",
          padding: "20px",
        }}
      >

        <h2>Admin Panel</h2>

        <NavLink to="/admin" style={navStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/users" style={navStyle}>
          Users
        </NavLink>

        <NavLink to="/admin/products" style={navStyle}>
          Products
        </NavLink>

      </div>

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >

        {/* Header */}

        <div
          style={{
            background: "#eee",
            padding: "15px",
            marginBottom: "20px",
          }}
        >

          <h2>Admin Header</h2>

        </div>

        {/* Outlet */}

        <Outlet />

      </div>

    </div>
  );
}

export default AdminLayout;