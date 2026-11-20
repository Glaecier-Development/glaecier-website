"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * A row of cards that scrolls sideways: by touch, trackpad or shift+wheel natively, and by the two arrow buttons for a
 * mouse. Each arrow moves one card and is disabled at its end of the row.
 */
export function CardRail({ label, previous, next, children }: { label: string; previous: string; next: string; children: ReactNode }) {
  const rail = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () => setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const move = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const arrow = "grid size-11 place-items-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30";
  return (
    <div>
      <div className="mb-4 flex justify-end gap-2 px-2 sm:px-3">
        <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-label={previous} className={arrow}>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button type="button" onClick={() => move(1)} disabled={edges.end} aria-label={next} className={arrow}>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <ul
        ref={rail}
        aria-label={label}
        // relative: keeps absolutely positioned children (sr-only text) inside the scroller, or they widen the whole page.
        className="relative flex snap-x snap-mandatory scroll-px-2 gap-2 overflow-x-auto px-2 pb-2 [scrollbar-width:none] sm:scroll-px-3 sm:gap-3 sm:px-3 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
