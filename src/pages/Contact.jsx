import whatsappIcon from "../assets/whatsapp.png";

function Contact() {
  const internetPhone = "0717371134";
  const techPhone = "0714660729";
  const whatsappNumber = "254717371134";

  const whatsappMessage =
    "Hello Lintech Telecom, I would like to request a service. Please assist me.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

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

  const detailsToSend = [
    { icon: "fa-user", label: "Your name" },
    { icon: "fa-location-dot", label: "Exact location" },
    { icon: "fa-map", label: "Nearest landmark" },
    { icon: "fa-briefcase", label: "Service needed" },
    { icon: "fa-clock", label: "Preferred installation time" },
    { icon: "fa-building", label: "Home or business setup" },
  ];

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00] hover:shadow-xl hover:shadow-orange-500/25";

  const navyButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1C4D] px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#07173f] hover:shadow-xl hover:shadow-blue-950/25";

  const outlineButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1C4D]/20 bg-white px-6 py-3 text-sm font-black text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/45 hover:text-[#FF7A00] hover:shadow-xl hover:shadow-orange-500/10";

  const whatsappButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#128C3A] hover:shadow-xl hover:shadow-green-500/25";

  return (
    <main className="relative overflow-hidden bg-white font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-slate-700 antialiased">
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

      <section className="relative z-10 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_55%,#f8fbff_100%)] px-6 pb-10 pt-10 sm:pt-12 lg:pt-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[11px]">
            Contact Lintech
          </p>

          <h1 className="mx-auto mb-4 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
            <span className="text-[#FF7A00]">Get in Touch</span> with Lintech
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Contact us for internet, WiFi installation, CCTV, network cabling,
            websites, software development, cyber security, and AI automation
            services across Nairobi and Kiambu areas.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 bg-white px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/35 hover:shadow-[0_20px_55px_rgba(255,122,0,0.1)] lg:p-8">
            <h3 className="mb-3 text-2xl font-black tracking-[-0.025em] text-[#0B1C4D]">
              Internet Services
            </h3>
            <p className="mb-6 max-w-sm leading-7 text-slate-600">
              For fiber internet, WiFi installation, routers, and connectivity
              support.
            </p>
            <a href={`tel:${internetPhone}`} className={primaryButtonClass}>
              <i className="fas fa-phone" />
              Call {internetPhone}
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/35 hover:shadow-[0_20px_55px_rgba(255,122,0,0.1)] lg:p-8">
            <h3 className="mb-3 text-2xl font-black tracking-[-0.025em] text-[#0B1C4D]">
              Tech Services
            </h3>
            <p className="mb-6 max-w-sm leading-7 text-slate-600">
              For websites, software systems, cybersecurity, and AI automation.
            </p>
            <a href={`tel:${techPhone}`} className={navyButtonClass}>
              <i className="fas fa-phone" />
              Call {techPhone}
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A]/35 hover:shadow-[0_20px_55px_rgba(22,163,74,0.12)] lg:p-8">
            <h3 className="mb-3 text-2xl font-black tracking-[-0.025em] text-[#0B1C4D]">
              WhatsApp Support
            </h3>
            <p className="mb-6 max-w-sm leading-7 text-slate-600">
              Send your location, service needed, and nearest landmark.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={whatsappButtonClass}
            >
              <i className="fab fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Service Request */}
      <section className="relative z-10 bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 text-center shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
          <h2 className="text-2xl font-black leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl">
            <span className="text-[#FF7A00]">What Service</span> Do You Need?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Select the service category that matches your request so our team
            can respond faster.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-black text-[#0B1C4D] shadow-[0_8px_24px_rgba(11,28,77,0.04)] transition hover:border-[#FF7A00]/35 hover:text-[#FF7A00]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details + Coverage */}
      <section className="relative z-10 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.7fr_0.55fr_0.55fr] lg:gap-6">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-[0_14px_40px_rgba(11,28,77,0.05)] lg:p-7">
            <h2 className="mb-6 text-xl font-black tracking-[-0.025em] text-[#0B1C4D] sm:text-2xl">
              <span className="text-[#FF7A00]">What to Send</span> for Fast Help
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {detailsToSend.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 border-slate-200 lg:border-r last:border-r-0"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF1E6] text-xl text-[#FF7A00]">
                    <i className={`fas ${item.icon}`} />
                  </span>
                  <p className="m-0 text-center text-xs font-bold leading-5 text-[#0B1C4D] sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-[0_14px_40px_rgba(11,28,77,0.05)] lg:p-7">
            <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#FFF1E6] text-2xl text-[#FF7A00]">
              <i className="fas fa-globe" />
            </span>
            <h3 className="mb-3 text-xl font-black text-[#0B1C4D]">Coverage</h3>
            <p className="m-0 leading-7 text-slate-600">
              Nairobi and Kiambu areas. Send your exact location to confirm
              availability.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-[0_14px_40px_rgba(11,28,77,0.05)] lg:p-7">
            <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#FFF1E6] text-2xl text-[#FF7A00]">
              <i className="fas fa-clock" />
            </span>
            <h3 className="mb-3 text-xl font-black text-[#0B1C4D]">
              Business Hours
            </h3>
            <p className="m-0 leading-7 text-slate-600">
              8:00 AM – 8:00 PM, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-white px-6 py-8 pb-14 sm:pb-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 text-center shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
          <h2 className="text-2xl font-black leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl">
            Ready to <span className="text-[#FF7A00]">Request a Service</span>{" "}
            or Make Payment?
          </h2>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={`tel:${internetPhone}`} className={primaryButtonClass}>
              <i className="fas fa-phone" />
              Internet: {internetPhone}
            </a>

            <a href={`tel:${techPhone}`} className={navyButtonClass}>
              <i className="fas fa-phone" />
              Tech: {techPhone}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={whatsappButtonClass}
            >
              <i className="fab fa-whatsapp" />
              WhatsApp
            </a>

            <a href="/how-it-works" className={outlineButtonClass}>
              <i className="fas fa-credit-card text-[#0B1C4D]" />
              Payment Steps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
