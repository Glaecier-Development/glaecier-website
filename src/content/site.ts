// Language-neutral facts. All verified against glaecier.com on 2026-10-30 unless marked.
export const site = {
  name: "Glaecier",
  email: "community@glaecier.com",
  instagram: { handle: "@glaecier_official", url: "https://www.instagram.com/glaecier_official/" },
  address: { street: "Refshalevej 143", city: "1432 København" },
  // Member opening hours, Refshaleøen, index 0 = Monday. Fallback only: the footer reads api.glaecier.com/open_hours
  // (src/lib/open-hours.ts) and shows these only if the API was unreachable at build time and in the browser.
  hours: [
    ["07:00", "23:00"],
    ["07:00", "18:30"],
    ["07:00", "23:00"],
    ["07:00", "17:00"],
    ["07:00", "23:00"],
    ["07:00", "23:00"],
    ["07:00", "23:00"],
  ],
  // Absolute site root for metadata (canonical, hreflang, Open Graph). Set by the Pages workflow; replace at launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/",
  // Hero shown in production builds. "video" = video hero (pending client approval); "b" = approved image hero,
  // kept as the fallback. In `npm run dev` a switcher compares "video", "b" and "a".
  heroVariant: "video" as "video" | "a" | "b",
} as const;
