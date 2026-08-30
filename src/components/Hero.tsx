import { ArrowLeft, MessageCircle, Wrench, Zap, Package, Gauge } from "lucide-react";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";
import { PRODUCT } from "../data/products";

const INDICATORS = [
  { label: "تركيب سهل وسريع", icon: Wrench },
  { label: "تفعيل تلقائي بالكامل", icon: Zap },
  { label: "حجم صغير ومدمج", icon: Package },
  { label: "صيانة محدودة", icon: Gauge },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white">
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0a0b0d 1px, transparent 1px), linear-gradient(90deg, #0a0b0d 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-page relative grid grid-cols-1 items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-24">
        {/* Right content (visually right in RTL = first in source) */}
        <div className="fade-section">
          <span className="eyebrow">تقنية الإطفاء التلقائي</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.25] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.1rem]">
            حماية تلقائية من الحريق، حتى في غياب أي شخص.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            جهاز BlockFire يعمل بتقنية الأيروسول الحراري المكثف، ويتفعّل تلقائياً عند
            وصول درجة الحرارة إلى المستوى الحرج، للمساعدة في السيطرة على بداية الحريق
            بسرعة.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#produits" className="btn-primary">
              اكتشف المنتج
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsAppSimpleUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_whatsapp", { location: "hero" })}
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              اطلب عبر واتساب
            </a>
          </div>

          {/* Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INDICATORS.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="h-5 w-5 text-fire-600" strokeWidth={2} />
                <span className="text-sm font-medium leading-tight text-ink-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product photo */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800 p-8 shadow-card sm:aspect-[4/5]">
            <img
              src={PRODUCT.images[0]}
              alt={PRODUCT.nameAr}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 -end-4 h-24 w-24 rounded-2xl bg-fire-600/90 sm:-bottom-6 sm:-end-6 sm:h-32 sm:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
