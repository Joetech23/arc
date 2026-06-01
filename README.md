# Arcmarshal Dzine Koncept — Corporate Website

Premium marketing website for **Arcmarshal Dzine Koncept Nig. Ltd.**, a design &
construction company based in Kurudu, Abuja. Built by **Eaglescroft**.

> **Design • Build • Inspire**

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom brand tokens (navy `#0F1E2E`, gold `#C5A24A`)
- **Framer Motion** — scroll reveals, parallax, count-up, page motion
- **React Hook Form + Zod** — form validation
- **EmailJS** — contact & quote form delivery (no backend required)
- **Static export** (`output: "export"`) — deploys to any static host (Hostinger)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & Deploy (static)

```bash
npm run build      # outputs static site to /out (also generates sitemap + robots.txt)
```

Upload the contents of **`/out`** to your host's `public_html` (Hostinger).
No Node server is required on the host.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About / Mission / Values |
| `/services` | All services |
| `/services/[slug]` | 7 service detail pages |
| `/portfolio` | Filterable projects grid |
| `/contact` | Contact form + Google Map + WhatsApp |
| `/quote` | Quote request form |
| `/privacy-policy` | Privacy policy |

## Configuration

### Environment variables (`.env.local`)

Copy `.env.example` → `.env.local` and fill in:

```
SITE_URL=https://arcmarshaldzine.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_GSC_VERIFICATION=
```

## SEO

Implemented and verified:

- **Favicon** — `src/app/icon.svg` (brand mark). Apple touch icon
  (`src/app/apple-icon.png`) and PWA icons (`public/icon-512.png`) are
  generated from the same mark.
- **Open Graph / Twitter** — `src/app/opengraph-image.png` (1200×630) is
  auto-linked as `og:image` + `twitter:image` for rich social-share previews.
- **Per-page metadata** — unique `<title>`, description and `rel="canonical"`
  on every route.
- **Structured data** — `GeneralContractor` JSON-LD (name, logo, image, address
  in Kurudu/Abuja, `areaServed` across the 5 states, `sameAs` socials).
- **Sitemap & robots** — `sitemap.xml` + `robots.txt` auto-generated on build
  (`next-sitemap`), with asset routes excluded and per-page priorities.
- **Web manifest + theme colour** — `manifest.webmanifest`, theme `#0F1E2E`.

### Google Search Console

1. In Search Console choose **URL-prefix** property → **HTML tag** verification.
2. Copy the `content="..."` token and put it in `.env.local`:
   `NEXT_PUBLIC_GSC_VERIFICATION=<token>`
3. Rebuild & redeploy. The `<meta name="google-site-verification">` tag is then
   emitted site-wide. Verify, then **submit `https://arcmarshaldzine.com/sitemap.xml`**.

> **Build note:** fonts are loaded via `next/font/google` and fetched at build
> time. On a slow/unstable connection the fetch can occasionally time out — if a
> build fails with `NextFontError`, simply re-run `npm run build` (the font is
> cached in `.next/cache` after the first success).

> **Forms work without EmailJS too:** until the keys above are filled in, the
> Contact and Quote forms gracefully fall back to opening the visitor's email
> client (pre-addressed to `arcmarshal@gmail.com`). Add the EmailJS keys to
> enable silent, in-page submissions.

### Where to edit content

| What | File |
|------|------|
| Business info, phone, email, socials, stats | `src/lib/site.ts` |
| Service descriptions & features | `src/lib/services.ts` |
| Portfolio projects | `src/lib/projects.ts` |
| Brand colours / fonts | `tailwind.config.ts` |
| Logo | `public/arcmarshal-logo.png` |

## Client TODO (swap placeholders for real assets)

- [ ] Replace Unsplash placeholder images in `src/lib/projects.ts`,
      `src/lib/services.ts` and section components with the client's real
      project photos.
- [ ] Update real testimonials in `src/components/home/Testimonials.tsx`.
- [ ] Confirm stats in `src/lib/site.ts` (years, projects, clients).
- [ ] Add secondary phone number once provided.
- [ ] Set live social media URLs in `src/lib/site.ts`.
- [ ] Create EmailJS account + templates, add keys to `.env.local`.
- [ ] Confirm final domain.

---

Built by [Eaglescroft](https://eaglescroft.com.ng).
