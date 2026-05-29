import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { donation } from "@/content";

type Props = {
  value: string;
};

export function CopyAccountButton({ value }: Props) {
  const labels = donation.bank;
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-frost transition hover:border-brand-accent hover:text-brand-accent"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
      {copied ? labels.copied : labels.copy}
    </button>
  );
}
