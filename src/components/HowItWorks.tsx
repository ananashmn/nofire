import { Thermometer, Zap, Wind, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "الاستشعار الحراري",
    text: "ترتفع درجة حرارة المحيط إلى عتبة التفعيل المحددة للجهاز.",
    icon: Thermometer,
  },
  {
    number: "02",
    title: "التفعيل",
    text: "تقوم الآلية الحرارية بتشغيل الجهاز تلقائياً.",
    icon: Zap,
  },
  {
    number: "03",
    title: "انتشار مادة الإطفاء",
    text: "يتم رش مادة الأيروسول المضادة للحريق داخل المساحة المحمية.",
    icon: Wind,
  },
  {
    number: "04",
    title: "التأثير على الحريق",
    text: "تساعد مادة الإطفاء على وقف تفاعل الاحتراق.",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="fonctionnement" className="section-py bg-white">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">طريقة العمل</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            كيف يعمل الجهاز؟
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line desktop */}
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-ink-950/10 lg:block" />

          {STEPS.map(({ number, title, text, icon: Icon }, i) => (
            <div key={number} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl border border-ink-950/[0.06] bg-white shadow-soft">
                <Icon className="h-7 w-7 text-fire-600" strokeWidth={1.8} />
              </div>
              <span className="ltr-numeric mt-4 text-xs font-bold tracking-widest text-fire-600">
                {number}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-ink-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>

              {i < STEPS.length - 1 && (
                <div className="mt-6 h-8 w-px bg-ink-950/10 sm:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Demo video */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-ink-950 shadow-card">
          <video
            src={`${import.meta.env.BASE_URL}videos/nofire-how-it-works.mp4`}
            controls
            playsInline
            className="w-full max-h-[520px] bg-black"
          />
        </div>
        <p className="mt-3 text-center text-sm text-ink-500">
          فيديو توضيحي لطريقة عمل جهاز NoFire.
        </p>
      </div>
    </section>
  );
}
