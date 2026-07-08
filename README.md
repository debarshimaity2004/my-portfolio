# Debarshi Maity — Developer Portfolio

A dark, terminal-inspired developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Deploys with zero config to Vercel or Netlify.

## Tech stack

- **Next.js 16** (App Router, React Server Components) — fast static generation, built-in image/font optimization, and file-based metadata/OG image generation.
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme config in `src/app/globals.css`)
- No client-side animation libraries — transitions are plain CSS for a fast, lean bundle.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, global <head> metadata
    page.tsx             # Assembles all sections
    globals.css          # Tailwind import + theme tokens (colors, fonts)
    icon.tsx              # Generated favicon (next/og)
    apple-icon.tsx         # Generated apple touch icon
    opengraph-image.tsx    # Generated OG/social share image
    robots.ts / sitemap.ts # SEO file conventions
  components/
    Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx,
    Projects.tsx, ProjectCard.tsx, Experience.tsx,
    Contact.tsx, Footer.tsx, SectionHeading.tsx
  data/
    portfolio.ts          # ALL editable content lives here (see below)
public/
  images/profile.png       # Profile photo used in the hero section
```

## Editing content

Everything you'd want to change day-to-day — name, bio, skills, projects, achievements, social links, resume URL — lives in **`src/data/portfolio.ts`**. Components read from this file; you shouldn't need to touch component code to update copy.

### Placeholders to fill in before deploying

Search the codebase for these markers:

- `[ADD_REPO_LINK]` in `src/data/portfolio.ts` — GitHub repo links for CollabCanvas, Vibecode Editor, and TrustVision-AI.
- `[ADD_DEPLOYED_URL]` in `src/data/portfolio.ts` (`siteConfig.url`) — replace with your real deployed domain once you have one; it's used for canonical URLs, `sitemap.xml`, and Open Graph tags.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deployment

### Render (recommended)

A `render.yaml` blueprint is included, so Render can pick up the service config automatically.

1. Push this repo to GitHub.
2. In the Render dashboard, click **New > Blueprint** and point it at this repo — it reads `render.yaml` and creates the web service for you (build command `npm install && npm run build`, start command `npm start`).
   - Alternatively, **New > Web Service** manually with: Runtime `Node`, Build Command `npm install && npm run build`, Start Command `npm start`.
3. Next.js's `next start` (used by `npm start`) automatically binds to the `PORT` env var Render provides — no extra config needed.
4. Once deployed, update `siteConfig.url` in `src/data/portfolio.ts` with your `*.onrender.com` URL (or custom domain) and redeploy so OG/sitemap URLs are correct.

> Note: Render's free tier spins down idle services, so the first request after inactivity will be slow (cold start).

### Vercel / Netlify

This is a standard Next.js app, so it also deploys with zero config to [Vercel](https://vercel.com/new) or [Netlify](https://netlify.com) (via `@netlify/plugin-nextjs`) if you want a serverless/edge platform instead.

## Replacing the profile photo

Drop a new image at `public/images/profile.png` (or update the path in `src/components/Hero.tsx`) — `next/image` handles resizing/optimization automatically.
