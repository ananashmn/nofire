// ============================================================
// مجالات الاستخدام
// أمثلة محتملة — يجب التحقق من ملاءمتها حسب مواصفات المنتج الفعلية.
// ============================================================

export interface ApplicationItem {
  title: string;
  icon: string; // اسم أيقونة من مكتبة lucide-react
}

export const APPLICATIONS: ApplicationItem[] = [
  { title: "خزائن كهربائية", icon: "PanelsTopLeft" },
  { title: "لوحات التوزيع الكهربائي", icon: "Server" },
  { title: "غرف تقنية", icon: "Cog" },
  { title: "خزائن التحكم", icon: "Factory" },
  { title: "علب العدادات", icon: "Warehouse" },
  { title: "محطات شحن السيارات الكهربائية", icon: "Truck" },
  { title: "معدات كهربائية حساسة", icon: "Zap" },
  { title: "محطات الطاقة الشمسية", icon: "SunMedium" },
];
