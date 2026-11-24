import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { Photo } from "@/components/ui/Photo";

/**
 * Gift card, Villa Copenhagen-style: a wide photo with a solid harbour-blue panel overlapping it on the left, holding
 * the title, one line and the button. The photo starts at 30% so the guest's face stays clear of the panel. Shown above the footer on every page except the gift card page, with generous space around.
 */
export function GiftBanner({ t, locale }: { t: Dictionary; locale: Locale }) {
  const b = t.giftCard.banner;
  return (
    <aside aria-labelledby="gift-banner-title" className="bg-paper py-24 md:py-36">
      <div className="relative isolate md:min-h-[34rem]">
        <Photo item={media.giftCard.banner} locale={locale} sizes="100vw" className="aspect-[4/3] md:absolute! md:inset-y-0 md:right-0 md:left-[30%] md:-z-10 md:aspect-auto" />
        <div className="bg-harbour px-6 py-12 text-paper md:absolute md:inset-y-0 md:left-[8%] md:flex md:w-[min(38rem,44%)] md:flex-col md:justify-center md:px-12 lg:px-16">
          <h2 id="gift-banner-title" className="font-serif text-5xl leading-[1] font-light tracking-[-0.01em] uppercase md:text-7xl">
            {b.heading}
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper/85">{b.body}</p>
          <Link prefetch={false} href={pages.giftCard(locale)} className={buttonClass("outline", "mt-9 self-start max-sm:w-full")}>
            {b.cta}
          </Link>
        </div>
      </div>
    </aside>
  );
}
