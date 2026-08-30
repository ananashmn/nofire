import { useState } from "react";
import { X, MessageCircle, Briefcase } from "lucide-react";
import { buildWhatsAppQuoteUrl, type QuoteRequest } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

export default function BusinessSection() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<QuoteRequest>({});

  const inputClass =
    "w-full rounded-lg border border-ink-950/10 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/50 outline-none transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/10";

  const update = (field: keyof QuoteRequest) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const canSend = !!form.name && !!form.phone;

  const handleSend = () => {
    if (!canSend) return;
    trackEvent("request_quote", { source: "business_section" });
    window.open(buildWhatsAppQuoteUrl(form), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-gradient-to-br from-ink-950 to-ink-900 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fire-600/15">
              <Briefcase className="h-5 w-5 text-fire-500" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              هل تريدون تجهيز شركة أو عدة منشآت؟
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              بالنسبة للطلبات الكبيرة أو المنشآت الصناعية أو الاحتياجات الخاصة،
              تواصلوا معنا للحصول على عرض مخصص.
            </p>
          </div>
          <button onClick={() => setOpen(true)} className="btn-primary shrink-0">
            اطلب عرض سعر للشركات
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink-950">عرض سعر للشركات</h3>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-950/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                  اسم الشركة (اختياري)
                </label>
                <input className={inputClass} value={form.company || ""} onChange={update("company")} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                  الاسم الكامل <span className="text-fire-600">*</span>
                </label>
                <input className={inputClass} value={form.name || ""} onChange={update("name")} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                  رقم الهاتف <span className="text-fire-600">*</span>
                </label>
                <input className={`${inputClass} ltr-numeric text-right`} value={form.phone || ""} onChange={update("phone")} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                  عدد الوحدات المقدر
                </label>
                <input className={inputClass} value={form.estimatedUnits || ""} onChange={update("estimatedUnits")} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                  نوع التركيب
                </label>
                <input className={inputClass} value={form.installationType || ""} onChange={update("installationType")} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">المدينة</label>
                <input className={inputClass} value={form.city || ""} onChange={update("city")} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-ink-700">رسالة إضافية</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  value={form.message || ""}
                  onChange={update("message")}
                />
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={!canSend}
              className="btn-whatsapp mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
            >
              <MessageCircle className="h-4 w-4" />
              إرسال الطلب عبر واتساب
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
