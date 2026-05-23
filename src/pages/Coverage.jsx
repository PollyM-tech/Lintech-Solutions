import { useState } from "react";

function Coverage() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const areas = [
    "Kahawa Sukari",
    "Kahawa Wendani",
    "Ruiru",
    "Kasarani",
    "Roysambu",
    "Kimbo",
    "Juja",
    "Kenyatta Road",
    "Thika",
  ];

  const services = [
    "Fiber Internet",
    "WiFi Installation",
    "CCTV Installation",
    "Network Cabling",
    "Router Configuration",
    "Tech Services",
  ];

  const steps = [
    {
      step: 1,
      title: "Share Location",
      text: "Send your estate, building, road, or nearest landmark through call or WhatsApp.",
    },
    {
      step: 2,
      title: "Confirm Availability",
      text: "We check whether Lintech services are available in your exact location.",
    },
    {
      step: 3,
      title: "Recommend Solution",
      text: "We advise the best internet, WiFi, CCTV, networking, or tech service option.",
    },
    {
      step: 4,
      title: "Schedule Service",
      text: "Once confirmed, we plan installation, setup, or service delivery at your location.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={heroSection}>
        <div style={container}>
          <div style={badge}>
            <span>📍</span> Coverage Areas
          </div>

          <h1 style={heroTitle}>
            <span style={orangeText}>Internet & Tech </span>{" "}
            <span style={blueText}>Service Coverage</span>
          </h1>

          <p style={heroText}>
            Lintech provides internet, WiFi installation, CCTV, and network
            cabling across selected areas in Nairobi and Kiambu counties. Our
            tech services, including websites, software development,
            cybersecurity, and AI automation, are available to clients
            worldwide.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              <i className="fas fa-phone"></i> Internet: {internetPhone}
            </a>

            <a href={`tel:${techPhone}`} style={navyButton}>
              <i className="fas fa-laptop-code"></i> Tech: {techPhone}
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

      {/* AREAS */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Main</span>{" "}
            <span style={blueText}>Coverage Areas</span>
          </h2>

          <p style={sectionText}>
            These are some of the key areas Lintech serves. If your exact estate
            or building is not listed, contact us and we will confirm
            availability.
          </p>

          <div style={gridStyle}>
            {areas.map((area, i) => {
              const isHover = hoveredArea === i;

              return (
                <div
                  key={area}
                  onMouseEnter={() => setHoveredArea(i)}
                  onMouseLeave={() => setHoveredArea(null)}
                  style={{
                    ...areaCard,
                    transform: isHover ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHover
                      ? "0 20px 35px rgba(0,0,0,0.16)"
                      : "0 8px 18px rgba(0,0,0,0.07)",
                  }}
                >
                  <span style={{ color: "#ff7a00", fontWeight: 900 }}>📍</span>{" "}
                  {area}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES AVAILABLE */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Services Available</span>{" "}
            <span style={blueText}>by Area</span>
          </h2>

          <p style={sectionText}>
            Depending on your exact location, Lintech can provide internet,
            networking, security installation, and technology support services.
          </p>

          <div style={pillWrap}>
            {services.map((service) => (
              <span key={service} style={pillStyle}>
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>How to Check</span>{" "}
            <span style={blueText}>Coverage</span>
          </h2>

          <p style={sectionText}>
            Coverage confirmation is quick. Share your location and our team
            will guide you on the available services.
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

      {/* LOCATION NOTE */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <div style={noteBox}>
            <h2 style={sectionHeading}>
              <span style={orangeText}>Not Sure If</span>{" "}
              <span style={blueText}>We Cover Your Area?</span>
            </h2>

            <p style={{ ...sectionText, marginBottom: "1.8rem" }}>
              Send us your location, nearest landmark, estate name, or building
              name through WhatsApp. We will confirm availability and recommend
              the right service.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              <i className="fab fa-whatsapp"></i> Confirm My Location
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Ready to Get</span>{" "}
            <span style={blueText}>Connected?</span>
          </h2>

          <p style={sectionText}>
            Call or WhatsApp Lintech today to confirm coverage and request
            internet, WiFi, CCTV, networking, or tech services.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              <i className="fas fa-phone"></i> Internet Services
            </a>

            <a href={`tel:${techPhone}`} style={navyButton}>
              <i className="fas fa-phone"></i> Tech Services
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
const heroSection = {
  padding: "4.5rem 0",
  background:
    "radial-gradient(900px 450px at 10% 10%, rgba(245,124,0,0.18), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%)",
  textAlign: "center",
};

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

const navyButton = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.55rem",
  padding: "0.85rem 1.4rem",
  fontSize: "1.05rem",
  backgroundColor: "#0b1c4d",
  color: "#fff",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 14px 28px rgba(11,28,77,0.22)",
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

const areaCard = {
  padding: "1.3rem",
  borderRadius: "16px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  transition: "all 0.3s ease",
  color: "#0b1c4d",
  fontWeight: 900,
  fontFamily: "Poppins, sans-serif",
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

const noteBox = {
  maxWidth: "850px",
  margin: "0 auto",
  padding: "2rem",
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
};

export default Coverage;
