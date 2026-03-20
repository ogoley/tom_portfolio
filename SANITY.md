# How Sanity Works — Tom Portfolio

## The Three Pieces

```
manage.sanity.io          tom-ogoley.sanity.studio          tom.ogoley.com
─────────────────         ────────────────────────          ──────────────
Your Sanity account  →    The editing interface      →      The live site
(project dashboard)       (where Tom edits content)         (what visitors see)
```

---

## 1. manage.sanity.io — Your Account Dashboard

This is Sanity's backend — think of it like the AWS console or a control panel.

- Where you created the project and got a **Project ID** (`lje9jmuz`)
- Where you manage API tokens, webhooks, and team members
- You don't edit content here — it's just admin/settings
- The actual content data ("Content Lake") lives on Sanity's servers tied to your project ID

---

## 2. Sanity Studio — `tom-ogoley.sanity.studio`

This is the **editor UI** — the thing Tom's brother uses.

- It's a React app that Sanity generates from your schema definitions
- **The schemas live in your codebase** (`sanity/schemas/`) — that's why we have to redeploy the Studio whenever we change what fields are available
- When Tom's brother edits a field and hits **Publish**, the data is saved to Sanity's Content Lake (their hosted database)
- The Studio is deployed separately from the main site — `npx sanity deploy` pushes it to `*.sanity.studio`

**Key point:** The Studio is just a UI for editing data. It has no knowledge of the website itself.

---

## 3. tom.ogoley.com — The Live Site

This is the Next.js app hosted on Vercel.

- On every page request, it calls Sanity's API with a GROQ query and fetches the latest content
- GROQ is Sanity's query language (like SQL but for their database)
- The site has **no copy of the content** — it always reads live from Sanity
- When Tom's brother publishes a change, Sanity fires a **webhook** → hits `/api/revalidate` on the site → Next.js clears its cache → next visitor sees updated content

---

## How a Content Change Flows

```
1. Brother edits text in Studio at tom-ogoley.sanity.studio
2. Clicks "Publish"
3. Sanity saves to Content Lake
4. Sanity fires webhook → POST tom.ogoley.com/api/revalidate
5. Next.js clears page cache
6. Next visitor loads tom.ogoley.com
7. Next.js fetches fresh content from Sanity API
8. Updated page is served
```

Total time from Publish to live: **a few seconds**

---

## What Lives Where

| Thing | Where it lives |
|---|---|
| Content (text, images, PDF) | Sanity's Content Lake (their servers) |
| Schema (what fields exist) | Your codebase — `sanity/schemas/` |
| Studio UI | `tom-ogoley.sanity.studio` (Sanity hosting) |
| Website code | GitHub → Vercel |
| API token / secrets | `.env.local` (local) + Vercel env vars |

---

## What Requires a Redeploy of What

| Change | What to redeploy |
|---|---|
| Add/remove a field in the Studio | `npx sanity deploy` (Studio only) |
| Change site design or layout | Push to GitHub (Vercel redeploys site) |
| Update text, headshot, resume | Nothing — just Publish in Studio |
| Add a new API token | manage.sanity.io → update `.env.local` + Vercel |

---

## The API Token

The token in `.env.local` (`SANITY_REVALIDATE_SECRET`) is **not** a Sanity API token — it's a secret we made up to protect the `/api/revalidate` webhook endpoint so random people can't clear the site's cache.

The actual Sanity read access is public (no token needed) because the portfolio content isn't private. The Sanity API token in `.claude/settings.json` is only used by Claude to interact with Sanity directly during development.
