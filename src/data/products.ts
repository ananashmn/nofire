// ============================================================
// المنتج
// منتج واحد فقط. المواصفات منقولة حرفياً من ملصق المنتج الحقيقي.
// أي معلومة غير مذكورة على الملصق تُترك فارغة (null) ولا تُخترع.
// ============================================================

export interface Product {
  id: number;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  price: number; // السعر الأساسي للقطعة الواحدة (شامل التوصيل)
  currency: string;
  agentWeight: string | null; // وزن مادة الإطفاء
  protectedSpace: string | null; // المساحة المحمية
  operatingTemperatureRange: string | null; // نطاق درجة حرارة التشغيل
  serviceLife: string | null; // العمر الافتراضي
  extinguishingDensity: string | null; // كثافة الإطفاء
  casingSurfaceTemp: string | null; // درجة حرارة سطح الغلاف
  thermalClearance: string | null; // المسافات الحرارية الآمنة
  standard: string | null; // المعيار / الشهادة
  dimensions: string | null;
  activationTemperature: string | null;
  stock: boolean;
  images: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "NoFire — Heat Aerosol Fire Extinguishing Device",
    nameAr: "جهاز NoFire للإطفاء التلقائي بالأيروسول الحراري",
    slug: "nofire-device",
    description:
      "جهاز إطفاء تلقائي مدمج يعمل بتقنية الأيروسول الحراري المكثف. يُركّب داخل اللوحات والخزائن الكهربائية والمساحات المغلقة الصغيرة، ويتفاعل تلقائياً عند ارتفاع درجة الحرارة دون الحاجة لأي تدخل يدوي أو مصدر طاقة.",
    price: 160,
    currency: "درهم",
    agentWeight: "10 غرام (Weight of the preparation)",
    protectedSpace: "≤ 0.1 m³",
    operatingTemperatureRange: "-50°C إلى +90°C",
    serviceLife: "10 سنوات",
    extinguishingDensity: "100 g/m³",
    casingSurfaceTemp: "أقل من 200°C",
    thermalClearance: "0.3m ≤ 75°C · 0.12m ≤ 200°C · 0.05m ≤ 400°C",
    standard: "EN 15276-1:2019 / EN 15276-2:2019 — CE",
    dimensions: null,
    activationTemperature: null,
    stock: true,
    images: [
      `${import.meta.env.BASE_URL}products/BlockFire-device-studio.jpeg`,
      `${import.meta.env.BASE_URL}products/BlockFire-device-label.jpeg`,
    ],
  },
];

export const PRODUCT = PRODUCTS[0];
