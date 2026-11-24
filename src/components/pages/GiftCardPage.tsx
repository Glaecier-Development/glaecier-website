import type { Dictionary } from "@/content/dictionaries";
import { media } from "@/content/media";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";

type Props = { t: Dictionary; locale: Locale };

/** The order email: the gift card is filled in; the site itself collects nothing and takes no payment. */
const orderMail = (title: string, price: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Gift card: ${title} (${price})`)}&body=${encodeURIComponent(
    `Hi Glaecier,\n\nI would like to buy a gift card for ${title} (${price}).\n\nNumber of gift cards:\nName:\n`,
  )}`;

/**
 * Gift cards, in the spirit of Villa Copenhagen's gift card page: a full-screen hero, the gift cards as large photo
 * cards with price and a buy button, then how it works. glaecier.com sells no gift cards online, so buying is an email
 * to the community inbox – no payment or personal data is handled here.
 */
export function GiftCardPage({ t, locale }: Props) {
  const g = t.giftCard;
  const products = [
    { key: "tuesday", ...g.products.tuesday, photo: media.giftCard.tuesday },
    { key: "saturday", ...g.products.saturday, photo: media.giftCard.saturday },
  ];
  return (
    <>
      <PageHero item={media.giftCard.hero} locale={locale} eyebrow={g.eyebrow} title={g.title} intro={g.intro}>
        <a href="#gift-cards" className={buttonClass("solid", "max-sm:w-full")}>
          {g.primary}
        </a>
      </PageHero>

      <section id="gift-cards" aria-labelledby="gift-cards-title" className="scroll-mt-24 bg-paper py-24 md:py-36">
        <div className="container-page">
          <h2 id="gift-cards-title" className="reveal font-serif text-5xl leading-[1] font-light tracking-[-0.015em] uppercase md:text-7xl">
            {g.productsHeading}
          </h2>
          <ul className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
            {products.map((p) => (
              <li key={p.key}>
                <article aria-labelledby={`gift-${p.key}`} className="flex h-full flex-col bg-ink text-paper">
                  <div className="relative">
                    <Photo item={p.photo} locale={locale} sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" />
                    <p className="eyebrow absolute top-4 left-4 bg-wood/90 px-3 py-1.5 text-[0.6875rem] text-paper">{p.tag}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-10">
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 id={`gift-${p.key}`} className="font-serif text-3xl leading-tight font-light md:text-4xl">
                        {p.title}
                      </h3>
                      <p className="shrink-0 font-serif text-2xl font-light md:text-3xl">{p.price}</p>
                    </div>
                    <p className="mt-4 max-w-md leading-relaxed text-paper/75">{p.body}</p>
                    <div className="mt-auto pt-10">
                      <a href={orderMail(p.title, p.price)} className={buttonClass("solid", "max-sm:w-full")}>
                        {g.buy}
                      </a>
                      <p className="mt-3 text-xs text-paper/55">{g.emailNote}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="gift-how-title" className="bg-sand/60 py-24 md:py-32">
        <div className="container-page grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <h2 id="gift-how-title" className="reveal font-serif text-4xl leading-[1.05] font-light md:text-6xl lg:col-span-4">
            {g.howHeading}
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-ink/15">
              {g.steps.map((step, i) => (
                <li key={step.title} className="reveal grid grid-cols-[2.75rem_1fr] border-b border-ink/15 py-6">
                  <span className="eyebrow pt-1 text-wood">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-2xl font-light">{step.title}</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-stone">{g.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
