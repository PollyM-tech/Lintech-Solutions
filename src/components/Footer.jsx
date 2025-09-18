function Footer() {
  return (
    <footer
      className="footer py-4"
      style={{ backgroundColor: "var(--primary-blue)", color: "white" }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <p className="mb-1">
              Providing reliable, high-speed internet to Juja and Kenyatta Road
              areas.
            </p>
            <p className="mb-0">
              The best WiFi service for students, homes, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-1">
                <a
                  href="/"
                  className="text-white text-decoration-none footer-link"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/how-it-works"
                  className="text-white text-decoration-none footer-link"
                >
                  How It Works
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/payment"
                  className="text-white text-decoration-none footer-link"
                >
                  Payment
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/contact"
                  className="text-white text-decoration-none footer-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold mb-2">Contact Us</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <i
                  className="fas fa-phone me-2"
                  style={{ color: "var(--primary-orange)" }}
                ></i>
                <a
                  href="tel:071737114"
                  className="text-white text-decoration-none footer-link"
                >
                  0717 37114
                </a>
              </li>
              <li className="mb-1">
                <i
                  className="fab fa-whatsapp me-2"
                  style={{ color: "#25D366" }}
                ></i>
                <a
                  href="https://wa.me/254717371114"
                  className="text-white text-decoration-none footer-link"
                >
                  WhatsApp
                </a>
              </li>
              <li className="mb-1">
                <i
                  className="fas fa-clock me-2"
                  style={{ color: "var(--primary-orange)" }}
                ></i>
                8:00 AM - 8:00 PM (7 days a week)
              </li>
            </ul>
          </div>

          {/* Payment Information */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold mb-2">Payment Details</h6>
            <p className="small mb-0">
              Pay via M-Pesa Paybill:
              <br />
              <strong>Business No:</strong> 4125123
              <br />
              <strong>Account No:</strong> Your Order Number
            </p>
          </div>
        </div>

        <hr className="my-3" style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} Lintech Telecom. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small">Proudly serving Juja and Kenyatta Road</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
