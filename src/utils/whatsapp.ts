import { WHATSAPP_NUMBER } from "../config/contact";
import { CURRENCY } from "../config/pricing";
import { getTotalPrice, formatPrice } from "./pricing";
import { PRODUCT } from "../data/products";

export interface CustomerInfo {
  name?: string;
  phone?: string;
  city?: string;
  address?: string;
}

/**
 * ينشئ رابط واتساب مع رسالة جاهزة (بالعربية) تحتوي على تفاصيل الطلب.
 */
export function buildWhatsAppOrderUrl(quantity: number, customer?: CustomerInfo): string {
  const total = getTotalPrice(quantity);

  const message = [
    "السلام عليكم،",
    "",
    "أرغب في طلب المنتج التالي من موقعكم:",
    "",
    `• ${PRODUCT.nameAr} × ${quantity}`,
    "",
    `المبلغ الإجمالي (شامل التوصيل): ${formatPrice(total, CURRENCY)}`,
    "",
    `الاسم : ${customer?.name || ""}`,
    `الهاتف : ${customer?.phone || ""}`,
    `المدينة : ${customer?.city || ""}`,
    `العنوان : ${customer?.address || ""}`,
    "",
    "الرجاء تأكيد الطلب والتوصيل.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * رابط واتساب عام (بدون طلب محدد)، يُستخدم في أزرار "تواصل معنا" أو "اطلب عبر واتساب".
 */
export function buildWhatsAppSimpleUrl(prefill?: string): string {
  const text = prefill || "السلام عليكم، أرغب في معرفة المزيد حول جهاز NoFire.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export interface QuoteRequest {
  company?: string;
  name?: string;
  phone?: string;
  estimatedUnits?: string;
  installationType?: string;
  city?: string;
  message?: string;
}

export function buildWhatsAppQuoteUrl(data: QuoteRequest): string {
  const text = [
    "السلام عليكم،",
    "",
    "أرغب في الحصول على عرض سعر خاص بالشركات / الكميات الكبيرة.",
    "",
    `الشركة : ${data.company || ""}`,
    `الاسم : ${data.name || ""}`,
    `الهاتف : ${data.phone || ""}`,
    `عدد الوحدات المقدر : ${data.estimatedUnits || ""}`,
    `نوع التركيب : ${data.installationType || ""}`,
    `المدينة : ${data.city || ""}`,
    "",
    `رسالة إضافية : ${data.message || ""}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
