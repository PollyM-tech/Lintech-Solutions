import { useEffect, useState } from "react";
import whatsappIcon from "../assets/whatsapp.png";

export default function FloatingContact({ href }) {
  const [contactVisible, setContactVisible] = useState(false);
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting));
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="Chat with Lintech Telecom on WhatsApp" className={`${contactVisible ? "hidden" : "grid"} fixed bottom-5 right-5 z-40 h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white p-2 shadow-lg`}>
      <img src={whatsappIcon} width="188" height="148" alt="" className="h-full w-full object-contain" />
    </a>
  );
}
