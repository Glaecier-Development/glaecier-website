import type { Dictionary } from "@/content/dictionaries";
import { media } from "@/content/media";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { Photo } from "@/components/ui/Photo";

type Props = { t: Dictionary; locale: Locale };

/** The order email, with the gift card filled in. The site itself collects nothing and takes no payment. */
const orderMail = (title: string, price: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Gift card: ${title}`)}&body=${encodeURIComponent(
    `Hi Glaecier,\n\nI would like to buy ${title} (${price} per ticket).\n\nNumber of tickets:\nName:\n`,
  )}`;

/**
 * Gift cards, kept minimal in the spirit of Villa Copenhagen's gift card page: one photo with the title centred on it,
 * then the gift – Open Gus tickets, any number, each used on its own, for Tuesdays or Saturdays – with its price and
 * one way to buy. glaecier.com sells no gift cards online, so buying is an email to the community inbox; no payment
 * or personal data is handled here.
 */
export function GiftCardPage({ t, locale }: Props) {
  const g = t.giftCard;
  const p = g.product;
  return (
    <>
      {/* data-hero: the header stays transparent over the photo, as on the other pages. */}
      <section data-hero aria-labelledby="page-title" className="relative isolate flex h-svh min-h-[34rem] items-center justify-center overflow-hidden bg-ink px-6 text-center text-paper">
        <Photo item={media.giftCard.hero} locale={locale} sizes="100vw" priority className="absolute! inset-0 -z-20" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/45" />
        <h1 id="page-title" className="max-w-5xl font-serif text-5xl leading-[1.02] font-light tracking-[-0.015em] text-balance uppercase [text-shadow:0_1px_24px_rgb(0_0_0/0.3)] sm:text-7xl md:text-8xl">
          {g.title}
        </h1>
      </section>

      <section aria-labelledby="gift-card-title" className="bg-paper py-24 md:py-36">
        <div className="container-page grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 id="gift-card-title" className="font-serif text-4xl leading-[1.05] font-light md:text-6xl">
              {p.title}
            </h2>
            <p className="mt-6 font-serif text-2xl leading-snug font-light text-stone md:text-3xl">{g.lead}</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{p.body}</p>
          </div>

          <article aria-label={p.title} className="bg-ink text-paper lg:col-span-6 lg:col-start-7">
            <Photo item={media.giftCard.tuesday} locale={locale} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10]" />
            <div className="p-6 sm:p-10">
              <ul className="border-t border-paper/15">
                {p.points.map((point) => (
                  <li key={point} className="border-b border-paper/15 py-3 leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                <p className="font-serif text-4xl font-light">
                  {p.price} <span className="text-base text-paper/60">{p.per}</span>
                </p>
                <a href={orderMail(p.title, p.price)} className={buttonClass("solid", "max-sm:w-full")}>
                  {g.buy}
                </a>
              </div>
              <p className="mt-4 text-xs text-paper/55">{g.emailNote}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
