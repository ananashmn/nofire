import { FileText, Download } from "lucide-react";
import { DOCUMENTS } from "../data/documents";

export default function TechnicalDocuments() {
  const available = DOCUMENTS.filter((d) => d.available);
  if (available.length === 0) return null;

  return (
    <section className="section-py bg-ink-50/50">
      <div className="container-page">
        <div className="max-w-2xl fade-section">
          <span className="eyebrow">الموارد</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            الوثائق التقنية
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {available.map((doc) => (
            <a
              key={doc.label}
              href={doc.file}
              download
              className="flex items-center gap-3 rounded-xl border border-ink-950/[0.08] bg-white px-5 py-4 shadow-soft transition hover:shadow-card"
            >
              <FileText className="h-5 w-5 text-fire-600" />
              <span className="text-sm font-semibold text-ink-900">{doc.label}</span>
              <Download className="h-4 w-4 text-ink-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
