import { MessageCircle, Users, MapPin, Truck, Headphones, Building2 } from "lucide-react";
import { buildWhatsAppSimpleUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const POINTS = [
  { title: "مرافقة قبل الشراء", icon: Users },
  { title: "نصائح لاختيار الجهاز المناسب", icon: Headphones },
  { title: "تواجد محلي بالمغرب", icon: MapPin },
  { title: "توصيل لجميع المدن", icon: Truck },
  { title: "دعم عبر واتساب", icon: MessageCircle },
  { title: "للأفراد والشركات", icon: Building2 },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="fade-section">
            <span className="eyebrow">الثقة</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              لماذا تختارون BlockFire
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              نرافق عملاءنا قبل الشراء وبعده لمساعدتهم على اختيار الحل الأنسب لتركيبهم.
            </p>
            <a
              href={buildWhatsAppSimpleUrl("السلام عليكم، أرغب في التحدث مع أحد المستشارين.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_whatsapp", { location: "why_choose_us" })}
              className="btn-whatsapp mt-8"
            >
              <MessageCircle className="h-4 w-4" />
              تحدث مع مستشار
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {POINTS.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <Icon className="h-5 w-5 text-fire-500" strokeWidth={1.8} />
                <p className="mt-3 text-sm font-medium leading-tight text-white/90">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
