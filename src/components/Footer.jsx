function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div className="container py-5">
        <div className="row g-4">
          {/* BRAND */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-2" style={{ color: "#fff" }}>
              Lintech Telecom
            </h5>

            <p style={footerText}>
              Reliable internet, WiFi installation, CCTV, networking, and smart
              technology solutions for homes and businesses across Nairobi and
              Kiambu areas.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <span style={badgeStyle}>Internet</span>
              <span style={badgeStyle}>Networking</span>
              <span style={badgeStyle}>Tech Services</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              Quick Links
            </h6>

            <div className="d-flex flex-column gap-2">
              <a style={footerLink} href="/">
                Home
              </a>
              <a style={footerLink} href="/internet">
                Internet
              </a>
              <a style={footerLink} href="/wifi-networking">
                WiFi & Networking
              </a>
              <a style={footerLink} href="/tech-services">
                Tech Services
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              Company
            </h6>

            <div className="d-flex flex-column gap-2">
              <a style={footerLink} href="/coverage">
                Coverage
              </a>
              <a style={footerLink} href="/about">
                About
              </a>
              <a style={footerLink} href="/contact">
                Contact
              </a>
              <a style={footerLink} href="/how-it-works">
                Payment Guide
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              Contact
            </h6>

            <div className="d-flex flex-column gap-2" style={footerText}>
              <div>
                Internet:{" "}
                <a style={footerLink} href="tel:0717371134">
                  0717 371 134
                </a>
              </div>

              <div>
                Tech Services:{" "}
                <a style={footerLink} href="tel:0714660729">
                  0714 660 729
                </a>
              </div>

              <div>
                WhatsApp:{" "}
                <a
                  style={footerLink}
                  href="https://wa.me/254717371134"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us
                </a>
              </div>

              <div>Hours: 8:00 AM – 8:00 PM, 7 days</div>
              <div>Coverage: Nairobi & Kiambu areas</div>
            </div>
          </div>
        </div>

        <div style={divider} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="small" style={footerText}>
            © {currentYear} Lintech Telecom. All rights reserved.
          </div>

          <div className="small" style={footerText}>
            Internet • Networking • CCTV • Tech Services
          </div>
        </div>
      </div>
    </footer>
  );
}

/* STYLES */
const footerStyle = {
  background: "#0b1c4d",
  color: "#fff",
};

const footerText = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
};

const footerLink = {
  color: "rgba(255,255,255,0.86)",
  textDecoration: "none",
  fontWeight: 600,
};

const badgeStyle = {
  padding: "0.35rem 0.7rem",
  borderRadius: "999px",
  background: "rgba(255,122,0,0.16)",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.16)",
  fontSize: "0.82rem",
  fontWeight: 800,
};

const divider = {
  height: "1px",
  background: "rgba(255,255,255,0.18)",
  margin: "2rem 0",
};

export default Footer;
