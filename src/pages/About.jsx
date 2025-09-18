function About() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">About Us</h2>
        <p className="lead text-center mb-5">
          Connecting Juja and Kenyatta Road with reliable, fast, and affordable
          internet since 2019.
        </p>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="/assets/about-us.jpg"
              alt="Lintech Telecom Team"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <p>
              Lintech Telecom was founded in <strong>2019</strong> in Juja with
              a clear mission: to provide blazing-fast, affordable, and reliable
              internet to students, families, and businesses. By{" "}
              <strong>2020</strong>, we proudly expanded our coverage to{" "}
              <strong>Kenyatta Road</strong>, continuing our journey of growth
              and service excellence.
            </p>

            <p>
              Since the beginning, we have consistently delivered{" "}
              <strong>top-notch services</strong> and built a reputation for{" "}
              <strong>outstanding customer care</strong>. We believe in going
              beyond connectivity — our priority is ensuring your experience
              with us is smooth, personal, and trustworthy.
            </p>

            <p>
              We are committed to addressing our clients’ needs within{" "}
              <strong>24 hours</strong>. In the rare case your concern is not
              resolved within that time, please don’t hesitate to call us
              directly at{" "}
              <a
                href="tel:+254717371134"
                className="fw-bold text-decoration-none"
                style={{ color: "var(--secondary)" }}
              >
                0717 371 134
              </a>
              . Your satisfaction is our guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
