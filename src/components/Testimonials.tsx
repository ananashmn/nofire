import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="section-py bg-ink-50/50">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">آراء العملاء</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card p-6">
              <Quote className="h-6 w-6 text-fire-600/40" />
              <p className="mt-4 text-sm leading-relaxed text-ink-700">{t.text}</p>
              <p className="mt-4 text-sm font-semibold text-ink-950">
                {t.name}
                {t.city ? <span className="text-ink-500"> — {t.city}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
