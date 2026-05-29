import { PageMeta } from "@/components/layout/PageMeta";
import { shared } from "@/content";
import { LocaleLink } from "@/i18n/LocaleLink";

export function NotFoundPage() {
  const c = shared.notFound;

  return (
    <section className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-24 text-center sm:px-6">
      <PageMeta page="notFound" />
      <p className="font-display text-6xl text-brand-accent">{c.code}</p>
      <h1 className="mt-4 font-display text-2xl text-brand-frost">{c.title}</h1>
      <p className="mt-3 text-brand-muted">{c.body}</p>
      <LocaleLink
        href="/"
        className="mt-10 inline-flex justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
      >
        {c.cta}
      </LocaleLink>
    </section>
  );
}
