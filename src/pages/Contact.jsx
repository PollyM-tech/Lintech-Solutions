function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Contact Lintech</h2>
          <p className="section-subtitle mx-auto">
            Send your location & nearest landmark for fastest help. We’re ready
            to connect you.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="card-soft p-4 p-md-5">
              <div className="row g-3">
                <div className="col-md-6">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--soft-bg)",
                    }}
                  >
                    <div className="fw-bold">Call</div>
                    <div style={{ color: "var(--muted)" }}>
                      <a href="tel:+254717371134">+254 717 371 134</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--soft-bg)",
                    }}
                  >
                    <div className="fw-bold">WhatsApp</div>
                    <div style={{ color: "var(--muted)" }}>
                      <a
                        href="https://wa.me/254717371134"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <div className="fw-bold">What to send us</div>
                    <div style={{ color: "var(--muted)" }}>
                      Your name, location (Juja/Kenyatta Road), nearest
                      landmark, and preferred plan.
                    </div>
                  </div>
                </div>

                <div className="col-12 d-flex flex-wrap gap-2 mt-2">
                  <a href="tel:+254717371134" className="btn btn-orange btn-lg">
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/254717371134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="/how-it-works"
                    className="btn btn-outline-blue btn-lg"
                  >
                    Payment Steps
                  </a>
                </div>

                <div className="col-12 mt-2">
                  <div className="small" style={{ color: "var(--muted)" }}>
                    Hours: 8:00 AM – 8:00 PM (7 days)
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <span className="badge-soft">Juja • Kenyatta Road</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
