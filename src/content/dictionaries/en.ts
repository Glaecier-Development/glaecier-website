// English copy – translation of da.ts. Same source markers apply (see da.ts and docs/content-audit.md).
import type { Dictionary } from "./da";

export const en: Dictionary = {
  meta: {
    title: "Glaecier – Sauna and community on the water in Copenhagen",
    description:
      "Glaecier is a floating sauna community in Copenhagen with a panorama sauna and a floating pool of filtered harbour water. Members’ club at Refshaleøen – Havnegade coming soon.",
  },
  prototype: {
    banner: "Preview of the new website – booking and login take place on glaecier.com.",
    bannerShort: "Preview · booking and login via glaecier.com",
  },
  nav: {
    label: "Main menu",
    skip: "Skip to content",
    menu: "Menu",
    homeLabel: "Home",
    close: "Close menu",
    book: "Book",
    home: "Glaecier – home",
    newTab: "(opens in a new tab)",
    bookingDialog: { title: "Book Open Gus", close: "Close booking" },
    language: { label: "Language", current: "EN", switchTo: "Dansk" },
    items: [
      {
        id: "membership",
        label: "Sign up for membership",
        children: [
          { id: "refshaleoen", label: "Refshaleøen – join the lobby" },
          { id: "havnegade", label: "Havnegade – pre-register" },
        ],
      },
      { id: "book", label: "Book Sauna Gus", children: [] },
      {
        id: "private-corporate",
        label: "Rent Glaecier",
        children: [
          { id: "private-hire", label: "Private Hire" },
          { id: "corporate-events", label: "Corporate Events" },
          { id: "brand-activations", label: "Brand Activations" },
        ],
      },
      { id: "our-story", label: "Our Story", children: [] },
    ],
    contact: { address: "Address", city: "1432 Copenhagen", email: "Email", instagram: "Instagram" },
  },
  hero: {
    line: "Sauna and bathing on the water in Copenhagen",
    tagline: "Calm sauna experiences on the water in Copenhagen – with a focus on wellbeing, health and community.",
    primary: "Membership",
    secondary: "Book Open Gus",
    video: { place: "Copenhagen", title: "A sanctuary on the water.", sub: "Sauna, bathing and community in Copenhagen.", membership: "Explore membership" },
    switcher: { label: "Hero variant (development only)", a: "A · Golden hour", b: "B · Nordic architecture", video: "Video" },
  },
  quicklinks: {
    label: "Shortcuts",
    title: "Glaecier",
    subtitle: "Sauna and community – in the heart of Copenhagen",
    body: "Glaecier is a floating sauna community in Copenhagen, where calm, health and community meet all year round. A place on the water where you can step away from the pace of the city and find presence in the middle of it all. The facility is designed as a modern houseboat with a panorama sauna, changing rooms and quiet lounges, plus a floating pool of clean, filtered harbour water. Here you move between heat and cold in a simple, sensory experience.",
    cta: "Book",
    previous: "Previous",
    next: "Next",
    cards: {
      refshaleoen: { tag: "Membership", title: "Sign-up Refshaleøen", body: "Join the membership lobby at Refshaleøen. It's free and without obligation.", cta: "Join the lobby" },
      havnegade: { tag: "Opens 2027", title: "Sign-up Havnegade", body: "Pre-register without obligation and be the first to hear when membership at Havnegade opens.", cta: "Pre-register" },
      book: { tag: "Open Gus", title: "Book Sauna Gus", body: "Open Gus is for everyone – no membership needed. A guided sauna gus with three rounds for 399 DKK.", cta: "Book" },
      baf: { tag: "For members", title: "Bring a Friend", body: "As a member you can bring up to two friends – from 249 DKK per guest, bought in the app.", cta: "Read more" },
      hire: { tag: "Private & Corporate", title: "Private Hire", body: "Host your event at Glaecier. Thursday evenings are the ideal time.", cta: "Read more" },
    },
  },
  // Happenings section on the homepage (client, 2026-11-24). English on both languages. The events are in happenings.ts.
  happenings: {
    eyebrow: "Happenings",
    heading: "Upcoming at Glaecier",
    lead: "Guided gus, rituals and gatherings on the water. Book your spot by email and we’ll confirm it.",
    label: "Upcoming events",
    previous: "Previous",
    next: "Next",
    readMore: "Read more",
    book: "Book by email",
    soldOut: "Sold out",
    nextOne: "Hear about the next one",
    interest: "Register interest by email",
    emailNote: "Opens an email to community@glaecier.com",
  },
  intro: {
    eyebrow: "Glaecier · Refshaleøen",
    statement: "Heat, cold and the harbour – in the middle of Copenhagen.",
    body: "A floating sauna community with a panorama sauna and a pool of filtered harbour water – a calm place to step away from the pace of the city.",
    details: [
      "Glaecier is a floating sauna community in Copenhagen, where calm, health and community meet all year round. A place on the water to step away from the pace of the city and be present in the middle of it all.",
      "The panorama sauna opens onto the harbour, and outside lies a floating pool of clean, filtered harbour water. Here you move between heat and cold in a simple, sensory experience.",
    ],
  },
  facilities: {
    eyebrow: "The place",
    heading: "A modern houseboat in the harbour",
    items: [
      { title: "The panorama sauna", body: "Heat with a view across the water." },
      { title: "The floating pool", body: "Clean, filtered harbour water – a natural transition from heat to cold." },
      { title: "Deck and lounge", body: "Pool deck, lounge and a cup of coffee." },
    ],
    details: {
      sauna: "The sauna opens onto the harbour, so the view across the water comes with you into the heat.",
      pool: "Clean, filtered harbour water makes a safe and natural transition from heat to cold.",
      lounge: "Unwind on the pool deck or in the lounge with a cup of coffee. Changing rooms and quiet spaces are part of it.",
    },
  },
  experiences: {
    eyebrow: "Experiences",
    heading: "Heat, scent and steam",
    lead: "Water and essential oils over hot stones, three rounds in the sauna and a dip in the pool in between.",
    featured: [
      { title: "Open Gus", access: "Bookable by everyone", meta: "Tuesday evenings · three rounds with a gusmaster", action: "Book Open Gus" },
      { title: "Member Gus", access: "Members only", meta: "By members, for members · booked in the app", action: "About membership" },
      { title: "Special experiences", access: "Upcoming", meta: "Member events and courses – details to follow", action: "" },
    ],
    cta: "Book Open Gus",
    details: {
      intro:
        "A gus is a sauna ritual in which water infused with essential oils is poured over the hot stones. Steam fills the room, and a gusmaster guides you through three rounds, cooling off in the pool in between.",
      items: [
        {
          title: "Open Gus",
          meta: "For non-members · Tuesdays 18:30–20:00 and 20:30–22:00",
          body: "Experience Glaecier without a membership: three sauna rounds of around 12 minutes, dips in the pool and light refreshments.",
        },
        {
          title: "Member Gus",
          meta: "For members · weekly, booked in the app",
          body: "Created by members, for members. Our gusmasters are volunteers from the community, and every session has its own energy.",
        },
        {
          title: "Gusmaster course",
          meta: "Upcoming · details to follow",
          body: "For the first time, Glaecier is opening a course in gus – the craft behind the heat, and how to create an experience people remember.",
        },
        { title: "Member events", meta: "For members", body: "As a member, you can join the community’s gatherings throughout the year." },
      ],
    },
  },
  membership: {
    eyebrow: "Membership",
    heading: "A community on the water",
    intro: "A private members’ club on the water – come whenever it suits you.",
    paths: [
      {
        label: "Refshaleøen",
        title: "The membership lobby",
        body: "Free and non-binding. Invitations are drawn at random – it is not a waiting list.",
        cta: "Join the lobby",
      },
      {
        label: "Havnegade · opening 2027",
        title: "Pre-registration",
        body: "No waiting list. Register without obligation and be among the first to hear when membership opens.",
        cta: "Pre-register",
      },
    ],
    price: "Priced by age, from 299 DKK/month",
    details: {
      intro:
        "Glaecier is a private members’ club. As a member you come when it suits you – up to 10 visits a month, including gus and member events.",
      lobby:
        "Joining the lobby is free and non-binding. Invitations are sent out at random to keep the community diverse – it is not a waiting list, and when you signed up makes no difference. Invited members attend a mandatory introduction before their membership starts.",
      havnegade:
        "At Havnegade, anyone can join without a waiting list. Register without obligation and be among the first to hear when membership opens.",
      facts: ["Up to 10 visits a month", "Priced by age – from 299 DKK/month", "Start-up fee 399 DKK · 3-month binding period"],
    },
  },
  locations: {
    eyebrow: "Locations",
    heading: "Refshaleøen – and soon Havnegade",
    refshaleoen: {
      name: "Refshaleøen",
      status: "Open",
      body: "At the end of the pier opposite La Banchina – surrounded by water, with a view across the city.",
    },
    havnegade: {
      name: "Havnegade",
      status: "Upcoming · expected to open early 2027 – to be confirmed",
      body: "Directly on the water in the heart of Copenhagen. Address and opening date to be confirmed.",
    },
    hoursLink: "Opening hours",
    hoursLabel: "Members’ opening hours",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hoursNote: "Tuesday evenings are reserved for Open Gus.",
    details: {
      refshaleoen: "Our first club sits at the end of the pier opposite La Banchina, surrounded by water with a view across Copenhagen.",
      havnegade:
        "Directly on the water in the heart of Copenhagen. Visits are registered through an app. Address, opening date and facilities will be confirmed later.",
    },
  },
  hire: {
    eyebrow: "Private & Corporate",
    heading: "Gather your people on the water",
    lead: "For selected occasions, we open Glaecier to private groups, companies and brands. Thursday evenings are the natural choice.",
    items: [
      { id: "private-hire", audience: "For private groups", title: "Private Hire", body: "Sauna and bathing for your own guests – at Glaecier’s calm pace." },
      { id: "corporate-events", audience: "For companies", title: "Corporate Events", body: "Heat, cold and time together by the harbour – a calm alternative to the meeting room." },
      { id: "brand-activations", audience: "For brands", title: "Brand Activations", body: "Partnerships with brands that share our values of calm, health and community." },
    ],
    cta: "Send an enquiry",
    details: {
      intro:
        "Events are not an everyday occurrence at Glaecier, but we welcome enquiries. Thursday evenings after 17:00 are the ideal time, and larger events can arrange exclusive use of the club.",
      privateHire: "Gather your own people around sauna and bathing. Glaecier is a quiet place, so we do not host stag or hen parties.",
    },
  },
  philosophy: {
    eyebrow: "Our story",
    statement: "A bathing house for today – in a tradition more than 250 years old.",
    body: "Copenhageners have bathed in the harbour for more than 250 years. We continue that tradition – calm, inclusive and in dialogue with our neighbours.",
    details: [
      "For more than 250 years, Copenhagen has had bathing houses along its harbour – from the first wooden bathhouses at Langebro and Rysensteen to the later public baths. Glaecier continues that tradition in a contemporary form.",
      "People meet here across age, background and circumstance – to be together or on their own. Through partnerships with NGOs and minority groups, we work to make the experience accessible to more people.",
      "Glaecier is a quiet place. Sauna and bathing are calm activities, and we develop the site in dialogue with our neighbours.",
    ],
  },
  book: {
    meta: {
      title: "Book Open Gus – Glaecier",
      description: "Open Gus is open to everyone – no membership needed. A guided saunagus with three rounds, dips in the pool and light refreshments at Refshaleøen.",
    },
    eyebrow: "Open Gus · Refshaleøen",
    title: "Your next pause begins here.",
    intro: "Open Gus is open to everyone – no membership needed. A one-hour guided saunagus with three sauna rounds, cooling dips in the pool and light refreshments.",
    primary: "See times and book",
    secondary: "What to expect",
    sessions: {
      eyebrow: "Choose your gus",
      heading: "Two sessions every Tuesday evening",
      body: "Pick a date and time in Glaecier's booking calendar, where you can see the gusmaster and the seats available for each evening.",
      booking: {
        heading: "Find your moment.",
        body: "Choose your session and reserve your place by the water.",
        frameTitle: "Glaecier booking calendar",
        loading: "Loading the calendar…",
        slow: "The calendar is taking longer than usual. You can also open the booking in a new window below.",
        failedTitle: "The calendar can't be reached right now",
        failedBody: "Check your connection and try again, or open the booking in a new window.",
        retry: "Try again",
        note: "Booking and payment run on Glaecier's official booking system.",
        // Shown once the app has moved the frame on to checkout. Progress can't be carried into a new window.
        checkoutNote: "Payment opens here. If it doesn't appear, open the booking in a new window and choose your session again.",
        open: "Open the booking in a new window",
      },
      stepsHeading: "How to book",
      steps: [
        { title: "Choose a date and time", body: "The calendar shows the coming Tuesdays with the gusmaster and seats available." },
        { title: "Choose your spots", body: "Enter your name, email and phone number – or log in if you have a profile." },
        { title: "Pay and arrive", body: "Complete the payment online and join us at Refshalevej 143." },
      ],
    },
    expect: {
      eyebrow: "What to expect",
      heading: "Heat, cold and calm",
      items: [
        { title: "The heat", body: "The gusmaster pours water infused with essential oils over the hot stones and guides you through three rounds of about 12 minutes in the panorama sauna." },
        { title: "The cold", body: "Between rounds you dip into the floating pool of clean, filtered harbour water." },
        { title: "The calm", body: "Afterwards there are light refreshments and time to land by the water." },
      ],
    },
    practical: {
      eyebrow: "Practical",
      heading: "Before you come",
      items: [
        { label: "Where", value: "Refshalevej 143, 1432 Copenhagen", note: "At the end of the pier, opposite La Banchina." },
        { label: "When", value: "Tuesdays 18:30–20:00 and 20:30–22:00" },
        { label: "Who", value: "Everyone – no membership needed" },
        { label: "Payment", value: "Online, when you book" },
      ],
      directions: "Get directions",
      faq: "FAQ",
      contact: "Questions? Write to",
    },
    member: {
      heading: "Want to come more often?",
      body: "As a member you come whenever it suits you – up to 10 visits a month, including gus and member events.",
      cta: "About membership",
    },
  },
  signup: {
    meta: {
      title: "Become a member – Glaecier",
      description: "Join the membership lobby at Refshaleøen or pre-register for Havnegade. Free and non-binding.",
    },
    eyebrow: "Become part of Glaecier",
    title: "Choose your place. Find your calm.",
    intro: "Sauna, harbour bathing and community in Copenhagen. Choose your location and sign up.",
    refshaleoen: {
      status: "Open · Membership lobby",
      name: "Refshaleøen",
      title: "Join the membership lobby",
      body: "Our first sauna community – on the water, overlooking Copenhagen.",
      points: [
        "Signing up is free and non-binding.",
        "Invitations are sent out at random to keep the community diverse and balanced.",
        "It's not a waiting list – everyone has an equal chance, whenever they signed up.",
        "Invited members attend a mandatory introduction before their membership starts.",
      ],
      cta: "Join the lobby",
    },
    havnegade: {
      status: "Opening 2027 · Pre-registration",
      name: "Havnegade",
      title: "Be there from the beginning",
      body: "A new free space on the water in the heart of the city – sauna, bathing and calm.",
      points: [
        "Havnegade is an upcoming location. The opening date and details will be confirmed later.",
        "Pre-registration is non-binding and simply registers your interest.",
        "You'll be among the first to hear when membership opens.",
      ],
      cta: "Pre-register",
    },
    prices: {
      eyebrow: "Membership at Refshaleøen",
      heading: "Priced by age",
      tiers: [
        { who: "18–24 years & students", price: "299" },
        { who: "25–29 years & 65+ years", price: "349" },
        { who: "30–65 years", price: "449" },
      ],
      unit: "DKK / month",
      includes: "Up to 10 visits a month, including gus and member events.",
      terms: ["Start-up fee 399 DKK", "Initial binding period of three months", "One month's notice, effective from the 1st of the month"],
      termsLink: "Membership and subscription terms",
      havnegade: "Prices for Havnegade have not been published yet.",
    },
    steps: {
      eyebrow: "How to become a member",
      heading: "Three calm steps",
      items: [
        { title: "Join the lobby", body: "Free and non-binding – in Glaecier's official form." },
        { title: "Invitations are drawn at random", body: "Everyone in the lobby has an equal chance – at any time." },
        { title: "An introduction, and you're in", body: "Invited members attend a mandatory introduction before their membership starts." },
      ],
    },
    privacy: "You sign up in Glaecier's official form on glaecier.com, where you also accept the terms and privacy policy. This page stores no information.",
    gus: { heading: "Want to experience Glaecier without being a member?", cta: "Book Open Gus" },
  },
  // Gift cards (client, 2026-11-24): banner above the footer on every page and the /gift-card/ page. English on both
  // languages. Open Gus price VERIFIED (glaecier.com: 399 kr; Tuesday evenings and Saturdays on /gus). glaecier.com sells
  // no gift cards online, so they are ordered by email to community@glaecier.com. Client (2026-11-24): any number of
  // tickets, each used individually, for Open Gus on Tuesdays or Saturdays.
  giftCard: {
    meta: {
      title: "Gift cards – Glaecier",
      description: "Give a warm gift: an Open Gus at Glaecier, a guided sauna gus on the water in Copenhagen. 399 DKK.",
    },
    banner: { heading: "Buy a warm gift", label: "Gift cards" },
    title: "Buy someone a warm gift",
    lead: "A thoughtful moment of heat on the water in Copenhagen.",
    product: {
      tag: "Open Gus",
      title: "Open Gus gift tickets",
      body: "Give the heat of a guided saunagus: three rounds in the panorama sauna, a dip in the floating pool and time to land. Our Open Gus sessions are held on Tuesdays and Saturdays.",
      points: [
        "For Open Gus on Tuesdays or Saturdays",
        "Buy as many tickets as you like",
        "Each ticket is used on its own – give them to different people or use them on different days",
      ],
      price: "399 DKK",
      per: "per ticket",
    },
    buy: "Buy tickets by email",
    emailNote: "Opens an email to community@glaecier.com",
  },
  // Footer, Villa Copenhagen-style without partner logos (client, 2026-11-20). English on both languages.
  footer: {
    tagline: "Sauna and community – in the heart of Copenhagen",
    visit: "Visit",
    city: "1432 Copenhagen",
    directions: "Directions",
    contact: "Contact",
    instagram: "Instagram",
    hours: "Members’ opening hours",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hoursNote: "Tuesday evenings are reserved for Open Gus.",
    explore: "Explore",
    signup: "Sign up for membership",
    book: "Book Sauna Gus",
    hire: "Rent Glaecier",
    giftCards: "Gift cards",
    faq: "FAQ",
    language: "Language",
    disclaimer: "Prototype of a new website – not the official glaecier.com.",
  },
};
