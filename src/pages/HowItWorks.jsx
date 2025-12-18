function HowItWorks() {
  const steps = [
    {
      title: "Check Coverage",
      text: "Confirm we serve your area in Juja or Kenyatta Road.",
    },
    {
      title: "Talk to Us",
      text: "Call/WhatsApp for advice and the best plan for your needs.",
    },
    {
      title: "Installation",
      text: "We install and test the connection for stable performance.",
    },
    {
      title: "Pay & Activate",
      text: "Pay via M-Pesa. Activation is confirmed quickly.",
    },
  ];

  const paySteps = [
    "Go to Lipa Na M-Pesa",
    "Select Paybill",
    "Enter Business No:",
    "Account No: Your Order Number",
    "Enter Amount",
    "Enter your M-Pesa PIN and send",
    "You will receive an M-Pesa confirmation SMS",
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle mx-auto">
              From inquiry to installation and activation — simple and fast.
            </p>
          </div>

          <div className="row g-4">
            {steps.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.title}>
                <div className="card-soft p-4 h-100">
                  <div className="icon-circle mb-3">{s.icon}</div>
                  <h5
                    className="fw-bold"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    {s.title}
                  </h5>
                  <p className="mb-0" style={{ color: "var(--muted)" }}>
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">How to pay (M-Pesa)</h2>
            <p className="section-subtitle mx-auto">
              Renew your subscription quickly. Activation is usually within
              minutes after confirmation.
            </p>
          </div>

          <div className="row g-4">
            {paySteps.map((t, i) => (
              <div className="col-md-4" key={t}>
                <div className="card-soft p-4 h-100">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-circle">{i + 1}</div>
                    <div
                      className="fw-bold"
                      style={{ color: "var(--primary-blue)" }}
                    >
                      {t}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="alert alert-warning mt-4 text-center">
            <b>Important:</b> Ensure your Account Number (Order Number) is
            correct. If delayed beyond 30 minutes, call <b>+254 717 371 134</b>.
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
