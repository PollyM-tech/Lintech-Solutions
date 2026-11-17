export const whatsappNumber = "254717371134";
export const googleProfileUrl = "https://www.google.com/maps/search/?api=1&query=Lintech%20Telecom%20Kenya";

export function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function planInquiryUrl(plan) {
  return whatsappUrl(`Hello Lintech Telecom, I’m interested in the ${plan} plan. Please confirm coverage at my location, speed, billing period, installation fee, router inclusion, and any usage limits.`);
}

export function inquiryMessage({ service, location, message }) {
  return `Hello Lintech Telecom, I would like to request ${service}.\nLocation: ${location.trim()}${message.trim() ? `\nMessage: ${message.trim()}` : ""}`;
}

export function trackEvent(event, details = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
}
