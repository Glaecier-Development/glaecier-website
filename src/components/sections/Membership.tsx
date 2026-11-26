import type { Dictionary } from "@/content/dictionaries";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { links } from "@/content/links";
import { buttonClass } from "@/components/ui/buttons";
import { Photo } from "@/components/ui/Photo";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Membership({ t, locale }: { t: Dictionary; locale: Locale }) {
  const m = t.membership;
  return (
    <section id="membership" aria-labelledby="membership-title" className="bg-sand/60 text-ink">
      <div className="grid lg:min-h-svh lg:grid-cols-2">
        {/* On large screens the photo is a sticky, screen-height panel rather than stretching to the full height of the
            text column – that keeps a sensible crop (the guest and the harbour) instead of a face-only close-up. */}
        <div className="lg:relative">
          <Photo
            item={media.membership}
            locale={locale}
            sizes="(min-width: 1024px) 50vw, 100vw"
            effect="parallax"
            className="aspect-[4/5] md:aspect-[16/10] lg:sticky lg:top-0 lg:aspect-auto lg:h-svh"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-24 md:px-10 md:py-28 lg:px-14 lg:py-32 xl:px-24">
          <SectionIntro eyebrow={t.membership.eyebrow} heading={t.membership.heading} headingId="membership-title" className="text-wood [&_h2]:text-ink" />
          {/* What membership gives, told as a short story (client, 2026-11-26), then one clear way in. */}
          <div className="reveal mt-8 max-w-xl space-y-5">
            {m.story.map((paragraph, i) => (
              <p key={paragraph} className={i === 1 ? "font-serif text-2xl leading-snug font-light text-ink md:text-3xl" : "text-lg leading-relaxed text-stone"}>
                {paragraph}
              </p>
            ))}
          </div>
          <p className="reveal mt-8 max-w-xl border-t border-ink/15 pt-4 text-sm text-stone">{m.priceLine}</p>
          {/* Opens the Refshaleøen sign-up in the booking pop-up (see BookingDialog). */}
          <a href={links.signupRefshaleoen} className={buttonClass("dark", "reveal mt-10 self-start max-sm:w-full")}>
            {m.cta}
          </a>
          <a href={links.signupHavnegade} className="link-underline reveal mt-6 self-start py-1 text-sm text-stone">
            {m.havnegadeLink}
          </a>
        </div>
      </div>
    </section>
  );
}
