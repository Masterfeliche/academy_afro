"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

type FormState = {
  playerName: string;
  age: string;
  dob: string;
  position: string;
  parentName: string;
  pickupName: string;
  phone: string;
  email: string;
  emergencyPhone: string;
  experience: string;
  program: string;
  health: string;
  notes: string;
};

const initial: FormState = {
  playerName: "",
  age: "",
  dob: "",
  position: "",
  parentName: "",
  pickupName: "",
  phone: "",
  email: "",
  emergencyPhone: "",
  experience: "",
  program: "",
  health: "",
  notes: "",
};

function validate(
  v: FormState,
  tv: (key: string) => string,
): Partial<Record<keyof FormState, string>> {
  const e: Partial<Record<keyof FormState, string>> = {};
  const req = (key: keyof FormState) => {
    if (!String(v[key]).trim()) e[key] = tv("validation.required");
  };
  (
    [
      "playerName",
      "age",
      "dob",
      "position",
      "parentName",
      "phone",
      "email",
      "program",
    ] as const
  ).forEach(req);
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    e.email = tv("validation.email");
  }
  if (v.phone && !/^[\d+\s()-]{7,}$/.test(v.phone)) {
    e.phone = tv("validation.phone");
  }
  if (v.emergencyPhone && !/^[\d+\s()-]{7,}$/.test(v.emergencyPhone)) {
    e.emergencyPhone = tv("validation.phone");
  }
  const ageN = Number(v.age);
  if (v.age && (Number.isNaN(ageN) || ageN < 5 || ageN > 21)) {
    e.age = tv("validation.age");
  }
  return e;
}

export function TrialsForm() {
  const t = useTranslations("trials");
  const tCommon = useTranslations("common");
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const positionOptions = useMemo(
    () =>
      [
        { value: "gk", label: t("form.positions.gk") },
        { value: "def", label: t("form.positions.def") },
        { value: "mid", label: t("form.positions.mid") },
        { value: "fwd", label: t("form.positions.fwd") },
        { value: "flex", label: t("form.positions.flex") },
      ] as const,
    [t],
  );

  const programOptions = useMemo(
    () =>
      [
        { value: "foundation", label: t("form.programs.foundation") },
        { value: "elite", label: t("form.programs.elite") },
        { value: "goalkeeper", label: t("form.programs.goalkeeper") },
        { value: "camps", label: t("form.programs.camps") },
        { value: "unsure", label: t("form.programs.unsure") },
      ] as const,
    [t],
  );

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const next = validate(values, t as unknown as (key: string) => string);
    setErrors(next);
    if (Object.keys(next).length) return;
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 650);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-brand-border bg-brand-surface p-10 text-center shadow-card"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-accent" aria-hidden />
        <h2 className="mt-6 font-display text-3xl text-brand-frost">
          {t("success.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-brand-muted">{t("success.body")}</p>
      </motion.div>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card sm:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label={t("form.playerName")}
          error={errors.playerName}
          input={
            <input
              className={inputClass}
              value={values.playerName}
              onChange={(e) => setValues((s) => ({ ...s, playerName: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.age")}
          error={errors.age}
          input={
            <input
              className={inputClass}
              inputMode="numeric"
              value={values.age}
              onChange={(e) => setValues((s) => ({ ...s, age: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.dob")}
          error={errors.dob}
          input={
            <input
              type="date"
              className={inputClass}
              value={values.dob}
              onChange={(e) => setValues((s) => ({ ...s, dob: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.position")}
          error={errors.position}
          input={
            <select
              className={inputClass}
              value={values.position}
              onChange={(e) => setValues((s) => ({ ...s, position: e.target.value }))}
            >
              <option value="">{t("form.selectPosition")}</option>
              {positionOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          }
        />
        <Field
          label={t("form.parentName")}
          error={errors.parentName}
          input={
            <input
              className={inputClass}
              value={values.parentName}
              onChange={(e) => setValues((s) => ({ ...s, parentName: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.pickupName")}
          error={errors.pickupName}
          input={
            <input
              className={inputClass}
              value={values.pickupName}
              onChange={(e) => setValues((s) => ({ ...s, pickupName: e.target.value }))}
              placeholder={t("form.pickupNote")}
            />
          }
        />
        <Field
          label={t("form.phone")}
          error={errors.phone}
          input={
            <input
              className={inputClass}
              value={values.phone}
              onChange={(e) => setValues((s) => ({ ...s, phone: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.email")}
          error={errors.email}
          input={
            <input
              type="email"
              className={inputClass}
              value={values.email}
              onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.emergencyPhone")}
          error={errors.emergencyPhone}
          input={
            <input
              className={inputClass}
              value={values.emergencyPhone}
              onChange={(e) => setValues((s) => ({ ...s, emergencyPhone: e.target.value }))}
            />
          }
        />
        <Field
          label={t("form.program")}
          error={errors.program}
          input={
            <select
              className={inputClass}
              value={values.program}
              onChange={(e) => setValues((s) => ({ ...s, program: e.target.value }))}
            >
              <option value="">{t("form.selectProgram")}</option>
              {programOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          }
        />
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("form.experience")}</label>
        <textarea
          className={`${inputClass} min-h-[88px]`}
          value={values.experience}
          onChange={(e) => setValues((s) => ({ ...s, experience: e.target.value }))}
        />
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("form.health")}</label>
        <p className="mt-1 text-xs text-brand-muted">{t("form.healthHint")}</p>
        <textarea
          className={`${inputClass} min-h-[100px]`}
          value={values.health}
          onChange={(e) => setValues((s) => ({ ...s, health: e.target.value }))}
        />
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("form.notes")}</label>
        <textarea
          className={`${inputClass} min-h-[88px]`}
          value={values.notes}
          onChange={(e) => setValues((s) => ({ ...s, notes: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full rounded-full bg-brand-primary py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110 disabled:opacity-60 md:w-auto md:px-12"
      >
        {pending ? tCommon("sending") : tCommon("submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-brand-ink">{label}</label>
      {input}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
