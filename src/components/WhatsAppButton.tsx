import { MessageCircle } from "lucide-react";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppSimpleUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { location: "floating_button" })}
      className="group fixed bottom-20 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-200 hover:scale-105 sm:bottom-6"
      aria-label="تواصلوا معنا عبر واتساب"
    >
      <MessageCircle className="h-6 w-6 text-white" fill="white" strokeWidth={0} />
      <span className="pointer-events-none absolute end-16 hidden whitespace-nowrap rounded-lg bg-ink-950 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 sm:block">
        هل تحتاجون مساعدة؟ تواصلوا معنا
      </span>
    </a>
  );
}
