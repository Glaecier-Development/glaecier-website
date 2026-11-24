import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { Photo } from "@/components/ui/Photo";

/** One box above the footer on every page: "Buy a warm gift" over a photo, the whole box linking to the gift card page. */
export function GiftBanner({ t, locale }: { t: Dictionary; locale: Locale }) {
  const b = t.giftCard.banner;
  return (
    <aside aria-label={b.label} className="bg-paper px-2 py-2 sm:px-3 sm:py-3">
      <Link
        prefetch={false}
        href={pages.giftCard(locale)}
        className="group relative isolate flex min-h-[16rem] items-center justify-center overflow-hidden text-paper focus-visible:outline-offset-[-4px] focus-visible:outline-paper md:min-h-[22rem]"
      >
        <Photo
          item={media.giftCard.banner}
          locale={locale}
          sizes="100vw"
          className="absolute! inset-0 -z-10"
          imgClassName="transition-[scale] duration-[1.2s] ease-calm group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/35" />
        <span className="flex items-center gap-4 font-serif text-4xl font-light md:text-6xl">
          {b.heading}
          <span aria-hidden="true" className="text-2xl transition-[translate] duration-500 ease-calm group-hover:translate-x-1.5 md:text-3xl">
            →
          </span>
        </span>
      </Link>
    </aside>
  );
}
