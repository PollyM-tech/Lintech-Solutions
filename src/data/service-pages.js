import { networkingServices, techServices } from "./services.js";

export const servicePages = [
  {
    path: "/services/networking/",
    title: "WiFi, CCTV & Networking Services | Lintech Telecom",
    description: "WiFi installation, CCTV setup, network cabling, router configuration, and troubleshooting for homes and businesses in Nairobi and selected Kiambu areas.",
    heading: "WiFi, CCTV & networking for your property",
    eyebrow: "Networking & security",
    introduction: "From a weak WiFi signal to a new office network, tell us about your property and the connection you need. Lintech helps homes and businesses in Nairobi and selected Kiambu areas plan and set up their networks.",
    items: networkingServices,
    inquiry: "WiFi, CCTV or networking services",
  },
  {
    path: "/services/digital/",
    title: "Websites, Software & AI Automation | Lintech Telecom",
    description: "Website development, custom software, cybersecurity, and AI automation from Lintech Telecom. Discuss digital solutions for your business.",
    heading: "Digital services built around your business",
    eyebrow: "Websites, software & automation",
    introduction: "Bring us the task you want to simplify or the service you want to offer online. Lintech works with businesses to discuss websites, software, cybersecurity, and automation requirements.",
    items: techServices,
    inquiry: "digital and technology services",
  },
];
