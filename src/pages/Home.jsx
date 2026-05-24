import { useEffect, useMemo, useState } from "react";

import heroImg from "../assets/student browsing with laptop and router.png";
import routerProductImg from "../assets/router image.png";
import aboutImg from "../assets/laptop-plus-router.png";
import whatsappIcon from "../assets/whatsapp.png";

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const whatsappMessage =
    "Hello Lintech Telecom, I would like to check coverage and request a service. Please assist me.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const rotatingWords = useMemo(
    () => ["Connected", "Secure", "Automated", "Reliable", "Digital"],
    [],
  );

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
      title: "Internet Services",
      label: "Stable connectivity",
      description:
        "Reliable internet solutions for homes, apartments, shops, offices, and organizations across Nairobi and selected Kiambu areas.",
      href: "#internet",
      cta: "Get Connected",
    },
    {
      title: "WiFi, CCTV & Networking",
      label: "Clean installation",
      description:
        "Professional WiFi setup, CCTV installation, network cabling, router configuration, and troubleshooting.",
      href: "#wifi-networking",
      cta: "Explore Networking",
    },
    {
      title: "Digital & Tech Services",
      label: "Business-ready systems",
      description:
        "Website development, software systems, cybersecurity, and AI automation for growing businesses.",
      href: "#tech-services",
      cta: "View Digital Services",
    },
  ];

  const internetPlans = [
    {
      name: "Home Basic",
      price: "Ksh 2,000",
      description:
        "Best for light browsing, online classes, and smaller homes.",
      perks: ["Smooth browsing", "Online classes", "Responsive support"],
    },
    {
      name: "Home Plus",
      price: "Ksh 3,000",
      description:
        "Perfect for families, streaming, work, and multiple devices.",
      perks: ["Streaming", "Video calls", "More devices"],
      popular: true,
    },
    {
      name: "Business Pro",
      price: "Custom",
      description:
        "Stable connectivity for offices, shops, and business operations.",
      perks: ["Site assessment", "Business setup", "Reliable connectivity"],
    },
  ];

  const networkingServices = [
    {
      title: "WiFi Installation",
      text: "Home and business WiFi setup for better coverage, stronger signal, and stable daily use.",
    },
    {
      title: "Router Configuration",
      text: "Router setup, password security, device connection support, and coverage optimization.",
    },
    {
      title: "CCTV Installation",
      text: "Professional CCTV setup for homes, shops, offices, apartments, and business premises.",
    },
    {
      title: "Network Cabling",
      text: "Clean structured cabling for offices, buildings, shops, and business networks.",
    },
    {
      title: "Network Troubleshooting",
      text: "Support for slow internet, weak WiFi, connection drops, router issues, and network faults.",
    },
    {
      title: "Business Networking",
      text: "Reliable network planning and setup for businesses that need stable connectivity.",
    },
  ];

  const techServices = [
    {
      title: "Website Development",
      text: "Professional websites, landing pages, company profiles, and business platforms.",
    },
    {
      title: "Custom Software Systems",
      text: "Business systems for schools, clinics, shops, SMEs, and organizations.",
    },
    {
      title: "Cybersecurity",
      text: "Security support for websites, networks, business systems, and digital platforms.",
    },
    {
      title: "AI Automation",
      text: "AI workflows, chatbots, WhatsApp automation, and smart tools for productivity.",
    },
  ];

  const coverageAreas = [
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

  const detailsToSend = [
    { icon: "fa-user", label: "Your name" },
    { icon: "fa-location-dot", label: "Exact location" },
    { icon: "fa-map", label: "Nearest landmark" },
    { icon: "fa-briefcase", label: "Service needed" },
    { icon: "fa-clock", label: "Preferred time" },
    { icon: "fa-building", label: "Home or business" },
  ];

  const heroEyebrowClass =
    "mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[11px]";

  const heroTitleClass =
    "mb-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl";

  const eyebrowClass =
    "mb-3 inline-flex rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[11px]";

  const sectionHeaderClass = "mx-auto mb-9 max-w-3xl text-center";

  const sectionTitleClass =
    "text-2xl font-black leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl lg:text-4xl";

  const sectionTextClass = "mt-4 text-sm leading-7 text-slate-600 sm:text-base";

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]";

  const secondaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1C4D]/20 bg-white px-6 py-3 text-sm font-black text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/45 hover:text-[#FF7A00]";

  const cardClass =
    "rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/35 hover:shadow-[0_18px_45px_rgba(11,28,77,0.08)]";

  return (
    <main className="relative overflow-hidden bg-white pt-[74px] font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-slate-700 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.018] [background-image:linear-gradient(#0B1C4D_1px,transparent_1px),linear-gradient(90deg,#0B1C4D_1px,transparent_1px)] [background-size:72px_72px]" />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Lintech Telecom on WhatsApp"
        className="fixed bottom-6 right-6 z-[9999] grid h-16 w-16 place-items-center rounded-full bg-white p-1.5 shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="h-full w-full object-contain"
        />
      </a>

      <section
        id="home"
        className="relative z-10 scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.11),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fbfdff_50%,#eef4ff_100%)] px-6 py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-center lg:text-left">
            <p className={heroEyebrowClass}>Welcome to Lintech</p>

            <h1 className={heroTitleClass}>
              Stay{" "}
              <span
                className={`inline-block text-[#FF7A00] transition duration-200 ${
                  wordVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                {rotatingWords[wordIndex]}
              </span>
              <br />
              with Internet, CCTV, Networking & Digital Systems
            </h1>

            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
              Lintech Telecom installs, troubleshoots, and supports internet,
              WiFi, networking, CCTV, websites, software systems, cybersecurity,
              and AI automation.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#services" className={primaryButtonClass}>
                Explore Services
                <i className="fas fa-arrow-right" />
              </a>

              <a href="#internet" className={secondaryButtonClass}>
                View Internet Plans
                <i className="fas fa-arrow-down text-[#FF7A00]" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#EEF4FF] p-4 shadow-[0_25px_70px_rgba(11,28,77,0.12)]">
              <img
                src={heroImg}
                alt="Lintech Telecom internet, networking, and digital systems"
                className="relative z-10 w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>What we do</p>
            <h2 className={sectionTitleClass}>Our Core Services</h2>
            <p className={sectionTextClass}>
              One company for internet, WiFi, CCTV, networking, websites,
              software, cybersecurity, and AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {mainServices.map((service) => (
              <a key={service.title} href={service.href} className={cardClass}>
                <h3 className="mb-2 text-xl font-black tracking-[-0.025em] text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.04em] text-[#FF7A00]">
                  {service.label}
                </p>
                <p className="text-sm leading-7 text-slate-500">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#FF7A00]">
                  {service.cta}
                  <i className="fas fa-arrow-right" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="internet"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>Internet packages</p>
            <h2 className={sectionTitleClass}>
              Fast & Reliable Internet Packages
            </h2>
            <p className={sectionTextClass}>
              Get stable fiber internet for homes, apartments, shops, offices,
              and small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {internetPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative ${cardClass} ${
                  plan.popular ? "ring-4 ring-[#FF7A00]/10" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#FF7A00] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-white">
                    Popular
                  </span>
                )}

                <h3 className="mb-2 text-xl font-black text-[#0B1C4D]">
                  {plan.name}
                </h3>
                <p className="mb-4 text-2xl font-black text-[#FF7A00]">
                  {plan.price}
                </p>
                <p className="text-sm leading-7 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.perks.map((perk) => (
                    <p
                      key={perk}
                      className="flex items-center gap-3 text-sm font-bold text-slate-700"
                    >
                      <i className="fas fa-check-circle text-[#FF7A00]" />
                      {perk}
                    </p>
                  ))}
                </div>

                <a href="#contact" className={`mt-7 ${primaryButtonClass}`}>
                  Request Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="wifi-networking"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>WiFi, CCTV & Network Installation</p>
            <h2 className={sectionTitleClass}>
              WiFi, CCTV & Network Installation in Nairobi and Kiambu
            </h2>
            <p className={sectionTextClass}>
              Professional home and business WiFi setup, CCTV installation,
              structured network cabling, router configuration, and network
              troubleshooting.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {networkingServices.map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="mb-3 text-xl font-black tracking-[-0.025em] text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="router-setup"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[1.5rem] bg-white p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] ring-1 ring-slate-200 lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F5F8FF] p-4">
            <img
              src={routerProductImg}
              alt="WiFi router sold and configured by Lintech Telecom"
              className="relative w-full rounded-[1.2rem] object-cover"
            />
          </div>

          <div>
            <p className={eyebrowClass}>Router sales & setup</p>
            <h2 className={sectionTitleClass}>
              Router Setup for Better Coverage
            </h2>
            <p className={sectionTextClass}>
              Get quality routers from Lintech and have them configured for
              better coverage, stronger passwords, and more stable device
              connections.
            </p>

            <a href="#contact" className={`mt-6 ${primaryButtonClass}`}>
              Request Router Setup
            </a>
          </div>
        </div>
      </section>

      <section
        id="tech-services"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>Digital & Technology Services</p>
            <h2 className={sectionTitleClass}>
              Smart Digital & Technology Services
            </h2>
            <p className={sectionTextClass}>
              Lintech helps businesses grow with websites, custom software
              systems, cybersecurity, and AI automation services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {techServices.map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="mb-3 text-xl font-black text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="coverage"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>Coverage Areas</p>
            <h2 className={sectionTitleClass}>
              Internet & Tech Service Coverage
            </h2>
            <p className={sectionTextClass}>
              Lintech provides internet, WiFi installation, CCTV, and network
              cabling across selected areas in Nairobi and Kiambu. Send your
              exact location to confirm availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coverageAreas.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/35"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FFF1E6] text-[#FF7A00]">
                  <i className="fas fa-location-dot" />
                </span>
                <p className="m-0 text-base font-black text-[#0B1C4D]">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[1.5rem] bg-[#F5F8FF] p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-[0_18px_45px_rgba(11,28,77,0.08)]">
            <img
              src={aboutImg}
              alt="Lintech internet, networking and technology solutions"
              className="h-full min-h-[320px] w-full rounded-[1.2rem] object-cover"
            />
          </div>

          <div>
            <p className={eyebrowClass}>About Lintech</p>
            <h2 className={sectionTitleClass}>
              Connecting Homes, Businesses and Modern Workflows
            </h2>

            <p className={sectionTextClass}>
              Lintech is an internet, networking, and technology solutions
              company serving Nairobi and Kiambu areas with reliable
              connectivity, professional installations, and smart digital
              services.
            </p>

            <p className={sectionTextClass}>
              We started with connectivity, but our services have grown beyond
              internet alone. Today, Lintech supports customers with complete
              networking solutions and digital services such as website
              development, software development, cybersecurity, and AI
              automation.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Reliable internet solutions",
                "Clean WiFi, CCTV and network installation",
                "Fast and friendly customer support",
                "Digital services for modern organizations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(11,28,77,0.04)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FFF1E6] text-[#FF7A00]">
                    <i className="fas fa-check" />
                  </span>
                  <p className="m-0 text-sm font-black text-[#0B1C4D]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 scroll-mt-24 bg-white px-6 py-12 pb-16 sm:py-14 sm:pb-20"
      >
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#0B1C4D] p-6 text-white shadow-[0_24px_70px_rgba(11,28,77,0.18)] lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[11px]">
              Contact Lintech
            </p>

            <h2 className="text-2xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
              Ready to request internet, networking or tech services?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Contact us for internet, WiFi installation, CCTV, network cabling,
              websites, software development, cybersecurity, and AI automation
              services across Nairobi and Kiambu areas.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-[1.2rem] bg-white/10 p-5 text-center">
              <h3 className="mb-3 text-lg font-black text-white">
                Internet Services
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70">
                For fiber internet, WiFi installation, routers, and connectivity
                support.
              </p>
              <a href={`tel:${internetPhone}`} className={primaryButtonClass}>
                Call {internetPhone}
              </a>
            </div>

            <div className="rounded-[1.2rem] bg-white/10 p-5 text-center">
              <h3 className="mb-3 text-lg font-black text-white">
                Tech Services
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70">
                For websites, software systems, cybersecurity, and AI
                automation.
              </p>
              <a
                href={`tel:${techPhone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Call {techPhone}
              </a>
            </div>

            <div className="rounded-[1.2rem] bg-white/10 p-5 text-center">
              <h3 className="mb-3 text-lg font-black text-white">
                WhatsApp Support
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70">
                Send your location, service needed, and nearest landmark.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#128C3A]"
              >
                Chat on WhatsApp
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-[1.2rem] bg-white p-5 text-[#0B1C4D]">
            <h3 className="mb-5 text-center text-xl font-black">
              What to Send for Fast Help
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {detailsToSend.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-xs font-black leading-5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
