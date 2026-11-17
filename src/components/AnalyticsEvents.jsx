import { useEffect } from "react";
import { trackEvent } from "../lib/contact";

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const kind = link.dataset.track || (href.startsWith("tel:") ? "phone_click" : href.startsWith("https://wa.me/") ? "whatsapp_click" : null);
      if (kind) trackEvent(kind, { source: link.closest("section")?.id || "navigation", ...(link.dataset.plan ? { plan: link.dataset.plan } : {}) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
