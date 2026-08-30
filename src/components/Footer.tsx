import { Flame, MessageCircle } from "lucide-react";
import { COMPANY } from "../config/company";
import { CONTACT } from "../config/contact";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";

const LINK_GROUPS = [
  {
    title: "روابط سريعة",
    links: [
      { label: "المنتج", href: "#produits" },
      { label: "مجالات الاستخدام", href: "#applications" },
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "تواصل معنا", href: "#contact" },
    ],
  },
  {
    title: "معلومات قانونية",
    links: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط البيع", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pb-8 pt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Flame className="h-5 w-5 text-fire-500" />
              </span>
              <span className="ltr-numeric text-lg font-extrabold tracking-tight text-white">
                {COMPANY.logoText}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {COMPANY.shortDescription}
            </p>
            <a
              href={buildWhatsAppSimpleUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6"
            >
              <MessageCircle className="h-4 w-4" />
              اطلب عبر واتساب
            </a>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-white">{group.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold text-white">تواصل معنا</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              <li>{CONTACT.whatsappDisplay}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/35">{COMPANY.legalMention}</p>
          <p className="mt-3 text-xs text-white/30">
            © {new Date().getFullYear()} {COMPANY.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
