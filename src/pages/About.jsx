import aboutImg from "../assets/laptop-plus-router.png";
import whatsappIcon from "../assets/whatsapp.png";

function About() {
  const whatsappNumber = "254717371134";

  const whatsappMessage =
    "Hello Lintech Telecom, I would like to learn more about your internet, networking, and technology services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const values = [
    {
      icon: "fa-wifi",
      title: "Reliable Connectivity",
      text: "We help homes and businesses stay connected through stable internet, clean WiFi setup, and dependable support.",
    },
    {
      icon: "fa-screwdriver-wrench",
      title: "Professional Installation",
      text: "From routers to CCTV and network cabling, we focus on neat work, correct setup, and long-term performance.",
    },
    {
      icon: "fa-laptop-code",
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

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-[#FF7A00] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00] hover:shadow-xl hover:shadow-orange-500/25 sm:px-7 sm:py-4";

  const secondaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-[1.1rem] border border-[#0B1C4D]/20 bg-white px-6 py-3.5 text-sm font-black text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A00]/45 hover:text-[#FF7A00] hover:shadow-xl hover:shadow-orange-500/10 sm:px-7 sm:py-4";

  const cardClass =
    "group rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF7A00]/35 hover:shadow-[0_22px_60px_rgba(255,122,0,0.12)] sm:p-7";

  const iconBoxClass =
    "mb-5 grid h-14 w-14 place-items-center rounded-[1.15rem] bg-[#FF7A00]/10 text-2xl text-[#FF7A00] transition group-hover:bg-[#FF7A00] group-hover:text-white";

  const eyebrowClass =
    "mb-3 inline-flex rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#FF7A00]";

  return (
    <main className="relative overflow-hidden bg-white font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-slate-700 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.022] [background-image:linear-gradient(#0B1C4D_1px,transparent_1px),linear-gradient(90deg,#0B1C4D_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Floating WhatsApp only */}
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

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[11px]">
              About Lintech
            </p>

            <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
              Connecting Homes,
              <br />
              Businesses &{" "}
              <span className="text-[#FF7A00]">Modern Workflows</span>
            </h1>

            <p className="mx-auto mb-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Lintech is an internet, networking, and technology solutions
              company serving Nairobi and Kiambu areas with reliable
              connectivity, professional installations, and smart digital
              services.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-2xl">
              {[
                ["fa-wifi", "Internet", "Solutions"],
                ["fa-network-wired", "Networking", "Setup"],
                ["fa-code", "Digital", "Systems"],
              ].map(([icon, title, label]) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-3 lg:justify-start"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF1E6] text-lg text-[#FF7A00]">
                    <i className={`fas ${icon}`} />
                  </span>
                  <span className="text-left text-sm font-black leading-tight text-[#0B1C4D]">
                    {title}
                    <br />
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#who-we-are" className={primaryButtonClass}>
                Who We Are
                <i className="fas fa-arrow-right" />
              </a>

              <a href="#promise" className={secondaryButtonClass}>
                Our Promise
                <i className="fas fa-arrow-down text-[#FF7A00]" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-[#0B1C4D]/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.35rem] bg-[#EEF4FF] p-4 shadow-[0_25px_70px_rgba(11,28,77,0.12)]">
              <div className="pointer-events-none absolute right-8 top-8 text-7xl text-[#FF7A00] opacity-90">
                <i className="fas fa-signal" />
              </div>
              <img
                src={aboutImg}
                alt="Lintech internet and technology solutions"
                className="relative z-10 h-full min-h-[360px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        id="who-we-are"
        className="relative z-10 bg-white px-6 py-14 sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#F5F8FF] p-6 shadow-[0_20px_60px_rgba(11,28,77,0.07)] lg:p-8">
            <p className={eyebrowClass}>Who we are</p>
            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
              Technology made easier, more reliable, and more useful.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Lintech provides internet, WiFi installation, CCTV systems,
                network cabling, and digital technology services for homes,
                apartments, offices, shops, schools, and growing businesses. Our
                goal is simple: to make technology easier, more reliable, and
                more useful for everyday people and organizations.
              </p>

              <p>
                We started with connectivity, but our services have grown beyond
                internet alone. Today, Lintech supports customers with complete
                networking solutions and modern digital services such as website
                development, software development, cybersecurity, and AI-powered
                automation.
              </p>

              <p>
                Whether you need a stable home connection, office networking,
                CCTV installation, or a digital solution for your business,
                Lintech focuses on clear communication, professional setup, and
                dependable support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className={eyebrowClass}>What we stand for</p>
            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
              Built on reliability, clean work, and smart solutions.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              The same values guide our internet installations, network setups,
              CCTV projects, websites, software systems, and automation work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {values.map((item) => (
              <div key={item.title} className={cardClass}>
                <div className={iconBoxClass}>
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3 className="mb-3 text-2xl font-black tracking-[-0.025em] text-[#0B1C4D]">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section
        id="promise"
        className="relative z-10 bg-white px-6 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5F8FF] p-6 shadow-[0_20px_60px_rgba(11,28,77,0.07)] lg:p-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className={eyebrowClass}>Our promise</p>
            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
              We do not just install and leave.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              We help you choose the right service, set it up properly, and
              support you when you need help.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(11,28,77,0.05)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFF1E6] text-[#FF7A00]">
                  <i className="fas fa-check" />
                </span>
                <p className="m-0 text-sm font-black leading-6 text-[#0B1C4D]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0B1C4D] p-6 text-center text-white shadow-[0_24px_70px_rgba(11,28,77,0.18)] lg:p-10">
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#FF7A00]">
            Need internet, networking or tech support?
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Contact Lintech and let us help you choose the right solution.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Reliable connectivity, clean installations, and smart digital
            systems for homes, businesses, and organizations.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className={primaryButtonClass}>
              Contact Lintech
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

export default About;
