"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { locales, type Locale } from "@/i18n/config";
import { links, pages, type Page } from "@/content/links";
import { ExternalAction, InternalAction } from "@/components/ui/buttons";
import { Wordmark } from "@/components/ui/Wordmark";

type NavItem = Dictionary["nav"]["items"][number];
// Only what the header needs, so the full dictionary isn't serialised into the client bundle.
export type HeaderText = Pick<Dictionary, "nav" | "prototype">;

/** Where a nav item points: Membership has its own page; the rest are sections of the homepage. */
const itemHref = (id: string, locale: Locale, page: Page) =>
  id === "membership" ? pages.signup(locale) : page === "home" ? `#${id}` : `${pages.home(locale)}#${id}`;

function LanguageSwitch({ t, locale, page, className = "" }: { t: HeaderText; locale: Locale; page: Page; className?: string }) {
  return (
    <div role="group" aria-label={t.nav.language.label} className={`eyebrow flex items-center gap-1.5 ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <Link prefetch={false}
            href={pages[page](l)}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "page" : undefined}
            className="py-2 opacity-55 transition-opacity hover:opacity-100 aria-[current=page]:opacity-100"
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Photo beside the menu panel on wider screens (Villa Copenhagen-style split menu).
const menuPhoto = `${base}/media/poolkant-ved-solnedgang-1080.webp`;

/** One row in the menu: an uppercase link with a hairline below; items with children get a +/- toggle. */
function MenuRow({ item, href, base: home, close }: { item: NavItem; href: string; base: string; close: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="menu-item border-b border-ink/15">
      <div className="flex items-center">
        <Link prefetch={false} href={href} onClick={close} className="flex-1 py-4 text-lg tracking-[0.06em] uppercase transition-colors hover:text-wood md:py-5 md:text-xl">
          {item.label}
        </Link>
        {item.children.length > 0 && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`menu-${item.id}`}
            aria-label={item.label}
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-2 size-11 shrink-0"
          >
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-[1.5px] w-6 -translate-1/2 bg-current" />
            <span aria-hidden="true" className={`absolute top-1/2 left-1/2 h-6 w-[1.5px] -translate-1/2 bg-current transition-transform duration-300 ease-calm ${open ? "scale-y-0" : ""}`} />
          </button>
        )}
      </div>
      {item.children.length > 0 && (
        <ul id={`menu-${item.id}`} hidden={!open} className="pb-4">
          {item.children.map((child) => (
            <li key={child.id}>
              <Link prefetch={false} href={`${home}#${child.id}`} onClick={close} className="block py-2 pl-4 text-base text-stone transition-colors hover:text-ink">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function SiteHeader({ t, locale, page = "home" }: { t: HeaderText; locale: Locale; page?: Page }) {
  const [solid, setSolid] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // Transparent over the full-screen hero film; the light header takes over just before the hero ends.
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      // 128 > the 96px scroll-padding, so an in-page jump from the hero to the next section lands on the light header.
      setSolid(window.scrollY > (hero ? hero.offsetHeight - 128 : 48));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // The header instance survives client-side navigation between pages: close the menu and re-measure the new hero.
    dialog.current?.close();
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  const close = () => dialog.current?.close();
  const home = page === "home" ? "" : pages.home(locale);
  const showLogo = page !== "home" || solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,color,box-shadow] duration-700 ease-calm ${
        solid ? "bg-paper/92 text-ink shadow-[0_1px_0_rgb(28_27_25/0.08)] backdrop-blur-md" : "text-paper"
      }`}
    >
      <p className={`px-5 py-1 text-center text-[0.6875rem] tracking-wide transition-colors duration-700 ${solid ? "bg-sand/80" : "bg-ink/40"}`}>
        <span className="sm:hidden">{t.prototype.bannerShort}</span>
        <span className="max-sm:hidden">{t.prototype.banner}</span>
      </p>

      {/* Villa-style bar: menu icon left, Book right. On the homepage the logo sits large in the hero, so the small one
          only appears once the light header takes over (and on the other pages). */}
      <div className="relative flex h-16 items-center justify-between px-4 md:px-6 lg:h-20">
        <button
          type="button"
          className="-ml-1 flex size-11 items-center justify-center"
          aria-haspopup="dialog"
          aria-controls="site-menu"
          aria-label={t.nav.menu}
          onClick={() => dialog.current?.showModal()}
        >
          <span aria-hidden="true" className="flex w-8 flex-col gap-[7px]">
            <span className="h-[2px] bg-current" />
            <span className="h-[2px] bg-current" />
          </span>
        </button>

        <Link prefetch={false}
          href={`/${locale}`}
          // Already home: Next won't navigate to the same URL, so go back up to the hero ourselves.
          onClick={(e) => {
            if (page !== "home") return;
            e.preventDefault();
            history.replaceState(history.state, "", location.pathname);
            scrollTo({ top: 0 });
          }}
          aria-label={t.nav.home}
          className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-calm ${showLogo ? "opacity-100" : "pointer-events-none opacity-0"}`}
          tabIndex={showLogo ? undefined : -1}
        >
          <Wordmark className="h-5 sm:h-6" />
        </Link>

        <InternalAction href={pages.book(locale)} current={page === "book"} variant={solid ? "pillDark" : "pillLight"}>
          {t.nav.book}
        </InternalAction>
      </div>

      <dialog
        id="site-menu"
        ref={dialog}
        aria-label={t.nav.label}
        className="menu-dialog m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-ink/55"
      >
        <div className="flex h-full">
          <div className="menu-panel flex h-full w-full flex-col overflow-y-auto bg-paper px-5 pb-8 sm:px-8 md:w-[32rem] md:shrink-0 md:px-10">
            <div className="flex h-16 shrink-0 items-center justify-between lg:h-20">
              <button type="button" onClick={close} aria-label={t.nav.close} className="-ml-2 flex size-11 items-center justify-center" autoFocus>
                <span aria-hidden="true" className="relative block size-7">
                  <span className="absolute top-1/2 left-0 h-[2px] w-full rotate-45 bg-current" />
                  <span className="absolute top-1/2 left-0 h-[2px] w-full -rotate-45 bg-current" />
                </span>
              </button>
              <Wordmark className="h-5 sm:h-6" />
            </div>

            <nav aria-label={t.nav.label} className="mt-6 md:mt-10">
              <ul className="border-t border-ink/15">
                <li className="menu-item border-b border-ink/15">
                  <Link prefetch={false} href={`/${locale}`} onClick={close} className="block py-4 text-lg tracking-[0.06em] uppercase transition-colors hover:text-wood md:py-5 md:text-xl">
                    {t.nav.homeLabel}
                  </Link>
                </li>
                {t.nav.items.map((item) => (
                  <MenuRow key={item.id} item={item} href={itemHref(item.id, locale, page)} base={home} close={close} />
                ))}
              </ul>
            </nav>

            <div className="mt-auto space-y-6 pt-10">
              <div className="flex flex-wrap gap-3">
                <InternalAction href={pages.book(locale)} variant="dark">
                  {t.nav.book}
                </InternalAction>
                <ExternalAction href={links.memberLogin} newTab={t.nav.newTab} variant="outline">
                  {t.nav.login}
                </ExternalAction>
              </div>
              <div className="flex items-center justify-between border-t border-ink/15 pt-5 text-sm text-stone">
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
                <LanguageSwitch t={t} locale={locale} page={page} />
              </div>
            </div>
          </div>
          {/* Clicking the photo closes the menu, like clicking outside it. */}
          <div aria-hidden="true" onClick={close} className="menu-photo relative hidden flex-1 cursor-pointer md:block">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative, pre-sized static file */}
            <img src={menuPhoto} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </dialog>
    </header>
  );
}
