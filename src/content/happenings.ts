// Upcoming happenings on the homepage (client, 2026-11-24). English only.
//
// To add an event, copy one of the entries below and change it. To remove one, delete its entry.
// - status "open": shows "Book by email" (opens an email to community@glaecier.com with the event in the subject).
// - status "sold-out": shows "Sold out" and an email link to hear about the next one.
// - status "coming": a date isn't set yet; shows "Register interest by email".
// Events are shown in the order listed. Only real, confirmed events and facts from the client go here.
import { media, type MediaItem } from "./media";

export type Happening = {
  id: string;
  /** Short date label on the photo, e.g. "2 December". */
  when: string;
  title: string;
  /** One line under the title. */
  teaser: string;
  /** Shown under "Read more". */
  body: string[];
  /** Practical details under "Read more". Leave out what isn't confirmed. */
  details: { label: string; value: string }[];
  status: "open" | "sold-out" | "coming";
  photo: MediaItem;
};

export const happenings: Happening[] = [
  {
    id: "to-the-moon-december",
    when: "2 December · 17:00–19:00",
    title: "To The Moon Moment: saunagus at Glaecier",
    teaser: "A guided saunagus with gentle heat, care from HONEY and time to land in your body.",
    body: [
      "Join a calm and sensory saunagus experience at Glaecier. Maria Bruun Iuel-Brockdorff from Glaecier guides us through a saunagus session with gentle heat, so you can join even if it’s your first time trying saunagus.",
      "Along the way, we invite you to a HONEY care ritual, and you’ll take a HONEY product home in your goodie bag.",
      "There will be refreshments and snacks before and after, and the chance to use Glaecier’s facilities.",
      "We look forward to a moment where we slow down together, feel the heat and enjoy the experience – whether you’re new to the sauna or already love gus.",
    ],
    details: [
      { label: "Date", value: "2 December, 17:00–19:00" },
      { label: "Place", value: "Glaecier" },
      { label: "Price", value: "360 DKK" },
      { label: "Address", value: "Refshalevej 143, 1432 Copenhagen" },
    ],
    status: "sold-out",
    photo: media.happenings.gus,
  },
  {
    id: "to-the-moon-january",
    when: "January · Date to be announced",
    title: "To The Moon Moment returns",
    teaser: "The guided saunagus with gentle heat and care from HONEY is back in January.",
    body: [
      "After a sold-out evening in December, To The Moon Moment returns in January: a calm, guided saunagus with gentle heat and a HONEY care ritual – open to first-timers and gus lovers alike.",
      "The date will be announced soon. Write to us to be the first to hear when you can book.",
    ],
    details: [
      { label: "When", value: "January – date to be announced" },
      { label: "Address", value: "Refshalevej 143, 1432 Copenhagen" },
    ],
    status: "coming",
    photo: media.happenings.harbour,
  },
];
