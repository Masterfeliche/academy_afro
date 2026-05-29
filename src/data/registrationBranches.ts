/**
 * Campus-specific registration economics and schedules (2026 intake).
 * Display copy lives in messages (en/sw); update amounts here when the office publishes changes.
 */
export type RegistrationBranchId = "kunduchi" | "mabwepande" | "bunju";

export type RegistrationBranchSchedule = "monFri" | "wedSatSun";

export type RegistrationBranch = {
  id: RegistrationBranchId;
  formFee: number;
  firstAid: number;
  uniform: number;
  socks: number;
  monthlyTrainingFee: number;
  schedule: RegistrationBranchSchedule;
};

export const registrationBranches: readonly RegistrationBranch[] = [
  {
    id: "kunduchi",
    formFee: 40_000,
    firstAid: 20_000,
    uniform: 40_000,
    socks: 10_000,
    monthlyTrainingFee: 300_000,
    schedule: "monFri",
  },
  {
    id: "mabwepande",
    formFee: 40_000,
    firstAid: 20_000,
    uniform: 40_000,
    socks: 10_000,
    monthlyTrainingFee: 70_000,
    schedule: "wedSatSun",
  },
  {
    id: "bunju",
    formFee: 40_000,
    firstAid: 20_000,
    uniform: 40_000,
    socks: 10_000,
    monthlyTrainingFee: 100_000,
    schedule: "wedSatSun",
  },
] as const;

export function registrationBranchTotal(branch: RegistrationBranch): number {
  return branch.formFee + branch.firstAid + branch.uniform + branch.socks;
}
