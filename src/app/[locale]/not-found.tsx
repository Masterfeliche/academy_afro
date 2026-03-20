import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-6xl text-brand-accent">404</p>
      <h1 className="mt-4 font-display text-2xl text-brand-frost">Page not found</h1>
      <p className="mt-3 text-brand-muted">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-10 inline-flex justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
      >
        Back to home
      </Link>
    </section>
  );
}
