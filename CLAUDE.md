# Claude Code Configuration

See [AGENTS.md](./AGENTS.md) for all project documentation and AI agent instructions.

# UMBC SUAS Team Website

## Context
Competition website for UMBC's Small Unmanned Aircraft Systems team.
This site is a **scored deliverable** at the SUAS competition (section 2.4.1).
Judges are evaluating it, and so are potential sponsors and faculty advisors.

Built on the AstroWind template (Astro v6 + Tailwind v4).

## Scored requirements — do not regress these
Content that must exist:
- Team name and contact information
- Vehicle photos and/or video
- Design decision documentation (why we chose what we chose, with images)
- Build log / blog as a historical record of progress
- Sponsor list with logos

Quality criteria judges score:
- Site search (Pagefind)
- WCAG accessibility per W3C WAI — real alt text, contrast, keyboard nav, landmarks
- Mobile friendly
- Cross-browser: Chrome, Firefox, Safari, Edge
- Clear prioritization of key content; consistent contrast/repetition/alignment/grouping

## Stack
- Astro (static output) + Tailwind CSS v4
- Pagefind for search — build script is `astro build && pagefind --site dist`
- Deployed to Cloudflare Pages from the team GitHub repo
- Heavy media (flight video, hi-res photos) hosted on the team Nextcloud server,
  embedded via share links. Small/critical assets are bundled in the repo.
  Never commit large video files to Git.

## Content collections (src/content.config.ts)
- `vehicles` — name, year, status (active|retired), specs {wingspan, MTOW,
  endurance, propulsion}, heroImage, gallery
- `log` — date, title, body, image, subsystem (tag)
- `sponsors` — name, tier, logo, url
- `team` — name, role, subsystem, photo

Subsystems (used as tags and as the homepage card grid):
airframe, avionics, autonomy, imaging, payload, ground control station

## Conventions
- Every image needs descriptive alt text. If the actual image content is unknown,
  write `TODO: alt` — do not invent a description.
- Hero video: poster image first, muted/looped/playsinline, no video below 768px,
  respect `prefers-reduced-motion`, gradient scrim so overlay text meets WCAG AA.
- Retired vehicles stay published. The archive is part of the deliverable.
- Prefer editing content files over editing components. The next webmaster is a
  student who may not know Astro.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build + Pagefind index. Run this after any change
  to content collections; schema errors surface here.

## Working agreements
- Run `npm run build` before considering a task done.
- Commit after each completed task with a clear message.
- Ask before adding dependencies.