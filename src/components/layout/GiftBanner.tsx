import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { Photo } from "@/components/ui/Photo";

/** "Buy a warm gift": a photo and one line above the footer on every page, leading to the gift card page. */
export function GiftBanner({ t, locale }: { t: Dictionary; locale: Locale }) {
  const b = t.giftCard.banner;
  return (
    <aside aria-labelledby="gift-banner-title" className="bg-sand">
      <div className="container-page grid items-center gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
        <Photo item={media.giftCard.banner} locale={locale} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[16/10] md:col-span-4" />
        <div className="md:col-span-6 md:col-start-6">
          <p className="eyebrow text-wood">{b.eyebrow}</p>
          <h2 id="gift-banner-title" className="mt-4 font-serif text-4xl leading-[1.05] font-light md:text-5xl">
            {b.heading}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">{b.body}</p>
          <Link prefetch={false} href={pages.giftCard(locale)} className={buttonClass("dark", "mt-8 max-sm:w-full")}>
            {b.cta}
          </Link>
        </div>
      </div>
    </aside>
  );
}
