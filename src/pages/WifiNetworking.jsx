import { useState } from "react";

function WifiNetworking() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const internetPhone = "0717371134";
  const whatsappNumber = "254717371134";

  const services = [
    {
      title: "Home WiFi Installation",
      text: "Stable WiFi setup for homes, apartments, rentals, and family houses.",
    },
    {
      title: "Business Networking",
      text: "Reliable office networking for shops, offices, schools, and small businesses.",
    },
    {
      title: "CCTV Installation",
      text: "Professional CCTV camera installation with DVR/NVR setup and remote viewing support.",
    },
    {
      title: "Network Cabling",
      text: "Clean structured cabling for offices, buildings, routers, switches, and access points.",
    },
    {
      title: "Router Configuration",
      text: "Router setup, password configuration, access point setup, and WiFi optimization.",
    },
    {
      title: "WiFi Troubleshooting",
      text: "We diagnose slow internet, weak signal, router issues, and network interruptions.",
    },
  ];

  const clients = [
    "Homes",
    "Apartments",
    "Offices",
    "Shops",
    "Schools",
    "Small Businesses",
  ];

  const steps = [
    {
      step: 1,
      title: "Site Check",
      text: "We confirm your location, building setup, coverage needs, and the best installation approach.",
    },
    {
      step: 2,
      title: "Quotation",
      text: "You receive a clear recommendation and quote based on the service needed.",
    },
    {
      step: 3,
      title: "Installation",
      text: "Our team installs, configures, and tests your WiFi, CCTV, or network setup.",
    },
    {
      step: 4,
      title: "Support",
      text: "We provide guidance and support after installation to keep your connection stable.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          padding: "4.5rem 0",
          background:
            "radial-gradient(900px 450px at 10% 10%, rgba(245,124,0,0.18), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%)",
          textAlign: "center",
        }}
      >
        <div style={container}>
          <div style={badge}>
            <span>📡</span> WiFi, CCTV & Network Installation
          </div>

          <h1 style={heroTitle}>
            <span style={orangeText}>WiFi, CCTV</span>{" "}
            <span style={blueText}>& Network Installation</span>
            <br />
            <span style={blueText}>in Nairobi and Kiambu</span>
          </h1>

          <p style={heroText}>
            Professional home and business WiFi setup, CCTV installation,
            structured network cabling, router configuration, and network
            troubleshooting.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              <i className="fas fa-phone"></i> Call {internetPhone}
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Our WiFi & Networking Services</span>
          </h2>

          <p style={sectionText}>
            Lintech helps homes and businesses build stable, secure, and
            professional network systems.
          </p>

          <div style={gridStyle}>
            {services.map((service, i) => {
              const isHover = hoveredCard === i;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    ...cardStyle,
                    transform: isHover ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHover
                      ? "0 20px 35px rgba(0,0,0,0.16)"
                      : "0 8px 18px rgba(0,0,0,0.07)",
                  }}
                >
                  <h3 style={orangeCardTitle}>{service.title}</h3>
                  <p style={cardText}>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Who We Serve</span>
          </h2>

          <p style={sectionText}>
            Whether you need WiFi at home, CCTV for your shop, or structured
            networking for an office, Lintech can help.
          </p>

          <div style={pillWrap}>
            {clients.map((client) => (
              <span key={client} style={pillStyle}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>How Our Installation Works</span>
          </h2>

          <p style={sectionText}>
            We keep the process simple, clear, and professional from the first
            call to final testing.
          </p>

          <div style={gridStyle}>
            {steps.map((item, i) => {
              const isHover = hoveredStep === i;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{
                    ...cardStyle,
                    textAlign: "center",
                    transform: isHover ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHover
                      ? "0 20px 35px rgba(0,0,0,0.16)"
                      : "0 8px 18px rgba(0,0,0,0.07)",
                  }}
                >
                  <div style={stepCircle}>{item.step}</div>
                  <h3 style={orangeCardTitle}>{item.title}</h3>
                  <p style={cardText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}></span>{" "}
            <span style={blueText}>Why Choose Lintech?</span>
          </h2>

          <div style={benefitGrid}>
            {[
              "Clean cabling",
              "Fast setup",
              "Professional technicians",
              "Reliable support",
              "Nairobi & Kiambu coverage",
              "Home and business solutions",
            ].map((item) => (
              <div key={item} style={benefitCard}>
                <span style={{ color: "#ff7a00", fontWeight: 900 }}>✓</span>{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Need WiFi, CCTV or Network Setup?</span>
          </h2>

          <p style={sectionText}>
            Contact Lintech today and get professional installation support for
            your home or business.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              <i className="fas fa-phone"></i> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* STYLES */
const container = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
  textAlign: "center",
};

const badge = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.45rem 0.85rem",
  borderRadius: "999px",
  background: "rgba(245,124,0,0.12)",
  color: "#0b1c4d",
  fontWeight: 800,
  marginBottom: "1rem",
  fontFamily: "Poppins, sans-serif",
};

const heroTitle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  fontSize: "clamp(2.1rem, 4vw, 3.3rem)",
  lineHeight: 1.1,
  maxWidth: "900px",
  margin: "0 auto 1rem",
};

const orangeText = {
  color: "#ff7a00",
};

const blueText = {
  color: "#0b1c4d",
};

const heroText = {
  fontSize: "1.15rem",
  color: "#555",
  maxWidth: "780px",
  margin: "0 auto 1.8rem",
  lineHeight: 1.7,
};

const buttonWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
};

const orangeButton = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.55rem",
  padding: "0.85rem 1.4rem",
  fontSize: "1.05rem",
  backgroundColor: "#ff7a00",
  color: "#fff",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 14px 28px rgba(245,124,0,0.25)",
  fontWeight: 800,
};

const greenButton = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.55rem",
  padding: "0.85rem 1.4rem",
  fontSize: "1.05rem",
  backgroundColor: "#25D366",
  color: "#fff",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 14px 28px rgba(37,211,102,0.22)",
  fontWeight: 800,
};

const sectionHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  marginBottom: "1rem",
};

const sectionText = {
  color: "#555",
  maxWidth: "760px",
  margin: "0 auto 3rem",
  lineHeight: 1.7,
  fontSize: "1rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1.2rem",
};

const cardStyle = {
  padding: "1.7rem",
  borderRadius: "16px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  transition: "all 0.3s ease",
  textAlign: "left",
};

const orangeCardTitle = {
  fontFamily: "Poppins, sans-serif",
  color: "#ff7a00",
  fontWeight: 900,
  fontSize: "1.15rem",
  marginBottom: "0.7rem",
};

const cardText = {
  color: "#555",
  lineHeight: 1.65,
  margin: 0,
};

const pillWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "0.8rem",
  flexWrap: "wrap",
};

const pillStyle = {
  padding: "0.7rem 1rem",
  borderRadius: "999px",
  background: "#fff",
  color: "#0b1c4d",
  fontWeight: 800,
  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const stepCircle = {
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: "#0b1c4d",
  color: "#ff7a00",
  display: "grid",
  placeItems: "center",
  fontSize: "1.8rem",
  fontWeight: 900,
  margin: "0 auto 1rem",
  fontFamily: "Poppins, sans-serif",
};

const benefitGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "1rem",
};

const benefitCard = {
  padding: "1rem",
  borderRadius: "14px",
  background: "#fff",
  color: "#0b1c4d",
  fontWeight: 800,
  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.06)",
};

export default WifiNetworking;
