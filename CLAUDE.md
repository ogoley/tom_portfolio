# CLAUDE.md — Tom Ogoley Portfolio

## Project Overview

Professional portfolio site for Tom Ogoley (External Wholesaler, Retirement Plans). Built with Next.js 15 App Router and TypeScript. The goal is to allow Tom's brother to edit content independently via **Sanity CMS** (in progress — see Sanity section below).

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.3.0 (App Router) |
| React | 19.1.0 |
| TypeScript | 5.8.3 (strict) |
| Tailwind CSS | 3.4.17 |
| Package manager | npm |

## Dev Commands

```bash
npm run dev      # Start local dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Content Architecture

All site content lives in **`src/content/site.ts`** as a single typed object (`SiteContent`). Types are defined in `src/content/schema.ts`. Content is loaded via `getSiteContent()` in `src/lib/`.

**Sections:**
- `site` — metadata, domain, LinkedIn, resume PDF link
- `hero` — eyebrow, title, subtitle, summary, CTAs, metrics
- `about` — paragraphs and highlights
- `experience[]` — company, role, period, achievements
- `projects[]` — name, description, impact, stack tags
- `skills[]` — grouped skill lists
- `contact` — email, location, availability

To update content without Sanity: edit `src/content/site.ts` directly.

## Sanity CMS Integration (Planned)

The plan is to migrate content from `site.ts` into **Sanity** so Tom's brother can edit the site via Sanity Studio without touching code.

### Sanity MCP Setup (for Claude Code)

The Sanity MCP server lets Claude interact directly with Sanity's Content Lake. To configure it:

1. **Install the Sanity MCP server** — Claude Code connects to it via settings.
2. **Add to `.claude/settings.json`:**
   ```json
   {
     "mcpServers": {
       "sanity": {
         "command": "npx",
         "args": ["-y", "@sanity/mcp-server@latest"],
         "env": {
           "SANITY_PROJECT_ID": "<your-project-id>",
           "SANITY_DATASET": "production",
           "SANITY_API_TOKEN": "<your-token>"
         }
       }
     }
   }
   ```
3. Get credentials from **manage.sanity.io** after creating a project.
4. Token needs **Editor** permissions for content writes.

### Migration Plan (site.ts → Sanity)

When ready to connect Sanity:
1. Create a Sanity project at manage.sanity.io
2. Define Sanity schemas matching `src/content/schema.ts` types
3. Migrate current `site.ts` data into Sanity as the initial content
4. Replace `getSiteContent()` with a Sanity GROQ fetch (using `next-sanity` or `@sanity/client`)
5. Deploy Sanity Studio so Tom's brother can edit via browser

## File Map

```
src/
  app/               # Next.js pages (layout.tsx, page.tsx)
  components/        # Section components (hero, about, experience, projects, skills, contact, header, footer)
  content/
    site.ts          # ALL editable content lives here
    schema.ts        # TypeScript types for content
  lib/               # getSiteContent() utility
public/
  tom-ogoley-headshot.jpg
  Tom-Ogoley-Resume.pdf
```

## Conventions

- Path alias `@/*` maps to `./src/*`
- Dark mode uses Tailwind `class` strategy with CSS variables
- Fonts: Manrope (sans) and Newsreader (serif) via Google Fonts
- Do not add complexity beyond what is needed — this is a simple marketing/portfolio site
