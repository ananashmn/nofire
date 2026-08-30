import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQ_ITEMS } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">الأسئلة الشائعة</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            الأسئلة المتكررة
          </h2>
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-ink-950/[0.06] rounded-2xl border border-ink-950/[0.06] shadow-soft">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-right sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold text-ink-950 sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-fire-600" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
