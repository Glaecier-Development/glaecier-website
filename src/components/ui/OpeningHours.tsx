"use client";

import { useEffect, useState } from "react";
import { fetchOpenHours, type DayHours } from "@/lib/open-hours";

/**
 * Opening hours as a list of days. `initial` is what the API said at build time (or site.hours if it was down then);
 * the browser asks the API again on load, so a change in Glaecier's admin shows without a new deploy.
 */
export function OpeningHours({ initial, days, closed, className = "" }: { initial: DayHours[]; days: readonly string[]; closed: string; className?: string }) {
  const [hours, setHours] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();
    fetchOpenHours({ signal: controller.signal }).then((fresh) => fresh && setHours(fresh));
    return () => controller.abort();
  }, []);

  return (
    <dl className={className}>
      {hours.map((h, i) => (
        <div key={days[i]} className="flex justify-between border-b border-paper/15 py-1.5">
          <dt>{days[i]}</dt>
          <dd className="tabular-nums">{h.closed ? closed : `${h.open}–${h.close}`}</dd>
        </div>
      ))}
    </dl>
  );
}
