import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Replaces the `docs` collection Docus defines for this repository's own
    // content/ folder, which only holds the landing page (served by Docus'
    // `landing` collection, left untouched here).
    //
    // The Form documentation is authored in the package repository and imported
    // from it at build time, so these pages are served by this app under /form
    // rather than proxied to a second deployment. The clone is cached in
    // .data/content and keyed by the remote hash, so a build only re-downloads
    // when the branch moves — but the docs are a build input now: a docs change
    // in inertify/form only goes live once this site is rebuilt.
    docs: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/inertify/form',
        include: 'docs/content/**',
        // The package's own landing page. It is a marketing hero built on a
        // component that lives in that app, and this site already covers the
        // same ground, so /form redirects to the first page (see nuxt.config).
        exclude: ['docs/content/index.md'],
        // Without this the pages would be mounted at the static part of
        // `include`, i.e. /docs/content/….
        prefix: '/form',
      },
      // Mirrors the schema Docus declares for its own `docs` collection so the
      // page header keeps rendering frontmatter `links`.
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional(),
        })).optional(),
      }),
    }),
  },
})
