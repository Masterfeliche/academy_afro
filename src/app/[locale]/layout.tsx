import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { Navbar } from "@/components/layout/Navbar";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: "AFROEURO Soccer Academy",
      template: "%s | AFROEURO Soccer Academy",
    },
    description:
      locale === "sw"
        ? "Chuo cha AFROEURO — Afro Euro Sports Agency, kilichosajiliwa NSC 146, kinakuza vipaji vya vijana na njia ya kimataifa."
        : "AFROEURO Soccer Academy — Afro Euro Sports Agency (BMT / NSC 146). Youth football development, scholarships, and international exposure from Tanzania.",
    openGraph: {
      siteName: "AFROEURO Soccer Academy",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
