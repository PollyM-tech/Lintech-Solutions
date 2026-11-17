import { networkingServices, techServices } from "../data/services";
import InquiryForm from "../components/InquiryForm";
import { googleProfileUrl, planInquiryUrl, whatsappUrl } from "../lib/contact";

import heroImg from "../assets/optimized/hero-800.webp";
import heroSmall from "../assets/optimized/hero-480.webp";
import routerProductImg from "../assets/optimized/router-960.webp";
import routerSmall from "../assets/optimized/router-480.webp";
import aboutImg from "../assets/optimized/about-960.webp";
import aboutSmall from "../assets/optimized/about-480.webp";
import FloatingContact from "../components/FloatingContact";

const Home = () => {

  const internetPhone = "0717371134";
  const techPhone = "0714660729";

  const whatsappMessage =
    "Hello Lintech Telecom, I would like to check coverage and request a service. Please assist me.";

  const whatsappLink = whatsappUrl(whatsappMessage);

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


  const heroEyebrowClass =
    "mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A84300] sm:text-[11px]";

  const heroTitleClass =
    "mb-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0B1C4D] sm:text-4xl lg:text-5xl";

  const eyebrowClass =
    "mb-3 inline-flex rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A84300] sm:text-[11px]";

  const sectionHeaderClass = "mx-auto mb-9 max-w-3xl text-center";

  const sectionTitleClass =
    "text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-[#0B1C4D] sm:text-3xl lg:text-4xl";

  const sectionTextClass = "mt-4 text-sm leading-7 text-slate-600 sm:text-base";

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#C95000] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A84300]";

  const secondaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1C4D]/20 bg-white px-6 py-3 text-sm font-bold text-[#0B1C4D] transition-colors hover:border-[#FF7A00]/45 hover:text-[#A84300]";

  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300";

  return (
    <main id="main-content" tabIndex={-1} className="relative overflow-hidden bg-white pt-[74px] font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-slate-700 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.018] [background-image:linear-gradient(#0B1C4D_1px,transparent_1px),linear-gradient(90deg,#0B1C4D_1px,transparent_1px)] [background-size:72px_72px]" />

      <FloatingContact href={whatsappLink} />

      <section
        id="home"
        tabIndex={-1}
        className="relative z-10 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.11),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fbfdff_50%,#eef4ff_100%)] px-6 py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-center lg:text-left">
            <p className={heroEyebrowClass}>Welcome to Lintech</p>

            <h1 className={heroTitleClass}>
              Internet, WiFi & CCTV in Nairobi & Kiambu
            </h1>

            <p className="mb-5 text-lg font-semibold text-[#0B1C4D]">Stay connected with Lintech Telecom.</p>

            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
              Lintech Telecom connects homes and businesses across Nairobi and
              selected Kiambu areas. We install and support internet, WiFi,
              networking, and CCTV, and build websites, software systems,
              cybersecurity solutions, and AI automation.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#coverage" className={primaryButtonClass}>
                Check your coverage
                <span aria-hidden="true">→</span>
              </a>

              <a href="#internet" className={secondaryButtonClass}>
                View Internet Plans
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#EEF4FF] p-4 shadow-[0_25px_70px_rgba(11,28,77,0.12)]">
              <img
                src={heroImg}
                srcSet={`${heroSmall} 480w, ${heroImg} 800w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                width="800"
                height="533"
                alt="Lintech Telecom internet, networking, and digital systems"
                fetchPriority="high"
                className="relative z-10 w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="internet"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
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
                className={`relative flex flex-col ${cardClass} ${
                  plan.popular ? "ring-4 ring-[#FF7A00]/10" : ""
                }`}
              >
                {plan.popular && (
                  <span className="mb-4 self-start rounded-full bg-[#FF7A00] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    Popular
                  </span>
                )}

                <h3 className="mb-2 text-xl font-bold text-[#0B1C4D]">
                  {plan.name}
                </h3>
                <p className="mb-4 text-2xl font-bold text-[#A84300]">
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
                      <span aria-hidden="true" className="text-[#A84300]">✓</span>
                      {perk}
                    </p>
                  ))}
                </div>

                <p className="mb-6 mt-5 text-xs leading-5 text-slate-600">Confirm speed, billing period, installation, router costs, and limits before choosing.</p>
                <a href={planInquiryUrl(plan.name)} target="_blank" rel="noreferrer" data-track="plan_select" data-plan={plan.name} className={`mt-auto ${primaryButtonClass}`} aria-label={`Ask about ${plan.name} on WhatsApp`}>
                  Ask about this plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="coverage"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
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
              <a
                key={area}
                href={whatsappUrl(`Hello Lintech Telecom, please check internet coverage in ${area}. I can share my exact location.`)}
                target="_blank" rel="noreferrer" data-track="coverage_inquiry"
                className="group flex items-center gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-5 transition-colors hover:border-[#C95000]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FFF1E6] text-[#A84300]">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <p className="m-0 text-base font-bold text-[#0B1C4D]">
                  {area}<span className="mt-1 block text-xs font-normal text-slate-600">Check availability →</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" tabIndex={-1} className="relative z-10 bg-[#F5F8FF] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className={sectionHeaderClass}><p className={eyebrowClass}>Getting connected</p><h2 className={sectionTitleClass}>A clear path from inquiry to installation</h2></div>
          <ol className="grid gap-6 md:grid-cols-3">
            {[
              ["Share your location", "Send your area and nearest landmark so we can check availability at your property."],
              ["Confirm your requirements", "Discuss the right service, equipment, full costs, and a suitable installation time with our team."],
              ["Arrange your setup", "Contact our team to plan installation and ask about connection testing, router setup, and support."],
            ].map(([title, text], index) => <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="mb-4 inline-grid h-9 w-9 place-items-center rounded-full bg-[#0B1C4D] text-sm font-bold text-white">{index + 1}</span><h3 className="text-lg font-bold text-[#0B1C4D]">{title}</h3><p className={sectionTextClass}>{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="reviews" tabIndex={-1} className="relative z-10 bg-white px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-2xl"><p className={eyebrowClass}>Find us on Google</p><h2 className={sectionTitleClass}>Get to know Lintech Telecom</h2><p className={sectionTextClass}>Find our business on Google Maps to view the listing and any available customer reviews. Already a customer? Your feedback helps others choose.</p></div>
          <a href={googleProfileUrl} target="_blank" rel="noreferrer" data-track="google_profile_click" className={`${secondaryButtonClass} shrink-0`}>Find us on Google Maps ↗</a>
        </div>
      </section>

      <section
        id="services"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
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
                <h3 className="mb-2 text-xl font-bold tracking-[-0.025em] text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.04em] text-[#A84300]">
                  {service.label}
                </p>
                <p className="text-sm leading-7 text-slate-500">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#A84300]">
                  {service.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="wifi-networking"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
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
            {networkingServices.slice(0, 3).map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="mb-3 text-xl font-bold tracking-[-0.025em] text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <a href="/services/networking/" className={`mt-6 ${secondaryButtonClass}`}>View all networking services →</a>
        </div>
      </section>

      <section
        id="router-setup"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[1.5rem] bg-white p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] ring-1 ring-slate-200 lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F5F8FF] p-4">
            <img
              src={routerProductImg}
              srcSet={`${routerSmall} 480w, ${routerProductImg} 960w`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              width="960"
              height="640"
              alt="WiFi router sold and configured by Lintech Telecom"
              loading="lazy"
              decoding="async"
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
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
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
                <h3 className="mb-3 text-xl font-bold text-[#0B1C4D]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <a href="/services/digital/" className={`mt-6 ${secondaryButtonClass}`}>Explore digital services →</a>
        </div>
      </section>

      <section
        id="about"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 sm:py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[1.5rem] bg-[#F5F8FF] p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-[0_18px_45px_rgba(11,28,77,0.08)]">
            <img
              src={aboutImg}
              srcSet={`${aboutSmall} 480w, ${aboutImg} 960w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              width="960"
              height="640"
              alt="Lintech internet, networking and technology solutions"
              loading="lazy"
              decoding="async"
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
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FFF1E6] text-[#A84300]">
                    <span aria-hidden="true">✓</span>
                  </span>
                  <p className="m-0 text-sm font-bold text-[#0B1C4D]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" tabIndex={-1} className="relative z-10 bg-[#F5F8FF] px-6 py-14">
        <div className="mx-auto max-w-3xl"><div className={sectionHeaderClass}><p className={eyebrowClass}>Common questions</p><h2 className={sectionTitleClass}>Before you get connected</h2></div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
            {[
              ["Is internet available at my property?", "We serve selected areas in Nairobi and Kiambu. Choose your area above or send your exact location and nearest landmark on WhatsApp. Availability needs confirmation for your property."],
              ["What does the advertised plan price include?", "Ask our team to confirm the plan speed, billing period, installation charge, router inclusion, and any usage limits before making payment."],
              ["Can you help with a router or weak WiFi?", "Yes. Lintech offers router configuration, WiFi setup, and network troubleshooting. Tell us about your equipment, property, and connection problem so we can discuss the right service."],
              ["How do I confirm payment details?", "Contact Lintech directly using the phone numbers on this site to confirm your quotation and payment instructions."],
              ["How can I get support?", "Call 0717 371 134 for internet or 0714 660 729 for technology services, or message us on WhatsApp. Our listed support hours are 8:00 AM–8:00 PM, seven days a week."],
            ].map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer text-base font-semibold text-[#0B1C4D]">{question}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section
        id="contact"
        tabIndex={-1}
        className="relative z-10 bg-white px-6 py-12 pb-16 sm:py-14 sm:pb-20"
      >
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#0B1C4D] p-6 text-white shadow-[0_24px_70px_rgba(11,28,77,0.18)] lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FDBA74] sm:text-[11px]">
              Contact Lintech
            </p>

            <h2 className="text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
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
              <h3 className="mb-3 text-lg font-bold text-white">
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
              <h3 className="mb-3 text-lg font-bold text-white">
                Tech Services
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70">
                For websites, software systems, cybersecurity, and AI
                automation.
              </p>
              <a
                href={`tel:${techPhone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                Call {techPhone}
              </a>
            </div>

            <div className="rounded-[1.2rem] bg-white/10 p-5 text-center">
              <h3 className="mb-3 text-lg font-bold text-white">
                WhatsApp Support
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70">
                Send your location, service needed, and nearest landmark.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#14532D]"
              >
                Chat on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <InquiryForm />

        </div>
      </section>
    </main>
  );
};

export default Home;
