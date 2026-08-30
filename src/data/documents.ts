// ============================================================
// الوثائق التقنية
// ضعوا ملفاتكم الحقيقية داخل public/documents/ ثم فعّلوا available: true
// إذا لم يتوفر أي ملف، يبقى الزر المعني مخفياً تلقائياً.
// ============================================================

export interface TechnicalDocument {
  label: string;
  file: string;
  available: boolean;
}

export const DOCUMENTS: TechnicalDocument[] = [
  { label: "الورقة التقنية", file: "/documents/fiche-technique.pdf", available: false },
  { label: "دليل الاستخدام", file: "/documents/manuel.pdf", available: false },
  { label: "الشهادات", file: "/documents/certifications.pdf", available: false },
];
