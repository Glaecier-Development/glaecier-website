import type { Dictionary } from "@/content/dictionaries";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { Photo } from "@/components/ui/Photo";

/** "The place": one full-screen photo of the panorama sauna with the section title over it. The sauna / pool / deck
 *  blocks below it were removed at the client's request (2026-11-24). */
export function Facilities({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section aria-labelledby="facilities-title">
      {/* Viewport-dominating lead image with the section title laid over it */}
      <div className="relative isolate flex h-svh min-h-[34rem] items-end text-paper">
        <Photo item={media.facilities.sauna} locale={locale} sizes="100vw" effect="parallax" className="absolute! inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-transparent via-45% to-transparent" />
        <div className="container-page pb-12 md:pb-16">
          <p className="eyebrow reveal text-paper/85">{t.facilities.eyebrow}</p>
          <h2 id="facilities-title" className="reveal mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.04] font-light tracking-[-0.015em] text-balance md:text-7xl">
            {t.facilities.heading}
          </h2>
        </div>
      </div>
    </section>
  );
}
