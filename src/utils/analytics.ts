// ============================================================
// ANALYTICS
// Fonction de tracking centralisée. Connectez ici Google
// Analytics (gtag) et/ou Meta Pixel (fbq) lorsque vous aurez
// vos identifiants. Aucune clé n'est codée en dur.
// ============================================================

export type AnalyticsEvent =
  | "click_whatsapp"
  | "add_product"
  | "request_quote"
  | "view_product"
  | "complete_whatsapp_order";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  // Google Analytics (décommentez et configurez votre ID de mesure)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, payload);
  }

  // Meta Pixel (décommentez et configurez votre pixel ID)
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", event, payload);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(`[analytics] ${event}`, payload || {});
  }
}
