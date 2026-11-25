# GLAECIER website – handover for Claude Code

Bilingual (DA/EN) static prototype of a redesigned glaecier.com. Setup, scripts, structure and the GitHub Pages
pipeline are in @README.md; Next.js 16 specifics in @AGENTS.md. This file holds the working rules, the decisions
behind the current design, and where the work stands.

## Working rules (from the project owner)

- **Never commit, push, merge or deploy without explicit approval for that specific step.** Approval for one update
  does not carry over to the next.
- The public preview (https://sebastianbf1.github.io/glaecier-website/) is only updated after explicit approval.
- **Never touch glaecier.com** or its WordPress site. Proposals for it are delivered as files, not applied.
- Do not invent services, prices, opening dates, facilities, availability or photos. No AI-generated imagery. Copy
  for prices, terms and opening status must match the official pages (mark verified strings with a `// VERIFIED`
  comment and the source).
- Do not replace working links into GLAECIER's official systems (`src/content/links.ts`).
- Never publish secrets or personal data. The repo is **public**.
- All supplied photos are approved, but commit only the ones the site uses (`.gitignore` allow-list).
- Every change ships in both Danish and English.
- When done, show the result (screenshots, local links) and list what was verified, what wasn't, and the risks.

## Workflow

- Work on a feature branch; `main` is development; `preview` deploys to GitHub Pages (pushes to `main` deploy
  nothing). To publish an approved update: fast-forward `preview` (`git push origin <branch>:preview`), then
  `gh run watch` and check the live page.
- Dev server: `npm run dev` (port 3000). Checks before any handover: `npx tsc --noEmit`, `npx eslint src`, a build
  with the Pages base path and `npm run check:export`:
  `PAGES_BASE_PATH=/glaecier-website npm run build && npm run check:export`
- New photo: put the original in `assets/images/`, run `npm run media`, reference the slug in `src/content/media.ts`
  (with DA/EN alt text), and add its `.jpg` and `.webp` sizes to the `.gitignore` allow-list.

### Gotchas

- `npm run build` overwrites `.next/` and breaks a running dev server (500s): restart the dev server afterwards.
- After deleting a route, `tsc` reports errors in `.next/types/validator.ts` until the next build regenerates it.
- Formatting matches Prettier with `--print-width 200`; the default width reformats whole files.
- Files are LF in git, CRLF in the Windows working copy. Scripted edits must normalise `\r\n` first.
- `docs/` is git-ignored: audits, screenshots and proposals there exist only on the original machine.
- Scroll-driven `.reveal` animations don't render in a hidden browser pane; for screenshots use headless Chrome
  with `prefers-reduced-motion: reduce`.

## Decisions

- **Booking (`/book/`)**: embeds the live booking app `https://book.glaecier.com/` in an iframe (it sends no
  X-Frame-Options / frame-ancestors). `src/components/ui/BookingFrame.tsx` adds a branded loader, failure detection
  (no-cors probe) with retry, a slow-load hint after 15 s and a note once the frame navigates to Flexybox checkout.
  The app is English-only and is never modified. Never try to bypass iframe restrictions or recreate booking/payment.
- **Membership sign-up**: the official WordPress forms post to themselves with a reCAPTCHA bound to glaecier.com and
  offer no API or approved embed. So every "Tilmeld dig lobbyen" / "Join the lobby" button opens
  `https://glaecier.com/signup-refshaleoen/` and every "Forhåndstilmeld dig" / "Pre-register" button opens
  `https://glaecier.com/signup-havnegade/` directly (new tab, no page in between). There are no English versions of
  these forms. The site collects no personal data. Prices, terms and explanations stay on `/signup/`.
- **Opening hours** (client, 2026-11-25): the footer reads `GET https://api.glaecier.com/open_hours` (public, CORS *)
  at build time and again in the browser on every page load (`src/lib/open-hours.ts`, `OpeningHours.tsx`). An invalid
  or failed response keeps the last good hours; `site.hours` is only the fallback if the API was down at build time.
  `npm test` checks the parser.
- Havnegade is a future location (opening announced for 2027, details unconfirmed): never show Refshaleøen photos
  as Havnegade. The harbour photo `havnegade-havnebus` is the client's city view, not the facility.

## State as of 2026-11-16

- `main`: last approved homepage work.
- `booking-embed` (pushed, also what `preview` currently shows): the `/book/` iframe embed. Not merged into `main`.
- `signup-pages` (local, based on `booking-embed`): uncommitted change pointing all sign-up buttons straight at the
  official forms (`Membership.tsx`, `SignupPage.tsx`). A git stash holds an earlier, rejected version with separate
  `/signup-refshaleoen/` and `/signup-havnegade/` info pages.
- A CSS proposal restyling the two WordPress forms in GLAECIER branding (`docs/wordpress-signup-forms.css`, local)
  awaits the owner's decision; it changes nothing functional.
- GitHub Pages was found disabled on 2026-11-12 and re-enabled (build type: GitHub Actions).

## Open items and risks

- Payment inside the booking frame is unverified: Flexybox's payment page, 3-D Secure, MobilePay and the return page
  can only be tested with a real order, which needs the owner's explicit approval (a guest booking also creates an
  account).
- Not tested on a real iPhone/Safari or with real touch.
- Login inside the booking frame is separate from a normal login on book.glaecier.com; progress can't move between them.
