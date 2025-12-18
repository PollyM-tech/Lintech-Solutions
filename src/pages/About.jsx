function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">About Lintech</h2>
          <p className="section-subtitle mx-auto">
            Serving Juja & Kenyatta Road with reliable, affordable internet
            since 2019.
          </p>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="card-soft overflow-hidden">
              <img
                src="/assets/about-us.jpg"
                alt="Lintech Telecom Team"
                className="img-fluid"
                style={{ width: "100%", height: "360px", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card-soft p-4">
              <h5 className="fw-bold" style={{ color: "var(--primary-blue)" }}>
                Our mission
              </h5>
              <p style={{ color: "var(--muted)" }}>
                Lintech exists to provide stable, high-speed internet to homes,
                students, and businesses. We value clean installations, honest
                pricing, and support that responds quickly.
              </p>

              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <div className="fw-bold">📍 Coverage</div>
                    <div style={{ color: "var(--muted)" }}>
                      Juja & Kenyatta Road
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <div className="fw-bold">🕘 Support</div>
                    <div style={{ color: "var(--muted)" }}>8AM – 8PM daily</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <a href="/contact" className="btn btn-orange">
                  Talk to Us
                </a>
                <a href="tel:+254717371134" className="btn btn-outline-blue">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
