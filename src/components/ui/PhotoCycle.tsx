"use client";

import { useEffect, useState } from "react";
import type { MediaItem } from "@/content/media";
import type { Locale } from "@/i18n/config";
import { Photo } from "@/components/ui/Photo";

/**
 * Sets of photos that take turns in one frame, cross-fading every few seconds; each set is shown side by side.
 * Stays on the first set for reduced motion, and pauses while the frame is off screen or the tab is hidden.
 */
export function PhotoCycle({ sets, locale, sizes, imgClassName = "", interval = 4500 }: { sets: readonly (readonly MediaItem[])[]; locale: Locale; sizes: string; imgClassName?: string; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [frame, setFrame] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!frame || sets.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    observer.observe(frame);
    const timer = setInterval(() => visible && !document.hidden && setIndex((i) => (i + 1) % sets.length), interval);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [frame, sets.length, interval]);

  return (
    <div ref={setFrame} className="relative size-full">
      {sets.map((set, i) => (
        <div
          key={set.map((p) => p.slug).join()}
          aria-hidden={i !== index}
          className={`absolute inset-0 grid auto-cols-fr grid-flow-col gap-0.5 transition-opacity duration-1000 ease-calm ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          {set.map((photo) => (
            <Photo key={photo.slug} item={photo} locale={locale} sizes={sizes} className="h-full" imgClassName={imgClassName} />
          ))}
        </div>
      ))}
    </div>
  );
}
