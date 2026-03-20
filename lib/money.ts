/** Format whole TZS amounts for UI (locale-aware grouping). */
export function formatTzs(amount: number, locale: string): string {
  const tag =
    locale === "sw" ? "sw-TZ" : "en-TZ";
  try {
    return new Intl.NumberFormat(tag, {
      style: "currency",
      currency: "TZS",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString()} TZS`;
  }
}
