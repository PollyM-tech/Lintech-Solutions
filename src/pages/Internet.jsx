import { useState } from "react";

function Internet() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const internetPhone = "0717371134";
  const whatsappNumber = "254717371134";

  const plans = [
    {
      name: "Home Basic",
      price: "Ksh 2,000",
      text: "Best for light browsing, online classes, video calls, and small homes.",
      perks: ["Smooth browsing", "Online classes", "Video calls"],
      tag: "Starter",
    },
    {
      name: "Home Plus",
      price: "Ksh 3,000",
      text: "Perfect for families, streaming, online work, and multiple devices.",
      perks: ["Streaming", "More devices", "Stable home WiFi"],
      tag: "Popular",
    },
    {
      name: "Business Pro",
      price: "Custom",
      text: "Stable internet for shops, offices, businesses, and busy locations.",
      perks: ["Priority support", "Business setup", "Stable connectivity"],
      tag: "Business",
    },
  ];

  const bestFor = [
    "Homes",
    "Apartments",
    "Students",
    "Shops",
    "Offices",
    "Small Businesses",
  ];

  const steps = [
    {
      step: 1,
      title: "Request Service",
      text: "Call or WhatsApp Lintech and share your exact location.",
    },
    {
      step: 2,
      title: "Confirm Coverage",
      text: "We confirm service availability and recommend the best package.",
    },
    {
      step: 3,
      title: "Installation",
      text: "Our team installs and configures your internet connection.",
    },
    {
      step: 4,
      title: "Activation",
      text: "We test everything and activate your connection for use.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={heroSection}>
        <div style={container}>
          <div style={badge}>
            <span>⚡</span> Internet Packages
          </div>

          <h1 style={heroTitle}>
            <span style={orangeText}>Fast & Reliable</span>{" "}
            <span style={blueText}>Internet Packages</span>
            <br />
            <span style={blueText}>in Nairobi and Kiambu</span>
          </h1>

          <p style={heroText}>
            Get stable fiber internet for homes, apartments, shops, offices, and
            small businesses. Lintech provides simple packages, quick
            installation, and reliable support.
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

      {/* PACKAGES */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Choose Your Internet Package</span>
          </h2>

          <p style={sectionText}>
            Select a package that fits your home or business needs. For custom
            business internet, call Lintech for a proper recommendation.
          </p>

          <div style={gridStyle}>
            {plans.map((plan, i) => {
              const isHover = hoveredPlan === i;

              return (
                <div
                  key={plan.name}
                  onMouseEnter={() => setHoveredPlan(i)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  style={{
                    ...cardStyle,
                    transform: isHover ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHover
                      ? "0 20px 35px rgba(0,0,0,0.16)"
                      : "0 8px 18px rgba(0,0,0,0.07)",
                  }}
                >
                  <div style={tagStyle}>{plan.tag}</div>
                  <h3 style={orangeCardTitle}>{plan.name}</h3>
                  <div style={priceStyle}>{plan.price}</div>
                  <p style={cardText}>{plan.text}</p>

                  <div style={{ marginTop: "1rem" }}>
                    {plan.perks.map((perk) => (
                      <div key={perk} style={perkStyle}>
                        <span style={{ color: "#ff7a00", fontWeight: 900 }}>
                          ✓
                        </span>{" "}
                        {perk}
                      </div>
                    ))}
                  </div>

                  <a href={`tel:${internetPhone}`} style={fullOrangeButton}>
                    Call for This Plan
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={blueText}>Best For Homes and Businesses</span>
          </h2>

          <p style={sectionText}>
            Lintech internet is suitable for everyday browsing, work, online
            classes, streaming, business operations, and communication.
          </p>

          <div style={pillWrap}>
            {bestFor.map((item) => (
              <span key={item} style={pillStyle}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}></span>{" "}
            <span style={blueText}>How It Works</span>
          </h2>

          <p style={sectionText}>
            Getting connected is simple. We confirm your location, install your
            connection, and test everything before activation.
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

      {/* COVERAGE */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Coverage</span>{" "}
            <span style={blueText}>Areas</span>
          </h2>

          <p style={sectionText}>
            Lintech serves Nairobi and Kiambu areas. Contact us to confirm
            availability in your exact estate, building, or business location.
          </p>

          <div style={pillWrap}>
            {[
              "Kahawa Sukari",
              "Kahawa Wendani",
              "Ruiru",
              "Kasarani",
              "Roysambu",
              "Kimbo",
              "Juja",
              "Kenyatta Road",
              "Thika",
            ].map((area) => (
              <span key={area} style={pillStyle}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <div style={container}>
          <h2 style={sectionHeading}>
            <span style={orangeText}>Need Internet</span>{" "}
            <span style={blueText}>Connection Today?</span>
          </h2>

          <p style={sectionText}>
            Call or WhatsApp Lintech to check coverage, request installation, or
            choose the best internet package for your location.
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

const tagStyle = {
  display: "inline-block",
  padding: "0.3rem 0.7rem",
  borderRadius: "999px",
  background: "rgba(245,124,0,0.12)",
  color: "#0b1c4d",
  fontWeight: 800,
  fontSize: "0.82rem",
  marginBottom: "0.9rem",
};

const orangeCardTitle = {
  fontFamily: "Poppins, sans-serif",
  color: "#ff7a00",
  fontWeight: 900,
  fontSize: "1.15rem",
  marginBottom: "0.7rem",
};

const priceStyle = {
  fontFamily: "Poppins, sans-serif",
  color: "#0b1c4d",
  fontWeight: 900,
  fontSize: "1.8rem",
  marginBottom: "0.8rem",
};

const cardText = {
  color: "#555",
  lineHeight: 1.65,
  margin: 0,
};

const perkStyle = {
  color: "#555",
  marginBottom: "0.45rem",
  fontWeight: 600,
};

const fullOrangeButton = {
  display: "inline-block",
  marginTop: "1.3rem",
  width: "100%",
  textAlign: "center",
  padding: "0.75rem 1rem",
  borderRadius: "12px",
  backgroundColor: "#ff7a00",
  color: "#fff",
  fontWeight: 800,
  textDecoration: "none",
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

export default Internet;
