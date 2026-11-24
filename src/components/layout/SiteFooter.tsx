import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { publishedLocales, type Locale } from "@/i18n/config";
import { links, pages, type Page } from "@/content/links";
import { Wordmark } from "@/components/ui/Wordmark";
import { GiftBanner } from "./GiftBanner";

const heading = "eyebrow text-paper/60";
const link = "link-underline py-1 uppercase tracking-[0.08em]";

/**
 * Closing scene in dark charcoal, laid out like Villa Copenhagen's footer: the wordmark centred on top,
 * then visit / contact / hours / explore in centred columns, and a quiet bottom line. No partner logos yet.
 */
export function SiteFooter({ t, locale, page = "home" }: { t: Dictionary; locale: Locale; page?: Page }) {
  const f = t.footer;
  const home = page === "home" ? "" : pages.home(locale);
  return (
    <>
      {/* "Buy a warm gift" on every page except the gift card page itself. */}
      {page !== "giftCard" && <GiftBanner t={t} locale={locale} />}
      <footer className="bg-charcoal pt-20 pb-10 text-paper md:pt-28">
        <div className="container-page text-center">
          <Link prefetch={false} href={pages.home(locale)} aria-label={t.nav.home} className="inline-block">
            <Wordmark className="h-12 md:h-16" />
          </Link>
          <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-snug font-light text-paper/85 md:text-2xl">{f.tagline}</p>

          <div className="mt-16 grid gap-12 border-t border-paper/20 pt-14 text-sm leading-relaxed sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-8">
            <div>
              <h2 className={heading}>{f.visit}</h2>
              <address className="mt-5 not-italic uppercase tracking-[0.08em]">
                {site.address.street}
                <br />
                {f.city}
              </address>
              <a href={links.directions} target="_blank" rel="noopener noreferrer" className={`${link} mt-3 inline-block`}>
                {f.directions} <span aria-hidden="true">↗</span>
                <span className="sr-only"> {t.nav.newTab}</span>
              </a>
            </div>

            <div>
              <h2 className={heading}>{f.contact}</h2>
              <ul className="mt-5 flex flex-col items-center gap-1">
                <li>
                  <a href={`mailto:${site.email}`} className="link-underline py-1">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-underline py-1">
                    {f.instagram} {site.instagram.handle}
                    <span className="sr-only"> {t.nav.newTab}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div id="opening-hours">
              <h2 className={heading}>{f.hours}</h2>
              <dl className="mx-auto mt-5 max-w-60">
                {site.hours.map(([open, close], i) => (
                  <div key={i} className="flex justify-between border-b border-paper/15 py-1.5">
                    <dt>{f.days[i]}</dt>
                    <dd className="tabular-nums">
                      {open}–{close}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mx-auto mt-3 max-w-60 text-xs text-paper/60">{f.hoursNote}</p>
            </div>

            <div>
              <h2 className={heading}>{f.explore}</h2>
              <ul className="mt-5 flex flex-col items-center gap-1">
                <li>
                  <Link prefetch={false} href={pages.signup(locale)} className={link}>
                    {f.signup}
                  </Link>
                </li>
                <li>
                  {/* Opens the booking pop-up (BookingDialog). */}
                  <Link prefetch={false} href={pages.book(locale)} className={link}>
                    {f.book}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={`${home}#private-corporate`} className={link}>
                    {f.hire}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={pages.about(locale)} className={link}>
                    {f.about}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={pages.giftCard(locale)} className={link}>
                    {f.giftCards}
                  </Link>
                </li>
                <li>
                  <a href={links.faq[locale]} target="_blank" rel="noopener noreferrer" className={link}>
                    {f.faq}
                    <span className="sr-only"> {t.nav.newTab}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 border-t border-paper/20 pt-6 text-xs text-paper/60 md:mt-20 md:flex-row md:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
            {/* Hidden while only English is published. */}
            {publishedLocales.length > 1 && (
              <ul aria-label={f.language} className="flex gap-5">
                {(publishedLocales as readonly Locale[]).map((l) => (
                  <li key={l}>
                    <Link
                      prefetch={false}
                      href={pages[page](l)}
                      hrefLang={l}
                      lang={l}
                      aria-current={l === locale ? "page" : undefined}
                      className="eyebrow inline-block py-2 opacity-70 transition-opacity hover:opacity-100 aria-[current=page]:text-paper aria-[current=page]:opacity-100"
                    >
                      {l === "da" ? "Dansk" : "English"}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <p>
              <Link prefetch={false} href={pages.cookies(locale)} className="link-underline py-1">
                {f.cookies}
              </Link>
              <span aria-hidden="true" className="mx-3 opacity-50">
                ·
              </span>
              {f.disclaimer}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
