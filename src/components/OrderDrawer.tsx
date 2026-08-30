import { X, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";
import { useOrder } from "../context/OrderContext";
import { formatPrice, getTotalPrice } from "../utils/pricing";
import { CURRENCY } from "../config/pricing";
import { buildWhatsAppOrderUrl } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";
import { PRODUCT } from "../data/products";

export default function OrderDrawer() {
  const { quantity, isDrawerOpen, closeDrawer, setQuantity } = useOrder();
  const total = getTotalPrice(quantity);

  const handleWhatsApp = () => {
    trackEvent("complete_whatsapp_order", { quantity, total, source: "drawer" });
    window.open(buildWhatsAppOrderUrl(quantity), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <aside
        className={`fixed end-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-950/[0.06] px-5 py-4">
          <h3 className="flex items-center gap-2 text-base font-bold text-ink-950">
            <ShoppingBag className="h-5 w-5 text-fire-600" />
            طلبي ({quantity})
          </h3>
          <button
            onClick={closeDrawer}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-950/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {quantity === 0 ? (
            <p className="mt-10 text-center text-sm text-ink-500">طلبكم فارغ حالياً.</p>
          ) : (
            <div className="rounded-xl border border-ink-950/[0.06] p-3.5">
              <p className="text-sm font-semibold text-ink-950">{PRODUCT.nameAr}</p>
              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-lg border border-ink-950/10 p-0.5">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-ink-950/5"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="ltr-numeric w-6 text-center text-sm font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-ink-950/5"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <span className="ltr-numeric text-sm font-bold text-ink-950">
                  {formatPrice(total, CURRENCY)}
                </span>
              </div>
            </div>
          )}
        </div>

        {quantity > 0 && (
          <div className="border-t border-ink-950/[0.06] px-5 py-4">
            <div className="mb-4 flex items-center justify-between text-base">
              <span className="font-semibold text-ink-950">المجموع</span>
              <span className="ltr-numeric font-extrabold text-ink-950">
                {formatPrice(total, CURRENCY)}
              </span>
            </div>
            <button onClick={closeDrawer} className="btn-secondary mb-2.5 w-full">
              متابعة
            </button>
            <button onClick={handleWhatsApp} className="btn-whatsapp w-full">
              <MessageCircle className="h-4 w-4" />
              إتمام الطلب عبر واتساب
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
