import type { Dictionary } from "@/content/dictionaries";
import { happenings, type Happening } from "@/content/happenings";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { CardRail } from "@/components/ui/CardRail";
import { Photo } from "@/components/ui/Photo";

/** An email to the community inbox with the event filled in. The site itself collects nothing. */
const mailto = (h: Happening, intent: "book" | "interest") => {
  const subject = intent === "book" ? `Booking: ${h.title} (${h.when})` : `Interest: ${h.title}`;
  const body =
    intent === "book"
      ? `Hi Glaecier,\n\nI would like to book a spot for ${h.title} (${h.when}).\n\nNumber of people:\nName:\n`
      : `Hi Glaecier,\n\nPlease let me know when I can book ${h.title}.\n\nName:\n`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Upcoming happenings, Villa Copenhagen-style: a heading, then dark cards that scroll sideways. Each card shows the date
 * on the photo, a title and a teaser; "Read more" opens the full text and practical details in place, and booking is
 * an email to the community inbox. The events themselves live in src/content/happenings.ts.
 */
export function Happenings({ t, locale }: { t: Dictionary; locale: Locale }) {
  const h = t.happenings;
  if (happenings.length === 0) return null;
  return (
    <section id="happenings" aria-labelledby="happenings-title" className="bg-paper py-24 md:py-36">
      <div className="container-page mb-10 md:mb-14">
        <p className="eyebrow reveal text-wood">{h.eyebrow}</p>
        <h2 id="happenings-title" className="reveal mt-5 font-serif text-5xl leading-[1] font-light tracking-[-0.015em] uppercase md:text-7xl">
          {h.heading}
        </h2>
        <p className="reveal mt-6 max-w-2xl font-serif text-2xl leading-snug font-light text-stone md:text-3xl">{h.lead}</p>
        <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-stone">{h.note}</p>
      </div>

      <CardRail label={h.label} previous={h.previous} next={h.next}>
        {happenings.map((event) => (
          <li key={event.id} className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-1.5rem)/3.15)]">
            <article aria-labelledby={`${event.id}-title`} className="flex h-full flex-col text-ink">
              <div className="relative">
                <Photo item={event.photo} locale={locale} sizes="(min-width: 1024px) 32vw, (min-width: 640px) 60vw, 85vw" className="aspect-[16/10]" />
                <p className="eyebrow absolute top-4 left-4 bg-wood/90 px-3 py-1.5 text-[0.6875rem] text-paper">{event.when}</p>
                {event.status === "sold-out" && (
                  <p className="eyebrow absolute top-4 right-4 bg-paper/85 px-3 py-1.5 text-[0.6875rem] text-ink">{h.soldOut}</p>
                )}
              </div>

              <div className="flex flex-1 flex-col pt-6 md:pt-8">
                <h3 id={`${event.id}-title`} className="font-serif text-3xl leading-tight font-light">
                  {event.title}
                </h3>
                <p className="mt-4 leading-relaxed text-stone">{event.teaser}</p>

                {/* Native disclosure: works without JavaScript and keeps the card in place. */}
                <details className="group mt-6 border-t border-ink/15 pt-4">
                  <summary className="eyebrow flex cursor-pointer list-none items-center justify-between py-2 text-ink hover:text-wood [&::-webkit-details-marker]:hidden">
                    {h.readMore}
                    <span aria-hidden="true" className="text-lg transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="space-y-4 pt-3 pb-2 text-sm leading-relaxed text-stone">
                    {event.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <dl className="border-t border-ink/15 pt-3">
                      {event.details.map((d) => (
                        <div key={d.label} className="flex justify-between gap-6 py-1">
                          <dt className="eyebrow pt-0.5 text-wood">{d.label}</dt>
                          <dd className="text-right text-ink">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </details>

                <div className="mt-auto pt-8">
                  {event.status === "open" ? (
                    <a href={mailto(event, "book")} className={buttonClass("outline")}>
                      {h.book}
                    </a>
                  ) : (
                    <a href={mailto(event, "interest")} className={buttonClass("outline")}>
                      {event.status === "sold-out" ? h.nextOne : h.interest}
                    </a>
                  )}
                  <p className="mt-3 text-xs text-stone">{h.emailNote}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </CardRail>
    </section>
  );
}
