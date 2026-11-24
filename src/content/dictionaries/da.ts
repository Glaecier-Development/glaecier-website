// Danish copy. Source markers:
//   VERIFIED   – taken or condensed from glaecier.com (checked 2026-10-30)
//   DRAFT      – new copy written for the prototype; tone/claims need approval
//   UNVERIFIED – a factual claim that could not be confirmed on the live site
// Each section has short homepage copy at the top and a `details` block that keeps the full,
// longer content for the future dedicated pages. `details` is not rendered on the homepage.
// Full list in docs/content-audit.md.

export const da = {
  meta: {
    title: "Glaecier – Sauna og fællesskab på vandet i København",
    // VERIFIED (condensed)
    description:
      "Glaecier er et flydende saunafællesskab i København med panorama-sauna og flydende pool med filtreret havnevand. Medlemsklub på Refshaleøen – snart også i Havnegade.",
  },
  prototype: {
    banner: "Forhåndsvisning af ny hjemmeside – booking og login foregår på glaecier.com.",
    bannerShort: "Forhåndsvisning · booking og login via glaecier.com",
  },
  nav: {
    label: "Hovedmenu",
    skip: "Spring til indhold",
    menu: "Menu",
    // Menu labels are English on both languages (client, 2026-11-20).
    homeLabel: "Home",
    close: "Luk menu",
    book: "Book",
    home: "Glaecier – forside",
    newTab: "(åbner i en ny fane)",
    // Pop-up with the live booking app, opened by every "Book" button.
    bookingDialog: { title: "Book Open Gus", close: "Luk bookingen" },
    language: { label: "Sprog", current: "DA", switchTo: "English" },
    // Ids pick the target (see SiteHeader): membership → /signup/, its children → the official forms, book → booking
    // pop-up, the rest → sections of the homepage.
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
      { id: "about", label: "About", children: [] },
    ],
    // No phone number is published on glaecier.com (checked 2026-11-20), so the menu shows address, email and Instagram.
    contact: { address: "Address", city: "1432 Copenhagen", email: "Email", instagram: "Instagram" },
  },
  hero: {
    line: "Sauna og bad på vandet i København", // DRAFT (condensed from tagline)
    // VERIFIED – site tagline. Kept for metadata/future pages.
    tagline: "Rolige saunaoplevelser på vandet i København – med fokus på velvære, sundhed og fællesskab.",
    primary: "Medlemskab",
    secondary: "Book Open Gus",
    // DRAFT – client-proposed direction (2026-10-30)
    // The place line under the hero wordmark stays English on both languages (client, 2026-11-19).
    video: { place: "Copenhagen", title: "Et frirum på vandet.", sub: "Sauna, bad og fællesskab i København.", membership: "Udforsk medlemskab" },
    switcher: { label: "Hero-variant (kun udvikling)", a: "A · Gylden time", b: "B · Nordisk arkitektur", video: "Video" },
  },
  // Welcome text and side-scrolling cards: English on both languages (client, 2026-11-20: "everything in English").
  // Card facts checked against glaecier.com, /gus, /baf and the FAQ on 2026-11-20 (VERIFIED): Open Gus 399 kr, three rounds,
  // open to non-members; BAF members only, up to two friends, from 249 kr per guest in the app; Havnegade opens 2027;
  // lobby sign-up free and without obligation; events by enquiry, Thursday evenings ideal.
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
    note: "Here you’ll find all our upcoming events – sign up before they’re fully booked.",
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
    statement: "Varme, kulde og havnen – midt i København.", // DRAFT
    // VERIFIED (condensed)
    body: "Et flydende saunafællesskab med panorama-sauna og en pool med filtreret havnevand – et roligt sted at trække sig tilbage fra byens tempo.",
    details: [
      // VERIFIED
      "Glaecier er et flydende saunafællesskab i København, hvor ro, sundhed og fællesskab mødes året rundt. Et sted på vandet, hvor man kan trække sig tilbage fra byens tempo og finde nærvær midt i det hele.",
      "Panorama-saunaen åbner sig mod havnen, og udenfor ligger en flydende pool med rent, filtreret havnevand. Her bevæger man sig mellem varme og kulde i en enkel og sanselig oplevelse.",
    ],
  },
  facilities: {
    eyebrow: "Stedet",
    heading: "En moderne husbåd på havnen", // VERIFIED fact, DRAFT phrasing
    items: [
      // VERIFIED (no capacity, temperatures or dimensions are claimed)
      { title: "Panorama-saunaen", body: "Varmen med udsigt over vandet." },
      { title: "Den flydende pool", body: "Rent, filtreret havnevand – en naturlig overgang fra varme til kulde." },
      { title: "Dæk og lounge", body: "Pooldæk, lounge og en kop kaffe." },
    ],
    details: {
      // VERIFIED
      sauna: "Saunaen åbner sig mod havnen, så udsigten over vandet følger med ind i varmen.",
      pool: "Rent, filtreret havnevand giver en tryg og naturlig overgang fra varme til kulde.",
      lounge: "Slap af på pooldækket eller i loungen med en kop kaffe. Omklædning og rolige opholdsrum hører med.",
    },
  },
  experiences: {
    eyebrow: "Oplevelser",
    heading: "Varme, duft og damp", // DRAFT
    // VERIFIED (condensed from FAQ)
    lead: "Vand med æteriske olier over de varme sten, tre runder i saunaen og et dyp i poolen imellem.",
    featured: [
      // VERIFIED
      { title: "Open Gus", access: "Kan bookes af alle", meta: "Tirsdag aften · tre runder med en gusmester", action: "Book Open Gus" },
      // VERIFIED
      { title: "Member Gus", access: "Kun for medlemmer", meta: "Af medlemmer, for medlemmer · bookes i appen", action: "Om medlemskab" },
      // VERIFIED (member events) + UNVERIFIED (courses: only source is the Gusmaster-course poster)
      { title: "Særlige oplevelser", access: "Kommende", meta: "Medlemsevents og kurser – detaljer følger", action: "" },
    ],
    cta: "Book Open Gus",
    details: {
      // VERIFIED (FAQ)
      intro:
        "En gus er et saunaritual, hvor vand tilsat æteriske olier hældes over de varme sten. Dampen fylder rummet, og en gusmester guider dig gennem tre runder med afkøling i poolen imellem.",
      items: [
        // VERIFIED (FAQ + /gus). Price deliberately omitted.
        {
          title: "Open Gus",
          meta: "For ikke-medlemmer · tirsdage 18:30–20:00 og 20:30–22:00",
          body: "Oplev Glaecier uden medlemskab: tre saunarunder på omkring 12 minutter, dyp i poolen og en let forfriskning.",
        },
        // VERIFIED (FAQ). Weekly schedule/days not stated on the site.
        {
          title: "Member Gus",
          meta: "For medlemmer · ugentligt, bookes i appen",
          body: "Skabt af medlemmer for medlemmer. Gusmestrene er frivillige fra fællesskabet, og hver session har sin egen energi.",
        },
        // UNVERIFIED – from the "Become a facilitator" brand asset only; dates, price and format unknown.
        {
          title: "Gusmesterkursus",
          meta: "Kommende · detaljer følger",
          body: "For første gang åbner Glaecier for et kursus i gus – håndværket bag varmen, og hvordan man skaber en oplevelse, folk husker.",
        },
        // VERIFIED (mentioned on site; no event programme published)
        { title: "Medlemsevents", meta: "For medlemmer", body: "Som medlem kan du deltage i fællesskabets arrangementer i løbet af året." },
      ],
    },
  },
  membership: {
    eyebrow: "Medlemskab",
    heading: "Et fællesskab på vandet", // DRAFT
    // VERIFIED (condensed)
    intro: "En privat medlemsklub på vandet – kom, når det passer dig.", // DRAFT (facts listed separately)
    // Soho House-inspired (client, 2026-11-24). VERIFIED (glaecier.com: Members Gus Fri & Sun 19–20, member events,
    // "eksklusive rabatter hos lokale butikker").
    perks: "As a member you have access to events and experiences you won’t find anywhere else – Members Gus every Friday and Sunday evening, member events and exclusive discounts at local shops.",
    paths: [
      // VERIFIED (signup-refshaleoen + FAQ): random invitations, explicitly not a waiting list.
      {
        label: "Refshaleøen",
        title: "Medlemslobbyen",
        body: "Gratis og uforpligtende. Invitationer trækkes tilfældigt – det er ikke en venteliste.",
        cta: "Tilmeld dig lobbyen",
      },
      // VERIFIED: "uden venteliste", non-binding pre-registration. UNVERIFIED: how places are allocated at opening.
      {
        label: "Havnegade · åbner 2027",
        title: "Forhåndstilmelding",
        body: "Ingen venteliste. Tilmeld dig uforpligtende, og hør først, når medlemskabet åbner.",
        cta: "Forhåndstilmeld dig",
      },
    ],
    // VERIFIED (glaecier.com, 2026-10-30)
    price: "Pris efter alder, fra 299 kr./md.",
    details: {
      intro:
        "Glaecier er en privat medlemsklub. Som medlem kommer du, når det passer dig – op til 10 besøg om måneden, inklusive gus og medlemsevents.",
      // NB: the Danish homepage on glaecier.com still says "venteliste" – conflict logged in audit.
      lobby:
        "Tilmelding til lobbyen er gratis og uforpligtende. Invitationer sendes tilfældigt ud for at sikre et mangfoldigt fællesskab – det er ikke en venteliste, og hvornår du tilmeldte dig, har ingen betydning. Inviterede deltager i en obligatorisk introduktion, før medlemskabet starter.",
      havnegade:
        "I Havnegade kan alle melde sig ind uden venteliste. Tilmeld dig uforpligtende og få besked blandt de første, når medlemskabet åbner.",
      facts: ["Op til 10 besøg om måneden", "Pris efter alder – fra 299 kr./md.", "Opstartsgebyr 399 kr. · 3 måneders binding"],
    },
  },
  locations: {
    eyebrow: "Steder",
    heading: "Refshaleøen – og snart Havnegade",
    refshaleoen: {
      name: "Refshaleøen",
      status: "Åben",
      // VERIFIED (condensed)
      body: "For enden af molen over for La Banchina – omgivet af vand, med udsigt over byen.",
    },
    havnegade: {
      name: "Havnegade",
      status: "Kommende · forventet åbning i starten af 2027 – skal bekræftes",
      // VERIFIED (site) but launch details pending.
      body: "Direkte på vandet i hjertet af København. Adresse og åbningsdato bekræftes senere.",
    },
    // Short lines under the photo tiles (client, 2026-11-24). VERIFIED: address and "i starten af 2027" on glaecier.com.
    tiles: { refshaleoen: "Refshalevej 143", havnegade: "Opening early 2027" },
    hoursLink: "Åbningstider",
    hoursLabel: "Åbningstider for medlemmer",
    days: ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
    hoursNote: "Tirsdag aften er forbeholdt Open Gus.",
    details: {
      refshaleoen: "Vores første klub ligger for enden af molen over for La Banchina, omgivet af vand og med udsigt over København.",
      havnegade:
        "Direkte på vandet i hjertet af København. Besøg registreres via en app. Adresse, åbningsdato og faciliteter bekræftes senere.",
    },
  },
  hire: {
    eyebrow: "Privat & Erhverv",
    heading: "Saml jeres folk på vandet", // DRAFT
    // VERIFIED (FAQ: events by enquiry, Thursday evenings) + DRAFT phrasing
    lead: "Til udvalgte arrangementer åbner vi Glaecier for private selskaber, virksomheder og brands. Torsdag aften er det oplagte tidspunkt.",
    items: [
      // VERIFIED intent (FAQ); DRAFT phrasing
      { id: "private-hire", audience: "For private selskaber", title: "Privat leje", body: "Sauna og bad for jeres egne gæster – i Glaeciers rolige tempo." },
      // DRAFT – corporate offer not described on the live site
      { id: "corporate-events", audience: "For virksomheder", title: "Firmaarrangementer", body: "Varme, kulde og tid sammen ved havnen – et roligt alternativ til mødelokalet." },
      // DRAFT / UNVERIFIED – brand activations are not mentioned on the live site
      { id: "brand-activations", audience: "For brands", title: "Brand-aktiveringer", body: "Samarbejder med brands, der deler vores værdier om ro, sundhed og fællesskab." },
    ],
    cta: "Send en forespørgsel",
    details: {
      // VERIFIED (FAQ: events)
      intro:
        "Arrangementer er ikke hverdag hos Glaecier, men vi tager gerne imod forespørgsler. Torsdag aften efter kl. 17 er det oplagte tidspunkt, og større arrangementer kan efter aftale få klubben for sig selv.",
      // VERIFIED (FAQ)
      privateHire: "Saml jeres egne folk om sauna og bad. Glaecier er et stille sted, så vi holder ikke polterabender.",
    },
  },
  philosophy: {
    eyebrow: "Vores historie",
    statement: "En nutidig badeanstalt – i en tradition, der er over 250 år gammel.", // DRAFT, VERIFIED fact
    // VERIFIED (condensed)
    body: "Københavnerne har badet i havnen i over 250 år. Vi bygger videre på traditionen – roligt, inkluderende og i dialog med vores naboer.",
    details: [
      // VERIFIED
      "København har i over 250 år haft badeanstalter langs havnen – fra de første træbadehuse ved Langebro og Rysensteen til de senere offentlige badeanlæg. Glaecier bygger videre på den tradition i en nutidig fortolkning.",
      "Her mødes mennesker på tværs af alder, baggrund og livssituation – for at være sammen eller for sig selv. Gennem samarbejder med NGO’er og minoritetsgrupper arbejder vi for at gøre oplevelsen tilgængelig for flere.",
      "Glaecier er et stille sted. Sauna og badning er rolige aktiviteter, og vi udvikler stedet i dialog med vores naboer.",
    ],
  },
  // Book Open Gus page (/book/). Live dates, gusmasters and seats stay in the official calendar (no public API).
  book: {
    meta: {
      title: "Book Open Gus – Glaecier",
      description: "Open Gus er for alle – også uden medlemskab. En guidet saunagus med tre runder, dyp i poolen og en let forfriskning på Refshaleøen.",
    },
    eyebrow: "Open Gus · Refshaleøen",
    title: "Din næste pause begynder her.", // client-provided
    // VERIFIED (/gus, condensed)
    intro: "Open Gus er for alle – også uden medlemskab. En times guidet saunagus med tre runder, dyp i poolen og en let forfriskning.",
    primary: "Se tider og book",
    secondary: "Hvad kan jeg forvente?",
    sessions: {
      eyebrow: "Vælg din gus",
      heading: "To hold hver tirsdag aften", // VERIFIED (schedule on /gus)
      body: "Vælg dato og tid i Glaeciers bookingkalender. Her ser du gusmester og ledige pladser for hver aften.",
      // The live booking system (book.glaecier.com) is embedded below this heading.
      booking: {
        heading: "Find dit øjeblik.",
        body: "Vælg dit hold, og reservér din plads ved vandet.",
        frameTitle: "Glaeciers bookingkalender",
        loading: "Henter kalenderen…",
        slow: "Kalenderen er længere tid om at hente end normalt. Du kan også åbne bookingen i et nyt vindue nedenfor.",
        failedTitle: "Kalenderen kan ikke hentes lige nu",
        failedBody: "Tjek din forbindelse og prøv igen, eller åbn bookingen i et nyt vindue.",
        retry: "Prøv igen",
        // The booking app has no Danish version (checked 2026-11-09), so say so rather than surprise.
        note: "Booking og betaling foregår i Glaeciers officielle bookingsystem, som er på engelsk.",
        checkoutNote: "Betalingen åbner her. Hvis den ikke vises, så åbn bookingen i et nyt vindue og vælg dit hold igen.",
        open: "Åbn bookingen i et nyt vindue",
      },
      stepsHeading: "Sådan booker du",
      // VERIFIED (the flow on /gus → /hold/)
      steps: [
        { title: "Vælg dato og tid", body: "Kalenderen viser de kommende tirsdage med gusmester og ledige pladser." },
        { title: "Vælg antal pladser", body: "Udfyld navn, e-mail og telefonnummer – eller log ind, hvis du har en profil." },
        { title: "Betal og mød op", body: "Gennemfør betalingen online, og mød op på Refshalevej 143." },
      ],
    },
    expect: {
      eyebrow: "Hvad kan du forvente",
      heading: "Varme, kulde og ro",
      items: [
        // VERIFIED (FAQ + /gus)
        { title: "Varmen", body: "Gusmesteren hælder vand med æteriske olier over de varme sten og guider dig gennem tre runder i panorama-saunaen på omkring 12 minutter." },
        { title: "Kulden", body: "Mellem runderne dypper du dig i den flydende pool med rent, filtreret havnevand." },
        // VERIFIED (light refreshments) + DRAFT phrasing
        { title: "Roen", body: "Bagefter venter en let forfriskning og tid til at lande ved vandet." },
      ],
    },
    practical: {
      eyebrow: "Praktisk",
      heading: "Før du kommer",
      items: [
        // VERIFIED
        { label: "Hvor", value: "Refshalevej 143, 1432 København", note: "For enden af molen over for La Banchina." },
        { label: "Hvornår", value: "Tirsdage 18:30–20:00 og 20:30–22:00" },
        { label: "For hvem", value: "Alle – du behøver ikke at være medlem" },
        // VERIFIED ("Register and Pay"); the price itself is shown in the booking, not on the public pages.
        { label: "Betaling", value: "Online, når du booker" },
      ],
      directions: "Find vej",
      faq: "Ofte stillede spørgsmål",
      contact: "Spørgsmål? Skriv til",
    },
    member: {
      heading: "Vil du komme oftere?",
      // VERIFIED (membership details)
      body: "Som medlem kommer du, når det passer dig – op til 10 besøg om måneden, inklusive gus og medlemsevents.",
      cta: "Om medlemskab",
    },
  },
  // Membership / sign-up page (/signup/). Both forms stay on glaecier.com (reCAPTCHA, terms, no public API).
  signup: {
    meta: {
      title: "Bliv medlem – Glaecier",
      description: "Tilmeld dig medlemslobbyen på Refshaleøen eller forhåndstilmeld dig Havnegade. Gratis og uforpligtende.",
    },
    eyebrow: "Bliv en del af Glaecier",
    title: "Vælg dit sted. Find din ro.", // VERIFIED (glaecier.com/signup)
    intro: "Sauna, havnebad og fællesskab i København. Vælg din lokation, og tilmeld dig.", // VERIFIED
    perks: {
      heading: "Glaecier membership",
      body: "As a member you have access to events and experiences you won’t find anywhere else – Members Gus every Friday and Sunday evening, member events and exclusive discounts at local shops. Up to 10 visits a month on the water in Copenhagen.",
      cta: "Join the lobby",
    },
    refshaleoen: {
      status: "Åben · Medlemslobby",
      name: "Refshaleøen",
      title: "Bliv en del af medlemslobbyen",
      body: "Vores første saunafællesskab – på vandet, med udsigt over København.", // VERIFIED
      // VERIFIED (signup-refshaleoen + FAQ)
      points: [
        "Tilmeldingen er gratis og uforpligtende.",
        "Invitationer sendes tilfældigt ud for at sikre et mangfoldigt fællesskab.",
        "Det er ikke en venteliste – alle har lige stor chance, uanset hvornår de tilmeldte sig.",
        "Inviterede deltager i en obligatorisk introduktion, før medlemskabet starter.",
      ],
      cta: "Tilmeld dig lobbyen",
    },
    havnegade: {
      status: "Åbner i 2027 · Forhåndstilmelding", // VERIFIED (glaecier.com/signup)
      name: "Havnegade",
      title: "Vær med fra begyndelsen",
      body: "Et nyt frirum på vandet midt i byen – sauna, badning og ro.", // VERIFIED (condensed)
      points: [
        "Havnegade er en kommende lokation. Åbningsdato og detaljer bekræftes senere.",
        "Forhåndstilmeldingen er uforpligtende og viser blot din interesse.", // VERIFIED
        "Du får besked blandt de første, når vi åbner for medlemskab.", // VERIFIED
      ],
      cta: "Forhåndstilmeld dig",
    },
    prices: {
      eyebrow: "Medlemskab på Refshaleøen",
      heading: "Pris efter alder",
      // VERIFIED (signup-refshaleoen, 2026-11-02)
      tiers: [
        { who: "18–24 år & studerende", price: "299" },
        { who: "25–29 år & 65+ år", price: "349" },
        { who: "30–65 år", price: "449" },
      ],
      unit: "kr./md.",
      includes: "Op til 10 besøg om måneden, inklusive gus og medlemsevents.",
      terms: ["Opstartsgebyr 399 kr.", "Binding de første tre måneder", "Opsigelse med én måneds varsel til den 1. i måneden"],
      termsLink: "Medlems- og abonnementsvilkår",
      havnegade: "Priser for Havnegade er endnu ikke offentliggjort.",
    },
    steps: {
      eyebrow: "Sådan bliver du medlem",
      heading: "Tre rolige skridt",
      // VERIFIED (lobby process)
      items: [
        { title: "Tilmeld dig lobbyen", body: "Gratis og uforpligtende – i Glaeciers officielle formular." },
        { title: "Invitationer trækkes tilfældigt", body: "Alle i lobbyen har lige stor chance – når som helst." },
        { title: "Introduktion, og så er du medlem", body: "Inviterede deltager i en obligatorisk introduktion, før medlemskabet starter." },
      ],
    },
    privacy: "Tilmeldingen foregår i Glaeciers officielle formular på glaecier.com, hvor du også accepterer vilkår og privatlivspolitik. Denne side gemmer ingen oplysninger.",
    gus: { heading: "Vil du opleve Glaecier uden at være medlem?", cta: "Book Open Gus" }, // VERIFIED
  },
  // About page (/about/), built like Villa Copenhagen's About page with Glaecier's own facts (client, 2026-11-24). English on
  // both languages. VERIFIED against glaecier.com on 2026-11-24 (homepage: concept, "ro, sundhed og fællesskab",
  // "Fællesskab & inklusion", "Historiske københavn", "Hensyn til naboer", Havnegade early 2027); phrasing condensed.
  about: {
    meta: {
      title: "About – Glaecier",
      description: "A floating sauna community in Copenhagen, where calm, health and community meet all year round – in a bathing tradition more than 250 years old.",
    },
    eyebrow: "About",
    title: "A floating sauna community",
    intro: {
      heading: "A place on the water",
      body: "Glaecier is a floating sauna community in Copenhagen, where calm, health and community meet all year round. It is designed as a modern houseboat with a panorama sauna, changing rooms and quiet lounges, plus a floating pool of clean, filtered harbour water. Glaecier started on Refshaleøen, at the end of the pier on Refshalevej 143 – and opens in Havnegade, in the heart of Copenhagen, in early 2027.",
      cta: "Book Open Gus",
    },
    values: {
      heading: "Our values",
      lead: "Calm sauna experiences on the water in Copenhagen – with a focus on wellbeing, health and community.",
      items: [
        { title: "Calm", body: "Glaecier is a quiet place, focused on calm and presence. A place on the water where you can step away from the pace of the city and find presence in the middle of it all." },
        { title: "Health", body: "Here you move between heat and cold in a simple, sensory experience: the panorama sauna, then a dip in the floating pool – a safe and natural transition from heat to cold." },
        { title: "Community", body: "People meet across age, background and life situation – to be together or on their own. There is room for everyone." },
      ],
    },
    history: {
      heading: "A bathing tradition more than 250 years old",
      body: "Copenhagen has had bathing houses along the harbour for more than 250 years – from the first wooden bathhouses at Langebro and Rysensteen to the later public baths. Glaecier builds on that tradition in a contemporary way.",
    },
    experience: {
      heading: "Heat, cold and the harbour",
      body: "The panorama sauna opens onto the harbour, and outside lies the floating pool. In a guided gus, aromatic steam with essential oils fills the sauna over three rounds, each followed by a dip in the pool. Open Gus is for everyone – no membership needed.",
      cta: "Book Open Gus",
    },
    community: {
      heading: "Community & inclusion",
      body: "Glaecier is a community where people meet across age, background and life situation. We work actively to make the experience accessible to more people through collaborations with NGOs and minority groups. And we are good neighbours: Glaecier is a quiet place, developed in dialogue with the people around us – there are no parties or noisy events.",
      quote: "You meet people in a different way here – the sauna creates a quiet, shared experience that makes it easy just to be.",
      quoteBy: "Sofie, member",
      cta: "Sign up for membership",
    },
  },
  // Cookie policy (/cookie-policy/), client request 2026-11-24. Describes what this website actually does (checked in the
  // code on 2026-11-24: no cookies, no analytics or tracking, fonts served from the site itself). English on both languages.
  cookiesPage: {
    meta: { title: "Cookie policy – Glaecier", description: "How this website uses cookies: it sets none of its own, and has no analytics or tracking." },
    eyebrow: "Cookie policy",
    title: "Cookie policy",
    updated: "Last updated 24 November 2026",
    sections: [
      {
        heading: "Cookies on this website",
        body: "This website does not set any cookies of its own. It uses no analytics, advertising or tracking tools, and it does not store anything in your browser. Fonts and images are served from this website itself.",
      },
      {
        heading: "Booking and payment",
        body: "When you open the booking, Glaecier’s booking system (book.glaecier.com) is shown inside this website. It is a separate service with its own terms, and it may use cookies of its own – for example to keep you signed in or to complete a payment.",
      },
      {
        heading: "Links to other websites",
        body: "Sign-up forms, the FAQ, directions and Instagram open on other websites (glaecier.com, Google Maps and Instagram). Their own cookie rules apply there.",
      },
      {
        heading: "Questions",
        body: "If you have questions about cookies or your data, write to community@glaecier.com.",
      },
    ],
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
    banner: { heading: "Gift card", body: "Buy someone a warm gift – Open Gus tickets for Tuesdays or Saturdays.", cta: "Buy a warm gift", label: "Gift cards" },
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
    about: "About",
    cookies: "Cookie policy",
    faq: "FAQ",
    language: "Language",
    disclaimer: "Prototype of a new website – not the official glaecier.com.",
  },
};

export type Dictionary = typeof da;
