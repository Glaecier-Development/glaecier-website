import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { links, pages } from "@/content/links";
import { media, type MediaItem } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { Photo } from "@/components/ui/Photo";

/**
 * Three photo tiles straight under the hero, each one a way in: the two official sign-up forms (new tab, as everywhere
 * else on the site) and booking, which opens the booking pop-up (see BookingDialog).
 */
export function Quicklinks({ t, locale }: { t: Dictionary; locale: Locale }) {
  const q = t.quicklinks;
  const tiles: { href: string; label: string; item: MediaItem; external: boolean }[] = [
    { href: links.signupRefshaleoen, label: q.refshaleoen, item: media.quicklinks.refshaleoen, external: true },
    { href: links.signupHavnegade, label: q.havnegade, item: media.quicklinks.havnegade, external: true },
    { href: pages.book(locale), label: q.book, item: media.quicklinks.book, external: false },
  ];

  const tile = "group relative block focus-visible:outline-offset-[-4px] focus-visible:outline-paper";
  const content = (label: string, item: MediaItem, external: boolean) => (
    <>
      <Photo
        item={item}
        locale={locale}
        sizes="(min-width: 768px) 33vw, 100vw"
        className="aspect-[16/11] md:aspect-[8/9]"
        imgClassName="transition-[scale] duration-[1.2s] ease-calm group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
      />
      {/* Darkens only the bottom of the photo, so the label stays readable on bright skies. */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper md:p-7">
        <span className="font-serif text-2xl leading-tight font-light md:text-3xl">{label}</span>
        <span aria-hidden="true" className="pb-1 text-lg transition-[translate] duration-500 ease-calm group-hover:translate-x-1">
          {external ? "↗" : "→"}
        </span>
      </span>
      {external && <span className="sr-only"> {t.nav.newTab}</span>}
    </>
  );

  return (
    <nav aria-label={q.label} className="px-2 pt-2 sm:px-3 sm:pt-3">
      <ul className="grid gap-2 sm:gap-3 md:grid-cols-3">
        {tiles.map(({ href, label, item, external }) => (
          <li key={href}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className={tile}>
                {content(label, item, external)}
              </a>
            ) : (
              <Link prefetch={false} href={href} className={tile}>
                {content(label, item, external)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
