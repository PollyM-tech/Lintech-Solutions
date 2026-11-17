import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const internetPhone = "0717371134";

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const linkClass =
    "relative inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-extrabold text-[#0B1C4D]/75 transition-all duration-300 hover:bg-[#0B1C4D]/5 hover:text-[#0B1C4D]";

  const serviceLinkClass =
    "group rounded-2xl p-4 no-underline transition hover:bg-[#F5F8FF] lg:hover:translate-x-1";

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(11,28,77,0.08)] backdrop-blur-2xl">
      <nav className="relative mx-auto flex min-h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="inline-flex items-center gap-3 no-underline"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white p-1.5 shadow-[0_10px_28px_rgba(11,28,77,0.12)] ring-1 ring-slate-200">
            <img
              src={logo}
              width="1024"
              height="1024"
              alt="Lintech Telecom"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-black tracking-[-0.03em] text-[#0B1C4D]">
              Lintech
            </span>
            <span className="block text-xs font-bold text-slate-500">
              Internet • Networking • Tech
            </span>
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition hover:bg-[#F5F8FF] lg:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-[#0B1C4D] transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-[#0B1C4D] transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-[#0B1C4D] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>

        <div
          className={`absolute left-4 right-4 top-[86px] rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/10 transition-all duration-300 lg:static lg:flex lg:items-center lg:gap-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <a href="#home" onClick={closeMenu} className={linkClass}>
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm font-extrabold transition-all duration-300 ${
                  servicesOpen
                    ? "bg-[#0B1C4D] text-white shadow-lg shadow-blue-950/10"
                    : "text-[#0B1C4D]/75 hover:bg-[#0B1C4D]/5 hover:text-[#0B1C4D]"
                }`}
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
              >
                Services
                <i
                  className={`fas fa-chevron-down text-xs transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="lg:absolute lg:left-0 lg:top-full lg:w-[340px]">
                  <div className="mt-0 grid gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-blue-950/12 lg:mt-2">
                    <a
                      href="#internet"
                      onClick={closeMenu}
                      className={serviceLinkClass}
                    >
                      <strong className="block text-sm font-black text-[#0B1C4D] group-hover:text-[#FF7A00]">
                        Internet
                      </strong>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                        Fiber packages for homes and businesses
                      </span>
                    </a>

                    <a
                      href="#wifi-networking"
                      onClick={closeMenu}
                      className={serviceLinkClass}
                    >
                      <strong className="block text-sm font-black text-[#0B1C4D] group-hover:text-[#FF7A00]">
                        WiFi, Routers & CCTV
                      </strong>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                        CCTV, cabling, routers, and WiFi setup
                      </span>
                    </a>

                    <a
                      href="#tech-services"
                      onClick={closeMenu}
                      className={serviceLinkClass}
                    >
                      <strong className="block text-sm font-black text-[#0B1C4D] group-hover:text-[#FF7A00]">
                        Tech Services
                      </strong>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                        Websites, software, cybersecurity, and AI
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#coverage" onClick={closeMenu} className={linkClass}>
              Coverage
            </a>

            <a href="#about" onClick={closeMenu} className={linkClass}>
              About
            </a>

            <a href="#contact" onClick={closeMenu} className={linkClass}>
              Contact
            </a>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:mt-0 lg:items-center">
            <a
              href={`tel:${internetPhone}`}
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1C4D]/20 bg-white px-5 py-2.5 text-sm font-black text-[#0B1C4D] shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-[#FF7A00]/45 hover:text-[#FF7A00]"
            >
              <i className="fas fa-phone text-[#FF7A00]" />
              Call
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7A00] px-5 py-2.5 text-sm font-black text-white shadow-[0_12px_35px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#E86D00] hover:shadow-[0_18px_45px_rgba(255,122,0,0.35)]"
            >
              Get Quote
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
