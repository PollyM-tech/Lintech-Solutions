import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/optimized/logo-128.webp";

const links = [
  ["home", "Home"],
  ["internet", "Plans"],
  ["coverage", "Coverage"],
];
const serviceLinks = [
  ["services", "All services"],
  ["wifi-networking", "WiFi, networking & CCTV"],
  ["router-setup", "Router setup"],
  ["tech-services", "Websites & digital services"],
];
const serviceSections = new Set(serviceLinks.map(([id]) => id));

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [active, setActive] = useState("home");
  const header = useRef(null);
  const toggle = useRef(null);
  const servicesToggle = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      const sections = [...document.querySelectorAll("main section[id]")];
      const current = sections.filter((section) => section.getBoundingClientRect().top <= 130).at(-1);
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      const section = current?.id || "home";
      const group = { installation: "coverage", reviews: "coverage", faq: "contact" };
      setActive(atBottom && pathname === "/" ? "contact" : group[section] || section);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onOutside = (event) => {
      if (!header.current?.contains(event.target)) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesToggle.current?.focus();
      } else if (open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpoint = () => { setOpen(false); setServicesOpen(false); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, servicesOpen, pathname]);

  const closeMenu = (event) => {
    setOpen(false);
    setServicesOpen(false);
    const href = event.currentTarget.getAttribute("href");
    const destination = new URL(href || "", window.location.href);
    if (destination.pathname === pathname && destination.hash) {
      const target = document.getElementById(destination.hash.slice(1));
      // Keep focus on the destination when the menu that held it disappears.
      requestAnimationFrame(() => target?.focus({ preventScroll: true }));
    }
  };
  const linkClass = (selected) => `rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${selected ? "bg-[#EEF2FA] text-[#0B1C4D]" : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1C4D]"}`;
  const navLink = ([id, label]) => (
    <a key={id} href={`${pathname === "/" ? "" : "/"}#${id}`} onClick={closeMenu} aria-current={active === id ? "location" : undefined} className={linkClass(active === id)}>{label}</a>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <nav aria-label="Main navigation" className="relative mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="/#home" onClick={closeMenu} className="inline-flex items-center gap-3 rounded-lg">
            <img src={logo} width="1024" height="1024" alt="Lintech Telecom" className="h-11 w-11 object-contain" />
            <span className="leading-tight"><span className="block text-lg font-bold text-[#0B1C4D]">Lintech Telecom</span><span className="block text-xs text-slate-500">Internet · Networking · Tech</span></span>
          </a>
          <button ref={toggle} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-[#0B1C4D] xl:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
          <div id="main-navigation" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[74px] max-h-[calc(100dvh-90px)] flex-col gap-4 overflow-y-auto overscroll-contain border-b border-slate-200 bg-white p-5 shadow-lg xl:static xl:flex xl:max-h-none xl:flex-row xl:items-center xl:overflow-visible xl:border-0 xl:p-0 xl:shadow-none`}>
            <div className="flex flex-col gap-1 xl:flex-row xl:items-center">
              {links.map(navLink)}
              <div className="relative">
                <button ref={servicesToggle} type="button" aria-expanded={servicesOpen} aria-controls="services-navigation" onClick={() => setServicesOpen(!servicesOpen)} className={`${linkClass(serviceSections.has(active))} flex w-full items-center justify-between gap-2`}>
                  Services <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
                </button>
                {servicesOpen && <div id="services-navigation" className="mt-2 flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 xl:absolute xl:left-0 xl:top-full xl:w-64 xl:shadow-lg">{serviceLinks.map(navLink)}</div>}
              </div>
              {[["about", "About"], ["contact", "Contact"]].map(navLink)}
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="tel:+254717371134" onClick={closeMenu} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-[#0B1C4D]">Call us</a>
              <a href="/#contact" onClick={closeMenu} className="rounded-lg bg-[#C95000] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#A84300]">Get a quote</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
