import whatsappIcon from "../assets/whatsapp.png";

function Coverage() {
  const whatsappNumber = "254717371134";

  const whatsappMessage =
    "Hello Lintech Telecom, I would like to confirm coverage in my area.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

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
      step: "01",
      icon: "fa-location-dot",
      title: "Share Location",
      text: "Send your estate, building, road, or nearest landmark through our contact channels.",
    },
    {
      step: "02",
      icon: "fa-circle-check",
      title: "Confirm Availability",
      text: "We check whether Lintech services are available in your exact location.",
    },
    {
      step: "03",
      icon: "fa-lightbulb",
      title: "Recommend Solution",
      text: "We advise the best internet, WiFi, CCTV, networking, or tech service option.",
    },
    {
      step: "04",
      icon: "fa-calendar-check",
      title: "Schedule Service",
      text: "Once confirmed, we plan installation, setup, or service delivery at your location.",
    },
  ];

  const heroEyebrowClass =
    "mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[11px]";

  const heroTitleClass =
    "mx-auto mb-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl";

  const eyebrowClass =
    "mb-3 inline-flex rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[11px]";

  const sectionHeaderClass = "mx-auto mb-9 max-w-3xl text-center";

  const sectionTitleClass =
    "text-2xl font-black leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl lg:text-4xl";

  const sectionTextClass = "mt-4 text-base leading-8 text-slate-600 sm:text-lg";

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-[#FF7A00] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00] hover:shadow-xl hover:shadow-orange-500/25 sm:px-7 sm:py-4";

  const secondaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-[1.1rem] border border-[#0B1C4D]/20 bg-white px-6 py-3.5 text-sm font-black text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/45 hover:text-[#FF7A00] hover:shadow-xl hover:shadow-orange-500/10 sm:px-7 sm:py-4";

  const cardClass =
    "group rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF7A00]/35 hover:shadow-[0_22px_60px_rgba(255,122,0,0.12)] sm:p-7";

  const iconBoxClass =
    "mb-5 grid h-14 w-14 place-items-center rounded-[1.15rem] bg-[#FF7A00]/10 text-2xl text-[#FF7A00] transition group-hover:bg-[#FF7A00] group-hover:text-white";

  return (
    <main className="relative overflow-hidden bg-white font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-slate-700 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.022] [background-image:linear-gradient(#0B1C4D_1px,transparent_1px),linear-gradient(90deg,#0B1C4D_1px,transparent_1px)] [background-size:72px_72px]" />

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

      {/* Hero */}
      <section className="relative z-10 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.11),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fbfdff_50%,#eef4ff_100%)] px-6 pb-12 pt-10 sm:pt-12 lg:pb-14 lg:pt-14">
        <div className="pointer-events-none absolute -left-40 top-28 h-96 w-96 rounded-full bg-[#0B1C4D]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-[#FF7A00]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl text-center">
          <p className={heroEyebrowClass}>Coverage Areas</p>

          <h1 className={heroTitleClass}>
            Internet & Tech
            <br />
            <span className="text-[#FF7A00]">Service Coverage</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Lintech provides internet, WiFi installation, CCTV, and network
            cabling across selected areas in Nairobi and Kiambu counties. Our
            tech services, including websites, software development,
            cybersecurity, and AI automation, are available to clients
            worldwide.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#areas" className={primaryButtonClass}>
              View Coverage Areas
              <i className="fas fa-arrow-down" />
            </a>

            <a href="/contact" className={secondaryButtonClass}>
              Confirm My Location
              <i className="fas fa-location-dot text-[#FF7A00]" />
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section
        id="areas"
        className="relative z-10 bg-white px-6 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>Main coverage areas</p>
            <h2 className={sectionTitleClass}>Areas We Currently Serve</h2>
            <p className={sectionTextClass}>
              These are some of the key areas Lintech serves. If your exact
              estate or building is not listed, contact us and we will confirm
              availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/35 hover:shadow-[0_20px_50px_rgba(255,122,0,0.1)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FFF1E6] text-[#FF7A00] transition group-hover:bg-[#FF7A00] group-hover:text-white">
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

      {/* Services Available */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5F8FF] p-6 shadow-[0_20px_60px_rgba(11,28,77,0.07)] lg:p-8">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>Available services</p>
            <h2 className={sectionTitleClass}>Services Available by Area</h2>
            <p className={sectionTextClass}>
              Depending on your exact location, Lintech can provide internet,
              networking, security installation, and technology support
              services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-[#0B1C4D] shadow-[0_10px_30px_rgba(11,28,77,0.05)] transition hover:border-[#FF7A00]/35 hover:text-[#FF7A00]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}>
            <p className={eyebrowClass}>How to check coverage</p>
            <h2 className={sectionTitleClass}>
              Coverage Confirmation Is Quick
            </h2>
            <p className={sectionTextClass}>
              Share your location and our team will guide you on the available
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((item) => (
              <div key={item.step} className={cardClass}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className={iconBoxClass}>
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <span className="text-4xl font-black tracking-[-0.05em] text-[#0B1C4D]/10">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-black tracking-[-0.025em] text-[#0B1C4D]">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5F8FF] p-6 text-center shadow-[0_20px_60px_rgba(11,28,77,0.07)] lg:p-10">
          <p className={eyebrowClass}>Not sure if we cover your area?</p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
            Send us your location and we will confirm availability.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Share your nearest landmark, estate name, building name, or road. We
            will confirm availability and recommend the right service.
          </p>

          <a href="/contact" className={`mt-8 ${primaryButtonClass}`}>
            Contact Lintech
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0B1C4D] p-6 text-center text-white shadow-[0_24px_70px_rgba(11,28,77,0.18)] lg:p-10">
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[11px]">
            Ready to get connected?
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Confirm coverage and request internet, WiFi, CCTV, networking, or
            tech services.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Lintech helps homes and businesses choose the right solution based
            on their location, needs, and budget.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className={primaryButtonClass}>
              Request Service
              <i className="fas fa-arrow-right" />
            </a>

            <a
              href="/internet"
              className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:px-7 sm:py-4"
            >
              View Internet Plans
              <i className="fas fa-wifi text-[#FF7A00]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Coverage;
