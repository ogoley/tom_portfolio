# SEO — Tom Ogoley Portfolio

## Honest Take First

This is a professional portfolio, not a business trying to rank for "retirement plan wholesaler."
The realistic SEO goal is: **when someone Googles "Tom Ogoley," this site is the first result.**
That's very achievable and worth doing. Ranking for generic industry terms is not worth chasing.

---

## What's Already Done

- **Page title and meta description** — set in Sanity under Site Settings, pulled into the `<head>` automatically
- **Open Graph tags** — when someone shares the URL on LinkedIn, it shows a title and description
- **Twitter/X card** — same idea for Twitter
- **Canonical URL** — tells Google the official URL for the page, prevents duplicate content issues
- **Semantic HTML** — the page uses proper `<h1>`, `<section>`, `<nav>` etc.
- **Fast hosting** — Vercel's CDN serves from edge locations close to the visitor

---

## Easy Wins — Worth Doing

### 1. robots.txt
Tells Google's crawler it's allowed to index the site. Without it Google still crawls, but it's good practice.

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://tom.ogoley.com/sitemap.xml
```

### 2. Sitemap
Tells Google what pages exist. For a one-page site this is simple.

Create `src/app/sitemap.ts`:
```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tom.ogoley.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```
Next.js serves this automatically at `/sitemap.xml`.

### 3. Structured Data (JSON-LD)
This is the biggest win. It tells Google explicitly "this page is about a person named Tom Ogoley."
Google may show enhanced results and will definitely understand the page better.

Add a `<script>` tag in `layout.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tom Ogoley",
  "jobTitle": "External Wholesaler",
  "url": "https://tom.ogoley.com",
  "email": "tom@ogoley.com",
  "sameAs": ["https://www.linkedin.com/in/thomas-ogoley-46a42743/"]
}
```

### 4. Open Graph Image
Right now sharing the URL on LinkedIn shows no image. Adding a 1200x630px OG image
(a branded card with Tom's name and title) makes shared links look much more professional.

Create `public/og-image.png` and add to `generateMetadata`:
```ts
openGraph: {
  images: [{ url: '/og-image.png', width: 1200, height: 630 }]
}
```

### 5. Alt text on headshot
Already has `alt="Tom Ogoley headshot"` — good. Google reads this.

---

## Submit to Google

Once the domain is live and indexed:
1. Go to **Google Search Console** (search.google.com/search-console)
2. Add `tom.ogoley.com` as a property
3. Verify ownership (Vercel makes this easy — they support the meta tag method)
4. Submit the sitemap URL: `https://tom.ogoley.com/sitemap.xml`
5. Request indexing for the homepage

This gets Google to crawl the site immediately rather than waiting weeks.

---

## Not Worth Doing for This Site

- **Blog / content marketing** — would help SEO but Tom isn't trying to rank for keywords
- **Backlink building** — not relevant for a personal portfolio
- **Page speed optimization** — already fast on Vercel, diminishing returns
- **Multi-page structure** — one page is fine, Google handles it well

---

## Priority Order

1. `robots.txt` — 5 minutes, do it
2. Sitemap — 10 minutes, do it
3. Google Search Console — 15 minutes, do it after deploy
4. Structured data (JSON-LD) — 30 minutes, worth doing
5. OG image — 1 hour, nice to have
