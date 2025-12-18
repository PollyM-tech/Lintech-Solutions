function Footer() {
  return (
    <footer style={{ background: "var(--primary-blue)", color: "white" }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-5">
            <h5 className="fw-bold mb-2">Lintech Telecom</h5>
            <p className="mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
              Reliable, high-speed internet for students, homes, and businesses
              in Juja and Kenyatta Road.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge text-bg-light">Fast Installation</span>
              <span className="badge text-bg-light">Local Support</span>
              <span className="badge text-bg-light">Affordable Plans</span>
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              <a className="link-muted" href="/">
                Home
              </a>
              <a className="link-muted" href="/about">
                About
              </a>
              <a className="link-muted" href="/how-it-works">
                How It Works
              </a>
              <a className="link-muted" href="/contact">
                Contact
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">Contact</h6>
            <div
              className="d-flex flex-column gap-2"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <div>
                {" "}
                <a className="link-muted" href="tel:+254717371134">
                  +254 717 371 134
                </a>
              </div>
              <div>
                {" "}
                <a className="link-muted" href="https://wa.me/254717371134">
                  WhatsApp
                </a>
              </div>
              <div>8:00 AM – 8:00 PM (7 days)</div>
              <div>Juja & Kenyatta Road</div>
            </div>
          </div>
        </div>

        <div
          className="divider my-4"
          style={{ background: "rgba(255,255,255,0.18)" }}
        />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="small" style={{ color: "rgba(255,255,255,0.85)" }}>
            © {new Date().getFullYear()} Lintech Telecom. All rights reserved.
          </div>
          <div className="small" style={{ color: "rgba(255,255,255,0.85)" }}>
            Proudly serving Juja & Kenyatta Road
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
