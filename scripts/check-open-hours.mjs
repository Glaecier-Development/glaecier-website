// Self-check for the opening-hours parser (Node 24 strips the TypeScript types). Run: npm test
import assert from "node:assert/strict";
import { parseOpenHours } from "../src/lib/open-hours.ts";

const day = (open, close, closed = false) => ({ open, close, closed });
const week = (over = {}) => ({
  id: "x",
  openHours: { monday: day("06:30", "23:00"), tuesday: day("07:00", "18:30"), wednesday: day("07:00", "23:00"), thursday: day("07:00", "17:00"), friday: day("10:00", "23:00"), saturday: day("07:00", "23:00"), sunday: day("07:00", "23:00"), ...over },
});

assert.deepEqual(parseOpenHours(week())[0], { open: "06:30", close: "23:00", closed: false }, "Monday comes first");
assert.equal(parseOpenHours(week()).length, 7);
assert.equal(parseOpenHours(week({ sunday: { closed: true } }))[6].closed, true, "a closed day needs no times");
assert.equal(parseOpenHours(week({ sunday: undefined })), null, "a missing day rejects the response");
assert.equal(parseOpenHours(week({ monday: day("6:30", "23:00") })), null, "times must be HH:MM");
assert.equal(parseOpenHours(week({ monday: day("<b>", "23:00") })), null);
assert.equal(parseOpenHours(week({ monday: { open: "06:30", close: "23:00" } })), null, "closed must be a boolean");
assert.equal(parseOpenHours(null), null);
assert.equal(parseOpenHours({ detail: "Not Found" }), null);
console.log("open-hours parser OK");
