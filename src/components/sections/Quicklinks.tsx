import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { links, pages } from "@/content/links";
import { media, type MediaItem } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { InternalAction } from "@/components/ui/buttons";
import { CardRail } from "@/components/ui/CardRail";
import { Photo } from "@/components/ui/Photo";
import { PhotoCycle } from "@/components/ui/PhotoCycle";
import { Wordmark } from "@/components/ui/Wordmark";

/** `photos`: one photo, or sets of photos that take turns (each set side by side, see PhotoCycle). */
type Card = { key: keyof Dictionary["quicklinks"]["cards"]; href: string; photos: MediaItem | readonly (readonly MediaItem[])[]; external: boolean };

/**
 * Welcome text, then a sideways-scrolling row of cards, each one a way in: the two official sign-up forms and Bring a
 * Friend (glaecier.com, new tab, as everywhere else on the site), booking (opens the booking pop-up, see BookingDialog)
 * and private hire (the section further down this page).
 */
export function Quicklinks({ t, locale }: { t: Dictionary; locale: Locale }) {
  const q = t.quicklinks;
  const cards: Card[] = [
    { key: "refshaleoen", href: links.signupRefshaleoen, photos: media.quicklinks.refshaleoen, external: true },
    { key: "havnegade", href: links.signupHavnegade, photos: media.quicklinks.havnegade, external: true },
    { key: "book", href: pages.book(locale), photos: media.quicklinks.book, external: false },
    { key: "baf", href: links.bringAFriend, photos: media.quicklinks.baf, external: true },
    { key: "hire", href: "#private-corporate", photos: media.quicklinks.hire, external: false },
  ];

  const cardClass = "group flex h-full flex-col text-ink focus-visible:outline-offset-4 focus-visible:outline-ink";
  const zoom = "transition-[scale] duration-[1.2s] ease-calm group-hover:scale-[1.04] motion-reduce:group-hover:scale-100";
  const content = ({ key, photos, external }: Card) => {
    const c = q.cards[key];
    return (
      <>
        <div className="relative aspect-[16/10] overflow-hidden">
          {Array.isArray(photos) ? (
            <PhotoCycle sets={photos} locale={locale} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 43vw" imgClassName={zoom} />
          ) : (
            <Photo item={photos as MediaItem} locale={locale} sizes="(min-width: 1024px) 32vw, (min-width: 640px) 60vw, 85vw" className="h-full" imgClassName={zoom} />
          )}
          <span className="eyebrow absolute top-4 left-4 bg-paper/85 px-3 py-1.5 text-[0.6875rem] text-ink backdrop-blur-sm">{c.tag}</span>
        </div>
        <div className="flex flex-1 flex-col pt-6 md:pt-8">
          <h3 className="font-serif text-3xl leading-tight font-light">{c.title}</h3>
          <p className="mt-4 leading-relaxed text-stone">{c.body}</p>
          <span className="link-underline mt-auto self-start pt-8 text-[0.75rem] font-medium tracking-[0.16em] uppercase">
            {c.cta} <span aria-hidden="true">{external ? "↗" : "→"}</span>
          </span>
          {external && <span className="sr-only"> {t.nav.newTab}</span>}
        </div>
      </>
    );
  };

  return (
    <section aria-labelledby="welcome-title" className="pt-20 pb-24 md:pt-28 md:pb-36">
      {/* Welcome: name, one line, one paragraph and the booking button, then the cards. */}
      <div className="container-page mb-10 md:mb-14">
        {/* The heading is the wordmark itself, as in the site header; the name stays in the text for screen readers. */}
        <h2 id="welcome-title" className="reveal">
          <Wordmark className="h-14 sm:h-20 md:h-24" />
          <span className="sr-only">{q.title}</span>
        </h2>
        <p className="reveal mt-8 font-serif text-3xl leading-tight font-light md:mt-10 md:text-4xl">{q.subtitle}</p>
        <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-stone">{q.body}</p>
        <InternalAction href={pages.book(locale)} variant="outline" className="reveal mt-9">
          {q.cta}
        </InternalAction>
      </div>
      <CardRail label={q.label} previous={q.previous} next={q.next}>
        {cards.map((card) => (
          <li key={card.key} className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-1.5rem)/3.15)]">
            {card.external ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {content(card)}
              </a>
            ) : (
              <Link prefetch={false} href={card.href} className={cardClass}>
                {content(card)}
              </Link>
            )}
          </li>
        ))}
      </CardRail>
    </section>
  );
}
