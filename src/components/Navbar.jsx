import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top"
        style={{ backgroundColor: "var(--light-bg)", zIndex: 1050 }}
      >
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              src="/logo.png"
              alt="Lintech Telecom"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #0b1c4d",
                transition: "transform 0.3s ease",
              }}
              className="logo-hover"
            />
          </NavLink>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {links.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#ff7a00" : "var(--primary-blue)",
                      transition: "color 0.3s",
                    })}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer so content does not go under fixed navbar */}
      <div style={{ height: "100px" }}></div>
    </>
  );
}

export default Navbar;
