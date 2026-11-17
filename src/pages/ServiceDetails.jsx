import { whatsappUrl } from "../lib/contact";

export default function ServiceDetails({ page }) {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white pt-[74px] text-slate-700">
      <section id="services" tabIndex={-1} className="bg-[#F5F8FF] px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <a href="/#services" className="text-sm font-semibold text-[#0B1C4D] underline underline-offset-4">← All services</a>
          <p className="mb-4 mt-8 text-sm font-semibold text-[#A84300]">{page.eyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-[#0B1C4D] sm:text-5xl">{page.heading}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{page.introduction}</p>
          <a href={whatsappUrl(`Hello Lintech Telecom, I would like to discuss ${page.inquiry}. Please help me confirm the scope, availability, and quotation.`)} target="_blank" rel="noreferrer" data-track="whatsapp_click" className="mt-8 inline-flex rounded-lg bg-[#C95000] px-6 py-3 font-semibold text-white hover:bg-[#A84300]">Discuss your project on WhatsApp</a>
        </div>
      </section>
      <section id="service-options" tabIndex={-1} className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold text-[#0B1C4D]">How we can help</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {page.items.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-semibold text-[#0B1C4D]">{item.title}</h3><p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p></article>)}
          </div>
          <div className="mt-10 rounded-2xl bg-[#F5F8FF] p-6 sm:p-8"><h2 className="text-xl font-bold text-[#0B1C4D]">Start with a clear brief</h2><p className="mt-3 max-w-3xl leading-7">Share the service you need, your location, any existing equipment or systems, and the result you want. Our team can discuss the scope, quotation, and next steps with you.</p><a href="/#contact" className="mt-5 inline-block font-semibold text-[#0B1C4D] underline underline-offset-4">Contact Lintech Telecom →</a></div>
        </div>
      </section>
    </main>
  );
}
