"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { buttonClass, ExternalAction } from "@/components/ui/buttons";
import { Wordmark } from "@/components/ui/Wordmark";

const subscribe = () => () => {};

type Text = {
  frameTitle: string;
  loading: string;
  slow: string;
  failedTitle: string;
  failedBody: string;
  retry: string;
  note: string;
  checkoutNote: string;
  open: string;
  newTab: string;
};

/**
 * Glaecier's live booking app in a frame. A cross-origin frame can't report its progress, so: the branded loader sits
 * behind the frame, which stays transparent until the app paints over it; a no-cors request detects a site that can't
 * be reached at all; and any load after the first means the app has navigated the frame away, which it only does to
 * hand over to Flexybox checkout. The app itself is never touched.
 */
export function BookingFrame({ src, text, id, className = "" }: { src: string; text: Text; id?: string; className?: string }) {
  // The frame is only rendered after hydration, so its load event can't fire before React is listening.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "slow" | "failed">("loading");
  const [loads, setLoads] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    const request = new AbortController();
    // An opaque no-cors response says nothing about the page, but the request rejects if the site is unreachable (or the
    // visitor is offline). It runs alongside the frame's first load, so it wins even if the frame has already "loaded" a
    // browser error page.
    fetch(src, { mode: "no-cors", cache: "no-store", signal: request.signal }).catch((e: Error) => e.name !== "AbortError" && setStatus("failed"));
    // Going offline later never tears down a loaded frame: a visitor may be halfway through a booking.
    const offline = () => setStatus((s) => (s === "loaded" ? s : "failed"));
    // shortcut: 15 s only decides when to suggest the new-window link; the frame keeps loading. Tune if the app gets faster.
    const slow = setTimeout(() => setStatus((s) => (s === "loading" ? "slow" : s)), 15000);
    window.addEventListener("offline", offline);
    return () => {
      request.abort();
      clearTimeout(slow);
      window.removeEventListener("offline", offline);
    };
  }, [mounted, attempt, src]);

  const retry = () => {
    setStatus("loading");
    setLoads(0);
    setAttempt((a) => a + 1);
  };

  return (
    <>
      <div id={id} className={`relative bg-[#15171b] ${className}`}>
        {status === "failed" ? (
          <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
            <Wordmark className="h-6 text-paper/50" />
            <p className="font-serif text-2xl font-light text-paper">{text.failedTitle}</p>
            <p className="max-w-sm text-sm leading-relaxed text-fog">{text.failedBody}</p>
            <button type="button" onClick={retry} className={buttonClass("solid", "mt-3")}>
              {text.retry}
            </button>
          </div>
        ) : (
          <>
            <div aria-hidden={status === "loaded"} className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center text-fog">
              <Wordmark className="h-7 text-paper/80 motion-safe:animate-pulse" />
              <p role="status" className={status === "slow" ? "max-w-xs text-sm leading-relaxed" : "eyebrow"}>
                {status === "slow" ? text.slow : text.loading}
              </p>
            </div>
            {mounted && (
              <iframe
                key={attempt}
                src={src}
                title={text.frameTitle}
                allow="payment"
                onLoad={() => {
                  setLoads((n) => n + 1);
                  setStatus("loaded");
                }}
                className="relative block size-full"
              />
            )}
          </>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-3 text-sm text-fog sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p aria-live="polite" className="max-w-xl leading-relaxed">
          {status === "loaded" && loads > 1 ? text.checkoutNote : text.note}
        </p>
        <ExternalAction href={src} newTab={text.newTab} variant="text" className="shrink-0 self-start text-paper sm:self-auto">
          {text.open}
          <span aria-hidden="true">↗</span>
        </ExternalAction>
      </div>
    </>
  );
}
