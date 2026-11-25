// Member opening hours from Glaecier's API (public, CORS *). No path aliases here, so scripts/check-open-hours.mjs can
// import this file directly with Node.

export const openHoursUrl = "https://api.glaecier.com/open_hours";

export type DayHours = { open: string; close: string; closed: boolean };

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
const time = /^([01]\d|2[0-3]):[0-5]\d$/;

/** Monday-first hours from a GET /open_hours response, or null unless all seven days have the expected shape. */
export function parseOpenHours(json: unknown): DayHours[] | null {
  const hours = (json as { openHours?: Record<string, Partial<DayHours> | undefined> } | null)?.openHours;
  const list = days.map((d) => hours?.[d]);
  const valid = list.every((h) => !!h && typeof h.closed === "boolean" && (h.closed || (time.test(h.open ?? "") && time.test(h.close ?? ""))));
  return valid ? list.map((h) => ({ open: h!.open ?? "", close: h!.close ?? "", closed: h!.closed! })) : null;
}

/** Fetches and parses the hours; null on any failure (network, timeout, status, shape). */
export async function fetchOpenHours(init?: RequestInit): Promise<DayHours[] | null> {
  try {
    const res = await fetch(openHoursUrl, { signal: AbortSignal.timeout(8000), ...init });
    return res.ok ? parseOpenHours(await res.json()) : null;
  } catch {
    return null;
  }
}
