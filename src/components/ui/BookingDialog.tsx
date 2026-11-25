"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/content/links";
import type { Dictionary } from "@/content/dictionaries";
import { BookingFrame } from "@/components/ui/BookingFrame";

type FrameText = Parameters<typeof BookingFrame>[0]["text"];
type Text = Dictionary["nav"]["bookingDialog"] & { frame: FrameText; signupTitles: Record<string, string> };

const app = new URL(links.bookingApp).origin;

/**
 * What a link opens in the pop-up, or null: /da/book/ or /en/book/ (with or without the Pages base path, not an anchor
 * on it) opens the booking calendar; a book.glaecier.com/signup/<location> link opens that sign-up form.
 */
const target = (a: HTMLAnchorElement) => {
  if (a.origin === location.origin && /\/(da|en)\/book\/?$/.test(a.pathname) && !a.hash) return { src: links.bookingApp, signup: null };
  const signup = a.origin === app ? /^\/signup\/([a-z]+)\/?$/.exec(a.pathname)?.[1] : undefined;
  return signup ? { src: a.href, signup } : null;
};

/**
 * Every "Book" and sign-up button on the site opens Glaecier's live booking app in a pop-up instead of leaving the page.
 * The buttons stay ordinary links (to /book/ or into the app), so a new-tab click, a visitor without JavaScript or a
 * failed script still gets there. A frame is only loaded on first open and kept while the same link is reopened, so
 * closing and reopening doesn't lose a booking or sign-up in progress; opening a different one loads it fresh.
 */
export function BookingDialog({ text }: { text: Text }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState<{ src: string; signup: string | null } | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      const next = a && a.target !== "_blank" ? target(a) : null;
      if (!next) return;
      // Capture phase on window: runs before Next's Link handler, which would otherwise navigate.
      e.preventDefault();
      e.stopPropagation();
      setOpened((prev) => (prev?.src === next.src ? prev : next));
      // A link inside the site menu: close the menu, so it isn't still open behind the pop-up.
      document.querySelectorAll<HTMLDialogElement>("dialog[open]").forEach((d) => d !== dialog.current && d.close());
      dialog.current?.showModal();
      document.documentElement.style.overflow = "hidden";
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  const close = () => dialog.current?.close();
  const signup = opened?.signup;
  const title = signup ? (text.signupTitles[signup] ?? text.title) : text.title;

  return (
    <dialog
      ref={dialog}
      aria-labelledby="booking-dialog-title"
      onClose={() => (document.documentElement.style.overflow = "")}
      // A click on the dimmed backdrop (the dialog element itself, outside its panel) closes it.
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/75 open:flex sm:h-[min(92dvh,60rem)] sm:w-[min(94vw,72rem)] motion-safe:open:animate-[rise_0.6s_var(--ease-calm)_both]"
    >
      <div className="flex size-full flex-col bg-ink px-4 pt-4 pb-5 text-paper sm:px-8 sm:pt-6 sm:pb-7">
        <div className="mb-4 flex items-center justify-between gap-6 sm:mb-6">
          <h2 id="booking-dialog-title" className="font-serif text-2xl leading-none font-light sm:text-4xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label={signup ? text.signup.close : text.close}
            className="-mr-2 grid size-11 shrink-0 place-items-center text-paper/80 transition-colors hover:text-paper"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.25">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        {opened && (
          // Keyed by URL: switching between booking and a sign-up starts that frame afresh. The sign-up form moves on
          // inside the frame too, so it keeps its own note rather than the booking's "payment opens here".
          <BookingFrame
            key={opened.src}
            src={opened.src}
            text={signup ? { ...text.frame, ...text.signup, checkoutNote: text.signup.note } : text.frame}
            className="min-h-0 flex-1"
          />
        )}
      </div>
    </dialog>
  );
}
