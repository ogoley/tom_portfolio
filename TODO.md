# Tom Ogoley Portfolio — Setup TODO

## Done
- [x] Next.js 15 project (App Router, TypeScript, Tailwind)
- [x] All site content in `src/content/site.ts`
- [x] Sanity schemas defined (`sanity/schemas/`)
- [x] Content migrated from `site.ts` into Sanity (production dataset)
- [x] `getSiteContent()` fetches live from Sanity via GROQ
- [x] On-demand revalidation API route (`/api/revalidate`)
- [x] `.env.local` and `.claude/settings.json` gitignored

## In Progress
- [ ] GitHub repo — create repo, push code
- [ ] Deploy to Vercel — connect GitHub repo, set env vars
- [ ] Configure `tom.ogoley.com` subdomain — DNS + Vercel custom domain
- [ ] Deploy Sanity Studio — `npx sanity login` then `npx sanity deploy`
- [ ] Sanity webhook — add revalidation URL after Vercel deploy URL is known

## Done is
- Brother (Tom) can go to `https://tom-ogoley.sanity.studio`, edit any content,
  click Publish, and see changes live on `https://tom.ogoley.com` within seconds
- No redeployment required for content changes
- Joe can update layout/design by pushing to GitHub (Vercel auto-deploys)

---

## Step-by-step: GitHub + Vercel + Domain

### 1. GitHub
1. Create a new **private** repo at github.com (e.g. `tomogoley`)
2. In this folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/tomogoley.git
   git push -u origin main
   ```

### 2. Vercel
1. Go to vercel.com → New Project → Import from GitHub
2. Select the repo — Vercel auto-detects Next.js, no config needed
3. Before deploying, add this environment variable:
   - `SANITY_REVALIDATE_SECRET` = *(value from `.env.local`)*
4. Deploy

### 3. Domain (`tom.ogoley.com`)
1. In Vercel: Project → Settings → Domains → Add `tom.ogoley.com`
2. Vercel will show a DNS record to add (usually a CNAME)
3. At your domain registrar, add that DNS record for the `tom` subdomain

### 4. Sanity Studio
```bash
npx sanity login    # opens browser — sign in
npx sanity deploy   # deploys to https://tom-ogoley.sanity.studio
```

### 5. Sanity Webhook
1. manage.sanity.io → project → API → Webhooks → Add webhook
2. URL: `https://tom.ogoley.com/api/revalidate?secret=PASTE_SECRET_HERE`
3. Triggers: create, update, delete
4. Save

### Security Checklist
- [ ] `.env.local` never committed (already in `.gitignore`)
- [ ] `.claude/settings.json` never committed (already in `.gitignore`)
- [ ] `SANITY_REVALIDATE_SECRET` set in Vercel env vars (not hardcoded)
- [ ] Sanity API token only in `.claude/settings.json` and Vercel env vars
