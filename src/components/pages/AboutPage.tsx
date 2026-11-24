import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { pages } from "@/content/links";
import { media } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/ui/buttons";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";

type Props = { t: Dictionary; locale: Locale };

const h2 = "font-serif text-4xl leading-[1.02] font-light tracking-[-0.015em] text-balance uppercase md:text-6xl";
const textLink = "link-underline py-1 text-[0.75rem] font-medium tracking-[0.16em] uppercase";

/**
 * About, structured like Villa Copenhagen's About page with Glaecier's own facts: a full-screen hero, an intro with
 * two photos, the three values (photo above each), the bathing tradition with the archive photo, the experience with a
 * three-photo strip, and community & inclusion with a member's words. The gift card box and footer follow.
 */
export function AboutPage({ t, locale }: Props) {
  const a = t.about;
  return (
    <>
      <PageHero item={media.about.hero} locale={locale} eyebrow={a.eyebrow} title={a.title} intro={a.intro.heading}>
        {null}
      </PageHero>

      {/* Intro: heading and text, then two photos side by side. */}
      <section aria-labelledby="about-intro" className="bg-paper py-24 md:py-36">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 id="about-intro" className={`reveal ${h2}`}>
              {a.intro.heading}
            </h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-stone md:text-xl">{a.intro.body}</p>
            <Link prefetch={false} href={pages.book(locale)} className={`reveal mt-8 inline-block ${textLink}`}>
              {a.intro.cta}
            </Link>
          </div>
          <div className="mt-16 grid gap-3 md:mt-24 md:grid-cols-2">
            {media.about.intro.map((photo) => <Photo key={photo.slug} item={photo} locale={locale} sizes="(min-width: 768px) 50vw, 100vw" effect="reveal" className="aspect-[4/3]" />)}
          </div>
        </div>
      </section>

      {/* Values: a lead statement, then each value with its photo above. */}
      <section aria-labelledby="about-values" className="bg-sand/60 py-24 md:py-36">
        <div className="container-page">
          <h2 id="about-values" className={`reveal ${h2}`}>
            {a.values.heading}
          </h2>
          <p className="reveal mt-8 max-w-3xl font-serif text-2xl leading-snug font-light text-ink md:text-4xl">{a.values.lead}</p>
          <ul className="mt-16 grid gap-14 md:mt-24 md:grid-cols-3 md:gap-8">
            {a.values.items.map((value, i) => (
              <li key={value.title} className="reveal">
                <Photo item={media.about.values[i]} locale={locale} sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[4/5]" />
                <h3 className="mt-6 font-serif text-3xl font-light uppercase">{value.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-stone">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* History: the archive photo beside the tradition. */}
      <section aria-labelledby="about-history" className="bg-harbour py-24 text-paper md:py-36">
        <div className="container-page grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <Photo item={media.about.history} locale={locale} sizes="(min-width: 1024px) 50vw, 100vw" effect="reveal" className="aspect-[16/10] lg:col-span-6" />
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="about-history" className={`reveal ${h2}`}>
              {a.history.heading}
            </h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-paper/80">{a.history.body}</p>
          </div>
        </div>
      </section>

      {/* Experience: text, then a three-photo strip. */}
      <section aria-labelledby="about-experience" className="bg-paper py-24 md:py-36">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 id="about-experience" className={`reveal ${h2}`}>
              {a.experience.heading}
            </h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-stone md:text-xl">{a.experience.body}</p>
            <Link prefetch={false} href={pages.book(locale)} className={`reveal mt-8 inline-block ${textLink}`}>
              {a.experience.cta}
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-3">
            {media.about.experience.map((photo, i) => (
              <Photo key={photo.slug} item={photo} locale={locale} sizes="(min-width: 768px) 33vw, 50vw" effect="reveal" className={`aspect-[3/4] ${i === 2 ? "max-md:col-span-2 max-md:aspect-[16/10]" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Community & inclusion: photo beside text and a member's words. */}
      <section aria-labelledby="about-community" className="bg-sand/60 py-24 md:py-36">
        <div className="container-page grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <h2 id="about-community" className={`reveal ${h2}`}>
              {a.community.heading}
            </h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-stone">{a.community.body}</p>
            <figure className="reveal mt-10 border-l border-wood pl-6">
              <blockquote className="font-serif text-2xl leading-snug font-light text-ink md:text-3xl">“{a.community.quote}”</blockquote>
              <figcaption className="eyebrow mt-4 text-wood">{a.community.quoteBy}</figcaption>
            </figure>
            <Link prefetch={false} href={pages.signup(locale)} className={buttonClass("dark", "reveal mt-10 max-sm:w-full")}>
              {a.community.cta}
            </Link>
          </div>
          <Photo item={media.about.community} locale={locale} sizes="(min-width: 1024px) 40vw, 100vw" effect="reveal" className="aspect-[4/5] lg:col-span-5 lg:col-start-8" />
        </div>
      </section>
    </>
  );
}
