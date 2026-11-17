import logo from "../assets/optimized/logo-128.webp";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B1C4D] text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#FF7A00,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <a
                href="/#home"
                className="grid h-12 w-12 place-items-center rounded-full bg-white p-1.5"
              >
                <img
                  src={logo}
                  width="1024"
                  height="1024"
                  alt="Lintech Telecom"
                  className="h-full w-full object-contain"
                />
              </a>

              <div>
                <h3 className="text-xl font-black">Lintech Telecom</h3>
                <p className="text-sm font-semibold text-white/60">
                  Internet • Networking • Tech
                </p>
              </div>
            </div>

            <p className="max-w-sm leading-7 text-white/70">
              Reliable internet, WiFi installation, CCTV, networking, and smart
              technology solutions for homes and businesses across Nairobi and
              Kiambu areas.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Internet", "Networking", "Tech Services"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-black text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              ["Home", "/#home"],
              ["Internet", "/#internet"],
              ["WiFi & Networking", "/#wifi-networking"],
              ["Tech Services", "/#tech-services"],
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              ["Coverage", "/#coverage"],
              ["About", "/#about"],
              ["Contact", "/#contact"],
              ["Router Setup", "/#router-setup"],
            ]}
          />

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">
              Contact
            </h4>

            <div className="space-y-3 text-sm leading-6 text-white/70">
              <p>
                Internet:{" "}
                <a
                  className="font-bold text-white hover:text-[#FF7A00]"
                  href="tel:0717371134"
                >
                  0717 371 134
                </a>
              </p>

              <p>
                Tech Services:{" "}
                <a
                  className="font-bold text-white hover:text-[#FF7A00]"
                  href="tel:0714660729"
                >
                  0714 660 729
                </a>
              </p>

              <p>Hours: 8:00 AM – 8:00 PM, 7 days</p>
              <p>Coverage: Nairobi & Kiambu areas</p>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex flex-col justify-between gap-3 text-sm text-white/60 md:flex-row md:items-center">
          <p>© {currentYear} Lintech Telecom. All rights reserved.</p>
          <p>Internet • Networking • CCTV • Tech Services</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">
        {title}
      </h4>

      <div className="flex flex-col gap-3">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-sm font-semibold text-white/70 transition hover:translate-x-1 hover:text-[#FF7A00]"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
