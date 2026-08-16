# Inertify landing site

The landing page for the Inertify package family. It is a standalone [Docus](https://docus.dev) application that reuses the styles, palette, and typography of the Inertify Form documentation site.

The whole page is a single content file, `content/index.md`. The package family — names, taglines, statuses, and links — is declared once under `packages` in `app/app.config.ts` and rendered by two components:

- `app/components/PackageShowcase.vue` — the hero card
- `app/components/PackageGrid.vue` — the packages section

Add a package by appending an entry to that array; `status: 'available'` gives it a link and a highlighted card, `status: 'planned'` marks it as coming soon.

## Local development

Use a Nuxt-supported Node.js release: 22.19+, 24.11+, or 26+.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000` by default.

Build and preview the production output with:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Import the repository into Vercel. Vercel detects Nuxt and uses `npm run build`; no custom output directory or `vercel.json` is required.

After attaching a custom domain, set `NUXT_SITE_URL` to its canonical URL so sitemap, Open Graph, and LLM metadata use that domain. Preview deployments are detected automatically.
