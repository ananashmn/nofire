// ============================================================
// إعدادات التسعير
// السعر الأساسي للوحدة الواحدة ثابت ويشمل التوصيل لجميع مدن المغرب.
// عند طلب أكثر من قطعة، يتم خصم مبلغ ثابت عن كل قطعة إضافية.
// ============================================================

export const BASE_UNIT_PRICE = 160; // السعر شامل التوصيل للقطعة الأولى
export const EXTRA_UNIT_DISCOUNT = 10; // الخصم عن كل قطعة إضافية
export const CURRENCY = "درهم"; // يمكن استبدالها بـ "MAD" إذا رغبتم

/**
 * يحسب السعر الإجمالي لعدد معين من القطع:
 * القطعة الأولى بالسعر الكامل، وكل قطعة إضافية بسعر أقل بـ EXTRA_UNIT_DISCOUNT.
 */
export function getTotalPrice(quantity: number): number {
  if (quantity <= 0) return 0;
  const extraUnits = quantity - 1;
  return quantity * BASE_UNIT_PRICE - extraUnits * EXTRA_UNIT_DISCOUNT;
}

/**
 * السعر الفعلي للقطعة الواحدة عند شراء أكثر من واحدة (للعرض فقط).
 */
export function getPerUnitPrice(quantity: number): number {
  if (quantity <= 1) return BASE_UNIT_PRICE;
  return BASE_UNIT_PRICE - EXTRA_UNIT_DISCOUNT;
}
