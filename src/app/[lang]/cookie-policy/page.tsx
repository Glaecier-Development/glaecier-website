import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMetadata(lang, { ...getDictionary(lang).cookiesPage.meta, path: "cookie-policy/" });
}

/** A plain text page: what this website does with cookies (nothing of its own) and where other rules apply. */
export default async function CookiePolicy({ params }: Props) {
  const locale = (await params).lang as Locale;
  const t = getDictionary(locale);
  const c = t.cookiesPage;
  return (
    <>
      <SiteHeader t={{ nav: t.nav, prototype: t.prototype }} locale={locale} page="cookies" />
      <main id="main" className="bg-paper pt-40 pb-24 md:pt-52 md:pb-36">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-wood">{c.eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] font-light tracking-[-0.015em] uppercase md:text-7xl">{c.title}</h1>
          <p className="mt-6 text-sm text-stone">{c.updated}</p>
          <div className="mt-14 border-t border-ink/15">
            {c.sections.map((s) => (
              <section key={s.heading} className="border-b border-ink/15 py-8">
                <h2 className="font-serif text-2xl font-light md:text-3xl">{s.heading}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-stone">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter t={t} locale={locale} page="cookies" />
    </>
  );
}
