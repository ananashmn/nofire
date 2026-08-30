import { useState } from "react";
import { Plus, Minus, ShoppingBag, CheckCircle2 } from "lucide-react";
import { PRODUCT } from "../data/products";
import { useOrder } from "../context/OrderContext";
import { formatPrice, getTotalPrice } from "../utils/pricing";
import { CURRENCY } from "../config/pricing";

function Spec({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink-950/[0.05] py-3 text-sm last:border-0">
      <span className="text-ink-500">{label}</span>
      <span className="ltr-numeric text-left font-medium text-ink-900">{value}</span>
    </div>
  );
}

export default function Product() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addToOrder } = useOrder();

  const handleAdd = () => {
    addToOrder(qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <section id="produits" className="section-py bg-ink-50/50">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">المنتج</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            جهاز BlockFire للإطفاء التلقائي
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">{PRODUCT.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-ink-950/[0.06] bg-white shadow-soft">
              <img
                src={PRODUCT.images[activeImage]}
                alt={PRODUCT.nameAr}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {PRODUCT.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-xl border-2 transition ${
                    activeImage === i ? "border-fire-600" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-baseline gap-2">
              <span className="ltr-numeric text-3xl font-extrabold text-ink-950">
                {formatPrice(PRODUCT.price, CURRENCY)}
              </span>
              <span className="text-sm text-ink-500">شامل التوصيل لكل المغرب</span>
            </div>

            <div className="mt-6">
              <Spec label="وزن مادة الإطفاء" value={PRODUCT.agentWeight} />
              <Spec label="المساحة المحمية" value={PRODUCT.protectedSpace} />
              <Spec label="نطاق درجة حرارة التشغيل" value={PRODUCT.operatingTemperatureRange} />
              <Spec label="العمر الافتراضي" value={PRODUCT.serviceLife} />
              <Spec label="كثافة الإطفاء" value={PRODUCT.extinguishingDensity} />
              <Spec label="حرارة سطح الغلاف" value={PRODUCT.casingSurfaceTemp} />
              <Spec label="المسافات الحرارية الآمنة" value={PRODUCT.thermalClearance} />
              <Spec label="المعيار / الشهادة" value={PRODUCT.standard} />
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-ink-700">الكمية</p>
              <div className="flex items-center justify-between rounded-xl border border-ink-950/10 p-1.5">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 transition hover:bg-ink-950/5"
                  aria-label="إنقاص الكمية"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="ltr-numeric text-base font-bold text-ink-950">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 transition hover:bg-ink-950/5"
                  aria-label="زيادة الكمية"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {qty > 1 && (
                <p className="ltr-numeric mt-2 text-right text-sm text-fire-600">
                  المجموع: {formatPrice(getTotalPrice(qty), CURRENCY)}
                </p>
              )}
            </div>

            <button
              onClick={handleAdd}
              disabled={!PRODUCT.stock}
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                added ? "bg-green-600 text-white" : "bg-ink-950 text-white hover:bg-ink-800"
              } disabled:cursor-not-allowed disabled:opacity-40`}
            >
              {added ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  تمت الإضافة إلى طلبك
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  أضف إلى طلبي
                </>
              )}
            </button>

            <p className="mt-4 text-xs leading-relaxed text-ink-500">
              عند طلب أكثر من قطعة واحدة، يتم خصم مبلغ عن كل قطعة إضافية تلقائياً. مرروا
              إلى قسم "جهّز طلبك" أدناه لتأكيد الكمية النهائية وإتمام الطلب عبر واتساب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
