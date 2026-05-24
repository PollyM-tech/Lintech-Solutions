<section
  id="wifi-networking"
  className="relative z-10 bg-white px-6 py-12 sm:py-14"
>
  <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#F5F8FF] p-6 shadow-[0_16px_45px_rgba(11,28,77,0.06)] lg:p-8">
    <div className={sectionHeaderClass}>
      <p className={eyebrowClass}>WiFi, CCTV & Network Installation</p>
      <h2 className={sectionTitleClass}>
        WiFi, CCTV & Network Installation in Nairobi and Kiambu
      </h2>
      <p className={sectionTextClass}>
        Professional home and business WiFi setup, CCTV installation, structured
        network cabling, router configuration, and network troubleshooting.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
      {networkingServices.map((service) => (
        <div key={service.title} className={cardClass}>
          <h3 className="mb-3 text-xl font-black tracking-[-0.025em] text-[#0B1C4D]">
            {service.title}
          </h3>
          <p className="text-sm leading-7 text-slate-500">{service.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>;
