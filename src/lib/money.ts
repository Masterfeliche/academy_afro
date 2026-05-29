/** Format whole TZS amounts for UI. */
export function formatTzs(amount: number): string {
  try {
    return new Intl.NumberFormat("en-TZ", {
      style: "currency",
      currency: "TZS",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString("en-TZ")} TZS`;
  }
}
