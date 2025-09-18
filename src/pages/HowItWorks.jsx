function HowItWorks() {
  return (
    <div>
    
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 section-title">How to Pay</h2>
          <p className="text-center lead mb-4">
            Renew your subscription seamlessly in just a few steps. Our
            automated system will activate your connection upon payment
            confirmation, usually within minutes.
          </p>

          <div className="row text-center">
            {[
              {
                icon: "fa-mobile-alt",
                step: "Go to Lipa Na M-Pesa on your phone",
              },
              { icon: "fa-list", step: "Select Paybill" },
              {
                icon: "fa-briefcase",
                step: "Enter Business Number: 4125123",
              },
              {
                icon: "fa-hashtag",
                step: "Enter Account Number: Your Lintech Order Number (e.g., LT-1054)",
              },
              { icon: "fa-money-bill-wave", step: "Enter the Amount" },
              { icon: "fa-lock", step: "Enter your M-Pesa PIN and send" },
              {
                icon: "fa-sms",
                step: "You will receive an M-Pesa confirmation SMS",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm benefit-card">
                  <div className="card-body">
                    <div className="benefit-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <p className="fw-bold">{item.step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="alert alert-warning mt-4 text-center">
            <strong>Disclaimer:</strong> Please ensure your account number
            (Order Number) is correct to avoid crediting the wrong account. Send
            the confirmation SMS/WhatsApp message to{" "}
            <strong>0717 371 134</strong> for instant activation.
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">
            Things to Expect After Launch
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="fas fa-phone text-secondary me-2"></i> Expect calls
              & WhatsApp messages from customers asking about plans.
            </li>
            <li className="list-group-item">
              <i className="fas fa-question-circle text-secondary me-2"></i>{" "}
              Messages like “Where is my activation?” after payment.
            </li>
            <li className="list-group-item">
              <i className="fas fa-headset text-secondary me-2"></i> Requests
              for technical support.
            </li>
            <li className="list-group-item">
              <i className="fas fa-eye text-secondary me-2"></i> Competitors
              will visit your site — a good sign you’re on the map!
            </li>
          </ul>
        </div>
      </section>


      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title">What Happens After Payment?</h2>
          <p className="mt-3">
            Your payment is processed <strong>automatically</strong>. Please
            allow up to <strong>15 minutes</strong> for your connection to be
            restored. There is no need to call us for activation.
          </p>
          <p className="mt-3">
            <strong>Experiencing a delay?</strong> If it’s been over{" "}
            <strong>30 minutes</strong>, please call us on{" "}
            <a
              href="tel:+254717371134"
              className="text-decoration-none fw-bold"
              style={{ color: "var(--secondary)" }}
            >
              0717 371 134
            </a>{" "}
            for immediate assistance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
