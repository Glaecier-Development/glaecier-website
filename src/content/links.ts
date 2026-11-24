// GLAECIER's official systems. Booking, payment, sign-up and login stay on them. Checked 2026-11-02 (Refinement 06
// audit, docs/refinement-06.md): the glaecier.com forms offer no public API or approved embed, so /signup/ hands over
// to these URLs. The booking app is the exception: it sends no X-Frame-Options or frame-ancestors (checked 2026-11-09),
// so /book/ embeds it.
import type { Locale } from "@/i18n/config";

export const links = {
  /** Live booking app (calendar, seats, guest checkout via Flexybox), embedded on /book/. */
  bookingApp: "https://book.glaecier.com/",
  /** Flexybox member login. */
  memberLogin: "https://profile.flexybox.com/glaecier/sign-in",
  /** Refshaleøen membership lobby sign-up form. */
  signupRefshaleoen: "https://glaecier.com/signup-refshaleoen/",
  /** Havnegade pre-registration form. */
  signupHavnegade: "https://glaecier.com/signup-havnegade/",
  /** Bring a Friend: how members bring guests (prices, peak hours, rules). */
  bringAFriend: "https://glaecier.com/baf",
  /** Membership and subscription terms (linked from the official sign-up form). */
  membershipTerms: "https://glaecier.com/glaeciers-membership-and-subscription-terms/",
  faq: { da: "https://glaecier.com/faq/", en: "https://glaecier.com/en/faq-en/" } satisfies Record<Locale, string>,
  /** Directions to Refshalevej 143. */
  directions: "https://www.google.com/maps/search/?api=1&query=Glaecier%2C%20Refshalevej%20143%2C%201432%20K%C3%B8benhavn",
} as const;

/** The site's own pages. Next's Link adds the base path. */
export const pages = {
  home: (l: Locale) => `/${l}/`,
  book: (l: Locale) => `/${l}/book/`,
  signup: (l: Locale) => `/${l}/signup/`,
  giftCard: (l: Locale) => `/${l}/gift-card/`,
  about: (l: Locale) => `/${l}/about/`,
  cookies: (l: Locale) => `/${l}/cookie-policy/`,
};
export type Page = "home" | "book" | "signup" | "giftCard" | "about" | "cookies";
