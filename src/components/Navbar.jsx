import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const internetPhone = "0717371134";
  const whatsappNumber = "254717371134";

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top lintech-navbar">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Lintech Telecom"
              className="lintech-logo"
            />

            <div className="d-none d-sm-block">
              <div className="brand-title">Lintech</div>
              <div className="brand-subtitle">Internet • Networking • Tech</div>
            </div>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li
                className="nav-item position-relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link px-lg-3 services-nav-button"
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services ▾
                </button>

                {servicesOpen && (
                  <div className="services-dropdown">
                    <NavLink
                      to="/internet"
                      onClick={closeMenu}
                      className="services-dropdown-link"
                    >
                      <strong>Internet</strong>
                      <span>Fiber packages for homes and businesses</span>
                    </NavLink>

                    <NavLink
                      to="/wifi-networking"
                      onClick={closeMenu}
                      className="services-dropdown-link"
                    >
                      <strong>WiFi & Networking</strong>
                      <span>CCTV, cabling, routers, and WiFi setup</span>
                    </NavLink>

                    <NavLink
                      to="/tech-services"
                      onClick={closeMenu}
                      className="services-dropdown-link"
                    >
                      <strong>Tech Services</strong>
                      <span>Websites, software, cybersecurity, and AI</span>
                    </NavLink>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <NavLink
                  to="/coverage"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? "active" : ""}`
                  }
                >
                  Coverage
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? "active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0 flex-wrap">
              <a
                href={`tel:${internetPhone}`}
                className="btn btn-outline-blue btn-sm"
                onClick={closeMenu}
              >
                Call
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                onClick={closeMenu}
              >
                WhatsApp
              </a>

              <NavLink
                to="/contact"
                className="btn btn-orange btn-sm"
                onClick={closeMenu}
              >
                Get Quote
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .lintech-navbar {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          padding: 0.55rem 0;
        }

        .lintech-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 50%;
        }

        .brand-title {
          font-weight: 900;
          color: var(--primary-blue);
          line-height: 1;
          font-family: Poppins, sans-serif;
        }

        .brand-subtitle {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.2;
        }

        .lintech-navbar .nav-link {
          color: var(--primary-blue);
          font-weight: 800;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .lintech-navbar .nav-link:hover,
        .lintech-navbar .nav-link.active {
          color: #ff7a00;
        }

        .services-nav-button {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .services-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 330px;
          background: #ffffff;
          border-radius: 16px;
          padding: 0.75rem;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
          border: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 9999;
        }

        .services-dropdown-link {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.9rem;
          border-radius: 12px;
          text-decoration: none;
          color: #0b1c4d;
          transition: all 0.2s ease;
        }

        .services-dropdown-link:hover {
          background: rgba(255, 122, 0, 0.08);
        }

        .services-dropdown-link strong {
          color: #ff7a00;
          font-size: 0.95rem;
        }

        .services-dropdown-link span {
          color: #555;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .navbar-toggler {
          border: 1px solid rgba(11, 28, 77, 0.18);
          box-shadow: none !important;
        }

        @media (max-width: 991px) {
          .lintech-navbar {
            padding: 0.6rem 0;
          }

          .navbar-collapse {
            background: #fff;
            margin-top: 0.8rem;
            padding: 1rem;
            border-radius: 16px;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          }

          .services-dropdown {
            position: static;
            width: 100%;
            box-shadow: none;
            margin-top: 0.4rem;
            border-radius: 12px;
            background: #f8f9fa;
          }

          .services-nav-button {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
