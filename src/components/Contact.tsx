import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "../config/contact";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const ROWS = [
  { icon: MessageCircle, label: "واتساب", value: CONTACT.whatsappDisplay },
  { icon: Phone, label: "الهاتف", value: CONTACT.phone },
  { icon: Mail, label: "البريد الإلكتروني", value: CONTACT.email },
  { icon: MapPin, label: "المدينة", value: CONTACT.city },
  { icon: Clock, label: "أوقات العمل", value: CONTACT.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-white">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">تواصل معنا</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            تواصلوا معنا
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {ROWS.filter((r) => r.value).map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-ink-950/[0.06] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-50">
                  <Icon className="h-4.5 w-4.5 text-fire-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-ink-900">{value}</p>
                </div>
              </div>
            ))}

            <a
              href={buildWhatsAppSimpleUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_whatsapp", { location: "contact" })}
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              تحدث معنا عبر واتساب
            </a>
          </div>

          {CONTACT.address ? (
            <div className="min-h-[280px] overflow-hidden rounded-2xl border border-ink-950/[0.06] shadow-soft">
              <iframe
                title="الموقع"
                width="100%"
                height="100%"
                style={{ minHeight: 280, border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
              />
            </div>
          ) : (
            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-ink-950/15 bg-ink-50/40 p-8 text-center text-sm text-ink-500">
              أضيفوا عنواناً في <code className="mx-1 rounded bg-ink-950/5 px-1.5 py-0.5">src/config/contact.ts</code> لعرض الخريطة.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
