import type { Dictionary } from "@/content/dictionaries";
import { media } from "@/content/media";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";

type Props = { t: Dictionary; locale: Locale };

/** The order email, with the gift card filled in. The site itself collects nothing and takes no payment. */
const orderMail = (title: string, price: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Gift card: ${title}`)}&body=${encodeURIComponent(
    `Hi Glaecier,\n\nI would like to buy ${title} (${price} per ticket).\n\nNumber of tickets:\nName:\n`,
  )}`;

/**
 * Gift cards, in the spirit of Villa Copenhagen's gift card page: a full-screen hero, one gift card – Open Gus tickets,
 * any number, each used on its own, for Tuesdays or Saturdays – and how it works. glaecier.com sells no gift cards
 * online, so buying is an email to the community inbox; no payment or personal data is handled here.
 */
export function GiftCardPage({ t, locale }: Props) {
  const g = t.giftCard;
  const p = g.product;
  return (
    <>
      <PageHero item={media.giftCard.hero} locale={locale} eyebrow={g.eyebrow} title={g.title} intro={g.intro}>
        <a href="#gift-card" className={buttonClass("solid", "max-sm:w-full")}>
          {g.primary}
        </a>
      </PageHero>

      <section id="gift-card" aria-labelledby="gift-card-title" className="scroll-mt-24 bg-paper py-24 md:py-36">
        <div className="container-page">
          <article className="grid bg-ink text-paper lg:grid-cols-2">
            <div className="relative">
              <Photo item={media.giftCard.tuesday} locale={locale} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] lg:h-full" />
              <p className="eyebrow absolute top-4 left-4 bg-wood/90 px-3 py-1.5 text-[0.6875rem] text-paper">{p.tag}</p>
            </div>
            <div className="flex flex-col p-6 sm:p-10 xl:p-14">
              <h2 id="gift-card-title" className="font-serif text-4xl leading-[1.05] font-light md:text-5xl">
                {p.title}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper/75">{p.body}</p>
              <ul className="mt-8 border-t border-paper/15">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-4 border-b border-paper/15 py-3 leading-relaxed">
                    <span aria-hidden="true" className="text-wood">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-4xl font-light">
                {p.price} <span className="text-base text-paper/60">{p.per}</span>
              </p>
              <div className="mt-8">
                <a href={orderMail(p.title, p.price)} className={buttonClass("solid", "max-sm:w-full")}>
                  {g.buy}
                </a>
                <p className="mt-3 text-xs text-paper/55">{g.emailNote}</p>
              </div>
            </div>
          </article>
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
