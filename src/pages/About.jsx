import aboutImg from "../assets/laptop-plus-router.png";

function About() {
  return (
    <section className="section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 className="section-title">About Lintech</h2>
          <p className="section-subtitle mx-auto">
            Serving Juja & Kenyatta Road with reliable, affordable internet
            since 2019.
          </p>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="row g-4 align-items-start">
          {/* LEFT: IMAGE */}
          <div className="col-lg-6">
            <div
              className="card-soft overflow-hidden h-100 p-0"
            >
              <img
                src={aboutImg}
                alt="Lintech Telecom Network"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="col-lg-6">
            <div className="card-soft p-4 h-100">
              <h5 className="fw-bold" style={{ color: "var(--primary-blue)" }}>
                Who we are
              </h5>

              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                Lintech is a local internet service provider delivering
                reliable, high-speed WiFi to students, homes, and businesses in
                Juja and along Kenyatta Road. We focus on stability, honest
                pricing, and real support from a local team.
              </p>

              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                Since 2019, we’ve helped customers move away from slow or
                unreliable connections through clean installations, quality
                routers, and ongoing technical support. We don’t just connect
                you—we stay available to make sure your internet works when you
                need it most.
              </p>

              <h6
                className="fw-bold mt-4"
                style={{ color: "var(--primary-blue)" }}
              >
                Why customers choose Lintech
              </h6>

              <div style={{ marginTop: "0.75rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <div className="fw-bold">Built for Juja Life</div>
                  <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    We understand student schedules, busy homes, and business
                    peak hours—so we prioritize stability and quick response.
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <div className="fw-bold">Clean Installation</div>
                  <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    Neat cabling, smart router placement, and professional
                    finishing for better performance and appearance.
                  </div>
                </div>

                <div style={{ marginBottom: "1.2rem" }}>
                  <div className="fw-bold">Straight Pricing</div>
                  <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    Clear packages with honest expectations. No confusing
                    technical jargon.
                  </div>
                </div>
              </div>

              <h6
                className="fw-bold mt-3"
                style={{ color: "var(--primary-blue)" }}
              >
                Our promise to you
              </h6>

              <div style={{ marginTop: "0.75rem" }}>
                {[
                  "Fast and friendly local support",
                  "Stable speeds optimized for your space",
                  "Router setup and WiFi coverage guidance",
                  "Continuous improvement and expansion",
                ].map((text) => (
                  <div
                    key={text}
                    style={{
                      padding: "0.55rem 0",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA BELOW BOTH COLUMNS */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
          <a href="/contact" className="btn btn-orange px-4">
            Talk to Us
          </a>
          <a href="tel:+254717371134" className="btn btn-outline-blue px-4">
            Call Now
          </a>
          <a
            href="https://wa.me/254717371114"
            className="btn btn-outline-blue px-4"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
