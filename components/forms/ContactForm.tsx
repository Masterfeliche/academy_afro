"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tv = useTranslations("contact.validation");
  const tCommon = useTranslations("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "req";
    if (!email.trim()) e.email = "req";
    if (!message.trim()) e.message = "req";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "bad";
    setErrors(e);
    if (Object.keys(e).length) return;
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setDone(true);
    }, 500);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25";

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-brand-border bg-brand-surface p-10 text-center shadow-card"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-accent" />
        <h3 className="mt-4 font-display text-2xl text-brand-frost">
          {tCommon("successTitle")}
        </h3>
        <p className="mt-2 text-sm text-brand-muted">{tCommon("successBody")}</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card sm:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-ink">{t("name")}</label>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-600">{tv("required")}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-ink">{t("email")}</label>
          <input
            type="email"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-600">
              {errors.email === "bad" ? tv("email") : tv("required")}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("phone")}</label>
        <input
          className={inputClass}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("topic")}</label>
        <select
          className={inputClass}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">{t("selectTopic")}</option>
          <option value="admissions">{t("topics.admissions")}</option>
          <option value="partnerships">{t("topics.partnerships")}</option>
          <option value="media">{t("topics.media")}</option>
          <option value="other">{t("topics.other")}</option>
        </select>
      </div>
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">{t("message")}</label>
        <textarea
          className={`${inputClass} min-h-[140px]`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-600">{tv("required")}</p>
        ) : null}
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
