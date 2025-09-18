import React from "react";

function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ color: "#0B1C4D" }}>
          Contact Us
        </h2>
        <p className="text-muted mb-5">
          Have questions or need an installation? Get in touch with us directly
          — we’re here to help you get connected!
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          {/* Call Button */}
          <a href="tel:+254717371134" className="btn btn-primary px-4 py-2">
            📞 Call Us
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254717371134"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2"
          >
            💬 WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@lintechtelecom.co.ke"
            className="btn btn-outline-dark px-4 py-2"
          >
            📧 Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
