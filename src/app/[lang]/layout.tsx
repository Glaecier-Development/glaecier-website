import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BookingDialog } from "@/components/ui/BookingDialog";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, publishedLocales } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import "../globals.css";

// Glaecier Brand Book 2026 (typography, p. 10): headlines in Cormorant Garamond, Light or Regular, never bold; spaced
// capitals for short titles; italic for quotes. Only Regular (+ italic) is loaded, so every heading renders at 400 –
// the weight the client chose (2026-11-24). Body text should be Glacial Indifference; until its font files are added,
// Manrope stands in (Glacial Indifference is not on Google Fonts).
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400"], variable: "--font-cormorant", display: "swap", style: ["normal", "italic"] });

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => publishedLocales.map((lang) => ({ lang }));

export const viewport: Viewport = { themeColor: "#1c1b19" };

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, t.meta);
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  // Only published languages render (English only, 2026-11-20); /da/ is a forward to /en/ (public/da/).
  if (!isLocale(lang) || !(publishedLocales as readonly string[]).includes(lang)) notFound();
  const t = getDictionary(lang);
  // data-scroll-behavior lets Next switch off smooth scrolling during page changes, so a new page opens at the top.
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          {t.nav.skip}
        </a>
        {children}
        <BookingDialog
          text={{
            ...t.nav.bookingDialog,
            frame: { ...t.book.sessions.booking, newTab: t.nav.newTab },
            signupTitles: { refshaleoen: t.quicklinks.cards.refshaleoen.title, havnegade: t.quicklinks.cards.havnegade.title },
          }}
        />
      </body>
    </html>
  );
}
