import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/i18n/config";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Facilities } from "@/components/sections/Facilities";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Locations } from "@/components/sections/Locations";
import { Membership } from "@/components/sections/Membership";
import { Philosophy } from "@/components/sections/Philosophy";
import { PrivateHire } from "@/components/sections/PrivateHire";
import { Quicklinks } from "@/components/sections/Quicklinks";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  // Layout has already rejected unknown locales (dynamicParams = false).
  const locale = (await params).lang as Locale;
  const t = getDictionary(locale);
  const props = { t, locale };

  return (
    <>
      <SiteHeader t={{ nav: t.nav, prototype: t.prototype }} locale={locale} />
      <main id="main">
        <Hero {...props} />
        <Quicklinks {...props} />
        <Intro {...props} />
        <Facilities {...props} />
        <Membership {...props} />
        <Locations {...props} />
        <PrivateHire {...props} />
        <Philosophy {...props} />
      </main>
      <SiteFooter {...props} />
    </>
  );
}
