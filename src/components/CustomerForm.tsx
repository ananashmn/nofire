import type { CustomerInfo } from "../utils/whatsapp";

interface Props {
  value: CustomerInfo;
  onChange: (value: CustomerInfo) => void;
}

export default function CustomerForm({ value, onChange }: Props) {
  const update = (field: keyof CustomerInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [field]: e.target.value });
  };

  const inputClass =
    "w-full rounded-lg border border-ink-950/10 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/50 outline-none transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/10";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-ink-700">
          الاسم الكامل <span className="text-fire-600">*</span>
        </label>
        <input
          className={inputClass}
          placeholder="اسمكم الكامل"
          value={value.name || ""}
          onChange={update("name")}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-ink-700">
          رقم الهاتف <span className="text-fire-600">*</span>
        </label>
        <input
          className={`${inputClass} ltr-numeric text-right`}
          placeholder="06 XX XX XX XX"
          value={value.phone || ""}
          onChange={update("phone")}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-ink-700">المدينة</label>
        <input
          className={inputClass}
          placeholder="مدينتكم"
          value={value.city || ""}
          onChange={update("city")}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-ink-700">العنوان</label>
        <input
          className={inputClass}
          placeholder="العنوان الكامل للتوصيل"
          value={value.address || ""}
          onChange={update("address")}
        />
      </div>
    </div>
  );
}
