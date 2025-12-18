import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top lintech-navbar">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <img src="/logo.png" alt="Lintech Telecom" className="lintech-logo" />
          <div className="d-none d-sm-block">
            <div
              style={{
                fontWeight: 900,
                color: "var(--primary-blue)",
                lineHeight: 1,
              }}
            >
              Lintech
            </div>
            <div
              style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.2 }}
            >
              Fast WiFi • Juja & Kenyatta Road
            </div>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lintechNav"
          aria-controls="lintechNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="lintechNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? "active" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
            <a href="tel:+254717371134" className="btn btn-outline-blue btn-sm">
              Call
            </a>
            <a
              href="https://wa.me/254717371134"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              WhatsApp
            </a>
            <a href="/contact" className="btn btn-orange btn-sm">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
