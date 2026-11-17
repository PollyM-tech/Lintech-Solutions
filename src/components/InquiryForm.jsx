import { useState } from "react";
import { inquiryMessage, trackEvent, whatsappUrl } from "../lib/contact";

export default function InquiryForm() {
  const [service, setService] = useState("Internet / coverage check");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base font-normal text-slate-800";

  const submit = (event) => {
    event.preventDefault();
    if (!location.trim()) { setError("Please enter your area or nearest landmark."); return; }
    setError("");
    // Keep location and free text out of analytics events.
    trackEvent(service === "Internet / coverage check" ? "coverage_inquiry" : "service_inquiry", { service });
    window.location.assign(whatsappUrl(inquiryMessage({ service, location, message })));
  };

  return (
    <form onSubmit={submit} className="mt-8 rounded-2xl bg-white p-5 text-[#0B1C4D] sm:p-8" aria-labelledby="inquiry-title">
      <h3 id="inquiry-title" className="text-xl font-bold">Tell us what you need</h3>
      <p id="inquiry-help" className="mt-2 text-sm leading-6 text-slate-600">We’ll open WhatsApp with your request ready to send. Your request is sent when you tap Send in WhatsApp.</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Service
          <select name="service" value={service} onChange={(event) => setService(event.target.value)} className={fieldClass}>
            {["Internet / coverage check", "WiFi & networking", "CCTV installation", "Router setup", "Website development", "Software systems", "Cybersecurity", "AI automation"].map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">Area or nearest landmark <span className="font-normal">(required)</span>
          <input name="location" required maxLength={180} autoComplete="address-level2" value={location} onChange={(event) => { setLocation(event.target.value); setError(""); }} placeholder="e.g. Kahawa Sukari, near…" aria-invalid={error ? true : undefined} aria-describedby={error ? "inquiry-error" : undefined} className={fieldClass} />
        </label>
        <label className="text-sm font-semibold sm:col-span-2">Message <span className="font-normal">(optional)</span>
          <textarea name="message" rows={3} maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us about your home, business, or the help you need." className={fieldClass} />
        </label>
      </div>
      {error && <p id="inquiry-error" role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      <button type="submit" aria-describedby="inquiry-help" className="mt-5 min-h-12 w-full rounded-lg bg-[#166534] px-6 py-3 font-semibold text-white hover:bg-[#14532D] sm:w-auto">Continue on WhatsApp</button>
    </form>
  );
}
