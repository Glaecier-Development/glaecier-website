export const locales = ["da", "en"] as const;
export type Locale = (typeof locales)[number];

/**
 * The languages that are actually published. English only (client, 2026-11-20): the Danish texts stay in the
 * dictionaries so they can be switched back on, but no /da/ pages are built; /da/ addresses forward to /en/
 * (public/da/). Add "da" here again to restore the Danish site.
 */
export const publishedLocales = ["en"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
