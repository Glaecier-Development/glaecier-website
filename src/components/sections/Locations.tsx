import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { Photo } from "@/components/ui/Photo";
import { SectionIntro } from "@/components/ui/SectionIntro";

/**
 * The two locations as two tall photos side by side, Villa Copenhagen "Rooms / Suites"-style: the name centred on each
 * photo with one short line, the whole photo linking to that location on the membership page. Havnegade only ever shows
 * the client's harbour view, never a Refshaleøen photo.
 */
export function Locations({ t, locale }: { t: Dictionary; locale: Locale }) {
  const l = t.locations;
  const tiles = [
    { id: "refshaleoen", name: l.refshaleoen.name, line: l.tiles.refshaleoen, photo: media.locations.refshaleoen },
    { id: "havnegade", name: l.havnegade.name, line: l.tiles.havnegade, photo: media.locations.havnegade },
  ];
  return (
    <section aria-labelledby="locations-title" className="py-28 md:py-44">
      <div className="container-page">
        <SectionIntro eyebrow={l.eyebrow} heading={l.heading} headingId="locations-title" className="max-w-3xl text-wood [&_h2]:text-ink" />

        <ul className="mt-16 grid gap-3 md:mt-24 md:grid-cols-2 md:gap-6">
          {tiles.map((tile) => (
            <li key={tile.id}>
              <Link
                prefetch={false}
                href={`${pages.signup(locale)}#${tile.id}`}
                aria-labelledby={`loc-${tile.id}`}
                className="group relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden text-center text-paper focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <Photo
                  item={tile.photo}
                  locale={locale}
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="absolute! inset-0 -z-20"
                  imgClassName="transition-[scale] duration-[1.2s] ease-calm group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/20" />
                <span className="px-6">
                  <span id={`loc-${tile.id}`} className="block font-serif text-5xl leading-none font-light uppercase [text-shadow:0_1px_24px_rgb(0_0_0/0.3)] md:text-7xl">
                    {tile.name}
                  </span>
                  <span className="eyebrow mt-5 block text-paper/90">{tile.line}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
