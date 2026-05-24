function TechServices() {
  const techPhone = "0714660729";

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
    [
      "01",
      "Consultation",
      "We listen to your business needs and understand the problem you want to solve.",
    ],
    [
      "02",
      "Planning",
      "We recommend the best digital solution, features, budget direction, and delivery approach.",
    ],
    [
      "03",
      "Development",
      "We design, build, configure, test, and prepare your solution for use.",
    ],
    [
      "04",
      "Support",
      "We provide guidance, updates, improvements, and support after delivery.",
    ],
  ];

  const eyebrowClass =
    "mb-3 inline-flex rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[11px]";

  const sectionTitleClass =
    "text-2xl font-black leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl lg:text-4xl";

  const sectionTextClass = "mt-4 text-sm leading-7 text-slate-600 sm:text-base";

  const cardClass =
    "rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(11,28,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(11,28,77,0.08)]";

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]";

  return (
    <main className="relative overflow-hidden bg-white text-slate-700">
      <section className="relative z-10 bg-[linear-gradient(135deg,#ffffff_0%,#fbfdff_50%,#eef4ff_100%)] px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[11px]">
            Digital & Technology Services
          </p>

          <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl">
            Smart Digital{" "}
            <span className="text-[#FF7A00]">& Technology Services</span>
          </h1>

          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Lintech helps businesses grow with professional websites, custom
            software systems, cybersecurity solutions, and AI automation
            services.
          </p>

          <a href={`tel:${techPhone}`} className={primaryButtonClass}>
            Call {techPhone}
            <i className="fas fa-phone" />
          </a>
        </div>
      </section>

      <section className="relative z-10 bg-white px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className={eyebrowClass}>Our tech services</p>
            <h2 className={sectionTitleClass}>Practical Digital Solutions</h2>
            <p className={sectionTextClass}>
              We build solutions for businesses that want to look professional,
              operate better, and use technology more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
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

      <section className="relative z-10 bg-white px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 text-center shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
          <p className={eyebrowClass}>Who we help</p>
          <h2 className={sectionTitleClass}>Built for Growing Businesses</h2>
          <p className={sectionTextClass}>
            Our digital solutions are ideal for businesses and organizations
            that want better visibility, smoother operations, and smarter
            workflows.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-[#0B1C4D] shadow-[0_8px_24px_rgba(11,28,77,0.04)]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className={eyebrowClass}>How we work</p>
            <h2 className={sectionTitleClass}>From Idea to Working Solution</h2>
            <p className={sectionTextClass}>
              We follow a simple process that helps you move from idea to
              working solution without confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([step, title, text]) => (
              <div key={step} className={cardClass}>
                <span className="mb-4 block text-3xl font-black text-[#0B1C4D]/10">
                  {step}
                </span>
                <h3 className="mb-3 text-xl font-black text-[#0B1C4D]">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechServices;
