import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BookingDialog } from "@/components/ui/BookingDialog";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, publishedLocales } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import "../globals.css";

// Manrope is the sans used on the current glaecier.com. Headings use Cormorant Garamond, a classic Garamond close to the
// Soho House look the client asked for (2026-11-24). Only 400–600 are loaded, so the "font-light" headings render at
// 400 – the regular weight that matches that look.
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant", display: "swap", style: ["normal", "italic"] });

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
        <BookingDialog text={{ ...t.nav.bookingDialog, frame: { ...t.book.sessions.booking, newTab: t.nav.newTab } }} />
      </body>
    </html>
  );
}
