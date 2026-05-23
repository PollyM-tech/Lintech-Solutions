import aboutImg from "../assets/laptop-plus-router.png";

function About() {
  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const values = [
    {
      title: "Reliable Connectivity",
      text: "We help homes and businesses stay connected through stable internet, clean WiFi setup, and dependable support.",
    },
    {
      title: "Professional Installation",
      text: "From routers to CCTV and network cabling, we focus on neat work, correct setup, and long-term performance.",
    },
    {
      title: "Smart Technology Solutions",
      text: "We also support businesses with websites, software development, cybersecurity, and AI automation services.",
    },
  ];

  const promises = [
    "Fast and friendly customer support",
    "Clean WiFi, CCTV, and network installation",
    "Internet solutions for homes and businesses",
    "Digital services for modern organizations",
    "Service coverage across Nairobi and Kiambu areas",
  ];

  return (
    <section style={sectionStyle}>
      <div style={container}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={badge}>About Lintech</div>

          <h1 style={heroTitle}>
            <span style={orangeText}>Connecting Homes,</span>{" "}
            <span style={blueText}>Businesses & Modern Workflows</span>
          </h1>

          <p style={heroText}>
            Lintech is an internet, networking, and technology solutions company
            serving Nairobi and Kiambu areas with reliable connectivity,
            professional installations, and smart digital services.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div style={twoColumn}>
          {/* IMAGE */}
          <div style={imageCard}>
            <img
              src={aboutImg}
              alt="Lintech internet and technology solutions"
              style={imageStyle}
            />
          </div>

          {/* TEXT */}
          <div style={contentCard}>
            <h2 style={sectionHeading}>
              <span style={orangeText}>Who</span>{" "}
              <span style={blueText}>We Are</span>
            </h2>

            <p style={paragraph}>
              Lintech provides internet, WiFi installation, CCTV systems,
              network cabling, and digital technology services for homes,
              apartments, offices, shops, schools, and growing businesses. Our
              goal is simple: to make technology easier, more reliable, and more
              useful for everyday people and organizations.
            </p>

            <p style={paragraph}>
              We started with connectivity, but our services have grown beyond
              internet alone. Today, Lintech supports customers with complete
              networking solutions and modern digital services such as website
              development, software development, cybersecurity, and AI-powered
              automation.
            </p>

            <p style={paragraph}>
              Whether you need a stable home connection, office networking, CCTV
              installation, or a digital solution for your business, Lintech
              focuses on clear communication, professional setup, and dependable
              support.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <section style={{ marginTop: "4rem" }}>
          <h2 style={sectionHeadingCenter}>
            <span style={orangeText}>What</span>{" "}
            <span style={blueText}>We Stand For</span>
          </h2>

          <div style={gridStyle}>
            {values.map((item) => (
              <div key={item.title} style={cardStyle}>
                <h3 style={orangeCardTitle}>{item.title}</h3>
                <p style={cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <section style={{ marginTop: "4rem" }}>
          <div style={promiseBox}>
            <h2 style={sectionHeadingCenter}>
              <span style={orangeText}>Our Promise</span>{" "}
              <span style={blueText}>to You</span>
            </h2>

            <p style={heroText}>
              We do not just install and leave. We help you choose the right
              service, set it up properly, and support you when you need help.
            </p>

            <div style={promiseGrid}>
              {promises.map((item) => (
                <div key={item} style={promiseItem}>
                  <span style={{ color: "#ff7a00", fontWeight: 900 }}>✓</span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={ctaSection}>
          <h2 style={sectionHeadingCenter}>
            <span style={orangeText}>Need Internet, Networking</span>{" "}
            <span style={blueText}>or Tech Support?</span>
          </h2>

          <p style={heroText}>
            Contact Lintech today and let us help you choose the right solution.
          </p>

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

const twoColumn = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  alignItems: "stretch",
};

const imageCard = {
  borderRadius: "20px",
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  minHeight: "420px",
  objectFit: "cover",
  display: "block",
};

const contentCard = {
  padding: "2rem",
  borderRadius: "20px",
  background: "#fff",
  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const sectionHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  marginBottom: "1rem",
};

const sectionHeadingCenter = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  marginBottom: "1rem",
  textAlign: "center",
};

const paragraph = {
  color: "#555",
  lineHeight: 1.75,
  marginBottom: "1rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.2rem",
};

const cardStyle = {
  padding: "1.7rem",
  borderRadius: "16px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.07)",
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

const promiseBox = {
  padding: "2rem",
  borderRadius: "20px",
  background: "#fff",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const promiseGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1rem",
  marginTop: "2rem",
};

const promiseItem = {
  padding: "1rem",
  borderRadius: "14px",
  background: "#f8f9fa",
  color: "#0b1c4d",
  fontWeight: 800,
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

export default About;
