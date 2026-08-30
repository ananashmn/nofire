import { getTotalPrice, getPerUnitPrice, CURRENCY } from "../config/pricing";

export { getTotalPrice, getPerUnitPrice };

export function formatPrice(amount: number, currency: string = CURRENCY): string {
  return `${amount.toLocaleString("ar-MA")} ${currency}`;
}
