import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { Photo } from "@/components/ui/Photo";

/**
 * Gift card, Villa Copenhagen-style: a Teak panel (the brand colour for gifting) with title, one line and the button beside a photo, centred
 * with the same space on both sides. Shown above the footer on every page except the gift card page.
 */
export function GiftBanner({ t, locale }: { t: Dictionary; locale: Locale }) {
  const b = t.giftCard.banner;
  return (
    <aside aria-labelledby="gift-banner-title" className="bg-paper py-24 md:py-36">
      <div className="mx-auto grid w-[84%] max-w-[90rem] md:min-h-[34rem] md:grid-cols-2">
        <div className="flex flex-col justify-center bg-teak px-6 py-12 text-paper md:px-12 lg:px-16">
          <h2 id="gift-banner-title" className="font-serif text-5xl leading-[1] font-light tracking-[-0.01em] uppercase md:text-7xl">
            {b.heading}
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper/85">{b.body}</p>
          <Link prefetch={false} href={pages.giftCard(locale)} className={buttonClass("outline", "mt-9 self-start max-sm:w-full")}>
            {b.cta}
          </Link>
        </div>
        <Photo item={media.giftCard.banner} locale={locale} sizes="(min-width: 768px) 42vw, 84vw" className="aspect-[4/3] md:aspect-auto md:h-full" />
      </div>
    </aside>
  );
}
