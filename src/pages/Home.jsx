import { useEffect, useMemo, useState } from "react";

function Home() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  // Rotating word animation (always animating)
  const rotatingWords = useMemo(
    () => ["Blazing-Fast", "Reliable", "Affordable", "Unlimited", "Stable"],
    []
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

  const benefits = [
    {
      icon: "fa-bolt",
      title: "Lightning Fast Speeds",
      text: "Stream, game, and download without interruptions or buffering.",
    },
    {
      icon: "fa-shield-alt",
      title: "99.9% Uptime",
      text: "Reliable connection for studying, working, and entertainment.",
    },
    {
      icon: "fa-headset",
      title: "Local Support",
      text: "Quick, personalized support from our Juja-based team.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Check Coverage",
      text: "Confirm we serve your location in Juja or Kenyatta Road.",
    },
    {
      step: 2,
      title: "Contact Us",
      text: "Call or WhatsApp us to get a personalized quote.",
    },
    {
      step: 3,
      title: "Enjoy WiFi",
      text: "We install quickly so you can start enjoying fast internet.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Ksh 2,000",
      desc: "Perfect for students and single rooms.",
      perks: ["Smooth browsing", "Video calls", "Local support"],
      accent: "#ff7a00",
    },
    {
      name: "Home Plus",
      price: "Ksh 3,000",
      desc: "Best for families and shared homes.",
      perks: ["Streaming", "Online classes", "More devices"],
      accent: "#0b1c4d",
      tag: "Popular",
    },
    {
      name: "Business",
      price: "Ksh 2,500",
      desc: "For shops, offices, and busy places.",
      perks: ["Priority support", "Better uptime", "Stable speeds"],
      accent: "#25D366",
    },
  ];

  const testimonials = [
    {
      name: "Kevin (Juja)",
      quote:
        "Installation was fast and the WiFi is stable even at night. Best service in Juja.",
      rating: 5,
    },
    {
      name: "Aisha (Kenyatta Road)",
      quote:
        "Support is quick. I call and I get help immediately. Very reliable.",
      rating: 5,
    },
    {
      name: "Brian (Juja)",
      quote:
        "Perfect for online classes and Netflix. No more buffering on my side.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "How long does installation take?",
      a: "Most installations are done the same day or next day depending on your exact location and line availability.",
    },
    {
      q: "How do I pay?",
      a: "Pay via M-Pesa Paybill. Payments are verified automatically and your internet is activated instantly (or within a few minutes).",
    },

    {
      q: "What if my internet becomes slow?",
      a: "We troubleshoot your router, signal, and line. If needed, our team visits to optimize the connection.",
    },
    {
      q: "Do you serve areas outside Juja & Kenyatta Road?",
      a: "We’re expanding.Call Us and we’ll confirm if we can connect you.",
    },
  ];

  const Stars = ({ count = 5 }) => (
    <span style={{ color: "#ffb703", letterSpacing: "2px" }}>
      {"★".repeat(count)}
    </span>
  );

  return (
    <div>
      {/* HERO (ONE COLUMN) */}
      <section
        style={{
          padding: "4rem 0",
          background:
            "radial-gradient(1200px 500px at 10% 10%, rgba(245,124,0,0.18), transparent 60%), radial-gradient(900px 450px at 90% 0%, rgba(11,28,77,0.14), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%)",
        }}
      >
        <div
          style={{
            width: "min(1100px, 92%)",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              padding: "2.4rem",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
              animation: "lintechFloat 4.5s ease-in-out infinite",
            }}
          >
            <div
              style={{
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
              }}
            >
              <span style={{ fontSize: "1rem" }}>⚡</span>
              Serving Juja & Kenyatta Road
            </div>

            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                color: "#0b1c4d",
                marginBottom: "1rem",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Experience{" "}
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
              WiFi <br />
              in Juja & Kenyatta Road
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#555",
                maxWidth: "760px",
                margin: "0 auto 1.6rem",
                lineHeight: 1.6,
              }}
            >
              Reliable, high-speed internet for students, homes, and businesses
              starting from just <strong>Ksh 2,000</strong>.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.9rem",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "1.2rem",
              }}
            >
              <a
                href="tel:071737114"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.85rem 1.4rem",
                  fontSize: "1.05rem",
                  backgroundColor: "#ff7a00",
                  color: "#fff",
                  borderRadius: "12px",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: "0 14px 28px rgba(245,124,0,0.25)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <i className="fas fa-phone"></i> Call for Quote
              </a>

              <a
                href="https://wa.me/254717371114"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.85rem 1.4rem",
                  fontSize: "1.05rem",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  borderRadius: "12px",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: "0 14px 28px rgba(37,211,102,0.22)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginBottom: "1.8rem",
              }}
            >
              {["Fast Installation", "Local Support", "Stable Speeds"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.35rem 0.7rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(0,0,0,0.08)",
                      background: "rgba(255,255,255,0.75)",
                      fontWeight: 700,
                      color: "#0b1c4d",
                      fontSize: "0.85rem",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div
              style={{
                maxWidth: "820px",
                margin: "0 auto",
                padding: "1.4rem",
                borderRadius: "16px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <h4
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  color: "#0b1c4d",
                  marginBottom: "0.6rem",
                }}
              >
                Quick Coverage Check
              </h4>
              <p
                style={{
                  color: "#555",
                  marginBottom: "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                Tell us your <strong>location</strong> and nearest landmark.
                We’ll confirm coverage and recommend the best plan.
              </p>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: "1 1 220px",
                    padding: "0.9rem",
                    borderRadius: "14px",
                    background: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#0b1c4d" }}>
                    📍 Areas
                  </div>
                  <div style={{ color: "#555" }}>Juja • Kenyatta Road</div>
                </div>

                <div
                  style={{
                    flex: "1 1 220px",
                    padding: "0.9rem",
                    borderRadius: "14px",
                    background: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#0b1c4d" }}>
                    Install
                  </div>
                  <div style={{ color: "#555" }}>Same-day / Next-day</div>
                </div>

                <a
                  href="/how-it-works"
                  style={{
                    flex: "1 1 220px",
                    display: "inline-block",
                    textAlign: "center",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    background: "#0b1c4d",
                    color: "#fff",
                    fontWeight: 800,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  See How It Works →
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes lintechFloat {
              0% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>
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
                    color: "#ff7a00",
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

      {/* Plans (same hover format) */}
      <section
        style={{
          padding: "4rem 0",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#0b1c4d",
            marginBottom: "1rem",
          }}
        >
          Choose a Plan That Fits
        </h2>
        <p
          style={{
            color: "#555",
            maxWidth: "760px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          Simple pricing. Stable speeds. Great support. Need a custom setup?
          Call or WhatsApp us.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {plans.map((p, i) => {
            const isHover = hoveredPlan === i;
            return (
              <div
                key={p.name}
                onMouseEnter={() => setHoveredPlan(i)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  width: "320px",
                  padding: "2rem",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: isHover
                    ? "0 20px 30px rgba(0,0,0,0.2)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  transform: isHover ? "translateY(-10px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "left",
                  border: p.tag
                    ? "2px solid rgba(255,122,0,0.35)"
                    : "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#0b1c4d",
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    {p.name}
                  </h5>
                  {p.tag && (
                    <span
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: "999px",
                        background: "rgba(255,122,0,0.12)",
                        color: "#ff7a00",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    color: p.accent,
                    marginTop: "0.7rem",
                  }}
                >
                  {p.price}
                </div>

                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.6,
                    marginTop: "0.6rem",
                  }}
                >
                  {p.desc}
                </p>

                <div style={{ marginTop: "1rem" }}>
                  {p.perks.map((perk) => (
                    <div
                      key={perk}
                      style={{ color: "#555", marginBottom: "0.35rem" }}
                    >
                      {perk}
                    </div>
                  ))}
                </div>

                <a
                  href="tel:071737114"
                  style={{
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
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "brightness(0.95)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "brightness(1)")
                  }
                >
                  Get This Plan
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Steps */}
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

      {/* Customer Feedback */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#0b1c4d",
            marginBottom: "1rem",
          }}
        >
          Customer Feedback
        </h2>

        <p
          style={{
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          Real words from customers in Juja and Kenyatta Road who use Lintech
          WiFi daily.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {testimonials.map((t, i) => {
            const isHover = hoveredTestimonial === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredTestimonial(i)}
                onMouseLeave={() => setHoveredTestimonial(null)}
                style={{
                  width: "320px",
                  padding: "2rem",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: isHover
                    ? "0 20px 30px rgba(0,0,0,0.2)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  transform: isHover ? "translateY(-10px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ marginBottom: "0.8rem" }}>
                  <Stars count={t.rating} />
                </div>
                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.6,
                    marginBottom: "1.2rem",
                  }}
                >
                  “{t.quote}”
                </p>
                <div
                  style={{
                    fontWeight: 800,
                    color: "#0b1c4d",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {t.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ (inline-style friendly) */}
      <section
        style={{
          padding: "4rem 0",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#0b1c4d",
            marginBottom: "1rem",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            color: "#555",
            maxWidth: "760px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          Quick answers before you call or WhatsApp us.
        </p>

        <div
          style={{
            width: "min(900px, 92%)",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                style={{
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
                }}
                onClick={() => setOpenFaq(isOpen ? -1 : idx)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 800,
                      color: "#0b1c4d",
                      fontSize: "1.05rem",
                    }}
                  >
                    {item.q}
                  </div>

                  <div
                    style={{
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
                    }}
                  >
                    +
                  </div>
                </div>

                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.25s ease",
                  }}
                >
                  <p
                    style={{
                      color: "#555",
                      lineHeight: 1.7,
                      marginTop: "0.8rem",
                      marginBottom: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <a
            href="tel:071737114"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 1.5rem",
              fontSize: "1.1rem",
              backgroundColor: "#ff7a00",
              color: "#fff",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <i className="fas fa-phone"></i> Talk to Us Now
          </a>
        </div>
      </section>

      {/* Final CTA */}
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
