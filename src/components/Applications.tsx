import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { APPLICATIONS } from "../data/applications";

export default function Applications() {
  return (
    <section id="applications" className="section-py bg-white">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">مجالات الاستخدام</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            حل مناسب لمختلف البيئات
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {APPLICATIONS.map((app) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[app.icon] || Icons.Shield;
            return (
              <div
                key={app.title}
                className="flex flex-col items-start gap-4 rounded-2xl border border-ink-950/[0.06] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fire-50">
                  <Icon className="h-5 w-5 text-fire-600" strokeWidth={1.8} />
                </div>
                <span className="text-sm font-semibold leading-tight text-ink-900">
                  {app.title}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-500">
          هذه المجالات هي أمثلة محتملة فقط، ويجب التحقق من ملاءمتها حسب مواصفات
          الجهاز الفعلية. حجم وتوافق الجهاز يجب التأكد منهما حسب طبيعة التركيب
          ومواصفات الشركة الصانعة.
        </p>
      </div>
    </section>
  );
}
