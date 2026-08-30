import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, MessageCircle, Flame } from "lucide-react";
import { COMPANY } from "../config/company";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { useOrder } from "../context/OrderContext";
import { trackEvent } from "../utils/analytics";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#accueil" },
  { label: "المنتج", href: "#produits" },
  { label: "طريقة العمل", href: "#fonctionnement" },
  { label: "مجالات الاستخدام", href: "#applications" },
  { label: "المميزات", href: "#avantages" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { quantity, openDrawer } = useOrder();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950">
            <Flame className="h-5 w-5 text-fire-500" strokeWidth={2.4} />
          </span>
          <span className="ltr-numeric text-lg font-extrabold tracking-tight text-ink-950">
            {COMPANY.logoText}
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-fire-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={openDrawer}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 transition-colors hover:bg-ink-950/5"
            aria-label="طلبي"
          >
            <ShoppingBag className="h-5 w-5" />
            {quantity > 0 && (
              <span className="absolute -end-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-fire-600 px-1 text-[11px] font-bold text-white">
                {quantity}
              </span>
            )}
          </button>

          <a
            href={buildWhatsAppSimpleUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location: "header" })}
            className="btn-whatsapp hidden lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            اطلب عبر واتساب
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-ink-950/5 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-950/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppSimpleUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_whatsapp", { location: "header_mobile" })}
              className="btn-whatsapp mt-2"
            >
              <MessageCircle className="h-4 w-4" />
              اطلب عبر واتساب
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
