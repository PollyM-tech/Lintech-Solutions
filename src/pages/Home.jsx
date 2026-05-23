import { useEffect, useMemo, useState } from "react";

import heroImg from "../assets/student browsing with laptop and router.png";
import routerProductImg from "../assets/router image.png";

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const rotatingWords = useMemo(
    () => ["Reliable", "Fast", "Stable", "Affordable", "Smart"],
    [],
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setWordVisible(true);
      }, 180);
    }, 1800);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const mainServices = [
    {
      icon: "fa-wifi",
      title: "Fiber Internet",
      text: "Reliable internet packages for homes, apartments, shops, and businesses across Nairobi and Kiambu counties.",
      button: "View Internet Plans",
      link: "/internet",
    },
    {
      icon: "fa-network-wired",
      title: "WiFi & Networking",
      text: "Professional WiFi installation, CCTV setup, network cabling, router configuration, and troubleshooting.",
      button: "Explore Networking",
      link: "/wifi-networking",
    },
    {
      icon: "fa-laptop-code",
      title: "Tech Services",
      text: "Website development, software development, cybersecurity, and AI automation services for clients worldwide.",
      button: "View Tech Services",
      link: "/tech-services",
    },
  ];

  const networkingServices = [
    "Home WiFi Installation",
    "Business Networking",
    "CCTV Installation",
    "Network Cabling",
    "Router Configuration",
    "WiFi Troubleshooting",
  ];

  const techServices = [
    {
      title: "Website Development",
      text: "Professional websites for businesses, startups, schools, and organizations.",
    },
    {
      title: "Software Development",
      text: "Custom systems that help businesses manage operations, clients, and reporting.",
    },
    {
      title: "Cyber Security",
      text: "Security support for networks, websites, business systems, and digital platforms.",
    },
    {
      title: "AI Automation Services",
      text: "AI chatbots, workflow automation, WhatsApp automation, and smart business tools.",
    },
  ];

  const plans = [
    {
      name: "Home Basic",
      price: "Ksh 2,000",
      desc: "Best for light browsing, online classes, and small homes.",
      perks: ["Smooth browsing", "Video calls", "Local support"],
      accent: "#ff7a00",
    },
    {
      name: "Home Plus",
      price: "Ksh 3,000",
      desc: "Perfect for families, streaming, and multiple devices.",
      perks: ["Streaming", "Online classes", "More devices"],
      accent: "#0b1c4d",
      tag: "Popular",
    },
    {
      name: "Business Pro",
      price: "Custom",
      desc: "Stable internet for offices, shops, and business operations.",
      perks: ["Priority support", "Business setup", "Stable connectivity"],
      accent: "#25D366",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Request Service",
      text: "Call or WhatsApp us and tell us the service you need.",
    },
    {
      step: 2,
      title: "Confirm Location",
      text: "We confirm your exact location and recommend the best solution.",
    },
    {
      step: 3,
      title: "Installation",
      text: "Our team installs, configures, and tests everything professionally.",
    },
  ];

  const testimonials = [
    {
      name: "Customer in Nairobi",
      quote:
        "Lintech helped us set up stable internet and WiFi for our office. The support was quick and professional.",
      rating: 5,
    },
    {
      name: "Business Client",
      quote:
        "Their network cabling and router setup made our office connection much better. Very reliable team.",
      rating: 5,
    },
    {
      name: "Home Client",
      quote:
        "The installation was fast, and the WiFi has been stable for streaming, work, and online classes.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Which areas does Lintech serve?",
      a: "Internet, WiFi, CCTV, and networking services are available in selected Nairobi and Kiambu County areas. Tech services can be delivered to clients worldwide.",
    },
    {
      q: "Which number should I call for internet services?",
      a: `For internet services, call ${internetPhone}.`,
    },
    {
      q: "Which number should I call for tech services?",
      a: `For tech services including websites, software, cybersecurity, and AI automation, call ${techPhone}.`,
    },
    {
      q: "Do you install CCTV systems?",
      a: "Yes. CCTV installation is part of our WiFi and Networking services. We install cameras, configure DVR/NVR systems, and support remote monitoring.",
    },
  ];

  const coverageAreas = [
    "Kahawa Sukari & Wendani",
    "Ruiru",
    "Kasarani",
    "Roysambu",
    "Kimbo",
    "Juja",
    "Kenyatta Road",
    "Thika",
  ];

  const Stars = ({ count = 5 }) => (
    <span style={{ color: "#ffb703", letterSpacing: "2px" }}>
      {"★".repeat(count)}
    </span>
  );

  return (
    <div>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with Lintech on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="floating-whatsapp-text">Chat</span>
      </a>

      {/* HERO */}
      <section style={heroSection}>
        <div style={container}>
          <div style={heroCard}>
            <div style={badge}>
              <span>⚡</span>
              Nairobi & Kiambu Internet • Worldwide Tech Services
            </div>

            <h1 style={heroTitle}>
              <span
                style={{
                  color: "#ff7a00",
                  display: "inline-block",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                  opacity: wordVisible ? 1 : 0,
                  transform: wordVisible ? "translateY(0)" : "translateY(6px)",
                }}
              >
                {rotatingWords[wordIndex]}
              </span>{" "}
              <span style={{ color: "#ff7a00" }}>Internet, Networking</span>
              <br />
              <span style={{ color: "#0b1c4d" }}>& Smart Tech Solutions</span>
            </h1>

            <p style={heroText}>
              Fast fiber internet, professional WiFi installation, CCTV systems,
              network cabling, cybersecurity, websites, software development,
              and AI automation services for homes, businesses, and
              organizations.
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

            <div style={pillWrap}>
              {[
                "Fiber Internet",
                "WiFi Installation",
                "CCTV",
                "Network Cabling",
                "Tech Services",
              ].map((tag) => (
                <span key={tag} style={pillStyle}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "1rem", marginBottom: "1.8rem" }}>
              <img
                src={heroImg}
                alt="Lintech internet and technology services"
                style={heroImage}
              />
            </div>

            <div style={requestBox}>
              <h4 style={smallHeading}>Quick Service Request</h4>

              <p style={requestText}>
                Internet and networking services cover selected Nairobi and
                Kiambu County areas. Tech services are available worldwide. Call
                or WhatsApp us to get the right recommendation.
              </p>

              <div style={requestGrid}>
                <div style={infoBox}>
                  <div style={infoTitle}>Internet Services</div>
                  <div style={{ color: "#555" }}>{internetPhone}</div>
                </div>

                <div style={infoBox}>
                  <div style={infoTitle}>Tech Services</div>
                  <div style={{ color: "#555" }}>{techPhone}</div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  style={smallGreenButton}
                >
                  <i className="fab fa-whatsapp"></i> Confirm Location
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          html {
            scroll-behavior: smooth;
          }

          ${cssAnimations}
        `}</style>
      </section>

      {/* MAIN SERVICES */}
      <section style={sectionWhite}>
        <h2 style={sectionHeading}>Our Main Services</h2>
        <p style={sectionText}>
          Lintech provides complete internet, networking, and digital technology
          solutions for homes, businesses, and organizations.
        </p>

        <div style={cardFlex}>
          {mainServices.map((service, i) => {
            const isHover = hoveredCard === i;
            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={hoverCard(isHover, "center")}
              >
                <div style={iconStyle}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h5 style={cardTitle}>{service.title}</h5>
                <p style={cardText}>{service.text}</p>
                <a href={service.link} style={textLink}>
                  {service.button} →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERNET PLANS */}
      <section style={sectionWhite}>
        <h2 style={sectionHeading}>Internet Packages</h2>
        <p style={sectionText}>
          Simple, reliable, and affordable internet packages for homes and
          businesses. For all internet services, call{" "}
          <strong>{internetPhone}</strong>.
        </p>

        <div style={cardFlex}>
          {plans.map((p, i) => {
            const isHover = hoveredPlan === i;
            return (
              <div
                key={p.name}
                onMouseEnter={() => setHoveredPlan(i)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  ...hoverCard(isHover, "left"),
                  border: p.tag
                    ? "2px solid rgba(255,122,0,0.35)"
                    : "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div style={planHeader}>
                  <h5 style={{ ...cardTitle, margin: 0 }}>{p.name}</h5>
                  {p.tag && <span style={popularTag}>{p.tag}</span>}
                </div>

                <div style={{ ...priceStyle, color: p.accent }}>{p.price}</div>

                <p style={cardText}>{p.desc}</p>

                <div style={{ marginTop: "1rem" }}>
                  {p.perks.map((perk) => (
                    <div key={perk} style={perkStyle}>
                      ✓ {perk}
                    </div>
                  ))}
                </div>

                <a href={`tel:${internetPhone}`} style={fullOrangeButton}>
                  Call for Internet
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* WIFI & NETWORKING */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "#f3f4f6",
        }}
      >
        <div style={containerCenter}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              color: "#0b1c4d",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            WiFi & Networking Solutions
          </h2>

          <p
            style={{
              color: "#555",
              maxWidth: "760px",
              margin: "0 auto 3rem",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            From home WiFi setup to office networking, CCTV installation, and
            network cabling, we help you build stable, secure, and professional
            network systems for homes and businesses.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {networkingServices.map((item, i) => (
  <div
    key={item}
    onMouseEnter={() => setHoveredCard(i + 100)}
    onMouseLeave={() => setHoveredCard(null)}
    style={{
      padding: "1.6rem",
      borderRadius: "16px",
      background: "#ffffff",
      border: "1px solid rgba(0,0,0,0.05)",
      boxShadow:
        hoveredCard === i + 100
          ? "0 16px 32px rgba(0,0,0,0.10)"
          : "0 8px 20px rgba(0,0,0,0.05)",
      transform:
        hoveredCard === i + 100 ? "translateY(-5px)" : "translateY(0)",
      transition: "all 0.25s ease",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "#555",
        fontWeight: 700,
        fontFamily: "Poppins, sans-serif",
        fontSize: "1rem",
      }}
    >
      {item}
    </div>
  </div>
))}
             
          </div>
        </div>
      </section>
      {/* TECH SERVICES */}
      <section style={sectionWhite}>
        <div style={containerCenter}>
          <h2 style={sectionHeading}>Digital & Technology Services</h2>
          <p style={sectionText}>
            We help businesses grow and automate through modern websites, custom
            systems, cybersecurity solutions, and AI-powered workflows. For all
            tech services, call <strong>{techPhone}</strong>.
          </p>

          <div style={gridStyle}>
            {techServices.map((item) => (
              <div key={item.title} style={techCard}>
                <h4 style={orangeServiceHeading}>{item.title}</h4>
                <p style={cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTERS */}
      <section style={sectionWhite}>
        <div style={containerCenter}>
          <h2 style={sectionHeading}>We Also Sell WiFi Routers</h2>
          <p style={sectionText}>
            Upgrade your WiFi setup with quality routers from Lintech. We also
            help with setup, configuration, and coverage optimization.
          </p>

          <div style={routerBox}>
            <img
              src={routerProductImg}
              alt="Lintech WiFi Router"
              style={routerImage}
            />

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={greenButton}
            >
              <i className="fab fa-whatsapp"></i> Ask About Router Prices
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section style={sectionSoft}>
        <h2 style={{ ...sectionHeading, textAlign: "center" }}>
          Get Started in 3 Simple Steps
        </h2>

        <div style={cardFlex}>
          {steps.map((s, i) => {
            const isHover = hoveredStep === i;
            return (
              <div
                key={s.step}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={hoverCard(isHover, "center")}
              >
                <div style={stepCircle}>{s.step}</div>
                <h5 style={cardTitle}>{s.title}</h5>
                <p style={cardText}>{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COVERAGE */}
      <section style={sectionWhite}>
        <div style={containerCenter}>
          <h2 style={sectionHeading}>Areas We Serve</h2>
          <p style={sectionText}>
            Internet and networking services are available in selected Nairobi
            and Kiambu County areas. Tech services are available worldwide.
          </p>

          <div style={areaWrap}>
            {coverageAreas.map((area) => (
              <span key={area} style={areaPill}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={sectionWhite}>
        <h2 style={sectionHeading}>Customer Feedback</h2>
        <p style={sectionText}>
          Feedback from clients who trust Lintech for internet, networking, and
          technology services.
        </p>

        <div style={cardFlex}>
          {testimonials.map((t, i) => {
            const isHover = hoveredTestimonial === i;
            return (
              <div
                key={t.name}
                onMouseEnter={() => setHoveredTestimonial(i)}
                onMouseLeave={() => setHoveredTestimonial(null)}
                style={hoverCard(isHover, "left")}
              >
                <div style={{ marginBottom: "0.8rem" }}>
                  <Stars count={t.rating} />
                </div>
                <p style={cardText}>“{t.quote}”</p>
                <div style={cardTitle}>{t.name}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={sectionWhite}>
        <h2 style={sectionHeading}>Frequently Asked Questions</h2>
        <p style={sectionText}>Quick answers before you call or WhatsApp us.</p>

        <div style={faqWrap}>
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                style={faqItem(isOpen)}
                onClick={() => setOpenFaq(isOpen ? -1 : idx)}
              >
                <div style={faqHeader}>
                  <div style={faqQuestion}>{item.q}</div>
                  <div style={faqIcon(isOpen)}>+</div>
                </div>

                <div style={faqAnswerWrap(isOpen)}>
                  <p style={faqAnswer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={finalCta}>
        <h2 style={sectionHeading}>
          Ready to Upgrade Your Internet & Technology Setup?
        </h2>

        <p style={finalText}>
          Contact Lintech today for internet, WiFi, networking, CCTV, or digital
          technology services.
        </p>

        <div style={buttonWrap}>
          <a href={`tel:${internetPhone}`} style={orangeButton}>
            <i className="fas fa-phone"></i> Internet: {internetPhone}
          </a>

          <a href={`tel:${techPhone}`} style={navyButton}>
            <i className="fas fa-phone"></i> Tech: {techPhone}
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

        <p style={{ marginTop: "1.5rem", color: "#555" }}>
          Available 7 days a week, 8:00 AM - 8:00 PM
        </p>
      </section>
    </div>
  );
}

/* STYLES */
const heroSection = {
  padding: "4rem 0",
  background:
    "radial-gradient(1200px 500px at 10% 10%, rgba(245,124,0,0.18), transparent 60%), radial-gradient(900px 450px at 90% 0%, rgba(11,28,77,0.14), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%)",
};

const container = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
  textAlign: "center",
};

const heroCard = {
  padding: "2.4rem",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.92)",
  boxShadow: "0 22px 50px rgba(11,28,77,0.1)",
  border: "1px solid rgba(0,0,0,0.06)",
  animation: "lintechFloat 5s ease-in-out infinite",
};

const badge = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.4rem 0.8rem",
  borderRadius: "999px",
  background: "rgba(245,124,0,0.12)",
  color: "#0b1c4d",
  fontWeight: 700,
  marginBottom: "1rem",
  fontFamily: "Poppins, sans-serif",
};

const heroTitle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 800,
  fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
  marginBottom: "1rem",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};

const heroText = {
  fontSize: "1.15rem",
  color: "#555",
  maxWidth: "820px",
  margin: "0 auto 1.6rem",
  lineHeight: 1.6,
};

const buttonWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "0.9rem",
  flexWrap: "wrap",
  alignItems: "center",
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
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const smallGreenButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.45rem",
  padding: "0.68rem 1rem",
  fontSize: "0.92rem",
  backgroundColor: "#25D366",
  color: "#fff",
  borderRadius: "10px",
  textDecoration: "none",
  boxShadow: "0 10px 22px rgba(37,211,102,0.2)",
  fontWeight: 800,
  whiteSpace: "nowrap",
};

const pillWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "0.6rem",
  flexWrap: "wrap",
  margin: "1.2rem 0 1.6rem",
};

const pillStyle = {
  padding: "0.35rem 0.7rem",
  borderRadius: "999px",
  border: "1px solid rgba(0,0,0,0.08)",
  background: "rgba(255,255,255,0.75)",
  fontWeight: 700,
  color: "#0b1c4d",
  fontSize: "0.85rem",
};

const heroImage = {
  width: "100%",
  maxWidth: "900px",
  borderRadius: "18px",
  boxShadow: "0 20px 45px rgba(11,28,77,0.14)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const requestBox = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "1.4rem",
  borderRadius: "16px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
  textAlign: "left",
};

const requestText = {
  color: "#555",
  marginBottom: "1.2rem",
  lineHeight: 1.6,
};

const requestGrid = {
  display: "flex",
  gap: "0.8rem",
  flexWrap: "wrap",
  alignItems: "center",
};

const sectionWhite = {
  padding: "4rem 0",
  textAlign: "center",
  backgroundColor: "#fff",
};

const sectionSoft = {
  padding: "4rem 0",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
};

const sectionHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 800,
  color: "#0b1c4d",
  marginBottom: "1rem",
};

const sectionText = {
  color: "#555",
  maxWidth: "760px",
  margin: "0 auto 3rem",
  lineHeight: 1.6,
};

const cardFlex = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
};

const hoverCard = (isHover, textAlign = "center") => ({
  width: "320px",
  padding: "2rem",
  borderRadius: "18px",
  backgroundColor: "#fff",
  boxShadow: isHover
    ? "0 24px 45px rgba(11,28,77,0.18)"
    : "0 10px 24px rgba(0,0,0,0.08)",
  transform: isHover
    ? "translateY(-10px) scale(1.02)"
    : "translateY(0) scale(1)",
  transition: "transform 0.28s ease, box-shadow 0.28s ease",
  cursor: "pointer",
  textAlign,
});

const iconStyle = {
  fontSize: "2rem",
  color: "#ff7a00",
  marginBottom: "1rem",
};

const cardTitle = {
  fontFamily: "Poppins, sans-serif",
  color: "#0b1c4d",
  fontWeight: 800,
  marginBottom: "0.7rem",
};

const cardText = {
  color: "#555",
  lineHeight: 1.6,
};

const textLink = {
  display: "inline-block",
  marginTop: "1.2rem",
  color: "#ff7a00",
  fontWeight: 800,
  textDecoration: "none",
};

const planHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const popularTag = {
  padding: "0.25rem 0.6rem",
  borderRadius: "999px",
  background: "rgba(255,122,0,0.12)",
  color: "#ff7a00",
  fontWeight: 800,
  fontSize: "0.85rem",
};

const priceStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 900,
  fontSize: "1.8rem",
  marginTop: "0.7rem",
};

const perkStyle = {
  color: "#555",
  marginBottom: "0.35rem",
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

const containerCenter = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
  textAlign: "center",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1rem",
};

const gridCard = {
  padding: "1.2rem",
  borderRadius: "14px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  color: "#ff7a00",
  fontWeight: 800,
};

const techCard = {
  padding: "1.2rem",
  borderRadius: "14px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  textAlign: "left",
};

const routerBox = {
  maxWidth: "950px",
  margin: "0 auto",
  padding: "1.6rem",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.95)",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const routerImage = {
  width: "100%",
  maxWidth: "520px",
  borderRadius: "16px",
  boxShadow: "0 16px 32px rgba(0,0,0,0.14)",
  marginBottom: "1.4rem",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const stepCircle = {
  width: "70px",
  height: "70px",
  lineHeight: "70px",
  borderRadius: "50%",
  backgroundColor: "#0b1c4d",
  color: "#ff7a00",
  fontSize: "2.5rem",
  fontWeight: "700",
  margin: "0 auto 15px",
  fontFamily: "Poppins, sans-serif",
};

const areaWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "0.7rem",
  flexWrap: "wrap",
};

const areaPill = {
  padding: "0.55rem 0.9rem",
  borderRadius: "999px",
  background: "rgba(245,124,0,0.12)",
  color: "#0b1c4d",
  fontWeight: 800,
};

const faqWrap = {
  width: "min(900px, 92%)",
  margin: "0 auto",
  textAlign: "left",
};

const faqItem = (isOpen) => ({
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "14px",
  padding: "1.1rem 1.2rem",
  marginBottom: "0.9rem",
  boxShadow: isOpen
    ? "0 18px 35px rgba(0,0,0,0.08)"
    : "0 8px 18px rgba(0,0,0,0.05)",
  transition: "all 0.25s ease",
  cursor: "pointer",
});

const faqHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
};

const faqQuestion = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 800,
  color: "#0b1c4d",
  fontSize: "1.05rem",
};

const faqIcon = (isOpen) => ({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  background: "rgba(245,124,0,0.12)",
  color: "#ff7a00",
  fontWeight: 900,
  flex: "0 0 auto",
  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
});

const faqAnswerWrap = (isOpen) => ({
  maxHeight: isOpen ? "220px" : "0px",
  overflow: "hidden",
  transition: "max-height 0.25s ease",
});

const faqAnswer = {
  color: "#555",
  lineHeight: 1.7,
  marginTop: "0.8rem",
  marginBottom: 0,
};

const finalCta = {
  padding: "4rem 0",
  textAlign: "center",
  backgroundColor: "#fff",
};

const finalText = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "2rem",
};

const infoBox = {
  flex: "1 1 220px",
  padding: "0.9rem",
  borderRadius: "14px",
  background: "#f8f9fa",
  border: "1px solid rgba(0,0,0,0.05)",
};

const infoTitle = {
  fontWeight: 800,
  color: "#0b1c4d",
};

const smallHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 800,
  color: "#0b1c4d",
  marginBottom: "0.6rem",
};

const orangeServiceHeading = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 800,
  color: "#ff7a00",
  marginBottom: "0.6rem",
};

const cssAnimations = `
  @keyframes lintechFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
  }

  @keyframes lintechBlink {
    0% { transform: translateY(0) scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
    70% { transform: translateY(-3px) scale(1.04); box-shadow: 0 0 0 16px rgba(37,211,102,0); }
    100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }

  .floating-whatsapp {
    position: fixed;
    right: 22px;
    bottom: 22px;
    min-width: 138px;
    height: 54px;
    padding: 0 16px;
    border-radius: 999px;
    background: #25D366;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    font-size: 1rem;
    font-weight: 800;
    text-decoration: none;
    z-index: 9999;
    animation: lintechBlink 1.8s infinite;
    box-shadow: 0 12px 28px rgba(37,211,102,0.35);
    border: 2px solid #fff;
  }

  .floating-whatsapp i {
    font-size: 1.65rem;
  }

  .floating-whatsapp:hover {
    background: #20bd5a;
    transform: translateY(-2px);
  }

  .floating-whatsapp-text {
    font-family: Poppins, sans-serif;
  }

  @media (max-width: 600px) {
    .floating-whatsapp {
      min-width: 58px;
      width: 58px;
      height: 58px;
      padding: 0;
      border-radius: 50%;
    }

    .floating-whatsapp-text {
      display: none;
    }
  }
`;

export default Home;
