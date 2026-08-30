import { useState } from "react";
import { Plus, Minus, MessageCircle, PackageOpen } from "lucide-react";
import { useOrder } from "../context/OrderContext";
import { formatPrice, getTotalPrice, getPerUnitPrice } from "../utils/pricing";
import { CURRENCY, EXTRA_UNIT_DISCOUNT } from "../config/pricing";
import { buildWhatsAppOrderUrl, type CustomerInfo } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";
import { PRODUCT } from "../data/products";
import CustomerForm from "./CustomerForm";

export default function OrderConfigurator() {
  const { quantity, setQuantity } = useOrder();
  const [customer, setCustomer] = useState<CustomerInfo>({});

  const total = getTotalPrice(quantity);
  const canSend = quantity > 0 && !!customer.name && !!customer.phone;

  const handleFinalize = () => {
    if (!canSend) return;
    trackEvent("complete_whatsapp_order", { quantity, total });
    window.open(buildWhatsAppOrderUrl(quantity, customer), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="configurateur" className="section-py bg-white">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">المُجمِّع</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            جهّز طلبك
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            حددوا الكمية المطلوبة وأتمّوا طلبكم مباشرة عبر واتساب. عن كل قطعة إضافية
            بعد الأولى، يتم خصم {EXTRA_UNIT_DISCOUNT} درهم تلقائياً.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Quantity selector */}
          <div className="lg:col-span-3">
            {quantity === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-950/15 bg-ink-50/40 px-6 py-16 text-center">
                <PackageOpen className="h-9 w-9 text-ink-500/50" strokeWidth={1.5} />
                <p className="mt-3 text-sm text-ink-500">
                  لم تحددوا أي كمية بعد.
                  <br />
                  اختاروا الكمية من قسم المنتج أعلاه، أو استخدموا العداد هنا مباشرة.
                </p>
                <button
                  onClick={() => setQuantity(1)}
                  className="btn-primary mt-5"
                >
                  إضافة قطعة واحدة
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-ink-950/[0.06] bg-white p-5 shadow-soft sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink-950">{PRODUCT.nameAr}</p>
                    <p className="ltr-numeric mt-1 text-sm text-ink-500">
                      سعر القطعة: {formatPrice(getPerUnitPrice(quantity), CURRENCY)}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 rounded-lg border border-ink-950/10 p-1">
                      <button
                        onClick={() => setQuantity(quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-md text-ink-700 hover:bg-ink-950/5"
                        aria-label="إنقاص"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="ltr-numeric w-8 text-center text-sm font-bold text-ink-950">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-md text-ink-700 hover:bg-ink-950/5"
                        aria-label="زيادة"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <span className="ltr-numeric w-28 text-left text-sm font-bold text-ink-950">
                      {formatPrice(total, CURRENCY)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Summary + form */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-ink-950/[0.06] bg-ink-50/50 p-6 shadow-soft">
              <h3 className="text-base font-bold text-ink-950">ملخص الطلب</h3>

              <div className="mt-4 flex items-center justify-between border-t border-ink-950/[0.08] pt-4 text-sm">
                <span className="text-ink-500">الكمية</span>
                <span className="ltr-numeric font-semibold text-ink-900">{quantity} قطعة</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-base">
                <span className="font-semibold text-ink-950">المجموع</span>
                <span className="ltr-numeric font-extrabold text-ink-950">
                  {formatPrice(total, CURRENCY)}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-500">شامل التوصيل لجميع مدن المغرب.</p>

              <div className="mt-5 border-t border-ink-950/[0.08] pt-5">
                <CustomerForm value={customer} onChange={setCustomer} />
              </div>

              <button
                onClick={handleFinalize}
                disabled={!canSend}
                className="btn-whatsapp mt-5 w-full disabled:cursor-not-allowed disabled:opacity-40"
              >
                <MessageCircle className="h-4 w-4" />
                إتمام الطلب عبر واتساب
              </button>
              {!canSend && quantity > 0 && (
                <p className="mt-2 text-center text-xs text-ink-500">
                  الرجاء إدخال الاسم ورقم الهاتف على الأقل للمتابعة.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
