function Contact() {
  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const services = [
    "Internet Connection",
    "WiFi Installation",
    "CCTV Installation",
    "Network Cabling",
    "Router Configuration",
    "Website Development",
    "Software Development",
    "Cyber Security",
    "AI Automation",
  ];

  return (
    <section style={sectionStyle}>
      <div style={container}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={badge}>Contact Lintech</div>

          <h1 style={heroTitle}>
            <span style={orangeText}>Get in Touch</span>{" "}
            <span style={blueText}>with Lintech</span>
          </h1>

          <p style={heroText}>
            Contact us for internet, WiFi installation, CCTV, network cabling,
            websites, software development, cybersecurity, and AI automation
            services across Nairobi and Kiambu areas.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div style={contactGrid}>
          <div style={contactCard}>
            <h3 style={orangeCardTitle}>Internet Services</h3>
            <p style={cardText}>
              For fiber internet, WiFi installation, routers, and connectivity
              support.
            </p>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              Call {internetPhone}
            </a>
          </div>

          <div style={contactCard}>
            <h3 style={orangeCardTitle}>Tech Services</h3>
            <p style={cardText}>
              For websites, software systems, cybersecurity, and AI automation.
            </p>
            <a href={`tel:${techPhone}`} style={navyButton}>
              Call {techPhone}
            </a>
          </div>

          <div style={contactCard}>
            <h3 style={orangeCardTitle}>WhatsApp Support</h3>
            <p style={cardText}>
              Send your location, service needed, and nearest landmark.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* SERVICE REQUEST */}
        <div style={requestBox}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>What Service</span>{" "}
            <span style={blueText}>Do You Need?</span>
          </h2>

          <p style={heroText}>
            When contacting us, mention the service you need so our team can
            respond faster.
          </p>

          <div style={pillWrap}>
            {services.map((service) => (
              <span key={service} style={pillStyle}>
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* WHAT TO SEND */}
        <div style={infoBox}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>What to Send</span>{" "}
            <span style={blueText}>for Fast Help</span>
          </h2>

          <div style={infoGrid}>
            <div style={infoItem}>Your name</div>
            <div style={infoItem}>Exact location</div>
            <div style={infoItem}>Nearest landmark</div>
            <div style={infoItem}>Service needed</div>
            <div style={infoItem}>Preferred installation time</div>
            <div style={infoItem}>Home or business setup</div>
          </div>
        </div>

        {/* HOURS / COVERAGE */}
        <div style={bottomGrid}>
          <div style={smallCard}>
            <h3 style={orangeCardTitle}>Coverage</h3>
            <p style={cardText}>
              Nairobi and Kiambu areas. Send your exact location to confirm
              availability.
            </p>
          </div>

          <div style={smallCard}>
            <h3 style={orangeCardTitle}>Business Hours</h3>
            <p style={cardText}>8:00 AM – 8:00 PM, 7 days a week.</p>
          </div>
        </div>

        {/* CTA */}
        <div style={ctaSection}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Ready to Request</span>{" "}
            <span style={blueText}>a Service or Make Payment?</span>
          </h2>

          <div style={buttonWrap}>
            <a href={`tel:${internetPhone}`} style={orangeButton}>
              Internet: {internetPhone}
            </a>

            <a href={`tel:${techPhone}`} style={navyButton}>
              Tech: {techPhone}
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              WhatsApp
            </a>

            <a href="/how-it-works" style={navyButton}>
              Payment Steps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STYLES */
const sectionStyle = {
  padding: "4rem 0",
  background:
    "radial-gradient(900px 450px at 10% 5%, rgba(245,124,0,0.12), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
};

const container = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
};

const badge = {
  display: "inline-flex",
  padding: "0.45rem 0.85rem",
  borderRadius: "999px",
  background: "rgba(245,124,0,0.12)",
  color: "#0b1c4d",
  fontWeight: 800,
  fontFamily: "Poppins, sans-serif",
  marginBottom: "1rem",
};

const heroTitle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.1,
  maxWidth: "900px",
  margin: "0 auto 1rem",
  textAlign: "center",
};

const orangeText = {
  color: "#ff7a00",
};

const blueText = {
  color: "#0b1c4d",
};

const heroText = {
  color: "#555",
  maxWidth: "780px",
  margin: "0 auto",
  lineHeight: 1.7,
  fontSize: "1.05rem",
  textAlign: "center",
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.2rem",
};

const contactCard = {
  padding: "1.7rem",
  borderRadius: "18px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
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
  marginBottom: "1.2rem",
};

const requestBox = {
  marginTop: "3rem",
  padding: "2rem",
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const sectionHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  marginBottom: "1rem",
  textAlign: "center",
};

const pillWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "0.8rem",
  flexWrap: "wrap",
  marginTop: "2rem",
};

const pillStyle = {
  padding: "0.7rem 1rem",
  borderRadius: "999px",
  background: "#f8f9fa",
  color: "#0b1c4d",
  fontWeight: 800,
  border: "1px solid rgba(0,0,0,0.06)",
};

const infoBox = {
  marginTop: "3rem",
  padding: "2rem",
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
  marginTop: "1.5rem",
};

const infoItem = {
  padding: "1rem",
  borderRadius: "14px",
  background: "#f8f9fa",
  color: "#0b1c4d",
  fontWeight: 800,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.2rem",
  marginTop: "3rem",
};

const smallCard = {
  padding: "1.5rem",
  borderRadius: "18px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
};

const ctaSection = {
  marginTop: "4rem",
  textAlign: "center",
};

const buttonWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1.8rem",
};

const orangeButton = {
  display: "inline-flex",
  alignItems: "center",
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
  padding: "0.85rem 1.4rem",
  fontSize: "1.05rem",
  backgroundColor: "#25D366",
  color: "#fff",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 14px 28px rgba(37,211,102,0.22)",
  fontWeight: 800,
};

export default Contact;
