export type FeeLineId = "registrationForm" | "firstAid" | "uniform" | "longSocks";

/** All amounts in Tanzanian Shillings (TZS) */
export const feesData = {
  currency: "TZS" as const,
  lineItems: [
    { id: "registrationForm" as const, amount: 40_000 },
    { id: "firstAid" as const, amount: 20_000 },
    { id: "uniform" as const, amount: 40_000 },
    { id: "longSocks" as const, amount: 10_000 },
  ],
  /** Current intake: registration form + first aid only */
  initialPayment: {
    amount: 60_000,
    /** ISO date — update when the campaign window changes */
    validThrough: "2026-11-30",
  },
  /** When schools are open */
  monthlyTraining: 70_000,
  /** Holiday intensive (per published window) */
  holidayTraining: 70_000,
  /** Once registration package is fully settled, it is not charged again */
  registrationNonRecurring: true,
} as const;
