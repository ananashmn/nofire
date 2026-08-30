import { PanelsTopLeft, Server, Truck, Factory } from "lucide-react";

const SITUATIONS = [
  {
    title: "الخزائن الكهربائية",
    icon: PanelsTopLeft,
    text: "قد تنشأ مخاطر داخل مساحات مغلقة يصعب الوصول إليها بسرعة.",
  },
  {
    title: "الغرف التقنية",
    icon: Server,
    text: "معدات حساسة تحتاج إلى مراقبة مستمرة، حتى في غياب أي شخص.",
  },
  {
    title: "المركبات",
    icon: Truck,
    text: "مساحة ضيقة لا يكون فيها التدخل السريع ممكناً دائماً.",
  },
  {
    title: "المناطق الصناعية",
    icon: Factory,
    text: "منشآت واسعة قد لا يُكتشف فيها بداية الحريق بشكل فوري.",
  },
];

export default function Problem() {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">السياق</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            الحريق قد يتطور في ثوانٍ معدودة.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            في بعض البيئات، لا يكون التدخل البشري الفوري ممكناً دائماً. حل الإطفاء
            التلقائي يمكن أن يشكّل طبقة حماية إضافية.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SITUATIONS.map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fire-600/15">
                <Icon className="h-5 w-5 text-fire-500" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
