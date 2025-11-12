# Salinas Soccer Academy — Next.js 14 Starter

This scaffold contains a Next.js 14 (App Router) website for Salinas Soccer Academy with:
- Browser-language automatic locale selection (EN / ES / FR / AR)
- Tailwind CSS
- Image placeholders in `/public/images` — replace them with your real or AI-generated images
- Your uploaded logo copied to `/public/salog.jfif`

## Run locally

1. Install dependencies:
```bash
npm install
# or
yarn
```

2. Start dev server:
```bash
npm run dev
```

3. Open http://localhost:3000 — the site will redirect to a locale based on your browser language.

## Folder notes

- `app/[lang]/page.tsx` — main localized page (EN/ES/FR/AR supported)
- `locales/*.json` — translations
- `public/salog.jfif` — your uploaded logo (already copied)
- `public/images/*` — placeholders to replace later

## Build / Deploy

This project uses standard Next.js build. Deploy to Vercel or any Node hosting that supports Next.js 14.

