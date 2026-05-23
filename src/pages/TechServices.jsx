import { useState } from "react";

function TechServices() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const services = [
    {
      title: "Website Development",
      text: "Professional websites, landing pages, company profiles, and business platforms designed to help your brand look credible online.",
    },
    {
      title: "Software Development",
      text: "Custom software systems for businesses, schools, clinics, shops, and organizations that need better operations and reporting.",
    },
    {
      title: "Cyber Security",
      text: "Security support for networks, business systems, websites, and digital platforms to help protect your data and operations.",
    },
    {
      title: "AI Automation Services",
      text: "AI-powered workflows, chatbots, WhatsApp automation, customer support automation, and smart tools for business productivity.",
    },
  ];

  const clients = [
    "SMEs",
    "Schools",
    "Clinics",
    "Shops",
    "Startups",
    "Organizations",
  ];

  const steps = [
    {
      step: 1,
      title: "Consultation",
      text: "We listen to your business needs and understand the problem you want to solve.",
    },
    {
      step: 2,
      title: "Planning",
      text: "We recommend the best digital solution, features, budget direction, and delivery approach.",
    },
    {
      step: 3,
      title: "Development",
      text: "We design, build, configure, test, and prepare your solution for use.",
    },
    {
      step: 4,
      title: "Support",
      text: "We provide guidance, updates, improvements, and support after delivery.",
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
            <span>💻</span> Digital & Technology Services
          </div>

          <h1 style={heroTitle}>
            <span style={orangeText}>Smart Digital</span>{" "}
            <span style={blueText}>& Technology Services</span>
          </h1>

          <p style={heroText}>
            Lintech helps businesses grow with professional websites, custom
            software systems, cybersecurity solutions, and AI automation
            services.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${techPhone}`} style={orangeButton}>
              <i className="fas fa-phone"></i> Call {techPhone}
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
            <span style={blueText}>Our TechServices</span>
          </h2>

          <p style={sectionText}>
            We build practical digital solutions for businesses that want to
            look professional, operate better, and use technology more
            effectively.
          </p>

          <div style={gridStyle}>
            {services.map((service, i) => {
              const isHover = hoveredService === i;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
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

      {/* WHO WE HELP */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Who We Help</span>
          </h2>

          <p style={sectionText}>
            Our digital solutions are ideal for businesses and organizations
            that want better visibility, smoother operations, and smarter
            workflows.
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
            <span style={blueText}>How We Work</span>
          </h2>

          <p style={sectionText}>
            We follow a simple process that helps you move from idea to working
            solution without confusion.
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
            <span style={orangeText}>Why Choose</span>{" "}
            <span style={blueText}>Lintech?</span>
          </h2>

          <div style={benefitGrid}>
            {[
              "Business-focused solutions",
              "Modern websites and systems",
              "Secure digital setup",
              "AI-powered productivity",
              "Ongoing support",
              "Nairobi business experience",
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
            <span style={blueText}>
              Need a Website, Software, Cybersecurity or AI Automation Services?
            </span>
          </h2>

          <p style={sectionText}>
            Contact Lintech today and let us help you build a practical digital
            solution for your business.
          </p>

          <div style={buttonWrap}>
            <a href={`tel:${techPhone}`} style={orangeButton}>
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

export default TechServices;
