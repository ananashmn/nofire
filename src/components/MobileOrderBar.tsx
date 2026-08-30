import { MessageCircle } from "lucide-react";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

export default function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-950/10 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden">
      <a
        href={buildWhatsAppSimpleUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", { location: "mobile_bar" })}
        className="btn-whatsapp w-full"
      >
        <MessageCircle className="h-4 w-4" />
        اطلب عبر واتساب
      </a>
    </div>
  );
}
