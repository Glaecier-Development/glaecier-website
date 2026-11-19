"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/content/links";
import type { Dictionary } from "@/content/dictionaries";
import { BookingFrame } from "@/components/ui/BookingFrame";

type FrameText = Parameters<typeof BookingFrame>[0]["text"];

/** A link to /da/book/ or /en/book/ (with or without the Pages base path), but not to an anchor on it. */
const isBookLink = (a: HTMLAnchorElement) => a.origin === location.origin && /\/(da|en)\/book\/?$/.test(a.pathname) && !a.hash;

/**
 * Every "Book" button on the site opens Glaecier's live booking app in a pop-up instead of leaving the page. The buttons
 * stay ordinary links to /book/, so a new-tab click, a visitor without JavaScript or a failed script still gets there.
 * The frame is only loaded on first open and kept afterwards, so closing and reopening doesn't lose a booking in progress.
 */
export function BookingDialog({ text }: { text: Dictionary["nav"]["bookingDialog"] & { frame: FrameText } }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || !isBookLink(a)) return;
      // Capture phase on window: runs before Next's Link handler, which would otherwise navigate.
      e.preventDefault();
      e.stopPropagation();
      setOpened(true);
      dialog.current?.showModal();
      document.documentElement.style.overflow = "hidden";
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  const close = () => dialog.current?.close();

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
            {text.title}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label={text.close}
            className="-mr-2 grid size-11 shrink-0 place-items-center text-paper/80 transition-colors hover:text-paper"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.25">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        {opened && <BookingFrame src={links.bookingApp} text={text.frame} className="min-h-0 flex-1" />}
      </div>
    </dialog>
  );
}
