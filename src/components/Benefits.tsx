import { Zap, ShieldCheck, Package, Wrench, Timer, Gauge } from "lucide-react";

const BENEFITS = [
  { title: "تفعيل تلقائي بالكامل", text: "لا حاجة لأي تدخل يدوي عند التفعيل.", icon: Zap },
  { title: "حماية على مدار الساعة", text: "مراقبة حرارية مستمرة للمساحة المحمية.", icon: ShieldCheck },
  { title: "حجم صغير ومدمج", text: "يندمج بسهولة داخل المساحات الضيقة.", icon: Package },
  { title: "تركيب سهل وسريع", text: "تصميم يسمح بتركيب سريع في دقائق.", icon: Wrench },
  { title: "استجابة سريعة", text: "رد فعل فوري بمجرد بلوغ درجة الحرارة الحرجة.", icon: Timer },
  { title: "صيانة محدودة", text: "استخدام لا يتطلب صيانة معقدة أو متكررة.", icon: Gauge },
];

export default function Benefits() {
  return (
    <section id="avantages" className="section-py bg-ink-50/50">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">لماذا هذه التقنية</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            مميزات الجهاز
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, text, icon: Icon }) => (
            <div key={title} className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fire-600/10">
                <Icon className="h-5 w-5 text-fire-600" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink-950">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
