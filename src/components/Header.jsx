import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top navbar-compact">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img
              src="/logo.png"
              alt="Lintech Telecom"
              className="navbar-logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/coverage">
                  Coverage Area
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/how-it-works">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/payment">
                  Payment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
              <a
                href="tel:+254717371134"
                className="btn btn-sm btn-outline-orange"
              >
                <i className="fas fa-phone me-1"></i> +254 717 371134
              </a>
              <a
                href="https://wa.me/254717371134"
                className="btn btn-sm btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-1"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
