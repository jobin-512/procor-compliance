# Procor website (Next.js + TypeScript, static export)

Production site for **Procor Compliance Solutions LLP** — https://procor.co.in

## Quick start
```bash
npm install
npm run dev             # http://localhost:3000
npm run build           # static site in ./out  (upload ./out to the web root)
npm run build:preview   # same, but shows [CONTENT NEEDED FROM PROCOR] markers for review
npm run typecheck
```
Requires Node 18.18+ (tested on Node 22, Next.js 15, TypeScript 5.8).

## Deploying to the current Apache/PHP host
1. `npm run build`
2. Upload **the contents of `out/`** to the web root (including the hidden `.htaccess` and `api/lead.php`).
3. **Merge, don't overwrite, `.htaccess`:** the old site serves blog articles at `/blogs/<slug>`. Copy the
   old site's rewrite rule for `/blogs/` into the generated `.htaccess` (section 3) and keep the old blog
   files until every article is migrated (see below).
4. Send a test lead from `/contact/` and from a `/resources/...` page. If your host blocks PHP `mail()`,
   switch `public/api/lead.php` to SMTP (PHPMailer) or your CRM's API. Leads are also appended to
   `procor-leads.csv` one level **above** the web root.
5. Submit `https://procor.co.in/sitemap.xml` in Google Search Console.

## Project structure
```
app/                     Routes (App Router). One folder = one URL, all with trailing slashes.
  services/[slug]/       6 service pages, generated from lib/services.ts
  insights/[slug]/       Article template, generated from content/insights/*.md
  resources/[slug]/      Lead-magnet landing pages, from lib/resources.ts
  sitemap.ts             Generates /sitemap.xml
components/              Navbar, Footer, PageHero, ServiceCard, ProcessTimeline, Team, Industries, FAQ,
                         HeroCalendar, LeadForm (ContactForm + LeadMagnetForm), Sections, JsonLd …
lib/                     site.ts (contact details, Calendly), services.ts, content.ts, posts.ts,
                         resources.ts, seo.ts (per-page metadata helper)
content/insights/        Articles as Markdown with front matter
public/                  assets/, downloads/ (PDFs), api/lead.php, robots.txt, favicon
scripts/gen-htaccess.mjs Generates public/.htaccess before each build (redirects, 404, caching)
```

## Common edits
| Task | Where |
|---|---|
| Phone, email, address, Calendly link | `lib/site.ts` |
| Service copy, FAQs, related services | `lib/services.ts` |
| Home copy (problems, why Procor, FAQ), client logos, team, industries | `lib/content.ts` |
| Add an article | new `.md` file in `content/insights/` |
| Add a lead magnet | add PDF to `public/downloads/`, entry in `lib/resources.ts` |

## Client logos
15 client logos live in `public/assets/clients/` as single-colour alpha masks (tinted by CSS, so they follow
light/dark mode). Names and display sizes are in `CLIENT_LOGOS` in `lib/content.ts`. To add a logo, save a
transparent PNG mask there and add an entry.

## Leadership photos
Team members are in `TEAM` in `lib/content.ts`. To add a photo (e.g. Kanika Magu), save a 4:5 portrait as
`public/assets/team/<slug>-800.webp` (800x1000) and `<slug>-480.webp` (480x600), then set `photo: '<slug>'`.
Until then the card shows the person's initials.

## Procor HRMS cross-link
`HRMS` in `lib/site.ts` holds the URL, entity name, verified figures and module list. Every outbound link uses
`hrmsLink(placement)`, which adds UTM tags (utm_content = nav, nav_dropdown, home_section, service_…, footer,
mobile_nav, short_link) so procorhrms.com analytics can attribute visits. `procor.co.in/hrms` is a shareable
short link (302 in `.htaccess`).

## Migrating the old blog articles
All seven articles found on the old blog have been migrated (September 2026). To add another old one:
1. Paste the article body (Markdown) below the front matter, set `date: yyyy-mm-dd`, and remove the `needed:` line.
2. `npm run build`. The article page is generated at `/insights/<slug>/`, listings switch to it, it is
   added to the sitemap, and `.htaccess` gets a 301 from `/blogs/<slug>` automatically.

## Placeholders
Anything Procor still has to supply is wrapped in `<Needed />` (or a `needed` field). It is hidden in
production builds and shown by `npm run build:preview`. Current list: client logos & verified numbers,
leadership & company story, business hours, sectors served, LLPIN/GSTIN,
accounting platforms, Labour Codes advisory scope, privacy policy & terms text, old article bodies.

## Lead magnets
PDFs in `public/downloads/` were generated from the scripts in `/pdf-source` (Python + ReportLab); run them from inside `pdf-source/`.
Re-run them when dates or rules change (at least once a year). The download is never withheld: if the
lead fails to send, the visitor still gets the file.

## Analytics
Forms fire `gtag('event','generate_lead', …)` when GA4 is installed. Add the GA4/GTM snippet in `app/layout.tsx`.

## Logo files
| File | Use |
|---|---|
| `public/assets/procor-logo.svg` | Header and footer (vector, ~11 KB gzipped). Master artwork, cropped and path-optimised. |
| `public/assets/procor-logo.png` | 1504×695 transparent PNG for schema.org `logo`, email signatures, and anywhere SVG isn't accepted. |
| `pdf-source/logo-print.jpg` | Flattened 752px copy used inside the PDFs (keeps file size down). |
