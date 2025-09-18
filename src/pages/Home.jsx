import { useState } from "react";

function Home() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const benefits = [
    {
      icon: "fa-bolt",
      title: "Lightning Fast Speeds",
      text: "Stream, game, and download without interruptions or buffering",
    },
    {
      icon: "fa-shield-alt",
      title: "99.9% Uptime",
      text: "Reliable connection for studying, working, and entertainment",
    },
    {
      icon: "fa-headset",
      title: "Local Support",
      text: "Quick, personalized support from our Juja-based team",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Check Coverage",
      text: "Confirm we serve your location in Juja or Kenyatta Road",
    },
    {
      step: 2,
      title: "Contact Us",
      text: "Call or WhatsApp us to get a personalized quote",
    },
    {
      step: 3,
      title: "Enjoy WiFi",
      text: "We install quickly so you can start enjoying fast internet",
    },
  ];

  return (
    <div>
  
      <section style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            color: "#0b1c4d",
            marginBottom: "1rem",
          }}
        >
          Experience <span style={{ color: "#ff7a00" }}>Blazing-Fast WiFi</span>{" "}
          in Juja & Kenyatta Road
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Reliable, high-speed internet for students, homes, and businesses
          starting from just Ksh 2,000
        </p>
      </section>

      {/* Benefits Cards */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#0b1c4d",
            marginBottom: "3rem",
          }}
        >
          Why Choose Lintech WiFi?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {benefits.map((b, i) => {
            const isHover = hoveredBenefit === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredBenefit(i)}
                onMouseLeave={() => setHoveredBenefit(null)}
                style={{
                  width: "300px",
                  padding: "2rem",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: isHover
                    ? "0 20px 30px rgba(0,0,0,0.2)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  transform: isHover ? "translateY(-10px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#ff7a00",
                    marginBottom: "1rem",
                  }}
                >
                  <i className={`fas ${b.icon}`}></i>
                </div>
                <h5
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#ff7a00", // orange titles
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {b.title}
                </h5>
                <p style={{ color: "#555", lineHeight: 1.5 }}>{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#0b1c4d",
            marginBottom: "3rem",
          }}
        >
          Get Connected in 3 Simple Steps
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {steps.map((s, i) => {
            const isHover = hoveredStep === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  width: "300px",
                  padding: "2rem",
                  borderRadius: "15px",
                  backgroundColor: isHover ? "#fffbf5" : "#fff",
                  boxShadow: isHover
                    ? "0 20px 30px rgba(0,0,0,0.2)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  transform: isHover ? "translateY(-10px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    lineHeight: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#0b1c4d",
                    color: "#ff7a00",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    margin: "0 auto 15px",
                    transform: isHover
                      ? "scale(1.2) rotate(10deg)"
                      : "scale(1)",
                    transition: "transform 0.3s ease",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {s.step}
                </div>
                <h5
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#0b1c4d",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.title}
                </h5>
                <p style={{ color: "#555", lineHeight: 1.5 }}>{s.text}</p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ fontStyle: "italic" }}>
            Plans start from as low as <strong>Ksh 2,000</strong>
          </p>
          <a
            href="tel:071737114"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              fontSize: "1.25rem",
              backgroundColor: "#ff7a00",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              marginTop: "1rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0b1c4d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff7a00")}
          >
            Get Your Quote Today
          </a>
        </div>
      </section>

      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem", fontFamily: "Poppins, sans-serif" }}>
          Ready for Better Internet?
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#555", marginBottom: "2rem" }}>
          Contact us today to get started with the best WiFi in Juja
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:071737114"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 2rem",
              fontSize: "1.1rem",
              backgroundColor: "#ff7a00",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <i className="fas fa-phone"></i> Call Now
          </a>
          <a
            href="https://wa.me/254717371114"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 2rem",
              fontSize: "1.1rem",
              backgroundColor: "#25D366",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
        <p style={{ marginTop: "1.5rem", color: "#555" }}>
          We're available 7 days a week, 8:00 AM - 8:00 PM
        </p>
      </section>
    </div>
  );
}

export default Home;
